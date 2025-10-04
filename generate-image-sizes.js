const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [300, 600, 900];
const publicDir = path.join(__dirname, 'public');
const outputDir = path.join(__dirname, 'public', 'images');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process PNG files
async function processImages() {
  const files = fs.readdirSync(publicDir);
  
  for (const file of files) {
    if (path.extname(file).toLowerCase() === '.png') {
      const filePath = path.join(publicDir, file);
      const fileName = path.parse(file).name;
      
      console.log(`Processing ${file}...`);
      
      try {
        // Generate WebP versions in different sizes
        for (const size of sizes) {
          const outputWebP = path.join(outputDir, `${fileName}-${size}w.webp`);
          await sharp(filePath)
            .resize(size, null, { 
              withoutEnlargement: true,
              fit: 'inside'
            })
            .webp({ quality: 80 })
            .toFile(outputWebP);
            
          console.log(`Created ${outputWebP}`);
        }
        
        // Generate fallback PNG versions in different sizes
        for (const size of sizes) {
          const outputPNG = path.join(outputDir, `${fileName}-${size}w.png`);
          await sharp(filePath)
            .resize(size, null, {
              withoutEnlargement: true,
              fit: 'inside'
            })
            .png({ quality: 80 })
            .toFile(outputPNG);
            
          console.log(`Created ${outputPNG}`);
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  }
}

processImages().then(() => {
  console.log('Image processing complete!');
}).catch(console.error);

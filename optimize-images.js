const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'public');

// Process all PNG files
fs.readdirSync(imageDir).forEach(async file => {
  if (path.extname(file).toLowerCase() === '.png') {
    const filePath = path.join(imageDir, file);
    const outputPath = path.join(imageDir, `optimized-${file}`);
    
    try {
      // Get original file size
      const originalStats = fs.statSync(filePath);
      const originalSize = originalStats.size;

      // Optimize the image
      await sharp(filePath)
        .png({
          quality: 85,
          compressionLevel: 9,
          palette: true
        })
        .toFile(outputPath);

      // Get optimized file size
      const optimizedStats = fs.statSync(outputPath);
      const optimizedSize = optimizedStats.size;
      const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);

      // Replace original with optimized version if optimization was successful
      if (optimizedSize < originalSize) {
        fs.unlinkSync(filePath);
        fs.renameSync(outputPath, filePath);
        console.log(`✓ ${file}: Reduced by ${reduction}% (${originalSize} → ${optimizedSize} bytes)`);
      } else {
        fs.unlinkSync(outputPath); // Remove optimized version if it's larger
        console.log(`ℹ ${file}: Already optimized (${originalSize} bytes)`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
});

const { optimize } = require('svgo');
const fs = require('fs');
const path = require('path');

const svgDir = path.join(__dirname, 'src', 'assets');

// SVGO configuration
const config = {
  multipass: true,
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    'mergeStyles',
    'inlineStyles',
    'minifyStyles',
    'removeUselessDefs',
    'cleanupNumericValues',
    'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'convertShapeToPath',
    'convertEllipseToCircle',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'convertPathData',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'mergePaths',
    'removeUnusedNS',
    'sortDefsChildren',
    'removeTitle',
    'removeDesc',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['data-name']
      }
    }
  ]
};

// Process all SVG files
fs.readdirSync(svgDir).forEach(file => {
  if (path.extname(file).toLowerCase() === '.svg') {
    const filePath = path.join(svgDir, file);
    const svg = fs.readFileSync(filePath, 'utf8');
    
    try {
      const result = optimize(svg, { path: filePath, ...config });
      
      if (result.error) {
        console.error(`Error optimizing ${file}:`, result.error);
        return;
      }

      // Calculate size reduction
      const originalSize = svg.length;
      const optimizedSize = result.data.length;
      const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);

      // Save optimized SVG
      fs.writeFileSync(filePath, result.data);
      console.log(`✓ ${file}: Reduced by ${reduction}% (${originalSize} → ${optimizedSize} bytes)`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
});

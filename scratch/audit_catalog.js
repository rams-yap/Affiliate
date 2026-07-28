const fs = require('fs');
const path = require('path');

// Read catalog.ts content
const catalogPath = path.join(__dirname, '../lib/catalog.ts');
const catalogContent = fs.readFileSync(catalogPath, 'utf8');

// Check all image references in catalog.ts
const imageMatches = catalogContent.match(/\/assets\/[a-zA-Z0-9_\-\.]+/g) || [];
const assetsDir = path.join(__dirname, '../public/assets');

console.log("--- AUDITING CATALOG ASSET IMAGES ---");
let missingImages = 0;
const uniqueImages = [...new Set(imageMatches)];
uniqueImages.forEach(imgRelPath => {
  const filename = imgRelPath.replace('/assets/', '');
  const fullPath = path.join(assetsDir, filename);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ MISSING IMAGE: ${imgRelPath}`);
    missingImages++;
  } else {
    console.log(`✓ Image exists: ${imgRelPath}`);
  }
});

// Check Amazon Affiliate URLs
console.log("\n--- AUDITING AMAZON AFFILIATE URLS ---");
const amazonUrlRegex = /amazonUrl:\s*"([^"]+)"/g;
let urlMatch;
let totalUrls = 0;
let invalidUrls = 0;
while ((urlMatch = amazonUrlRegex.exec(catalogContent)) !== null) {
  totalUrls++;
  const url = urlMatch[1];
  if (!url.includes('tag=pantryandpan-20')) {
    console.error(`❌ MISSING AFFILIATE TAG: ${url}`);
    invalidUrls++;
  } else if (!url.startsWith('https://www.amazon.com/')) {
    console.error(`❌ INVALID AMAZON URL: ${url}`);
    invalidUrls++;
  } else {
    console.log(`✓ Valid Amazon URL: ${url}`);
  }
}

// Summary
console.log("\n--- AUDIT RESULTS ---");
console.log(`Total Images Audited: ${uniqueImages.length} (Missing: ${missingImages})`);
console.log(`Total Amazon URLs Audited: ${totalUrls} (Invalid/Missing Tag: ${invalidUrls})`);

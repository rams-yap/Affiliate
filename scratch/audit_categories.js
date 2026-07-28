const fs = require('fs');
const path = require('path');

const catalogPath = path.join(__dirname, '../lib/catalog.ts');
const catalogContent = fs.readFileSync(catalogPath, 'utf8');

// Extract CATEGORIES and PRODUCTS count
const catMatches = catalogContent.match(/categoryKey:\s*"([^"]+)"/g) || [];
const categoryKeys = catMatches.map(m => m.replace(/categoryKey:\s*"/, '').replace('"', ''));

const catCounts = {};
categoryKeys.forEach(k => {
  catCounts[k] = (catCounts[k] || 0) + 1;
});

console.log("--- CATEGORY PRODUCT DISTRIBUTION ---");
console.table(catCounts);

// Check if any product has broken references
console.log("\n--- CHECKING GUIDES AND PRODUCT ID REFERENCES ---");
const productIdMatches = catalogContent.match(/id:\s*"([a-zA-Z0-9\-]+)"/g) || [];
const validProductIds = productIdMatches.map(m => m.replace(/id:\s*"/, '').replace('"', ''));

console.log(`Total Products in Catalog: ${validProductIds.length}`);
console.log("Product IDs:", validProductIds);

const fs = require('fs');
let fileText;
// Function to count the words in a data.txt file
function countWordsInFile(filePath) {
  try {
    fileText= fs.readFileSync(filePath, 'utf8');
    const words = fileText.split(/\s+/).filter(word => word.length > 0);
    return words.length;
  } catch (error) {
    console.error('Error reading the file:', error.message);
    return 0;
  }
}

const filePath = './data.txt'
const wordCount = countWordsInFile(filePath);
console.log('Total number of words in the data.txt file:', wordCount);

module.exports={
    wordCount,
    fileText
}

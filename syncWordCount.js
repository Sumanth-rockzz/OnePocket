const fs = require('fs');
let fileText;

// Refer asyncWordCount file for Asynchronous reading and it shows result in terminal;

//this below is Dummy synchronous for UI purpose only.
// Function to count the words in a data.txt file synchronously to display in UI(as we need to block code lines if we wanna display)-Dummy 
function countNoOfWordsInFile(filePath) {
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
const wordCount = countNoOfWordsInFile(filePath);
console.log('Total number of words in the data.txt file:', wordCount);

module.exports={
    wordCount,
    fileText
}

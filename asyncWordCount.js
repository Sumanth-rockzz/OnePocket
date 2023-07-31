const fs = require('fs');
// Function to count the words in a data.txt file Asynchronously
function countNoOfWordsInFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, fileText) => {
    if (err) {
      callback(err, null);
      return;
    }
    const words = fileText.split(/\s+/).filter(word => word.length>0);
    callback(null, words.length);
  });
}

const filePath = './data.txt';

countNoOfWordsInFile(filePath, (err, wordCount) => {
  if (err) {
    console.error('Error reading the file:', err.message);
    return;
  }
  console.log('Total number of words in the data.txt file:', wordCount);
});



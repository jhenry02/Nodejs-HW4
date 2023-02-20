var fs = require('fs');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
//Github Copilot was utilized in helping me construct this code
fs.readFile('news.txt', 'utf8', (Error, fileData) => {
    if (Error) {
        console.error(Error);
        return;
    }
    console.log(sentiment.analyze(fileData));
});
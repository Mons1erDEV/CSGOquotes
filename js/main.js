// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 


function getQuote(){
    $.getJSON('https://raw.githubusercontent.com/Mons1erDEV/CSGOquotes/main/json/quotes.json', function(data) {
    
    var objLength = Object.keys(data['quotes']).length;
    randNum = randomNumber(0,objLength);

    const quoteText = document.getElementById('quote');
    const quoteAutor = document.getElementById('autor');
    quoteText.textContent = '';
    quoteAutor.textContent = '';

    Object.keys(data).forEach(key => {
        var arrayQuote = data[key][randNum];
        quoteText.textContent += arrayQuote['quote'];
        quoteAutor.textContent += arrayQuote['autor'];
        });
        
    });
}

getQuote();

// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

$.getJSON('https://raw.githubusercontent.com/Mons1erDEV/CSGOquotes/main/quotes.json', function(data) {
    //console.log(typeof(data));
    randNum = randomNumber(0,2);
    const quoteText = document.getElementById('quote');
    const quoteAutor = document.getElementById('autor');


    Object.keys(data).forEach(key => {
        // EL NUMERO DE LA POSICION TIENE QUE SER UN RANDOM ENTRE 1 Y X
        
        var arrayQuote = data[key][randNum];
        quoteText.textContent += arrayQuote['quote'];
        quoteAutor.textContent += arrayQuote['autor'];

        console.log(arrayQuote['quote']);
        console.log(arrayQuote['autor']);
        // arrayQuote.forEach(element => {
        //     console.log(element);
        // });
    });
    
});
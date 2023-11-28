// const api_url = "https://api.quotable.io/random"
// const quote = document.getElementById('quote')
// const author = document.getElementById('author')

// async function getquote(url) {
//     const response = await fetch(url);
//     let data = await response.json();
//     quote.innerHTML = data.content;
//     author.innerHTML = data.author;

// };

// getquote(api_url);


// function tweet() {
//     window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "tweet windoqs", "width=600", "height=300");
    
// }
// function reset() {
//     const reset = document.getElementById('quote') = ''
//     const au = document.getElementById('author') = ''
//     console.log(reset)
    
// }



const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Believe you can and you're halfway there.",
    "Strive not to be a success, but rather to be of value.",
    "The only way to do great work is to love what you do.",
    "Your time is limited, don't waste it living someone else's life."
];

function generatequote() {
    const quoteText = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}

function reset() {
    const quoteText = document.getElementById("quote");
    quoteText.textContent = "This is a quote.";
}


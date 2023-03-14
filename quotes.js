// target the elements with a class of quote and author
const text = document.querySelector('.quote');
const auth = document.querySelector('.author');

// Define an asynchronous function that fetches a random quote from an API
const getQuote = async () => {
    const res = await fetch(`https://type.fit/api/quotes`);
    const quotes = await res.json();
    const num = Math.floor(Math.random() * quotes.length);
    const item = quotes[num];

    // Store the new quote in localStorage
    localStorage.setItem('QUOTE', JSON.stringify(item));

    // Set the text content of the HTML elements to the new quote and author
    const quote = item.text;
    const author = item.author;
    text.innerText = `" ${quote} "`;
    auth.innerText = author;

    // If the author is null, display "Anonymous"
    if (author === null) {
        auth.innerText = "Anonymous";
    }
};

// Define a function to get the stored quote from localStorage, or fetch a new quote if there is no stored quote
function getdata() {
    if ("QUOTE" in localStorage) {
        const item = JSON.parse(localStorage.getItem('QUOTE'));
        const quote = item.text;
        const author = item.author;
        text.innerText = `" ${quote} "`;
        auth.innerText = author;

        // If the author is null, display "Anonymous"
        if (author === null) {
            auth.innerText = "Anonymous";
        }
    } else {
        getQuote();
    }
}

// Call getdata function once on page load to display a stored quote, or fetch a new quote
setTimeout(getdata, 0);

// Call getQuote function every 60 seconds to update the displayed quote
setInterval(getQuote, 60000);
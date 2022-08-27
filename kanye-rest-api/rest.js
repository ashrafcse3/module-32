function getQuote() {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

function displayQuote(quote) {
    const containerDiv = document.getElementById('quote-container');

    containerDiv.innerHTML = `"${quote.quote}"`;
    containerDiv.classList.add('text-7xl', 'text-emerald-500', 'tracking-wide');
}
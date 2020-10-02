const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const writer = document.querySelector('.writer');


const quotes = [
    {
        quot:"life is okay if you have a dorrito",
        writ:"john doe"
    },
    {
        quot:"life is not okay if you have a dorrito",
        writ:"john doe2"
    },
    {
        quot:"life is okay if you have not a dorrito",
        writ:"john doe3"
    }
];


btn.addEventListener ("click", changeQuote);

function changeQuote() {
    for (i=0; i < quotes.length; i++) {
        quote.textContent = quotes[i].quot;
        writer.textContent = quotes[i].writ;
    }
   
}
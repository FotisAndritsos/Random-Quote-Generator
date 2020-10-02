const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const writer = document.querySelector('.writer');


const quotes = [
    {
        quot:"life is okay if you have a dorrito",
        writ:"fotis andritsos"
    },
    {
        quot:"burgers are okay too..",
        writ:"andritsos fotis"
    },
    {
        quot:"well we cant compare ice cream though...",
        writ:"fotis"
    },
    {
        quot:"trust the proccess",
        writ:"yohan craus"
    },
    {
        quot:"one time you fall,get up ten",
        writ:"father to son"
    }
];


btn.addEventListener ("click", changeQuote);

function changeQuote() {
        ind = Math.floor(Math.random() * quotes.length);
        quote.textContent = quotes[ind].quot;
        writer.textContent = quotes[ind].writ;  
}
// mobile menu to be finished
var mobileMenuBtn = document.getElementById('mobileMenuBtn');

mobileMenuBtn.addEventListener('click', displayMobileMenu);

mobileMenuBtn.addEventListener('click', hideMobileMenu);

function displayMobileMenu() {
    document.getElementById('mobileLinks').style.display = "block";
}
function hideMobileMenu() {
    document.getElementById('mobileLinks').style.display = "none";
}

// Will use the code from the Quote mahine assignment to make a carousel with various images and text to display on the slides
var quotes = [
    { author: "Gandalf", quote: "A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to." }, 
    { author: "Bilbo Baggins", quote: "I don't know half of you half as well as I should like, and I like less than half of you half as well as you deserve." }, 
    { author: "Lady Galadriel", quote: "Even the smallest person can change the course of history." }, 
    { author: "Gandalf", quote: "YOU SHALL NOT PASS!" }, 
]; 

var bgImg = [
    "hero-img-1.jpg", 
    "hero-img-2.jpg", 
    "hero-img-3.jpg", 
    "hero-img-4.jpg", 
];

var quoteIndex = 0;
// document.getElementById('author').innerHTML = quotes[quoteIndex].author;
// document.getElementById('quote').innerHTML = quotes[quoteIndex].quote;

var btnForward = document.getElementById('btn-forward');
var btnBack = document.getElementById('btn-back');

btnForward.addEventListener('click', next);
btnBack.addEventListener('click', prev);


var timerID = setInterval(next, 10000);

function next() {
    quoteIndex++;

    if ( quoteIndex == quotes.length ) { // if on the last quote
        quoteIndex = 0; // go back to first quote
    }

    // document.getElementById('author').innerHTML = quotes[quoteIndex].author;
    // document.getElementById('quote').innerHTML = quotes[quoteIndex].quote;
    document.getElementById('test').style.backgroundImage = "url(./img/" + bgImg[quoteIndex] + ")";
    
}

function prev() {
    quoteIndex--;

    if ( quoteIndex < 0 ) { // if on the first quote
        quoteIndex = quotes.length -1; // go back to last quote
    }

    // document.getElementById('author').innerHTML = quotes[quoteIndex].author;
    // document.getElementById('quote').innerHTML = quotes[quoteIndex].quote;
    document.getElementById('test').style.backgroundImage = "url(./img/" + bgImg[quoteIndex] + ")";
}

// End of carousel code

// Footer date display

function displayDate() {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date();

  const month = monthNames[date.getMonth()]; 
  const day = date.getDate();
  const year = date.getFullYear();

  return month + ' ' + day + ', ' + year;
}

displayDate()

document.getElementById('todaysDate').innerHTML = displayDate(); 
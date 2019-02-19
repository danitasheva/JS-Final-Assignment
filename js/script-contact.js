var guides = [ // name of the guide
    "Gandalf",
    "Frodo Baggins",
    "Galadriel",
    "Gulum",
    "Aragorn",
    "Elrond",
 ];

var quotes = [ // famous quote
    "A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.",
    "I wish the ring had never come to me...",
    "Even the smallest person can change the course of history.",
    "My PRECIOUS!",
    "This day we fight!",
    "Nine companions. So be it. You shall be the fellowship of the ring.",
];

var contactInfo = [ 
    "Contact information: Comming soon",
    "Contact information: Comming soon",
    "Contact information: Comming soon",
    "Contact information: Comming soon",
    "Contact information: Comming soon",
    "Contact information: Comming soon",
];

var guideImg = [ // immage to be added
    "guide-img-1.jpg", 
    "guide-img-2.jpg", 
    "guide-img-3.jpg", 
    "guide-img-4.jpg", 
    "guide-img-5.jpg", 
    "guide-img-6.jpg", 
];

// Sorry, I know it's not a good way but I will not have time to think it through :-)
// will try to do it later

// var guidesIndex = 0;

// function displayGuides() {
//     guidesIndex++;
//     document.getElementById('guideName').innerHTML = guides[guidesIndex];
//     document.getElementById('famousQuote').innerHTML = quotes[guidesIndex];
//     document.getElementById('contactInfo').innerHTML = contactInfo[guidesIndex];
// }
// displayGuides();



// to display on contact page
document.getElementById('guideName0').innerHTML = guides[0];
document.getElementById('famousQuote0').innerHTML = quotes[0];
document.getElementById('contactInfo0').innerHTML = contactInfo[0];

document.getElementById('guideName1').innerHTML = guides[1];
document.getElementById('famousQuote1').innerHTML = quotes[1];
document.getElementById('contactInfo1').innerHTML = contactInfo[1];

document.getElementById('guideName2').innerHTML = guides[2];
document.getElementById('famousQuote2').innerHTML = quotes[2];
document.getElementById('contactInfo2').innerHTML = contactInfo[2];

document.getElementById('guideName3').innerHTML = guides[3];
document.getElementById('famousQuote3').innerHTML = quotes[3];
document.getElementById('contactInfo3').innerHTML = contactInfo[3];



// var newDiv = document.createElement('div');
// newDiv.appendChild()


// for ( var i = 0; i < guides.length; i++ ) {
//     console.log(guides[i]);
//     console.log(quotes[i]);
//     console.log(contactInfo[i]);
// }





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
// again lots of code repetition but this is the fastest way I could do it
// will find better way later
// set variable and event listener for each trip

// trip 1
var trip1Box = document.getElementById('changeImg1');
var trip1Img = document.getElementById('trip1');

trip1Box.addEventListener('mouseover', changeImgSrc);
trip1Box.addEventListener('mouseleave', changeImgSrcBack);

function changeImgSrc() {
    trip1Img.src = './img/rivendell.jpg';
    trip1Img.alt = 'Rivendell';
}
function changeImgSrcBack() {
    trip1Img.src = './img/hobbiton.jpg';
    trip1Img.alt = 'Hobbiton';
}

// trip 2
var trip2Box = document.getElementById('changeImg2');
var trip2Img = document.getElementById('trip2');

trip2Box.addEventListener('mouseover', changeImgSrc2);
trip2Box.addEventListener('mouseleave', changeImgSrcBack2);

function changeImgSrc2() {
    trip2Img.src = './img/lothlorien.jpg';
    trip2Img.alt = 'Lothlorien';
}
function changeImgSrcBack2() {
    trip2Img.src = './img/rivendell.jpg';
    trip2Img.alt = 'Rivendell';
}

//trip 3
var trip3Box = document.getElementById('changeImg3');
var trip3Img = document.getElementById('trip3');

trip3Box.addEventListener('mouseover', changeImgSrc3);
trip3Box.addEventListener('mouseleave', changeImgSrcBack3);

function changeImgSrc3() {
    trip3Img.src = './img/gondor.jpg';
    trip3Img.alt = 'Gondor';
}
function changeImgSrcBack3() {
    trip3Img.src = './img/lothlorien.jpg';
    trip3Img.alt = 'Lothlorien';
}

// trip 4
var trip4Box = document.getElementById('changeImg4');
var trip4Img = document.getElementById('trip4');

trip4Box.addEventListener('mouseover', changeImgSrc4);
trip4Box.addEventListener('mouseleave', changeImgSrcBack4);

function changeImgSrc4() {
    trip4Img.src = './img/mordor.jpg';
    trip4Img.alt = 'Mordor';
}
function changeImgSrcBack4() {
    trip4Img.src = './img/gondor.jpg';
    trip4Img.alt = 'Gondor';
}


// cat animation reused :) 
// to display a different way of transportation

var eagle = document.getElementById('gandalfsEagle');
var walkForward = true;

function eagleFly() {
    if ( eagle.offsetLeft >= document.body.offsetWidth - eagle.offsetWidth ) {
        walkForward = false;
    }
    if ( eagle.offsetLeft <= 0 ) {
        walkForward = true;
    } 
    if ( walkForward ) {
        eagle.style.transform = 'scaleX(1)';
        eagle.style.left = eagle.offsetLeft + 1 +'px';        
    }
    else {
        eagle.style.transform = 'scaleX( -1 )';
        eagle.style.left = eagle.offsetLeft - 1 + "px";
    }
}
var timer = setInterval(eagleFly, 5);



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
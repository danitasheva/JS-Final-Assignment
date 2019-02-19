// variables for registration page
var form1 = document.form1;
var name = document.form1.name.value;
var address = document.form1.address.value;
var city = document.form1.city.value;
var province = document.form1.province.value;
var postalCode = document.form1.postalCode.value;
var email = document.form1.email.value;
var phone = document.form1.phone.value;

var submitButton = document.getElementById('submitButton');

var errorName = document.getElementById('errorName');
var errorPostalCode = document.getElementById('errorPostalCode');
var errorEmail = document.getElementById('errorEmail');
var errorPhone = document.getElementById('errorPhone');

submitButton.addEventListener('click', function(event) {
    
    errorName.style.display = "none";
    errorPostalCode.style.display = "none";
    errorEmail.style.display = "none";
    errorPhone.style.display = "none";

    if ( !name ) {
        event.preventDefault(event);
        errorName.style.display = "block";
    }

    if ( !postalCode ) {
        event.preventDefault();
        errorPostalCode.style.display = "block";
    }
    if ( !email ) {
        event.preventDefault();
        errorEmail.style.display = "block";
    }
    if ( !phone ) {
        event.preventDefault();
        errorPhone.style.display = "block";
    }
}) 


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
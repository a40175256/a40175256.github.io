//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
// Image switcher code

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/batman.jpg') {
        myImage.setAttribute('src', 'images/batman2.jpg');
    } else {
        myImage.setAttribute('src', 'images/batman.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Batman is cool, ' + myName;
}

var tmpName = localStorage.getItem('name');
if (!tmpName) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Batman is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
    //myHeading.textContent = 'Batman test';
}
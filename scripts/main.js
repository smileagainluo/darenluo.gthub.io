var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello world1";

var myImage = document.querySelector('img');
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png'){
    myImage.setAttribute('src', 'images/firefox2.png');
  }else{
    myImage.setAttribute('src', 'images/firefox-icon.png');
  }
}

function setUser() {
  var myName = prompt('input your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is coll. ' + myName;
}

var changeNameBtn = document.querySelector('button');
changeNameBtn.onclick = function() {
  setUser();
}

if (!localStorage.getItem('name')){
  setUser();
}else{
  var myName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is coll. ' + myName;
}
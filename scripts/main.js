let myImg = document.querySelector('img');

myImg.onclick = function(){
    let mySrc = myImg.getAttribute('src');
    if(mySrc === 'images/keanu.png'){
        myImg.setAttribute('src','images/keanu2.jpg');
    }
    else{
        myImg.setAttribute('src','images/keanu.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function(){
    setUserName();
}
function setUserName(){
    let myName = prompt('Please enter your name');
    if(!myName || myName === null){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}
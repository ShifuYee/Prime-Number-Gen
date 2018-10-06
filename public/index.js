'use strict';

let button = document.querySelector('.user-button');

button.onclick = function () {
  const userInput = document.querySelector('#userNumber');
  const request = new XMLHttpRequest();
  request.open('POST', '/api', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.onreadystatechange = function() { // Call a function when the state changes.
    if(this.readyState === 4 && this.status === 200) {
      document.querySelector('#results').innerHTML = this.response;
    }
  }
  const data = {number: userInput.value}
  userInput.value = '';
  request.send(JSON.stringify(data));
  
}

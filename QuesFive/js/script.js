"use strict";



var xhr = new XMLHttpRequest();
xhr.open('GET', `https://restcountries.com/v3.1/name/india?fullText=true`, true);
xhr.timeout = 100000;

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('Ajax request successful:', xhr.responseText);
  } else {
    console.error('Ajax request failed:', xhr.statusText);
  }
};

// Handle timeout event
xhr.ontimeout = function () {
  console.error('Ajax request timed out');
};

// Handle other errors
xhr.onerror = function () {
  console.error('Ajax request failed');
};

xhr.send();
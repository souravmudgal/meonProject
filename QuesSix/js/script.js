"use strict";

var xhr = new XMLHttpRequest();
xhr.open('GET', `https://restcountries.com/v3.1/name/india?fullText=true`, true);
xhr.timeout = 100000;
xhr.setRequestHeader('Content-Type', 'text/css');
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var contentType = xhr.getResponseHeader('Content-Type');
    if (contentType && contentType.indexOf('text/css') !== -1) {
      console.error('Unexpected Content-Type. Expected text/css, but received application/json.');
    }
    console.log('Ajax request successful:', xhr.responseText);
  } else {
    console.error('Ajax request failed:', xhr.statusText);
  }
};

xhr.ontimeout = function () {
  console.error('Ajax request timed out');
};
xhr.onerror = function () {
  console.error('Ajax request failed');
};

xhr.send();


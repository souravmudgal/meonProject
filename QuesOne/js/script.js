"use strict";
function myFunction() {
  const newParagraph = document.createElement("p");
  const newParagraphValue = document.createTextNode("Delhi");
  newParagraph.appendChild(newParagraphValue);
  document.getElementById("myList").appendChild(newParagraph);
}

"use strict";
const personeOne = { firstName: 'sourav', lastName: "Mudgal" };
const personeTwo = { firstName: 'bippan', lastName: "Kumar" };
const personeThree = { firstName: 'ketan', lastName: "Trevedi" };

function convertPersoneOfObjectsToArray(...personsObj) {

  // return [...personsObj]; 
  // we can also use Array.form or spread operaters
  return Array.from(personsObj);
}

const perosnes = convertPersoneOfObjectsToArray(personeOne, personeTwo, personeThree);
console.log(perosnes);



"use strict";
const employees = [
  {  name: "Sourav", from: "Noida" },
  {  name: "Mudgal", from: "Delhi" },
  {  name: "Ketan", from: "Luckhnow" },
  {  name: "Shukla", from: "Luckhnow" },
  {  name: "Bippan", from: "Noida" },
];

function findEmployeeFrom() {
  return employees.filter((employee) => employee.from === 'Noida');
}

const result = findEmployeeFrom();
console.log(result);

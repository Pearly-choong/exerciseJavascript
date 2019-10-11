console.log('testing');

// person 1
var person1Food = 100;
var person1Transport = 100;
var person1Bills = 50;
var totalPerson1 = person1Food + person1Transport + person1Bills;

// person 2
var person2Food = 80;
var person2Transport = 100;
var person2Bills = 140;
var totalPerson2 = person2Food + person2Transport + person2Bills;

// person 3
var person3Food = 150;
var person3Transport = 200;
var person3Bills = 250;
var totalPerson3 = person3Food + person3Transport + person3Bills;

document.getElementById('result').innerHTML = '</br>Total Expenses for person 1 = $ ' + totalPerson1;
document.getElementById('result2').innerHTML = '</br>Total Expenses for person 2 = $ ' + totalPerson2;
document.getElementById('result3').innerHTML = '</br>Total Expenses for person 3 = $ ' + totalPerson3;

if ((totalPerson1 > totalPerson2) && (totalPerson1 > totalPerson3)){
  document.getElementById('text').innerHTML = '</br>Person 1 has the biggest living cost: $ ' + totalPerson1;
} else if (totalPerson2 > totalPerson3) {
  document.getElementById('text').innerHTML = '</br>Person 2 has the biggest living cost: $ ' + totalPerson2;
} else {
  document.getElementById('text').innerHTML = '</br>Person 3 has the biggest living cost: $ ' + totalPerson3;
}

if ((totalPerson1 < totalPerson2) && (totalPerson1 < totalPerson3)){
  document.getElementById('text2').innerHTML = '</br>Person 1 has the smallest living cost: $ ' + totalPerson1;
} else if (totalPerson2 < totalPerson3) {
  document.getElementById('text2').innerHTML = '</br>Person 2 has the smallest living cost: $ ' + totalPerson2;
} else {
  document.getElementById('text2').innerHTML = '</br>Person 3 has the smallest living cost: $ ' + totalPerson3;
}

var averageExpenses = (totalPerson1 + totalPerson2 + totalPerson3) / 3
document.getElementById('text3').innerHTML = '</br>The average expenses for living in Wellington are $ ' + averageExpenses.toFixed(2);

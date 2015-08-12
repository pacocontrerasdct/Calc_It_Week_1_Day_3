var op = prompt('Choose an operation:\n(A)ddition, (S)ustraction, (M)ultiplication, (D)ivision');
console.log('op', op);

var num1 = prompt('Choose your first number');
console.log('num1', num1);

var num2 = prompt('Choose your second number');
console.log('num2', num2);

var goodNum1 = parseFloat(num1);
var goodNum2 = parseFloat(num2);

op = op.toLowerCase();

if(op === "a"){
  var add = goodNum1 + goodNum2;
  alert("The addition of " + num1 + " and " + num2 + " is equal to " + add);
}
else if(op === "s"){
  alert("Sustraction");
}
else if(op === "m"){
  alert("Multiplication");
}
else if(op === "d"){
  alert("Division");
}
else{
  alert("Wong!");
}

/*
Should use prompt and alert and parsing to differente type of objects (string, integers)
*/
function calcIt(){

  var op = prompt('Choose an operation:\n(A)ddition, (S)ustraction, (M)ultiplication, (D)ivision');
  console.log('op', op);
  op = op.toLowerCase();

  var num1 = prompt('Choose your first number');
  console.log('num1', num1);
  var num2 = prompt('Choose your second number');
  console.log('num2', num2);
  var goodNum1 = parseFloat(num1);
  var goodNum2 = parseFloat(num2);
  /*
  var num3 = prompt('Choose number of float numbers after Integer');
  console.log('num3', num3);
  var goodNum3 = parseFloat(num3);
  */

  if(op === "a"){
    var add = goodNum1 + goodNum2;
    alert("The addition of " + num1 + " and " + num2 + " is equal to " + add);
  }
  else if(op === "s"){
    var sus = goodNum1 - goodNum2;
    alert("The sustraction of " + num1 + " and " + num2 + " is equal to " + sus);
  }
  else if(op === "m"){
    var mul = goodNum1 * goodNum2;
    alert("The multiplication of " + num1 + " and " + num2 + " is equal to " + mul);
  }
  else if(op === "d"){
    var div = goodNum1 / goodNum2;
    alert("The division of " + num1 + " and " + num2 + " is equal to " + div);
  }
  else{
    alert("Wong selection! Please choose between A, S, M or D for Addition, Sustraction, Multiplication or Division");
    calcIt();
  }
}
calcIt();
/*
Should use prompt and alert and parsing to differente type of objects (string, integers)
*/
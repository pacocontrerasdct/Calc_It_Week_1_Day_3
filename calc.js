function calcIt(){
  var typeCalc = prompt('Choose between (B)asic Calculator or (A)dvance Calculator.\nOn the contrary if you want to (E)xit the calculator');
  typeCalc = typeCalc.toLowerCase();
  if (typeCalc !== "b" && typeCalc !== "a" && typeCalc !== "e") {
    alert("Wong selection! Please choose between B for using a Basic Calculator or\nA for an Advance Calculator. Press E for Exit the programme.");
    calcIt();
  }

  if(typeCalc === "e"){
    alert("Thanks for using this calculator");
    return
  }
  else if(typeCalc === "b"){
    var op = prompt('Choose an operation:\n(A)ddition, (S)ustraction, (M)ultiplication, (D)ivision.\nOn the contrary if you want to (E)xit the calculator');
    op = op.toLowerCase();

    if (op !== "a" && op !== "s" && op !== "m" && op !== "d" && op !== "e") {
      alert("Wong selection! Please choose between A, S, M or D for Addition, Sustraction, Multiplication or Division");
      calcIt();
    }
  }
  else if(typeCalc === "a"){
    var op = prompt('Choose an operation:\n(A)ddition, (S)ustraction, (M)ultiplication, (D)ivision, (P)ower, (SQ)uare root.\nOn the contrary if you want to (E)xit the calculator');
    op = op.toLowerCase();

    if (op !== "a" && op !== "s" && op !== "m" && op !== "d" && op !== "p" && op !== "sq" && op !== "e") {
      alert("Wong selection! Please choose between A, S, M, D, P or SQ for Addition, Sustraction, Multiplication, Division, Power or Square Root");
      calcIt();
    }
  }
  else{}


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

  if(op === "e"){
    alert("Thanks for using this calculator");
    return
  }
  else if(op === "a"){
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
  else if(op === "e"){
    alert("Thanks for using this calculator");
    return
  }
  else{}
}
calcIt();
/*
Should use prompt and alert and parsing to differente type of objects (string, integers)
*/
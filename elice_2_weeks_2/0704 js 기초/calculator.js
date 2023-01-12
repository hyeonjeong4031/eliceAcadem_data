function printExpression(value) {
    document.querySelector("#expression").innerHTML += value;
  }


  function calculate() {
    console.log(document.querySelector("#expression").innerHTML);
    console.log(expression.search("\\+"));
  }
  
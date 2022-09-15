function buttonClickHandler(){
	let selectElem = document.getElementById("select1");

	let value1 = document.getElementById("input1").value;
	let value2 = document.getElementById("input2").value;

	value1 = parseFloat(value1);
    value2 = parseFloat(value2);
	
	console.log(value1);
	console.log(value2);

	let result = 0.0;
	switch(selectElem.value){
		case "+":
			result = value1 + value2;
			break;
		case "-":
			result = value1 - value2;
			break;
		case "*":
			result = value1 * value2;
			break;
		case "/":
			if(value2 !== 0){
				result = value1 / value2;
			}
			else{
				result = "Error: division by 0 is not possible";
			}
			break;
	}
	console.log(result);
	document.getElementById("results").innerText = result;
}

function buttonClickHandler(){
	let selectElem = document.getElementById("select1");

	let value1 = parseFloat(document.getElementById("input1").value);
	let value2 = parseFloat(document.getElementById("input2").value);

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
		result = value1 / value2;
		break;
	}
	console.log(result);
	document.getElementById("results").innerText = result;
}

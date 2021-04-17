function add(number1, number2) {
	return number1 + number2;
}

function subtract(number1, number2) {
	return number1 - number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function divide(number1, number2) {
	return number1 / number2;
}

$(document).ready(function() {
	$("form#calculatorForm").submit(function(event) {
		event.preventDefault();
		const number01 = parseInt($("#input01").val());
		const number02 = parseInt($("#input02").val());
		const operator = $("input:radio[name=operator]:checked").val();
		console.log(number01);
		console.log(number02);
		console.log(operator);
		let result;
		if(operator === "add") {
			result = add(number01, number02);
		} else if(operator === "subtract") {
			result = subtract(number01, number02);
		} else if(operator === "multiply") {
			result = multiply(number01, number02);
		} else if(operator === "divide") {
			result = divide(number01, number02);
		}	
		$("#output").text(result);
		$("#hidden").show();
	});
});
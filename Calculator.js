var number_one=0;
var number_two=0;
var operCode = null;

function resetAll(){
	number_one=0;
	number_two=0;
	operCode=null;
	clearTheInput();
}

function operation(operationCode){
	number_one = document.getElementById('result').value;
	number_two = 0;
	operCode = operationCode;
	clearTheInput();
}

function clearTheInput(){
	document.getElementById('result').value=0;
}

function addDigit(digitToAdd){
	if (parseInt(document.getElementById('result').value) <10e+10)
	{

		if (document.getElementById('result').value ==0){
			document.getElementById('result').value =digitToAdd;
		}
		else {
			document.getElementById('result').value +=digitToAdd;
		}
	}
	
}

function resultate(){
	if (operCode!=null)
	{
		number_two = document.getElementById('result').value;
		if(operCode==0){
			number_one = parseInt(number_one)/parseInt(number_two);
		}
		else if (operCode==1){
			number_one = parseInt(number_one)*parseInt(number_two);
		}
		else if(operCode==2){
			number_one = parseInt(number_one)-parseInt(number_two);
		}
		else if(operCode==3){
			number_one = parseInt(number_one)+parseInt(number_two);
		}
		document.getElementById('result').value = number_one;
		operCode=null;
	}
}

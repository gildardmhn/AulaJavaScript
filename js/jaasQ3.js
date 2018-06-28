window.onload = function(){
	var validar = document.getElementById("altura");
	var amassa = document.getElementById("massa");

	validar.oninput = function(){
		var massa = document.getElementById("massa").value;
		var altura = document.getElementById("altura").value;

		var massaFloat = parseFloat(massa);
		var alturaFloat = parseFloat(altura);

		imc(massaFloat, alturaFloat);
	}

	amassa.oninput = function(){
		var massa = document.getElementById("massa").value;
		var altura = document.getElementById("altura").value;

		var massaFloat = parseFloat(massa);
		var alturaFloat = parseFloat(altura);

		imc(massaFloat, alturaFloat);
	}
}

function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function imc(massa, altura){
	if(isNumber(massa) && isNumber(altura)){
		var meu_imc = (massa)/(altura*altura);

		if(meu_imc < 16){
			document.getElementById("resultado").value = 'Magreza grave';
		}

		if(meu_imc>= 16 && meu_imc < 17){
			document.getElementById("resultado").value = 'Magreza moderada';
		}

		if (meu_imc >= 17 && meu_imc < 18.5){
			document.getElementById("resultado").value = 'Magreza leve';
		}

		if (meu_imc >= 18.5 && meu_imc < 25){
			document.getElementById("resultado").value = 'Saudavel';
			return 0;
		}

		if (meu_imc >= 25 && meu_imc < 30){
			document.getElementById("resultado").value = 'Sobrepeso';
		}

		if (meu_imc >= 30 && meu_imc < 35){
			document.getElementById("resultado").value = 'Obesidade Grau I';
		}

		if (meu_imc >= 35 && meu_imc < 40){
			document.getElementById("resultado").value = 'Obesidade Grau II (Severa)';
		}

		if (meu_imc >= 40){
			document.getElementById("resultado").value = 'Obesidade Grau III (Modrbida)';
		}
	}
	else{
		if(isNumber(massa) && !isNumber(massa)){
			document.getElementById("resultado").value = 'Digite a altura';
		}

		if(!isNumber(massa) && isNumber(altura)){
			document.getElementById("resultado").value = 'Digite a massa';
		}

		if(!isNumber(massa) && !isNumber(altura)){
			document.getElementById("resultado").value = 'Digite a massa e a altura';
		}
	}
}

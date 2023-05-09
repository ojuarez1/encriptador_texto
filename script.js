var textArea1 = document.getElementById("textAreaUno");
var textArea2 = document.getElementById("textAreaDos");


function encriptarTexto(mensaje){
	var letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	for (let i = 0; i < letras.length; i++) {
		if (mensaje.includes(letras[i][0])) {
			mensaje = mensaje.replaceAll(letras[i][0], letras[i][1]);
		}
	}
	return mensaje
}

var muneco = document.getElementById("aOcultar");
var contMuneco = document.getElementById("aDesocultar");

function darClick() {
	muneco.style.display = "none";
	contMuneco.style.display = "inline-block"
	var texto = encriptarTexto(textArea1.value);
	textArea2.innerHTML = texto;
	textArea1.value = "";
}

function desencriptarTexto(textoDes){
	var letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	for (let i = 0; i < letras.length; i++) {
		if (textoDes.includes(letras[i][0])) {
			textoDes = textoDes.replaceAll(letras[i][1], letras[i][0]);
		}
	}
	return textoDes
}

function clickDos() {
	muneco.style.display = "none";
	contMuneco.style.display = "inline-block"
	var mensaje = desencriptarTexto(textArea1.value);
	textArea2.innerHTML = mensaje;
	textArea1.value = "";
}

function copiar(){
	var textoEncriptado = document.getElementById("textAreaDos");
	textoEncriptado.focus()
	document.execCommand("selectAll");
	document.execCommand("copy");
}
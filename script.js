function encriptar(){
	var textoEncriptar = document.getElementById("textAreaUno").value.toLowerCase();
	var textoEncriptarDos = textoEncriptar.replace(/e/img,"enter");
	textoEncriptarDos = textoEncriptarDos.replace(/i/img,"imes")
	textoEncriptarDos = textoEncriptarDos.replace(/a/img,"ai")
	textoEncriptarDos = textoEncriptarDos.replace(/o/img,"ober")
	textoEncriptarDos = textoEncriptarDos.replace(/u/img,"ufat")
	document.getElementById("aOcultar").style.display="none";
	document.getElementById("aDesocultar").style.display="inline-block";
	document.getElementById("textAreaDos").innerHTML = textoEncriptarDos;
}

var boton = document.getElementById("encriptador");
boton.onclick = encriptar;

function desencriptar(){
		var textoDesencriptar = document.getElementById("textAreaUno").value;
		var textoDesencriptarDos = textoDesencriptar.replace(/enter/img,"e");
		textoDesencriptarDos = textoDesencriptarDos.replace(/imes/img,"i");
		textoDesencriptarDos = textoDesencriptarDos.replace(/ai/img,"a");
		textoDesencriptarDos = textoDesencriptarDos.replace(/ober/img,"o");
		textoDesencriptarDos = textoDesencriptarDos.replace(/ufat/img,"u");
		document.getElementById("aOcultar").style.display="none";
		document.getElementById("aDesocultar").style.display="inline-block";
		document.getElementById("textAreaDos").innerHTML = textoDesencriptarDos;
	}
	
	var boton_dos = document.getElementById("desencriptador");
	boton_dos.onclick = desencriptar;

	function copiar(){
		var textoEncriptado = document.getElementById("textAreaDos");
		textoEncriptado.focus()
		document.execCommand("selectAll");
		document.execCommand("copy");
	}

	var boton_tres = document.getElementById("btnCopiar");
	boton_tres.onclick = copiar;

	
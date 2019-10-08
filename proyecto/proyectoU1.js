

window.onload = function(){
document.getElementById("obtener").addEventListener("click",obtenercontenido);

function obtenercontenido(){
	var nomArch = document.getElementById("nombre").value;
	var texto = new XMLHttpRequest();
	texto.onreadystatechange = function(){
		if(this.readyState == 4 && this.status==200){
			document.getElementById("parrafo").innerHTML = this.responseText;
		}
	};

	texto.open("GET",nomArch,true);
	texto.send();
}


}



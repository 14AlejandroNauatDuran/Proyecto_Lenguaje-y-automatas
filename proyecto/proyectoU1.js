

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
document.getElementById("encriptar").addEventListener("click",encriptando);

function encriptando(){
	
	var enc = document.getElementById("parrafo").innerHTML;
	var remplazo = enc.replace(/[a|A]/g,"b");
	remplazo = remplazo.replace(/[p|P]/g,"z");
	remplazo = remplazo.replace(/[i|I]/g,"w");
	remplazo = remplazo.replace(/[n|N]/g,"p");
	remplazo = remplazo.replace(/[c|C]/g,"y");
	remplazo = remplazo.replace(/[r|R]/g,"i");
	remplazo = remplazo.replace(/[m|M]/g,"8");

	document.getElementById("encriptado").innerHTML = remplazo;
	
	
}

}



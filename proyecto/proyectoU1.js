

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
	var expresCom = /["]{1}([\s]*[\w]*)+["]/gm;
	var enc = document.getElementById("parrafo").innerHTML;

	var rescom = enc.match(expresCom);
	document.getElementById("comillas").innerHTML = rescom;

	var obt = document.getElementById("comillas").innerHTML;
	var remplazo = obt.replace(/[a|A]/g,"b");
	remplazo = remplazo.replace(/[p|P]/g,"z");
	remplazo = remplazo.replace(/[i|I]/g,"w");
	remplazo = remplazo.replace(/[n|N]/g,"p");
	remplazo = remplazo.replace(/[c|C]/g,"y");
	remplazo = remplazo.replace(/[r|R]/g,"i");
	remplazo = remplazo.replace(/[m|M]/g,"8");

	document.getElementById("encriptado").innerHTML = remplazo;

}

document.getElementById("eliminar").addEventListener("click",eliminando);
function eliminando(){
	var eli = document.getElementById("parrafo").innerHTML;
	var eliminarc = eli.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm,'$1')
	document.getElementById("eliminado").innerHTML = eliminarc;
}

document.getElementById("buscar").addEventListener("click",buscando);


function buscando(){
	var busc = document.getElementById("parrafo").innerHTML;
	//var expresion = /(\w+\s*[=]{1,2}[\s]*[0-9]+[\s]*[+|-|*|/]{1}[\s]*[\w]+[;]|\w+\s+.{1}.{1}\s+[0-9]+)/g;
	var expresion = /[\w]+\s*[=]\s*[\w]+\s*[+|-|*|/]\s*[\w]+|[\w]\s*[=][(][\w]{1}[+|-|*|/][\w]{1}[)]/gm
	var result = busc.match(expresion);
	document.getElementById("buscado").innerHTML = result;
	var busc2 = document.getElementById("parrafo").innerHTML;
	//[\w]+\s*(<|>|<=|>=)\s*[\w]+
	var expresion2 = /[\w]+\s*(<|>|<=|>=)\s*[\w]+\b/gm;
	var result2 = busc2.match(expresion2);
	document.getElementById("buscado2").innerHTML = result2;
}
}





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
	var expresion = /[\w]+\s*[=]\s*[\w]+\s*[+|-|*|/]\s*[\w]+|[\w]\s*[=][(][\w]{1}[+|-|*|/][\w]{1}[)]/gm
	var result = busc.match(expresion);
	document.getElementById("buscado").innerHTML = result;
	
	var busc4 = document.getElementById("parrafo").innerHTML;
	var nuevobusc4 = busc4.replace(/(&gt)/gm,"\x40");
	nuevobusc4 = nuevobusc4.replace(/(&lt)/gm,"\x23");
	document.getElementById("buscado4").innerHTML = nuevobusc4;

	var busc3 = document.getElementById("buscado4").innerHTML;
	//var expresion2 = /[a-z0-9]+\s*(<|\>|<=|>=|==)\s*[a-z0-9]+\b/;
	//var expresion2 = /[\w]+\s*(\x3E|\x3c|\x3e\x3d|\x3c\x3d|\x3d\x3d)\s*[\w]+/gm;
	var expresion3 = /[\w]+\s*(\x40;|\x23;|\x40;=|\x23;=|==)\s*[\w]+/gm;
	var result3 = busc3.match(expresion3);
	document.getElementById("buscado3").innerHTML = result3;

	var busc2 = document.getElementById("buscado3").innerHTML;
	var nuevobusc2 = busc2.replace(/(\x40;)/gm,"&gt");//&gt_simbolo >
	nuevobusc2 = nuevobusc2.replace(/(\x23;)/gm,"&lt");//&lt_simbolo <
	document.getElementById("buscado2").innerHTML = nuevobusc2;

}
}



function font() {
	x = document.getElementById("font").value;

	if(x == "Arial") {
		document.body.style.fontFamily ="Arial";
		document.body.style.font = "verdana";
	}

	else if(x == "Franklin Gothic Medium") {
		document.body.style.fontFamily = "Franklin Gothic Medium";
		document.body.style.font = "Arial";
	}

  else if(x == "Lucida Sans Unicode"){
		document.body.style.fontFamily = "Lucida Sans Unicode";
		document.body.style.font = "Franklin Gothic Medium";
	}

  else if(x == "Sans-serif") {
		document.body.style.fontFamily = "Sans-serif";
		document.body.style.font = "Segoe UI";
	}
}

function Peran() {
	x = document.getElementById("Peran").value;

	if(x == "Warga") {
		document.getElementById("Role").innerHTML = "Kamu tidak mempunyai skill apapun dan hanya dapat melakukan voting ketika tiba saatnya.";
	}

	else if(x == "Werewolf")
	{
		document.getElementById("Role").innerHTML = "Kamu dapat membunuh satu orang pada malam harinya.";
	}

	else if(x == "Cenayang")
	{
		document.getElementById("Role").innerHTML = "Kamu dapat menerawang satu warga desa untuk dibuka identitasnya.";
	}

	else if(x == "Detektif")
	{
		document.getElementById("Role").innerHTML = "Kamu harus menyelidiki peran lain satu persatu.";
	}

	else
	{
		document.getElementById("Role").innerHTML = "";
	}
}

function Start(){
	document.getElementById("Start").innerHTML = "Permainan Dimulai";
	alert("Mulai Permainan?");
}

function Finish(){
	var data = document.getElementById("Start").innerHTML= "Permainan Berakhir";
	alert("Akhiri Permainan?");
}

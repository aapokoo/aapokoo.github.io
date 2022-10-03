var maat = ["pata", "ruutu", "risti", "hertta"];
var arvot = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var vastustajat = ["Manse", "Sotkamo", "KPL", "Tahko", "Joma", "Kempele", "Kipa", "JymyJussit", "IPV", "PattU", "Kossu", "Kankaanpää", "Vimpeli"];
let pakka = new Array();
let kortti;
let juoksut = 0;
let jokeri;
let batter = 0;
let vierasjoukkue;
let valittuMaa;
let valittuMaa2;
let grafiikkaArvo;
let vastustaja_arvottu;
let pisteet = 0;
let sijoitus;
let joukkue;
let juoksuero = 0;
let pelatutPelit = 0;
let joukkueenRahat = 10000;
let kotiottelu; //parittomat kotiotteluita, parilliset vierasotteluita
let vierasottelu;
let lukkariLyödyt;
let sieppariLyödyt;
let ykkösvahtiLyödyt;
let kakkosvahtiLyödyt;
let kakkospolttajaLyödyt;
let kolmospolttajaLyödyt;
let kolmosvahtiLyödyt;
let kakkoskoppariLyödyt;
let kolmoskoppariLyödyt;
let jokeriLyödyt;
let vMenot;
let meno1;
let meno2;
let tulo1;
let tulo2;
let kTulot1;

const textarea = document.getElementById("loki").value;

function vierasmenot() {
	meno1 = Math.floor(Math.random() * 5) + 1;
	meno2 = Math.floor(Math.random() * 5) + 1;
	vMenot = (meno1 + meno2) * 1000 / 2;
}

function kotitulot1() {
	tulo1 = Math.floor(Math.random() * 5) + 1;
	tulo2 = Math.floor(Math.random() * 5) + 1;
	kTulot1 = (tulo1 + tulo2) * 1000 / 2;
}

function getRandomInt(max) { //random numero väliltä 0 - syötetty arvo
    return Math.floor(Math.random() * max);
  }

function vastustaja() {
    document.getElementById("vastustaja").style.display = "none";
	document.getElementById("maanValinta").style.display = "inline";
	document.getElementById("herttaValinta").style.display = "inline";
	document.getElementById("ruutuValinta").style.display = "inline";
	document.getElementById("ristiValinta").style.display = "inline";
	document.getElementById("pataValinta").style.display = "inline";
	document.getElementById("loki").style.display = "inline";
	if (pelatutPelit === 0) {
		kotitulot1();
		joukkueenRahat = joukkueenRahat + kTulot1;
		document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat + " Tulot: " + kTulot1;
	}
	if ((pelatutPelit + 1) % 2 == 0) {
		vierasmenot();
		joukkueenRahat = joukkueenRahat - vMenot;
		document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat + " Menot: " + vMenot;
	}
    //vierasjoukkue = getRandomInt(12);
    if (vastustaja_arvottu === "JymyJussit") { //JymyJussit
        document.getElementById("vierastulos").innerHTML = "3";
        document.getElementById("vieraslogo").src="./JymyJussit-STAMP.png";
        vierastulos = 3;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 3000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3000";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 3000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3000";
	    }
    } else if (vastustaja_arvottu === "Sotkamo") { //Jymy
        document.getElementById("vierastulos").innerHTML = "7";
        document.getElementById("vieraslogo").src="sojy_merkki_w.png";
        vierastulos = 7;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 7000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +7000";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 6500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6500";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    }
    } else if (vastustaja_arvottu === "Manse") { //Manse
	document.getElementById("vierastulos").innerHTML = "8";
        document.getElementById("vieraslogo").src="Manse_PP_2015_logo.png";
        vierastulos = 8;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 9000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +9000";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 8000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +8000";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 7000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +7000";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 6500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6500";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea +"\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea +"\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea +"\nKotiottelun lipputulot: +4500";
	    }
    } else if (vastustaja_arvottu === "KPL") { //KPL
	document.getElementById("vierastulos").innerHTML = "7";
        document.getElementById("vieraslogo").src="1200px-KPL_logo.png";
        vierastulos = 7;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 8000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +8000";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 7000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +7000";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 6500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6500";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    }
    } else if (vastustaja_arvottu === "Tahko") { //Tahko
	document.getElementById("vierastulos").innerHTML = "6";
        document.getElementById("vieraslogo").src="Tahko_kiille_png.png";
        vierastulos = 6;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 6500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6500";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +8´4000";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    }
    } else if (vastustaja_arvottu === "Joma") { //Joma
	document.getElementById("vierastulos").innerHTML = "6";
        document.getElementById("vieraslogo").src="logoleft.png";
        vierastulos = 6;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 6500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6500";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    }
    } else if (vastustaja_arvottu === "Kempele") { //Kempeleen Kiri
	document.getElementById("vierastulos").innerHTML = "5";
        document.getElementById("vieraslogo").src="KeKi-logo_kulta.png";
        vierastulos = 5;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 6500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6500";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    }
    } else if (vastustaja_arvottu === "Kipa") { //Kipa
	document.getElementById("vierastulos").innerHTML = "4";
        document.getElementById("vieraslogo").src="logo_f5419293.png";
        vierastulos = 4;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 3000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea +"\nKotiottelun lipputulot: +3000";
	    }
    } else if (vastustaja_arvottu === "IPV") { //IPV
	document.getElementById("vierastulos").innerHTML = "3";
        document.getElementById("vieraslogo").src="ipv-logo-web.png";
        vierastulos = 3;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea +"\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 3000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3000";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 3000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3000";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 2500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +2500";
	    }
    } else if (vastustaja_arvottu === "PattU") { //PattU
	document.getElementById("vierastulos").innerHTML = "3";
        document.getElementById("vieraslogo").src="pattu.png";
        vierastulos = 3;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea +"\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 3000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3000";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 3000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea +"\nKotiottelun lipputulot: +3000";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 2500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +2500";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 2500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +2500";
	    }
    } else if (vastustaja_arvottu === "Kossu") { //Kossu
	document.getElementById("vierastulos").innerHTML = "2";
        document.getElementById("vieraslogo").src="logo.png";
        vierastulos = 2;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		   textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		   textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 3000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3000";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 3000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +3000";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 2500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +2500";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 2500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea = textarea + "\nKotiottelun lipputulot: +2500";
	    }
    } else if (vastustaja_arvottu === "Kankaanpää") { //Kankaanpää
	document.getElementById("vierastulos").innerHTML = "1";
        document.getElementById("vieraslogo").src="1200px-KaMa_logo_2016.png";
        vierastulos = 1;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +5000";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 4500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +4500";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 4000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +4000";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 3500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +3500";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 3000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +3000";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 2500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +2500";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 2500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +2500";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 2000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +2000";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 2000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +2000";
	    }
    } else if (vastustaja_arvottu === "Vimpeli") { //Vimpeli
	document.getElementById("vierastulos").innerHTML = "8";
        document.getElementById("vieraslogo").src="ViVe-logo.png";
        vierastulos = 8;
	    if (sijoitus === 1) {
		    joukkueenRahat = joukkueenRahat + 10000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +10000";
	    } else if (sijoitus === 2) {
		    joukkueenRahat = joukkueenRahat + 9000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +9000";
	    } else if (sijoitus === 3) {
		    joukkueenRahat = joukkueenRahat + 8000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +8000";
	    } else if (sijoitus === 4) {
		    joukkueenRahat = joukkueenRahat + 7000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +7000";
	    } else if (sijoitus === 5) {
		    joukkueenRahat = joukkueenRahat + 6500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +6500";
	    } else if (sijoitus === 6) {
		    joukkueenRahat = joukkueenRahat + 6500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +6500";
	    } else if (sijoitus === 7) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 8) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 9) {
		    joukkueenRahat = joukkueenRahat + 6000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +6000";
	    } else if (sijoitus === 10) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 11) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 12) {
		    joukkueenRahat = joukkueenRahat + 5500;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +5500";
	    } else if (sijoitus === 13) {
		    joukkueenRahat = joukkueenRahat + 5000;
		    document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		    textarea.value += "\nKotiottelun lipputulot: +5000";
	    }
    } else {
	    if (pisteet >= 21) {
		    sijoitus = "Sijoituksesi: 1.";
	    } else if (pisteet === 20 && juoksuero >= 82) {
		    sijoitus = "Sijoituksesi: 1.";
	    } else if (pisteet === 20 && juoksuero < 82) {
		    sijoitus = "Sijoituksesi: 2.";
	    } else if (pisteet === 19 && juoksuero >= 42) {
		    sijoitus = "Sijoituksesi: 2.";
	    } else if (pisteet === 19 && juoksuero < 42) {
		    sijoitus = "Sijoituksesi: 3.";
	    } else if (pisteet === 18) {
		    sijoitus = "Sijoituksesi: 3.";
	    } else if (pisteet === 17 && juoksuero >= 43) {
		    sijoitus = "Sijoituksesi: 3.";
	    } else if (pisteet === 17 && juoksuero >= 41 && juoksuero < 43) {
		    sijoitus = "Sijoituksesi: 4.";
	    } else if (pisteet === 17 && juoksuero < 41) {
		    sijoitus = "Sijoituksesi: 5.";
	    } else if (pisteet >= 15 && pisteet < 17) {
		    sijoitus = "Sijoituksesi: 5.";
	    } else if (pisteet === 14 && juoksuero >= 26) {
		    sijoitus = "Sijoituksesi: 5.";
	    } else if (pisteet === 14 && juoksuero >= 14 && juoksuero < 26) {
		    sijoitus = "Sijoituksesi: 6.";
	    } else if (pisteet === 14 && juoksuero < 14) {
		    sijoitus = "Sijoituksesi: 7.";
	    } else if (pisteet >= 12 && pisteet < 14) {
		    sijoitus = "Sijoituksesi: 7.";
	    } else if (pisteet === 11 && juoksuero >= 8) {
		    sijoitus = "Sijoituksesi: 7.";
	    } else if (pisteet === 11 && juoksuero < 8) {
		    sijoitus = "Sijoituksesi: 8.";
	    } else if (pisteet === 10 && juoksuero >= -2) {
		    sijoitus = "Sijoituksesi: 8.";
	    } else if (pisteet === 10 && juoksuero < -2) {
		    sijoitus = "Sijoituksesi: 9.";
	    } else if (pisteet >= 8 && pisteet < 10) {
		    sijoitus = "Sijoituksesi: 9.";
	    } else if (pisteet === 7 && juoksuero >= -34) {
		    sijoitus = "Sijoituksesi: 9.";
	    } else if (pisteet === 7 && juoksuero >= -38 && juoksuero < -34) {
		    sijoitus = "Sijoituksesi: 10.";
	    } else if (pisteet === 7 && juoksuero < -38) {
		    sijoitus = "Sijoituksesi: 11.";
	    } else if (pisteet === 6 && juoksuero >= -43) {
		    sijoitus = "Sijoituksesi: 11.";
	    } else if (pisteet === 6 && juoksuero >= -47 && juoksuero < -43) {
		    sijoitus = "Sijoituksesi: 12.";
	    } else {
		    sijoitus = "Sijoituksesi: 13.";
	    }
	    window.alert("Kausi loppu! " + sijoitus);
        document.getElementById("vieraslogo").src="#";
	    document.getElementById("herttaValinta").style.display = "none";
	document.getElementById("ruutuValinta").style.display = "none";
	document.getElementById("ristiValinta").style.display = "none";
	document.getElementById("pataValinta").style.display = "none";
	    document.getElementById("maanValinta").style.display = "none";
    }
}

/*
function vastustaja() {
    document.getElementById("vastustaja").style.display = "none";
	document.getElementById("testi").innerHTML = vastustaja_arvottu;
    vierasjoukkue = getRandomInt(12);
    if (vierasjoukkue === 0) { //JymyJussit
        document.getElementById("vierastulos").innerHTML = "3";
        document.getElementById("vieraslogo").src="./JymyJussit-STAMP.png";
        vierastulos = 3;
    } else if (vierasjoukkue === 1) { //Jymy
        document.getElementById("vierastulos").innerHTML = "7";
        document.getElementById("vieraslogo").src="sojy_merkki_w.png";
        vierastulos = 7;
    } else if (vierasjoukkue === 2) { //Manse
	document.getElementById("vierastulos").innerHTML = "8";
        document.getElementById("vieraslogo").src="Manse_PP_2015_logo.png";
        vierastulos = 7;
    } else if (vierasjoukkue === 3) { //KPL
	document.getElementById("vierastulos").innerHTML = "7";
        document.getElementById("vieraslogo").src="1200px-KPL_logo.png";
        vierastulos = 7;
    } else if (vierasjoukkue === 4) { //Tahko
	document.getElementById("vierastulos").innerHTML = "6";
        document.getElementById("vieraslogo").src="Tahko_kiille_png.png";
        vierastulos = 6;
    } else if (vierasjoukkue === 5) { //Joma
	document.getElementById("vierastulos").innerHTML = "6";
        document.getElementById("vieraslogo").src="logoleft.png";
        vierastulos = 6;
    } else if (vierasjoukkue === 6) { //Kempeleen Kiri
	document.getElementById("vierastulos").innerHTML = "5";
        document.getElementById("vieraslogo").src="KeKi-logo_kulta.png";
        vierastulos = 5;
    } else if (vierasjoukkue === 7) { //Kipa
	document.getElementById("vierastulos").innerHTML = "4";
        document.getElementById("vieraslogo").src="logo_f5419293.png";
        vierastulos = 4;
    } else if (vierasjoukkue === 8) { //IPV
	document.getElementById("vierastulos").innerHTML = "3";
        document.getElementById("vieraslogo").src="ipv-logo-web.png";
        vierastulos = 3;
    } else if (vierasjoukkue === 9) { //PattU
	document.getElementById("vierastulos").innerHTML = "3";
        document.getElementById("vieraslogo").src="pattu.png";
        vierastulos = 3;
    } else if (vierasjoukkue === 10) { //Kossu
	document.getElementById("vierastulos").innerHTML = "2";
        document.getElementById("vieraslogo").src="logo.png";
        vierastulos = 2;
    } else {
	document.getElementById("vierastulos").innerHTML = "1";
        document.getElementById("vieraslogo").src="1200px-KaMa_logo_2016.png";
        vierastulos = 1;
    }
}
*/

function rakennaPakka() //rakentaa pakan
{
    //document.getElementById("rakennaPakka").style.display = "none";
	for(let i = 0; i < maat.length; i++)
	{
		for(let x = 0; x < arvot.length; x++)
		{
			kortti = {Arvo: arvot[x], Maa: maat[i]};
			pakka.push(kortti);  
		}
	}
    for (let j = 0; j < 6; j++)
    {
        jokeri = {Arvo: "Joker", Maa: "Joker"};
        pakka.push(jokeri);
    }
	return pakka;
}

function sekoita(pakka) //sekoittaa pakan
{
	//document.getElementById("pakanSekoitus").style.display = "none";
	// for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * pakka.length));
		let location2 = Math.floor((Math.random() * pakka.length));
		let tmp = pakka[location1];

		pakka[location1] = pakka[location2];
		pakka[location2] = tmp;
	}
}

function lataus() {
	rakennaPakka();
	sekoita(pakka);
	sekoita2(vastustajat);
	nostaVastustaja(vastustajat);
}

function sekoita2(vastustajat) //sekoittaa vastustajat
{
    	document.getElementById("vastustajanSekoitus").style.display = "none";
	// for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * vastustajat.length));
		let location2 = Math.floor((Math.random() * vastustajat.length));
		let tmp = vastustajat[location1];

		vastustajat[location1] = vastustajat[location2];
		vastustajat[location2] = tmp;
	}
}

function nostaKortti(pakka) //nostaa päällimmäisen kortin
{
    return pakka.pop();
}


function nostaVastustaja(vastustajat) //nostaa päällimmäisen vastustajan
{
	vastustaja_arvottu = vastustajat.pop();
} 

function nostettuKortti(kortti) { //kortti grafiikat
    let grafiikkaArvo = kortti.Arvo;
    if (grafiikkaArvo === "1") {
        grafiikkaArvo = "A";
    }
	if (grafiikkaArvo === "11") {
        	grafiikkaArvo = "J";
    	}
	if (grafiikkaArvo === "12") {
        	grafiikkaArvo = "Q";
    	}
	if (grafiikkaArvo === "13") {
        	grafiikkaArvo = "K";
    	}
    if (kortti.Maa === "hertta") {
        document.getElementById("nosto").innerHTML = "♥" + " " + grafiikkaArvo;
        document.getElementById("nosto").style.color = 'red';
        document.getElementById("nosto").style.fontSize = "42px";
    } else if (kortti.Maa === "ruutu") {
        document.getElementById("nosto").innerHTML = "♦" + " " + grafiikkaArvo;
        document.getElementById("nosto").style.color = 'red';
        document.getElementById("nosto").style.fontSize = "42px";
    } else if (kortti.Maa === "pata") {
        document.getElementById("nosto").innerHTML = "♠" + " " + grafiikkaArvo;
        document.getElementById("nosto").style.color = 'black';
        document.getElementById("nosto").style.fontSize = "42px";
    } else if (kortti.Maa === "risti") {
        document.getElementById("nosto").innerHTML = "♣" + " " + grafiikkaArvo;
        document.getElementById("nosto").style.color = 'black';
        document.getElementById("nosto").style.fontSize = "42px";
    } else {
        document.getElementById("nosto").innerHTML = "*Joker*";
        document.getElementById("nosto").style.color = 'black';
        document.getElementById("nosto").style.fontSize = "26px";
    }
}

function maaHertta() {
    valittuMaa = "hertta";
    valittuMaa2 = "ruutu";
    document.getElementById("herttaValinta").style.display = "none";
    document.getElementById("ruutuValinta").style.display = "none";
    document.getElementById("ristiValinta").style.display = "none";
    document.getElementById("pataValinta").style.display = "none";
    document.getElementById("maanValinta").innerHTML = "♥";
	document.getElementById("pakka1").style.visibility = "visible";
}
function maaRuutu() {
    valittuMaa = "ruutu";
    valittuMaa2 = "hertta";
    document.getElementById("herttaValinta").style.display = "none";
    document.getElementById("ruutuValinta").style.display = "none";
    document.getElementById("ristiValinta").style.display = "none";
    document.getElementById("pataValinta").style.display = "none";
    document.getElementById("maanValinta").innerHTML = "♦";
	document.getElementById("pakka1").style.visibility = "visible";
}
function maaRisti() {
    valittuMaa = "risti";
    valittuMaa2 = "pata";
    document.getElementById("herttaValinta").style.display = "none";
    document.getElementById("ruutuValinta").style.display = "none";
    document.getElementById("ristiValinta").style.display = "none";
    document.getElementById("pataValinta").style.display = "none";
    document.getElementById("maanValinta").innerHTML = "♣";
	document.getElementById("pakka1").style.visibility = "visible";
}
function maaPata() {
    valittuMaa = "pata";
    valittuMaa2 = "risti";
    document.getElementById("herttaValinta").style.display = "none";
    document.getElementById("ruutuValinta").style.display = "none";
    document.getElementById("ristiValinta").style.display = "none";
    document.getElementById("pataValinta").style.display = "none";
    document.getElementById("maanValinta").innerHTML = "♠";
	document.getElementById("pakka1").style.visibility = "visible";
}

function joukkueVimpeli() {
	joukkue = vimpeli;
	var index = vastustajat.indexOf("Vimpeli");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("kotiLogo").src="./ViVe-logo.png";
	document.getElementById("vastustaja").style.display = "inline";
	document.getElementById("lukkariNimi").innerHTML = "KINNUNEN";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("sieppariNimi").innerHTML = "RINTA-AHO";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Väri 2 - 13, A";
	document.getElementById("ykkösvahtiNimi").innerHTML = "S. LASSILA";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("kakkosvahtiNimi").innerHTML = "L. VIHRIÄLÄ";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("kakkospolttajaNimi").innerHTML = "J. HEIKKALA";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kolmospolttajaNimi").innerHTML = "O. HEIKKALA";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kolmosvahtiNimi").innerHTML = "A. LASSILA";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("kakkoskoppariNimi").innerHTML = "M. VIHRIÄLÄ";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("kolmoskoppariNimi").innerHTML = "ANTTILA";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Väri 2 - 13, A";
	document.getElementById("jokeriNimi").innerHTML = "VAINIONPÄÄ";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Väri 2 - 13, A, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

function joukkueTampere() {
	joukkue = Tampere;
	var index = vastustajat.indexOf("Manse");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("kotiLogo").src="./Manse_PP_2015_logo.png";
	document.getElementById("lukkariNimi").innerHTML = "PUHTIMÄKI";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Väri 2 - 13, A";
	document.getElementById("sieppariNimi").innerHTML = "LEHTONEN";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("ykkösvahtiNimi").innerHTML = "KETTUNEN";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kakkosvahtiNimi").innerHTML = "MYLLYNIEMI";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kakkospolttajaNimi").innerHTML = "JUSSILA";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("kolmospolttajaNimi").innerHTML = "HOKKANEN";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Maa 2 - 8";
	document.getElementById("kolmosvahtiNimi").innerHTML = "LEHTO";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("kakkoskoppariNimi").innerHTML = "LILJA";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("kolmoskoppariNimi").innerHTML = "PUPUTTI";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Väri 2 - 13, A";
	document.getElementById("jokeriNimi").innerHTML = "RUUSKA";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Väri 2 - 13, A, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

function joukkueSeinäjoki() {
	joukkue = JymyJussit;
	var index = vastustajat.indexOf("JymyJussit");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("kotiLogo").src="./JymyJussit-STAMP.png";
	document.getElementById("lukkariNimi").innerHTML = "LEHTINEN";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Maa 2 - 7";
	document.getElementById("sieppariNimi").innerHTML = "J. KETTUNEN";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Maa 2 - 8";
	document.getElementById("ykkösvahtiNimi").innerHTML = "MARJAMÄKI";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Väri 2 - 13, A";
	document.getElementById("kakkosvahtiNimi").innerHTML = "SALMELA";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kakkospolttajaNimi").innerHTML = "TYYNELÄ";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kolmospolttajaNimi").innerHTML = "V. KETTUNEN";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("kolmosvahtiNimi").innerHTML = "KONTIO";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 8";
	document.getElementById("kakkoskoppariNimi").innerHTML = "RAUNIO";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("kolmoskoppariNimi").innerHTML = "SILLANPÄÄ";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Maa 2 - 9";
	document.getElementById("jokeriNimi").innerHTML = "HALLASUO";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Väri 2 - 13, A, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

function joukkueSotkamo() {
	joukkue = Sotkamo;
	var index = vastustajat.indexOf("Sotkamo");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("kotiLogo").src="./sojy_merkki_w.png";
	document.getElementById("lukkariNimi").innerHTML = "KOMULAINEN";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("sieppariNimi").innerHTML = "HUOTARI";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("ykkösvahtiNimi").innerHTML = "KUOSMANEN";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kakkosvahtiNimi").innerHTML = "N. KORHONEN";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kakkospolttajaNimi").innerHTML = "KOTRO";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kolmospolttajaNimi").innerHTML = "KEINÄNEN";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("kolmosvahtiNimi").innerHTML = "KIISKINEN";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kakkoskoppariNimi").innerHTML = "PIIPONNIEMI";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kolmoskoppariNimi").innerHTML = "J. KORHONEN";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Maa 2 - 9";
	document.getElementById("jokeriNimi").innerHTML = "R. KORHONEN";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Väri 2 - 13, A, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

function joukkueHyvinkää() {
	joukkue = Hyvinkää;
	var index = vastustajat.indexOf("Tahko");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("kotiLogo").src="./Tahko_kiille_png.png";
	document.getElementById("lukkariNimi").innerHTML = "ALANEN";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Maa 2 - 8";
	document.getElementById("sieppariNimi").innerHTML = "LEHTOLA";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("ykkösvahtiNimi").innerHTML = "VIKSTRÖM";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kakkosvahtiNimi").innerHTML = "KUITUNEN";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kakkospolttajaNimi").innerHTML = "HUUSKO";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kolmospolttajaNimi").innerHTML = "IKONEN";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Väri 2 - 13, A";
	document.getElementById("kolmosvahtiNimi").innerHTML = "PATOVA";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("kakkoskoppariNimi").innerHTML = "NURMIO";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 9";
	document.getElementById("kolmoskoppariNimi").innerHTML = "MATIKKA";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("jokeriNimi").innerHTML = "NIEMI";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Väri 2 - 13, A, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

function joukkueKempele() {
	joukkue = Kempele;
	var index = vastustajat.indexOf("Kempele");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("kotiLogo").src="./KeKi-logo_kulta.png";
	document.getElementById("lukkariNimi").innerHTML = "LASSILA";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("sieppariNimi").innerHTML = "A. KORHONEN";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Väri 2 - 13, A";
	document.getElementById("ykkösvahtiNimi").innerHTML = "SAASTAMOINEN";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("kakkosvahtiNimi").innerHTML = "HAAPAKOSKI";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Väri 2 - 13, A";
	document.getElementById("kakkospolttajaNimi").innerHTML = "KESKI-PITÄJÄ";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kolmospolttajaNimi").innerHTML = "T. KORHONEN";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kolmosvahtiNimi").innerHTML = "SAVIKOSKI";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kakkoskoppariNimi").innerHTML = "OJALA";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kolmoskoppariNimi").innerHTML = "ISOKETO";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Maa 2 - 9";
	document.getElementById("jokeriNimi").innerHTML = "M. KORHONEN";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Väri 2 - 13, A, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

function joukkueKitee() {
	joukkue = Kitee;
	var index = vastustajat.indexOf("Kipa");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("kotiLogo").src="./logo_f5419293.png";
	document.getElementById("lukkariNimi").innerHTML = "ESKELINEN";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("sieppariNimi").innerHTML = "PURMONEN";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Maa 2 - 9";
	document.getElementById("ykkösvahtiNimi").innerHTML = "LEHIKOINEN";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Maa 2 - 9";
	document.getElementById("kakkosvahtiNimi").innerHTML = "MÄKELÄ";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("kakkospolttajaNimi").innerHTML = "PEKKINEN";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("kolmospolttajaNimi").innerHTML = "VAINIKAINEN";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("kolmosvahtiNimi").innerHTML = "PARTANEN";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("kakkoskoppariNimi").innerHTML = "VASARAINEN";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("kolmoskoppariNimi").innerHTML = "VARONEN";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("jokeriNimi").innerHTML = "PIPPOLA";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Väri 2 - 13, A, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

function joukkueImatra() {
	joukkue = Imatra;
	var index = vastustajat.indexOf("IPV");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("kotiLogo").src="./ipv-logo-web.png";
	document.getElementById("lukkariNimi").innerHTML = "SURAKKA";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Maa 2 - 8";
	document.getElementById("sieppariNimi").innerHTML = "TOIKKA";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("ykkösvahtiNimi").innerHTML = "KOHONEN";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("kakkosvahtiNimi").innerHTML = "IIVARINEN";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kakkospolttajaNimi").innerHTML = "HYÖTYLÄINEN";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kolmospolttajaNimi").innerHTML = "PESONEN";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kolmosvahtiNimi").innerHTML = "MÄKELÄ";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 9";
	document.getElementById("kakkoskoppariNimi").innerHTML = "PIETINEN";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 9";
	document.getElementById("kolmoskoppariNimi").innerHTML = "HAUKKA";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("jokeriNimi").innerHTML = "SIKIÖ";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Maa 2 - 10, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

function joukkueRaahe() {
	joukkue = Raahe;
	var index = vastustajat.indexOf("PattU");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("kotiLogo").src="./pattu.png";
	document.getElementById("lukkariNimi").innerHTML = "STILL";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("sieppariNimi").innerHTML = "HANHISALO";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("ykkösvahtiNimi").innerHTML = "RAHUNEN";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kakkosvahtiNimi").innerHTML = "KARJALUOTO";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kakkospolttajaNimi").innerHTML = "SARKKINEN";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("kolmospolttajaNimi").innerHTML = "PELTO";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Maa 2 - 8";
	document.getElementById("kolmosvahtiNimi").innerHTML = "SUNI";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kakkoskoppariNimi").innerHTML = "JUNTUNEN";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kolmoskoppariNimi").innerHTML = "LUKKARI";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Maa 2 - 9";
	document.getElementById("jokeriNimi").innerHTML = "KESKI-KOUKKARI";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Väri 2 - 13, A, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

function joukkueKoskenkorva() {
	joukkue = Koskenkorva;
	var index = vastustajat.indexOf("Kossu");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("kotiLogo").src="./logo.png";
	document.getElementById("lukkariNimi").innerHTML = "VUOLLO";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Maa 2 - 8";
	document.getElementById("sieppariNimi").innerHTML = "VEITTIKOSKI";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("ykkösvahtiNimi").innerHTML = "SUVISALMI";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("kakkosvahtiNimi").innerHTML = "HAKOMÄKI";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Maa 2 - 6";
	document.getElementById("kakkospolttajaNimi").innerHTML = "JAKOBSSON";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 8";
	document.getElementById("kolmospolttajaNimi").innerHTML = "TUOHISAARI";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("kolmosvahtiNimi").innerHTML = "LATVALA";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 8";
	document.getElementById("kakkoskoppariNimi").innerHTML = "RANTAMÄKI";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("kolmoskoppariNimi").innerHTML = "KAUPPINEN";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("jokeriNimi").innerHTML = "OLLI";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Väri 2 - 13, A, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

function joukkueKankaanpää() {
	joukkue = Kankaanpää;
	var index = vastustajat.indexOf("Kankaanpää");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("kotiLogo").src="./1200px-KaMa_logo_2016.png";
	document.getElementById("lukkariNimi").innerHTML = "ITÄVALO";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Maa 2 - 7";
	document.getElementById("sieppariNimi").innerHTML = "KORVOLA";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("ykkösvahtiNimi").innerHTML = "OLLI";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Maa 2 - 6";
	document.getElementById("kakkosvahtiNimi").innerHTML = "UTUNEN";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Maa 2 - 6";
	document.getElementById("kakkospolttajaNimi").innerHTML = "PIISPANEN";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 6";
	document.getElementById("kolmospolttajaNimi").innerHTML = "KORTTEENPERÄ";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("kolmosvahtiNimi").innerHTML = "PELTOMÄKI";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 8";
	document.getElementById("kakkoskoppariNimi").innerHTML = "VUORENMÄKI";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("kolmoskoppariNimi").innerHTML = "VILANDER";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Maa 2 - 12";
	document.getElementById("jokeriNimi").innerHTML = "MIKKOLANAHO";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Maa 2 - 13, A, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

function joukkueKouvola() {
	joukkue = Kouvola;
	var index = vastustajat.indexOf("KPL");    // <-- Not supported in <IE9
	if (index !== -1) {
    		vastustajat.splice(index, 1);
	}
	document.getElementById("joukkueenValinta").style.display = "none";
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
	document.getElementById("joukkueTampere").style.display = "none";
	document.getElementById("joukkueKempele").style.display = "none";
	document.getElementById("joukkueKitee").style.display = "none";
	document.getElementById("joukkueImatra").style.display = "none";
	document.getElementById("joukkueRaahe").style.display = "none";
	document.getElementById("joukkueKoskenkorva").style.display = "none";
	document.getElementById("joukkueKankaanpää").style.display = "none";
	document.getElementById("kotiLogo").src="./1200px-KPL_logo.png";
	document.getElementById("lukkariNimi").innerHTML = "KIVIPELTO";
	document.getElementById("lukkariLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("sieppariNimi").innerHTML = "RUUSKA";
	document.getElementById("sieppariLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("ykkösvahtiNimi").innerHTML = "V. LUOMA";
	document.getElementById("ykkösvahtiLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("kakkosvahtiNimi").innerHTML = "LATVALA";
	document.getElementById("kakkosvahtiLyö").innerHTML = "Lyö: Väri 2 - 13, A";
	document.getElementById("kakkospolttajaNimi").innerHTML = "VARTAMA";
	document.getElementById("kakkospolttajaLyö").innerHTML = "Lyö: Maa 2 - 9";
	document.getElementById("kolmospolttajaNimi").innerHTML = "J. LUOMA";
	document.getElementById("kolmospolttajaLyö").innerHTML = "Lyö: Maa 2 - 11";
	document.getElementById("kolmosvahtiNimi").innerHTML = "SAUKKO";
	document.getElementById("kolmosvahtiLyö").innerHTML = "Lyö: Maa 2 - 13";
	document.getElementById("kakkoskoppariNimi").innerHTML = "MÄENTAUSTA";
	document.getElementById("kakkoskoppariLyö").innerHTML = "Lyö: Maa 2 - 10";
	document.getElementById("kolmoskoppariNimi").innerHTML = "NIKKANEN";
	document.getElementById("kolmoskoppariLyö").innerHTML = "Lyö: Maa 2 - 13, A";
	document.getElementById("jokeriNimi").innerHTML = "MERILÄINEN";
	document.getElementById("jokeriLyö").innerHTML = "Lyö: Väri 2 - 13, A, Jokeri";
	document.getElementById("vastustaja").style.display = "inline";
}

let vimpeli = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Kinnunen',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        sieppari: {
            nimi: 'Rinta-aho',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: true,
		lyöÄssiä: true,
        },
        ykkösvahti: {
            nimi: 'S. Lassila',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: true,
        },
        kakkosvahti: {
            nimi: 'L. Vihriälä',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkospolttaja: {
            nimi: 'J. Heikkala',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kolmospolttaja: {
            nimi: 'O. Heikkala',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kolmosvahti: {
            nimi: 'A. Lassila',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: true,
        },
        kakkoskoppari: {
            nimi: 'M. Vihriälä',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'Anttila',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: true,
		lyöÄssiä: true,
        },
        jokeri: {
            nimi: 'Vainionpää',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: true,
            lyöJokereita: true,
		lyöVäriä: true,
		lyöÄssiä: true,
        }
    } 
}

let Tampere = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Puhtimäki',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: true,
        },
        sieppari: {
            nimi: 'Lehtonen',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        ykkösvahti: {
            nimi: 'Kettunen',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkosvahti: {
            nimi: 'Myllyniemi',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkospolttaja: {
            nimi: 'Jussila',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmospolttaja: {
            nimi: 'Hokkanen',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: false,
        },
        kolmosvahti: {
            nimi: 'Lehto',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkoskoppari: {
            nimi: 'Lilja',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'Puputti',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: true,
        },
        jokeri: {
            nimi: 'Ruuska',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: true,
		lyöVäriä: true,
		lyöÄssiä: true,
        }
    } 
}

let Sotkamo = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Komulainen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
        },
        sieppari: {
            nimi: 'Huotari',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
        },
        ykkösvahti: {
            nimi: 'Kuosmanen',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkosvahti: {
            nimi: 'N. Korhonen',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkospolttaja: {
            nimi: 'Kotro',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmospolttaja: {
            nimi: 'Keinänen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
        },
        kolmosvahti: {
            nimi: 'Kiiskinen',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkoskoppari: {
            nimi: 'Piiponniemi',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'J. Korhonen',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        jokeri: {
            nimi: 'R. Korhonen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: true,
            lyöJokereita: true,
		lyöVäriä: true,
		lyöÄssiä: true,
        }
    } 
}

let Kouvola = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Kivipelto',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
        },
        sieppari: {
            nimi: 'Ruuska',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        ykkösvahti: {
            nimi: 'V. Luoma',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkosvahti: {
            nimi: 'Latvala',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: true,
		lyöÄssiä: true,
        },
        kakkospolttaja: {
            nimi: 'Vartama',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmospolttaja: {
            nimi: 'J. Luoma',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmosvahti: {
            nimi: 'Saukko',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkoskoppari: {
            nimi: 'Mäentausta',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'Nikkanen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
        },
        jokeri: {
            nimi: 'Meriläinen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: true,
		lyöVäriä: true,
		lyöÄssiä: true,
        }
    } 
}

let Hyvinkää = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Alanen',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        sieppari: {
            nimi: 'Lehtola',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        ykkösvahti: {
            nimi: 'Vikström',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkosvahti: {
            nimi: 'Kuitunen',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkospolttaja: {
            nimi: 'Huusko',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmospolttaja: {
            nimi: 'Ikonen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: true,
        },
        kolmosvahti: {
            nimi: 'Patova',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
        },
        kakkoskoppari: {
            nimi: 'Nurmio',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'Matikka',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        jokeri: {
            nimi: 'Niemi',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: true,
		lyöVäriä: true,
		lyöÄssiä: true,
        }
    } 
}

let Kempele = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Lassila',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        sieppari: {
            nimi: 'A. Korhonen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: true,
        },
        ykkösvahti: {
            nimi: 'Saastamoinen',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkosvahti: {
            nimi: 'Haapakoski',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: true,
		lyöÄssiä: true,
        },
        kakkospolttaja: {
            nimi: 'Keski-Pitäjä',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmospolttaja: {
            nimi: 'T. Korhonen',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: false,
        },
        kolmosvahti: {
            nimi: 'Savikoski',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkoskoppari: {
            nimi: 'Ojala',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'Isoketo',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        jokeri: {
            nimi: 'M. Korhonen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: true,
		lyöVäriä: true,
		lyöÄssiä: true,
        }
    } 
}

let Kitee = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Eskelinen',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        sieppari: {
            nimi: 'Purmonen',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: false,
        },
        ykkösvahti: {
            nimi: 'Lehikoinen',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkosvahti: {
            nimi: 'Mäkelä',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkospolttaja: {
            nimi: 'Pekkinen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
        },
        kolmospolttaja: {
            nimi: 'Vainikainen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: false,
        },
        kolmosvahti: {
            nimi: 'Partanen',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkoskoppari: {
            nimi: 'Vasarainen',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'Varonen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
        },
        jokeri: {
            nimi: 'Pippola',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: true,
		lyöVäriä: true,
		lyöÄssiä: true,
        }
    } 
}

 let Imatra = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Surakka',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        sieppari: {
            nimi: 'Toikka',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: false,
        },
        ykkösvahti: {
            nimi: 'Kohonen',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: true,
        },
        kakkosvahti: {
            nimi: 'Iivarinen',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkospolttaja: {
            nimi: 'Hyötyläinen',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmospolttaja: {
            nimi: 'Pesonen',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: false,
        },
        kolmosvahti: {
            nimi: 'Mäkelä',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkoskoppari: {
            nimi: 'Pietinen',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'Haukka',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        jokeri: {
            nimi: 'Sikiö',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: true,
		lyöVäriä: false,
		lyöÄssiä: false,
        }
    } 
}
 
 let Raahe = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Still',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        sieppari: {
            nimi: 'Hanhisalo',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: false,
        },
        ykkösvahti: {
            nimi: 'Rahunen',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkosvahti: {
            nimi: 'Karjaluoto',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkospolttaja: {
            nimi: 'Sarkkinen',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmospolttaja: {
            nimi: 'Pelto',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: false,
        },
        kolmosvahti: {
            nimi: 'Suni',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkoskoppari: {
            nimi: 'Juntunen',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'Lukkari',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        jokeri: {
            nimi: 'Keski-Koukkari',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: true,
		lyöVäriä: true,
		lyöÄssiä: true,
        }
    } 
}
 
 let Koskenkorva = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Vuollo',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        sieppari: {
            nimi: 'Veittikoski',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: false,
        },
        ykkösvahti: {
            nimi: 'Suvisalmi',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkosvahti: {
            nimi: 'Hakomäki',
            lyöMin: 2,
            lyöMax: 6,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkospolttaja: {
            nimi: 'Jakobsson',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmospolttaja: {
            nimi: 'Tuohisaari',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: false,
        },
        kolmosvahti: {
            nimi: 'Latvala',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkoskoppari: {
            nimi: 'Rantamäki',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'Kauppinen',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        jokeri: {
            nimi: 'Olli',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: true,
		lyöVäriä: true,
		lyöÄssiä: true,
        }
    } 
}
 
 let Kankaanpää = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Itävalo',
            lyöMin: 2,
            lyöMax: 7,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        sieppari: {
            nimi: 'Korvola',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: false,
        },
        ykkösvahti: {
            nimi: 'Olli',
            lyöMin: 2,
            lyöMax: 6,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkosvahti: {
            nimi: 'Utunen',
            lyöMin: 2,
            lyöMax: 6,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöVäriä: false,
		lyöÄssiä: false,
        },
        kakkospolttaja: {
            nimi: 'Piispanen',
            lyöMin: 2,
            lyöMax: 6,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmospolttaja: {
            nimi: 'Kortteenperä',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: false,
        },
        kolmosvahti: {
            nimi: 'Peltomäki',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkoskoppari: {
            nimi: 'Vuorenmäki',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'Vilander',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        jokeri: {
            nimi: 'Mikkolanaho',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: true,
		lyöVäriä: false,
		lyöÄssiä: true,
        }
    } 
}

let JymyJussit = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Lehtinen',
            lyöMin: 2,
            lyöMax: 7,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        sieppari: {
            nimi: 'J. Kettunen',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        ykkösvahti: {
            nimi: 'Marjamäki',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: true,
            lyöJokereita: false,
		lyöVäriä: true,
		lyöÄssiä: true,
        },
        kakkosvahti: {
            nimi: 'Salmela',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkospolttaja: {
            nimi: 'Tyynelä',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmospolttaja: {
            nimi: 'V. Kettunen',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmosvahti: {
            nimi: 'Kontio',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kakkoskoppari: {
            nimi: 'Raunio',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        kolmoskoppari: {
            nimi: 'Sillanpää',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
		lyöÄssiä: false,
        },
        jokeri: {
            nimi: 'Hallasuo',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: true,
            lyöJokereita: true,
		lyöVäriä: true,
		lyöÄssiä: true,
        }
    } 
}

//lukkari
function lyö1() { 
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
	if (kortti.Arvo === "1" && joukkue.pelaajat.lukkari.lyöÄssiä === true) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
    } else if (kortti.Maa === valittuMaa && kortti.Arvo >= joukkue.pelaajat.lukkari.lyöMin && kortti.Arvo <= joukkue.pelaajat.lukkari.lyöMax) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;    
    } else if (joukkue.pelaajat.lukkari.lyöVäriä === true && kortti.Arvo >= joukkue.pelaajat.lukkari.lyöMin && kortti.Arvo <= joukkue.pelaajat.lukkari.lyöMax && kortti.Maa === valittuMaa2) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide1() {
        document.getElementById("pakka1").style.display = "none";
        }
        hide1();
        document.getElementById("0").style.backgroundColor = "gray";
        function show1() {
		document.getElementById("pakka2").style.display = "grid";
            	document.getElementById("pakka2").style.visibility = "visible";	
        }
        show1();
    }
}

//sieppari
function lyö2() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
    if (kortti.Arvo === "1" && joukkue.pelaajat.sieppari.lyöÄssiä === true) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	
    } else if (kortti.Maa === valittuMaa && kortti.Arvo >= joukkue.pelaajat.sieppari.lyöMin && kortti.Arvo <= joukkue.pelaajat.sieppari.lyöMax) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= joukkue.pelaajat.sieppari.lyöMin && kortti.Arvo <= joukkue.pelaajat.sieppari.lyöMax && joukkue.pelaajat.sieppari.lyöVäriä === true) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide2() {
        document.getElementById("pakka2").style.display = "none";
        }
        hide2();
        document.getElementById("1").style.backgroundColor = "gray";
        function show2() {
		document.getElementById("pakka3").style.display = "grid";
            document.getElementById("pakka3").style.visibility = "visible";
        }
        show2();
    }
}

//ykkösvahti
function lyö3() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   	if (kortti.Arvo === "1" && joukkue.pelaajat.ykkösvahti.lyöÄssiä === true) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	}
    else if (kortti.Maa === valittuMaa && kortti.Arvo >= joukkue.pelaajat.ykkösvahti.lyöMin && kortti.Arvo <= joukkue.pelaajat.ykkösvahti.lyöMax) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= joukkue.pelaajat.ykkösvahti.lyöMin && kortti.Arvo <= joukkue.pelaajat.ykkösvahti.lyöMax && joukkue.pelaajat.ykkösvahti.lyöVäriä === true) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide3() {
        document.getElementById("pakka3").style.display = "none";
        }
        hide3();
        document.getElementById("2").style.backgroundColor = "gray";
        function show3() {
		document.getElementById("pakka4").style.display = "grid";
            document.getElementById("pakka4").style.visibility = "visible";
        }
        show3();
    }
}

//kakkosvahti
function lyö4() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   if (kortti.Arvo === "1" && joukkue.pelaajat.kakkosvahti.lyöÄssiä === true) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	
    } else if (kortti.Maa === valittuMaa && kortti.Arvo >= joukkue.pelaajat.kakkosvahti.lyöMin && kortti.Arvo <= joukkue.pelaajat.kakkosvahti.lyöMax) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut; 
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= joukkue.pelaajat.kakkosvahti.lyöMin && kortti.Arvo <= joukkue.pelaajat.kakkosvahti.lyöMax && joukkue.pelaajat.kakkosvahti.lyöVäriä === true) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide4() {
        document.getElementById("pakka4").style.display = "none";
        }
        hide4();
        document.getElementById("3").style.backgroundColor = "gray";
        function show4() {
		document.getElementById("pakka5").style.display = "grid";
            document.getElementById("pakka5").style.visibility = "visible";
        }
        show4();
    }
}

//kakkospolttaja
function lyö5() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   	if (kortti.Arvo === "1" && joukkue.pelaajat.kakkospolttaja.lyöÄssiä === true) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	}
    else if (kortti.Maa === valittuMaa && kortti.Arvo >= joukkue.pelaajat.kakkospolttaja.lyöMin && kortti.Arvo <= joukkue.pelaajat.kakkospolttaja.lyöMax) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= joukkue.pelaajat.kakkospolttaja.lyöMin && kortti.Arvo <= joukkue.pelaajat.kakkospolttaja.lyöMax && joukkue.pelaajat.kakkospolttaja.lyöVäriä === true) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide5() {
        document.getElementById("pakka5").style.display = "none";
        }
        hide5();
        document.getElementById("4").style.backgroundColor = "gray";
        function show5() {
		document.getElementById("pakka6").style.display = "grid";
            document.getElementById("pakka6").style.visibility = "visible";
        }
        show5();
    }
}

//kolmospolttaja
function lyö6() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   if (kortti.Arvo === "1" && joukkue.pelaajat.kolmospolttaja.lyöÄssiä === true) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	
    } else if (kortti.Maa === valittuMaa && kortti.Arvo >= joukkue.pelaajat.kolmospolttaja.lyöMin && kortti.Arvo <= joukkue.pelaajat.kolmospolttaja.lyöMax) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= joukkue.pelaajat.kolmospolttaja.lyöMin && kortti.Arvo <= joukkue.pelaajat.kolmospolttaja.lyöMax && joukkue.pelaajat.kolmospolttaja.lyöVäriä === true) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide6() {
        document.getElementById("pakka6").style.display = "none";
        }
        hide6();
        document.getElementById("5").style.backgroundColor = "gray";
        function show6() {
		document.getElementById("pakka7").style.display = "grid";
            document.getElementById("pakka7").style.visibility = "visible";
        }
        show6();
    }
}

//kolmosvahti
function lyö7() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
	if (kortti.Arvo === "1" && joukkue.pelaajat.kolmosvahti.lyöÄssiä === true) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	
    } else if (kortti.Maa === valittuMaa && kortti.Arvo >= joukkue.pelaajat.kolmosvahti.lyöMin && kortti.Arvo <= joukkue.pelaajat.kolmosvahti.lyöMax) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= joukkue.pelaajat.kolmosvahti.lyöMin && kortti.Arvo <= joukkue.pelaajat.kolmosvahti.lyöMax && joukkue.pelaajat.kolmosvahti.lyöVäriä === true) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide7() {
        document.getElementById("pakka7").style.display = "none";
        }
        hide7();
        document.getElementById("6").style.backgroundColor = "gray";
        function show7() {
		document.getElementById("pakka8").style.display = "grid";
            document.getElementById("pakka8").style.visibility = "visible";
        }
        show7();
    }
}

//kakkoskoppari
function lyö8() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   	if (kortti.Arvo === "1" && joukkue.pelaajat.kakkoskoppari.lyöÄssiä === true) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	}
    else if (kortti.Maa === valittuMaa && kortti.Arvo >= joukkue.pelaajat.kakkoskoppari.lyöMin && kortti.Arvo <= joukkue.pelaajat.kakkoskoppari.lyöMax) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= joukkue.pelaajat.kakkoskoppari.lyöMin && kortti.Arvo <= joukkue.pelaajat.kakkoskoppari.lyöMax && joukkue.pelaajat.kakkoskoppari.lyöVäriä === true) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide8() {
        document.getElementById("pakka8").style.display = "none";
        }
        hide8();
        document.getElementById("7").style.backgroundColor = "gray";
        function show8() {
		document.getElementById("pakka9").style.display = "grid";
            document.getElementById("pakka9").style.visibility = "visible";
        }
        show8();
    }
}

//kolmoskoppari
function lyö9() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   if (kortti.Arvo === "1" && joukkue.pelaajat.kolmoskoppari.lyöÄssiä === true) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	
    } else if (kortti.Maa === valittuMaa && kortti.Arvo >= joukkue.pelaajat.kolmoskoppari.lyöMin && kortti.Arvo <= joukkue.pelaajat.kolmoskoppari.lyöMax) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= joukkue.pelaajat.kolmoskoppari.lyöMin && kortti.Arvo <= joukkue.pelaajat.kolmoskoppari.lyöMax && joukkue.pelaajat.kolmoskoppari.lyöVäriä === true) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide9() {
        document.getElementById("pakka9").style.display = "none";
        }
        hide9();
        document.getElementById("8").style.backgroundColor = "gray";
        function show9() {
		document.getElementById("pakka10").style.display = "grid";
            document.getElementById("pakka10").style.visibility = "visible";
        }
        show9();
    }
}

//jokeri
function lyö10() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
    if (kortti.Maa === "Joker") {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    }
	else if (kortti.Arvo === "1" && joukkue.pelaajat.jokeri.lyöÄssiä === true) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	}
    else if (kortti.Maa === valittuMaa && kortti.Arvo >= joukkue.pelaajat.jokeri.lyöMin && kortti.Arvo <= joukkue.pelaajat.jokeri.lyöMax) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= joukkue.pelaajat.jokeri.lyöMin && kortti.Arvo <= joukkue.pelaajat.jokeri.lyöMax && joukkue.pelaajat.jokeri.lyöVäriä === true) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide10() {
        document.getElementById("pakka10").style.display = "none";
        }
        hide10();
        document.getElementById("9").style.backgroundColor = "gray";
        function show10() {
		document.getElementById("pakka11").style.display = "grid";
            document.getElementById("pakka11").style.visibility = "visible";	
        }
        show10();
	function showUp() {
		document.getElementById("uusiPeli").style.display = "inline";
		document.getElementById("uusiPeli").style.visibility = "visible";
	}
	showUp();
        if (juoksut > vierastulos) {
            document.getElementById("lopputulos").innerHTML = "Voitto!";
		pelatutPelit = pelatutPelit + 1;
		pisteet = pisteet + 2;
		document.getElementById("pisteet").innerHTML = "Pisteet: " + pisteet;
		if (pelatutPelit % 2 == 0) {
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else {
			joukkueenRahat = joukkueenRahat + 2000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		}
		if (vastustaja_arvottu === "Vimpeli" || vastustaja_arvottu === "Manse") {
			joukkueenRahat = joukkueenRahat + 4000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (vastustaja_arvottu === "KPL" || vastustaja_arvottu === "Sotkamo") {
			joukkueenRahat = joukkueenRahat + 2000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else {
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		}
        } else if (juoksut === vierastulos) {
            document.getElementById("lopputulos").innerHTML = "Tasapeli!";
		pisteet = pisteet + 1;
		pelatutPelit = pelatutPelit + 1;
		document.getElementById("pisteet").innerHTML = "Pisteet: " + pisteet;
        } else {
		pelatutPelit = pelatutPelit + 1;
        	document.getElementById("lopputulos").innerHTML = "Tappio!";
		document.getElementById("pisteet").innerHTML = "Pisteet: " + pisteet;
        }
	    juoksuero = juoksuero + juoksut - vierastulos;
	    document.getElementById("juoksuero").innerHTML = "Juoksuero: " + juoksuero;
    }
	sijoitusKesken();
	document.getElementById("pelatutPelit").innerHTML = "Pelatut pelit: " + pelatutPelit + "/12";
}

function sijoitusKesken() {
	if (pelatutPelit === 1) {
		if (pisteet === 2 && juoksuero >= 6) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 2 && juoksuero === 5) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 2 && juoksuero === 4) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 2 && juoksuero === 3) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
		} else if (pisteet === 2 && juoksuero === 2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 2 && juoksuero === 1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";
			sijoitus = 6;
		} else if (pisteet === 1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 0 && juoksuero === -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 0 && juoksuero === -2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 0 && juoksuero === -3) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
		} else if (pisteet === 0 && juoksuero === -4) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 0 && juoksuero === -5) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
		} else if (pisteet === 0 && juoksuero < -5) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		}
	} else if (pelatutPelit === 2) {
		if (pisteet >= 4) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 3 && juoksuero >= 14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 3 && juoksuero < 14 && juoksuero >= 8) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 3 && juoksuero < 8 && juoksuero >= 7) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 3 && juoksuero < 7 && juoksuero >= 6) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
		} else if (pisteet === 3 && juoksuero < 6 && juoksuero >= 4) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 3 && juoksuero < 4 && juoksuero >= 2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";
			sijoitus = 6;
		} else if (pisteet === 3 && juoksuero < 2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 2 && juoksuero >= 1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 2 && juoksuero < 1 && juoksuero >= 0) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 2 && juoksuero < 0) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 1 && juoksuero >= -5) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 1 && juoksuero < -5 && juoksuero >= -6) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
		} else if (pisteet === 1 && juoksuero < -6 && juoksuero >= -7) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 1 && juoksuero < -7 && juoksuero >= -8) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		}
	} else if (pelatutPelit === 3) {
		if (pisteet >= 6) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 5 && juoksuero >= 21) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 5 && juoksuero < 21 && juoksuero >= 11) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 5 && juoksuero < 11) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 4 && juoksuero >= 11) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 4 && juoksuero < 11 && juoksuero >= 10) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
		} else if (pisteet === 4 && juoksuero < 10) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 3 && juoksuero >= 7) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 3 && juoksuero < 7 && juoksuero >= 4) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";
			sijoitus = 6;
		} else if (pisteet === 3 && juoksuero < 4 && juoksuero >= 2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 3 && juoksuero < 2 && juoksuero >= -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 3 && juoksuero < -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 2 && juoksuero >= -9) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 2 && juoksuero < -9 && juoksuero >= -10) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
		} else if (pisteet === 2 && juoksuero < -10) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 1 && juoksuero >= -11) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 1 && juoksuero < -11 && juoksuero >= -12) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		}
	} else if (pelatutPelit === 4) {
		if (pisteet >= 8) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 7 && juoksuero >= 27) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 7 && juoksuero < 27) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 6 && juoksuero >= 14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 6 && juoksuero < 14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 5 && juoksuero >= 14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 5 && juoksuero >= 13 && juoksuero < 14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
		} else if (pisteet === 5 && juoksuero >= 9 && juoksuero < 13) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 5 && juoksuero < 9 && juoksuero >= 5) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";	
			sijoitus = 6;
		} else if (pisteet === 5 && juoksuero < 5) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 4 && juoksuero >= 3) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 4 && juoksuero < 3) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 3 && juoksuero >= -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 3 && juoksuero < -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 2 && juoksuero >= -11) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 2 && juoksuero >= -13 && juoksuero < -11) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
		} else if (pisteet === 2 && juoksuero < -13 && juoksuero >= -14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 2 && juoksuero < -14 && juoksuero >= -16) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		}
	} else if (pelatutPelit === 5) {
		if (pisteet >= 10) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 9 && juoksuero >= 34) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 9 && juoksuero < 34) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 8 && juoksuero >= 18) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 8 && juoksuero < 18) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 7 && juoksuero >= 18) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 7 && juoksuero >= 17 && juoksuero < 18) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
		} else if (pisteet === 7 && juoksuero < 17) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 6 && juoksuero >= 11) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 6 && juoksuero < 11 && juoksuero >= 6) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";
			sijoitus = 6;
		} else if (pisteet === 6 && juoksuero < 6) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 5 && juoksuero >= 3) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 5 && juoksuero < 3) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 4 && juoksuero >= -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 4 && juoksuero < -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 3 && juoksuero >= -14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 3 && juoksuero < -14 && juoksuero >= -16) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
		} else if (pisteet === 3 && juoksuero < -16 && juoksuero >= -18) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 3 && juoksuero < -18 && juoksuero >= -20) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		}
	} else if (pelatutPelit === 6) {
		if (pisteet >= 11) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 10 && juoksuero >= 41) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 10 && juoksuero < 41) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 9 && juoksuero >= 22) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 9 && juoksuero === 21) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 9 && juoksuero === 20) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
		} else if (pisteet === 9 && juoksuero < 20) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 8) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 7 && juoksuero >= 13) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 7 && juoksuero < 13 && juoksuero >= 7) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";
			sijoitus = 6;
		} else if (pisteet === 7 && juoksuero < 7) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 6 && juoksuero >= 4) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 6 && juoksuero < 4) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 5 && juoksuero >= -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 5 && juoksuero < -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 4) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 3 && juoksuero >= -17) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 3 && juoksuero < -17 && juoksuero >= -19) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
		} else if (pisteet === 3 && juoksuero < -19 && juoksuero >= -22) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 3 && juoksuero < -22 && juoksuero >= -24) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		} 	
	} else if (pelatutPelit === 7) {
		if (pisteet >= 12) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 11 && juoksuero >= 48) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 11 && juoksuero < 48 && juoksuero >= 24) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 11 && juoksuero < 24) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 10 && juoksuero >= 25) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 10 && juoksuero === 24) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
		} else if (pisteet === 10 && juoksuero < 24) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 9) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 8 && juoksuero >= 15) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 8 && juoksuero < 15 && juoksuero >= 8) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";
			sijoitus = 6;
		} else if (pisteet === 8 && juoksuero < 8) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 7 && juoksuero >= 5) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 7 && juoksuero < 5) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 6 && juoksuero >= -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 6 && juoksuero < -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 5) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 4 && juoksuero >= -20) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 4 && juoksuero < -20 && juoksuero >= -22) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
		} else if (pisteet === 4 && juoksuero < -22) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 3 && juoksuero >= -25) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 3 && juoksuero >= -27 && juoksuero < -25) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		} 
	} else if (pelatutPelit === 8) {
		if (pisteet >= 14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 13 && juoksuero >= 55) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 13 && juoksuero < 55 && juoksuero >= 28) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 13 && juoksuero < 28) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 12) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 11 && juoksuero >= 29) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 11 && juoksuero < 29 && juoksuero >= 27) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
		} else if (pisteet === 11 && juoksuero <27) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 10) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 9 && juoksuero >= 17) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 9 && juoksuero < 17 && juoksuero >= 9) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";
			sijoitus = 6;
		} else if (pisteet === 9 && juoksuero < 9) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 8) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 7 && juoksuero >= 5) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 7 && juoksuero < 5 && juoksuero > -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 7 && juoksuero < -1) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 6) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 5 && juoksuero >= -23) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 5 && juoksuero < -23 && juoksuero >= -26) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
		} else if (pisteet === 5 && juoksuero < -26) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 4 && juoksuero >= -29) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 4 && juoksuero < -29 && juoksuero >= -31) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		} 
	} else if (pelatutPelit === 9) {
		if (pisteet >= 16) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 15 && juoksuero >= 62) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 15 && juoksuero < 62) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 14 && juoksuero >= 32) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 14 && juoksuero < 32) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 13 && juoksuero >= 32) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 13 && juoksuero === 31) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
		} else if (pisteet === 13 && juoksuero < 31) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 12) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 11 && juoksuero >= 20) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 11 && juoksuero < 20 && juoksuero >= 11) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";
			sijoitus = 6;
		} else if (pisteet === 11 && juoksuero < 11) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 10) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 9 && juoksuero >= 6) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 9 && juoksuero < 6) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 8) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 7 && juoksuero >= -2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 7 && juoksuero < -2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 5 && juoksuero >= -26) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 5 && juoksuero < -26 && juoksuero >= -29) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
		} else if (pisteet === 5 && juoksuero >= -32 && juoksuero < -29) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 5 && juoksuero < -32 && juoksuero >= -35) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		} 
	} else if (pelatutPelit === 10) {
		if (pisteet >= 18) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 17 && juoksuero >= 68) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 17 && juoksuero < 68) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 16) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 15 && juoksuero >= 35) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 15 && juoksuero < 35) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 14 && juoksuero >= 36) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 14 && juoksuero < 36 && juoksuero >= 34) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
		} else if (pisteet === 14 && juoksuero < 34) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";	
			sijoitus = 5;
		} else if (pisteet >= 12 && pisteet < 14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 11 && juoksuero >= 22) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 11 && juoksuero < 22 && juoksuero >= 12) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";
			sijoitus = 6;
		} else if (pisteet === 11 & juoksuero < 12) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 10) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 9 && juoksuero >= 7) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 9 && juoksuero < 7) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 8 && juoksuero >= -2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 8 && juoksuero < -2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet >= 6 && pisteet < 8) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 5 && juoksuero >= -28) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 5 && juoksuero >= -32 && juoksuero < -28) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
		} else if (pisteet === 5 && juoksuero < -32 && juoksuero >= -36) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 5 && juoksuero < -36 && juoksuero >= -39) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		} 
	} else if (pelatutPelit === 11) {
		if (pisteet >= 20) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 19 && juoksuero >= 75) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
		} else if (pisteet === 19 && juoksuero < 75) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 18) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 17 && juoksuero >= 39) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
		} else if (pisteet === 17 && juoksuero < 39) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 16) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 15 && juoksuero >= 40) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
		} else if (pisteet === 15 && juoksuero < 40 && juoksuero >= 38) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
		} else if (pisteet === 15 && pisteet < 38) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 13 && juoksuero >= 24) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
		} else if (pisteet === 13 & juoksuero < 24 && juoksuero >= 13) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";
			sijoitus = 6;
		} else if (pisteet === 13 && juoksuero < 13) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 12) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 11 && juoksuero >= 7) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
		} else if (pisteet === 11 && juoksuero < 7) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 10) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 9 && juoksuero >= -2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
		} else if (pisteet === 9 && juoksuero < -2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet >= 7 && pisteet < 9) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 6 && juoksuero >= -31) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
		} else if (pisteet === 6 && juoksuero < -31 && juoksuero >= -35) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
		} else if (pisteet === 6 && juoksuero < -35) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 5 && juoksuero >= -40) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
		} else if (pisteet === 5 && juoksuero >= -43 && juoksuero < 40) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
		} 
	} else if (pelatutPelit === 12) {
		if (pisteet >= 21) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
			joukkueenRahat = joukkueenRahat + 20000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 20 && juoksuero >= 82) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 1.";
			sijoitus = 1;
			joukkueenRahat = joukkueenRahat + 20000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 20 && juoksuero < 82) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
			joukkueenRahat = joukkueenRahat + 17000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 19 && juoksuero >= 42) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 2.";
			sijoitus = 2;
			joukkueenRahat = joukkueenRahat + 17000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 19 && juoksuero < 42) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
			joukkueenRahat = joukkueenRahat + 14000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 18) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
			joukkueenRahat = joukkueenRahat + 14000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 17 && juoksuero >= 43 ) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 3.";
			sijoitus = 3;
			joukkueenRahat = joukkueenRahat + 14000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 17 && juoksuero >= 41 && juoksuero < 43 ) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 4.";
			sijoitus = 4;
			joukkueenRahat = joukkueenRahat + 10000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 17 && juoksuero < 41) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
			joukkueenRahat = joukkueenRahat + 8000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet >= 15 && pisteet < 17) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
			joukkueenRahat = joukkueenRahat + 8000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 14 && juoksuero >= 26) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 5.";
			sijoitus = 5;
			joukkueenRahat = joukkueenRahat + 8000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 14 && juoksuero >= 14 && juoksuero < 26) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 6.";
			sijoitus = 6;
			joukkueenRahat = joukkueenRahat + 7000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 14 & juoksuero < 14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
			joukkueenRahat = joukkueenRahat + 6000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet >= 12 && pisteet < 14) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
			joukkueenRahat = joukkueenRahat + 6000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 11 && juoksuero >= 8) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 7.";
			sijoitus = 7;
			joukkueenRahat = joukkueenRahat + 6000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 11 && juoksuero < 8) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
			joukkueenRahat = joukkueenRahat + 5500;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 10 && juoksuero >= -2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 8.";
			sijoitus = 8;
			joukkueenRahat = joukkueenRahat + 5500;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 10 && juoksuero < -2) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
			joukkueenRahat = joukkueenRahat + 5000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet >= 8 && pisteet < 10) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
			joukkueenRahat = joukkueenRahat + 5000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 7 && juoksuero >= -34) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 9.";
			sijoitus = 9;
			joukkueenRahat = joukkueenRahat + 5000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 7 && pisteet < 34 && juoksuero >= -38) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 10.";
			sijoitus = 10;
			joukkueenRahat = joukkueenRahat + 4500;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 7 && juoksuero < -38) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
			joukkueenRahat = joukkueenRahat + 4000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 6 && juoksuero >= -43) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 11.";
			sijoitus = 11;
			joukkueenRahat = joukkueenRahat + 4000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 6 && juoksuero < -43 && juoksuero >= -47) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
			joukkueenRahat = joukkueenRahat + 3000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else if (pisteet === 6 && juoksuero < -47) {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 12.";
			sijoitus = 12;
			joukkueenRahat = joukkueenRahat + 3000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} else {
			document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: 13.";
			sijoitus = 13;
			joukkueenRahat = joukkueenRahat + 2000;
			document.getElementById("rahat").innerHTML = "Rahaa: " + joukkueenRahat;
		} 
	} else {
		document.getElementById("sijoitusKausi").innerHTML = "Sijoitus: ??.";
		}
}

function uusiPeli() {
	juoksut = 0;
	document.getElementById("kotitulos").innerHTML = juoksut;
	document.getElementById("0").style.backgroundColor = "red";
	document.getElementById("1").style.backgroundColor = "red";
	document.getElementById("2").style.backgroundColor = "red";
	document.getElementById("3").style.backgroundColor = "red";
	document.getElementById("4").style.backgroundColor = "red";
	document.getElementById("5").style.backgroundColor = "red";
	document.getElementById("6").style.backgroundColor = "red";
	document.getElementById("7").style.backgroundColor = "red";
	document.getElementById("8").style.backgroundColor = "red";
	document.getElementById("9").style.backgroundColor = "red";
	function hide0() {
        document.getElementById("uusiPeli").style.display = "none";
	document.getElementById("pakka11").style.display = "none";
		document.getElementById("vastustaja").style.display = "inline";
		document.getElementById("herttaValinta").style.display = "none";
    		document.getElementById("ruutuValinta").style.display = "none";
    		document.getElementById("ristiValinta").style.display = "none";
    		document.getElementById("pataValinta").style.display = "none";
    		document.getElementById("maanValinta").style.display = "none";
		document.getElementById("lopputulos").innerHTML = " ";
        }
	lataus();
        hide0();
	function show0() {
		document.getElementById("pakka1").style.display = "grid";
            	document.getElementById("pakka1").style.visibility = "hidden";
        }
        show0();	
}

//rakennaPakka(); //pakan rakennus
//sekoita(pakka); //pakan sekoitus

/*
2-10, 2x, A		1-21
2-10, A			22-42
2-10			43-63
2-9			    64-84
2-8			    85-105
2-7			    106-126
2-6			    127-147
2-5			    148-168
2-4			    169-189
2-3			    190-210


1. Vainionpää
7. Mäkelä
26. Rinta-aho
28. Anttila
51. A Lassila
52. S Lassila
68. L Vihriälä
77. Saukko
78. M Vihriälä
85. Kinnunen
98. J Heikkala
105. O Heikkala
126. Kanala
166. E Lassila
172. V Takala

Vimpeli		8
Manse		8
SoJy		7
KPL		    7
Tahko		6
JoMa		6
Kempele		5
KiPa		4
SJJ		    3
IPV		    3
PattU		3
Kossu		2
Kankaanpää	1
*/

/*
10:
Vimpeli     17      +68
Manse       15      +35
KPL         14      +36
Sotkamo     14      +34
Tahko       11      +22
Joma        11      +12
Kempele     9       +7
Kipa        8       -2
JymyJussit  5       -28
IPV         5       -32
PattU       5       -36
KossU       5       -39
Kankaanpää  1       -77

11:
Vimpeli     19      +75
Manse       17      +39
KPL         15      +40
Sotkamo     15      +38
Tahko       13      +24
Joma        13      +13
Kempele     11      +7
Kipa        9       -2
JymyJussit  6       -31
IPV         6       -35
PattU       5       -40
KossU       5       -43
Kankaanpää  2       -86

12:
Vimpeli     20      +82
Manse       19      +42
KPL         17      +43
Sotkamo     17      +41
Tahko       14      +26
Joma        14      +14
Kempele     11      +8
Kipa        10      -2
JymyJussit  7       -34
IPV         7       -38
PattU       6       -43
KossU       6       -47
Kankaanpää  2       -93

*/

var maat = ["pata", "ruutu", "risti", "hertta"];
var arvot = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var vastustajat = ["Manse", "Sotkamo", "KPL", "Tahko", "Joma", "Kempele", "Kipa", "JymyJussit", "IPV", "PattU", "Kossu", "Kankaanpää"];
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

function getRandomInt(max) { //random numero väliltä 0 - syötetty arvo
    return Math.floor(Math.random() * max);
  }

function vastustaja() {
    document.getElementById("vastustaja").style.display = "none";
	document.getElementById("testi").innerHTML = vastustaja_arvottu;
    //vierasjoukkue = getRandomInt(12);
    if (vastustaja_arvottu === "JymyJussit") { //JymyJussit
        document.getElementById("vierastulos").innerHTML = "3";
        document.getElementById("vieraslogo").src="./JymyJussit-STAMP.png";
        vierastulos = 3;
    } else if (vastustaja_arvottu === "Sotkamo") { //Jymy
        document.getElementById("vierastulos").innerHTML = "7";
        document.getElementById("vieraslogo").src="sojy_merkki_w.png";
        vierastulos = 7;
    } else if (vastustaja_arvottu === "Manse") { //Manse
	document.getElementById("vierastulos").innerHTML = "8";
        document.getElementById("vieraslogo").src="Manse_PP_2015_logo.png";
        vierastulos = 7;
    } else if (vastustaja_arvottu === "KPL") { //KPL
	document.getElementById("vierastulos").innerHTML = "7";
        document.getElementById("vieraslogo").src="1200px-KPL_logo.png";
        vierastulos = 7;
    } else if (vastustaja_arvottu === "Tahko") { //Tahko
	document.getElementById("vierastulos").innerHTML = "6";
        document.getElementById("vieraslogo").src="Tahko_kiille_png.png";
        vierastulos = 6;
    } else if (vastustaja_arvottu === "Joma") { //Joma
	document.getElementById("vierastulos").innerHTML = "6";
        document.getElementById("vieraslogo").src="logoleft.png";
        vierastulos = 6;
    } else if (vastustaja_arvottu === "Kempele") { //Kempeleen Kiri
	document.getElementById("vierastulos").innerHTML = "5";
        document.getElementById("vieraslogo").src="KeKi-logo_kulta.png";
        vierastulos = 5;
    } else if (vastustaja_arvottu === "Kipa") { //Kipa
	document.getElementById("vierastulos").innerHTML = "4";
        document.getElementById("vieraslogo").src="logo_f5419293.png";
        vierastulos = 4;
    } else if (vastustaja_arvottu === "IPV") { //IPV
	document.getElementById("vierastulos").innerHTML = "3";
        document.getElementById("vieraslogo").src="ipv-logo-web.png";
        vierastulos = 3;
    } else if (vastustaja_arvottu === "PattU") { //PattU
	document.getElementById("vierastulos").innerHTML = "3";
        document.getElementById("vieraslogo").src="pattu.png";
        vierastulos = 3;
    } else if (vastustaja_arvottu === "Kossu") { //Kossu
	document.getElementById("vierastulos").innerHTML = "2";
        document.getElementById("vieraslogo").src="logo.png";
        vierastulos = 2;
    } else if (vastustaja_arvottu === "Kankaanpää") { //Kankaanpää
	document.getElementById("vierastulos").innerHTML = "1";
        document.getElementById("vieraslogo").src="1200px-KaMa_logo_2016.png";
        vierastulos = 1;
    } else {
	    if (pisteet >= 20) {
		    sijoitus = "Sijoituksesi: 1.";
	    } else if (pisteet >= 19) {
		    sijoitus = "Sijoituksesi: 2.";
	    } else if (pisteet >= 18) {
		    sijoitus = "Sijoituksesi: 3.";
	    } else if (pisteet >= 17) {
		    sijoitus = "Sijoituksesi: 4.";
	    } else if (pisteet >= 15) {
		    sijoitus = "Sijoituksesi: 5.";
	    } else if (pisteet >= 14) {
		    sijoitus = "Sijoituksesi: 6.";
	    } else if (pisteet >= 11) {
		    sijoitus = "Sijoituksesi: 7.";
	    } else if (pisteet >= 10) {
		    sijoitus = "Sijoituksesi: 8.";
	    } else if (pisteet >= 8) {
		    sijoitus = "Sijoituksesi: 9.";
	    } else if (pisteet >= 7) {
		    sijoitus = "Sijoituksesi: 10.";
	    } else if (pisteet >= 6) {
		    sijoitus = "Sijoituksesi: 11.";
	    } else if (pisteet >= 5) {
		    sijoitus = "Sijoituksesi: 12.";
	    } else {
		    sijoitus = "Sijoituksesi: 13.";
	    }
	    window.alert("Kausi loppu! " + sijoitus);
        document.getElementById("vieraslogo").src="#";
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
    document.getElementById("pakanRakennus").style.display = "none";
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
	document.getElementById("pakanSekoitus").style.display = "none";
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
    document.getElementById("maanValinta").style.display = "none";
}
function maaRuutu() {
    valittuMaa = "ruutu";
    valittuMaa2 = "hertta";
    document.getElementById("herttaValinta").style.display = "none";
    document.getElementById("ruutuValinta").style.display = "none";
    document.getElementById("ristiValinta").style.display = "none";
    document.getElementById("pataValinta").style.display = "none";
    document.getElementById("maanValinta").style.display = "none";
}
function maaRisti() {
    valittuMaa = "risti";
    valittuMaa2 = "pata";
    document.getElementById("herttaValinta").style.display = "none";
    document.getElementById("ruutuValinta").style.display = "none";
    document.getElementById("ristiValinta").style.display = "none";
    document.getElementById("pataValinta").style.display = "none";
    document.getElementById("maanValinta").style.display = "none";
}
function maaPata() {
    valittuMaa = "pata";
    valittuMaa2 = "risti";
    document.getElementById("herttaValinta").style.display = "none";
    document.getElementById("ruutuValinta").style.display = "none";
    document.getElementById("ristiValinta").style.display = "none";
    document.getElementById("pataValinta").style.display = "none";
    document.getElementById("maanValinta").style.display = "none";
}

function joukkueVimpeli() {
	joukkue = vimpeli;
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
}

function joukkueSeinäjoki() {
	joukkue = JymyJussit;
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
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
}

function joukkueSotkamo() {
	joukkue = Sotkamo;
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
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
}

function joukkueKouvola() {
	joukkue = Kouvola;
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
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
}

function joukkueHyvinkää() {
	joukkue = Hyvinlkää;
	document.getElementById("joukkueVimpeli").style.display = "none";
	document.getElementById("joukkueSeinäjoki").style.display = "none";
	document.getElementById("joukkueSotkamo").style.display = "none";
	document.getElementById("joukkueKouvola").style.display = "none";
	document.getElementById("joukkueHyvinkää").style.display = "none";
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
		pisteet = pisteet + 2;
		document.getElementById("pisteet").innerHTML = "Pisteet: " + pisteet;
        } else if (juoksut === vierastulos) {
            document.getElementById("lopputulos").innerHTML = "Tasapeli!";
		pisteet = pisteet + 1;
		document.getElementById("pisteet").innerHTML = "Pisteet: " + pisteet;
        } else {
        	document.getElementById("lopputulos").innerHTML = "Tappio!";
		document.getElementById("pisteet").innerHTML = "Pisteet: " + pisteet;
        }
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
		document.getElementById("pakanRakennus").style.display = "inline";
		document.getElementById("pakanSekoitus").style.display = "inline";
		document.getElementById("herttaValinta").style.display = "inline";
    		document.getElementById("ruutuValinta").style.display = "inline";
    		document.getElementById("ristiValinta").style.display = "inline";
    		document.getElementById("pataValinta").style.display = "inline";
    		document.getElementById("maanValinta").style.display = "inline";
		document.getElementById("lopputulos").innerHTML = " ";
        }
        hide0();
	function show0() {
		document.getElementById("pakka1").style.display = "grid";
            	document.getElementById("pakka1").style.visibility = "visible";
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

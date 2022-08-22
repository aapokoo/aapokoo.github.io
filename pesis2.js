var maat = ["pata", "ruutu", "risti", "hertta"];
var arvot = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
let pakka = new Array();
let kortti;
let juoksut = 0;
let jokeri;
let batter = 0;
let vierasjoukkue;
let valittuMaa;
let valittuMaa2;
let grafiikkaArvo;

function getRandomInt(max) { //random numero väliltä 0 - syötetty arvo
    return Math.floor(Math.random() * max);
  }

function vastustaja() {
    document.getElementById("vastustaja").style.display = "none";
    vierasjoukkue = getRandomInt(8);
    if (vierasjoukkue === 0) {
        document.getElementById("vierastulos").innerHTML = "3";
        document.getElementById("vieraslogo").src="./JymyJussit-STAMP.png";
        vierastulos = 3;
    } else if (vierasjoukkue === 1) {
        document.getElementById("vierastulos").innerHTML = "7";
        document.getElementById("vieraslogo").src="sojy_merkki_w.png";
        vierastulos = 7;
    } else if (vierasjoukkue === 2) {
	document.getElementById("vierastulos").innerHTML = "8";
        document.getElementById("vieraslogo").src="Manse_PP_2015_logo.png";
        vierastulos = 7;
    } else if (vierasjoukkue === 3) {
	document.getElementById("vierastulos").innerHTML = "7";
        document.getElementById("vieraslogo").src="1200px-KPL_logo.png";
        vierastulos = 7;
    } else if (vierasjoukkue === 4) {
	document.getElementById("vierastulos").innerHTML = "6";
        document.getElementById("vieraslogo").src="Tahko_kiille_png.png";
        vierastulos = 6;
    } else if (vierasjoukkue === 5) {
	document.getElementById("vierastulos").innerHTML = "6";
        document.getElementById("vieraslogo").src="logoleft.png";
        vierastulos = 6;
    } else if (vierasjoukkue === 6) {
	document.getElementById("vierastulos").innerHTML = "5";
        document.getElementById("vieraslogo").src="KeKi-logo_kulta.png";
        vierastulos = 5;
    } else {
	document.getElementById("vierastulos").innerHTML = "4";
        document.getElementById("vieraslogo").src="logo_f5419293.png";
        vierastulos = 4;
    }
}

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

function nostaKortti(pakka) //nostaa päällimmäisen kortin
{
    return pakka.pop();
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

let joukkue = { //joukkueen pelaajat ja statsit
    pelaajat: {
        lukkari: {
            nimi: 'Kinnunen',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        sieppari: {
            nimi: 'Rinta-aho',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        ykkösvahti: {
            nimi: 'A. Lassila',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        kakkosvahti: {
            nimi: 'Saukko',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        kakkospolttaja: {
            nimi: 'S. Lassila',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        kolmospolttaja: {
            nimi: 'Heikkala',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        kolmosvahti: {
            nimi: 'L. Vihriälä',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        kakkoskoppari: {
            nimi: 'Anttila',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        kolmoskoppari: {
            nimi: 'M. Vihriälä',
            lyöMin: 2,
            lyöMax: 13,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        jokeri: {
            nimi: 'Vainionpää',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: true,
            lyöJokereita: true,
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
        },
        sieppari: {
            nimi: 'J. Kettunen',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        ykkösvahti: {
            nimi: 'Marjamäki',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: true,
            lyöJokereita: false,
        },
        kakkosvahti: {
            nimi: 'Salmela',
            lyöMin: 2,
            lyöMax: 11,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        kakkospolttaja: {
            nimi: 'Tyynelä',
            lyöMin: 2,
            lyöMax: 12,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        kolmospolttaja: {
            nimi: 'V. Kettunen',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        kolmosvahti: {
            nimi: 'Kontio',
            lyöMin: 2,
            lyöMax: 8,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        kakkoskoppari: {
            nimi: 'Raunio',
            lyöMin: 2,
            lyöMax: 10,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        kolmoskoppari: {
            nimi: 'Sillanpää',
            lyöMin: 2,
            lyöMax: 9,
            lyöKahdesti: false,
            lyöJokereita: false,
        },
        jokeri: {
            nimi: 'Hallasuo',
            lyöMin: 1,
            lyöMax: 13,
            lyöKahdesti: true,
            lyöJokereita: true,
        }
    } 
}

//Kinnunen
function lyö1() { 
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
    if (kortti.Maa === valittuMaa && kortti.Arvo >= 2 && kortti.Arvo <= 12) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide1() {
        document.getElementById("pakka1").style.display = "none";
        }
        hide1();
        document.getElementById("0").style.backgroundColor = "gray";
        function show1() {
            document.getElementById("pakka2").style.visibility = "visible";
        }
        show1();
    }
}

//Rinta-aho
function lyö2() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   	if (kortti.Arvo === 1) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	}
    if (kortti.Maa === valittuMaa && kortti.Arvo >= 2 && kortti.Arvo <= 13) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= 1 && kortti.Arvo <= 13) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide2() {
        document.getElementById("pakka2").style.display = "none";
        }
        hide2();
        document.getElementById("1").style.backgroundColor = "gray";
        function show2() {
            document.getElementById("pakka3").style.visibility = "visible";
        }
        show2();
    }
}

//A. Lassila
function lyö3() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   	if (kortti.Arvo === 1) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	}
    if (kortti.Maa === valittuMaa && kortti.Arvo >= 2 && kortti.Arvo <= 13) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else {
        function hide3() {
        document.getElementById("pakka3").style.display = "none";
        }
        hide3();
        document.getElementById("2").style.backgroundColor = "gray";
        function show3() {
            document.getElementById("pakka4").style.visibility = "visible";
        }
        show3();
    }
}

//Saukko
function lyö4() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   
    if (kortti.Maa === valittuMaa && kortti.Arvo >= 2 && kortti.Arvo <= 13) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else {
        function hide4() {
        document.getElementById("pakka4").style.display = "none";
        }
        hide4();
        document.getElementById("3").style.backgroundColor = "gray";
        function show4() {
            document.getElementById("pakka5").style.visibility = "visible";
        }
        show4();
    }
}

//S. Lassila
function lyö5() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   	if (kortti.Arvo === 1) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	}
    if (kortti.Maa === valittuMaa && kortti.Arvo >= 2 && kortti.Arvo <= 13) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else {
        function hide5() {
        document.getElementById("pakka5").style.display = "none";
        }
        hide5();
        document.getElementById("4").style.backgroundColor = "gray";
        function show5() {
            document.getElementById("pakka6").style.visibility = "visible";
        }
        show5();
    }
}

//Heikkala
function lyö6() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   
    if (kortti.Maa === valittuMaa && kortti.Arvo >= 2 && kortti.Arvo <= 12) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else {
        function hide6() {
        document.getElementById("pakka6").style.display = "none";
        }
        hide6();
        document.getElementById("5").style.backgroundColor = "gray";
        function show6() {
            document.getElementById("pakka7").style.visibility = "visible";
        }
        show6();
    }
}

//L. Vihriälä
function lyö7() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   
    if (kortti.Maa === valittuMaa && kortti.Arvo >= 2 && kortti.Arvo <= 13) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else {
        function hide7() {
        document.getElementById("pakka7").style.display = "none";
        }
        hide7();
        document.getElementById("6").style.backgroundColor = "gray";
        function show7() {
            document.getElementById("pakka8").style.visibility = "visible";
        }
        show7();
    }
}

//Anttila
function lyö8() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   	if (kortti.Arvo === 1) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	}
    if (kortti.Maa === valittuMaa && kortti.Arvo >= 2 && kortti.Arvo <= 13) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= 1 && kortti.Arvo <= 13) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide8() {
        document.getElementById("pakka8").style.display = "none";
        }
        hide8();
        document.getElementById("7").style.backgroundColor = "gray";
        function show8() {
            document.getElementById("pakka9").style.visibility = "visible";
        }
        show8();
    }
}

//M. Vihriälä
function lyö9() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
   
    if (kortti.Maa === valittuMaa && kortti.Arvo >= 2 && kortti.Arvo <= 13) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    
    } else {
        function hide9() {
        document.getElementById("pakka9").style.display = "none";
        }
        hide9();
        document.getElementById("8").style.backgroundColor = "gray";
        function show9() {
            document.getElementById("pakka10").style.visibility = "visible";
        }
        show9();
    }
}

//Vainionpää
function lyö10() {
    kortti = nostaKortti(pakka);
    nostettuKortti(kortti);
    if (kortti.Maa === "Joker") {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    }
	if (kortti.Arvo === 1) {
		juoksut++;
		document.getElementById("kotitulos").innerHTML = juoksut;
	}
    if (kortti.Maa === valittuMaa && kortti.Arvo >= 2 && kortti.Arvo <= 13) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else if (kortti.Maa === valittuMaa2 && kortti.Arvo >= 2 && kortti.Arvo <= 13) {
        juoksut++;
        document.getElementById("kotitulos").innerHTML = juoksut;
    } else {
        function hide10() {
        document.getElementById("pakka10").style.display = "none";
        }
        hide10();
        document.getElementById("9").style.backgroundColor = "gray";
        function show10() {
            document.getElementById("pakka11").style.visibility = "visible";
        }
        show10();
        if (juoksut > vierastulos) {
            document.getElementById("lopputulos").innerHTML = "Voitto!";
        } else if (juoksut === vierastulos) {
            document.getElementById("lopputulos").innerHTML = "Tasapeli!";
        } else {
            document.getElementById("lopputulos").innerHTML = "Tappio!";
        }
    }
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

//alkuperäisen pelin pelaaja database, oisko jako hinnan mukaan vai pelipaikan? ehkä hinnan? hinnan muut paitsi jokerit erikseen?

let lukkarit = {
	Nyman: {
        	pelipaikka: lukkari,
		palkka: 5000,
       		etunimi: 'Alpo',
        	lyöMin: 1,
      		lyöMax: 9,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 17-18,
		up: 14-18,
	},
	Koskela: {
        	pelipaikka: lukkari,
		palkka: 5000,
       		etunimi: 'Jaakko',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 16-18,
		up: 15-18,
	},
	Mäenpää: {
        	pelipaikka: lukkari,
		palkka: 6000,
       		etunimi: 'Tuomas',
        	lyöMin: 1,
      		lyöMax: 11,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 15-18,
		up: 16-18,
	},
	Tammi: {
        	pelipaikka: lukkari,
		palkka: 10000,
       		etunimi: 'Juhani',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 13-18,
		up: 12-18,
	},
	Aholainen: {
        	pelipaikka: lukkari,
		palkka: 10000,
       		etunimi: 'Jukka',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 13-18,
		up: 12-18,
	},
	Hautala: {
        	pelipaikka: lukkari,
		palkka: 10000,
       		etunimi: 'Esa',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 14-18,
		up: 10-18,
	},
	Saarijärvi: {
        	pelipaikka: lukkari,
		palkka: 11000,
       		etunimi: 'Urho',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 12-18,
	},
	Uusitalo: {
        	pelipaikka: lukkari,
		palkka: 11000,
       		etunimi: 'Seppo',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 11-18,
		up: 13-18,
	},
	Tuuri: {
        	pelipaikka: lukkari,
		palkka: 12000,
       		etunimi: 'Onni',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 11-18,
	},
	Ranta: {
        	pelipaikka: lukkari,
		palkka: 20000,
       		etunimi: 'Taneli',
        	lyöMin: 1,
      		lyöMax: 13,
		lyöVäriäMin: 1,
		lyöVäriäMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 10-18,
		up: 10-18,
	},
	Jakonen: {
        	pelipaikka: lukkari,
		palkka: 22000,
       		etunimi: 'Joonas',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: true,
		sp: 8-18,
		up: 9-18,
	},
	Ennala: {
        	pelipaikka: lukkari,
		palkka: 22000,
       		etunimi: 'Eino',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: true,
		sp: 9-18,
		up: 8-18,
	},
	Karvinen: {
        	pelipaikka: lukkari,
		palkka: 25000,
       		etunimi: 'Kari',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: true,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 6-18,
		up: 7-18,
	},
	Nissilä: {
        	pelipaikka: lukkari,
		palkka: 25000,
       		etunimi: 'Viki',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: true,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 7-18,
		up: 6-18,
	}
}

let etukenttä = {
	Rantamäki: {
        	pelipaikka: etukenttä,
		palkka: 5000,
       		etunimi: 'Lassi',
        	lyöMin: 1,
      		lyöMax: 9,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 17-18,
		up: 15-18,
	},
	Salomaa: {
        	pelipaikka: etukenttä,
		palkka: 5000,
       		etunimi: 'Riku',
        	lyöMin: 1,
      		lyöMax: 8,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 16-18,
		up: 15-18,
	},
	Hulkkonen: {
        	pelipaikka: etukenttä,
		palkka: 5000,
       		etunimi: 'Matti',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 15-18,
		up: 16-18,
	},
	Lähde: {
        	pelipaikka: etukenttä,
		palkka: 5000,
       		etunimi: 'Risto',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 16-18,
		up: 17-18,
	},
	Koljonen: {
        	pelipaikka: etukenttä,
		palkka: 5000,
       		etunimi: 'Armas',
        	lyöMin: 1,
      		lyöMax: 9,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 16-18,
		up: 16-18,
	},
	Ekqvist: {
        	pelipaikka: etukenttä,
		palkka: 5000,
       		etunimi: 'Matti',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 16-18,
		up: 16-18,
	},
	Tapanen: {
        	pelipaikka: etukenttä,
		palkka: 10000,
       		etunimi: 'Jorma',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 12-18,
	},
	Kivinen: {
        	pelipaikka: etukenttä,
		palkka: 10000,
       		etunimi: 'Santeri',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 11-18,
		up: 13-18,
	},
	Tarvainen: {
        	pelipaikka: etukenttä,
		palkka: 10000,
       		etunimi: 'Esko',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 12-18,
	},
	Lintula: {
        	pelipaikka: etukenttä,
		palkka: 10000,
       		etunimi: 'Tapio',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 13-18,
		up: 12-18,
	},
	Kuisma: {
        	pelipaikka: etukenttä,
		palkka: 10000,
       		etunimi: 'Ilmari',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 11-18,
		up: 14-18,
	},
	Joivio: {
        	pelipaikka: etukenttä,
		palkka: 10000,
       		etunimi: 'Juha',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 14-18,
		up: 10-18,
	},
	Puumalainen: {
        	pelipaikka: etukenttä,
		palkka: 11000,
       		etunimi: 'Eero',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 11-18,
	},
	Suokas: {
        	pelipaikka: etukenttä,
		palkka: 11000,
       		etunimi: 'Kari',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 11-18,
	},
	Kontio: {
        	pelipaikka: etukenttä,
		palkka: 20000,
       		etunimi: 'Paavo',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: true,
		sp: 10-18,
		up: 9-18,
	},
	Tarkka: {
        	pelipaikka: etukenttä,
		palkka: 20000,
       		etunimi: 'Roope',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: true,
		sp: 9-18,
		up: 8-18,
	},
	Haanpää: {
        	pelipaikka: etukenttä,
		palkka: 25000,
       		etunimi: 'Roope',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: true,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 8-18,
		up: 7-18,
	},
	Mäkilaakso: {
        	pelipaikka: etukenttä,
		palkka: 26000,
       		etunimi: 'Ismo',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: true,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 7-18,
		up: 6-18,
	}
}

let polttolinja = {
	Lampi: {
        	pelipaikka: polttolinja,
		palkka: 5000,
       		etunimi: 'Kalevi',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 17-18,
		up: 16-18,
	},
	Närhi: {
        	pelipaikka: polttolinja,
		palkka: 5000,
       		etunimi: 'Jaakko',
        	lyöMin: 1,
      		lyöMax: 9,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 17-18,
		up: 14-18,
	},
	Toivola: {
        	pelipaikka: polttolinja,
		palkka: 5000,
       		etunimi: 'Olli',
        	lyöMin: 1,
      		lyöMax: 9,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 15-18,
		up: 16-18,
	},
	Niiranen: {
        	pelipaikka: polttolinja,
		palkka: 5000,
       		etunimi: 'Sakari',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 15-18,
		up: 17-18,
	},
	Tuunanen: {
        	pelipaikka: polttolinja,
		palkka: 5000,
       		etunimi: 'Hannu',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 15-18,
		up: 16-18,
	},
	Raivio: {
        	pelipaikka: polttolinja,
		palkka: 5000,
       		etunimi: 'Valtteri',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 14-18,
		up: 16-18,
	},
	Kärkinen: {
        	pelipaikka: polttolinja,
		palkka: 5000,
       		etunimi: 'Kari',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 17-18,
		up: 16-18,
	},
	Lehto: {
        	pelipaikka: polttolinja,
		palkka: 5000,
       		etunimi: 'Veijo',
        	lyöMin: 1,
      		lyöMax: 9,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 17-18,
		up: 17-18,
	},
	Lindström: {
        	pelipaikka: polttolinja,
		palkka: 5000,
       		etunimi: 'Ilkka',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 16-18,
		up: 16-18,
	},
	Raski: {
        	pelipaikka: polttolinja,
		palkka: 5000,
       		etunimi: 'Jaakko',
        	lyöMin: 1,
      		lyöMax: 11,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 15-18,
		up: 17-18,
	},
	Kurki: {
        	pelipaikka: polttolinja,
		palkka: 6000,
       		etunimi: 'Jaakko',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 16-18,
		up: 13-18,
	},
	Lintulahti: {
        	pelipaikka: polttolinja,
		palkka: 6000,
       		etunimi: 'Ossi',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 14-18,
		up: 14-18,
	},
	Rautanen: {
        	pelipaikka: polttolinja,
		palkka: 10000,
       		etunimi: 'Sami',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 12-18,
	},
	Haapasalo: {
        	pelipaikka: polttolinja,
		palkka: 10000,
       		etunimi: 'Pauli',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 13-18,
		up: 10-18,
	},
	Joensuu: {
        	pelipaikka: polttolinja,
		palkka: 10000,
       		etunimi: 'Samuli',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 11-18,
		up: 13-18,
	},
	Luhta: {
        	pelipaikka: polttolinja,
		palkka: 10000,
       		etunimi: 'Tatu',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 10-18,
		up: 14-18,
	},
	Aalto: {
        	pelipaikka: polttolinja,
		palkka: 10000,
       		etunimi: 'Timo',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 11-18,
		up: 13-18,
	},
	Vilkas: {
        	pelipaikka: polttolinja,
		palkka: 10000,
       		etunimi: 'Simo',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 13-18,
		up: 11-18,
	},
	Hirvonen: {
        	pelipaikka: polttolinja,
		palkka: 10000,
       		etunimi: 'Jarmo',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 13-18,
		up: 10-18,
	},
	Nevala: {
        	pelipaikka: polttolinja,
		palkka: 10000,
       		etunimi: 'Ilpo',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 12-18,
	},
	Hämäläinen: {
        	pelipaikka: polttolinja,
		palkka: 10000,
       		etunimi: 'Kauko',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 14-18,
		up: 10-18,
	},
	Järvilahti: {
        	pelipaikka: polttolinja,
		palkka: 10000,
       		etunimi: 'Taavi',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 12-18,
	},
	Äijö: {
        	pelipaikka: polttolinja,
		palkka: 11000,
       		etunimi: 'Stig',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 10-18,
		up: 13-18,
	},
	Asikainen: {
        	pelipaikka: polttolinja,
		palkka: 11000,
       		etunimi: 'A-P',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 13-18,
		up: 10-18,
	},
	Harjunpää: {
        	pelipaikka: polttolinja,
		palkka: 11000,
       		etunimi: 'Heikki',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 11-18,
	},
	Poranen: {
        	pelipaikka: polttolinja,
		palkka: 11000,
       		etunimi: 'Pekka',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 11-18,
	},
	Ekblom: {
        	pelipaikka: polttolinja,
		palkka: 11000,
       		etunimi: 'Matti',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 11-18,
		up: 12-18,
	},
	Tikkanen: {
        	pelipaikka: polttolinja,
		palkka: 11000,
       		etunimi: 'Kimmo',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 11-18,
		up: 12-18,
	},
	Huttunen: {
        	pelipaikka: polttolinja,
		palkka: 20000,
       		etunimi: 'Harri',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: true,
		sp: 10-18,
		up: 9-18,
	},
	Halme: {
        	pelipaikka: polttolinja,
		palkka: 21000,
       		etunimi: 'Jouko',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: true,
		sp: 9-18,
		up: 8-18,
	},
	Hoppari: {
        	pelipaikka: polttolinja,
		palkka: 22000,
       		etunimi: 'Sami',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: true,
		sp: 8-18,
		up: 7-18,
	},
	Ahtio: {
        	pelipaikka: polttolinja,
		palkka: 23000,
       		etunimi: 'Martti',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: true,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 6-18,
		up: 8-18,
	},
	Luuri: {
        	pelipaikka: polttolinja,
		palkka: 25000,
       		etunimi: 'Vesa',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: true,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 7-18,
		up: 6-18,
	},
	Ståhlberg: {
        	pelipaikka: polttolinja,
		palkka: 25000,
       		etunimi: 'Teuvo',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: true,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 6-18,
		up: 6-18,
	}
}

let takakenttä = {
	Mäki: {
        	pelipaikka: takakenttä,
		palkka: 5000,
       		etunimi: 'Aapeli',
        	lyöMin: 1,
      		lyöMax: 9,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 17-18,
		up: 17-18,
	},
	Kivimäki: {
        	pelipaikka: takakenttä,
		palkka: 5000,
       		etunimi: 'Arto',
        	lyöMin: 1,
      		lyöMax: 8,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 16-18,
		up: 16-18,
	}, 
	Ö: {
        	pelipaikka: takakenttä,
		palkka: 5000,
       		etunimi: 'Bo',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 16-18,
		up: 16-18,
	},
	Siltanen: {
        	pelipaikka: takakenttä,
		palkka: 5000,
       		etunimi: 'Timo',
        	lyöMin: 1,
      		lyöMax: 9,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 17-18,
		up: 15-18,
	},
	Alajoki: {
        	pelipaikka: takakenttä,
		palkka: 5000,
       		etunimi: 'Taito',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 15-18,
		up: 16-18,
	},
	Saha: {
        	pelipaikka: takakenttä,
		palkka: 5000,
       		etunimi: 'Markku',
        	lyöMin: 1,
      		lyöMax: 10,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 17-18,
		up: 14-18,
	},
	Aho: {
        	pelipaikka: takakenttä,
		palkka: 10000,
       		etunimi: 'Akseli',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 13-18,
		up: 11-18,
	},
	Jansson: {
        	pelipaikka: takakenttä,
		palkka: 10000,
       		etunimi: 'Jansson',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 13-18,
		up: 11-18,
	},
	Lind: {
        	pelipaikka: takakenttä,
		palkka: 10000,
       		etunimi: 'Severi',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 12-18,
	},
	Vierikko: {
        	pelipaikka: takakenttä,
		palkka: 10000,
       		etunimi: 'Ville',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		sp: 14-18,
		up: 10-18,
	},
	Saarinen: {
        	pelipaikka: takakenttä,
		palkka: 10000,
       		etunimi: 'Santtu',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 12-18,
	},
	Muilu: {
        	pelipaikka: takakenttä,
		palkka: 10000,
       		etunimi: 'Mikko',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 10-18,
		up: 14-18,
	},
	Palonen: {
        	pelipaikka: takakenttä,
		palkka: 11000,
       		etunimi: 'Petteri',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 12-18,
		up: 11-18,
	},
	Kivi: {
        	pelipaikka: takakenttä,
		palkka: 11000,
       		etunimi: 'Aulis',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: true,
		sp: 11-18,
		up: 12-18,
	},
	Enholm: {
        	pelipaikka: takakenttä,
		palkka: 20000,
       		etunimi: 'Erkki',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: true,
		sp: 8-18,
		up: 8-18,
	},
	Vilen: {
        	pelipaikka: takakenttä,
		palkka: 22000,
       		etunimi: 'Tapani',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: false,
		lyöÄssiä: false,
		lyöVäriä: true,
		sp: 10-18,
		up: 7-18,
	},
	Vainio: {
        	pelipaikka: takakenttä,
		palkka: 25000,
       		etunimi: 'Velipekka',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: true,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 7-18,
		up: 6-18,
	},
	Alatalo: {
        	pelipaikka: takakenttä,
		palkka: 25000,
       		etunimi: 'Ahti',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: true,
       		lyöJokereita: false,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 6-18,
		up: 8-18,
	}
}

let jokerit = {
	Luomaaho: {
		pelipaikka: jokeri,
		palkka: 6000,
       		etunimi: 'Pasi',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: true,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 11-18,
	},
    Hietanen: {
		pelipaikka: jokeri,
		palkka: 6000,
       		etunimi: 'Unto',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: true,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 10-18,
	},
	Kivivuori: {
		pelipaikka: jokeri,
		palkka: 6000,
       		etunimi: 'Valto',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: true,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 9-18,
	},
	Ruuttu: {
		pelipaikka: jokeri,
		palkka: 8000,
       		etunimi: 'Rauli',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: true,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 8-18,
	},
	Wasenius: {
		pelipaikka: jokeri,
		palkka: 8000,
       		etunimi: 'Pelle',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: true,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 7-18,
	},
	Ilomäki: {
		pelipaikka: jokeri,
		palkka: 8000,
       		etunimi: 'Kunto',
        	lyöMin: 1,
      		lyöMax: 13,
       		lyöKahdesti: false,
       		lyöJokereita: true,
		lyöÄssiä: true,
		lyöVäriä: false,
		sp: 7-18,
	}
}


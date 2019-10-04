// Create a map object
var myMap = L.map("map", {
  center: [19.393531,-99.135359],
  zoom: 10.3
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 20,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each station a different radius based on its influx
function markerSize(influx) {
  return influx / 100;
}

// Each station object contains the station's name, location and influx
var station = [
  {
    name:"20 de Noviembre",
    location:[19.37192372,-99.17099833],
    influx:11812
  },
  {
    name:"Acatitla",
    location:[19.3642515,-99.00597811],
    influx:15574
  },
  {
    name:"Aculco",
    location:[19.37292574,-99.10739779],
    influx:9717
  },
  {
    name:"Agricola Oriental",
    location:[19.40404596,-99.06982541],
    influx:11171
  },
  {
    name:"Allende",
    location:[19.43547387,-99.13670897],
    influx:27846
  },
  {
    name:"Apatlaco",
    location:[19.378298,-99.10934],
    influx:14046
  },
  {
    name:"Aquiles Serdan",
    location:[19.489367,-99.194511],
    influx:15619
  },
  {
    name:"Aragon",
    location:[19.45101356,-99.09598231],
    influx:7480
  },
  {
    name:"Atlalilco",
    location:[19.35570839,-99.10157204],
    influx:29614
  },
  {
    name:"Auditorio",
    location:[19.42530549,-99.19173717],
    influx:35107
  },
  {
    name:"Autobuses del Norte",
    location:[19.478595,-99.1404709999999],
    influx:22290
  },
  {
    name:"Azcapotzalco",
    location:[19.49067553,-99.18621182],
    influx:7844
  },
  {
    name:"Balbuena",
    location:[19.42288725,-99.10281658],
    influx:13255
  },
  {
    name:"Balderas",
    location:[19.42692438,-99.1488110999999],
    influx:27881
  },
  {
    name:"Barranca del Muerto",
    location:[19.3614881999999,-99.18895841],
    influx:45238
  },
  {
    name:"Bellas Artes",
    location:[19.43649573,-99.14061427],
    influx:59687
  },
  {
    name:"Blvd. Puerto Aereo",
    location:[19.41958866,-99.09606814],
    influx:24067
  },
  {
    name:"Bondojito",
    location:[19.46450842,-99.1117537],
    influx:6389
  },
  {
    name:"Bosque de Aragon",
    location:[19.45807473,-99.06927824],
    influx:5561
  },
  {
    name:"Buenavista",
    location:[19.44615757,-99.15289879],
    influx:59403
  },
  {
    name:"Calle 11",
    location:[19.32025578,-99.08486724],
    influx:14269
  },
  {
    name:"Camarones",
    location:[19.47873042,-99.18894768],
    influx:15709
  },
  {
    name:"Canal de San Juan",
    location:[19.39821706,-99.05969739],
    influx:12448
  },
  {
    name:"Canal del Norte",
    location:[19.44866652,-99.11589503],
    influx:8658
  },
  {
    name:"Candelaria",
    location:[19.42909974,-99.11989689],
    influx:30610
  },
  {
    name:"Centro Medico",
    location:[19.40636329,-99.15504456],
    influx:32409
  },
  {
    name:"Cerro de la Estrella",
    location:[19.355601,-99.085872],
    influx:12032
  },
  {
    name:"Chabacano",
    location:[19.408513,-99.135489],
    influx:42396
  },
  {
    name:"Chapultepec",
    location:[19.42025648,-99.17658806],
    influx:53657
  },
  {
    name:"Chilpancingo",
    location:[19.40575613,-99.1683054],
    influx:36662
  },
  {
    name:"Ciudad Azteca",
    location:[19.53444312,-99.02711391],
    influx:59233
  },
  {
    name:"Ciudad Deportiva",
    location:[19.40811392,-99.09135818],
    influx:6204
  },
  {
    name:"Colegio Militar",
    location:[19.44864628,-99.17122364],
    influx:14728
  },
  {
    name:"Constitucion de 1917",
    location:[19.345135,-99.063367],
    influx:87928
  },
  {
    name:"Constituyentes",
    location:[19.41129131,-99.19138312],
    influx:8860
  },
  {
    name:"Consulado",
    location:[19.45682033,-99.11388874],
    influx:9273
  },
  {
    name:"Copilco",
    location:[19.33597857,-99.17657733],
    influx:36260
  },
  {
    name:"Coyoacan",
    location:[19.36142746,-99.17056918],
    influx:26966
  },
  {
    name:"Coyuya",
    location:[19.39769,-99.113413],
    influx:23154
  },
  {
    name:"Cuatro Caminos",
    location:[19.458454,-99.214643],
    influx:104768
  },
  {
    name:"Cuauhtemoc",
    location:[19.42565962,-99.15455103],
    influx:22698
  },
  {
    name:"Cuitlahuac",
    location:[19.45668,-99.181555],
    influx:18453
  },
  {
    name:"Culhuacan",
    location:[19.33887391,-99.10894275],
    influx:14856
  },
  {
    name:"Deportivo Oceania",
    location:[19.45077077,-99.07917023],
    influx:15009
  },
  {
    name:"Deptvo. 18 de Marzo",
    location:[19.48358544,-99.12576556],
    influx:34600
  },
  {
    name:"Division del Norte",
    location:[19.3789276,-99.15950775],
    influx:18074
  },
  {
    name:"Doctores",
    location:[19.42049932,-99.14335012],
    influx:12389
  },
  {
    name:"Eduardo Molina",
    location:[19.45112485,-99.10544515],
    influx:6731
  },
  {
    name:"Eje Central",
    location:[19.36118453,-99.15133238],
    influx:11037
  },
  {
    name:"El Rosario",
    location:[19.50522896,-99.19948339],
    influx:32661
  },
  {
    name:"Ermita",
    location:[19.36030391,-99.1448307],
    influx:26676
  },
  {
    name:"Escuadron 201",
    location:[19.36449442,-99.10931826],
    influx:22251
  },
  {
    name:"Etiopia",
    location:[19.39604129,-99.15617108],
    influx:29501
  },
  {
    name:"Eugenia",
    location:[19.38628539,-99.15724397],
    influx:18461
  },
  {
    name:"Ferreria",
    location:[19.49039233,-99.173702],
    influx:23119
  },
  {
    name:"Fray Servando",
    location:[19.42149092,-99.12033677],
    influx:8219
  },
  {
    name:"Garibaldi",
    location:[19.443082,-99.139034],
    influx:33351
  },
  {
    name:"General Anaya",
    location:[19.35319801,-99.14478779],
    influx:24837
  },
  {
    name:"Gomez Farias",
    location:[19.41608763,-99.09070373],
    influx:29732
  },
  {
    name:"Guelatao",
    location:[19.38459525,-99.03579354],
    influx:20784
  },
  {
    name:"Guerrero",
    location:[19.44522682,-99.1463542],
    influx:21017
  },
  {
    name:"Hangares",
    location:[19.423251,-99.0870949999999],
    influx:5129
  },
  {
    name:"Hidalgo",
    location:[19.4376997,-99.14730906],
    influx:52197
  },
  {
    name:"Hospital General",
    location:[19.41369961,-99.1531992],
    influx:20733
  },
  {
    name:"Impulsora",
    location:[19.484987,-99.048743],
    influx:24592
  },
  {
    name:"Indios Verdes",
    location:[19.4953149999999,-99.119141],
    influx:106417
  },
  {
    name:"Inst. del Petroleo",
    location:[19.48983606,-99.14455175],
    influx:9222
  },
  {
    name:"Insurgentes",
    location:[19.42359552,-99.16325212],
    influx:56009
  },
  {
    name:"Insurgentes Sur",
    location:[19.37360387,-99.17859435],
    influx:34961   
  },
  {
    name:"Isabel la Catolica",
    location:[19.4260947,-99.13782477],
    influx:22575
  },
  {
    name:"Iztacalco",
    location:[19.388092,-99.112086],
    influx:21260
  },
  {
    name:"Iztapalapa",
    location:[19.35760127,-99.09341812],
    influx:11101
  },
  {
    name:"Jamaica",
    location:[19.41014786,-99.12203193],
    influx:18311
  },
  {
    name:"Juanacatlan",
    location:[19.41290022,-99.18207049],
    influx:11728
  },
  {
    name:"Juarez",
    location:[19.43336942,-99.14771676],
    influx:16978
  },
  {
    name:"La Paz",
    location:[19.35048513,-98.96061659],
    influx:42127
  },
  {
    name:"La Raza",
    location:[19.46907052,-99.13904786],
    influx:61525
  },
  {
    name:"La Viga",
    location:[19.406106,-99.125973],
    influx:7562
  },
  {
    name:"La Villa-Basilica",
    location:[19.4814715,-99.11815882],
    influx:14559
  },
  {
    name:"Lagunilla",
    location:[19.44300109,-99.13107634],
    influx:22691
  },
  {
    name:"Lazaro Cardenas",
    location:[19.40702104,-99.14433718],
    influx:10474
  },
  {
    name:"Lindavista",
    location:[19.4875806,-99.13434863],
    influx:17584
  },
  {
    name:"Lomas Estrella",
    location:[19.3220019999999,-99.096696],
    influx:12135
  },
  {
    name:"Los Reyes",
    location:[19.35877546,-98.97670984],
    influx:16546
  },
  {
    name:"Martin Carrera",
    location:[19.4837675,-99.10599232],
    influx:49517
  },
  {
    name:"Merced",
    location:[19.42546738,-99.12541151],
    influx:47698
  },
  {
    name:"Mexicaltzingo",
    location:[19.35744944,-99.12191391],
    influx:18893
  },
  {
    name:"Miguel A. de Q.",
    location:[19.34651696,-99.18053627],
    influx:30351
  },
  {
    name:"Misterios",
    location:[19.46290002,-99.13051844],
    influx:7937
  },
  {
    name:"Mixcoac",
    location:[19.37567873,-99.18686628],
    influx:38281
  },
  {
    name:"Mixiuhca",
    location:[19.40820499,-99.11285877],
    influx:16176
  },
  {
    name:"Moctezuma",
    location:[19.426271,-99.109803],
    influx:21446
  },
  {
    name:"Morelos",
    location:[19.438426,-99.11933],
    influx:16351
  },
  {
    name:"Muzquiz",
    location:[19.50096117,-99.04171586],
    influx:30595
  },
  {
    name:"Nativitas",
    location:[19.37938304,-99.13987398],
    influx:19948
  },
  {
    name:"Nezahualcoyotl",
    location:[19.472534,-99.054375],
    influx:21531
  },
  {
    name:"Ninos Heroes",
    location:[19.41946724,-99.15023804],
    influx:21523
  },
  {
    name:"Nopalera",
    location:[19.29939771,-99.04621124],
    influx:22031
  },
  {
    name:"Normal",
    location:[19.44424548,-99.1671896],
    influx:33858
  },
  {
    name:"Norte 45",
    location:[19.48823803,-99.16249037],
    influx:7150
  },
  {
    name:"Obrera",
    location:[19.41301153,-99.14392948],
    influx:11961
  },
  {
    name:"Observatorio",
    location:[19.3974859999999,-99.2006689999999],
    influx:72863
  },
  {
    name:"Oceania",
    location:[19.44572255,-99.08683062],
    influx:17025
  },
  {
    name:"Olimpica",
    location:[19.52084286,-99.03298259],
    influx:17264
  },
  {
    name:"Olivos",
    location:[19.30328601,-99.05831337],
    influx:17400
  },
  {
    name:"Panteones",
    location:[19.458219,-99.20294],
    influx:13356
  },
  {
    name:"Pantitlan",
    location:[19.4146103,-99.07262564],
    influx:237285
  },
  {
    name:"Parque de los Venados",
    location:[19.37046623,-99.15766239],
    influx:11714
  },
  {
    name:"Patriotismo",
    location:[19.40559422,-99.1784656],
    influx:15803
  },
  {
    name:"Penon Viejo",
    location:[19.37291562,-99.0172863],
    influx:13472
  },
  {
    name:"Periferico Oriente",
    location:[19.317492,-99.0747189999999],
    influx:32295
  },
  {
    name:"Pino Suarez",
    location:[19.42543703,-99.13303971],
    influx:55317
  },
  {
    name:"Plaza Aragon",
    location:[19.52822456,-99.02979612],
    influx:19578
  },
  {
    name:"Polanco",
    location:[19.43337954,-99.19079304],
    influx:36651
  },
  {
    name:"Politecnico",
    location:[19.499964,-99.148806],
    influx:33819
  },
  {
    name:"Popotla",
    location:[19.45261196,-99.17546153],
    influx:9863
  },
  {
    name:"Portales",
    location:[19.36976784,-99.14130092],
    influx:22733
  },
  {
    name:"Potrero",
    location:[19.476413,-99.131748],
    influx:16963
  },
  {
    name:"Puebla",
    location:[19.40697045,-99.08233523],
    influx:29572
  },
  {
    name:"Refineria",
    location:[19.46911098,-99.18985963],
    influx:10972
  },
  {
    name:"Revolucion",
    location:[19.43880248,-99.15389657],
    influx:29520
  },
  {
    name:"Ricardo Flores Magon",
    location:[19.43628327,-99.10342813],
    influx:5910
  },
  {
    name:"Rio de los Remedios",
    location:[19.49024062,-99.04635072],
    influx:19934
  },
  {
    name:"Romero Rubio",
    location:[19.44048194,-99.09420133],
    influx:7998
  },
  {
    name:"Salto del Agua",
    location:[19.42720768,-99.14207339],
    influx:40498
  },
  {
    name:"San Andres Tomatlan",
    location:[19.3272315,-99.10259128],
    influx:11809
  },
  {
    name:"San Antonio",
    location:[19.38481791,-99.18661952],
    influx:14419
  },
  {
    name:"San Antonio Abad",
    location:[19.4159055,-99.13429499],
    influx:21108
  },
  {
    name:"San Cosme",
    location:[19.44185787,-99.16094542],
    influx:23731
  },
  {
    name:"San Joaquin",
    location:[19.44553033,-99.19160843],
    influx:29414
  },
  {
    name:"San Juan Letran",
    location:[19.43098165,-99.14116144],
    influx:26887
  },
  {
    name:"San Lazaro",
    location:[19.431822,-99.114463],
    influx:65599
  },
  {
    name:"San Pedro los Pinos",
    location:[19.39122414,-99.18572903],
    influx:13821
  },
  {
    name:"Santa Anita",
    location:[19.40397512,-99.12136674],
    influx:4990
  },
  {
    name:"Santa Marta",
    location:[19.359804,-98.9958939999999],
    influx:27548
  },
  {
    name:"Sevilla",
    location:[19.42189565,-99.17074084],
    influx:30611
  },
  {
    name:"Tacuba",
    location:[19.4583829999999,-99.188501],
    influx:64573
  },
  {
    name:"Tacubaya",
    location:[19.40213338,-99.18823957],
    influx:106097
  },
  {
    name:"Talisman",
    location:[19.47415847,-99.10779476],
    influx:5284
  },
  {
    name:"Tasquena",
    location:[19.34400644,-99.14105415],
    influx:75238
  },
  {
    name:"Tecnologico",
    location:[19.51470467,-99.03568625],
    influx:26073
  },
  {
    name:"Tepalcates",
    location:[19.39072824,-99.04651165],
    influx:17434
  },
  {
    name:"Tepito",
    location:[19.44256606,-99.12323356],
    influx:21479
  },
  {
    name:"Terminal Aerea",
    location:[19.43380448,-99.08820391],
    influx:18108
  },
  {
    name:"Tezonco",
    location:[19.306124,-99.065867],
    influx:22517
  },
  {
    name:"Tezozomoc",
    location:[19.49448847,-99.19593215],
    influx:5691
  },
  {
    name:"Tlahuac",
    location:[19.28680057,-99.01443243],
    influx:55571
  },
  {
    name:"Tlaltenco",
    location:[19.294555,-99.023829],
    influx:3381
  },
  {
    name:"Tlatelolco",
    location:[19.45520174,-99.1430819],
    influx:20067
  },
  {
    name:"UAM I",
    location:[19.350327,-99.0748079999999],
    influx:24754
  },
  {
    name:"Universidad",
    location:[19.32433595,-99.17407751],
    influx:70771
  },
  {
    name:"Valle Gomez",
    location:[19.45868169,-99.11988616],
    influx:4412
  },
  {
    name:"Vallejo",
    location:[19.49031142,-99.15479779],
    influx:7903
  },
  {
    name:"Velodromo",
    location:[19.40811392,-99.10283804],
    influx:7741
  },
  {
    name:"Viaducto",
    location:[19.40074699,-99.13663387],
    influx:20040
  },
  {
    name:"Villa de Aragon",
    location:[19.4613523,-99.06114578],
    influx:14052
  },
  {
    name:"Villa de Cortes",
    location:[19.38746949,-99.13862944],
    influx:17273
  },
  {
    name:"Viveros",
    location:[19.35376487,-99.17542934],
    influx:21230
  },
  {
    name:"Xola",
    location:[19.3950293,-99.13758874],
    influx:22330
  },
  {
    name:"Zapata",
    location:[19.3705471999999,-99.16540861],
    influx:50326
  },
  {
    name:"Zapotitlan",
    location:[19.29639028,-99.03402328],
    influx:13440
  },
  {
    name:"Zaragoza",
    location:[19.41179726,-99.08322573],
    influx:47850
  },
  {
    name:"Zocalo",
    location:[19.432602,-99.131879],
    influx:71034
  }
];

// Loop through the stations array and create one marker for each city object
for (var i = 0; i < station.length; i++) {
  L.circle(station[i].location, {
    fillOpacity: 0.75,
    color: "purple",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: markerSize(station[i].influx)
  }).bindPopup("<h1>" + station[i].name + "</h1> <hr> <h3>Influx: " + station[i].influx + "</h3>").addTo(myMap);
}
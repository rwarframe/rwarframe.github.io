/* FLAIR MASTER CONFIG | auto-generated at 2016-12-21T02:13:37-0800 (ISO-8601) */ 
flair.load__by_id = function() {
    for (var key in flair.names) {
        if (flair.names.hasOwnProperty(key)) {
            var data = key.split(' ');
            
            var orig_id = data[2];
            
            if (orig_id.substring(0, 'a'.length) === 'a') {
                orig_id = orig_id.substring(1);
            }
            if (orig_id.substring(orig_id.length - 'm'.length) === 'm') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'o'.length) === 'o') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'x'.length) === 'x') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 'y'.length) === 'y') {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            if (orig_id.substring(orig_id.length - 1).match(/[a-z]/i) &&
                orig_id.substring(0, orig_id.length - 1).match(/^\d+$/)) {
                orig_id = orig_id.substring(0, orig_id.length - 1);
            }
            
            flair.by_id[data[2]] = {
                key: key,
                spritepos: data[0],
                sheet: data[1],
                poke_id: data[2],
                orig_id: orig_id,
                poke_name: flair.names[key],
                flair_class: ' flair-'+data[0] + ' flair-'+data[1] + ' flair-'+data[2]
            }
        }
    }
}
flair.by_id = {}
flair.names = {
/* [STANDARD] */
    "0-0 primewarframesflair 1": "Ash Prime",
    "0-1 primewarframesflair 2": "Ember",
    "0-2 primewarframesflair 3": "Excalibur Prime",
    "0-3 primewarframesflair 4": "Frost Prime",
    "0-4 primewarframesflair 5": "Loki Prime",
    "0-5 primewarframesflair 6": "Mag Prime",
    "0-6 primewarframesflair 7": "Nekros Prime",
    "0-7 primewarframesflair 8": "Nova Prime",
    "0-8 primewarframesflair 9": "Nyx Prime",
    "0-9 primewarframesflair 10": "Rhino Prime",
    "0-10 primewarframesflair 11": "Saryn Prime",
    "0-11 primewarframesflair 12": "Trinity Prime",
    "0-12 primewarframesflair 13": "Vauban Prime",
    "0-13 primewarframesflair 14": "Volt Prime",
    "0-0 johtoflair 152": "Chikorita",
    "0-1 johtoflair 153": "Bayleef",
    "0-2 johtoflair 154": "Meganium",
    "0-3 johtoflair 155": "Cyndaquil",
    "0-4 johtoflair 156": "Quilava",
    "0-5 johtoflair 157": "Typhlosion",
    "0-6 johtoflair 158": "Totodile",
    "0-7 johtoflair 159": "Croconaw",
    "0-8 johtoflair 160": "Feraligatr",
    "0-9 johtoflair 161": "Sentret",
    "0-10 johtoflair 162": "Furret",
    "0-11 johtoflair 163": "Hoothoot",
    "0-12 johtoflair 164": "Noctowl",
    "0-13 johtoflair 165": "Ledyba",
    "0-14 johtoflair 166": "Ledian",
    "0-15 johtoflair 167": "Spinarak",
    "0-16 johtoflair 168": "Ariados",
    "0-17 johtoflair 169": "Crobat",
    "0-18 johtoflair 170": "Chinchou",
    "0-19 johtoflair 171": "Lanturn",
    "0-20 johtoflair 172": "Pichu",
    "0-21 johtoflair 173": "Cleffa",
    "0-22 johtoflair 174": "Igglybuff",
    "0-23 johtoflair 175": "Togepi",
    "0-24 johtoflair 176": "Togetic",
    "0-25 johtoflair 177": "Natu",
    "0-26 johtoflair 178": "Xatu",
    "0-27 johtoflair 179": "Mareep",
    "0-28 johtoflair 180": "Flaaffy",
    "0-29 johtoflair 181": "Ampharos",
    "0-30 johtoflair 182": "Bellossom",
    "0-31 johtoflair 183": "Marill",
    "0-32 johtoflair 184": "Azumarill",
    "1-0 johtoflair 185": "Sudowoodo",
    "1-1 johtoflair 186": "Politoed",
    "1-2 johtoflair 187": "Hoppip",
    "1-3 johtoflair 188": "Skiploom",
    "1-4 johtoflair 189": "Jumpluff",
    "1-5 johtoflair 190": "Aipom",
    "1-6 johtoflair 191": "Sunkern",
    "1-7 johtoflair 192": "Sunflora",
    "1-8 johtoflair 193": "Yanma",
    "1-9 johtoflair 194": "Wooper",
    "1-10 johtoflair 195": "Quagsire",
    "1-11 johtoflair 196": "Espeon",
    "1-12 johtoflair 197": "Umbreon",
    "1-13 johtoflair 198": "Murkrow",
    "1-14 johtoflair 199": "Slowking",
    "1-15 johtoflair 200": "Misdreavus",
    "1-16 johtoflair 201": "Unown",
    "1-17 johtoflair 202": "Wobbuffet",
    "1-18 johtoflair 203": "Girafarig",
    "1-19 johtoflair 204": "Pineco",
    "1-20 johtoflair 205": "Forretress",
    "1-21 johtoflair 206": "Dunsparce",
    "1-22 johtoflair 207": "Gligar",
    "1-23 johtoflair 208": "Steelix",
    "1-24 johtoflair 209": "Snubbull",
    "1-25 johtoflair 210": "Granbull",
    "1-26 johtoflair 211": "Qwilfish",
    "1-27 johtoflair 212": "Scizor",
    "1-28 johtoflair 213": "Shuckle",
    "1-29 johtoflair 214": "Heracross",
    "1-30 johtoflair 215": "Sneasel",
    "1-31 johtoflair 216": "Teddiursa",
    "1-32 johtoflair 217": "Ursaring",
    "2-0 johtoflair 218": "Slugma",
    "2-1 johtoflair 219": "Magcargo",
    "2-2 johtoflair 220": "Swinub",
    "2-3 johtoflair 221": "Piloswine",
    "2-4 johtoflair 222": "Corsola",
    "2-5 johtoflair 223": "Remoraid",
    "2-6 johtoflair 224": "Octillery",
    "2-7 johtoflair 225": "Delibird",
    "2-8 johtoflair 226": "Mantine",
    "2-9 johtoflair 227": "Skarmory",
    "2-10 johtoflair 228": "Houndour",
    "2-11 johtoflair 229": "Houndoom",
    "2-12 johtoflair 230": "Kingdra",
    "2-13 johtoflair 231": "Phanpy",
    "2-14 johtoflair 232": "Donphan",
    "2-15 johtoflair 233": "Porygon2",
    "2-16 johtoflair 234": "Stantler",
    "2-17 johtoflair 235": "Smeargle",
    "2-18 johtoflair 236": "Tyrogue",
    "2-19 johtoflair 237": "Hitmontop",
    "2-20 johtoflair 238": "Smoochum",
    "2-21 johtoflair 239": "Elekid",
    "2-22 johtoflair 240": "Magby",
    "2-23 johtoflair 241": "Miltank",
    "2-24 johtoflair 242": "Blissey",
    "2-25 johtoflair 243": "Raikou",
    "2-26 johtoflair 244": "Entei",
    "2-27 johtoflair 245": "Suicune",
    "2-28 johtoflair 246": "Larvitar",
    "2-29 johtoflair 247": "Pupitar",
    "2-30 johtoflair 248": "Tyranitar",
    "2-31 johtoflair 249": "Lugia",
    "2-32 johtoflair 250": "Ho-Oh",
    "3-0 johtoflair 251": "Celebi",
    "0-0 hoennflair 252": "Treecko",
    "0-1 hoennflair 253": "Grovyle",
    "0-2 hoennflair 254": "Sceptile",
    "0-3 hoennflair 255": "Torchic",
    "0-4 hoennflair 256": "Combusken",
    "0-5 hoennflair 257": "Blaziken",
    "0-6 hoennflair 258": "Mudkip",
    "0-7 hoennflair 259": "Marshtomp",
    "0-8 hoennflair 260": "Swampert",
    "0-9 hoennflair 261": "Poochyena",
    "0-10 hoennflair 262": "Mightyena",
    "0-11 hoennflair 263": "Zigzagoon",
    "0-12 hoennflair 264": "Linoone",
    "0-13 hoennflair 265": "Wurmple",
    "0-14 hoennflair 266": "Silcoon",
    "0-15 hoennflair 267": "Beautifly",
    "0-16 hoennflair 268": "Cascoon",
    "0-17 hoennflair 269": "Dustox",
    "0-18 hoennflair 270": "Lotad",
    "0-19 hoennflair 271": "Lombre",
    "0-20 hoennflair 272": "Ludicolo",
    "0-21 hoennflair 273": "Seedot",
    "0-22 hoennflair 274": "Nuzleaf",
    "0-23 hoennflair 275": "Shiftry",
    "0-24 hoennflair 276": "Taillow",
    "0-25 hoennflair 277": "Swellow",
    "0-26 hoennflair 278": "Wingull",
    "0-27 hoennflair 279": "Pelipper",
    "0-28 hoennflair 280": "Ralts",
    "0-29 hoennflair 281": "Kirlia",
    "0-30 hoennflair 282": "Gardevoir",
    "0-31 hoennflair 283": "Surskit",
    "0-32 hoennflair 284": "Masquerain",
    "1-0 hoennflair 285": "Shroomish",
    "1-1 hoennflair 286": "Breloom",
    "1-2 hoennflair 287": "Slakoth",
    "1-3 hoennflair 288": "Vigoroth",
    "1-4 hoennflair 289": "Slaking",
    "1-5 hoennflair 290": "Nincada",
    "1-6 hoennflair 291": "Ninjask",
    "1-7 hoennflair 292": "Shedinja",
    "1-8 hoennflair 293": "Whismur",
    "1-9 hoennflair 294": "Loudred",
    "1-10 hoennflair 295": "Exploud",
    "1-11 hoennflair 296": "Makuhita",
    "1-12 hoennflair 297": "Hariyama",
    "1-13 hoennflair 298": "Azurill",
    "1-14 hoennflair 299": "Nosepass",
    "1-15 hoennflair 300": "Skitty",
    "1-16 hoennflair 301": "Delcatty",
    "1-17 hoennflair 302": "Sableye",
    "1-18 hoennflair 303": "Mawile",
    "1-19 hoennflair 304": "Aron",
    "1-20 hoennflair 305": "Lairon",
    "1-21 hoennflair 306": "Aggron",
    "1-22 hoennflair 307": "Meditite",
    "1-23 hoennflair 308": "Medicham",
    "1-24 hoennflair 309": "Electrike",
    "1-25 hoennflair 310": "Manectric",
    "1-26 hoennflair 311": "Plusle",
    "1-27 hoennflair 312": "Minun",
    "1-28 hoennflair 313": "Volbeat",
    "1-29 hoennflair 314": "Illumise",
    "1-30 hoennflair 315": "Roselia",
    "1-31 hoennflair 316": "Gulpin",
    "1-32 hoennflair 317": "Swalot",
    "2-0 hoennflair 318": "Carvanha",
    "2-1 hoennflair 319": "Sharpedo",
    "2-2 hoennflair 320": "Wailmer",
    "2-3 hoennflair 321": "Wailord",
    "2-4 hoennflair 322": "Numel",
    "2-5 hoennflair 323": "Camerupt",
    "2-6 hoennflair 324": "Torkoal",
    "2-7 hoennflair 325": "Spoink",
    "2-8 hoennflair 326": "Grumpig",
    "2-9 hoennflair 327": "Spinda",
    "2-10 hoennflair 328": "Trapinch",
    "2-11 hoennflair 329": "Vibrava",
    "2-12 hoennflair 330": "Flygon",
    "2-13 hoennflair 331": "Cacnea",
    "2-14 hoennflair 332": "Cacturne",
    "2-15 hoennflair 333": "Swablu",
    "2-16 hoennflair 334": "Altaria",
    "2-17 hoennflair 335": "Zangoose",
    "2-18 hoennflair 336": "Seviper",
    "2-19 hoennflair 337": "Lunatone",
    "2-20 hoennflair 338": "Solrock",
    "2-21 hoennflair 339": "Barboach",
    "2-22 hoennflair 340": "Whiscash",
    "2-23 hoennflair 341": "Corphish",
    "2-24 hoennflair 342": "Crawdaunt",
    "2-25 hoennflair 343": "Baltoy",
    "2-26 hoennflair 344": "Claydol",
    "2-27 hoennflair 345": "Lileep",
    "2-28 hoennflair 346": "Cradily",
    "2-29 hoennflair 347": "Anorith",
    "2-30 hoennflair 348": "Armaldo",
    "2-31 hoennflair 349": "Feebas",
    "2-32 hoennflair 350": "Milotic",
    "3-0 hoennflair 351": "Castform",
    "3-1 hoennflair 352": "Kecleon",
    "3-2 hoennflair 353": "Shuppet",
    "3-3 hoennflair 354": "Banette",
    "3-4 hoennflair 355": "Duskull",
    "3-5 hoennflair 356": "Dusclops",
    "3-6 hoennflair 357": "Tropius",
    "3-7 hoennflair 358": "Chimecho",
    "3-8 hoennflair 359": "Absol",
    "3-9 hoennflair 360": "Wynaut",
    "3-10 hoennflair 361": "Snorunt",
    "3-11 hoennflair 362": "Glalie",
    "3-12 hoennflair 363": "Spheal",
    "3-13 hoennflair 364": "Sealeo",
    "3-14 hoennflair 365": "Walrein",
    "3-15 hoennflair 366": "Clamperl",
    "3-16 hoennflair 367": "Huntail",
    "3-17 hoennflair 368": "Gorebyss",
    "3-18 hoennflair 369": "Relicanth",
    "3-19 hoennflair 370": "Luvdisc",
    "3-20 hoennflair 371": "Bagon",
    "3-21 hoennflair 372": "Shelgon",
    "3-22 hoennflair 373": "Salamence",
    "3-23 hoennflair 374": "Beldum",
    "3-24 hoennflair 375": "Metang",
    "3-25 hoennflair 376": "Metagross",
    "3-26 hoennflair 377": "Regirock",
    "3-27 hoennflair 378": "Regice",
    "3-28 hoennflair 379": "Registeel",
    "3-29 hoennflair 380": "Latias",
    "3-30 hoennflair 381": "Latios",
    "3-31 hoennflair 382": "Kyogre",
    "3-32 hoennflair 383": "Groudon",
    "4-0 hoennflair 384": "Rayquaza",
    "4-1 hoennflair 385": "Jirachi",
    "4-2 hoennflair 386": "Deoxys",
    "0-0 sinnohflair 387": "Turtwig",
    "0-1 sinnohflair 388": "Grotle",
    "0-2 sinnohflair 389": "Torterra",
    "0-3 sinnohflair 390": "Chimchar",
    "0-4 sinnohflair 391": "Monferno",
    "0-5 sinnohflair 392": "Infernape",
    "0-6 sinnohflair 393": "Piplup",
    "0-7 sinnohflair 394": "Prinplup",
    "0-8 sinnohflair 395": "Empoleon",
    "0-9 sinnohflair 396": "Starly",
    "0-10 sinnohflair 397": "Staravia",
    "0-11 sinnohflair 398": "Staraptor",
    "0-12 sinnohflair 399": "Bidoof",
    "0-13 sinnohflair 400": "Bibarel",
    "0-14 sinnohflair 401": "Kricketot",
    "0-15 sinnohflair 402": "Kricketune",
    "0-16 sinnohflair 403": "Shinx",
    "0-17 sinnohflair 404": "Luxio",
    "0-18 sinnohflair 405": "Luxray",
    "0-19 sinnohflair 406": "Budew",
    "0-20 sinnohflair 407": "Roserade",
    "0-21 sinnohflair 408": "Cranidos",
    "0-22 sinnohflair 409": "Rampardos",
    "0-23 sinnohflair 410": "Shieldon",
    "0-24 sinnohflair 411": "Bastiodon",
    "0-25 sinnohflair 412": "Burmy",
    "0-26 sinnohflair 413": "Wormadam",
    "0-27 sinnohflair 414": "Mothim",
    "0-28 sinnohflair 415": "Combee",
    "0-29 sinnohflair 416": "Vespiquen",
    "0-30 sinnohflair 417": "Pachirisu",
    "0-31 sinnohflair 418": "Buizel",
    "0-32 sinnohflair 419": "Floatzel",
    "1-0 sinnohflair 420": "Cherubi",
    "1-1 sinnohflair 421": "Cherrim",
    "1-2 sinnohflair 422": "Shellos",
    "1-3 sinnohflair 423": "Gastrodon",
    "1-4 sinnohflair 424": "Ambipom",
    "1-5 sinnohflair 425": "Drifloon",
    "1-6 sinnohflair 426": "Drifblim",
    "1-7 sinnohflair 427": "Buneary",
    "1-8 sinnohflair 428": "Lopunny",
    "1-9 sinnohflair 429": "Mismagius",
    "1-10 sinnohflair 430": "Honchkrow",
    "1-11 sinnohflair 431": "Glameow",
    "1-12 sinnohflair 432": "Purugly",
    "1-13 sinnohflair 433": "Chingling",
    "1-14 sinnohflair 434": "Stunky",
    "1-15 sinnohflair 435": "Skuntank",
    "1-16 sinnohflair 436": "Bronzor",
    "1-17 sinnohflair 437": "Bronzong",
    "1-18 sinnohflair 438": "Bonsly",
    "1-19 sinnohflair 439": "Mime Jr.",
    "1-20 sinnohflair 440": "Happiny",
    "1-21 sinnohflair 441": "Chatot",
    "1-22 sinnohflair 442": "Spiritomb",
    "1-23 sinnohflair 443": "Gible",
    "1-24 sinnohflair 444": "Gabite",
    "1-25 sinnohflair 445": "Garchomp",
    "1-26 sinnohflair 446": "Munchlax",
    "1-27 sinnohflair 447": "Riolu",
    "1-28 sinnohflair 448": "Lucario",
    "1-29 sinnohflair 449": "Hippopotas",
    "1-30 sinnohflair 450": "Hippowdon",
    "1-31 sinnohflair 451": "Skorupi",
    "1-32 sinnohflair 452": "Drapion",
    "2-0 sinnohflair 453": "Croagunk",
    "2-1 sinnohflair 454": "Toxicroak",
    "2-2 sinnohflair 455": "Carnivine",
    "2-3 sinnohflair 456": "Finneon",
    "2-4 sinnohflair 457": "Lumineon",
    "2-5 sinnohflair 458": "Mantyke",
    "2-6 sinnohflair 459": "Snover",
    "2-7 sinnohflair 460": "Abomasnow",
    "2-8 sinnohflair 461": "Weavile",
    "2-9 sinnohflair 462": "Magnezone",
    "2-10 sinnohflair 463": "Lickilicky",
    "2-11 sinnohflair 464": "Rhyperior",
    "2-12 sinnohflair 465": "Tangrowth",
    "2-13 sinnohflair 466": "Electivire",
    "2-14 sinnohflair 467": "Magmortar",
    "2-15 sinnohflair 468": "Togekiss",
    "2-16 sinnohflair 469": "Yanmega",
    "2-17 sinnohflair 470": "Leafeon",
    "2-18 sinnohflair 471": "Glaceon",
    "2-19 sinnohflair 472": "Gliscor",
    "2-20 sinnohflair 473": "Mamoswine",
    "2-21 sinnohflair 474": "Porygon-Z",
    "2-22 sinnohflair 475": "Gallade",
    "2-23 sinnohflair 476": "Probopass",
    "2-24 sinnohflair 477": "Dusknoir",
    "2-25 sinnohflair 478": "Froslass",
    "2-26 sinnohflair 479": "Rotom",
    "2-27 sinnohflair 480": "Uxie",
    "2-28 sinnohflair 481": "Mesprit",
    "2-29 sinnohflair 482": "Azelf",
    "2-30 sinnohflair 483": "Dialga",
    "2-31 sinnohflair 484": "Palkia",
    "2-32 sinnohflair 485": "Heatran",
    "3-0 sinnohflair 486": "Regigigas",
    "3-1 sinnohflair 487": "Giratina",
    "3-2 sinnohflair 488": "Cresselia",
    "3-3 sinnohflair 489": "Phione",
    "3-4 sinnohflair 490": "Manaphy",
    "3-5 sinnohflair 491": "Darkrai",
    "3-6 sinnohflair 492": "Shaymin",
    "3-7 sinnohflair 493": "Arceus",
    "0-0 unovaflair 494": "Victini",
    "0-1 unovaflair 495": "Snivy",
    "0-2 unovaflair 496": "Servine",
    "0-3 unovaflair 497": "Serperior",
    "0-4 unovaflair 498": "Tepig",
    "0-5 unovaflair 499": "Pignite",
    "0-6 unovaflair 500": "Emboar",
    "0-7 unovaflair 501": "Oshawott",
    "0-8 unovaflair 502": "Dewott",
    "0-9 unovaflair 503": "Samurott",
    "0-10 unovaflair 504": "Patrat",
    "0-11 unovaflair 505": "Watchog",
    "0-12 unovaflair 506": "Lillipup",
    "0-13 unovaflair 507": "Herdier",
    "0-14 unovaflair 508": "Stoutland",
    "0-15 unovaflair 509": "Purrloin",
    "0-16 unovaflair 510": "Liepard",
    "0-17 unovaflair 511": "Pansage",
    "0-18 unovaflair 512": "Simisage",
    "0-19 unovaflair 513": "Pansear",
    "0-20 unovaflair 514": "Simisear",
    "0-21 unovaflair 515": "Panpour",
    "0-22 unovaflair 516": "Simipour",
    "0-23 unovaflair 517": "Munna",
    "0-24 unovaflair 518": "Musharna",
    "0-25 unovaflair 519": "Pidove",
    "0-26 unovaflair 520": "Tranquill",
    "0-27 unovaflair 521": "Unfezant",
    "0-28 unovaflair 522": "Blitzle",
    "0-29 unovaflair 523": "Zebstrika",
    "0-30 unovaflair 524": "Roggenrola",
    "0-31 unovaflair 525": "Boldore",
    "0-32 unovaflair 526": "Gigalith",
    "1-0 unovaflair 527": "Woobat",
    "1-1 unovaflair 528": "Swoobat",
    "1-2 unovaflair 529": "Drilbur",
    "1-3 unovaflair 530": "Excadrill",
    "1-4 unovaflair 531": "Audino",
    "1-5 unovaflair 532": "Timburr",
    "1-6 unovaflair 533": "Gurdurr",
    "1-7 unovaflair 534": "Conkeldurr",
    "1-8 unovaflair 535": "Tympole",
    "1-9 unovaflair 536": "Palpitoad",
    "1-10 unovaflair 537": "Seismitoad",
    "1-11 unovaflair 538": "Throh",
    "1-12 unovaflair 539": "Sawk",
    "1-13 unovaflair 540": "Sewaddle",
    "1-14 unovaflair 541": "Swadloon",
    "1-15 unovaflair 542": "Leavanny",
    "1-16 unovaflair 543": "Venipede",
    "1-17 unovaflair 544": "Whirlipede",
    "1-18 unovaflair 545": "Scolipede",
    "1-19 unovaflair 546": "Cottonee",
    "1-20 unovaflair 547": "Whimsicott",
    "1-21 unovaflair 548": "Petilil",
    "1-22 unovaflair 549": "Lilligant",
    "1-23 unovaflair 550": "Basculin",
    "1-24 unovaflair 551": "Sandile",
    "1-25 unovaflair 552": "Krokorok",
    "1-26 unovaflair 553": "Krookodile",
    "1-27 unovaflair 554": "Darumaka",
    "1-28 unovaflair 555": "Darmanitan",
    "1-29 unovaflair 556": "Maractus",
    "1-30 unovaflair 557": "Dwebble",
    "1-31 unovaflair 558": "Crustle",
    "1-32 unovaflair 559": "Scraggy",
    "2-0 unovaflair 560": "Scrafty",
    "2-1 unovaflair 561": "Sigilyph",
    "2-2 unovaflair 562": "Yamask",
    "2-3 unovaflair 563": "Cofagrigus",
    "2-4 unovaflair 564": "Tirtouga",
    "2-5 unovaflair 565": "Carracosta",
    "2-6 unovaflair 566": "Archen",
    "2-7 unovaflair 567": "Archeops",
    "2-8 unovaflair 568": "Trubbish",
    "2-9 unovaflair 569": "Garbodor",
    "2-10 unovaflair 570": "Zorua",
    "2-11 unovaflair 571": "Zoroark",
    "2-12 unovaflair 572": "Minccino",
    "2-13 unovaflair 573": "Cinccino",
    "2-14 unovaflair 574": "Gothita",
    "2-15 unovaflair 575": "Gothorita",
    "2-16 unovaflair 576": "Gothitelle",
    "2-17 unovaflair 577": "Solosis",
    "2-18 unovaflair 578": "Duosion",
    "2-19 unovaflair 579": "Reuniclus",
    "2-20 unovaflair 580": "Ducklett",
    "2-21 unovaflair 581": "Swanna",
    "2-22 unovaflair 582": "Vanillite",
    "2-23 unovaflair 583": "Vanillish",
    "2-24 unovaflair 584": "Vanilluxe",
    "2-25 unovaflair 585": "Deerling",
    "2-26 unovaflair 586": "Sawsbuck",
    "2-27 unovaflair 587": "Emolga",
    "2-28 unovaflair 588": "Karrablast",
    "2-29 unovaflair 589": "Escavalier",
    "2-30 unovaflair 590": "Foongus",
    "2-31 unovaflair 591": "Amoonguss",
    "2-32 unovaflair 592": "Frillish",
    "3-0 unovaflair 593": "Jellicent",
    "3-1 unovaflair 594": "Alomomola",
    "3-2 unovaflair 595": "Joltik",
    "3-3 unovaflair 596": "Galvantula",
    "3-4 unovaflair 597": "Ferroseed",
    "3-5 unovaflair 598": "Ferrothorn",
    "3-6 unovaflair 599": "Klink",
    "3-7 unovaflair 600": "Klang",
    "3-8 unovaflair 601": "Klinklang",
    "3-9 unovaflair 602": "Tynamo",
    "3-10 unovaflair 603": "Eelektrik",
    "3-11 unovaflair 604": "Eelektross",
    "3-12 unovaflair 605": "Elgyem",
    "3-13 unovaflair 606": "Beheeyem",
    "3-14 unovaflair 607": "Litwick",
    "3-15 unovaflair 608": "Lampent",
    "3-16 unovaflair 609": "Chandelure",
    "3-17 unovaflair 610": "Axew",
    "3-18 unovaflair 611": "Fraxure",
    "3-19 unovaflair 612": "Haxorus",
    "3-20 unovaflair 613": "Cubchoo",
    "3-21 unovaflair 614": "Beartic",
    "3-22 unovaflair 615": "Cryogonal",
    "3-23 unovaflair 616": "Shelmet",
    "3-24 unovaflair 617": "Accelgor",
    "3-25 unovaflair 618": "Stunfisk",
    "3-26 unovaflair 619": "Mienfoo",
    "3-27 unovaflair 620": "Mienshao",
    "3-28 unovaflair 621": "Druddigon",
    "3-29 unovaflair 622": "Golett",
    "3-30 unovaflair 623": "Golurk",
    "3-31 unovaflair 624": "Pawniard",
    "3-32 unovaflair 625": "Bisharp",
    "4-0 unovaflair 626": "Bouffalant",
    "4-1 unovaflair 627": "Rufflet",
    "4-2 unovaflair 628": "Braviary",
    "4-3 unovaflair 629": "Vullaby",
    "4-4 unovaflair 630": "Mandibuzz",
    "4-5 unovaflair 631": "Heatmor",
    "4-6 unovaflair 632": "Durant",
    "4-7 unovaflair 633": "Deino",
    "4-8 unovaflair 634": "Zweilous",
    "4-9 unovaflair 635": "Hydreigon",
    "4-10 unovaflair 636": "Larvesta",
    "4-11 unovaflair 637": "Volcarona",
    "4-12 unovaflair 638": "Cobalion",
    "4-13 unovaflair 639": "Terrakion",
    "4-14 unovaflair 640": "Virizion",
    "4-15 unovaflair 641": "Tornadus",
    "4-16 unovaflair 642": "Thundurus",
    "4-17 unovaflair 643": "Reshiram",
    "4-18 unovaflair 644": "Zekrom",
    "4-19 unovaflair 645": "Landorus",
    "4-20 unovaflair 646": "Kyurem",
    "4-21 unovaflair 647": "Keldeo",
    "4-22 unovaflair 648": "Meloetta",
    "4-23 unovaflair 649": "Genesect",
    "0-0 kalosflair 650": "Chespin",
    "0-1 kalosflair 651": "Quilladin",
    "0-2 kalosflair 652": "Chesnaught",
    "0-3 kalosflair 653": "Fennekin",
    "0-4 kalosflair 654": "Braixen",
    "0-5 kalosflair 655": "Delphox",
    "0-6 kalosflair 656": "Froakie",
    "0-7 kalosflair 657": "Frogadier",
    "0-8 kalosflair 658": "Greninja",
    "0-9 kalosflair 659": "Bunnelby",
    "0-10 kalosflair 660": "Diggersby",
    "0-11 kalosflair 661": "Fletchling",
    "0-12 kalosflair 662": "Fletchinder",
    "0-13 kalosflair 663": "Talonflame",
    "0-14 kalosflair 664": "Scatterbug",
    "0-15 kalosflair 665": "Spewpa",
    "0-16 kalosflair 666": "Vivillon",
    "0-17 kalosflair 667": "Litleo",
    "0-18 kalosflair 668": "Pyroar",
    "0-19 kalosflair 669": "Flabebe",
    "0-20 kalosflair 670": "Floette",
    "0-21 kalosflair 671": "Florges",
    "0-22 kalosflair 672": "Skiddo",
    "0-23 kalosflair 673": "Gogoat",
    "0-24 kalosflair 674": "Pancham",
    "0-25 kalosflair 675": "Pangoro",
    "0-26 kalosflair 676": "Furfrou",
    "0-27 kalosflair 677": "Espurr",
    "0-28 kalosflair 678": "Meowstic",
    "0-29 kalosflair 679": "Honedge",
    "0-30 kalosflair 680": "Doublade",
    "0-31 kalosflair 681": "Aegislash",
    "0-32 kalosflair 682": "Spritzee",
    "1-0 kalosflair 683": "Aromatisse",
    "1-1 kalosflair 684": "Swirlix",
    "1-2 kalosflair 685": "Slurpuff",
    "1-3 kalosflair 686": "Inkay",
    "1-4 kalosflair 687": "Malamar",
    "1-5 kalosflair 688": "Binacle",
    "1-6 kalosflair 689": "Barbaracle",
    "1-7 kalosflair 690": "Skrelp",
    "1-8 kalosflair 691": "Dragalge",
    "1-9 kalosflair 692": "Clauncher",
    "1-10 kalosflair 693": "Clawitzer",
    "1-11 kalosflair 694": "Helioptile",
    "1-12 kalosflair 695": "Heliolisk",
    "1-13 kalosflair 696": "Tyrunt",
    "1-14 kalosflair 697": "Tyrantrum",
    "1-15 kalosflair 698": "Amaura",
    "1-16 kalosflair 699": "Aurorus",
    "1-17 kalosflair 700": "Sylveon",
    "1-18 kalosflair 701": "Hawlucha",
    "1-19 kalosflair 702": "Dedenne",
    "1-20 kalosflair 703": "Carbink",
    "1-21 kalosflair 704": "Goomy",
    "1-22 kalosflair 705": "Sliggoo",
    "1-23 kalosflair 706": "Goodra",
    "1-24 kalosflair 707": "Klefki",
    "1-25 kalosflair 708": "Phantump",
    "1-26 kalosflair 709": "Trevenant",
    "1-27 kalosflair 710": "Pumpkaboo",
    "1-28 kalosflair 711": "Gourgeist",
    "1-29 kalosflair 712": "Bergmite",
    "1-30 kalosflair 713": "Avalugg",
    "1-31 kalosflair 714": "Noibat",
    "1-32 kalosflair 715": "Noivern",
    "2-0 kalosflair 716": "Xerneas",
    "2-1 kalosflair 717": "Yveltal",
    "2-2 kalosflair 718": "Zygarde",
    "2-3 kalosflair 719": "Diancie",
    "2-4 kalosflair 720": "Hoopa",
    "2-5 kalosflair 721": "Volcanion",
    "0-0 alolaflair 722": "Rowlet",
    "0-1 alolaflair 723": "Dartrix",
    "0-2 alolaflair 724": "Decidueye",
    "0-3 alolaflair 725": "Litten",
    "0-4 alolaflair 726": "Torracat",
    "0-5 alolaflair 727": "Incineroar",
    "0-6 alolaflair 728": "Popplio",
    "0-7 alolaflair 729": "Brionne",
    "0-8 alolaflair 730": "Primarina",
    "0-9 alolaflair 731": "Pikipek",
    "0-10 alolaflair 732": "Trumbeak",
    "0-11 alolaflair 733": "Toucannon",
    "0-12 alolaflair 734": "Yungoos",
    "0-13 alolaflair 735": "Gumshoos",
    "0-14 alolaflair 736": "Grubbin",
    "0-15 alolaflair 737": "Charjabug",
    "0-16 alolaflair 738": "Vikavolt",
    "0-17 alolaflair 739": "Crabrawler",
    "0-18 alolaflair 740": "Crabominable",
    "0-19 alolaflair 741": "Oricorio",
    "0-20 alolaflair 742": "Cutiefly",
    "0-21 alolaflair 743": "Ribombee",
    "0-22 alolaflair 744": "Rockruff",
    "0-23 alolaflair 745": "Lycanroc",
    "0-24 alolaflair 746": "Wishiwashi",
    "0-25 alolaflair 747": "Mareanie",
    "0-26 alolaflair 748": "Toxapex",
    "0-27 alolaflair 749": "Mudbray",
    "0-28 alolaflair 750": "Mudsdale",
    "0-29 alolaflair 751": "Dewpider",
    "0-30 alolaflair 752": "Araquanid",
    "0-31 alolaflair 753": "Fomantis",
    "0-32 alolaflair 754": "Lurantis",
    "1-0 alolaflair 755": "Morelull",
    "1-1 alolaflair 756": "Shiinotic",
    "1-2 alolaflair 757": "Salandit",
    "1-3 alolaflair 758": "Salazzle",
    "1-4 alolaflair 759": "Stufful",
    "1-5 alolaflair 760": "Bewear",
    "1-6 alolaflair 761": "Bounsweet",
    "1-7 alolaflair 762": "Steenee",
    "1-8 alolaflair 763": "Tsareena",
    "1-9 alolaflair 764": "Comfey",
    "1-10 alolaflair 765": "Oranguru",
    "1-11 alolaflair 766": "Passimian",
    "1-12 alolaflair 767": "Wimpod",
    "1-13 alolaflair 768": "Golisopod",
    "1-14 alolaflair 769": "Sandygast",
    "1-15 alolaflair 770": "Pallosand",
    "1-16 alolaflair 771": "Pyukumuku",
    "1-17 alolaflair 772": "Type: Null",
    "1-18 alolaflair 773": "Silvally",
    "1-19 alolaflair 774": "Minior",
    "1-20 alolaflair 775": "Komala",
    "1-21 alolaflair 776": "Turtonator",
    "1-22 alolaflair 777": "Togedemaru",
    "1-23 alolaflair 778": "Mimikyu",
    "1-24 alolaflair 779": "Bruxish",
    "1-25 alolaflair 780": "Drampa",
    "1-26 alolaflair 781": "Dhelmise",
    "1-27 alolaflair 782": "Jangmo-o",
    "1-28 alolaflair 783": "Hakamo-o",
    "1-29 alolaflair 784": "Kommo-o",
    "1-30 alolaflair 785": "Tapu Koko",
    "1-31 alolaflair 786": "Tapu Lele",
    "1-32 alolaflair 787": "Tapu Bulu",
    "2-0 alolaflair 788": "Tapu Fini",
    "2-1 alolaflair 789": "Cosmog",
    "2-2 alolaflair 790": "Cosmoem",
    "2-3 alolaflair 791": "Solgaleo",
    "2-4 alolaflair 792": "Lunala",
    "2-5 alolaflair 793": "Magearna",
/* [ETC/FORMS] */
    "0-1 formsflair 130s": "Shiny Gyarados",
    "0-2 formsflair 386a": "Deoxys Attack",
    "0-3 formsflair 386d": "Deoxys Defense",
    "0-4 formsflair 386s": "Deoxys Speed",
    "0-5 formsflair 351a": "Snowy Castform",
    "0-6 formsflair 351b": "Sunny Castform",
    "0-7 formsflair 351c": "Rainy Castform",
    "0-8 formsflair 421o": "Sunshine Cherrim",
    "0-9 formsflair 422o": "East Sea Shellos",
    "0-10 formsflair 423o": "East Sea Gastrodon",
    "0-12 formsflair 479a": "Rotom-Frost",
    "0-13 formsflair 479b": "Rotom-Heat",
    "0-14 formsflair 479c": "Rotom-Mow",
    "0-15 formsflair 479d": "Rotom-Fan",
    "0-16 formsflair 479e": "Rotom-Wash",
    "0-17 formsflair 487o": "Giratina-Origin",
    "0-18 formsflair 492o": "Shaymin-Sky",
    "0-19 formsflair 483p": "Primal Dialga",
    "0-20 formsflair 550o": "Blue-Striped Basculin",
    "0-21 formsflair 592f": "Female Frillish",
    "0-22 formsflair 593f": "Female Jellicent",
    "0-23 formsflair 647o": "Keldeo Resolute",
    "0-24 formsflair 641o": "Tornadus-Therian",
    "0-25 formsflair 642o": "Thundurus-Therian",
    "0-26 formsflair 645o": "Landorus-Therian",
    "0-27 formsflair 646b": "Kyurem Black",
    "0-28 formsflair 646w": "Kyurem White",
    "0-29 formsflair 648o": "Meloetta-Pirouette",
    "0-30 formsflair 585a": "Autumn Form Deerling",
    "0-31 formsflair 585s": "Summer Form Deerling",
    "0-32 formsflair 585w": "Winter Form Deerling",
    "1-0 formsflair 586a": "Autumn Form Sawsbuck",
    "1-1 formsflair 586s": "Summer Form Sawsbuck",
    "1-2 formsflair 586w": "Winter Form Sawsbuck",
    "1-3 formsflair 555o": "Zen Mode Darmanitan",
    "1-4 formsflair 668f": "Female Pyroar",
    "1-5 formsflair 678f": "Female Meowstic",
    "1-6 formsflair 681o": "Aegislash Blade Forme",
    "1-7 formsflair 25b": "Pikachu Belle",
    "1-8 formsflair 25d": "Pikachu PhD",
    "1-9 formsflair 25l": "Pikachu Libre",
    "1-10 formsflair 25p": "Pikachu Pop Star",
    "1-11 formsflair 25r": "Pikachu Rock Star",
    "1-12 formsflair 666sp1": "Pok� Ball Pattern Vivillon",
    "1-13 formsflair 666a": "Modern Pattern Vivillon",
    "1-14 formsflair 666b": "Archipelago Pattern Vivillon",
    "1-15 formsflair 666c": "Elegant Pattern Vivillon",
    "1-16 formsflair 666d": "Continental Pattern Vivillon",
    "1-17 formsflair 666sp2": "Fancy Pattern Vivillon",
    "1-18 formsflair 666e": "Garden Pattern Vivillon",
    "1-19 formsflair 666f": "High Plains Pattern Vivillon",
    "1-20 formsflair 666g": "Icy Snow Pattern Vivillon",
    "1-21 formsflair 666h": "Jungle Pattern Vivillon",
    "1-22 formsflair 666i": "Marine Pattern Vivillon",
    "1-23 formsflair 666j": "Monsoon Pattern Vivillon",
    "1-24 formsflair 666k": "Ocean Pattern Vivillon",
    "1-25 formsflair 666l": "Polar Pattern Vivillon",
    "1-26 formsflair 666m": "River Pattern Vivillon",
    "1-27 formsflair 666n": "Sandstorm Pattern Vivillon",
    "1-28 formsflair 666o": "Savanna Pattern Vivillon",
    "1-29 formsflair 666p": "Sun Pattern Vivillon",
    "1-30 formsflair 666q": "Tundra Pattern Vivillon",
    "1-31 formsflair 669a": "Blue Flower Flabebe",
    "1-32 formsflair 669b": "Orange Flower Flabebe",
    "2-0 formsflair 669c": "White Flower Flabebe",
    "2-1 formsflair 669d": "Yellow Flower Flabebe",
    "2-2 formsflair 670a": "Blue Flower Floette",
    "2-3 formsflair 670b": "Orange Flower Floette",
    "2-4 formsflair 670c": "White Flower Floette",
    "2-5 formsflair 670d": "Yellow Flower Floette",
    "2-6 formsflair 670e": "Eternal Floette",
    "2-7 formsflair 671a": "Blue Flower Florges",
    "2-8 formsflair 671b": "Orange Flower Florges",
    "2-9 formsflair 671c": "White Flower Florges",
    "2-10 formsflair 671d": "Yellow Flower Florges",
    "2-11 formsflair 676a": "Dandy Trim Furfrou",
    "2-12 formsflair 676b": "Debutante Trim Furfrou",
    "2-13 formsflair 676c": "Diamond Trim Furfrou",
    "2-14 formsflair 676d": "Heart Trim Furfrou",
    "2-15 formsflair 676e": "Kabuki Trim Furfrou",
    "2-16 formsflair 676f": "La Reine Trim Furfrou",
    "2-17 formsflair 676g": "Matron Trim Furfrou",
    "2-18 formsflair 676h": "Pharaoh Trim Furfrou",
    "2-19 formsflair 676i": "Star Trim Furfrou",
    "2-20 formsflair 720o": "Hoopa Unbound",
    "2-21 formsflair 658ash": "Ash-Greninja",
    "2-22 formsflair 718a": "Zygarde Core Forme",
    "2-23 formsflair 718b": "Zygarde 10% Forme",
    "2-24 formsflair 718c": "Zygarde Complete Forme",
    "2-25 formsflair 741a": "Oricorio Pom-Pom Style",
    "2-26 formsflair 741b": "Oricorio Pa'u Style",
    "2-27 formsflair 741c": "Oricorio Sensu Style",
    "2-28 formsflair 745o": "Lycanroc Night Form",
    "2-29 formsflair 746o": "Wishiwashi School Form",
    "2-30 formsflair 774a": "Minior Green",
    "2-31 formsflair 774b": "Minior Sky",
    "2-32 formsflair 774c": "Minior Indigo",
    "3-0 formsflair 774d": "Minior Violet",
    "3-1 formsflair 774e": "Minior Red",
    "3-2 formsflair 774f": "Minior Orange",
    "3-3 formsflair 774g": "Minior Yellow",
    "4-0 formsflair a19": "Alolan Rattata",
    "4-1 formsflair a20": "Alolan Raticate",
    "4-2 formsflair a26": "Alolan Raichu",
    "4-3 formsflair a27": "Alolan Sandshrew",
    "4-4 formsflair a28": "Alolan Sandslash",
    "4-5 formsflair a37": "Alolan Vulpix",
    "4-6 formsflair a38": "Alolan Ninetales",
    "4-7 formsflair a50": "Alolan Diglett",
    "4-8 formsflair a51": "Alolan Dugtrio",
    "4-9 formsflair a52": "Alolan Meowth",
    "4-10 formsflair a53": "Alolan Persian",
    "4-14 formsflair a88": "Alolan Grimer",
    "4-15 formsflair a89": "Alolan Muk",
    "4-16 formsflair a103": "Alolan Exeggutor",
    "4-17 formsflair a105": "Alolan Marowak",
    "5-0 formsflair rb1": "Old School Rhydon",
    "5-1 formsflair rb2": "Old School Pidgeot",
    "5-2 formsflair rb3": "Old School Seel",
    "5-3 formsflair rb4": "Old School Clefairy",
    "5-4 formsflair rb5": "Old School Vileplume",
    "5-5 formsflair rb6": "Old School Beedrill",
    "5-6 formsflair rb7": "Old School Arbok",
    "5-7 formsflair rb8": "Old School Tauros",
    "5-8 formsflair rb9": "Old School Electrode",
    "5-9 formsflair rb10": "Old School Omanyte",
    "5-10 formsflair mystic": "Team Mystic",
    "5-11 formsflair instinct": "Team Instinct",
    "5-12 formsflair valor": "Team Valor",
    "0-0 megasflair 3m": "Mega Venusaur",
    "0-1 megasflair 6xm": "Mega Charizard X",
    "0-2 megasflair 6ym": "Mega Charizard Y",
    "0-3 megasflair 9m": "Mega Blastoise",
    "0-4 megasflair 15m": "Mega Beedrill",
    "0-5 megasflair 18m": "Mega Pidgeot",
    "0-6 megasflair 65m": "Mega Alakazam",
    "0-7 megasflair 80m": "Mega Slowbro",
    "0-8 megasflair 94m": "Mega Gengar",
    "0-9 megasflair 115m": "Mega Kangaskhan",
    "0-10 megasflair 127m": "Mega Pinsir",
    "0-11 megasflair 130m": "Mega Gyarados",
    "0-12 megasflair 142m": "Mega Aerodactyl",
    "0-13 megasflair 150xm": "Mega Mewtwo X",
    "0-14 megasflair 150ym": "Mega Mewtwo Y",
    "0-15 megasflair 181m": "Mega Ampharos",
    "0-16 megasflair 208m": "Mega Steelix",
    "0-17 megasflair 212m": "Mega Scizor",
    "0-18 megasflair 214m": "Mega Heracross",
    "0-19 megasflair 229m": "Mega Houndoom",
    "0-20 megasflair 248m": "Mega Tyranitar",
    "0-21 megasflair 254m": "Mega Sceptile",
    "0-22 megasflair 257m": "Mega Blaziken",
    "0-23 megasflair 260m": "Mega Swampert",
    "0-24 megasflair 282m": "Mega Gardevoir",
    "0-25 megasflair 302m": "Mega Sableye",
    "0-26 megasflair 303m": "Mega Mawile",
    "0-27 megasflair 306m": "Mega Aggron",
    "0-28 megasflair 308m": "Mega Medicham",
    "0-29 megasflair 310m": "Mega Manectric",
    "0-30 megasflair 319m": "Mega Sharpedo",
    "0-31 megasflair 323m": "Mega Camerupt",
    "0-32 megasflair 334m": "Mega Altaria",
    "1-0 megasflair 354m": "Mega Banette",
    "1-1 megasflair 359m": "Mega Absol",
    "1-2 megasflair 362m": "Mega Glalie",
    "1-3 megasflair 373m": "Mega Salamence",
    "1-4 megasflair 376m": "Mega Metagross",
    "1-5 megasflair 380m": "Mega Latias",
    "1-6 megasflair 381m": "Mega Latios",
    "1-7 megasflair 382m": "Primal Kyogre",
    "1-8 megasflair 383m": "Primal Groudon",
    "1-9 megasflair 384m": "Mega Rayquaza",
    "1-10 megasflair 428m": "Mega Lopunny",
    "1-11 megasflair 445m": "Mega Garchomp",
    "1-12 megasflair 448m": "Mega Lucario",
    "1-13 megasflair 460m": "Mega Abomasnow",
    "1-14 megasflair 475m": "Mega Gallade",
    "1-15 megasflair 531m": "Mega Audino",
    "1-16 megasflair 719m": "Mega Diancie",
    "1-17 megasflair ub1": "UB-01 Symbiont - Nihilego",
    "1-18 megasflair ub2s": "UB-02 Absorption - Buzzwole",
    "1-19 megasflair ub2m": "UB-02 Beauty - Pheromosa",
    "1-20 megasflair ub3": "UB-03 Lighting - Xurkitree",
    "1-21 megasflair ub4s": "UB-04 Blaster - Celesteela",
    "1-22 megasflair ub4m": "UB-04 Blade - Kartana",
    "1-23 megasflair ub5": "UB-05 Glutton - Guzzlord",
    "1-24 megasflair ub6": "Necrozma",
    "0-0 badgesflair badge1": "Brock Badge",
    "0-1 badgesflair badge2": "Misty Badge",
    "0-2 badgesflair badge3": "Lt. Surge Badge",
    "0-3 badgesflair badge4": "Erika Badge",
    "0-4 badgesflair badge5": "Koga Badge",
    "0-5 badgesflair badge6": "Sabrina Badge",
    "0-6 badgesflair badge7": "Blaine Badge",
    "0-7 badgesflair badge8": "Giovanni/Blue Badge",
    "0-16 badgesflair badge17": "Team Rocket Emblem",
    "1-23 badgesflair badge57": "Normalium-Z",
    "1-24 badgesflair badge58": "Fightinium-Z",
    "1-25 badgesflair badge59": "Waterium-Z",
    "1-26 badgesflair badge60": "Firium-Z",
    "1-27 badgesflair badge61": "Grassium-Z",
    "1-28 badgesflair badge62": "Rockium-Z",
    "1-29 badgesflair badge63": "Electrium-Z",
    "1-30 badgesflair badge64": "Ghostium-Z",
    "1-31 badgesflair badge65": "Darkinium-Z",
    "1-32 badgesflair badge66": "Fairium-Z",
    "2-0 badgesflair badge67": "Groundium-Z",
    "2-1 badgesflair badge68": "Dragonium-Z",
    "2-2 badgesflair badge69": "Buginium-Z",
    "2-3 badgesflair badge70": "Flyinium-Z",
    "2-4 badgesflair badge71": "Steelium-Z",
    "2-5 badgesflair badge72": "Icium-Z",
    "2-6 badgesflair badge73": "Poisonium-Z",
    "2-7 badgesflair badge74": "Psychium-Z",
    "2-8 badgesflair badge75": "Team Skull Emblem",
    "2-9 badgesflair badge76": "Aether Foundation Emblem",
};
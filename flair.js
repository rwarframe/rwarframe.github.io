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

	"0-0 primewarframesflair ash-prime": "Ash Prime",
	"0-1 primewarframesflair ember-prime": "Ember",
	"0-2 primewarframesflair excalibur-prime": "Excalibur Prime",
	"0-3 primewarframesflair frost-prime": "Frost Prime",
	"0-4 primewarframesflair loki-prime": "Loki Prime",
	"0-5 primewarframesflair mag-prime": "Mag Prime",
	"0-6 primewarframesflair nekros-prime": "Nekros Prime",
	"0-7 primewarframesflair nova-prime": "Nova Prime",
	"0-8 primewarframesflair nyx-prime": "Nyx Prime",
	"0-9 primewarframesflair rhino-prime": "Rhino Prime",
	"0-10 primewarframesflair saryn-prime": "Saryn Prime",
	"0-11 primewarframesflair trinity-prime": "Trinity Prime",
	"0-12 primewarframesflair vauban-prime": "Vauban Prime",
	"0-13 primewarframesflair volt-prime": "Volt Prime",
	
	"0-0 regularwarframesflair ash": "Ash",
	"0-1 regularwarframesflair atlas": "Atlas",
	"0-2 regularwarframesflair banshee": "Banshee",
	"0-3 regularwarframesflair chroma": "Chroma",
	"0-4 regularwarframesflair ember": "Ember",
	"0-5 regularwarframesflair equinox": "Equinox",
	"0-6 regularwarframesflair excalibur": "Excalibur",
	"0-7 regularwarframesflair frost": "Frost",
	"0-8 regularwarframesflair hydroid": "Hydroid",
	"0-9 regularwarframesflair inaros": "Inaros",
	"0-10 regularwarframesflair ivara": "Ivara",
	"0-11 regularwarframesflair limbo": "Limbo",
	"0-12 regularwarframesflair loki": "Loki",
	"0-13 regularwarframesflair mag": "Mag",
	"0-14 regularwarframesflair mesa": "Mesa",
	"0-15 regularwarframesflair mirage": "Mirage",
	"0-16 regularwarframesflair nekros": "Nekros",
	"0-17 regularwarframesflair nezha": "Nezha",
	"0-18 regularwarframesflair nidus": "Nidus",
	"0-19 regularwarframesflair nova": "Nova",
	"0-20 regularwarframesflair nyx": "Nyx",
	"0-21 regularwarframesflair oberon": "Oberon",
	"0-22 regularwarframesflair rhino": "Rhino",
	"0-23 regularwarframesflair saryn": "Saryn",
	"0-24 regularwarframesflair titania": "Titania",
	"0-25 regularwarframesflair trinity": "Trinity",
	"0-26 regularwarframesflair valkyr": "Valkyr",
	"0-27 regularwarframesflair vauban": "Vauban",
	"0-28 regularwarframesflair volt": "Volt",
	"0-29 regularwarframesflair wukong": "Wukong",
	"0-30 regularwarframesflair zephyr": "Zephyr",
	
	"0-0 warframeskinsflair banshee-soprana": "Banshee (Soprana)",
	"0-1 warframeskinsflair excalibur-jade": "Excalibur (Jade)",
	"0-2 warframeskinsflair excalibur-obsidian-b": "Excalibur (Obsidian)",
	"0-3 warframeskinsflair excalibur-prisma-b": "Excalibur (Prisma)",
	"0-4 warframeskinsflair excalibur-proto": "Excalibur (Proto)",
	"0-5 warframeskinsflair excalibur-sentient-slayer": "Excalibur (Sentient Slayer by CommanderApocalypse)",
	"0-6 warframeskinsflair excalibur-vespula-gold": "Excalibur (Vespula Gold by polygonmonster)",
	"0-7 warframeskinsflair frost-grost": "Frost (Grost by Faven_PS)",
	"0-8 warframeskinsflair frost-hailstorm": "Frost (Hailstorm by Arsenal)",
	"0-9 warframeskinsflair frost-vojnik": "Frost (Vojnik Battle-Damaged by Volkovyi)",
	"0-10 warframeskinsflair loki-knave": "Loki (Knave)",
	"0-11 warframeskinsflair mag-alata": "Mag (Alata by Hitsu San)",
	"0-12 warframeskinsflair mag-knaita": "Mag (Knaita by prosetisen)",
	"0-13 warframeskinsflair mag-orbit": "Mag (Orbit by Del)",
	"0-14 warframeskinsflair nova-asuri": "Nova (Asuri)",
	"0-15 warframeskinsflair nova-cygni": "Nova (Cygni by Arsenal)",
	"0-16 warframeskinsflair nova-device": "Nova (Device by posetisen)",
	"0-17 warframeskinsflair nova-gnova": "Nova (Gnova by Faven_PS)",
	"0-18 warframeskinsflair nova-lamia-b": "Nova (Lamia by Mz-3)",
	"0-19 warframeskinsflair nova-stinger": "Nova (Stinger by Cheshire)",
	"0-20 warframeskinsflair nova-visage": "Nova (Visage by Hitsu San)",
	"0-21 warframeskinsflair nyx-nemesis": "Nyx (Nemesis)",
	"0-22 warframeskinsflair oberon-feyarch": "Oberon (Feyarch)",
	"0-23 warframeskinsflair rhino-rubedo": "Rhino (Rubedo)",
	"0-24 warframeskinsflair rhino-palatine": "Rhino (Palatine)",
	"0-25 warframeskinsflair saryn-orphid": "Saryn (Orphid)",
	"0-26 warframeskinsflair trinity-strega": "Trinity (Strega)",
	"0-27 warframeskinsflair valkyr-gersemi": "Valkyr (Gersemi)",
	"0-28 warframeskinsflair vauban-phased": "Vauban (Phased)",
	"0-29 warframeskinsflair volt-amp": "Volt (Amp by Faven_PS)",
	"0-30 warframeskinsflair zephyr-hagoromo": "Zephyr (Hagoromo by Hitsu San)",
	"0-31 warframeskinsflair zephyr-skeiron": "Zephyr (Skeiron by novadragon01)",    
	
	"0-0 warframealthelmetsflair ash-locust": "Ash (Locust)",
	"0-1 warframealthelmetsflair ash-scorpion": "Ash (Scorpion)",
	"0-2 warframealthelmetsflair atlas-shikoro": "Atlas (Shikoro)",
	"0-3 warframealthelmetsflair atlas-tartarus": "Atlas (Tartarus)",
	"0-4 warframealthelmetsflair banshee-chorus": "Banshee (Chorus)",
	"0-5 warframealthelmetsflair banshee-reverb": "Banshee (Reverb)",
	"0-6 warframealthelmetsflair chroma-amaru": "Chroma (Amaru)",
	"0-7 warframealthelmetsflair chroma-drac": "Chroma (Drac)",
	"0-8 warframealthelmetsflair chroma-kaiju": "Chroma (Kaiju by [k a z])",
	"0-9 warframealthelmetsflair chroma-tarrasque": "Chroma (Tarrasque by artarrwen)",
	"0-10 warframealthelmetsflair ember-backdraft": "Ember (Backdraft)",
	"0-11 warframealthelmetsflair ember-phoenix": "Ember (Phoenix)",
	"0-12 warframealthelmetsflair equinox-solstice": "Equinox (Solstice)",
	"0-13 warframealthelmetsflair excalibur-avalon": "Excalibur (Avalon)",
	"0-14 warframealthelmetsflair excalibur-mordred": "Excalibur (Mordred)",
	"0-15 warframealthelmetsflair excalibur-pendragon": "Excalibur (Pendragon)",
	"0-16 warframealthelmetsflair excalibur-obsidian-h": "Excalibur (Obsidian)",
	"0-17 warframealthelmetsflair excalibur-prisma-h": "Excalibur (Prisma)",
	"0-18 warframealthelmetsflair excalibur-prisma-avalon": "Excalibur (Prisma Avalon)",
	"0-19 warframealthelmetsflair excalibur-prisma-pendragon": "Excalibur (Prisma Pendragon)",
	"0-20 warframealthelmetsflair excalibur-arturius": "Excalibur (Arturius by [k a z])",
	"0-21 warframealthelmetsflair excalibur-isurus": "Excalibur (Isurus by Coridium)",
	"0-22 warframealthelmetsflair excalibur-orgrant": "Excalibur (Ogrant by lokimonkeye)",
	"0-23 warframealthelmetsflair frost-aurora": "Frost (Aurora)",
	"0-24 warframealthelmetsflair frost-squall": "Frost (Squall)",
	"0-25 warframealthelmetsflair frost-summit": "Frost (Summit by artarrwen)",
	"0-26 warframealthelmetsflair frost-zastruga": "Frost (Zastruga by Rekkou)",
	"0-27 warframealthelmetsflair hydroid-ketos": "Hydroid (Ketos)",
	"0-28 warframealthelmetsflair hydroid-triton": "Hydroid (Triton)",
	"0-29 warframealthelmetsflair inaros-anubis": "Inaros (Anubis)",
	"0-30 warframealthelmetsflair ivara-loxley": "Ivara (Loxley)",
	"0-31 warframealthelmetsflair limbo-aristeas": "Limbo (Aristeas)",
	"0-32 warframealthelmetsflair limbo-magrite": "Limbo (Magrite)",
	"0-33 warframealthelmetsflair loki-enigma": "Loki (Enigma)",
	"0-34 warframealthelmetsflair loki-essence": "Loki (Essence)",
	"0-35 warframealthelmetsflair loki-swindle": "Loki (Swindle)",
	"0-36 warframealthelmetsflair mag-coil": "Mag (Coil)",
	"0-37 warframealthelmetsflair mag-gauss": "Mag (Gauss)",
	"0-38 warframealthelmetsflair mag-anthro": "Mag (Anthro by Pior)",
	"0-39 warframealthelmetsflair mag-induction": "Mag (Induction by Pior)",
	"0-40 warframealthelmetsflair mag-toroidal": "Mag (Toroidal by prosetisen)",
	"0-41 warframealthelmetsflair mesa-longhorn": "Mesa (Longhorn)",
	"0-42 warframealthelmetsflair mesa-ovis": "Mesa (Ovis)",
	"0-43 warframealthelmetsflair mesa-dead-eye": "Mesa (Dead Eye by NotYou)",
	"0-44 warframealthelmetsflair mesa-falcon": "Mesa (Falcon by prosetisen)",
	"0-45 warframealthelmetsflair mirage-harlequin": "Mirage (Harlequin)",
	"0-46 warframealthelmetsflair mirage-trivelin": "Mirage (Trivelin)",
	"0-47 warframealthelmetsflair nekros-raknis": "Nekros (Raknis)",
	"0-48 warframealthelmetsflair nekros-shroud": "Nekros (Shroud)",
	"0-49 warframealthelmetsflair nekros-lazarus": "Nekros (Lazarus by [k a z])",
	"0-50 warframealthelmetsflair nezha-circa": "Nezha (Circa)",
	"0-51 warframealthelmetsflair nova-flux": "Nova (Flux)",
	"0-52 warframealthelmetsflair nova-quantum": "Nova (Quantum)",
	"0-53 warframealthelmetsflair nova-slipstream": "Nova (Slipstream)",
	"0-54 warframealthelmetsflair nova-lamia-h": "Nova (Lamia by Wei-Zi and Mz-3)",
	"0-55 warframealthelmetsflair nova-tachyon": "Nova (Tachyon by Rekkou)",
	"0-56 warframealthelmetsflair nyx-menticide": "Nyx (Menticide)",
	"0-57 warframealthelmetsflair nyx-vespa": "Nyx (Vespa)",
	"0-58 warframealthelmetsflair oberon-markhor": "Oberon (Markhor)",
	"0-59 warframealthelmetsflair oberon-oryx": "Oberon (Oryx)",
	"0-60 warframealthelmetsflair rhino-thrak": "Rhino (Thrak)",
	"0-61 warframealthelmetsflair rhino-vanguard": "Rhino (Vanguard)",
	"0-62 warframealthelmetsflair saryn-chlora": "Saryn (Chlora)",
	"0-63 warframealthelmetsflair saryn-hemlock": "Saryn (Hemlock)",
	"0-64 warframealthelmetsflair trinity-aura": "Trinity (Aura)",
	"0-65 warframealthelmetsflair trinity-meridian": "Trinity (Meridian)",
	"0-66 warframealthelmetsflair valkyr-bastet": "Valkyr (Bastet)",
	"0-67 warframealthelmetsflair valkyr-kara": "Valkyr (Kara)",
	"0-68 warframealthelmetsflair vauban-armistice": "Vauban (Armistice)",
	"0-69 warframealthelmetsflair vauban-esprit": "Vauban (Esprit)",
	"0-70 warframealthelmetsflair vauban-gambit": "Vauban (Gambit)",
	"0-71 warframealthelmetsflair volt-pulse": "Volt (Pulse)",
	"0-72 warframealthelmetsflair volt-storm": "Volt (Storm)",
	"0-73 warframealthelmetsflair volt-arrester": "Volt (Arrester by Rekkou)",
	"0-74 warframealthelmetsflair volt-relay": "Volt (Relay by DespicableCheese)",
	"0-75 warframealthelmetsflair volt-thales": "Volt (Thales by Arsenal)",
	"0-76 warframealthelmetsflair wukong-dasheng": "Wukong (Dasheng)",
	"0-77 warframealthelmetsflair zephyr-cierzo": "Zephyr (Cierzo)",
	"0-78 warframealthelmetsflair zephyr-tengu": "Zephyr (Tengu)",
	"0-79 warframealthelmetsflair zephyr-monsoon": "Zephyr (Monsoon by artarrwen)",
	
	
	/*"0-0 unovaflair 494": "Victini",
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
	"2-5 kalosflair 721": "Volcanion",*/
    
	"0-0 miscellaneousflair disciple": "Disciple Founder",
	"0-1 miscellaneousflair hunter": "Hunter Founder",
	"0-2 miscellaneousflair master": "Master Founder",
	"0-3 miscellaneousflair grandmaster": "Grand Master Founder",
/*	"0-4 miscellaneousflair revive": "Moderator",
	"0-5 miscellaneousflair lotus": "DE Employee",*/
	"0-6 miscellaneousflair kubrow": "Kubrow",
	"0-7 miscellaneousflair kubrow-chesa": "Kubrow (Chesa)",
	"0-8 miscellaneousflair kubrow-huras": "Kubrow (Huras)",
	"0-9 miscellaneousflair kubrow-raksa": "Kubrow (Raksa)",
	"0-10 miscellaneousflair kubrow-sahasa": "Kubrow (Sahasa)",
	"0-11 miscellaneousflair kubrow-sunika": "Kubrow (Sunika)",
	"0-12 miscellaneousflair kavat-a": "Kavat",
	"0-13 miscellaneousflair kavat-b": "Kavat",
	"0-14 miscellaneousflair kavat-c": "Kavat",
	"0-15 miscellaneousflair kavat-d": "Kavat",
	"0-16 miscellaneousflair pc": "PC",
	"0-17 miscellaneousflair ps4": "PS4",
	"0-18 miscellaneousflair xb1": "XB1",
	"0-19 miscellaneousflair arbiters-of-hexis": "Arbiters of Hexis",
	"0-20 miscellaneousflair cephalon-simaris": "Cephalon Simaris",
	"0-21 miscellaneousflair cephalon-suda": "Cephalon Suda",
	"0-22 miscellaneousflair conclave": "Conclave",
	"0-23 miscellaneousflair new-loka": "New Loka",
	"0-24 miscellaneousflair red-veil": "Red Veil",
	"0-25 miscellaneousflair steel-meridian": "Steel Meridian",
	"0-26 miscellaneousflair the-perrin-sequence": "The Perrin Sequence",
};
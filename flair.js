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
                flair_id: data[2],
                orig_id: orig_id,
                flair_name: flair.names[key],
                flair_class: ' flair-'+data[0] + ' flair-'+data[1] + ' flair-'+data[2]
            }
        }
    }
}
flair.by_id = {}
flair.names = {
/* [STANDARD] */
	
	"0 primewarframesflair ash-prime": "Ash Prime",
	"1 primewarframesflair ember-prime": "Ember",
	"2 primewarframesflair excalibur-prime": "Excalibur Prime",
	"3 primewarframesflair frost-prime": "Frost Prime",
	"4 primewarframesflair loki-prime": "Loki Prime",
	"5 primewarframesflair mag-prime": "Mag Prime",
	"6 primewarframesflair nekros-prime": "Nekros Prime",
	"7 primewarframesflair nova-prime": "Nova Prime",
	"8 primewarframesflair nyx-prime": "Nyx Prime",
	"9 primewarframesflair rhino-prime": "Rhino Prime",
	"10 primewarframesflair saryn-prime": "Saryn Prime",
	"11 primewarframesflair trinity-prime": "Trinity Prime",
	"12 primewarframesflair vauban-prime": "Vauban Prime",
	"13 primewarframesflair volt-prime": "Volt Prime",
	
	
	"0 regularwarframesflair ash": "Ash",
	"1 regularwarframesflair atlas": "Atlas",
	"2 regularwarframesflair banshee": "Banshee",
	"3 regularwarframesflair chroma": "Chroma",
	"4 regularwarframesflair ember": "Ember",
	"5 regularwarframesflair equinox": "Equinox",
	"6 regularwarframesflair excalibur": "Excalibur",
	"7 regularwarframesflair frost": "Frost",
	"8 regularwarframesflair hydroid": "Hydroid",
	"9 regularwarframesflair inaros": "Inaros",
	"10 regularwarframesflair ivara": "Ivara",
	"11 regularwarframesflair limbo": "Limbo",
	"12 regularwarframesflair loki": "Loki",
	"13 regularwarframesflair mag": "Mag",
	"14 regularwarframesflair mesa": "Mesa",
	"15 regularwarframesflair mirage": "Mirage",
	"16 regularwarframesflair nekros": "Nekros",
	"17 regularwarframesflair nezha": "Nezha",
	/*"18 regularwarframesflair nidus": "Nidus",*/
	"19 regularwarframesflair nova": "Nova",
	"20 regularwarframesflair nyx": "Nyx",
	"21 regularwarframesflair oberon": "Oberon",
	"22 regularwarframesflair rhino": "Rhino",
	"23 regularwarframesflair saryn": "Saryn",
	"24 regularwarframesflair titania": "Titania",
	"25 regularwarframesflair trinity": "Trinity",
	"26 regularwarframesflair valkyr": "Valkyr",
	"27 regularwarframesflair vauban": "Vauban",
	"28 regularwarframesflair volt": "Volt",
	"29 regularwarframesflair wukong": "Wukong",
	"30 regularwarframesflair zephyr": "Zephyr",
	
	
	"0 warframeskinsflair banshee-soprana": "Banshee (Soprana)",
	"1 warframeskinsflair excalibur-jade": "Excalibur (Jade)",
	"2 warframeskinsflair excalibur-obsidian-b": "Excalibur (Obsidian)",
	"3 warframeskinsflair excalibur-prisma-b": "Excalibur (Prisma)",
	"4 warframeskinsflair excalibur-proto": "Excalibur (Proto)",
	"5 warframeskinsflair excalibur-sentient-slayer": "Excalibur (Sentient Slayer by CommanderApocalypse)",
	"6 warframeskinsflair excalibur-vespula-gold": "Excalibur (Vespula Gold by polygonmonster)",
	"7 warframeskinsflair frost-grost": "Frost (Grost by Faven_PS)",
	"8 warframeskinsflair frost-hailstorm": "Frost (Hailstorm by Arsenal)",
	"9 warframeskinsflair frost-vojnik": "Frost (Vojnik Battle-Damaged by Volkovyi)",
	"10 warframeskinsflair loki-knave": "Loki (Knave)",
	"11 warframeskinsflair mag-alata": "Mag (Alata by Hitsu San)",
	"12 warframeskinsflair mag-knaita": "Mag (Knaita by prosetisen)",
	"13 warframeskinsflair mag-orbit": "Mag (Orbit by Del)",
	"14 warframeskinsflair nova-asuri": "Nova (Asuri)",
	"15 warframeskinsflair nova-cygni": "Nova (Cygni by Arsenal)",
	"16 warframeskinsflair nova-device": "Nova (Device by posetisen)",
	"17 warframeskinsflair nova-gnova": "Nova (Gnova by Faven_PS)",
	"18 warframeskinsflair nova-lamia-b": "Nova (Lamia by Mz-3)",
	"19 warframeskinsflair nova-stinger": "Nova (Stinger by Cheshire)",
	"20 warframeskinsflair nova-visage": "Nova (Visage by Hitsu San)",
	"21 warframeskinsflair nyx-nemesis": "Nyx (Nemesis)",
	"22 warframeskinsflair oberon-feyarch": "Oberon (Feyarch)",
	"23 warframeskinsflair rhino-rubedo": "Rhino (Rubedo)",
	"24 warframeskinsflair rhino-palatine": "Rhino (Palatine)",
	"25 warframeskinsflair saryn-orphid": "Saryn (Orphid)",
	"26 warframeskinsflair trinity-strega": "Trinity (Strega)",
	"27 warframeskinsflair valkyr-gersemi": "Valkyr (Gersemi)",
	"28 warframeskinsflair vauban-phased": "Vauban (Phased)",
	"29 warframeskinsflair volt-amp": "Volt (Amp by Faven_PS)",
	"30 warframeskinsflair zephyr-hagoromo": "Zephyr (Hagoromo by Hitsu San)",
	"31 warframeskinsflair zephyr-skeiron": "Zephyr (Skeiron by novadragon01)",    
	
	
	"0 warframealthelmetsflair ash-locust": "Ash (Locust)",
	"1 warframealthelmetsflair ash-scorpion": "Ash (Scorpion)",
	"2 warframealthelmetsflair atlas-shikoro": "Atlas (Shikoro)",
	"3 warframealthelmetsflair atlas-tartarus": "Atlas (Tartarus)",
	"4 warframealthelmetsflair banshee-chorus": "Banshee (Chorus)",
	"5 warframealthelmetsflair banshee-reverb": "Banshee (Reverb)",
	"6 warframealthelmetsflair chroma-amaru": "Chroma (Amaru)",
	"7 warframealthelmetsflair chroma-drac": "Chroma (Drac)",
	"8 warframealthelmetsflair chroma-kaiju": "Chroma (Kaiju by [k a z])",
	"9 warframealthelmetsflair chroma-tarrasque": "Chroma (Tarrasque by artarrwen)",
	"10 warframealthelmetsflair ember-backdraft": "Ember (Backdraft)",
	"11 warframealthelmetsflair ember-phoenix": "Ember (Phoenix)",
	"12 warframealthelmetsflair equinox-solstice": "Equinox (Solstice)",
	"13 warframealthelmetsflair excalibur-avalon": "Excalibur (Avalon)",
	"14 warframealthelmetsflair excalibur-mordred": "Excalibur (Mordred)",
	"15 warframealthelmetsflair excalibur-pendragon": "Excalibur (Pendragon)",
	"16 warframealthelmetsflair excalibur-obsidian-h": "Excalibur (Obsidian)",
	"17 warframealthelmetsflair excalibur-prisma-h": "Excalibur (Prisma)",
	"18 warframealthelmetsflair excalibur-prisma-avalon": "Excalibur (Prisma Avalon)",
	"19 warframealthelmetsflair excalibur-prisma-pendragon": "Excalibur (Prisma Pendragon)",
	"20 warframealthelmetsflair excalibur-arturius": "Excalibur (Arturius by [k a z])",
	"21 warframealthelmetsflair excalibur-isurus": "Excalibur (Isurus by Coridium)",
	"22 warframealthelmetsflair excalibur-orgrant": "Excalibur (Ogrant by lokimonkeye)",
	"23 warframealthelmetsflair frost-aurora": "Frost (Aurora)",
	"24 warframealthelmetsflair frost-squall": "Frost (Squall)",
	"25 warframealthelmetsflair frost-summit": "Frost (Summit by artarrwen)",
	"26 warframealthelmetsflair frost-zastruga": "Frost (Zastruga by Rekkou)",
	"27 warframealthelmetsflair hydroid-ketos": "Hydroid (Ketos)",
	"28 warframealthelmetsflair hydroid-triton": "Hydroid (Triton)",
	"29 warframealthelmetsflair inaros-anubis": "Inaros (Anubis)",
	"30 warframealthelmetsflair ivara-loxley": "Ivara (Loxley)",
	"31 warframealthelmetsflair limbo-aristeas": "Limbo (Aristeas)",
	"32 warframealthelmetsflair limbo-magrite": "Limbo (Magrite)",
	"33 warframealthelmetsflair loki-enigma": "Loki (Enigma)",
	"34 warframealthelmetsflair loki-essence": "Loki (Essence)",
	"35 warframealthelmetsflair loki-swindle": "Loki (Swindle)",
	"36 warframealthelmetsflair mag-coil": "Mag (Coil)",
	"37 warframealthelmetsflair mag-gauss": "Mag (Gauss)",
	"38 warframealthelmetsflair mag-anthro": "Mag (Anthro by Pior)",
	"39 warframealthelmetsflair mag-induction": "Mag (Induction by Pior)",
	"40 warframealthelmetsflair mag-toroidal": "Mag (Toroidal by prosetisen)",
	"41 warframealthelmetsflair mesa-longhorn": "Mesa (Longhorn)",
	"42 warframealthelmetsflair mesa-ovis": "Mesa (Ovis)",
	"43 warframealthelmetsflair mesa-dead-eye": "Mesa (Dead Eye by NotYou)",
	"44 warframealthelmetsflair mesa-falcon": "Mesa (Falcon by prosetisen)",
	"45 warframealthelmetsflair mirage-harlequin": "Mirage (Harlequin)",
	"46 warframealthelmetsflair mirage-trivelin": "Mirage (Trivelin)",
	"47 warframealthelmetsflair nekros-raknis": "Nekros (Raknis)",
	"48 warframealthelmetsflair nekros-shroud": "Nekros (Shroud)",
	"49 warframealthelmetsflair nekros-lazarus": "Nekros (Lazarus by [k a z])",
	"50 warframealthelmetsflair nezha-circa": "Nezha (Circa)",
	"51 warframealthelmetsflair nova-flux": "Nova (Flux)",
	"52 warframealthelmetsflair nova-quantum": "Nova (Quantum)",
	"53 warframealthelmetsflair nova-slipstream": "Nova (Slipstream)",
	"54 warframealthelmetsflair nova-lamia-h": "Nova (Lamia by Wei-Zi and Mz-3)",
	"55 warframealthelmetsflair nova-tachyon": "Nova (Tachyon by Rekkou)",
	"56 warframealthelmetsflair nyx-menticide": "Nyx (Menticide)",
	"57 warframealthelmetsflair nyx-vespa": "Nyx (Vespa)",
	"58 warframealthelmetsflair oberon-markhor": "Oberon (Markhor)",
	"59 warframealthelmetsflair oberon-oryx": "Oberon (Oryx)",
	"60 warframealthelmetsflair rhino-thrak": "Rhino (Thrak)",
	"61 warframealthelmetsflair rhino-vanguard": "Rhino (Vanguard)",
	"62 warframealthelmetsflair saryn-chlora": "Saryn (Chlora)",
	"63 warframealthelmetsflair saryn-hemlock": "Saryn (Hemlock)",
	"64 warframealthelmetsflair trinity-aura": "Trinity (Aura)",
	"65 warframealthelmetsflair trinity-meridian": "Trinity (Meridian)",
	"66 warframealthelmetsflair valkyr-bastet": "Valkyr (Bastet)",
	"67 warframealthelmetsflair valkyr-kara": "Valkyr (Kara)",
	"68 warframealthelmetsflair vauban-armistice": "Vauban (Armistice)",
	"69 warframealthelmetsflair vauban-esprit": "Vauban (Esprit)",
	"70 warframealthelmetsflair vauban-gambit": "Vauban (Gambit)",
	"71 warframealthelmetsflair volt-pulse": "Volt (Pulse)",
	"72 warframealthelmetsflair volt-storm": "Volt (Storm)",
	"73 warframealthelmetsflair volt-arrester": "Volt (Arrester by Rekkou)",
	"74 warframealthelmetsflair volt-relay": "Volt (Relay by DespicableCheese)",
	"75 warframealthelmetsflair volt-thales": "Volt (Thales by Arsenal)",
	"76 warframealthelmetsflair wukong-dasheng": "Wukong (Dasheng)",
	"77 warframealthelmetsflair zephyr-cierzo": "Zephyr (Cierzo)",
	"78 warframealthelmetsflair zephyr-tengu": "Zephyr (Tengu)",
	"79 warframealthelmetsflair zephyr-monsoon": "Zephyr (Monsoon by artarrwen)",
	
	
	/*"0 glyphsflair 494": "Victini",
	"1 glyphsflair 495": "Snivy",
	"2 glyphsflair 496": "Servine",
	"3 glyphsflair 497": "Serperior",
	"4 glyphsflair 498": "Tepig",
	"5 glyphsflair 499": "Pignite",
	"6 glyphsflair 500": "Emboar",
	"7 glyphsflair 501": "Oshawott",
	"8 glyphsflair 502": "Dewott",
	"9 glyphsflair 503": "Samurott",
	"10 glyphsflair 504": "Patrat",
	"11 glyphsflair 505": "Watchog",
	"12 glyphsflair 506": "Lillipup",
	"13 glyphsflair 507": "Herdier",
	"14 glyphsflair 508": "Stoutland",
	"15 glyphsflair 509": "Purrloin",
	"16 glyphsflair 510": "Liepard",
	"17 glyphsflair 511": "Pansage",
	"18 glyphsflair 512": "Simisage",
	"19 glyphsflair 513": "Pansear",
	"20 glyphsflair 514": "Simisear",
	"21 glyphsflair 515": "Panpour",
	"22 glyphsflair 516": "Simipour",
	"23 glyphsflair 517": "Munna",
	"24 glyphsflair 518": "Musharna",
	"25 glyphsflair 519": "Pidove",
	"26 glyphsflair 520": "Tranquill",
	"27 glyphsflair 521": "Unfezant",
	"28 glyphsflair 522": "Blitzle",
	"29 glyphsflair 523": "Zebstrika",
	"30 glyphsflair 524": "Roggenrola",
	"31 glyphsflair 525": "Boldore",
	"32 glyphsflair 526": "Gigalith",*/
	
	
	"0 nogglesflair noggle-alad-v": "Alad V Nogg	le",
	"1 nogglesflair noggle-baro-ki-teer": "Baro Ki'Teer Noggle",
	"2 nogglesflair noggle-captain-vor": "Captain Vor Noggle",
	"3 nogglesflair noggle-clem": "Clem Noggle",
	"4 nogglesflair noggle-general-sargas-ruk": "General Sargas Ruk Noggle",
	"5 nogglesflair noggle-the-lotus": "Lotus Noggle",
	"6 nogglesflair noggle-the-stalker": "??????? Noggle",
	
	
	"0 miscellaneousflair disciple": "Disciple Founder",
	"1 miscellaneousflair hunter": "Hunter Founder",
	"2 miscellaneousflair master": "Master Founder",
	"3 miscellaneousflair grandmaster": "Grand Master Founder",	
	/*
	"4 miscellaneousflair revive": "Moderator",
	"5 miscellaneousflair lotus": "DE Employee",
	*/
	"6 miscellaneousflair kubrow": "Kubrow",
	"7 miscellaneousflair kubrow-chesa": "Kubrow (Chesa)",
	"8 miscellaneousflair kubrow-huras": "Kubrow (Huras)",
	"9 miscellaneousflair kubrow-raksa": "Kubrow (Raksa)",
	"10 miscellaneousflair kubrow-sahasa": "Kubrow (Sahasa)",
	"11 miscellaneousflair kubrow-sunika": "Kubrow (Sunika)",
	"12 miscellaneousflair kavat-a": "Kavat",
	"13 miscellaneousflair kavat-b": "Kavat",
	"14 miscellaneousflair kavat-c": "Kavat",
	"15 miscellaneousflair kavat-d": "Kavat",
	"16 miscellaneousflair pc": "PC",
	"17 miscellaneousflair ps4": "PS4",
	"18 miscellaneousflair xb1": "XB1",
	"19 miscellaneousflair arbiters-of-hexis": "Arbiters of Hexis",
	"20 miscellaneousflair cephalon-simaris": "Cephalon Simaris",
	"21 miscellaneousflair cephalon-suda": "Cephalon Suda",
	"22 miscellaneousflair conclave": "Conclave",
	"23 miscellaneousflair new-loka": "New Loka",
	"24 miscellaneousflair red-veil": "Red Veil",
	"25 miscellaneousflair steel-meridian": "Steel Meridian",
	"26 miscellaneousflair the-perrin-sequence": "The Perrin Sequence"
};

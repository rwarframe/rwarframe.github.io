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
	
	/* Remove Flair */
	"0 removeflair": "Remove Flair",
	
	/* Prime Warframe Flairs (0-14) */
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
	"14 primewarframesflair valkyr-prime": "Valkyr Prime",
	
	
	/* Regular Warframe Flairs (0-30) */
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
	"18 regularwarframesflair nidus": "Nidus",
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
	
	
	/* Warframe Skins (0-32) */
	"32 warframeskinsflair ash-koga-b": "Ash (Koga)",
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
	
	
	/* Warframe Alt Helmet Flairs (0-82) */
	"82 warframealthelmetsflair ash-koga-h": "Ash (Koga)",
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
	"81 warframealthelmetsflair nidus-prion": "Nidus (Prion)",
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
	"80 warframealthelmetsflair titania-aurai": "Titania (Aurai)",
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
	
	
	/* Glyph Flairs (0-51) */
    "0 glyphsflair ash-in-action-glyph": "Ash in Action Glyph",
    "1 glyphsflair blood-lotus-glyph": "Blood Lotus Glyph",
    "2 glyphsflair butterfly-varna-glyph": "Butterfly Varna Glyph",
    "3 glyphsflair ceph-pinacoid-glyph": "Ceph Pinacoid Glyph",
    "4 glyphsflair clem-in-action-glyph": "Clem in Action Glyph",
    "5 glyphsflair ember-in-action-glyph": "Ember in Action Glyph",
    "6 glyphsflair excalibur-in-action-glyph": "Excalibur in Action Glyph",
    "7 glyphsflair excalibur-noggle-glyph": "Excalibur Noggle Glyph",
    "8 glyphsflair ginger-kubrow-varna-glyph": "Ginger Kubrow Varna Glyph",
    "9 glyphsflair grey-kubrow-varna-glyph": "Grey Kubrow Varna Glyph",
    "10 glyphsflair grineer-queens-glyph": "Grineer Queens Glyph",
    "11 glyphsflair hydroid-submerged-glyph": "Hydroid Submerged Glyph",
    "12 glyphsflair isochronon-glyph": "Isochronon Glyph",
    "13 glyphsflair kavat-enamel-glyph": "Kavat Enamel Glyph",
    "14 glyphsflair kubrow-enamel-glyph": "Kubrow Enamel Glyph",
    "15 glyphsflair kuria-glyph": "Kuria Glyph",
    "16 glyphsflair kuria-idolized-glyph": "Kuria Idolized Glyph",
    "17 glyphsflair loki-in-action-glyph": "Loki in Action Glyph",
    "18 glyphsflair loki-noggle-glyph": "Loki Noggle Glyph",
    "19 glyphsflair lotus-balance-glyph": "Lotus Balance Glyph",
    "20 glyphsflair lotus-noggle-glyph": "Lotus Noggle Glyph",
    "21 glyphsflair lunaro-glyph": "Lunaro Glyph",
    "22 glyphsflair mag-in-action-glyph": "Mag in Action Glyph",
    "23 glyphsflair mag-noggle-glyph": "Mag Noggle Glyph",
    "24 glyphsflair mesa-fixated-glyph": "Mesa Fixated Glyph",
    "25 glyphsflair moon-crest-glyph": "Moon Crest Glyph",
    "26 glyphsflair mythic-balance-glyph": "Mythic Balance Glyph",
    "27 glyphsflair nekros-day-of-the-dead-glyph": "Nekros Day Of The Dead Glyph",
    "28 glyphsflair orbital-cathode-glyph": "Orbital Cathode Glyph",
    "29 glyphsflair rhino-in-action-glyph": "Rhino in Action Glyph",
    "30 glyphsflair rhino-noggle-glyph": "Rhino Noggle Glyph",
    "31 glyphsflair scarab-varna-glyph": "Scarab Varna Glyph",
    "32 glyphsflair solstice-glyph-i": "Solstice Glyph I",
    "33 glyphsflair solstice-glyph-ii": "Solstice Glyph II",
    "34 glyphsflair solstice-glyph-iii": "Solstice Glyph III",
    "35 glyphsflair solstice-glyph-iv": "Solstice Glyph IV",
    "36 glyphsflair solunar-glyph": "Solunar Glyph",
    "37 glyphsflair sooty-kubrow-varna-glyph": "Sooty Kubrow Varna Glyph",
    "38 glyphsflair sun-crest-glyph": "Sun Crest Glyph",
    "39 glyphsflair tenno-refractal-glyph": "Tenno Refractal Glyph",
    "40 glyphsflair teshin-glyph": "Teshin Glyph",
    "41 glyphsflair threshcone-varna-glyph": "Threshcone Varna Glyph",
    "42 glyphsflair trinity-in-action-glyph": "Trinity in Action Glyph",
    "43 glyphsflair volt-in-action-glyph": "Volt in Action Glyph",
    "44 glyphsflair vor-varna-glyph": "Vor Varna Glyph",
    "45 glyphsflair winter-glyph-i": "Winter Glyph I",
    "46 glyphsflair winter-glyph-ii": "Winter Glyph II",
    "47 glyphsflair winter-glyph-iii": "Winter Glyph III",
    "48 glyphsflair winter-glyph-iv": "Winter Glyph IV",
    "49 glyphsflair winter-glyph-v": "Winter Glyph V",
    "50 glyphsflair winter-glyph-vi": "Winter Glyph VI",
    "51 glyphsflair winter-glyph-vii": "Winter Glyph VII",
	
	
	/* Noggle Flairs (0-71) */	
    "7 nogglesflair index-002-er-noggle": "002-ER Noggle",
    "0 nogglesflair alad-v-noggle": "Alad V Noggle",
    "8 nogglesflair acolyte-angst-noggle": "Angst Noggle",
    "14 nogglesflair arid-seeker-noggle": "Arid Seeker Noggle",
    "29 nogglesflair index-armis-ulta-noggle": "Armis Ulta Noggle",
    "15 nogglesflair ash-noggle": "Ash Noggle",
    "30 nogglesflair index-auditor-noggle": "Auditor Noggle",
    "31 nogglesflair index-azoth-noggle": "Azoth Noggle",
    "16 nogglesflair banshee-noggle": "Banshee Noggle",
    "1 nogglesflair baro-ki-teer-noggle": "Baro Ki'Teer Noggle",
    "17 nogglesflair battalyst-noggle": "Battalyst Noggle",
    "2 nogglesflair captain-vor-noggle": "Captain Vor Noggle",
    "3 nogglesflair clem-noggle": "Clem Noggle",
    "18 nogglesflair conculyst-noggle": "Conculyst Noggle",
    "32 nogglesflair index-derim-zahn-noggle": "Derim Zahn Noggle",
    "33 nogglesflair index-dru-pesfor-noggle": "Dru Pesfor Noggle",
    "19 nogglesflair elite-arid-lancer-noggle": "Elite Arid Lancer Noggle",
    "20 nogglesflair ember-noggle": "Ember Noggle",
    "25 nogglesflair excalibur-prime-noggle": "Excalibur Prime Noggle",
    "22 nogglesflair excalibur-noggle": "Excalibur Noggle",
    "21 nogglesflair excalibur-jade-noggle": "Excalibur (Jade) Noggle",
    "25 nogglesflair excalibur-obsidian-noggle": "Excalibur (Obsidian) Noggle",
    "24 nogglesflair excalibur-obsidian-azura-noggle": "Excalibur (Obsidian Azura) Noggle",
    "55 nogglesflair rathuum-executioner-dhurnam-noggle": "Executioner Dhurnam Noggle",
    "56 nogglesflair rathuum-executioner-dok-thul-noggle": "Executioner Dok Thul Noggle",
    "57 nogglesflair rathuum-executioner-garesh-noggle": "Executioner Garesh Noggle",
    "58 nogglesflair rathuum-executioner-gorth-noggle": "Executioner Gorth Noggle",
    "59 nogglesflair rathuum-executioner-harkonar-noggle": "Executioner Harkonar Noggle",
    "60 nogglesflair rathuum-executioner-nok-noggle": "Executioner Nok Noggle",
    "61 nogglesflair rathuum-executioner-reth-noggle": "Executioner Reth Noggle",
    "62 nogglesflair rathuum-executioner-vay-molta-noggle": "Executioner Vay Molta Noggle",
    "63 nogglesflair rathuum-executioner-zura-noggle": "Executioner Zura Noggle",
    "26 nogglesflair frost-noggle": "Frost Noggle",
    "4 nogglesflair general-sargas-ruk-noggle": "General Sargas Ruk Noggle",
    "27 nogglesflair hydroid-noggle": "Hydroid Noggle",
    "28 nogglesflair hyekka-noggle": "Hyekka Noggle",    
    "34 nogglesflair index-jad-teran-noggle": "Jad Teran Noggle",
    "35 nogglesflair index-jen-dro-noggle": "Jen Dro Noggle",
    "44 nogglesflair kela-de-thaym-noggle": "Kela De Thaym Noggle",
    "45 nogglesflair lancer-noggle": "Lancer Noggle",
    "36 nogglesflair index-lockjaw-and-sol-noggle": "Lockjaw and Sol Noggle",
    "46 nogglesflair loki-noggle": "Loki Noggle",
    "5 nogglesflair the-lotus-noggle": "Lotus Noggle",
    "37 nogglesflair index-m-wam-noggle": "M-WAM Noggle",
    "47 nogglesflair mag-noggle": "Mag Noggle",
    "9 nogglesflair acolyte-malice-noggle": "Malice Noggle",
    "10 nogglesflair acolyte-mania-noggle": "Mania Noggle",
    "48 nogglesflair mirage-noggle": "Mirage Noggle",
    "11 nogglesflair acolyte-misery-noggle": "Misery Noggle",
    "38 nogglesflair index-nako-xol-noggle": "Nako Xol Noggle",
    "50 nogglesflair nekros-noggle": "Nekros Noggle",
    "51 nogglesflair nezha-noggle": "Nezha Noggle",
    "52 nogglesflair nova-noggle": "Nova Noggle",
    "53 nogglesflair nyx-noggle": "Nyx Noggle",
    "54 nogglesflair oberon-noggle": "Oberon Noggle",
    "39 nogglesflair index-pelna-cade-noggle": "Pelna Cade Noggle",
    "40 nogglesflair index-rana-del-noggle": "Rana Del Noggle",
    "41 nogglesflair index-raptor-rx-noggle": "Raptor RX Noggle",
    "64 nogglesflair rhino-noggle": "Rhino Noggle",
    "65 nogglesflair saryn-noggle": "Saryn Noggle",
    "42 nogglesflair index-tia-mayn-noggle": "Tia Mayn Noggle",
    "12 nogglesflair acolyte-torment-noggle": "Torment Noggle",
    "66 nogglesflair trinity-noggle": "Trinity Noggle",
    "67 nogglesflair valkyr-noggle": "Valkyr Noggle",
    "68 nogglesflair vauban-noggle": "Vauban Noggle",
    "43 nogglesflair index-ved-xol-noggle": "Ved Xol Noggle",
    "13 nogglesflair acolyte-violence-noggle": "Violence Noggle",
    "69 nogglesflair volt-noggle": "Volt Noggle",
    "70 nogglesflair wukong-noggle": "Wukong Noggle",
    "71 nogglesflair zephyr-noggle": "Zephyr Noggle",
    "6 nogglesflair stalker-noggle": "??????? Noggle",
	
	
	/* Miscellaneous Flairs (0-26) */
	"0 miscellaneousflair disciple": "Disciple Founder",
	"1 miscellaneousflair hunter": "Hunter Founder",
	"2 miscellaneousflair master": "Master Founder",
	"3 miscellaneousflair grandmaster": "Grand Master Founder",	
	/*"4 miscellaneousflair revive": "Moderator",*/
	/*"5 miscellaneousflair lotus": "DE Employee",*/
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

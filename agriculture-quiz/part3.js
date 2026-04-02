(function() {
    const data = [
    { 
        id: 201, 
        questionEn: "A single cropping system is also known as?", 
        questionHi: "एकल फसल प्रणाली (Single cropping system) को और किस नाम से जाना जाता है?", 
        options: ["Mixed cropping / मिश्रित खेती", "Relay cropping / रिले क्रॉपिंग", "Monocropping / मोनोक्रॉपिंग", "Intercropping / अंतरफसली खेती"], 
        answer: 2, 
        subject: "Agronomy"
    },
    { 
        id: 202, 
        questionEn: "A soil having pH less than 7.0 is called?", 
        questionHi: "7.0 से कम pH वाली मिट्टी को क्या कहा जाता है?", 
        options: ["Alkaline soil / क्षारीय मिट्टी", "Acidic soil / अम्लीय मिट्टी", "Saline soil / लवणीय मिट्टी", "Neutral soil / उदासीन मिट्टी"], 
        answer: 1, 
        subject: "Soil Science"
    },
    { 
        id: 203, 
        questionEn: "A soil having pH more than 7.0 is called?", 
        questionHi: "7.0 से अधिक pH वाली मिट्टी को क्या कहा जाता है?", 
        options: ["Acidic soil / अम्लीय मिट्टी", "Saline soil / लवणीय मिट्टी", "Alkaline soil / क्षारीय मिट्टी", "Sodic soil / सोडिस्क मिट्टी"], 
        answer: 2, 
        subject: "Soil Science"
    },
    { 
        id: 204, 
        questionEn: "Which soil is best suited for Cotton cultivation?", 
        questionHi: "कपास की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?", 
        options: ["Red soil / लाल मिट्टी", "Black soil / काली मिट्टी", "Alluvial soil / जलोढ़ मिट्टी", "Laterite soil / लैटेराइट मिट्टी"], 
        answer: 1, 
        subject: "Soil Science"
    },
    { 
        id: 205, 
        questionEn: "Which soil is most extensive in India?", 
        questionHi: "भारत में कौन सी मिट्टी सबसे अधिक विस्तृत (extensive) है?", 
        options: ["Alluvial soil / जलोढ़ मिट्टी", "Black soil / काली मिट्टी", "Red soil / लाल मिट्टी", "Laterite soil / लैटेराइट मिट्टी"], 
        answer: 0, 
        subject: "Soil Science"
    },
    { 
        id: 206, 
        questionEn: "A solution used to treat seeds to break dormancy is?", 
        questionHi: "बीजों की सुप्त अवस्था (dormancy) को तोड़ने के लिए किस घोल का उपयोग किया जाता है?", 
        options: ["NaCl / सोडियम क्लोराइड", "KNO3 (Potassium Nitrate) / पोटेशियम नाइट्रेट", "HCl / हाइड्रोक्लोरिक एसिड", "H2SO4 / सल्फ्यूरिक एसिड"], 
        answer: 1, 
        subject: "Seed Technology"
    },
    { 
        id: 207, 
        questionEn: "A sow which has given birth to piglets is called?", 
        questionHi: "एक सुअर जिसने पिगलेट्स को जन्म दिया है, उसे क्या कहा जाता है?", 
        options: ["Dam / डैम", "Gilt / गिल्ट", "Ewe / ईव", "Sow / सो"], 
        answer: 3, 
        subject: "Animal Husbandry"
    },
    { 
        id: 208, 
        questionEn: "A special type of prune used in grapes is?", 
        questionHi: "अंगूर में प्रयुक्त एक विशेष प्रकार की छंटाई (prune) क्या है?", 
        options: ["Heading back / हेडिंग बैक", "Back pruning / बैक प्रूनिंग", "Foundation pruning / फाउंडेशन प्रूनिंग", "Thinning / थिनिंग"], 
        answer: 2, 
        subject: "Horticulture"
    },
    { 
        id: 209, 
        questionEn: "A species of earthworm most suitable for vermicomposting is?", 
        questionHi: "वर्मीकम्पोस्टिंग के लिए सबसे उपयुक्त केंचुए की प्रजाति कौन सी है?", 
        options: ["Lumbricus terrestris / लुम्ब्रिकस टेरेस्ट्रिस", "Eisenia foetida / इसिनिया फोर्टिडा", "Pheretima posthuma / फेरिटिमा पोस्टुमा", "Eudrilus eugeniae / यूड्रिलस यूजेनिया"], 
        answer: 1, 
        subject: "Agronomy"
    },
    { 
        id: 210, 
        questionEn: "A structure used for storing grains in bulk is called?", 
        questionHi: "अनाज को थोक में जमा करने के लिए उपयोग की जाने वाली संरचना को क्या कहा जाता है?", 
        options: ["Barn / खलिहान", "Granary / अन्नागार", "Silo / साइलो", "Warehouse / गोदाम"], 
        answer: 2, 
        subject: "Agricultural Engineering"
    },
    { 
        id: 211, 
        questionEn: "A substance that kills fungi is called?", 
        questionHi: "कवक (fungi) को मारने वाले पदार्थ को क्या कहा जाता है?", 
        options: ["Insecticide / कीटनाशक", "Fungicide / कवकनाशी", "Herbicide / शाकनाशी", "Nematicide / सूत्रकृमिनाशी"], 
        answer: 1, 
        subject: "Plant Pathology"
    },
    { 
        id: 212, 
        questionEn: "A substance that kills weeds is called?", 
        questionHi: "खरपतवार (weeds) को मारने वाले पदार्थ को क्या कहा जाता है?", 
        options: ["Herbicide / शाकनाशी", "Insecticide / कीटनाशक", "Fungicide / कवकनाशी", "Rodenticide / कृंतकनाशी"], 
        answer: 0, 
        subject: "Agronomy"
    },
    { 
        id: 213, 
        questionEn: "A system of planting where 15% more plants can be accommodated than square system?", 
        questionHi: "रोपण की वह प्रणाली जहां वर्गाकार प्रणाली की तुलना में 15% अधिक पौधे लगाए जा सकते हैं?", 
        options: ["Rectangular system / आयताकार प्रणाली", "Hexagonal system / षट्कोणीय प्रणाली", "Quincunx system / क्विनकन्क्स प्रणाली", "Contour system / कंटूर प्रणाली"], 
        answer: 1, 
        subject: "Horticulture"
    },
    { 
        id: 214, 
        questionEn: "A technique used to produce virus-free plants is?", 
        questionHi: "वायरस मुक्त पौधे तैयार करने के लिए किस तकनीक का उपयोग किया जाता है?", 
        options: ["Anther culture / परागकोष संवर्धन", "Embryo culture / भ्रूण संवर्धन", "Protoplast culture / प्रोटोप्लास्ट संवर्धन", "Meristem culture / विभज्योतक संवर्धन"], 
        answer: 3, 
        subject: "Biotechnology"
    },
    { 
        id: 215, 
        questionEn: "A term used for the first milk produced by a cow after calving?", 
        questionHi: "ब्याने के बाद गाय द्वारा उत्पादित पहले दूध के लिए किस शब्द का प्रयोग किया जाता है?", 
        options: ["Milk / दूध", "Colostrum / खीस (Colostrum)", "Curd / दही", "Whey / मठा"], 
        answer: 1, 
        subject: "Animal Husbandry"
    },
    { 
        id: 216, 
        questionEn: "A tool used for measuring wind speed is?", 
        questionHi: "हवा की गति मापने के लिए किस यंत्र का उपयोग किया जाता है?", 
        options: ["Barometer / बैरोमीटर", "Hygrometer / हाइग्रोमीटर", "Anemometer / एनीमोमीटर", "Thermometer / थर्मामीटर"], 
        answer: 2, 
        subject: "Meteorology"
    },
    { 
        id: 217, 
        questionEn: "A tool used to measure atmospheric pressure is?", 
        questionHi: "वायुमंडलीय दाब मापने के लिए किस यंत्र का उपयोग किया जाता है?", 
        options: ["Anemometer / एनीमोमीटर", "Barometer / बैरोमीटर", "Hygrometer / हाइग्रोमीटर", "Lysimeter / लाइसीमीटर"], 
        answer: 1, 
        subject: "Meteorology"
    },
    { 
        id: 218, 
        questionEn: "A tool used to measure relative humidity is?", 
        questionHi: "सापेक्ष आर्द्रता (relative humidity) मापने के लिए किस यंत्र का उपयोग किया जाता है?", 
        options: ["Hygrometer / हाइग्रोमीटर (Psychrometer)", "Barometer / बैरोमीटर", "Anemometer / एनीमोमीटर", "Rain gauge / वर्षा मापी"], 
        answer: 0, 
        subject: "Meteorology"
    },
    { 
        id: 219, 
        questionEn: "A type of germination where cotyledons come above the soil surface?", 
        questionHi: "अंकुरण का एक प्रकार जहाँ बीजपत्र (cotyledons) मिट्टी की सतह से ऊपर आते हैं?", 
        options: ["Hypogeal / अधोभूमिक (Hypogeal)", "Epigeal / उपरिभूमिक (Epigeal)", "Vivipary / विविपेरी", "Ovipary / ओविपेरी"], 
        answer: 1, 
        subject: "Botany"
    },
    { 
        id: 220, 
        questionEn: "A type of germination where cotyledons remain below the soil surface?", 
        questionHi: "अंकुरण का एक प्रकार जहाँ बीजपत्र (cotyledons) मिट्टी की सतह के नीचे रहते हैं?", 
        options: ["Hypogeal / अधोभूमिक (Hypogeal)", "Epigeal / उपरिभूमिक (Epigeal)", "Vivipary / विविपेरी", "Ovipary / ओविपेरी"], 
        answer: 0, 
        subject: "Botany"
    },
    { 
        id: 221, 
        questionEn: "Absence of seed formation is known as?", 
        questionHi: "बीज निर्माण की अनुपस्थिति को क्या कहा जाता है?", 
        options: ["Parthenocarpy / अनिषेकफलन", "Polyembryony / बहुभ्रूणता", "Apomixis / असंगजनन", "Sterility / बंध्यता"], 
        answer: 2, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 222, 
        questionEn: "Acid rain is caused by emission of?", 
        questionHi: "अम्लीय वर्षा (Acid rain) किसके उत्सर्जन के कारण होती है?", 
        options: ["CO2 and CO / CO2 और CO", "SO2 and NO2 / SO2 और NO2", "CH4 and CFC / CH4 और CFC", "O3 and PAN / O3 और PAN"], 
        answer: 1, 
        subject: "Environmental Science"
    },
    { 
        id: 223, 
        questionEn: "Active ingredient in Neem based pesticides is?", 
        questionHi: "नीम आधारित कीटनाशकों में सक्रिय तत्व (active ingredient) कौन सा है?", 
        options: ["Nicotine / निकोटीन", "Rotenone / रोटेनोन", "Pyrethrum / पाइरेथ्रम", "Azadirachtin / एजाडिरेक्टिन"], 
        answer: 3, 
        subject: "Entomology"
    },
    { 
        id: 224, 
        questionEn: "Agricultural Census is conducted every?", 
        questionHi: "कृषि जनगणना (Agricultural Census) कितने वर्षों में आयोजित की जाती है?", 
        options: ["10 Years / 10 वर्ष", "5 Years / 5 वर्ष", "2 Years / 2 वर्ष", "1 Year / 1 वर्ष"], 
        answer: 1, 
        subject: "Economics"
    },
    { 
        id: 225, 
        questionEn: "Livestock Census is conducted every?", 
        questionHi: "पशुधन जनगणना (Livestock Census) कितने वर्षों में आयोजित की जाती है?", 
        options: ["10 Years / 10 वर्ष", "5 Years / 5 वर्ष", "7 Years / 7 वर्ष", "3 Years / 3 वर्ष"], 
        answer: 1, 
        subject: "Animal Husbandry"
    },
    { 
        id: 226, 
        questionEn: "Agriculture is derived from which language words?", 
        questionHi: "Agriculture (कृषि) किस भाषा के शब्दों से बना है?", 
        options: ["Greek / ग्रीक", "Latin / लैटिन", "French / फ्रेंच", "Arabic / अरबी"], 
        answer: 1, 
        subject: "General Agriculture"
    },
    { 
        id: 227, 
        questionEn: "Agronomy is derived from which language words?", 
        questionHi: "Agronomy (सस्य विज्ञान) किस भाषा के शब्दों से बना है?", 
        options: ["Latin / लैटिन", "French / फ्रेंच", "Greek / ग्रीक", "Sanskrit / संस्कृत"], 
        answer: 2, 
        subject: "Agronomy"
    },
    { 
        id: 228, 
        questionEn: "Horticulture is derived from which language words?", 
        questionHi: "Horticulture (बागवानी) किस भाषा के शब्दों से बना है?", 
        options: ["Latin / लैटिन", "Greek / ग्रीक", "English / अंग्रेजी", "Spanish / स्पेनिश"], 
        answer: 0, 
        subject: "Horticulture"
    },
    { 
        id: 229, 
        questionEn: "Pomology is derived from which language?", 
        questionHi: "Pomology (फल विज्ञान) किस भाषा से लिया गया है?", 
        options: ["Latin / लैटिन", "Latin-Greek / लैटिन-ग्रीक", "Greek / ग्रीक", "French / फ्रेंच"], 
        answer: 1, 
        subject: "Horticulture"
    },
    { 
        id: 230, 
        questionEn: "Agmark act was passed in the year?", 
        questionHi: "एगमार्क (Agmark) अधिनियम किस वर्ष पारित किया गया था?", 
        options: ["1955", "1937", "1965", "1986"], 
        answer: 1, 
        subject: "Economics"
    },
    { 
        id: 231, 
        questionEn: "AICRP on Maize was started in which year?", 
        questionHi: "मक्का पर AICRP किस वर्ष शुरू किया गया था?", 
        options: ["1960", "1957", "1970", "1965"], 
        answer: 1, 
        subject: "Agronomy"
    },
    { 
        id: 232, 
        questionEn: "What is the First AICRP started in India?", 
        questionHi: "भारत में शुरू किया गया पहला AICRP कौन सा है?", 
        options: ["Maize / मक्का", "Rice / चावल", "Wheat / गेहूं", "Cotton / कपास"], 
        answer: 0, 
        subject: "Agronomy"
    },
    { 
        id: 233, 
        questionEn: "Allelopathy term was coined by?", 
        questionHi: "एlelopathy (एलेलोपैथी) शब्द किसके द्वारा गढ़ा गया था?", 
        options: ["Odum / ओडम", "Molisch / मोलिश", "Tansley / टैंसले", "Haberlandt / हैबरलैंड"], 
        answer: 1, 
        subject: "Botany"
    },
    { 
        id: 234, 
        questionEn: "Amrapali is a cross between?", 
        questionHi: "आम्रपाली (Amrapali) किसके बीच का संकर है?", 
        options: ["Neelum x Dashehari / नीलम x दशहरी", "Dashehari x Neelum / दशहरी x नीलम", "Ratna x Alphonso / रत्ना x अल्लफांसो", "Neelum x Alphonso / नीलम x अल्लफांसो"], 
        answer: 1, 
        subject: "Horticulture"
    },
    { 
        id: 235, 
        questionEn: "Mallika is a cross between?", 
        questionHi: "मल्लिका (Mallika) किसके बीच का संकर है?", 
        options: ["Neelum x Dashehari / नीलम x दशहरी", "Dashehari x Neelum / दशहरी x नीलम", "Ratna x Alphonso / रत्ना x अल्लफांसो", "Amrapali x Janardhan Pasand / आम्रपाली x जनार्दन पसंद"], 
        answer: 0, 
        subject: "Horticulture"
    },
    { 
        id: 236, 
        questionEn: "Ratna is a cross between?", 
        questionHi: "रत्ना (Ratna) किसके बीच का संकर है?", 
        options: ["Neelum x Alphonso / नीलम x अल्लफांसो", "Dashehari x Neelum / दशहरी x नीलम", "Neelum x Dashehari / नीलम x दशहरी", "Alphonso x Neelum / अल्लफांसो x नीलम"], 
        answer: 2, 
        subject: "Horticulture"
    },
    { 
        id: 237, 
        questionEn: "Sindhu is a cross between?", 
        questionHi: "सिंधु (Sindhu) किसके बीच का संकर है?", 
        options: ["Ratna x Alphonso / रत्ना x अल्लफांसो", "Neelum x Alphonso / नीलम x अल्लफांसो", "Dashehari x Neelum / दशहरी x नीलम", "Alphonso x Ratna / अल्लफांसो x रत्ना"], 
        answer: 0, 
        subject: "Horticulture"
    },
    { 
        id: 238, 
        questionEn: "An instrument used to measure depth of water table is?", 
        questionHi: "जल स्तर (water table) की गहराई मापने के लिए किस यंत्र का उपयोग किया जाता है?", 
        options: ["Lysimeter / लाइसीमीटर", "Tensiometer / टेन्सियोमीटर", "Piezometer / पीज़ोमीटर", "Pyranometer / पाइरानोमीटर"], 
        answer: 2, 
        subject: "Agricultural Engineering"
    },
    { 
        id: 239, 
        questionEn: "An instrument used to measure evapotranspiration is?", 
        questionHi: "वाष्पोत्सर्जन (evapotranspiration) मापने के लिए किस यंत्र का उपयोग किया जाता है?", 
        options: ["Piezometer / पीज़ोमीटर", "Lysimeter / लाइसीमीटर", "Lactometer / लैक्टोमीटर", "Manometer / मैनोमीटर"], 
        answer: 1, 
        subject: "Meteorology"
    },
    { 
        id: 240, 
        questionEn: "An instrument used to measure solar radiation is?", 
        questionHi: "सौर विकिरण (solar radiation) मापने के लिए किस यंत्र का उपयोग किया जाता है?", 
        options: ["Pyrheliometer / पाइरिलियोमीटर", "Pyranometer / पाइरानोमीटर", "Photometer / फोटोमीटर", "Luxmeter / लक्समीटर"], 
        answer: 1, 
        subject: "Meteorology"
    },
    { 
        id: 241, 
        questionEn: "An instrument used to measure direct solar radiation is?", 
        questionHi: "प्रत्यक्ष सौर विकिरण (direct solar radiation) मापने के लिए किस यंत्र का उपयोग किया जाता है?", 
        options: ["Pyranometer / पाइरानोमीटर", "Sunshine recorder / सनशाइन रिकॉर्डर", "Radiometer / रेडियोमीटर", "Pyrheliometer / पाइरिलियोमीटर"], 
        answer: 3, 
        subject: "Meteorology"
    },
    { 
        id: 242, 
        questionEn: "Analysis of variance (ANOVA) was developed by?", 
        questionHi: "विचरण का विश्लेषण (ANOVA) किसके द्वारा विकसित किया गया था?", 
        options: ["Pearson / पियर्सन", "Galton / गैल्टन", "R.A. Fisher / आर.ए. फिशर", "Spearman / स्पीयरमैन"], 
        answer: 2, 
        subject: "Statistics"
    },
    { 
        id: 243, 
        questionEn: "Angular leaf spot of cotton is caused by?", 
        questionHi: "कपास का कोणीय पत्ती धब्बा (Angular leaf spot) किसके कारण होता है?", 
        options: ["Fungi / कवक", "Bacteria / जीवाणु (Xanthomonas)", "Virus / विषाणु", "Nematode / सूत्रकृमि"], 
        answer: 1, 
        subject: "Plant Pathology"
    },
    { 
        id: 244, 
        questionEn: "Anthrax disease in cattle is caused by?", 
        questionHi: "मवेशियों में एंथ्रेक्स (Anthrax) रोग किसके कारण होता है?", 
        options: ["Virus / विषाणु", "Fungi / कवक", "Bacteria / जीवाणु (Bacillus anthracis)", "Protozoa / प्रोटोजोआ"], 
        answer: 2, 
        subject: "Animal Husbandry"
    },
    { 
        id: 245, 
        questionEn: "Aphids are vectors for?", 
        questionHi: "एफिड्स (Aphids) किसके वाहक हैं?", 
        options: ["Bacterial diseases / जीवाणु जनित रोग", "Fungal diseases / कवक जनित रोग", "Viral diseases / विषाणु जनित रोग", "Nematode diseases / सूत्रकृमि रोग"], 
        answer: 2, 
        subject: "Plant Pathology"
    },
    { 
        id: 246, 
        questionEn: "Apis mellifera is the scientific name of?", 
        questionHi: " एपिस मेलिफेरा (Apis mellifera) किसका वैज्ञानिक नाम है?", 
        options: ["Indian Bee / भारतीय मधुमक्खी", "European Bee / यूरोपीय मधुमक्खी", "Rock Bee / रॉक बी", "Little Bee / छोटी मधुमक्खी"], 
        answer: 1, 
        subject: "Entomology"
    },
    { 
        id: 247, 
        questionEn: "Apple bowl of India is?", 
        questionHi: "भारत का सेब का कटोरा (Apple bowl) किसे कहा जाता है?", 
        options: ["Jammu & Kashmir / जम्मू और कश्मीर", "Uttarakhand / उत्तराखंड", "Himachal Pradesh / हिमाचल प्रदेश", "Arunachal Pradesh / अरुणाचल प्रदेश"], 
        answer: 2, 
        subject: "Horticulture"
    },
    { 
        id: 248, 
        questionEn: "Application of fertilizers through irrigation water is called?", 
        questionHi: "सिंचाई जल के माध्यम से उर्वरकों का प्रयोग क्या कहलाता है?", 
        options: ["Herbigation / हर्बिगेशन", "Fertigation / फर्टिगेशन", "Chemigation / केमिगेशन", "Foliar spray / पर्णीय छिड़काव"], 
        answer: 1, 
        subject: "Agronomy"
    },
    { 
        id: 249, 
        questionEn: "Area under a crop in a particular season is called?", 
        questionHi: "किसी विशेष मौसम में फसल के अंतर्गत आने वाले क्षेत्र को क्या कहा जाता है?", 
        options: ["Yield / उपज", "Production / उत्पादन", "Acreage / रकबा (Acreage)", "Productivity / उत्पादकता"], 
        answer: 2, 
        subject: "Economics"
    },
    { 
        id: 250, 
        questionEn: "Arhar (Pigeon pea) is also known as?", 
        questionHi: "अरहर (Pigeon pea) को और किस नाम से जाना जाता है?", 
        options: ["Bengal gram / बंगाल चना", "Green gram / मूंग", "Red gram / लाल चना (Red gram)", "Black gram / उड़द"], 
        answer: 2, 
        subject: "Agronomy"
    },
    { 
        id: 251, 
        questionEn: "Artificial application of water to the soil is called?", 
        questionHi: "मिट्टी में पानी का कृत्रिम अनुप्रयोग क्या कहलाता है?", 
        options: ["Drainage / जल निकासी", "Irrigation / सिंचाई", "Rainfall / वर्षा", "Water harvesting / जल संचयन"], 
        answer: 1, 
        subject: "Agronomy"
    },
    { 
        id: 252, 
        questionEn: "Artificial insemination in cattle was first attempted in India at?", 
        questionHi: "भारत में मवेशियों में कृत्रिम गर्भाधान (Artificial insemination) का पहला प्रयास कहाँ किया गया था?", 
        options: ["IVRI, Izatnagar / आईवीआरआई, इज्जतनगर", "Dairy Farm, Mysore / डेयरी फार्म, मैसूर", "NDRI, Karnal / एनडीआरआई, करनाल", "IARI, New Delhi / आईएआरआई, नई दिल्ली"], 
        answer: 1, 
        subject: "Animal Husbandry"
    },
    { 
        id: 253, 
        questionEn: "Atmospheric layer nearest to the earth surface is?", 
        questionHi: "पृथ्वी की सतह के सबसे निकटतम वायुमंडलीय परत कौन सी है?", 
        options: ["Stratosphere / समताप मंडल", "Mesosphere / मध्यमंडल", "Troposphere / क्षोभमंडल", "Thermosphere / आयनमंडल"], 
        answer: 2, 
        subject: "Meteorology"
    },
    { 
        id: 254, 
        questionEn: "Atmospheric pressure at sea level is?", 
        questionHi: "समुद्र तल पर वायुमंडलीय दाब कितना होता है?", 
        options: ["1000 mb / 1000 मिलीबार", "950 mb / 950 मिलीबार", "1013.25 mb / 1013.25 मिलीबार", "1050 mb / 1050 मिलीबार"], 
        answer: 2, 
        subject: "Meteorology"
    },
    { 
        id: 255, 
        questionEn: "Average gestation period of Buffalo is?", 
        questionHi: "भैंस की औसत गर्भकाल अवधि (gestation period) कितनी होती है?", 
        options: ["280 days / 280 दिन", "150 days / 150 दिन", "310 days / 310 दिन", "114 days / 114 दिन"], 
        answer: 2, 
        subject: "Animal Husbandry"
    },
    { 
        id: 256, 
        questionEn: "Average gestation period of Cow is?", 
        questionHi: "गाय की औसत गर्भकाल अवधि कितनी होती है?", 
        options: ["310 days / 310 दिन", "150 days / 150 दिन", "114 days / 114 दिन", "280-285 days / 280-285 दिन"], 
        answer: 3, 
        subject: "Animal Husbandry"
    },
    { 
        id: 257, 
        questionEn: "Azolla is used as a biofertilizer in which crop?", 
        questionHi: "अज़ोला (Azolla) का उपयोग किस फसल में जैव उर्वरक के रूप में किया जाता है?", 
        options: ["Rice / चावल", "Wheat / गेहूं", "Maize / मक्का", "Sugarcane / गन्ना"], 
        answer: 0, 
        subject: "Agronomy"
    },
    { 
        id: 258, 
        questionEn: "Bajra is also known as?", 
        questionHi: "बाजरा (Bajra) को और किस नाम से जाना जाता है?", 
        options: ["Finger millet / रागी", "Pearl millet / पर्ल मिलेट", "Sorghum / ज्वार", "Maize / मक्का"], 
        answer: 1, 
        subject: "Agronomy"
    },
    { 
        id: 259, 
        questionEn: "Bakanae disease of rice is caused by?", 
        questionHi: "चावल का बकाने (Bakanae) रोग किसके कारण होता है?", 
        options: ["Bacteria / जीवाणु", "Fungi / कवक (Gibberella fujikuroi)", "Virus / विषाणु", "Nematode / सूत्रकृमि"], 
        answer: 1, 
        subject: "Plant Pathology"
    },
    { 
        id: 260, 
        questionEn: "Banana propagation is mainly done by?", 
        questionHi: "केले का प्रवर्धन (propagation) मुख्य रूप से किसके द्वारा किया जाता है?", 
        options: ["Sword suckers / स्वॉर्ड सकर्स", "Seeds / बीज", "Stem cuttings / तने की कटिंग", "Grafting / ग्राफ्टिंग"], 
        answer: 0, 
        subject: "Horticulture"
    },
    { 
        id: 261, 
        questionEn: "Banana is botanically a?", 
        questionHi: "केला वानस्पतिक रूप से क्या है?", 
        options: ["Drupe / ड्रूप", "Pome / पोम", "Berry / बेरी", "Nut / नट"], 
        answer: 2, 
        subject: "Horticulture"
    },
    { 
        id: 262, 
        questionEn: "Barley is generally used for preparation of?", 
        questionHi: "जौ (Barley) का उपयोग आमतौर पर क्या बनाने के लिए किया जाता है?", 
        options: ["Bread / ब्रेड", "Malt / माल्ट", "Oil / तेल", "Fiber / रेशा"], 
        answer: 1, 
        subject: "Food Science"
    },
    { 
        id: 263, 
        questionEn: "Basic unit of classification is?", 
        questionHi: "वर्गीकरण की मूल इकाई (Basic unit) क्या है?", 
        options: ["Species / प्रजाति", "Genus / जीनस", "Family / कुल", "Order / गण"], 
        answer: 0, 
        subject: "Biology"
    },
    { 
        id: 264, 
        questionEn: "Bench terracing is practiced on slopes having gradient?", 
        questionHi: "बेंच टेरेसिंग (Bench terracing) का अभ्यास किस ढलान प्रवणता पर किया जाता है?", 
        options: ["Less than 10% / 10% से कम", "16-33% / 16-33%", "More than 33% / 33% से अधिक", "2-5% / 2-5%"], 
        answer: 1, 
        subject: "Agricultural Engineering"
    },
    { 
        id: 265, 
        questionEn: "Bengal famine (1943) was caused by?", 
        questionHi: "बंगाल का अकाल (1943) किसके कारण हुआ था?", 
        options: ["Blast of rice / चावल का ब्लास्ट रोग", "Brown spot of rice / चावल का भूरा धब्बा रोग", "Bacterial blight / बैक्टीरियल ब्लाइट", "Tungro virus / टुंग्रो वायरस"], 
        answer: 1, 
        subject: "Plant Pathology"
    },
    { 
        id: 266, 
        questionEn: "Best method of irrigation for saline soil is?", 
        questionHi: "लवणीय मिट्टी (saline soil) के लिए सिंचाई की सर्वोत्तम विधि कौन सी है?", 
        options: ["Drip / ड्रिप", "Sprinkler / स्प्रिंकलर", "Furrow / कूंड", "Flooding / बाढ़ विधि"], 
        answer: 3, 
        subject: "Agronomy"
    },
    { 
        id: 267, 
        questionEn: "Best method of irrigation for undulating land is?", 
        questionHi: "उबड़-खाबड़ भूमि (undulating land) के लिए सिंचाई की सर्वोत्तम विधि कौन सी है?", 
        options: ["Sprinkler / स्प्रिंकलर", "Drip / ड्रिप", "Flooding / बाढ़ विधि", "Border strip / बॉर्डर स्ट्रिप"], 
        answer: 0, 
        subject: "Agricultural Engineering"
    },
    { 
        id: 268, 
        questionEn: "Best method of irrigation for water scarcity area is?", 
        questionHi: "जल की कमी वाले क्षेत्र के लिए सिंचाई की सर्वोत्तम विधि कौन सी है?", 
        options: ["Flooding / बाढ़ विधि", "Sprinkler / स्प्रिंकलर", "Drip / ड्रिप", "Furrow / कूंड"], 
        answer: 2, 
        subject: "Agronomy"
    },
    { 
        id: 269, 
        questionEn: "Bhoodan movement was started by?", 
        questionHi: "भूदान आंदोलन (Bhoodan movement) किसके द्वारा शुरू किया गया था?", 
        options: ["Mahatma Gandhi / महात्मा गांधी", "Jawaharlal Nehru / जवाहरलाल नेहरू", "Sardar Patel / सरदार पटेल", "Vinoba Bhave / विनोबा भावे"], 
        answer: 3, 
        subject: "Extension Education"
    },
    { 
        id: 270, 
        questionEn: "Biofertilizer used in Wheat crop is?", 
        questionHi: "गेहूं की फसल में प्रयुक्त जैव उर्वरक कौन सा है?", 
        options: ["Azotobacter / एज़ोटोबैक्टर", "Rhizobium / राइजोबियम", "Azospirillum / एज़ोस्पिरिलम", "BGA / बीजीए"], 
        answer: 0, 
        subject: "Soil Science"
    },
    { 
        id: 271, 
        questionEn: "Biological control of Parthenium hysterophorus is done by?", 
        questionHi: "पार्थेनियम हिस्टेरोफोरस (गाजर घास) का जैविक नियंत्रण किसके द्वारा किया जाता है?", 
        options: ["Zygogramma bicolorata / जाइगोग्रामा बाइकोलोराटा", "Neochetina / नियोचेटिना", "Cryptolaemus / क्रिप्टोलेमस", "Trichogramma / ट्राइकोग्रामा"], 
        answer: 0, 
        subject: "Entomology"
    },
    { 
        id: 272, 
        questionEn: "Black heart of potato is caused due to?", 
        questionHi: "आलू का ब्लैक हार्ट (Black heart) रोग किसके कारण होता है?", 
        options: ["Nitrogen deficiency / नाइट्रोजन की कमी", "Oxygen deficiency in storage / भंडारण में ऑक्सीजन की कमी", "High temperature / उच्च तापमान", "Boron deficiency / बोरॉन की कमी"], 
        answer: 1, 
        subject: "Plant Pathology"
    },
    { 
        id: 273, 
        questionEn: "Black soil is also known as?", 
        questionHi: "काली मिट्टी को और किस नाम से जाना जाता है?", 
        options: ["Khader soil / खादर मिट्टी", "Bhangar soil / भांगर मिट्टी", "Regur soil / रेगुर मिट्टी", "Laterite soil / लैटेराइट मिट्टी"], 
        answer: 2, 
        subject: "Soil Science"
    },
    { 
        id: 274, 
        questionEn: "Black soil is rich in?", 
        questionHi: "काली मिट्टी किसमें समृद्ध होती है?", 
        options: ["Kaolinite / काओलिनाइट", "Illite / illite", "Chlorite / क्लोराइट", "Montmorillonite / मोंटमोरिलोनाइट"], 
        answer: 3, 
        subject: "Soil Science"
    },
    { 
        id: 275, 
        questionEn: "Blossom end rot in tomato is caused by deficiency of?", 
        questionHi: "टमाटर में ब्लॉसम एंड रॉट (Blossom end rot) किसकी कमी से होता है?", 
        options: ["Calcium / कैल्शियम", "Boron / बोरॉन", "Potassium / पोटेशियम", "Zinc / जिंक"], 
        answer: 0, 
        subject: "Horticulture"
    },
    { 
        id: 276, 
        questionEn: "Blue color tag represents which class of seed?", 
        questionHi: "नीला रंग का टैग (Blue tag) किस वर्ग के बीज का प्रतिनिधित्व करता है?", 
        options: ["Foundation seed / आधार बीज", "Certified seed / प्रमाणित बीज", "Breeder seed / प्रजनक बीज", "Registered seed / पंजीकृत बीज"], 
        answer: 1, 
        subject: "Seed Technology"
    },
    { 
        id: 277, 
        questionEn: "Golden yellow tag represents which class of seed?", 
        questionHi: "सुनहरा पीला टैग (Golden yellow tag) किस वर्ग के बीज का प्रतिनिधित्व करता है?", 
        options: ["Breeder seed / प्रजनक बीज", "Foundation seed / आधार बीज", "Certified seed / प्रमाणित बीज", "Nucleus seed / न्यूक्लियस बीज"], 
        answer: 0, 
        subject: "Seed Technology"
    },
    { 
        id: 278, 
        questionEn: "White tag represents which class of seed?", 
        questionHi: "सफेद टैग (White tag) किस वर्ग के बीज का प्रतिनिधित्व करता है?", 
        options: ["Foundation seed / आधार बीज", "Certified seed / प्रमाणित बीज", "Breeder seed / प्रजनक बीज", "Truthful label seed / ट्रूथफुल लेबल बीज"], 
        answer: 0, 
        subject: "Seed Technology"
    },
    { 
        id: 279, 
        questionEn: "Board of Agriculture in India was established in?", 
        questionHi: "भारत में कृषि बोर्ड (Board of Agriculture) की स्थापना कब हुई थी?", 
        options: ["1929", "1905", "1947", "1950"], 
        answer: 1, 
        subject: "General Agriculture"
    },
    { 
        id: 280, 
        questionEn: "Bollgard I and II are associated with?", 
        questionHi: "बोलगार्ड I और II (Bollgard I and II) किससे संबंधित हैं?", 
        options: ["Brinjal / बैंगन", "Tomato / टमाटर", "Cotton / कपास", "Mustard / सरसों"], 
        answer: 2, 
        subject: "Biotechnology"
    },
    { 
        id: 281, 
        questionEn: "Botanical name of Bread wheat is?", 
        questionHi: "ब्रेड गेहूं (Bread wheat) का वानस्पतिक नाम क्या है?", 
        options: ["Triticum durum / ट्रिटिकम ड्यूरम", "Triticum dicoccum / ट्रिटिकम डाइकोकम", "Triticum monococcum / ट्रिटिकम मोनोकोकम", "Triticum aestivum / ट्रिटिकम एस्टिवम"], 
        answer: 3, 
        subject: "Agronomy"
    },
    { 
        id: 282, 
        questionEn: "Botanical name of Indian cow is?", 
        questionHi: "भारतीय गाय का वानस्पतिक नाम क्या है?", 
        options: ["Bos indicus / बॉस इंडिकस", "Bos taurus / बॉस टॉरस", "Bubalus bubalis / बुबालस बुबालिस", "Capra hircus / कैप्रा हिरकस"], 
        answer: 0, 
        subject: "Animal Husbandry"
    },
    { 
        id: 283, 
        questionEn: "Botanical name of Noble cane is?", 
        questionHi: "नोबल केन (Noble cane) का वानस्पतिक नाम क्या है?", 
        options: ["Saccharum spontaneum / सैकरम स्पोंटेनियम", "Saccharum officinarum / सैकरम ऑफिसिनरम", "Saccharum barberi / सैकरम बारबेरी", "Saccharum sinense / सैकरम साइनेंस"], 
        answer: 1, 
        subject: "Agronomy"
    },
    { 
        id: 284, 
        questionEn: "Button mushroom is scientifically known as?", 
        questionHi: "बटन मशरूम (Button mushroom) का वैज्ञानिक नाम क्या है?", 
        options: ["Pleurotus sajor-caju / प्लुरोटस साजोर-काजू", "Volvariella volvacea / वोल्वारीएला वोल्वैसिया", "Agaricus bisporus / एगारिकस बिस्पोरस", "Lentinula edodes / लेंटिनुला एडोड्स"], 
        answer: 2, 
        subject: "Horticulture"
    },
    { 
        id: 285, 
        questionEn: "C:N ratio of sawdust is?", 
        questionHi: "लकड़ी के बुरादे (sawdust) का C:N अनुपात क्या है?", 
        options: ["10:1 / 10:1", "20:1 / 20:1", "100:1 / 100:1", "400:1 / 400:1"], 
        answer: 3, 
        subject: "Soil Science"
    },
    { 
        id: 286, 
        questionEn: "C:N ratio of normal soil is?", 
        questionHi: "सामान्य मिट्टी का C:N अनुपात क्या है?", 
        options: ["10:1 to 12:1 / 10:1 से 12:1", "20:1 / 20:1", "5:1 / 5:1", "40:1 / 40:1"], 
        answer: 0, 
        subject: "Soil Science"
    },
    { 
        id: 287, 
        questionEn: "C:N ratio of FYM is?", 
        questionHi: "FYM (गोबर की खाद) का C:N अनुपात क्या है?", 
        options: ["10:1 / 10:1", "20-30:1 / 20-30:1", "100:1 / 100:1", "5:1 / 5:1"], 
        answer: 1, 
        subject: "Soil Science"
    },
    { 
        id: 288, 
        questionEn: "C4 plants have high photosynthetic rate due to?", 
        questionHi: "C4 पौधों में प्रकाश संश्लेषण की दर उच्च किस कारण होती है?", 
        options: ["Photorespiration / प्रकाश श्वसन", "High CO2 compensation point / उच्च CO2 मुआवजा बिंदु", "Kranz anatomy / क्रान्ज़ एनाटॉमी", "Large stomata / बड़े रंध्र"], 
        answer: 2, 
        subject: "Plant Physiology"
    },
    { 
        id: 289, 
        questionEn: "Calcium ammonium nitrate (CAN) is also known as?", 
        questionHi: "कैल्शियम अमोनियम नाइट्रेट (CAN) को और किस नाम से जाना जाता है?", 
        options: ["Suphala / सुफला", "Urea / यूरिया", "DAP / डीएपी", "Kisan Khad / किसान खाद"], 
        answer: 3, 
        subject: "Soil Science"
    },
    { 
        id: 290, 
        questionEn: "Canal irrigation is most extensive in which state?", 
        questionHi: "नहर सिंचाई (Canal irrigation) किस राज्य में सबसे व्यापक है?", 
        options: ["Uttar Pradesh / उत्तर प्रदेश", "Punjab / पंजाब", "Haryana / हरियाणा", "Andhra Pradesh / आंध्र प्रदेश"], 
        answer: 0, 
        subject: "Agronomy"
    },
    { 
        id: 291, 
        questionEn: "Capillarity is involved in?", 
        questionHi: "केशिकत्व (Capillarity) किसमें शामिल है?", 
        options: ["Drainage / जल निकासी", "Water retention in soil / मिट्टी में जल प्रतिधारण", "Evaporation / वाष्पीकरण", "Erosion / कटाव"], 
        answer: 1, 
        subject: "Soil Science"
    },
    { 
        id: 292, 
        questionEn: "Carbon content in organic matter is?", 
        questionHi: "कार्बनिक पदार्थों में कार्बन की मात्रा कितनी होती है?", 
        options: ["40% / 40%", "20% / 20%", "58% / 58%", "80% / 80%"], 
        answer: 2, 
        subject: "Soil Science"
    },
    { 
        id: 293, 
        questionEn: "Carrot is a rich source of?", 
        questionHi: "गाजर (Carrot) किसका समृद्ध स्रोत है?", 
        options: ["Vitamin C / विटामिन सी", "Vitamin B / विटामिन बी", "Protein / प्रोटीन", "Vitamin A / विटामिन ए"], 
        answer: 3, 
        subject: "Horticulture"
    },
    { 
        id: 294, 
        questionEn: "Causal organism of Late blight of potato is?", 
        questionHi: "आलू के पछेती झुलसा (Late blight) का कारक जीव क्या है?", 
        options: ["Phytophthora infestans / फाइटोफ्थोरा इन्फेस्टंस", "Alternaria solani / अल्टरनेरिया सोलानी", "Pythium / पाइथियम", "Fusarium / फ्यूजेरियम"], 
        answer: 0, 
        subject: "Plant Pathology"
    },
    { 
        id: 295, 
        questionEn: "Causal organism of Loose smut of wheat is?", 
        questionHi: "गेहूं के अनावृत कंडुआ (Loose smut) का कारक जीव क्या है?", 
        options: ["Puccinia graminis / पक्सिनिया ग्रैमिनिस", "Ustilago tritici / उस्टिलागो ट्रिटिसी", "Tilletia indica / टिलिया इंडिका", "Erysiphe graminis / एरीसिपे ग्रैमिनिस"], 
        answer: 1, 
        subject: "Plant Pathology"
    },
    { 
        id: 296, 
        questionEn: "Central Arid Zone Research Institute (CAZRI) is located at?", 
        questionHi: "केंद्रीय शुष्क क्षेत्र अनुसंधान संस्थान (CAZRI) कहाँ स्थित है?", 
        options: ["Bikaner / बीकानेर", "Jaipur / जयपुर", "Jodhpur / जोधपुर", "Hisar / हिसार"], 
        answer: 2, 
        subject: "General Agriculture"
    },
    { 
        id: 297, 
        questionEn: "Central Institute for Cotton Research (CICR) is located at?", 
        questionHi: "केंद्रीय कपास अनुसंधान संस्थान (CICR) कहाँ स्थित है?", 
        options: ["Mumbai / मुंबई", "Coimbatore / कोयंबटूर", "Surat / सूरत", "Nagpur / नागपुर"], 
        answer: 3, 
        subject: "General Agriculture"
    },
    { 
        id: 298, 
        questionEn: "Central Potato Research Institute (CPRI) is located at?", 
        questionHi: "केंद्रीय आलू अनुसंधान संस्थान (CPRI) कहाँ स्थित है?", 
        options: ["Shimla / शिमला", "Kufri / कुफरी", "Jalandhar / जालंधर", "Modipuram / मोदीपुरम"], 
        answer: 0, 
        subject: "General Agriculture"
    },
    { 
        id: 299, 
        questionEn: "Central Rice Research Institute (CRRI) is located at?", 
        questionHi: "केंद्रीय चावल अनुसंधान संस्थान (CRRI) कहाँ स्थित है?", 
        options: ["Hyderabad / हैदराबाद", "Cuttack / कटक", "New Delhi / नई दिल्ली", "Manila / मनीला"], 
        answer: 1, 
        subject: "General Agriculture"
    },
    { 
        id: 300, 
        questionEn: "Central Soil Salinity Research Institute (CSSRI) is located at?", 
        questionHi: "केंद्रीय मृदा लवणता अनुसंधान संस्थान (CSSRI) कहाँ स्थित है?", 
        options: ["Hisar / हिसार", "Ludhiana / लुधियाना", "Karnal / करनाल", "Pantnagar / पंतनगर"], 
        answer: 2, 
        subject: "General Agriculture"
    }
    ];

    window.quizData = window.quizData.concat(data);
})();

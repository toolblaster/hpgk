(function() {
    const data = [
    { 
        id: 1, 
        questionEn: "Which class of plant hormones promotes cell division in plant roots and shoots?", 
        questionHi: "पादप हार्मोन का कौन सा वर्ग पौधों की जड़ों और टहनियों में कोशिका विभाजन को बढ़ावा देता है?", 
        options: ["Auxins / ऑक्सिन", "Cytokinin / साइटोकिनिन", "Gibberellins / जिबरेलिन", "Ethylene / एथिलीन"], 
        answer: 1,
        subject: "Plant Physiology"
    },
    { 
        id: 2, 
        questionEn: "Which structure is used for hardening plants after they are taken out from in vitro media?", 
        questionHi: "इन विट्रो मीडिया से निकाले जाने के बाद पौधों को सख्त (hardening) करने के लिए किस संरचना का उपयोग किया जाता है?", 
        options: ["Greenhouse / ग्रीनहाउस", "Cold Frame / कोल्ड फ्रेम", "Mist chamber / मिस्ट चैंबर", "Shade net / शेड नेट"], 
        answer: 2,
        subject: "Biotechnology"
    },
    { 
        id: 3, 
        questionEn: "Which plant hormone is used to promote stem elongation and seed germination?", 
        questionHi: "तने के बढ़ने (stem elongation) और बीज के अंकुरण को बढ़ावा देने के लिए किस पादप हार्मोन का उपयोग किया जाता है?", 
        options: ["Gibberellin / जिबरेलिन", "Cytokinin / साइटोकिनिन", "Abscisic Acid / एब्सिसिक एसिड", "Ethylene / एथिलीन"], 
        answer: 0,
        subject: "Plant Physiology"
    },
    { 
        id: 4, 
        questionEn: "Rambutan is a popular ________?", 
        questionHi: "रामबूटन (Rambutan) एक लोकप्रिय ________ है?", 
        options: ["Root vegetable / जड़ वाली सब्जी", "Garden fruit tree / बगीचे का फलदार वृक्ष", "Leafy vegetable / पत्तेदार सब्जी", "Medicinal herb / औषधीय जड़ी बूटी"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 5, 
        questionEn: "A specialized garden for the cultivation and display of fern is called?", 
        questionHi: "फर्न (fern) की खेती और प्रदर्शन के लिए विशेष उद्यान को क्या कहा जाता है?", 
        options: ["Orchidarium / ऑर्किडेरियम", "Fernery / फर्नरी", "Rosary / रोजरी", "Arboretum / आर्बोरेटम"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 6, 
        questionEn: "Which of the following are examples of facultative apomicts?", 
        questionHi: "निम्नलिखित में से कौन वैकल्पिक एपोमिक्स (facultative apomicts) के उदाहरण हैं?", 
        options: ["Mango, Orange / आम, संतरा", "Wheat, Rice / गेहूं, चावल", "Maize, Sorghum / मक्का, ज्वार", "Pea, Gram / मटर, चना"], 
        answer: 0,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 7, 
        questionEn: "What is the agricultural practice of breeding and raising domestic rabbits called?", 
        questionHi: "घरेलू खरगोशों के प्रजनन और पालन की कृषि पद्धति को क्या कहा जाता है?", 
        options: ["Sericulture / रेशम उत्पादन", "Apiculture / मधुमक्खी पालन", "Cuniculture / खरगोश पालन (Cuniculture)", "Moriculture / शहतूत की खेती"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 8, 
        questionEn: "What is the ancient Chinese art of growing trees and plants kept small, similar to Bonsai?", 
        questionHi: "बोनसाई (Bonsai) के समान पेड़ों और पौधों को छोटा रखने की प्राचीन चीनी कला क्या है?", 
        options: ["Ikebana / इकेबाना", "Penjing / पेनजिंग", "Saikei / साइकेई", "Moribana / मोरिबाना"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 9, 
        questionEn: "What is the art of creating miniature landscapes called?", 
        questionHi: "लघु परिदृश्य (miniature landscapes) बनाने की कला को क्या कहा जाता है?", 
        options: ["Bonsai / बोनसाई", "Penjing / पेनजिंग", "Saikei / साइकेई", "Topiary / टोपिरी"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 10, 
        questionEn: "What is the art of growing trees or woody plants shaped as trees in containers?", 
        questionHi: "गमलों में पेड़ों या लकड़ी के पौधों को पेड़ों के आकार में उगाने की कला क्या है?", 
        options: ["Bonsai / बोनसाई", "Grafting / ग्राफ्टिंग", "Layering / लेयरिंग", "Pruning / प्रूनिंग"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 11, 
        questionEn: "Which is the most commonly used medium in plant tissue culture experiments?", 
        questionHi: "पादप ऊतक संवर्धन (plant tissue culture) प्रयोगों में सबसे अधिक उपयोग किया जाने वाला माध्यम कौन सा है?", 
        options: ["White's Medium / वाइट्स मीडियम", "Nitsch Medium / नित्सच मीडियम", "Murashige & Skoog (MS) / एमएस मीडियम", "Knop's solution / नोप्स सॉल्यूशन"], 
        answer: 2,
        subject: "Biotechnology"
    },
    { 
        id: 12, 
        questionEn: "What is the process of subjecting seeds to both cold and moist conditions to promote germination?", 
        questionHi: "अंकुरण को बढ़ावा देने के लिए बीजों को ठंड और नम दोनों स्थितियों के अधीन करने की प्रक्रिया क्या है?", 
        options: ["Scarification / खुरचना (Scarification)", "Stratification / स्तरीकरण (Stratification)", "Vernalization / वसंतीकरण (Vernalization)", "Fumigation / धूमन (Fumigation)"], 
        answer: 1,
        subject: "Seed Technology"
    },
    { 
        id: 13, 
        questionEn: "Which is the second most expensive spice after Saffron?", 
        questionHi: "केसर (Saffron) के बाद दूसरा सबसे महंगा मसाला कौन सा है?", 
        options: ["Cardamom / इलायची", "Clove / लौंग", "Vanilla / वेनिला", "Black Pepper / काली मिर्च"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 14, 
        questionEn: "Which country is the world's leading exporter of flowers?", 
        questionHi: "फूलों का विश्व का अग्रणी निर्यातक देश कौन सा है?", 
        options: ["India / भारत", "USA / यूएसए", "Netherlands / नीदरलैंड", "China / चीन"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 15, 
        questionEn: "What percentage of moisture is ideal for certified seeds of Rice?", 
        questionHi: "चावल के प्रमाणित बीजों (certified seeds) के लिए नमी का कितना प्रतिशत आदर्श है?", 
        options: ["8%", "10%", "13%", "16%"], 
        answer: 2,
        subject: "Seed Technology"
    },
    { 
        id: 16, 
        questionEn: "Slugs and Snails are common gastropod pests of which plants?", 
        questionHi: "स्लग और घोंघे (Slugs and Snails) किन पौधों के सामान्य गैस्ट्रोपोड कीट हैं?", 
        options: ["Wheat & Rice / गेहूं और चावल", "Orchid & Anthurium / आर्किड और एंथुरियम", "Cotton & Jute / कपास और जूट", "Tea & Coffee / चाय और कॉफी"], 
        answer: 1,
        subject: "Entomology"
    },
    { 
        id: 17, 
        questionEn: "Which cucurbits are used for the treatment of Diabetes?", 
        questionHi: "मधुमेह (Diabetes) के उपचार के लिए किन कुकुरबिट्स (cucurbits) का उपयोग किया जाता है?", 
        options: ["Pumpkin & Cucumber / कद्दू और खीरा", "Bitter gourd & Coccinia / करेला और कुंदरू", "Watermelon & Muskmelon / तरबूज और खरबूजा", "Bottle gourd & Ridge gourd / लौकी और तोरई"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 18, 
        questionEn: "Concentrates and Roughages are main components of _______?", 
        questionHi: "सांद्र (Concentrates) और रफेज (Roughages) किसके मुख्य घटक हैं?", 
        options: ["Fertilizers / उर्वरक", "Pesticides / कीटनाशक", "Cattle feed stuffs / पशु चारा", "Human diet / मानव आहार"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 19, 
        questionEn: "Which structures are used to harden plants in an agricultural nursery?", 
        questionHi: "कृषि नर्सरी में पौधों को सख्त (harden) करने के लिए किन संरचनाओं का उपयोग किया जाता है?", 
        options: ["Greenhouses & Mist chambers / ग्रीनहाउस और मिस्ट चैंबर", "Silos & Barns / साइलो और खलिहान", "Tractors & Tillers / ट्रैक्टर और टिलर", "Canals & Wells / नहरें और कुएं"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 20, 
        questionEn: "What is the optimum spacing (line to line) for wheat?", 
        questionHi: "गेहूं के लिए इष्टतम दूरी (लाइन से लाइन) क्या है?", 
        options: ["15 cm", "20 cm", "22.5 cm", "30 cm"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 21, 
        questionEn: "What substances are used for artificial rain simulation?", 
        questionHi: "कृत्रिम वर्षा अनुकरण (artificial rain simulation) के लिए किन पदार्थों का उपयोग किया जाता है?", 
        options: ["Sodium Chloride & Water / सोडियम क्लोराइड और पानी", "Silver iodide & Dry ice / सिल्वर आयोडाइड और सूखी बर्फ", "Nitrogen & Oxygen / नाइट्रोजन और ऑक्सीजन", "Sulfur & Carbon / सल्फर और कार्बन"], 
        answer: 1,
        subject: "Meteorology"
    },
    { 
        id: 22, 
        questionEn: "Which insects are vectors of Yellow Vein Mosaic disease of Okra?", 
        questionHi: "भिंडी के पीत शिरा मोज़ेक रोग (Yellow Vein Mosaic disease) के वाहक (vectors) कौन से कीट हैं?", 
        options: ["Aphids & Thrips / एफिड्स और थ्रिप्स", "White fly & Leaf hopper / सफेद मक्खी और लीफ हॉपर", "Beetles & Borers / भृंग और छेदक", "Mites & Caterpillars / घुन और इल्ली"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 23, 
        questionEn: "Which two mechanisms control the exchange of gases between soil and atmosphere?", 
        questionHi: "मृदा और वायुमंडल के बीच गैसों के आदान-प्रदान को कौन सी दो क्रियाविधियाँ नियंत्रित करती हैं?", 
        options: ["Osmosis & Plasmolysis / ऑस्मोसिस और प्लास्मोलिसिस", "Mass flow & Diffusion / मास फ्लो और डिफ्यूजन", "Transpiration & Evaporation / वाष्पोत्सर्जन और वाष्पीकरण", "Absorption & Adsorption / अवशोषण और सोखना"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 24, 
        questionEn: "Which of the following vegetables are of Indian origin?", 
        questionHi: "निम्नलिखित में से कौन सी सब्जियां भारतीय मूल की हैं?", 
        options: ["Potato & Tomato / आलू और टमाटर", "Brinjal & Snake gourd / बैंगन और चिचिंडा", "Cabbage & Cauliflower / पत्तागोभी और फूलगोभी", "Chili & Capsicum / मिर्च और शिमला मिर्च"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 25, 
        questionEn: "What does (A x B) x (C x D) represent in breeding?", 
        questionHi: "प्रजनन (breeding) में (A x B) x (C x D) क्या दर्शाता है?", 
        options: ["Single cross hybrid / सिंगल क्रॉस हाइब्रिड", "Double cross hybrid / डबल क्रॉस हाइब्रिड", "Top cross / टॉप क्रॉस", "Back cross / बैक क्रॉस"], 
        answer: 1,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 26, 
        questionEn: "In India, the Seeds Act was enacted by the parliament in which year?", 
        questionHi: "भारत में, संसद द्वारा बीज अधिनियम (Seeds Act) किस वर्ष अधिनियमित किया गया था?", 
        options: ["1963", "1966", "1969", "1972"], 
        answer: 1,
        subject: "Seed Technology"
    },
    { 
        id: 27, 
        questionEn: "What is the most dangerous disease of potato?", 
        questionHi: "आलू का सबसे खतरनाक रोग कौन सा है?", 
        options: ["Early blight / अगेती झुलसा", "Late blight / पछेती झुलसा", "Leaf curl / लीफ कर्ल", "Wart disease / वार्ट रोग"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 28, 
        questionEn: "When was the National Seed Corporation (NSC) registered?", 
        questionHi: "राष्ट्रीय बीज निगम (NSC) कब पंजीकृत किया गया था?", 
        options: ["1960", "1963", "1966", "1970"], 
        answer: 1,
        subject: "Seed Technology"
    },
    { 
        id: 29, 
        questionEn: "World Food Day is observed on?", 
        questionHi: "विश्व खाद्य दिवस (World Food Day) कब मनाया जाता है?", 
        options: ["5th June / 5 जून", "16th October / 16 अक्टूबर", "1st December / 1 दिसंबर", "23rd December / 23 दिसंबर"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 30, 
        questionEn: "1 bale of cotton is equal to?", 
        questionHi: "कपास की 1 गांठ (bale) किसके बराबर होती है?", 
        options: ["160 kg / 160 किग्रा", "170 kg / 170 किग्रा", "180 kg / 180 किग्रा", "190 kg / 190 किग्रा"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 31, 
        questionEn: "Who discovered the Nucleus?", 
        questionHi: "केंद्रक (Nucleus) की खोज किसने की थी?", 
        options: ["Robert Hooke", "Robert Brown", "Anton van Leeuwenhoek", "Schleiden"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 32, 
        questionEn: "'Pattambi local' is a variety of?", 
        questionHi: "'पट्टाम्बी लोकल' (Pattambi local) किसकी एक किस्म है?", 
        options: ["Green gram / मूंग", "Black gram / उड़द", "Horse gram / कुलथी", "Red gram / अरहर"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 33, 
        questionEn: "'Preethi' is a variety of?", 
        questionHi: "'प्रीति' (Preethi) किसकी एक किस्म है?", 
        options: ["Cucumber / खीरा", "Bitter gourd / करेला", "Ridge gourd / तोरई", "Bottle gourd / लौकी"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 34, 
        questionEn: "Half of the interquartile range is known as?", 
        questionHi: "इंटर-क्वार्टाइल रेंज (interquartile range) का आधा क्या कहलाता है?", 
        options: ["Standard deviation / मानक विचलन", "Mean deviation / माध्य विचलन", "Quartile deviation / चतुर्थक विचलन", "Variance / विचरण"], 
        answer: 2,
        subject: "Statistics"
    },
    { 
        id: 35, 
        questionEn: "Which was the 1st Hybrid variety of Pearl millet?", 
        questionHi: "बाजरा (Pearl millet) की पहली संकर किस्म (Hybrid variety) कौन सी थी?", 
        options: ["HB-1", "BJ-104", "HB-3", "GHB-558"], 
        answer: 0,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 36, 
        questionEn: "When were 14 commercial banks nationalized in India?", 
        questionHi: "भारत में 14 वाणिज्यिक बैंकों का राष्ट्रीयकरण कब किया गया था?", 
        options: ["19th July, 1965", "19th July, 1969", "2nd October, 1975", "15th August, 1980"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 37, 
        questionEn: "Which was the 3rd oldest bank in India, established in 1806?", 
        questionHi: "भारत का तीसरा सबसे पुराना बैंक कौन सा था, जिसकी स्थापना 1806 में हुई थी?", 
        options: ["Bank of Calcutta", "Bank of Bombay", "Bank of Madras", "Punjab National Bank"], 
        answer: 0,
        subject: "Economics"
    },
    { 
        id: 38, 
        questionEn: "Which was the first enzyme discovered by yeast?", 
        questionHi: "खमीर (yeast) द्वारा खोजा गया पहला एंजाइम कौन सा था?", 
        options: ["Amylase / एमाइलेज", "Zymase / जाइमेज", "Lipase / लाइपेज", "Pepsin / पेप्सिन"], 
        answer: 1,
        subject: "Biochemistry"
    },
    { 
        id: 39, 
        questionEn: "Which is the 1st Hybrid variety of Sorghum?", 
        questionHi: "ज्वार (Sorghum) की पहली संकर किस्म कौन सी है?", 
        options: ["CSH-1", "CSH-9", "CSH-14", "CSH-16"], 
        answer: 0,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 40, 
        questionEn: "What was the 1st Intergeneric hybrid?", 
        questionHi: "पहला इंटरजेनेरिक हाइब्रिड (Intergeneric hybrid) कौन सा था?", 
        options: ["Triticale", "Pomato", "Raphino brassica", "Tangelo"], 
        answer: 2,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 41, 
        questionEn: "2, 4-D belongs to which chemical group?", 
        questionHi: "2, 4-D किस रासायनिक समूह से संबंधित है?", 
        options: ["Organophosphates", "Carbamates", "Chloro phenoxy compound", "Triazines"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 42, 
        questionEn: "2,4-D, Simazine, Atrazine and Fluchloralin belong to which selectivity group?", 
        questionHi: "2,4-D, सिमाज़िन, एट्राज़िन और फ्लूक्लोरालिन किस चयनात्मकता समूह (selectivity group) से संबंधित हैं?", 
        options: ["Non-selective herbicides / गैर-चयनात्मक शाकनाशी", "Selective herbicides / चयनात्मक शाकनाशी", "Contact herbicides / संपर्क शाकनाशी", "Soil sterilants / मृदा रोगाणुनाशक"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 43, 
        questionEn: "2,4-D controls only which type of weeds?", 
        questionHi: "2,4-D केवल किस प्रकार के खरपतवारों (weeds) को नियंत्रित करता है?", 
        options: ["Grassy weeds / घास वाले खरपतवार", "Broadleaf weeds / चौड़ी पत्ती वाले खरपतवार", "Sedges / सेज", "Aquatic weeds / जलीय खरपतवार"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 44, 
        questionEn: "Fungicides like PMA & Atrazine at low concentration act as which type of anti-transpirant?", 
        questionHi: "कम सांद्रता पर PMA और एट्राज़िन जैसे कवकनाशी किस प्रकार के वाष्पोत्सर्जन-रोधी (anti-transpirant) के रूप में कार्य करते हैं?", 
        options: ["Film forming / फिल्म बनाने वाले", "Stomatal closing / रंध्र बंद करने वाले", "Reflective / परावर्तक", "Growth retardant / वृद्धि अवरोधक"], 
        answer: 1,
        subject: "Plant Physiology"
    },
    { 
        id: 45, 
        questionEn: "-40°C is equal to which temperature in Fahrenheit?", 
        questionHi: "-40°C फारेनहाइट में किस तापमान के बराबर है?", 
        options: ["0°F", "32°F", "-40°F", "-10°F"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 46, 
        questionEn: "70s type ribosome is found in?", 
        questionHi: "70s प्रकार का राइबोसोम (ribosome) किसमें पाया जाता है?", 
        options: ["Nucleus & Cytoplasm / केंद्रक और साइटोप्लाज्म", "Mitochondria & Chloroplast / माइटोकॉन्ड्रिया और क्लोरोप्लास्ट", "Golgi body & ER / गॉल्जी बॉडी और ईआर", "Lysosome & Vacuole / लाइसोसोम और रिक्तिका"], 
        answer: 1,
        subject: "Biology"
    },
    { 
        id: 47, 
        questionEn: "75% of rainfall is received by which monsoon?", 
        questionHi: "75% वर्षा किस मानसून से प्राप्त होती है?", 
        options: ["North-East Monsoon / उत्तर-पूर्वी मानसून", "South-West Monsoon / दक्षिण-पश्चिमी मानसून", "Western Disturbances / पश्चिमी विक्षोभ", "Cyclonic Rains / चक्रवाती वर्षा"], 
        answer: 1,
        subject: "Meteorology"
    },
    { 
        id: 48, 
        questionEn: "80 percent of phosphorus in bajra grains is stored in the form of?", 
        questionHi: "बाजरे के दानों में 80 प्रतिशत फास्फोरस किस रूप में जमा होता है?", 
        options: ["Phosphate / फॉस्फेट", "Phospholipid / फॉस्फोलिपिड", "Phytate / फाइटेट", "Phosphoprotein / फॉस्फोप्रोटीन"], 
        answer: 2,
        subject: "Biochemistry"
    },
    { 
        id: 49, 
        questionEn: "A + B horizon of soil is called?", 
        questionHi: "मिट्टी के A + B क्षितिज (horizon) को क्या कहा जाता है?", 
        options: ["Regolith / रेगोलिथ", "Solum / सोलम्", "Bedrock / बेडरॉक", "Subsoil / अवमृदा"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 50, 
        questionEn: "Which bacterium is commonly used in genetic engineering?", 
        questionHi: "आनुवंशिक इंजीनियरिंग (genetic engineering) में आमतौर पर किस जीवाणु का उपयोग किया जाता है?", 
        options: ["Rhizobium / राइजोबियम", "Azotobacter / एज़ोटोबैक्टर", "Agrobacterium tumefaciens / एग्रोबैक्टीरियम", "Lactobacillus / लैक्टोबैसिलस"], 
        answer: 2,
        subject: "Biotechnology"
    },
    { 
        id: 51, 
        questionEn: "A belt of trees or shrubs maintained for the purpose of shelter from wind, sun, and snow is called?", 
        questionHi: "हवा, धूप और बर्फ से आश्रय (shelter) के उद्देश्य से बनाए गए पेड़ों या झाड़ियों की एक पट्टी को क्या कहा जाता है?", 
        options: ["Green belt / ग्रीन बेल्ट", "Shelterbelts / शेल्टरबेल्ट", "Buffer zone / बफर जोन", "Alley cropping / गली फसल"], 
        answer: 1,
        subject: "Forestry"
    },
    { 
        id: 52, 
        questionEn: "What is a biochemical process or reaction taking place in a test tube (in lab) called?", 
        questionHi: "टेस्ट ट्यूब (प्रयोगशाला में) में होने वाली जैव रासायनिक प्रक्रिया या प्रतिक्रिया को क्या कहा जाता है?", 
        options: ["In vivo / इन विवो", "In vitro / इन विट्रो", "Ex situ / एक्स सीटू", "In situ / इन सीटू"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 53, 
        questionEn: "Which plant is a biological indicator of Molybdenum deficiency?", 
        questionHi: "कौन सा पौधा मोलिब्डेनम (Molybdenum) की कमी का जैविक संकेतक है?", 
        options: ["Tomato / टमाटर", "Cabbage / पत्तागोभी", "Potato / आलू", "Spinach / पालक"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 54, 
        questionEn: "Which branch of agricultural science deals with principles and practices of soil, water, and crop management?", 
        questionHi: "कृषि विज्ञान की कौन सी शाखा मिट्टी, पानी और फसल प्रबंधन के सिद्धांतों और प्रथाओं से संबंधित है?", 
        options: ["Horticulture / बागवानी", "Agronomy / सस्य विज्ञान (Agronomy)", "Entomology / कीट विज्ञान", "Pathology / पादप रोग विज्ञान"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 55, 
        questionEn: "A building with glass walls and roof for the cultivation of plants under controlled conditions is known as?", 
        questionHi: "नियंत्रित परिस्थितियों में पौधों की खेती के लिए कांच की दीवारों और छत वाली इमारत को क्या कहा जाता है?", 
        options: ["Warehouse / गोदाम", "Greenhouse / ग्रीनहाउस", "Cold storage / कोल्ड स्टोरेज", "Silo / साइलो"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 56, 
        questionEn: "Which cabbage disease is known to be more severe in acidic soils?", 
        questionHi: "गोभी का कौन सा रोग अम्लीय मिट्टी (acidic soils) में अधिक गंभीर माना जाता है?", 
        options: ["Leaf spot / लीफ स्पॉट", "Downy mildew / डाउनी मिल्ड्यू", "Black rot / ब्लैक रॉट", "Powdery mildew / पाउडरी मिल्ड्यू"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 57, 
        questionEn: "What does a central feature of a garden provide?", 
        questionHi: "एक बगीचे की केंद्रीय विशेषता (central feature) क्या प्रदान करती है?", 
        options: ["Symmetry / समरूपता", "Focal Point / केंद्र बिंदु", "Shade / छाया", "Privacy / गोपनीयता"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 58, 
        questionEn: "A certain part of energy received from the sun is reflected back to space by the earth. This is known as?", 
        questionHi: "सूर्य से प्राप्त ऊर्जा का कुछ भाग पृथ्वी द्वारा वापस अंतरिक्ष में परावर्तित कर दिया जाता है। इसे किस रूप में जाना जाता है?", 
        options: ["Insolation / आतपन", "Albedo / एल्बिडो", "Radiation / विकिरण", "Convection / संवहन"], 
        answer: 1,
        subject: "Meteorology"
    },
    { 
        id: 59, 
        questionEn: "Which chemical is effective in controlling alternate bearing in mango?", 
        questionHi: "आम में एकांतर फलन (alternate bearing) को नियंत्रित करने में कौन सा रसायन प्रभावी है?", 
        options: ["NAA", "TIBA", "GA3", "Ethrel"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 60, 
        questionEn: "Which chemical is used for inducing abscission in plants?", 
        questionHi: "पौधों में विलगन (abscission) को प्रेरित करने के लिए किस रसायन का उपयोग किया जाता है?", 
        options: ["IAA", "ABA / एब्सिसिक एसिड", "Cytokinin", "Gibberellin"], 
        answer: 1,
        subject: "Plant Physiology"
    },
    { 
        id: 61, 
        questionEn: "Which chemical is effective in controlling alternate bearing in mango?", 
        questionHi: "आम में एकांतर फलन को नियंत्रित करने के लिए कौन सा रसायन प्रभावी है?", 
        options: ["NAA", "TIBA", "GA3", "Ethrel"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 62, 
        questionEn: "Which chemical induces abscission in plants?", 
        questionHi: "पौधों में विलगन (abscission) को प्रेरित करने वाला रसायन कौन सा है?", 
        options: ["ABA", "IAA", "NAA", "Cytokinin"], 
        answer: 0,
        subject: "Plant Physiology"
    },
    { 
        id: 63, 
        questionEn: "Which chemical induces parthenocarpy in fruits?", 
        questionHi: "फलों में पार्थिनोकार्पी (parthenocarpy) को प्रेरित करने वाला रसायन कौन सा है?", 
        options: ["2,4-D", "2,4,5-T", "IBA", "GA3"], 
        answer: 1,
        subject: "Plant Physiology"
    },
    { 
        id: 64, 
        questionEn: "Which chemical is used to test the viability of seeds?", 
        questionHi: "बीजों की जीवन क्षमता (viability) का परीक्षण करने के लिए किस रसायन का उपयोग किया जाता है?", 
        options: ["Tetrazolium chloride / टेट्राजोलियम क्लोराइड", "Potassium permanganate / पोटेशियम परमैंगनेट", "Sodium chloride / सोडियम क्लोराइड", "Methyl bromide / मिथाइल ब्रोमाइड"], 
        answer: 0,
        subject: "Seed Technology"
    },
    { 
        id: 65, 
        questionEn: "Which chemical has more herbicidal activity?", 
        questionHi: "किस रसायन में अधिक शाकनाशी (herbicidal) गतिविधि होती है?", 
        options: ["2,4-D", "MCPA", "NAA", "IAA"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 66, 
        questionEn: "What is a close-growing crop grown primarily to improve and protect the soil from erosion called?", 
        questionHi: "मृदा को कटाव से बचाने और सुधारने के लिए उगाई जाने वाली सघन फसल को क्या कहा जाता है?", 
        options: ["Cash Crop / नकदी फसल", "Cover Crop / आवरण फसल (Cover Crop)", "Trap Crop / फंदा फसल", "Catch Crop / कैच क्रॉप"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 67, 
        questionEn: "IRDP stands for?", 
        questionHi: "IRDP का पूर्ण रूप क्या है?", 
        options: ["Indian Rural Development Program", "Integrated Rural Development Program / एकीकृत ग्रामीण विकास कार्यक्रम", "International Rural Development Plan", "Intensive Rural Development Project"], 
        answer: 1,
        subject: "Extension Education"
    },
    { 
        id: 68, 
        questionEn: "A condition in which either pollen is absent or non-functional in flowering plants is called?", 
        questionHi: "फूल वाले पौधों में पराग अनुपस्थित या निष्क्रिय होने की स्थिति को क्या कहा जाता है?", 
        options: ["Self-incompatibility / स्व-अनुकूलता", "Male Sterility / नर बंध्यता", "Apomixis / असंगजनन", "Parthenocarpy / अनिषेकफलन"], 
        answer: 1,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 69, 
        questionEn: "The condition of the atmosphere at a given place at a given time is called?", 
        questionHi: "किसी दिए गए समय पर किसी दिए गए स्थान पर वायुमंडल की स्थिति को क्या कहा जाता है?", 
        options: ["Climate / जलवायु", "Weather / मौसम", "Season / ऋतु", "Meteorology / मौसम विज्ञान"], 
        answer: 1,
        subject: "Meteorology"
    },
    { 
        id: 70, 
        questionEn: "Which is a cool season flower crop?", 
        questionHi: "ठंडे मौसम की फूलों की फसल कौन सी है?", 
        options: ["Marigold / गेंदा", "Carnation / कार्नेशन", "Jasmine / चमेली", "Hibiscus / गुड़हल"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 71, 
        questionEn: "Which crop is propagated by root cutting?", 
        questionHi: "जड़ की कलम (root cutting) द्वारा किस फसल का प्रसार किया जाता है?", 
        options: ["Mango / आम", "Bread fruit / ब्रेड फ्रूट", "Banana / केला", "Papaya / पपीता"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 72, 
        questionEn: "Which crop is suitable for acid soil?", 
        questionHi: "अम्लीय मिट्टी (acid soil) के लिए कौन सी फसल उपयुक्त है?", 
        options: ["Cotton / कपास", "Rice / चावल", "Wheat / गेहूं", "Sugarcane / गन्ना"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 73, 
        questionEn: "Which crop can be successfully cultivated in Acid-saline soil?", 
        questionHi: "अम्लीय-लवणीय मिट्टी (Acid-saline soil) में किस फसल की सफलतापूर्वक खेती की जा सकती है?", 
        options: ["Paddy / धान", "Wheat / गेहूं", "Maize / मक्का", "Barley / जौ"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 74, 
        questionEn: "A crop grown for direct sale rather than for livestock feed is called?", 
        questionHi: "पशुधन चारे के बजाय सीधे बिक्री के लिए उगाई जाने वाली फसल को क्या कहा जाता है?", 
        options: ["Food Crop / खाद्य फसल", "Cash Crop / नकदी फसल", "Trap Crop / फंदा फसल", "Cover Crop / आवरण फसल"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 75, 
        questionEn: "A cropping system where the land is handed over to the succeeding crop before the harvest of the standing crop?", 
        questionHi: "एक फसल प्रणाली जहां खड़ी फसल की कटाई से पहले भूमि अगली फसल को सौंप दी जाती है?", 
        options: ["Mixed Cropping / मिश्रित खेती", "Relay Cropping / रिले क्रॉपिंग", "Intercropping / अंतरफसली खेती", "Ratooning / रटूनिंग"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 76, 
        questionEn: "Which cucurbit is used in confectionary?", 
        questionHi: "मिष्ठान (confectionary) में किस कुकुरबिट का उपयोग किया जाता है?", 
        options: ["Bitter Gourd / करेला", "Ash Gourd / पेठा (Ash Gourd)", "Bottle Gourd / लौकी", "Snake Gourd / चिचिंडा"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 77, 
        questionEn: "What is the shelling percentage of pea?", 
        questionHi: "मटर का शेलिंग प्रतिशत (shelling percentage) क्या है?", 
        options: ["35%", "49%", "60%", "75%"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 78, 
        questionEn: "A culture of isolated mature or immature embryos is called?", 
        questionHi: "पृथक परिपक्व या अपरिपक्व भ्रूणों के संवर्धन को क्या कहा जाता है?", 
        options: ["Tissue Culture / ऊतक संवर्धन", "Embryo Culture / भ्रूण संवर्धन", "Anther Culture / परागकोष संवर्धन", "Pollen Culture / पराग संवर्धन"], 
        answer: 1,
        subject: "Biotechnology"
    },
    { 
        id: 79, 
        questionEn: "A decision to continue full use of an innovation is called?", 
        questionHi: "किसी नवाचार (innovation) का पूर्ण उपयोग जारी रखने के निर्णय को क्या कहा जाता है?", 
        options: ["Trial / परीक्षण", "Adoption / अंगीकरण (Adoption)", "Evaluation / मूल्यांकन", "Interest / रुचि"], 
        answer: 1,
        subject: "Extension Education"
    },
    { 
        id: 80, 
        questionEn: "Which is a deep-rooted crop?", 
        questionHi: "गहरी जड़ वाली फसल (deep-rooted crop) कौन सी है?", 
        options: ["Rice / चावल", "Sweet potato / शकरकंद", "Onion / प्याज", "Wheat / गेहूं"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 81, 
        questionEn: "A demonstration practice used to compare two technologies (old vs new) is called?", 
        questionHi: "दो तकनीकों (पुरानी बनाम नई) की तुलना करने के लिए उपयोग किए जाने वाले प्रदर्शन अभ्यास को क्या कहा जाता है?", 
        options: ["Method demonstration / विधि प्रदर्शन", "Result demonstration / परिणाम प्रदर्शन", "Frontline demonstration / फ्रंटलाइन प्रदर्शन", "Group discussion / समूह चर्चा"], 
        answer: 1,
        subject: "Extension Education"
    },
    { 
        id: 82, 
        questionEn: "A diffusive process by which liquid water in the form of vapor is lost in the atmosphere is called?", 
        questionHi: "एक विसरित प्रक्रिया जिसके द्वारा तरल पानी वाष्प के रूप में वायुमंडल में खो जाता है, क्या कहलाती है?", 
        options: ["Condensation / संघनन", "Evaporation / वाष्पीकरण", "Precipitation / वर्षा", "Infiltration / घुसपैठ"], 
        answer: 1,
        subject: "Meteorology"
    },
    { 
        id: 83, 
        questionEn: "Which disease was caused by methyl mercury poisoning of water in Japan in 1956?", 
        questionHi: "1956 में जापान में पानी के मिथाइल मरकरी (methyl mercury) विषाक्तता के कारण कौन सा रोग हुआ था?", 
        options: ["Itai-Itai / इटाई-इटाई", "Minamata / मिनामाता", "Blue Baby Syndrome / ब्लू बेबी सिंड्रोम", "Black Foot Disease / ब्लैक फुट रोग"], 
        answer: 1,
        subject: "Environmental Science"
    },
    { 
        id: 84, 
        questionEn: "Which is a viral disease in rice?", 
        questionHi: "चावल में विषाणु जनित (viral) रोग कौन सा है?", 
        options: ["Blast / ब्लास्ट", "Tungro / टुंग्रो", "Blight / झुलसा", "Smut / कंडुआ"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 85, 
        questionEn: "The collapse and death of seedlings before or after they emerge from the soil is known as?", 
        questionHi: "अंकुरों का मिट्टी से निकलने से पहले या बाद में गिरना और मरना क्या कहलाता है?", 
        options: ["Wilt / उकठा", "Damping off / आर्द्रगलन (Damping off)", "Rot / सड़न", "Blight / झुलसा"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 86, 
        questionEn: "A DNA element which has the ability to move from one chromosomal position to another is called?", 
        questionHi: "एक डीएनए तत्व जिसमें एक गुणसूत्र स्थिति से दूसरी स्थिति में जाने की क्षमता होती है, क्या कहलाता है?", 
        options: ["Plasmid / प्लाज्मिड", "Jumping gene / जंपिंग जीन", "Cosmid / कॉस्मिड", "Intron / इंट्रोन"], 
        answer: 1,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 87, 
        questionEn: "A segment of DNA that encodes for a specific polypeptide chain is called?", 
        questionHi: "डीएनए का एक खंड जो एक विशिष्ट पॉलीपेप्टाइड श्रृंखला के लिए कूट (encode) करता है, क्या कहलाता है?", 
        options: ["Recon / रेकॉन", "Cistron / सिस्ट्रोन", "Muton / म्यूटोन", "Exon / एक्सॉन"], 
        answer: 1,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 88, 
        questionEn: "Which is a drought-tolerant vegetable?", 
        questionHi: "सूखा सहन करने वाली (drought-tolerant) सब्जी कौन सी है?", 
        options: ["Spinach / पालक", "Chekkurmanis / चेकुरमनिस", "Cabbage / पत्तागोभी", "Cauliflower / फूलगोभी"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 89, 
        questionEn: "A dwarfing rootstock of apple is?", 
        questionHi: "सेब का बौना रूटस्टॉक (dwarfing rootstock) कौन सा है?", 
        options: ["M-27", "M-9", "MM-106", "MM-111"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 90, 
        questionEn: "A family consisting of husband, wife, and their children is known as?", 
        questionHi: "पति, पत्नी और उनके बच्चों से मिलकर बने परिवार को क्या कहा जाता है?", 
        options: ["Joint family / संयुक्त परिवार", "Nuclear family / एकल परिवार", "Extended family / विस्तृत परिवार", "Single parent family / एकल माता-पिता परिवार"], 
        answer: 1,
        subject: "Extension Education"
    },
    { 
        id: 91, 
        questionEn: "A farmer having an area of less than 1 hectare is called?", 
        questionHi: "1 हेक्टेयर से कम क्षेत्रफल वाले किसान को क्या कहा जाता है?", 
        options: ["Small farmer / छोटा किसान", "Marginal farmer / सीमांत किसान", "Medium farmer / मध्यम किसान", "Large farmer / बड़ा किसान"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 92, 
        questionEn: "A fertilized ovule consisting of an intact embryo, stored food, and seed coat is called?", 
        questionHi: "एक निषेचित बीजांड जिसमें एक अक्षुण्ण भ्रूण, संग्रहित भोजन और बीज कोट होता है, क्या कहलाता है?", 
        options: ["Fruit / फल", "Seed / बीज", "Flower / फूल", "Spore / बीजाणु"], 
        answer: 1,
        subject: "Seed Technology"
    },
    { 
        id: 93, 
        questionEn: "A field soil sample weighing 60 g lost 12 g on oven drying. What is the moisture percent?", 
        questionHi: "60 ग्राम वजन वाले खेत की मिट्टी के नमूने को ओवन में सुखाने पर 12 ग्राम का नुकसान हुआ। नमी प्रतिशत क्या है?", 
        options: ["20%", "25%", "15%", "30%"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 94, 
        questionEn: "A figure obtained by dividing the sum of all variables by their total number is called?", 
        questionHi: "सभी चरों के योग को उनकी कुल संख्या से विभाजित करके प्राप्त आंकड़ा क्या कहलाता है?", 
        options: ["Median / माध्यिका", "Arithmetic Mean / अंकगणितीय माध्य", "Mode / बहुलक", "Range / परास"], 
        answer: 1,
        subject: "Statistics"
    },
    { 
        id: 95, 
        questionEn: "A flowering plant with reddish-orange flowers is?", 
        questionHi: "लाल-नारंगी फूलों वाला एक फूल वाला पौधा है?", 
        options: ["Rosa indica", "Tithonia speciosa", "Tagetes erecta", "Chrysanthemum morifolium"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 96, 
        questionEn: "Which fodder grass is suitable for intercropping in coconut plantations?", 
        questionHi: "नारियल के बागानों में अंतःफसल (intercropping) के लिए कौन सी चारा घास उपयुक्त है?", 
        options: ["Napier grass / नेपियर घास", "Guinea grass / गिनी घास", "Para grass / पैरा घास", "Rhodes grass / रोड्स घास"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 97, 
        questionEn: "A forest system which promotes commercial tree growing by farmers on their own land is called?", 
        questionHi: "एक वन प्रणाली जो किसानों द्वारा अपनी भूमि पर व्यावसायिक वृक्ष उगाने को बढ़ावा देती है, क्या कहलाती है?", 
        options: ["Social Forestry / सामाजिक वानिकी", "Farm Forestry / कृषि वानिकी", "Agroforestry / कृषि वानिकी", "Community Forestry / सामुदायिक वानिकी"], 
        answer: 1,
        subject: "Forestry"
    },
    { 
        id: 98, 
        questionEn: "Which fruit crop produces the highest tonnage per unit area?", 
        questionHi: "कौन सी फल फसल प्रति इकाई क्षेत्र में सबसे अधिक टन भार (tonnage) पैदा करती है?", 
        options: ["Mango / आम", "Pineapple / अनानास", "Banana / केला", "Papaya / पपीता"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 99, 
        questionEn: "A fruit juice normally containing 25% juice and 40% TSS is called?", 
        questionHi: "एक फलों का रस जिसमें सामान्य रूप से 25% रस और 40% TSS होता है, क्या कहलाता है?", 
        options: ["Cordial / कॉर्डियल", "Squash / स्क्वैश", "Syrup / सिरप", "Nectar / नेक्टर"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 100, 
        questionEn: "A fruit or vegetable impregnated with cane sugar or glucose syrup is called?", 
        questionHi: "गन्ने की चीनी या ग्लूकोज सिरप से संसेचित (impregnated) फल या सब्जी को क्या कहा जाता है?", 
        options: ["Preserve / प्रिजर्व", "Candied fruit / कैंडिड फल", "Jam / जैम", "Marmalade / मुरब्बा"], 
        answer: 1,
        subject: "Horticulture"
    }
    ];

    window.quizData = window.quizData.concat(data);
})();

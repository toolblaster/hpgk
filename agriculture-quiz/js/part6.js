(function() {
    const data = [
    { 
        id: 508, 
        questionEn: "What is the test weight of Phalaris minor (Canary grass)?", 
        questionHi: "फैलारिस माइनर (गेहूं का मामा) का परीक्षण भार (Test weight) कितना होता है?", 
        options: ["10 grams / 10 ग्राम", "21 grams / 21 ग्राम", "2 grams / 2 ग्राम", "40 grams / 40 ग्राम"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 509, 
        questionEn: "What is the standard test weight of Wheat grain?", 
        questionHi: "गेहूं के दाने का मानक परीक्षण भार (Test weight) कितना होता है?", 
        options: ["2 grams / 2 ग्राम", "40 grams / 40 ग्राम", "25 grams / 25 ग्राम", "72 grams / 72 ग्राम"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 510, 
        questionEn: "System of Rice Intensification (SRI) was first developed in which country?", 
        questionHi: "चावल सघनीकरण प्रणाली (SRI) सबसे पहले किस देश में विकसित की गई थी?", 
        options: ["Madagascar / मेडागास्कर", "Philippines / फिलीपींस", "India / भारत", "China / चीन"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 511, 
        questionEn: "Which crop is known as the 'Queen of Pulses'?", 
        questionHi: "किस फसल को 'दालों की रानी' (Queen of Pulses) कहा जाता है?", 
        options: ["Lentil / मसूर", "Pea / मटर", "Pigeon pea / अरहर", "Chickpea / चना"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 512, 
        questionEn: "Which crop is known as the 'King of Pulses'?", 
        questionHi: "किस फसल को 'दालों का राजा' (King of Pulses) कहा जाता है?", 
        options: ["Pea / मटर", "Black gram / उड़द", "Chickpea / चना", "Green gram / मूंग"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 513, 
        questionEn: "What is the average protein content in Soybean?", 
        questionHi: "सोयाबीन में औसत प्रोटीन की मात्रा कितनी होती है?", 
        options: ["20%", "30%", "50%", "40-42%"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 514, 
        questionEn: "What is the average oil content in Soybean?", 
        questionHi: "सोयाबीन में औसत तेल की मात्रा कितनी होती है?", 
        options: ["20%", "40%", "30%", "50%"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 515, 
        questionEn: "What is the average oil content in Groundnut?", 
        questionHi: "मूंगफली में औसत तेल की मात्रा कितनी होती है?", 
        options: ["30-35%", "60-65%", "45-50%", "20-25%"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 516, 
        questionEn: "Which is the most critical stage for irrigation in Wheat?", 
        questionHi: "गेहूं में सिंचाई के लिए सबसे महत्वपूर्ण अवस्था कौन सी है?", 
        options: ["Flowering stage / पुष्पन अवस्था", "Dough stage / डफ अवस्था", "Tillering stage / टिलरिंग अवस्था", "CRI stage / क्राउन रूट इनिशिएशन अवस्था"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 517, 
        questionEn: "The inflorescence of Sugarcane is called?", 
        questionHi: "गन्ने के पुष्पक्रम (inflorescence) को क्या कहा जाता है?", 
        options: ["Spike / स्पाइक", "Arrow / एरो (Arrow)", "Panicle / पैनिकल", "Ear / ईयर"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 518, 
        questionEn: "Blind hoeing is a common intercultural practice in which crop?", 
        questionHi: "अंधी गुड़ाई (Blind hoeing) किस फसल में एक सामान्य अंतर-कृषि अभ्यास है?", 
        options: ["Rice / चावल", "Sugarcane / गन्ना", "Cotton / कपास", "Maize / मक्का"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 519, 
        questionEn: "What is the origin place of Maize?", 
        questionHi: "मक्का का उत्पत्ति स्थान क्या है?", 
        options: ["Mexico (Central America) / मैक्सिको", "China / चीन", "India / भारत", "Africa / अफ्रीका"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 520, 
        questionEn: "What is the origin place of Soybean?", 
        questionHi: "सोयाबीन का उत्पत्ति स्थान क्या है?", 
        options: ["China / चीन", "Brazil / ब्राजील", "USA / यूएसए", "India / भारत"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 521, 
        questionEn: "What is the average ginning percentage of Cotton?", 
        questionHi: "कपास का औसत ओटाई प्रतिशत (Ginning percentage) कितना होता है?", 
        options: ["50%", "45%", "20%", "33%"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 522, 
        questionEn: "Which cereal completely lacks gluten protein?", 
        questionHi: "किस अनाज में ग्लूटेन प्रोटीन पूरी तरह से अनुपस्थित होता है?", 
        options: ["Barley / जौ", "Wheat / गेहूं", "Sorghum / ज्वार", "Rye / राई"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 523, 
        questionEn: "What is the average bulk density of a normal mineral soil?", 
        questionHi: "सामान्य खनिज मिट्टी का औसत थोक घनत्व (Bulk density) कितना होता है?", 
        options: ["1.33 g/cc", "2.10 g/cc", "2.65 g/cc", "1.10 g/cc"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 524, 
        questionEn: "What is the average particle density of normal soil?", 
        questionHi: "सामान्य मिट्टी का औसत कण घनत्व (Particle density) कितना होता है?", 
        options: ["2.65 g/cc", "1.50 g/cc", "3.10 g/cc", "1.33 g/cc"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 525, 
        questionEn: "What is the standard C:N ratio of humus?", 
        questionHi: "ह्यूमस (Humus) का मानक C:N अनुपात क्या है?", 
        options: ["10:1", "40:1", "20:1", "100:1"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 526, 
        questionEn: "Who is known as the 'Father of Agricultural Chemistry'?", 
        questionHi: "'कृषि रसायन विज्ञान के जनक' के रूप में किसे जाना जाता है?", 
        options: ["Joffe / जोफ", "Jenny / जेनी", "V.V. Dokuchaev / डोकूचेव", "Justus von Liebig / लिबिग"], 
        answer: 3,
        subject: "Soil Science"
    },
    { 
        id: 527, 
        questionEn: "Which plant is used as an indicator plant for Boron deficiency?", 
        questionHi: "बोरॉन की कमी के लिए किस पौधे का उपयोग संकेतक पौधे (indicator plant) के रूप में किया जाता है?", 
        options: ["Cabbage / पत्तागोभी", "Potato / आलू", "Sunflower / सूरजमुखी", "Maize / मक्का"], 
        answer: 2,
        subject: "Soil Science"
    },
    { 
        id: 528, 
        questionEn: "Which plant is used as an indicator plant for Calcium deficiency?", 
        questionHi: "कैल्शियम की कमी के लिए किस पौधे का उपयोग संकेतक पौधे के रूप में किया जाता है?", 
        options: ["Rice / चावल", "Sunflower / सूरजमुखी", "Cabbage / पत्तागोभी", "Sorghum / ज्वार"], 
        answer: 2,
        subject: "Soil Science"
    },
    { 
        id: 529, 
        questionEn: "Pearl millet (Bajra) is widely used as an indicator plant for the deficiency of?", 
        questionHi: "बाजरा का उपयोग मुख्य रूप से किसकी कमी के लिए संकेतक पौधे के रूप में किया जाता है?", 
        options: ["Potassium / पोटेशियम", "Sodium / सोडियम", "Nitrogen / नाइट्रोजन", "Iron / लोहा"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 530, 
        questionEn: "The 'Law of Minimum' was proposed by?", 
        questionHi: "'न्यूनतम का नियम' (Law of Minimum) किसके द्वारा प्रस्तावित किया गया था?", 
        options: ["Justus von Liebig / लिबिग", "Shelford / शेल्फोर्ड", "Mitscherlich / मित्सरलिच", "Blackman / ब्लैकमैन"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 531, 
        questionEn: "The criteria for the essentiality of nutrients in plants was given by?", 
        questionHi: "पौधों में पोषक तत्वों की अनिवार्यता (essentiality) का मापदंड किसने दिया था?", 
        options: ["Bray / ब्रे", "Schofield / शोफिल्ड", "Justus von Liebig / लिबिग", "Arnon & Stout / अर्नोन और स्टाउट"], 
        answer: 3,
        subject: "Soil Science"
    },
    { 
        id: 532, 
        questionEn: "How many elements are currently considered essential for plant growth?", 
        questionHi: "वर्तमान में पौधों की वृद्धि के लिए कितने तत्वों को आवश्यक माना जाता है?", 
        options: ["18", "17", "16", "20"], 
        answer: 1,
        subject: "Plant Physiology"
    },
    { 
        id: 533, 
        questionEn: "Which is the 17th essential element discovered for plant growth?", 
        questionHi: "पौधों की वृद्धि के लिए खोजा गया 17वां आवश्यक तत्व कौन सा है?", 
        options: ["Sodium / सोडियम", "Nickel / निकल", "Cobalt / कोबाल्ट", "Silicon / सिलिकॉन"], 
        answer: 1,
        subject: "Plant Physiology"
    },
    { 
        id: 534, 
        questionEn: "The term 'Luxury Consumption' is primarily related to which nutrient?", 
        questionHi: "'विलासिता उपभोग' (Luxury Consumption) शब्द मुख्य रूप से किस पोषक तत्व से संबंधित है?", 
        options: ["Phosphorus / फास्फोरस", "Calcium / कैल्शियम", "Nitrogen / नाइट्रोजन", "Potassium / पोटेशियम"], 
        answer: 3,
        subject: "Plant Physiology"
    },
    { 
        id: 535, 
        questionEn: "Which fertilizer is considered best for top dressing in standing crops?", 
        questionHi: "खड़ी फसलों में टॉप ड्रेसिंग के लिए कौन सा उर्वरक सबसे अच्छा माना जाता है?", 
        options: ["Urea / यूरिया", "MOP / एमओपी", "DAP / डीएपी", "SSP / एसएसपी"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 536, 
        questionEn: "White alkali soils are chemically known as?", 
        questionHi: "सफेद क्षारीय मिट्टी को रासायनिक रूप से किस नाम से जाना जाता है?", 
        options: ["Acidic soils / अम्लीय मिट्टी", "Sodic soils / सोडिस्क मिट्टी", "Saline soils / लवणीय मिट्टी", "Peaty soils / पीटी मिट्टी"], 
        answer: 2,
        subject: "Soil Science"
    },
    { 
        id: 537, 
        questionEn: "Black alkali soils are chemically known as?", 
        questionHi: "काली क्षारीय मिट्टी को रासायनिक रूप से किस नाम से जाना जाता है?", 
        options: ["Calcareous soils / कैल्केरियस मिट्टी", "Saline soils / लवणीय मिट्टी", "Sodic soils / सोडिस्क मिट्टी", "Laterite soils / लैटेराइट मिट्टी"], 
        answer: 2,
        subject: "Soil Science"
    },
    { 
        id: 538, 
        questionEn: "To which botanical family does the Sweet Potato belong?", 
        questionHi: "शकरकंद (Sweet Potato) किस वानस्पतिक कुल (family) से संबंधित है?", 
        options: ["Solanaceae / सोलेनेसी", "Convolvulaceae / कॉन्वोल्वुलैसी", "Malvaceae / मालवेसी", "Cucurbitaceae / कुकुरबिटेसी"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 539, 
        questionEn: "What is the recognized center of origin for Potato?", 
        questionHi: "आलू का मान्यता प्राप्त उत्पत्ति केंद्र क्या है?", 
        options: ["India / भारत", "China / चीन", "Africa / अफ्रीका", "South America (Peru) / दक्षिण अमेरिका"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 540, 
        questionEn: "Which fruit is universally known as the 'Queen of Fruits'?", 
        questionHi: "किस फल को विश्व स्तर पर 'फलों की रानी' (Queen of Fruits) कहा जाता है?", 
        options: ["Litchi / लीची", "Apple / सेब", "Mangosteen / मैंगोस्टीन", "Mango / आम"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 541, 
        questionEn: "Which fruit is known as the 'King of Arid Fruits'?", 
        questionHi: "किस फल को 'शुष्क फलों का राजा' (King of Arid Fruits) कहा जाता है?", 
        options: ["Date palm / खजूर", "Pomegranate / अनार", "Ber / बेर", "Fig / अंजीर"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 542, 
        questionEn: "The fruit of the Rose plant is botanically called?", 
        questionHi: "गुलाब के पौधे के फल को वानस्पतिक रूप से क्या कहा जाता है?", 
        options: ["Berry / बेरी", "Hips / हिप्स (Hips)", "Drupe / ड्रूप", "Pome / पोम"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 543, 
        questionEn: "Gladiolus is commercially propagated through?", 
        questionHi: "ग्लेडियोलस का व्यावसायिक प्रवर्धन (propagation) किसके माध्यम से किया जाता है?", 
        options: ["Tubers / कंद", "Corms / कॉर्म (Corms)", "Seeds / बीज", "Bulbs / बल्ब"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 544, 
        questionEn: "Multistory (multi-tier) cropping system is highly popular in which Indian state?", 
        questionHi: "बहुमंजिला (multi-tier) फसल प्रणाली किस भारतीय राज्य में अत्यधिक लोकप्रिय है?", 
        options: ["Rajasthan / राजस्थान", "Kerala / केरल", "Punjab / पंजाब", "Uttar Pradesh / उत्तर प्रदेश"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 545, 
        questionEn: "Which Mango variety is most suitable for High-Density Planting (HDP)?", 
        questionHi: "उच्च घनत्व रोपण (HDP) के लिए आम की कौन सी किस्म सबसे उपयुक्त है?", 
        options: ["Amrapali / आम्रपाली", "Langra / लंगड़ा", "Sindhu / सिंधु", "Dashehari / दशहरी"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 546, 
        questionEn: "Which of the following is a dwarf, mutant variety of Papaya?", 
        questionHi: "निम्नलिखित में से कौन सी पपीते की बौनी, उत्परिवर्ती (mutant) किस्म है?", 
        options: ["Pusa Giant / पूसा जाइंट", "Pusa Dwarf / पूसा ड्वार्फ", "Pusa Majesty / पूसा मेजेस्टी", "Pusa Nanha / पूसा नन्हा"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 547, 
        questionEn: "'Spongy tissue' is a severe physiological disorder of which Mango variety?", 
        questionHi: "'स्पंजी ऊतक' (Spongy tissue) आम की किस किस्म का एक गंभीर शारीरिक विकार है?", 
        options: ["Banganapalli / बंगनपल्ली", "Kesar / केसर", "Alphonso / अल्फांसो", "Totapuri / तोतापुरी"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 548, 
        questionEn: "'Black tip' disorder in Mango is primarily caused by?", 
        questionHi: "आम में 'ब्लैक टिप' विकार मुख्य रूप से किसके कारण होता है?", 
        options: ["Brick kiln fumes / ईंट भट्टे का धुआं (CO, SO2)", "Zinc deficiency / जस्ते की कमी", "Waterlogging / जलभराव", "Boron toxicity / बोरॉन की अधिकता"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 549, 
        questionEn: "Which is the most abundant fruit produced in the world by volume?", 
        questionHi: "मात्रा के हिसाब से दुनिया में सबसे ज्यादा उत्पादित होने वाला फल कौन सा है?", 
        options: ["Apple / सेब", "Citrus / नींबू वर्गीय", "Mango / आम", "Banana / केला"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 550, 
        questionEn: "Saffron (Kesar) belongs to which botanical family?", 
        questionHi: "केसर (Saffron) किस वानस्पतिक कुल से संबंधित है?", 
        options: ["Liliaceae / लिलिएसी", "Iridaceae / इरिडेसी", "Apiaceae / एपिएसी", "Orchidaceae / आर्किडेसी"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 551, 
        questionEn: "Pungency in Radish is due to the presence of?", 
        questionHi: "मूली में तीखापन (Pungency) किसकी उपस्थिति के कारण होता है?", 
        options: ["Allicin / एलीसिन", "Quercetin / क्वेरसेटिन", "Isothiocyanate / आइसोथियोसाइनेट", "Capsaicin / कैप्साइसिन"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 552, 
        questionEn: "The red color of Onion skin is due to the pigment?", 
        questionHi: "प्याज के छिलके का लाल रंग किस वर्णक के कारण होता है?", 
        options: ["Carotene / कैरोटीन", "Lycopene / लाइकोपीन", "Anthocyanin / एंथोसायनिन", "Xanthophyll / ज़ैंथोफिल"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 553, 
        questionEn: "Who is known as the 'Father of Plant Pathology in India'?", 
        questionHi: "भारत में 'पादप रोग विज्ञान के जनक' के रूप में किसे जाना जाता है?", 
        options: ["K.C. Mehta / के.सी. मेहता", "E.J. Butler / ई.जे. बटलर", "B.B. Mundkur / बी.बी. मुंडकुर", "J.F. Dastur / जे.एफ. दस्तूर"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 554, 
        questionEn: "Who is considered the 'Father of Plant Pathology' globally?", 
        questionHi: "विश्व स्तर पर 'पादप रोग विज्ञान का जनक' किसे माना जाता है?", 
        options: ["Louis Pasteur / लुई पाश्चर", "Robert Koch / रॉबर्ट कोच", "E.F. Smith / ई.एफ. स्मिथ", "Anton de Bary / एंटन डी बेरी"], 
        answer: 3,
        subject: "Plant Pathology"
    },
    { 
        id: 555, 
        questionEn: "The Great Bengal Famine of 1943 was caused by which pathogen?", 
        questionHi: "1943 का महान बंगाल अकाल किस रोगज़नक़ के कारण हुआ था?", 
        options: ["Ustilago tritici / उस्टिलागो ट्रिटिसी", "Puccinia graminis / पक्सिनिया ग्रैमिनिस", "Phytophthora infestans / फाइटोफ्थोरा इन्फेस्टंस", "Helminthosporium oryzae / हेल्मिन्थोस्पोरियम ओराइजी"], 
        answer: 3,
        subject: "Plant Pathology"
    },
    { 
        id: 556, 
        questionEn: "The Irish Famine (1845) was caused by which plant disease?", 
        questionHi: "आयरिश अकाल (1845) किस पौधे की बीमारी के कारण हुआ था?", 
        options: ["Late blight of potato / आलू का पछेती झुलसा", "Rice blast / चावल का ब्लास्ट", "Early blight / अगेती झुलसा", "Wheat rust / गेहूं का रतुआ"], 
        answer: 0,
        subject: "Plant Pathology"
    },
    { 
        id: 557, 
        questionEn: "Bordeaux mixture, the first fungicide, was discovered by?", 
        questionHi: "पहला कवकनाशी, बोर्दो मिश्रण, किसके द्वारा खोजा गया था?", 
        options: ["Tillet / टिललेट", "Millardet / मिलार्डेट", "Jensen / जेन्सेन", "Prevost / प्रीवोस्ट"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 558, 
        questionEn: "Most of the plant diseases are spread in nature primarily by?", 
        questionHi: "प्रकृति में अधिकांश पौधों की बीमारियाँ मुख्य रूप से किसके द्वारा फैलती हैं?", 
        options: ["Soil / मिट्टी", "Insects / कीड़े", "Water / पानी", "Wind / हवा"], 
        answer: 3,
        subject: "Plant Pathology"
    },
    { 
        id: 559, 
        questionEn: "'Dead heart' and 'White head' symptoms in rice are caused by?", 
        questionHi: "चावल में 'डेड हार्ट' और 'व्हाइट हेड' के लक्षण किसके कारण होते हैं?", 
        options: ["Gall midge / गॉल मिज", "Gundhi bug / गंधी बग", "Yellow stem borer / पीला तना छेदक", "Leaf folder / पत्ती मोड़क"], 
        answer: 2,
        subject: "Entomology"
    },
    { 
        id: 560, 
        questionEn: "The 'Silver shoot' symptom in rice is caused by the attack of?", 
        questionHi: "चावल में 'सिल्वर शूट' का लक्षण किसके हमले के कारण होता है?", 
        options: ["Stem borer / तना छेदक", "Gall midge / गॉल मिज", "Brown plant hopper / ब्राउन प्लांट हॉपर", "Thrips / थ्रिप्स"], 
        answer: 1,
        subject: "Entomology"
    },
    { 
        id: 561, 
        questionEn: "Pink bollworm is a serious and destructive pest of?", 
        questionHi: "पिंक बॉलवर्म (Pink bollworm) किस फसल का गंभीर और विनाशकारी कीट है?", 
        options: ["Okra / भिंडी", "Brinjal / बैंगन", "Tomato / टमाटर", "Cotton / कपास"], 
        answer: 3,
        subject: "Entomology"
    },
    { 
        id: 562, 
        questionEn: "Diamondback moth (DBM) is the most notorious pest of?", 
        questionHi: "डायमंडबैक मोथ (DBM) किस फसल का सबसे कुख्यात कीट है?", 
        options: ["Cauliflower and Cabbage / फूलगोभी और पत्तागोभी", "Potato / आलू", "Tomato / टमाटर", "Onion / प्याज"], 
        answer: 0,
        subject: "Entomology"
    },
    { 
        id: 563, 
        questionEn: "Gummosis disease in Citrus is primarily caused by?", 
        questionHi: "सिट्रस में गमोसिस (Gummosis) रोग मुख्य रूप से किसके कारण होता है?", 
        options: ["Rhizoctonia / राइजोक्टोनिया", "Fusarium / फ्यूजेरियम", "Phytophthora / फाइटोफ्थोरा", "Pythium / पाइथियम"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 564, 
        questionEn: "The 'Little leaf of Brinjal' phytoplasma is transmitted by?", 
        questionHi: "बैंगन का 'लिटिल लीफ' फाइटोप्लाज्मा किसके द्वारा प्रेषित (transmit) होता है?", 
        options: ["Leaf hopper / लीफ हॉपर", "Thrips / थ्रिप्स", "Aphid / एफिड", "Whitefly / सफेद मक्खी"], 
        answer: 0,
        subject: "Entomology"
    },
    { 
        id: 565, 
        questionEn: "Banana Bunchy Top Virus (BBTV) is naturally transmitted by?", 
        questionHi: "बनाना बंची टॉप वायरस (BBTV) स्वाभाविक रूप से किसके द्वारा फैलता है?", 
        options: ["Nematode / सूत्रकृमि", "Aphid / एफिड", "Mealybug / मिलीबग", "Whitefly / सफेद मक्खी"], 
        answer: 1,
        subject: "Entomology"
    },
    { 
        id: 566, 
        questionEn: "The dance language of honey bees for communication was discovered by?", 
        questionHi: "संचार के लिए मधुमक्खियों की नृत्य भाषा की खोज किसने की थी?", 
        options: ["Karl von Frisch / कार्ल वॉन फ्रिस्क", "Mendel / मेंडल", "Lorenz / लोरेंज", "Darwin / डार्विन"], 
        answer: 0,
        subject: "Entomology"
    },
    { 
        id: 567, 
        questionEn: "The silkworm disease 'Pebrine' is caused by a?", 
        questionHi: "रेशम कीट रोग 'पेब्राइन' (Pebrine) किसके कारण होता है?", 
        options: ["Protozoa / प्रोटोजोआ", "Fungi / कवक", "Bacteria / जीवाणु", "Virus / विषाणु"], 
        answer: 0,
        subject: "Entomology"
    },
    { 
        id: 568, 
        questionEn: "Sahiwal is a famous indigenous breed of?", 
        questionHi: "साहीवाल (Sahiwal) किसकी एक प्रसिद्ध स्वदेशी नस्ल है?", 
        options: ["Cow / गाय", "Buffalo / भैंस", "Sheep / भेड़", "Goat / बकरी"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 569, 
        questionEn: "Which is the highest milk-producing cow breed in the world?", 
        questionHi: "विश्व में सबसे अधिक दूध देने वाली गाय की नस्ल कौन सी है?", 
        options: ["Ayrshire / आयशर", "Jersey / जर्सी", "Holstein Friesian / होल्स्टीन फ्राइज़ियन", "Brown Swiss / ब्राउन स्विस"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 570, 
        questionEn: "Which indigenous cow breed is known for its highest milk yield in India?", 
        questionHi: "भारत में कौन सी स्वदेशी गाय की नस्ल सबसे अधिक दूध की उपज के लिए जानी जाती है?", 
        options: ["Gir / गिर", "Tharparkar / थारपारकर", "Red Sindhi / लाल सिंधी", "Sahiwal / साहीवाल"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 571, 
        questionEn: "Which is considered the best dual-purpose breed of cow in India?", 
        questionHi: "भारत में गाय की सबसे अच्छी द्विउद्देश्यीय (dual-purpose) नस्ल कौन सी मानी जाती है?", 
        options: ["Kankrej / कांकरेज", "Haryana / हरियाणा", "Kangayam / कंगायम", "Ongole / ओंगोल"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 572, 
        questionEn: "Which is considered the best draught breed of cattle in India?", 
        questionHi: "भारत में मवेशियों की सबसे अच्छी ड्राफ्ट (भार ढोने वाली) नस्ल कौन सी मानी जाती है?", 
        options: ["Khillari / खिल्लारी", "Hallikar / हल्लीकर", "Malvi / मालवी", "Amritmahal / अमृतमहल"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 573, 
        questionEn: "Which goat breed is world-famous as the 'Queen of Milk'?", 
        questionHi: "विश्व भर में 'दूध की रानी' के रूप में कौन सी बकरी की नस्ल प्रसिद्ध है?", 
        options: ["Alpine / अल्पाइन", "Jamunapari / जमुनापारी", "Toggenburg / टोगेनबर्ग", "Saanen / सानेन"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 574, 
        questionEn: "Which Indian sheep breed is popularly known as the 'Merino of India'?", 
        questionHi: "किस भारतीय भेड़ की नस्ल को 'भारत का मेरिनो' कहा जाता है?", 
        options: ["Magra / मगरा", "Nali / नाली", "Chokla / चोकला", "Marwari / मारवाड़ी"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 575, 
        questionEn: "Pashmina wool is famously obtained from which animal?", 
        questionHi: "पश्मीना ऊन प्रसिद्ध रूप से किस जानवर से प्राप्त किया जाता है?", 
        options: ["Rabbit / खरगोश", "Goat / बकरी (Changthangi)", "Sheep / भेड़", "Camel / ऊंट"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 576, 
        questionEn: "The meat of Deer is properly termed as?", 
        questionHi: "हिरण के मांस को सही मायने में क्या कहा जाता है?", 
        options: ["Veal / वील", "Chevon / चेवन", "Venison / वेनिसन", "Mutton / मटन"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 577, 
        questionEn: "The act of parturition (giving birth) in pigs is called?", 
        questionHi: "सूअरों में प्रसव (जन्म देने) की क्रिया को क्या कहा जाता है?", 
        options: ["Kidding / किडिंग", "Calving / काल्विंग", "Foaling / फोलिंग", "Farrowing / फैरोइंग"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 578, 
        questionEn: "What is the average gestation period of a Sow (female pig)?", 
        questionHi: "मादा सूअर (Sow) की औसत गर्भकाल अवधि कितनी होती है?", 
        options: ["60 days / 60 दिन", "114 days / 114 दिन", "150 days / 150 दिन", "280 days / 280 दिन"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 579, 
        questionEn: "What is the normal body temperature of a healthy cow?", 
        questionHi: "एक स्वस्थ गाय के शरीर का सामान्य तापमान कितना होता है?", 
        options: ["37°C", "40°C", "38.5°C (101.5°F)", "42°C"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 580, 
        questionEn: "Which carbohydrate is commonly known as 'Milk sugar'?", 
        questionHi: "किस कार्बोहाइड्रेट को आमतौर पर 'मिल्क शुगर' (Milk sugar) के रूप में जाना जाता है?", 
        options: ["Fructose / फ्रुक्टोज", "Lactose / लैक्टोज", "Glucose / ग्लूकोज", "Sucrose / सुक्रोज"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 581, 
        questionEn: "The yellowish tinge in cow's milk is due to the presence of?", 
        questionHi: "गाय के दूध में पीलापन किसकी उपस्थिति के कारण होता है?", 
        options: ["Carotene / कैरोटीन", "Lactose / लैक्टोज", "Casein / कैसिइन", "Riboflavin / राइबोफ्लेविन"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 582, 
        questionEn: "The pure white color of buffalo milk is primarily due to?", 
        questionHi: "भैंस के दूध का शुद्ध सफेद रंग मुख्य रूप से किसके कारण होता है?", 
        options: ["Casein / कैसिइन", "Whey / मट्ठा", "Fat / वसा", "Carotene / कैरोटीन"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 583, 
        questionEn: "NAARM (National Academy of Agricultural Research Management) is situated at?", 
        questionHi: "NAARM (राष्ट्रीय कृषि अनुसंधान प्रबंधन अकादमी) कहाँ स्थित है?", 
        options: ["Hyderabad / हैदराबाद", "New Delhi / नई दिल्ली", "Karnal / करनाल", "Bangalore / बैंगलोर"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 584, 
        questionEn: "IARI (Indian Agricultural Research Institute) was originally established in 1905 at?", 
        questionHi: "IARI (भारतीय कृषि अनुसंधान संस्थान) मूल रूप से 1905 में कहाँ स्थापित किया गया था?", 
        options: ["New Delhi / नई दिल्ली", "Pusa, Bihar / पूसा, बिहार", "Kanpur / कानपुर", "Kolkata / कोलकाता"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 585, 
        questionEn: "NABARD was established on the recommendation of which committee?", 
        questionHi: "नाबार्ड (NABARD) की स्थापना किस समिति की सिफारिश पर की गई थी?", 
        options: ["Kelkar Committee / केलकर समिति", "Narasimham Committee / नरसिम्हम समिति", "Swaminathan Committee / स्वामीनाथन समिति", "B. Sivaraman Committee / बी. शिवारमन समिति"], 
        answer: 3,
        subject: "Economics"
    },
    { 
        id: 586, 
        questionEn: "The first Cooperative Credit Societies Act was passed in India in the year?", 
        questionHi: "भारत में पहला सहकारी साख समिति अधिनियम (Cooperative Credit Societies Act) किस वर्ष पारित किया गया था?", 
        options: ["1952", "1904", "1947", "1912"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 587, 
        questionEn: "The Training and Visit (T&V) system of extension was introduced in India by?", 
        questionHi: "भारत में विस्तार की 'प्रशिक्षण और भ्रमण' (T&V) प्रणाली किसके द्वारा शुरू की गई थी?", 
        options: ["Daniel Benor / डैनियल बेनोर", "Spencer Hatch / स्पेंसर हैच", "Albert Mayer / अल्बर्ट मेयर", "S.K. Dey / एस.के. डे"], 
        answer: 0,
        subject: "Extension Education"
    },
    { 
        id: 588, 
        questionEn: "The Etawah Pilot Project was started in 1948 by?", 
        questionHi: "इटावा पायलट प्रोजेक्ट 1948 में किसके द्वारा शुरू किया गया था?", 
        options: ["Albert Mayer / अल्बर्ट मेयर", "F.L. Brayne / एफ.एल. ब्रायन", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Mahatma Gandhi / महात्मा गांधी"], 
        answer: 0,
        subject: "Extension Education"
    },
    { 
        id: 589, 
        questionEn: "The Gurgaon Experiment for rural development was started by?", 
        questionHi: "ग्रामीण विकास के लिए गुड़गांव प्रयोग (Gurgaon Experiment) किसके द्वारा शुरू किया गया था?", 
        options: ["Spencer Hatch / स्पेंसर हैच", "F.L. Brayne / एफ.एल. ब्रायन", "S.K. Dey / एस.के. डे", "Vinoba Bhave / विनोबा भावे"], 
        answer: 1,
        subject: "Extension Education"
    },
    { 
        id: 590, 
        questionEn: "The Marthandam Project of rural reconstruction was started by?", 
        questionHi: "ग्रामीण पुनर्निर्माण का मार्तंडम प्रोजेक्ट किसके द्वारा शुरू किया गया था?", 
        options: ["Albert Mayer / अल्बर्ट मेयर", "Spencer Hatch / स्पेंसर हैच", "F.L. Brayne / एफ.एल. ब्रायन", "S.K. Dey / एस.के. डे"], 
        answer: 1,
        subject: "Extension Education"
    },
    { 
        id: 591, 
        questionEn: "The Shriniketan Project for rural development was initiated by?", 
        questionHi: "ग्रामीण विकास के लिए श्रीनिकेतन प्रोजेक्ट (Shriniketan Project) की शुरुआत किसने की थी?", 
        options: ["Jawaharlal Nehru / जवाहरलाल नेहरू", "Mahatma Gandhi / महात्मा गांधी", "Sardar Patel / सरदार पटेल", "Rabindranath Tagore / रवींद्रनाथ टैगोर"], 
        answer: 3,
        subject: "Extension Education"
    },
    { 
        id: 592, 
        questionEn: "The Sevagram Project at Wardha was established by?", 
        questionHi: "वर्धा में सेवाग्राम प्रोजेक्ट (Sevagram Project) किसके द्वारा स्थापित किया गया था?", 
        options: ["S.K. Dey / एस.के. डे", "Mahatma Gandhi / महात्मा गांधी", "Rabindranath Tagore / रवींद्रनाथ टैगोर", "Vinoba Bhave / विनोबा भावे"], 
        answer: 1,
        subject: "Extension Education"
    },
    { 
        id: 593, 
        questionEn: "The Nilokheri Project (Mazdoor Manzil) was organized by?", 
        questionHi: "नीलोखेड़ी प्रोजेक्ट (मज़दूर मंज़िल) किसके द्वारा आयोजित किया गया था?", 
        options: ["Albert Mayer / अल्बर्ट मेयर", "F.L. Brayne / एफ.एल. ब्रायन", "S.K. Dey / एस.के. डे", "Spencer Hatch / स्पेंसर हैच"], 
        answer: 2,
        subject: "Extension Education"
    },
    { 
        id: 594, 
        questionEn: "Who was the first Director General of ICAR?", 
        questionHi: "ICAR के पहले महानिदेशक (Director General) कौन थे?", 
        options: ["R.S. Paroda / आर.एस. परोदा", "B.P. Pal / बी.पी. पाल", "M.S. Swaminathan / एम.एस. स्वामीनाथन", "A.S. Kiran Kumar / ए.एस. किरण कुमार"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 595, 
        questionEn: "The Project Directorate on Soybean is located at?", 
        questionHi: "सोयाबीन पर परियोजना निदेशालय (Project Directorate) कहाँ स्थित है?", 
        options: ["Jabalpur / जबलपुर", "Indore / इंदौर", "Bhopal / भोपाल", "Gwalior / ग्वालियर"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 596, 
        questionEn: "The National Research Centre for Weed Science is located at?", 
        questionHi: "राष्ट्रीय खरपतवार विज्ञान अनुसंधान केंद्र (NRCWS) कहाँ स्थित है?", 
        options: ["Raipur / रायपुर", "Indore / इंदौर", "Jabalpur / जबलपुर", "Bhopal / भोपाल"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 597, 
        questionEn: "The concept and term 'Extension Education' originally started in which country?", 
        questionHi: "'विस्तार शिक्षा' (Extension Education) की अवधारणा और शब्द मूल रूप से किस देश में शुरू हुए थे?", 
        options: ["India / भारत", "USA / यूएसए", "Germany / जर्मनी", "UK (Cambridge) / यूके (कैम्ब्रिज)"], 
        answer: 3,
        subject: "Extension Education"
    },
    { 
        id: 598, 
        questionEn: "The 'Kisan Call Center' (KCC) scheme (Toll-free 1800-180-1551) was launched in India in?", 
        questionHi: "भारत में 'किसान कॉल सेंटर' (KCC) योजना (टोल-फ्री 1800-180-1551) कब शुरू की गई थी?", 
        options: ["2004", "2000", "2006", "2002"], 
        answer: 0,
        subject: "Extension Education"
    },
    { 
        id: 599, 
        questionEn: "A market where goods are bought and sold in bulk quantities is known as?", 
        questionHi: "वह बाज़ार जहाँ सामान भारी मात्रा में (bulk) खरीदा और बेचा जाता है, क्या कहलाता है?", 
        options: ["Wholesale market / थोक बाज़ार", "Retail market / खुदरा बाज़ार", "Terminal market / टर्मिनल बाज़ार", "Primary market / प्राथमिक बाज़ार"], 
        answer: 0,
        subject: "Economics"
    },
    { 
        id: 600, 
        questionEn: "The elasticity of demand for agricultural products is generally?", 
        questionHi: "कृषि उत्पादों के लिए मांग की लोच (elasticity of demand) आम तौर पर कैसी होती है?", 
        options: ["Perfectly elastic / पूर्णतः लोचदार", "Inelastic / बेलोचदार", "Elastic / लोचदार", "Unitary / एकात्मक"], 
        answer: 1,
        subject: "Economics"
    }
    ];

    window.quizData = window.quizData.concat(data);
})();

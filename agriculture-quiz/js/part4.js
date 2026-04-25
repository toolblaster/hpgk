(function() {
    const data = [
    { 
        id: 301, 
        questionEn: "Central Tobacco Research Institute (CTRI) is located at?", 
        questionHi: "केंद्रीय तंबाकू अनुसंधान संस्थान (CTRI) कहाँ स्थित है?", 
        options: ["Kolkata / कोलकाता", "Guntur / गुंटूर", "Chennai / चेन्नई", "Rajahmundry / राजमुंदरी"], 
        answer: 3, 
        subject: "General Agriculture"
    },
    { 
        id: 302, 
        questionEn: "Certified seed is produced from?", 
        questionHi: "प्रमाणित बीज (Certified seed) किससे उत्पादित किया जाता है?", 
        options: ["Truthful label seed / ट्रूथफुल लेबल बीज", "Foundation seed / आधार बीज", "Breeder seed / प्रजनक बीज", "Nucleus seed / न्यूक्लियस बीज"], 
        answer: 1, 
        subject: "Seed Technology"
    },
    { 
        id: 303, 
        questionEn: "Chemical formula of Urea is?", 
        questionHi: "यूरिया (Urea) का रासायनिक सूत्र क्या है?", 
        options: ["NH4NO3 / NH4NO3", "NH2CONH2 / NH2CONH2", "(NH4)2SO4 / (NH4)2SO4", "NH4Cl / NH4Cl"], 
        answer: 1, 
        subject: "Soil Science"
    },
    { 
        id: 304, 
        questionEn: "Chili leaf curl is transmitted by?", 
        questionHi: "मिर्च का लीफ कर्ल (Leaf curl) किसके द्वारा फैलता है?", 
        options: ["White fly / सफेद मक्खी (Bemisia tabaci)", "Mites / घुन", "Thrips / थ्रिप्स", "Aphids / एफिड्स"], 
        answer: 0, 
        subject: "Plant Pathology"
    },
    { 
        id: 305, 
        questionEn: "Chipko movement is related to?", 
        questionHi: "चिपको आंदोलन (Chipko movement) किससे संबंधित है?", 
        options: ["Soil conservation / मृदा संरक्षण", "Tiger conservation / बाघ संरक्षण", "Water conservation / जल संरक्षण", "Forest conservation / वन संरक्षण"], 
        answer: 3, 
        subject: "Forestry"
    },
    { 
        id: 306, 
        questionEn: "Chromosome number of Maize (2n) is?", 
        questionHi: "मक्का (Maize) में गुणसूत्र संख्या (2n) कितनी होती है?", 
        options: ["40", "42", "24", "20"], 
        answer: 3, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 307, 
        questionEn: "Chromosome number of Rice (2n) is?", 
        questionHi: "चावल (Rice) में गुणसूत्र संख्या (2n) कितनी होती है?", 
        options: ["20", "24", "26", "42"], 
        answer: 1, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 308, 
        questionEn: "Chromosome number of Wheat (Hexaploid) is?", 
        questionHi: "गेहूं (Hexaploid) में गुणसूत्र संख्या कितनी होती है?", 
        options: ["28", "42", "14", "24"], 
        answer: 1, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 309, 
        questionEn: "Citrus canker is caused by?", 
        questionHi: "सिट्रस कैंकर (Citrus canker) किसके कारण होता है?", 
        options: ["Nematode / सूत्रकृमि", "Fungi / कवक", "Bacteria / जीवाणु (Xanthomonas)", "Virus / विषाणु"], 
        answer: 2, 
        subject: "Plant Pathology"
    },
    { 
        id: 310, 
        questionEn: "Clay particle size is?", 
        questionHi: "क्ले (Clay) कण का आकार क्या होता है?", 
        options: ["< 0.002 mm / < 0.002 मिमी", "0.02 - 0.2 mm / 0.02 - 0.2 मिमी", "0.002 - 0.02 mm / 0.002 - 0.02 मिमी", "> 0.2 mm / > 0.2 मिमी"], 
        answer: 0, 
        subject: "Soil Science"
    },
    { 
        id: 311, 
        questionEn: "Club root of cabbage is caused by?", 
        questionHi: "पत्तागोभी का क्लब रूट (Club root) रोग किसके कारण होता है?", 
        options: ["Boron deficiency / बोरॉन की कमी", "Bacteria / जीवाणु", "Fungi / कवक (Plasmodiophora)", "Virus / विषाणु"], 
        answer: 2, 
        subject: "Plant Pathology"
    },
    { 
        id: 312, 
        questionEn: "Coconut propagation is done by?", 
        questionHi: "नारियल का प्रवर्धन (propagation) किसके द्वारा किया जाता है?", 
        options: ["Grafting / ग्राफ्टिंग", "Seed / बीज (Nuts)", "Suckers / सकर्स", "Layering / लेयरिंग"], 
        answer: 1, 
        subject: "Horticulture"
    },
    { 
        id: 313, 
        questionEn: "Coffee is propagated by?", 
        questionHi: "कॉफी का प्रवर्धन किसके द्वारा किया जाता है?", 
        options: ["Cuttings / कटिंग", "Budding / बडिंग", "Grafting / ग्राफ्टिंग", "Seeds / बीज"], 
        answer: 3, 
        subject: "Horticulture"
    },
    { 
        id: 314, 
        questionEn: "Commercial propagation method of Mango is?", 
        questionHi: "आम की व्यावसायिक प्रवर्धन विधि कौन सी है?", 
        options: ["Air layering / एयर लेयरिंग", "T-Budding / टी-बडिंग", "Seed / बीज", "Veneer grafting / विनियर ग्राफ्टिंग"], 
        answer: 3, 
        subject: "Horticulture"
    },
    { 
        id: 315, 
        questionEn: "Commercial propagation method of Rose is?", 
        questionHi: "गुलाब की व्यावसायिक प्रवर्धन विधि कौन सी है?", 
        options: ["T-Budding / टी-बडिंग", "Air layering / एयर लेयरिंग", "Stem cutting / स्टेम कटिंग", "Seeds / बीज"], 
        answer: 0, 
        subject: "Horticulture"
    },
    { 
        id: 316, 
        questionEn: "Common name of Phalaris minor is?", 
        questionHi: "फैलारिस माइनर (Phalaris minor) का सामान्य नाम क्या है?", 
        options: ["Bathua / बथुआ", "Motha / मोथा", "Doob grass / दूब घास", "Gulli danda / गुल्ली डंडा (Canary grass)"], 
        answer: 3, 
        subject: "Agronomy"
    },
    { 
        id: 317, 
        questionEn: "Community Development Programme (CDP) was started in?", 
        questionHi: "सामुदायिक विकास कार्यक्रम (CDP) कब शुरू किया गया था?", 
        options: ["1952", "1978", "1965", "1947"], 
        answer: 0, 
        subject: "Extension Education"
    },
    { 
        id: 318, 
        questionEn: "Complementary genes ratio is?", 
        questionHi: "पूरक जीन (Complementary genes) का अनुपात क्या है?", 
        options: ["13:3", "9:7", "15:1", "9:3:3:1"], 
        answer: 1, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 319, 
        questionEn: "Component of Bordeaux mixture is?", 
        questionHi: "बोर्दो मिश्रण (Bordeaux mixture) के घटक क्या हैं?", 
        options: ["Lime + Sulfur / चूना + सल्फर", "CuSO4 + Urea + Water / CuSO4 + यूरिया + पानी", "CuSO4 + Lime + Water / CuSO4 + चूना + पानी", "Copper + Zinc / तांबा + जस्ता"], 
        answer: 2, 
        subject: "Plant Pathology"
    },
    { 
        id: 320, 
        questionEn: "Contour bunding is adopted in areas with rainfall?", 
        questionHi: "कंटूर बंडिंग (Contour bunding) किन वर्षा वाले क्षेत्रों में अपनाई जाती है?", 
        options: ["High rainfall / उच्च वर्षा", "< 600 mm / < 600 मिमी", "Waterlogged / जलभराव", "> 1000 mm / > 1000 मिमी"], 
        answer: 1, 
        subject: "Agricultural Engineering"
    },
    { 
        id: 321, 
        questionEn: "Cotton fibre is chemically?", 
        questionHi: "कपास का रेशा रासायनिक रूप से क्या है?", 
        options: ["Protein / प्रोटीन", "Cellulose / सेल्यूलोज", "Pectin / पेक्टिन", "Lignin / लिग्निन"], 
        answer: 1, 
        subject: "Biochemistry"
    },
    { 
        id: 322, 
        questionEn: "Cricket ball is a variety of?", 
        questionHi: "क्रिकेट बॉल (Cricket ball) किसकी एक किस्म है?", 
        options: ["Sapota / चीकू", "Ber / बेर", "Guava / अमरूद", "Pomegranate / अनार"], 
        answer: 0, 
        subject: "Horticulture"
    },
    { 
        id: 323, 
        questionEn: "Crop logging concept was given by?", 
        questionHi: "क्रॉप लॉगिंग (Crop logging) अवधारणा किसके द्वारा दी गई थी?", 
        options: ["H.F. Clements / एच.एफ. क्लेमेंट्स", "Liebig / लिबिग", "M.S. Swaminathan / एम.एस. स्वामीनाथन", "S.S. Bains / एस.एस. बैंस"], 
        answer: 0, 
        subject: "Agronomy"
    },
    { 
        id: 324, 
        questionEn: "Crossing of F1 with recessive parent is called?", 
        questionHi: "F1 का अप्रभावी जनक (recessive parent) के साथ संकरण क्या कहलाता है?", 
        options: ["Double cross / डबल क्रॉस", "Test cross / टेस्ट क्रॉस", "Back cross / बैक क्रॉस", "Top cross / टॉप क्रॉस"], 
        answer: 1, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 325, 
        questionEn: "Curing is a process related to?", 
        questionHi: "क्योरिंग (Curing) प्रक्रिया किससे संबंधित है?", 
        options: ["Rice / चावल", "Tobacco / तंबाकू (and Tea)", "Cotton / कपास", "Wheat / गेहूं"], 
        answer: 1, 
        subject: "Agronomy"
    },
    { 
        id: 326, 
        questionEn: "Damping off disease is common in?", 
        questionHi: "आर्द्रगलन (Damping off) रोग किसमें सामान्य है?", 
        options: ["Nursery stage / नर्सरी अवस्था", "Flowering stage / पुष्पन अवस्था", "Storage / भंडारण", "Harvesting stage / कटाई अवस्था"], 
        answer: 0, 
        subject: "Plant Pathology"
    },
    { 
        id: 327, 
        questionEn: "DAP contains how much Nitrogen?", 
        questionHi: "डीएपी (DAP) में कितना नाइट्रोजन होता है?", 
        options: ["30% / 30%", "20% / 20%", "46% / 46%", "18% / 18%"], 
        answer: 3, 
        subject: "Soil Science"
    },
    { 
        id: 328, 
        questionEn: "DAP contains how much P2O5?", 
        questionHi: "डीएपी (DAP) में कितना P2O5 होता है?", 
        options: ["18% / 18%", "46% / 46%", "60% / 60%", "32% / 32%"], 
        answer: 1, 
        subject: "Soil Science"
    },
    { 
        id: 329, 
        questionEn: "Deficiency of Calcium in plants causes symptoms on?", 
        questionHi: "पौधों में कैल्शियम की कमी से लक्षण कहाँ दिखाई देते हैं?", 
        options: ["Lower leaves / निचली पत्तियां", "Roots / जड़ें", "Terminal buds / शीर्ष कलियाँ", "Middle leaves / मध्य पत्तियां"], 
        answer: 2, 
        subject: "Plant Physiology"
    },
    { 
        id: 330, 
        questionEn: "Deficiency of Nitrogen in plants causes?", 
        questionHi: "पौधों में नाइट्रोजन की कमी से क्या होता है?", 
        options: ["Leaf scorch / पत्ती झुलसना", "Yellowing of lower leaves / निचली पत्तियों का पीला पड़ना (Chlorosis)", "Interveinal chlorosis / अंतःशिरा क्लोरोसिस", "Yellowing of new leaves / नई पत्तियों का पीला पड़ना"], 
        answer: 1, 
        subject: "Plant Physiology"
    },
    { 
        id: 331, 
        questionEn: "Delinting of cotton seed is done by using?", 
        questionHi: "कपास के बीज की डिलिंटिंग (Delinting) किसके उपयोग से की जाती है?", 
        options: ["Hydrochloric acid / हाइड्रोक्लोरिक एसिड", "Citric acid / साइट्रिक एसिड", "Sulphuric acid / सल्फ्यूरिक एसिड (H2SO4)", "Nitric acid / नाइट्रिक एसिड"], 
        answer: 2, 
        subject: "Seed Technology"
    },
    { 
        id: 332, 
        questionEn: "Denitrification is a process of?", 
        questionHi: "विनाइट्रीकरण (Denitrification) किसकी प्रक्रिया है?", 
        options: ["Fixation of Nitrogen / नाइट्रोजन स्थिरीकरण", "Absorption of Nitrogen / नाइट्रोजन का अवशोषण", "Addition of Nitrogen / नाइट्रोजन का जुड़ाव", "Loss of Nitrogen / नाइट्रोजन की हानि"], 
        answer: 3, 
        subject: "Soil Science"
    },
    { 
        id: 333, 
        questionEn: "Depth of sowing for dwarf wheat is?", 
        questionHi: "बौने गेहूं की बुवाई की गहराई कितनी होती है?", 
        options: ["6-8 cm / 6-8 सेमी", "8-10 cm / 8-10 सेमी", "4-5 cm / 4-5 सेमी", "2-3 cm / 2-3 सेमी"], 
        answer: 2, 
        subject: "Agronomy"
    },
    { 
        id: 334, 
        questionEn: "Detasseling is done in which crop?", 
        questionHi: "डिटैसेलिंग (Detasseling) किस फसल में की जाती है?", 
        options: ["Maize / मक्का", "Wheat / गेहूं", "Sorghum / ज्वार", "Bajra / बाजरा"], 
        answer: 0, 
        subject: "Agronomy"
    },
    { 
        id: 335, 
        questionEn: "Directorate of Wheat Research (DWR) is located at?", 
        questionHi: "गेहूं अनुसंधान निदेशालय (DWR) कहाँ स्थित है?", 
        options: ["Pusa / पूसा", "Kanpur / कानपुर", "Karnal / करनाल", "Ludhiana / लुधियाना"], 
        answer: 2, 
        subject: "General Agriculture"
    },
    { 
        id: 336, 
        questionEn: "Disease caused by Zn deficiency in Rice is?", 
        questionHi: "चावल में जिंक (Zn) की कमी से कौन सा रोग होता है?", 
        options: ["Blight / झुलसा", "Tungro / टुंग्रो", "Khaira disease / खैरा रोग", "Blast / ब्लास्ट"], 
        answer: 2, 
        subject: "Plant Pathology"
    },
    { 
        id: 337, 
        questionEn: "Drip irrigation was developed in?", 
        questionHi: "ड्रिप सिंचाई (Drip irrigation) का विकास कहाँ हुआ था?", 
        options: ["Israel / इज़राइल", "USA / यूएसए", "India / भारत", "China / चीन"], 
        answer: 0, 
        subject: "Agronomy"
    },
    { 
        id: 338, 
        questionEn: "Dwarfness gene in Rice is?", 
        questionHi: "चावल में बौनापन जीन (Dwarfness gene) कौन सा है?", 
        options: ["Dee-Gee-Woo-Gen / डी-जी-वू-जेन", "Norin-10 / नोरिन-10", "Opaque-2 / ओपेक-2", "Tift-23A / टिफ्ट-23A"], 
        answer: 0, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 339, 
        questionEn: "Dwarfness gene in Wheat is?", 
        questionHi: "गेहूं में बौनापन जीन कौन सा है?", 
        options: ["Opaque-2 / ओपेक-2", "Norin-10 / नोरिन-10", "Rht / आरएचटी", "Dee-Gee-Woo-Gen / डी-जी-वू-जेन"], 
        answer: 1, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 340, 
        questionEn: "Earthing up is an important operation in?", 
        questionHi: "मिट्टी चढ़ाना (Earthing up) किसमें एक महत्वपूर्ण क्रिया है?", 
        options: ["Wheat / गेहूं", "Mustard / सरसों", "Sugarcane / गन्ना (and Potato)", "Rice / चावल"], 
        answer: 2, 
        subject: "Agronomy"
    },
    { 
        id: 341, 
        questionEn: "Edible part of Apple is?", 
        questionHi: "सेब का खाने योग्य भाग कौन सा है?", 
        options: ["Mesocarp / मेसोकार्प", "Endocarp / एंडोकार्प", "Aril / एरिल", "Thalamus / थैलेमस (Fleshy Thalamus)"], 
        answer: 3, 
        subject: "Horticulture"
    },
    { 
        id: 342, 
        questionEn: "Edible part of Coconut is?", 
        questionHi: "नारियल का खाने योग्य भाग कौन सा है?", 
        options: ["Pericarp / पेरिकार्प", "Endosperm / एंडोस्पर्म", "Epicarp / एपिकार्प", "Mesocarp / मेसोकार्प"], 
        answer: 1, 
        subject: "Horticulture"
    },
    { 
        id: 343, 
        questionEn: "Edible part of Litchi is?", 
        questionHi: "लीची का खाने योग्य भाग कौन सा है?", 
        options: ["Thalamus / थैलेमस", "Mesocarp / मेसोकार्प", "Fleshy Aril / मांसल एरिल", "Cotyledons / बीजपत्र"], 
        answer: 2, 
        subject: "Horticulture"
    },
    { 
        id: 344, 
        questionEn: "Edible part of Mango is?", 
        questionHi: "आम का खाने योग्य भाग कौन सा है?", 
        options: ["Epicarp / एपिकार्प", "Thalamus / थैलेमस", "Endocarp / एंडोकार्प", "Mesocarp / मेसोकार्प"], 
        answer: 3, 
        subject: "Horticulture"
    },
    { 
        id: 345, 
        questionEn: "Element involved in stomatal regulation is?", 
        questionHi: "रंध्र नियमन (stomatal regulation) में शामिल तत्व कौन सा है?", 
        options: ["Nitrogen / नाइट्रोजन", "Calcium / कैल्शियम", "Phosphorus / फास्फोरस", "Potassium / पोटेशियम (K)"], 
        answer: 3, 
        subject: "Plant Physiology"
    },
    { 
        id: 346, 
        questionEn: "Element required for oil synthesis in oilseeds?", 
        questionHi: "तिलहन में तेल संश्लेषण के लिए आवश्यक तत्व कौन सा है?", 
        options: ["Sulfur / सल्फर", "Potassium / पोटेशियम", "Zinc / जिंक", "Nitrogen / नाइट्रोजन"], 
        answer: 0, 
        subject: "Plant Physiology"
    },
    { 
        id: 347, 
        questionEn: "Elite seed is also known as?", 
        questionHi: "एलीट बीज (Elite seed) को और किस नाम से जाना जाता है?", 
        options: ["Breeder seed / प्रजनक बीज", "Nucleus seed / न्यूक्लियस बीज", "Foundation seed / आधार बीज", "Certified seed / प्रमाणित बीज"], 
        answer: 0, 
        subject: "Seed Technology"
    },
    { 
        id: 348, 
        questionEn: "Emasculation is the removal of?", 
        questionHi: "विपुंसन (Emasculation) किसको हटाना है?", 
        options: ["Anthers / परागकोष", "Stigma / वर्तिकाग्र", "Petals / पंखुड़ियां", "Sepals / बाह्यदल"], 
        answer: 0, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 349, 
        questionEn: "Enemy of enemy is called?", 
        questionHi: "शत्रु का शत्रु क्या कहलाता है?", 
        options: ["Host / मेजबान", "Parasite / परजीवी", "Predator / परभक्षी", "Friend / मित्र"], 
        answer: 3, 
        subject: "Entomology"
    },
    { 
        id: 350, 
        questionEn: "Ergot is a disease of?", 
        questionHi: "अरगट (Ergot) किसका रोग है?", 
        options: ["Maize / मक्का", "Bajra / बाजरा (Pearl millet)", "Rice / चावल", "Wheat / गेहूं"], 
        answer: 1, 
        subject: "Plant Pathology"
    },
    { 
        id: 351, 
        questionEn: "Essential element for energy transfer in plants is?", 
        questionHi: "पौधों में ऊर्जा स्थानांतरण के लिए आवश्यक तत्व कौन सा है?", 
        options: ["Phosphorus / फास्फोरस", "Potassium / पोटेशियम", "Nitrogen / नाइट्रोजन", "Magnesium / मैग्नीशियम"], 
        answer: 0, 
        subject: "Plant Physiology"
    },
    { 
        id: 352, 
        questionEn: "Example of C3 plant is?", 
        questionHi: "C3 पौधे का उदाहरण क्या है?", 
        options: ["Sugarcane / गन्ना", "Rice / चावल (Wheat, Soybean)", "Sorghum / ज्वार", "Maize / मक्का"], 
        answer: 1, 
        subject: "Botany"
    },
    { 
        id: 353, 
        questionEn: "Example of C4 plant is?", 
        questionHi: "C4 पौधे का उदाहरण क्या है?", 
        options: ["Wheat / गेहूं", "Barley / जौ", "Maize / मक्का (Sugarcane, Sorghum)", "Rice / चावल"], 
        answer: 2, 
        subject: "Botany"
    },
    { 
        id: 354, 
        questionEn: "Example of CAM plant is?", 
        questionHi: "CAM पौधे का उदाहरण क्या है?", 
        options: ["Maize / मक्का", "Wheat / गेहूं", "Rice / चावल", "Pineapple / अनानास (Cactus)"], 
        answer: 3, 
        subject: "Botany"
    },
    { 
        id: 355, 
        questionEn: "Example of Day Neutral Plant is?", 
        questionHi: "दिवस उदासीन पौधे (Day Neutral Plant) का उदाहरण क्या है?", 
        options: ["Rice / चावल", "Tomato / टमाटर (Sunflower, Cotton)", "Wheat / गेहूं", "Barley / जौ"], 
        answer: 1, 
        subject: "Botany"
    },
    { 
        id: 356, 
        questionEn: "Explosive flowering is related to?", 
        questionHi: "विस्फोटक पुष्पन (Explosive flowering) किससे संबंधित है?", 
        options: ["Cocoa / कोको", "Rubber / रबर", "Coffee / कॉफी", "Tea / चाय"], 
        answer: 2, 
        subject: "Horticulture"
    },
    { 
        id: 357, 
        questionEn: "Extension word is derived from?", 
        questionHi: "एक्सटेंशन (Extension) शब्द किस भाषा से लिया गया है?", 
        options: ["French / फ्रेंच", "Latin / लैटिन", "Greek / ग्रीक", "English / अंग्रेजी"], 
        answer: 1, 
        subject: "Extension Education"
    },
    { 
        id: 358, 
        questionEn: "Family of Cotton is?", 
        questionHi: "कपास का कुल (Family) कौन सा है?", 
        options: ["Gramineae / ग्रैमिनी", "Malvaceae / मालवेसी", "Solanaceae / सोलेनेसी", "Leguminosae / लेगुमिनोसी"], 
        answer: 1, 
        subject: "Botany"
    },
    { 
        id: 359, 
        questionEn: "Family of Mustard is?", 
        questionHi: "सरसों का कुल कौन सा है?", 
        options: ["Cruciferae / क्रूसीफेरी (Brassicaceae)", "Malvaceae / मालवेसी", "Solanaceae / सोलेनेसी", "Compositae / कंपोजिटी"], 
        answer: 0, 
        subject: "Botany"
    },
    { 
        id: 360, 
        questionEn: "Family of Rice is?", 
        questionHi: "चावल का कुल कौन सा है?", 
        options: ["Leguminosae / लेगुमिनोसी", "Malvaceae / मालवेसी", "Solanaceae / सोलेनेसी", "Gramineae / ग्रैमिनी (Poaceae)"], 
        answer: 3, 
        subject: "Botany"
    },
    { 
        id: 361, 
        questionEn: "FAO (Food and Agriculture Organization) HQ is at?", 
        questionHi: "FAO (खाद्य एवं कृषि संगठन) का मुख्यालय कहाँ है?", 
        options: ["Geneva / जिनेवा", "Paris / पेरिस", "Rome, Italy / रोम, इटली", "Washington DC / वाशिंगटन डीसी"], 
        answer: 2, 
        subject: "General Agriculture"
    },
    { 
        id: 362, 
        questionEn: "Father of Agronomy is?", 
        questionHi: "सस्य विज्ञान के जनक (Father of Agronomy) कौन हैं?", 
        options: ["Jethro Tull / जेथ्रो टुल", "MS Swaminathan / एमएस स्वामीनाथन", "Pietro de' Crescenzi / पिएत्रो डी' क्रेसेंज़ी", "Liebig / लिबिग"], 
        answer: 2, 
        subject: "Agronomy"
    },
    { 
        id: 363, 
        questionEn: "Father of Botany is?", 
        questionHi: "वनस्पति विज्ञान के जनक कौन हैं?", 
        options: ["Darwin / डार्विन", "Theophrastus / थियोफ्रेस्टस", "Aristotle / अरस्तू", "Linnaeus / लिनिअस"], 
        answer: 1, 
        subject: "Botany"
    },
    { 
        id: 364, 
        questionEn: "Father of Economics is?", 
        questionHi: "अर्थशास्त्र के जनक कौन हैं?", 
        options: ["Marshall / मार्शल", "Robbins / रॉबिंस", "Keynes / कीन्स", "Adam Smith / एडम स्मिथ"], 
        answer: 3, 
        subject: "Economics"
    },
    { 
        id: 365, 
        questionEn: "Father of Genetics is?", 
        questionHi: "आनुवंशिकी के जनक कौन हैं?", 
        options: ["Bateson / बेटसन", "Watson / वाटसन", "Morgan / मॉर्गन", "G.J. Mendel / जी.जे. मेंडल"], 
        answer: 3, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 366, 
        questionEn: "Father of Green Revolution in India is?", 
        questionHi: "भारत में हरित क्रांति के जनक कौन हैं?", 
        options: ["N.E. Borlaug / एन.ई. बोरलॉग", "M.S. Swaminathan / एम.एस. स्वामीनाथन", "B.P. Pal / बी.पी. पाल", "Verghese Kurien / वर्गीज कुरियन"], 
        answer: 1, 
        subject: "General Agriculture"
    },
    { 
        id: 367, 
        questionEn: "Father of Green Revolution in World is?", 
        questionHi: "विश्व में हरित क्रांति के जनक कौन हैं?", 
        options: ["Darwin / डार्विन", "N.E. Borlaug / एन.ई. बोरलॉग", "M.S. Swaminathan / एम.एस. स्वामीनाथन", "Mendel / मेंडल"], 
        answer: 1, 
        subject: "General Agriculture"
    },
    { 
        id: 368, 
        questionEn: "Father of Hybrid Rice is?", 
        questionHi: "संकर चावल (Hybrid Rice) के जनक कौन हैं?", 
        options: ["Yuan Longping / युआन लॉन्गपिंग", "Borlaug / बोरलॉग", "M.S. Swaminathan / एम.एस. स्वामीनाथन", "Gurdev Khush / गुरुदेव खुश"], 
        answer: 0, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 369, 
        questionEn: "Father of Microbiology is?", 
        questionHi: "सूक्ष्मजीव विज्ञान के जनक कौन हैं?", 
        options: ["Robert Koch / रॉबर्ट कोच", "Fleming / फ्लेमिंग", "Antonie van Leeuwenhoek / एंटनी वान लेवेनहोक", "Louis Pasteur / लुई पाश्चर"], 
        answer: 2, 
        subject: "Microbiology"
    },
    { 
        id: 370, 
        questionEn: "Father of Sociology is?", 
        questionHi: "समाजशास्त्र के जनक कौन हैं?", 
        options: ["Auguste Comte / अगस्ट कॉम्टे", "Spencer / स्पेंसर", "Durkheim / दुर्खीम", "Weber / वेबर"], 
        answer: 0, 
        subject: "Extension Education"
    },
    { 
        id: 371, 
        questionEn: "Father of Soil Science is?", 
        questionHi: "मृदा विज्ञान के जनक कौन हैं?", 
        options: ["Joffe / जोफ", "Jenny / जेनी", "Liebig / लिबिग", "V.V. Dokuchaev / वी.वी. डोकूचेव"], 
        answer: 3, 
        subject: "Soil Science"
    },
    { 
        id: 372, 
        questionEn: "Father of White Revolution in India is?", 
        questionHi: "भारत में श्वेत क्रांति के जनक कौन हैं?", 
        options: ["H.M. Dalaya / एच.एम. दलाया", "M.S. Swaminathan / एम.एस. स्वामीनाथन", "Amrita Patel / अमृता पटेल", "Verghese Kurien / वर्गीज कुरियन"], 
        answer: 3, 
        subject: "Animal Husbandry"
    },
    { 
        id: 373, 
        questionEn: "Fernery is a garden for?", 
        questionHi: "फर्नरी (Fernery) किसके लिए एक बगीचा है?", 
        options: ["Ferns / फर्न", "Roses / गुलाब", "Cactus / कैक्टस", "Orchids / ऑर्किड"], 
        answer: 0, 
        subject: "Horticulture"
    },
    { 
        id: 374, 
        questionEn: "First agricultural university in India was established at?", 
        questionHi: "भारत में पहला कृषि विश्वविद्यालय कहाँ स्थापित किया गया था?", 
        options: ["Ludhiana / लुधियाना", "Coimbatore / कोयंबटूर", "Pune / पुणे", "Pantnagar / पंतनगर (1960)"], 
        answer: 3, 
        subject: "Extension Education"
    },
    { 
        id: 375, 
        questionEn: "First Bank established in India was?", 
        questionHi: "भारत में स्थापित पहला बैंक कौन सा था?", 
        options: ["Bank of Hindustan / बैंक ऑफ हिंदुस्तान", "PNB / पीएनबी", "SBI / एसबीआई", "RBI / आरबीआई"], 
        answer: 0, 
        subject: "Economics"
    },
    { 
        id: 376, 
        questionEn: "First KVK was established at?", 
        questionHi: "पहला केवीके (KVK) कहाँ स्थापित किया गया था?", 
        options: ["Tamil Nadu / तमिलनाडु", "Bihar / बिहार", "Rajasthan / राजस्थान", "Pondicherry / पांडिचेरी (1974)"], 
        answer: 3, 
        subject: "Extension Education"
    },
    { 
        id: 377, 
        questionEn: "First man made cereal is?", 
        questionHi: "पहला मानव निर्मित अनाज कौन सा है?", 
        options: ["Pomato / पोमेटो", "Golden Rice / गोल्डन राइस", "Raphanobrassica / राफनोब्रैसिका", "Triticale / ट्रिटिकल"], 
        answer: 3, 
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 378, 
        questionEn: "First product of Urea hydrolysis is?", 
        questionHi: "यूरिया हाइड्रोलिसिस का पहला उत्पाद क्या है?", 
        options: ["Nitrite / नाइट्राइट", "Ammonia / अमोनिया", "Ammonium carbamate / अमोनियम कार्बामेट", "Nitrate / नाइट्रेट"], 
        answer: 2, 
        subject: "Soil Science"
    },
    { 
        id: 379, 
        questionEn: "Fish culture in water is called?", 
        questionHi: "पानी में मछली पालन को क्या कहा जाता है?", 
        options: ["Pisciculture / मत्स्य पालन (Aquaculture)", "Moriculture / शहतूत पालन", "Apiculture / मधुमक्खी पालन", "Sericulture / रेशम उत्पादन"], 
        answer: 0, 
        subject: "Fisheries"
    },
    { 
        id: 380, 
        questionEn: "Flower color of Mustard is?", 
        questionHi: "सरसों के फूल का रंग कैसा होता है?", 
        options: ["Pink / गुलाबी", "Blue / नीला", "White / सफेद", "Yellow / पीला"], 
        answer: 3, 
        subject: "Botany"
    },
    { 
        id: 381, 
        questionEn: "Foot and Mouth Disease (FMD) is caused by?", 
        questionHi: "खुरपका-मुंहपका रोग (FMD) किसके कारण होता है?", 
        options: ["Fungi / कवक", "Protozoa / प्रोटोजोआ", "Bacteria / जीवाणु", "Virus / विषाणु"], 
        answer: 3, 
        subject: "Animal Husbandry"
    },
    { 
        id: 382, 
        questionEn: "Force of attraction between similar molecules is?", 
        questionHi: "समान अणुओं के बीच आकर्षण बल क्या कहलाता है?", 
        options: ["Osmosis / परासरण", "Adhesion / आसंजन", "Tension / तनाव", "Cohesion / ससंजन"], 
        answer: 3, 
        subject: "Soil Science"
    },
    { 
        id: 383, 
        questionEn: "Force of attraction between dissimilar molecules is?", 
        questionHi: "असमान अणुओं के बीच आकर्षण बल क्या कहलाता है?", 
        options: ["Cohesion / ससंजन", "Adhesion / आसंजन", "Imbibition / अंतःशोषण", "Surface tension / पृष्ठ तनाव"], 
        answer: 1, 
        subject: "Soil Science"
    },
    { 
        id: 384, 
        questionEn: "Fruit type of Citrus is?", 
        questionHi: "सिट्रस (खट्टे फल) का फल प्रकार क्या है?", 
        options: ["Pome / पोम", "Hesperidium / हेस्पेरिडियम", "Drupe / ड्रूप", "Berry / बेरी"], 
        answer: 1, 
        subject: "Horticulture"
    },
    { 
        id: 385, 
        questionEn: "Fruit type of Mango is?", 
        questionHi: "आम का फल प्रकार क्या है?", 
        options: ["Berry / बेरी", "Drupe / ड्रूप", "Nut / नट", "Pome / पोम"], 
        answer: 1, 
        subject: "Horticulture"
    },
    { 
        id: 386, 
        questionEn: "Fruit type of Tomato is?", 
        questionHi: "टमाटर का फल प्रकार क्या है?", 
        options: ["Drupe / ड्रूप", "Capsule / कैप्सूल", "Pome / पोम", "Berry / बेरी"], 
        answer: 3, 
        subject: "Horticulture"
    },
    { 
        id: 387, 
        questionEn: "Fungicide used for seed treatment is?", 
        questionHi: "बीज उपचार के लिए प्रयुक्त कवकनाशी कौन सा है?", 
        options: ["2,4-D / 2,4-डी", "Glyphosate / ग्लाइफोसेट", "Thiram / थीरम (Captan)", "Malathion / मैलाथियान"], 
        answer: 2, 
        subject: "Plant Pathology"
    },
    { 
        id: 388, 
        questionEn: "Gall midge is a pest of?", 
        questionHi: "गॉल मिज (Gall midge) किसका कीट है?", 
        options: ["Sugarcane / गन्ना", "Wheat / गेहूं", "Cotton / कपास", "Rice / चावल"], 
        answer: 3, 
        subject: "Entomology"
    },
    { 
        id: 389, 
        questionEn: "Gestation period of Goat is?", 
        questionHi: "बकरी की गर्भकाल अवधि कितनी होती है?", 
        options: ["114 days / 114 दिन", "280 days / 280 दिन", "150 days / 150 दिन", "310 days / 310 दिन"], 
        answer: 2, 
        subject: "Animal Husbandry"
    },
    { 
        id: 390, 
        questionEn: "Gestation period of Sheep is?", 
        questionHi: "भेड़ की गर्भकाल अवधि कितनी होती है?", 
        options: ["150 days / 150 दिन", "310 days / 310 दिन", "280 days / 280 दिन", "114 days / 114 दिन"], 
        answer: 0, 
        subject: "Animal Husbandry"
    },
    { 
        id: 391, 
        questionEn: "Golden rice is rich in?", 
        questionHi: "गोल्डन राइस (Golden rice) किसमें समृद्ध है?", 
        options: ["Protein / प्रोटीन", "Vitamin C / विटामिन सी", "Vitamin A / विटामिन ए", "Iron / लोहा"], 
        answer: 2, 
        subject: "Biotechnology"
    },
    { 
        id: 392, 
        questionEn: "Grafting is successful in dicots because of?", 
        questionHi: "द्विबीजपत्री पौधों में ग्राफ्टिंग सफल क्यों होती है?", 
        options: ["Xylem / जाइलम", "Presence of Cambium / कैम्बियम की उपस्थिति", "Vascular bundles / संवहनी बंडल", "Phloem / फ्लोएम"], 
        answer: 1, 
        subject: "Horticulture"
    },
    { 
        id: 393, 
        questionEn: "Green revolution is related to?", 
        questionHi: "हरित क्रांति (Green revolution) किससे संबंधित है?", 
        options: ["Milk production / दुग्ध उत्पादन", "Fish production / मछली उत्पादन", "Oilseed production / तिलहन उत्पादन", "Food grain production / खाद्यान्न उत्पादन"], 
        answer: 3, 
        subject: "General Agriculture"
    },
    { 
        id: 394, 
        questionEn: "Plants neatly trimmed in the shape of animals/birds are called?", 
        questionHi: "जानवरों/पक्षियों के आकार में सफाई से काटे गए पौधों को क्या कहा जाता है?", 
        options: ["Edge / किनारा", "Topiaries / टोपिरी", "Bonsai / बोनसाई", "Hedge / बाड़"], 
        answer: 1, 
        subject: "Horticulture"
    },
    { 
        id: 395, 
        questionEn: "Spikes are superior quality cut flowers of?", 
        questionHi: "स्पाइक्स (Spikes) किसके उत्तम गुणवत्ता वाले कटे हुए फूल हैं?", 
        options: ["Jasmine / चमेली", "Rose / गुलाब", "Marigold / गेंदा", "Gladiolus / ग्लेडियोलस"], 
        answer: 3, 
        subject: "Horticulture"
    },
    { 
        id: 396, 
        questionEn: "Bio-control agents of water hyacinth are?", 
        questionHi: "जलकुंभी (Water hyacinth) के जैव-नियंत्रण एजेंट कौन से हैं?", 
        options: ["Chrysopa / क्राइसोपा", "Neochetina weevils / नियोचेटिना घुन", "Zygogramma / जाइगोग्रामा", "Trichogramma / ट्राइकोग्रामा"], 
        answer: 1, 
        subject: "Entomology"
    },
    { 
        id: 397, 
        questionEn: "Economic part of Orchids is?", 
        questionHi: "ऑर्किड (Orchids) का आर्थिक भाग कौन सा है?", 
        options: ["Spikes / स्पाइक्स (Flowers)", "Roots / जड़ें", "Leaves / पत्तियां", "Stem / तना"], 
        answer: 0, 
        subject: "Horticulture"
    },
    { 
        id: 398, 
        questionEn: "Which Indian states having maximum usage of herbicides?", 
        questionHi: "किन भारतीय राज्यों में शाकनाशी (herbicides) का सर्वाधिक उपयोग होता है?", 
        options: ["TN and Kerala / टीएन और केरल", "Punjab And Haryana / पंजाब और हरियाणा", "UP and Bihar / यूपी और बिहार", "MP and Rajasthan / एमपी और राजस्थान"], 
        answer: 1, 
        subject: "Agronomy"
    },
    { 
        id: 399, 
        questionEn: "Which is known as 'SILENT KILLERS' causing most extensive crop loss?", 
        questionHi: "किसे 'साइलेंट किलर्स' (Silent Killers) कहा जाता है जो सबसे व्यापक फसल हानि का कारण बनता है?", 
        options: ["Insects / कीड़े", "Weeds / खरपतवार", "Diseases / रोग", "Rats / चूहे"], 
        answer: 1, 
        subject: "Agronomy"
    },
    { 
        id: 400, 
        questionEn: "White Grubs are the larvae of?", 
        questionHi: "सफेद लट (White Grubs) किसके लार्वा हैं?", 
        options: ["Beetles / भृंग (Beetles)", "Butterflies / तितलियाँ", "Flies / मक्खियां", "Moths / पतंगे"], 
        answer: 0, 
        subject: "Entomology"
    },
    { 
        id: 401, 
        questionEn: "Maggots are the larvae of?", 
        questionHi: "मैगॉट (Maggots) किसके लार्वा हैं?", 
        options: ["Moths / पतंगे", "Flies / मक्खियां", "Butterflies / तितलियाँ", "Beetles / भृंग"], 
        answer: 1, 
        subject: "Entomology"
    },
    { 
        id: 402, 
        questionEn: "What are the planting materials for Banana?", 
        questionHi: "केले के लिए रोपण सामग्री (planting materials) क्या हैं?", 
        options: ["Cuttings / कलम", "Seeds / बीज", "Sword suckers / स्वॉर्ड सकर्स", "Tubers / कंद"], 
        answer: 2, 
        subject: "Horticulture"
    },
    { 
        id: 403, 
        questionEn: "What are the planting materials of Pineapple?", 
        questionHi: "अनानास की रोपण सामग्री क्या हैं?", 
        options: ["Suckers, Slips, Crown / सकर्स, स्लिप्स, क्राउन", "Seeds / बीज", "Buds / कलियाँ", "Grafts / ग्राफ्ट"], 
        answer: 0, 
        subject: "Horticulture"
    },
    { 
        id: 404, 
        questionEn: "Arid regions normally receive a rainfall of?", 
        questionHi: "शुष्क क्षेत्रों (Arid regions) में सामान्यतः कितनी वर्षा होती है?", 
        options: ["Less than 500 mm / 500 मिमी से कम", "500-750 mm / 500-750 मिमी", "750-1000 mm / 750-1000 मिमी", "More than 1000 mm / 1000 मिमी से अधिक"], 
        answer: 0, 
        subject: "Meteorology"
    },
    { 
        id: 405, 
        questionEn: "ARIS (Agricultural Research Information System) was established by?", 
        questionHi: "ARIS (कृषि अनुसंधान सूचना प्रणाली) किसके द्वारा स्थापित की गई थी?", 
        options: ["CSIR, 1998 / सीएसआईआर, 1998", "ICAR, 1995 / आईसीएआर, 1995", "IARI, 1990 / आईएआरआई, 1990", "NABARD, 2000 / नाबार्ड, 2000"], 
        answer: 1, 
        subject: "General Agriculture"
    },
    { 
        id: 406, 
        questionEn: "Arka Gaurav and Arka Mohini are varieties of?", 
        questionHi: "अरका गौरव और अरका मोहिनी किसकी किस्में हैं?", 
        options: ["Okras / भिंडी", "Brinjals / बैंगन", "Chillies / मिर्च", "Tomatoes / टमाटर"], 
        answer: 2, 
        subject: "Horticulture"
    },
    { 
        id: 407, 
        questionEn: "Arka Hans (Grape Variety) is a cross of?", 
        questionHi: "अरका हंस (अंगूर की किस्म) किसका संकर है?", 
        options: ["Anab-e-Shahi x Thompson Seedless / अनाब-ए-शाही x थॉम्पसन सीडलेस", "Gulabi x Bangalore Blue / गुलाबी x बैंगलोर ब्लू", "Bangalore Blue x Anab-e-Shahi / बैंगलोर ब्लू x अनाब-ए-शाही", "Beauty Seedless x Perlette / ब्यूटी सीडलेस x परलेट"], 
        answer: 2, 
        subject: "Horticulture"
    }
    ];

    window.quizData = window.quizData.concat(data);
})();

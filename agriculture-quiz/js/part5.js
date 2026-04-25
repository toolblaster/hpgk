(function() {
    const data = [
    { 
        id: 408, 
        questionEn: "Golden Revolution is related to?", 
        questionHi: "स्वर्ण क्रांति (Golden Revolution) किससे संबंधित है?", 
        options: ["Eggs / अंडे", "Fish / मछली", "Oilseeds / तिलहन", "Fruits and Honey / फल और शहद"], 
        answer: 3,
        subject: "General Agriculture"
    },
    { 
        id: 409, 
        questionEn: "Silver Revolution is related to?", 
        questionHi: "रजत क्रांति (Silver Revolution) किससे संबंधित है?", 
        options: ["Egg/Poultry / अंडा/मुर्गी पालन", "Potato / आलू", "Milk / दूध", "Cotton / कपास"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 410, 
        questionEn: "Round Revolution is associated with?", 
        questionHi: "गोल क्रांति (Round Revolution) किससे संबंधित है?", 
        options: ["Egg / अंडा", "Tomato / टमाटर", "Potato / आलू", "Onion / प्याज"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 411, 
        questionEn: "Which buffalo breed has the highest fat percentage in milk?", 
        questionHi: "किस भैंस की नस्ल के दूध में वसा (fat) का प्रतिशत सबसे अधिक होता है?", 
        options: ["Murrah / मुर्रा", "Bhadawari / भदावरी", "Surti / सुरती", "Mehsana / मेहसाणा"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 412, 
        questionEn: "Which is the heaviest breed of Buffalo?", 
        questionHi: "भैंस की सबसे भारी नस्ल कौन सी है?", 
        options: ["Nili-Ravi / नीली-रावी", "Surti / सुरती", "Jaffrabadi / जाफराबादी", "Murrah / मुर्रा"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 413, 
        questionEn: "Zero Tillage system was first started in?", 
        questionHi: "शून्य जुताई (Zero Tillage) प्रणाली सबसे पहले कहाँ शुरू की गई थी?", 
        options: ["India / भारत", "China / चीन", "UK / यूके", "USA / यूएसए"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 414, 
        questionEn: "The term 'Evergreen Revolution' was given by?", 
        questionHi: "'सदाबहार क्रांति' (Evergreen Revolution) शब्द किसके द्वारा दिया गया था?", 
        options: ["M.S. Swaminathan / एम.एस. स्वामीनाथन", "Dr. Lalji Singh / डॉ. लालजी सिंह", "Verghese Kurien / वर्गीज कुरियन", "N.E. Borlaug / एन.ई. बोरलॉग"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 415, 
        questionEn: "Which instrument is used to measure soil moisture tension?", 
        questionHi: "मृदा नमी तनाव (soil moisture tension) मापने के लिए किस यंत्र का उपयोग किया जाता है?", 
        options: ["Lysimeter / लाइसीमीटर", "Hygrometer / हाइग्रोमीटर", "Tensiometer / टेन्सियोमीटर", "Pycnometer / पाइक्नोमीटर"], 
        answer: 2,
        subject: "Soil Science"
    },
    { 
        id: 416, 
        questionEn: "Central Institute of Agricultural Engineering (CIAE) is located at?", 
        questionHi: "केंद्रीय कृषि अभियांत्रिकी संस्थान (CIAE) कहाँ स्थित है?", 
        options: ["Ludhiana / लुधियाना", "Bhopal / भोपाल", "Hyderabad / हैदराबाद", "New Delhi / नई दिल्ली"], 
        answer: 1,
        subject: "Agricultural Engineering"
    },
    { 
        id: 417, 
        questionEn: "National Dairy Research Institute (NDRI) is located at?", 
        questionHi: "राष्ट्रीय डेयरी अनुसंधान संस्थान (NDRI) कहाँ स्थित है?", 
        options: ["Karnal / करनाल", "Izatnagar / इज्जतनगर", "Anand / आनंद", "Hisar / हिसार"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 418, 
        questionEn: "Indian Veterinary Research Institute (IVRI) is located at?", 
        questionHi: "भारतीय पशु चिकित्सा अनुसंधान संस्थान (IVRI) कहाँ स्थित है?", 
        options: ["Mathura / मथुरा", "Mukteshwar / मुक्तेश्वर", "Chennai / चेन्नई", "Izatnagar / इज्जतनगर"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 419, 
        questionEn: "Which gas is released from paddy fields?", 
        questionHi: "धान के खेतों से कौन सी गैस निकलती है?", 
        options: ["Carbon Dioxide / कार्बन डाइऑक्साइड", "Nitrous Oxide / नाइट्रस ऑक्साइड", "Sulphur Dioxide / सल्फर डाइऑक्साइड", "Methane / मीथेन (CH4)"], 
        answer: 3,
        subject: "Environmental Science"
    },
    { 
        id: 420, 
        questionEn: "Khaira disease of rice is controlled by spraying?", 
        questionHi: "चावल के खैरा रोग (Khaira disease) को किसके छिड़काव से नियंत्रित किया जाता है?", 
        options: ["Copper Sulphate / कॉपर सल्फेट", "Zinc Sulphate / जिंक सल्फेट", "Ferrous Sulphate / फेरस सल्फेट", "Borax / बोरेक्स"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 421, 
        questionEn: "Which crop is known as 'Camel Crop'?", 
        questionHi: "किस फसल को 'ऊंट फसल' (Camel Crop) कहा जाता है?", 
        options: ["Sorghum / ज्वार", "Ragi / रागी", "Maize / मक्का", "Bajra / बाजरा"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 422, 
        questionEn: "Which crop is known as 'King of Cereals'?", 
        questionHi: "अनाजों का राजा (King of Cereals) किस फसल को कहा जाता है?", 
        options: ["Barley / जौ", "Rice / चावल", "Wheat / गेहूं", "Maize / मक्का"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 423, 
        questionEn: "Which crop is known as 'Queen of Cereals'?", 
        questionHi: "अनाजों की रानी (Queen of Cereals) किस फसल को कहा जाता है?", 
        options: ["Wheat / गेहूं", "Oat / जई", "Rice / चावल", "Maize / मक्का"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 424, 
        questionEn: "Which crop is known as 'King of Coarse Cereals'?", 
        questionHi: "मोटे अनाजों का राजा (King of Coarse Cereals) किसे कहा जाता है?", 
        options: ["Ragi / रागी", "Sorghum / ज्वार", "Bajra / बाजरा", "Maize / मक्का"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 425, 
        questionEn: "Which crop is known as 'Poor Man's Meat'?", 
        questionHi: "'गरीबों का मांस' (Poor Man's Meat) किस फसल को कहा जाता है?", 
        options: ["Lentil / मसूर", "Soybean / सोयाबीन", "Pea / मटर", "Gram / चना"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 426, 
        questionEn: "Gummosis is a major problem in?", 
        questionHi: "गमोसिस (Gummosis) किसमें एक प्रमुख समस्या है?", 
        options: ["Mango / आम", "Apple / सेब", "Citrus / नींबू वर्गीय", "Guava / अमरूद"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 427, 
        questionEn: "Ultra-High Density Planting (UHDP) is common in?", 
        questionHi: "अति-उच्च घनत्व रोपण (UHDP) किसमें आम है?", 
        options: ["Guava / अमरूद (Meadow Orcharding)", "Banana / केला", "Mango / आम", "Papaya / पपीता"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 428, 
        questionEn: "Pungency in Onion is due to?", 
        questionHi: "प्याज में तीखापन (Pungency) किसके कारण होता है?", 
        options: ["Diallyl Disulphide / डायलील डाइसल्फाइड", "Capsaicin / कैप्साइसिन", "Solanine / सोलानिन", "Allyl Propyl Disulphide / एलील प्रोपाइल डाइसल्फाइड"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 429, 
        questionEn: "Pungency in Garlic is due to?", 
        questionHi: "लहसुन में तीखापन किसके कारण होता है?", 
        options: ["Allicin / एलीसिन", "Diallyl Disulphide / डायलील डाइसल्फाइड", "Curcumin / करक्यूमिन", "Allyl Propyl Disulphide / एलील प्रोपाइल डाइसल्फाइड"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 430, 
        questionEn: "Red color in Chili is due to?", 
        questionHi: "मिर्च में लाल रंग किसके कारण होता है?", 
        options: ["Anthocyanin / एंथोसायनिन", "Capsaicin / कैप्साइसिन", "Capsanthin / कैप्सैन्थिन", "Lycopene / लाइकोपीन"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 431, 
        questionEn: "Which spice is known as 'Queen of Spices'?", 
        questionHi: "'मसालों की रानी' (Queen of Spices) किसे कहा जाता है?", 
        options: ["Black Pepper / काली मिर्च", "Cardamom / इलायची", "Clove / लौंग", "Cinnamon / दालचीनी"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 432, 
        questionEn: "Which spice is known as 'King of Spices'?", 
        questionHi: "'मसालों का राजा' (King of Spices) किसे कहा जाता है?", 
        options: ["Black Pepper / काली मिर्च", "Ginger / अदरक", "Turmeric / हल्दी", "Cardamom / इलायची"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 433, 
        questionEn: "Which fruit is known as 'King of Fruits'?", 
        questionHi: "'फलों का राजा' (King of Fruits) किसे कहा जाता है?", 
        options: ["Mango / आम", "Apple / सेब", "Banana / केला", "Orange / संतरा"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 434, 
        questionEn: "Which vegetable is known as 'Poor Man's Friend'?", 
        questionHi: "'गरीब का दोस्त' (Poor Man's Friend) किस सब्जी को कहा जाता है?", 
        options: ["Onion / प्याज", "Tomato / टमाटर", "Potato / आलू", "Brinjal / बैंगन"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 435, 
        questionEn: "Which flower is known as 'King of Flowers'?", 
        questionHi: "'फूलों का राजा' (King of Flowers) किसे कहा जाता है?", 
        options: ["Jasmine / चमेली", "Rose / गुलाब", "Marigold / गेंदा", "Lotus / कमल"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 436, 
        questionEn: "Which crop is known as 'King of Fodder crops'?", 
        questionHi: "'चारा फसलों का राजा' (King of Fodder) किसे कहा जाता है?", 
        options: ["Napier / नेपियर", "Lucerne / ल्यूसन", "Sorghum / ज्वार", "Berseem / बरसीम"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 437, 
        questionEn: "Which crop is known as 'Queen of Fodder crops'?", 
        questionHi: "'चारा फसलों की रानी' (Queen of Fodder) किसे कहा जाता है?", 
        options: ["Lucerne / ल्यूसन", "Berseem / बरसीम", "Cowpea / लोबिया", "Oat / जई"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 438, 
        questionEn: "Which weed is known as 'King of Weeds'?", 
        questionHi: "'खरपतवारों का राजा' (King of Weeds) किसे कहा जाता है?", 
        options: ["Congress grass / गाजर घास (Parthenium)", "Water hyacinth / जलकुंभी", "Doob grass / दूब घास", "Motha / मोथा"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 439, 
        questionEn: "Pedology is the study of?", 
        questionHi: "पेडोलॉजी (Pedology) किसका अध्ययन है?", 
        options: ["Minerals / खनिज", "Rocks / चट्टानें", "Soil and plant relation / मृदा और पौधे का संबंध", "Soil origin and classification / मृदा उत्पत्ति और वर्गीकरण"], 
        answer: 3,
        subject: "Soil Science"
    },
    { 
        id: 440, 
        questionEn: "Edaphology is the study of?", 
        questionHi: "एडेफोलॉजी (Edaphology) किसका अध्ययन है?", 
        options: ["Soil in relation to plant growth / पौधों की वृद्धि के संबंध में मिट्टी", "Soil classification / मृदा वर्गीकरण", "Rocks / चट्टानें", "Soil genesis / मृदा उत्पत्ति"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 441, 
        questionEn: "Olericulture is the branch of agriculture dealing with?", 
        questionHi: "ओलेरीकल्चर (Olericulture) कृषि की वह शाखा है जो किससे संबंधित है?", 
        options: ["Flowers / फूल", "Vegetables / सब्जियां", "Fruits / फल", "Medicinal plants / औषधीय पौधे"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 442, 
        questionEn: "Pomology is the branch of agriculture dealing with?", 
        questionHi: "पोमोलॉजी (Pomology) कृषि की वह शाखा है जो किससे संबंधित है?", 
        options: ["Vegetables / सब्जियां", "Fruits / फल", "Forests / वन", "Flowers / फूल"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 443, 
        questionEn: "Floriculture is the branch of agriculture dealing with?", 
        questionHi: "फ्लोरिकल्चर (Floriculture) कृषि की वह शाखा है जो किससे संबंधित है?", 
        options: ["Fruits / फल", "Vegetables / सब्जियां", "Flowers / फूल", "Spices / मसाले"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 444, 
        questionEn: "World Environment Day is celebrated on?", 
        questionHi: "विश्व पर्यावरण दिवस (World Environment Day) कब मनाया जाता है?", 
        options: ["22nd April / 22 अप्रैल", "16th October / 16 अक्टूबर", "5th June / 5 जून", "23rd December / 23 दिसंबर"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 445, 
        questionEn: "National Farmer's Day (Kisan Diwas) is celebrated on?", 
        questionHi: "राष्ट्रीय किसान दिवस (Kisan Diwas) कब मनाया जाता है?", 
        options: ["5th June / 5 जून", "1st July / 1 जुलाई", "16th October / 16 अक्टूबर", "23rd December / 23 दिसंबर"], 
        answer: 3,
        subject: "General Agriculture"
    },
    { 
        id: 446, 
        questionEn: "NABARD was established in which year?", 
        questionHi: "नाबार्ड (NABARD) की स्थापना किस वर्ष हुई थी?", 
        options: ["1982", "1975", "1969", "1995"], 
        answer: 0,
        subject: "Economics"
    },
    { 
        id: 447, 
        questionEn: "World Trade Organization (WTO) was established in?", 
        questionHi: "विश्व व्यापार संगठन (WTO) की स्थापना कब हुई थी?", 
        options: ["1947", "1991", "2000", "1995"], 
        answer: 3,
        subject: "Economics"
    },
    { 
        id: 448, 
        questionEn: "Which was the first hybrid variety of Cotton?", 
        questionHi: "कपास की पहली संकर (hybrid) किस्म कौन सी थी?", 
        options: ["H-4", "Varalaxmi / वरलक्ष्मी", "Sujata / सुजाता", "DCH-32"], 
        answer: 0,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 449, 
        questionEn: "Which was the first hybrid variety of Maize released in India?", 
        questionHi: "भारत में जारी मक्का की पहली संकर किस्म कौन सी थी?", 
        options: ["Ganga-1", "Jawahar / जवाहर", "Kisan / किसान", "Vikram / विक्रम"], 
        answer: 0,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 450, 
        questionEn: "Which crop has the largest cultivated area in India?", 
        questionHi: "भारत में सबसे बड़े खेती वाले क्षेत्र में कौन सी फसल उगाई जाती है?", 
        options: ["Wheat / गेहूं", "Rice / चावल", "Cotton / कपास", "Maize / मक्का"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 451, 
        questionEn: "Which state is known as the 'Spice Garden of India'?", 
        questionHi: "किस राज्य को 'भारत का मसाला उद्यान' (Spice Garden of India) कहा जाता है?", 
        options: ["Kerala / केरल", "Karnataka / कर्नाटक", "Andhra Pradesh / आंध्र प्रदेश", "Tamil Nadu / तमिलनाडु"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 452, 
        questionEn: "Which state is known as the 'Sugar Bowl of India'?", 
        questionHi: "किस राज्य को 'भारत का चीनी का कटोरा' (Sugar Bowl of India) कहा जाता है?", 
        options: ["Maharashtra / महाराष्ट्र", "Punjab / पंजाब", "Uttar Pradesh / उत्तर प्रदेश", "Haryana / हरियाणा"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 453, 
        questionEn: "Which state is known as the 'Egg Bowl of Asia'?", 
        questionHi: "किस राज्य को 'एशिया का अंडा कटोरा' (Egg Bowl of Asia) कहा जाता है?", 
        options: ["Andhra Pradesh / आंध्र प्रदेश", "West Bengal / पश्चिम बंगाल", "Tamil Nadu / तमिलनाडु", "Punjab / पंजाब"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 454, 
        questionEn: "Which crop consumes the maximum amount of pesticides in India?", 
        questionHi: "भारत में किस फसल में कीटनाशकों (pesticides) का सर्वाधिक उपयोग होता है?", 
        options: ["Wheat / गेहूं", "Cotton / कपास", "Rice / चावल", "Vegetables / सब्जियां"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 455, 
        questionEn: "The true stomach of ruminant animals is called?", 
        questionHi: "जुगाली करने वाले जानवरों के असली पेट (true stomach) को क्या कहा जाता है?", 
        options: ["Reticulum / रेटिकुलम", "Omasum / ओमेसम", "Rumen / रूमेन", "Abomasum / एबोमेसम"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 456, 
        questionEn: "The act of mating in Sheep is called?", 
        questionHi: "भेड़ में संभोग (mating) की क्रिया को क्या कहा जाता है?", 
        options: ["Tupping / टपिंग", "Coupling / कपलिंग", "Covering / कवरिंग", "Serving / सर्विंग"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 457, 
        questionEn: "The act of mating in Goat is called?", 
        questionHi: "बकरी में संभोग (mating) की क्रिया को क्या कहा जाता है?", 
        options: ["Tupping / टपिंग", "Farrowing / फैरोइंग", "Serving / सर्विंग", "Kidding / किडिंग"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 458, 
        questionEn: "Meat of Goat is known as?", 
        questionHi: "बकरी के मांस को किस नाम से जाना जाता है?", 
        options: ["Mutton / मटन", "Chevon / चेवन", "Pork / पोर्क", "Beef / बीफ"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 459, 
        questionEn: "Meat of Buffalo is known as?", 
        questionHi: "भैंस के मांस को किस नाम से जाना जाता है?", 
        options: ["Buffen / बफेन", "Beef / बीफ", "Cara-beef / कारा-बीफ", "Mutton / मटन"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 460, 
        questionEn: "Meat of Pig is known as?", 
        questionHi: "सुअर के मांस को किस नाम से जाना जाता है?", 
        options: ["Pork / पोर्क", "Ham / हैम", "Bacon / बेकन", "Chevon / चेवन"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 461, 
        questionEn: "Male inflorescence of Maize is known as?", 
        questionHi: "मक्का के नर पुष्पक्रम (Male inflorescence) को किस नाम से जाना जाता है?", 
        options: ["Cob / कोब", "Tassel / टैसल", "Silk / सिल्क", "Ear / ईयर"], 
        answer: 1,
        subject: "Botany"
    },
    { 
        id: 462, 
        questionEn: "Female inflorescence of Maize is known as?", 
        questionHi: "मक्का के मादा पुष्पक्रम (Female inflorescence) को किस नाम से जाना जाता है?", 
        options: ["Panicle / पैनिकल्स", "Spike / स्पाइक", "Silk / सिल्क", "Tassel / टैसल"], 
        answer: 2,
        subject: "Botany"
    },
    { 
        id: 463, 
        questionEn: "Which element is essential for pollen germination?", 
        questionHi: "पराग अंकुरण (pollen germination) के लिए कौन सा तत्व आवश्यक है?", 
        options: ["Zinc / जस्ता", "Magnesium / मैग्नीशियम", "Calcium / कैल्शियम", "Boron / बोरॉन"], 
        answer: 3,
        subject: "Plant Physiology"
    },
    { 
        id: 464, 
        questionEn: "Which element is a central component of Chlorophyll?", 
        questionHi: "क्लोरोफिल (Chlorophyll) का केंद्रीय घटक कौन सा तत्व है?", 
        options: ["Magnesium / मैग्नीशियम", "Iron / लोहा", "Manganese / मैंगनीज", "Nitrogen / नाइट्रोजन"], 
        answer: 0,
        subject: "Plant Physiology"
    },
    { 
        id: 465, 
        questionEn: "Which element is essential for Nitrogen Fixation?", 
        questionHi: "नाइट्रोजन स्थिरीकरण (Nitrogen Fixation) के लिए कौन सा तत्व आवश्यक है?", 
        options: ["Zinc / जस्ता", "Molybdenum / मोलिब्डेनम", "Boron / बोरॉन", "Copper / तांबा"], 
        answer: 1,
        subject: "Plant Physiology"
    },
    { 
        id: 466, 
        questionEn: "Which element imparts disease resistance in plants?", 
        questionHi: "कौन सा तत्व पौधों में रोग प्रतिरोधक क्षमता (disease resistance) प्रदान करता है?", 
        options: ["Potassium / पोटेशियम", "Calcium / कैल्शियम", "Phosphorus / फास्फोरस", "Nitrogen / नाइट्रोजन"], 
        answer: 0,
        subject: "Plant Physiology"
    },
    { 
        id: 467, 
        questionEn: "'White Bud' in Maize is caused by deficiency of?", 
        questionHi: "मक्का में 'सफेद कली' (White Bud) किसकी कमी से होती है?", 
        options: ["Iron / लोहा", "Boron / बोरॉन", "Zinc / जस्ता", "Magnesium / मैग्नीशियम"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 468, 
        questionEn: "'Whip tail' of Cauliflower is caused by deficiency of?", 
        questionHi: "फूलगोभी का 'व्हिप टेल' (Whip tail) रोग किसकी कमी से होता है?", 
        options: ["Nitrogen / नाइट्रोजन", "Molybdenum / मोलिब्डेनम", "Calcium / कैल्शियम", "Boron / बोरॉन"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 469, 
        questionEn: "'Hollow Heart' of Potato is caused by?", 
        questionHi: "आलू का 'हollow Heart' रोग किसके कारण होता है?", 
        options: ["Excess Nitrogen/Moisture / अतिरिक्त नाइट्रोजन/नमी", "Boron deficiency / बोरॉन की कमी", "Calcium deficiency / कैल्शियम की कमी", "Virus / विषाणु"], 
        answer: 0,
        subject: "Plant Pathology"
    },
    { 
        id: 470, 
        questionEn: "Fruit cracking is generally caused by deficiency of?", 
        questionHi: "फलों का फटना (Fruit cracking) आमतौर पर किसकी कमी से होता है?", 
        options: ["Zinc / जस्ता", "Boron / बोरॉन", "Calcium / कैल्शियम", "Potassium / पोटेशियम"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 471, 
        questionEn: "'Little Leaf' of Brinjal is caused by?", 
        questionHi: "बैंगन का 'छोटा पत्ता' (Little Leaf) रोग किसके कारण होता है?", 
        options: ["Fungi / कवक", "Mycoplasma / माइकोप्लाज्मा (Phytoplasma)", "Virus / विषाणु", "Bacteria / जीवाणु"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 472, 
        questionEn: "'Citrus Greening' is caused by?", 
        questionHi: "'सिट्रस ग्रीनिंग' (Citrus Greening) किसके कारण होता है?", 
        options: ["Virus / विषाणु", "Nematode / सूत्रकृमि", "Bacteria / जीवाणु (Candidatus)", "Fungi / कवक"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 473, 
        questionEn: "'Bunchy Top' of Banana is caused by?", 
        questionHi: "केले का 'बंची टॉप' (Bunchy Top) रोग किसके कारण होता है?", 
        options: ["Virus / विषाणु", "Bacteria / जीवाणु", "Mycoplasma / माइकोप्लाज्मा", "Fungi / कवक"], 
        answer: 0,
        subject: "Plant Pathology"
    },
    { 
        id: 474, 
        questionEn: "Potato Spindle Tuber disease is caused by?", 
        questionHi: "आलू का स्पिंडल ट्यूबर (Spindle Tuber) रोग किसके कारण होता है?", 
        options: ["Bacteria / जीवाणु", "Prion / प्रियन", "Virus / विषाणु", "Viroid / वायरोइड"], 
        answer: 3,
        subject: "Plant Pathology"
    },
    { 
        id: 475, 
        questionEn: "First Regional Rural Bank (RRB) was established in?", 
        questionHi: "पहला क्षेत्रीय ग्रामीण बैंक (RRB) कब स्थापित किया गया था?", 
        options: ["1975", "1969", "1991", "1982"], 
        answer: 0,
        subject: "Economics"
    },
    { 
        id: 476, 
        questionEn: "TRYSEM scheme was started in which year?", 
        questionHi: "TRYSEM योजना किस वर्ष शुरू की गई थी?", 
        options: ["1985", "1992", "1999", "1979"], 
        answer: 3,
        subject: "Extension Education"
    },
    { 
        id: 477, 
        questionEn: "Kisan Credit Card (KCC) scheme was introduced in?", 
        questionHi: "किसान क्रेडिट कार्ड (KCC) योजना कब शुरू की गई थी?", 
        options: ["1998", "1991", "2004", "2010"], 
        answer: 0,
        subject: "Economics"
    },
    { 
        id: 478, 
        questionEn: "Soil Health Card scheme was launched in?", 
        questionHi: "मृदा स्वास्थ्य कार्ड (Soil Health Card) योजना कब शुरू की गई थी?", 
        options: ["2018", "2014", "2016", "2015"], 
        answer: 3,
        subject: "Extension Education"
    },
    { 
        id: 479, 
        questionEn: "Under PM-KISAN, farmers get an annual support of?", 
        questionHi: "PM-KISAN के तहत, किसानों को कितनी वार्षिक सहायता मिलती है?", 
        options: ["Rs. 5000", "Rs. 12000", "Rs. 6000", "Rs. 10000"], 
        answer: 2,
        subject: "Economics"
    },
    { 
        id: 480, 
        questionEn: "What is the main benefit of Neem Coated Urea?", 
        questionHi: "नीम लेपित यूरिया (Neem Coated Urea) का मुख्य लाभ क्या है?", 
        options: ["Slow release of Nitrogen / नाइट्रोजन की धीमी रिहाई", "Decreases cost / लागत कम करता है", "Kills pests / कीटों को मारता है", "Increases Nitrogen content / नाइट्रोजन सामग्री बढ़ाता है"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 481, 
        questionEn: "Golden Rice is genetically modified to produce?", 
        questionHi: "गोल्डन राइस को क्या उत्पादन करने के लिए आनुवंशिक रूप से संशोधित किया गया है?", 
        options: ["Protein / प्रोटीन", "Vitamin C / विटामिन सी", "Iron / लोहा", "Vitamin A / विटामिन ए (Beta-carotene)"], 
        answer: 3,
        subject: "Biotechnology"
    },
    { 
        id: 482, 
        questionEn: "The concept of 'Super Rice' was developed by?", 
        questionHi: "'सुपर राइस' (Super Rice) की अवधारणा किसने विकसित की?", 
        options: ["Gurdev Khush / गुरुदेव खुश", "Yuan Longping / युआन लॉन्गपिंग", "Borlaug / बोरलॉग", "M.S. Swaminathan / एम.एस. स्वामीनाथन"], 
        answer: 0,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 483, 
        questionEn: "Bt Cotton is developed to provide resistance against?", 
        questionHi: "बीटी कपास (Bt Cotton) को किसके खिलाफ प्रतिरोध प्रदान करने के लिए विकसित किया गया है?", 
        options: ["Nematodes / सूत्रकृमि", "Bollworms / बॉलवर्म", "Diseases / रोग", "Sucking pests / चूसने वाले कीट"], 
        answer: 1,
        subject: "Biotechnology"
    },
    { 
        id: 484, 
        questionEn: "Azotobacter is an example of?", 
        questionHi: "एज़ोटोबैक्टर (Azotobacter) किसका उदाहरण है?", 
        options: ["Free living Nitrogen fixer / मुक्त रहने वाला नाइट्रोजन फिक्सर", "P-Mobilizer / पी-मोबिलाइज़र", "P-Solubilizer / पी-घुलनशील", "Symbiotic Nitrogen fixer / सहजीवी नाइट्रोजन फिक्सर"], 
        answer: 0,
        subject: "Microbiology"
    },
    { 
        id: 485, 
        questionEn: "VAM (Vesicular Arbuscular Mycorrhiza) helps in uptake of?", 
        questionHi: "VAM (वेसिकुलर आर्बुस्कुलर माइकोराइजा) किसके अवशोषण में मदद करता है?", 
        options: ["Phosphorus / फास्फोरस", "Potassium / पोटेशियम", "Nitrogen / नाइट्रोजन", "Sulphur / सल्फर"], 
        answer: 0,
        subject: "Microbiology"
    },
    { 
        id: 486, 
        questionEn: "Which is the major source of Sugar production in the World?", 
        questionHi: "विश्व में चीनी उत्पादन का प्रमुख स्रोत क्या है?", 
        options: ["Sugarbeet / चुकंदर", "Sugarcane / गन्ना", "Palm / ताड़", "Coconut / नारियल"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 487, 
        questionEn: "First cloned sheep 'Dolly' was developed by?", 
        questionHi: "पहली क्लोन भेड़ 'डॉली' (Dolly) किसके द्वारा विकसित की गई थी?", 
        options: ["Khorana / खुराना", "Watson / वाटसन", "Ian Wilmut / इयान विल्मुट", "Mendel / मेंडल"], 
        answer: 2,
        subject: "Biotechnology"
    },
    { 
        id: 488, 
        questionEn: "Which nutrient is known as 'Traffic Policeman' in plants?", 
        questionHi: "पौधों में 'ट्रैफिक पुलिसमैन' (Traffic Policeman) के रूप में किस पोषक तत्व को जाना जाता है?", 
        options: ["Potassium / पोटेशियम", "Nitrogen / नाइट्रोजन", "Calcium / कैल्शियम", "Phosphorus / फास्फोरस"], 
        answer: 0,
        subject: "Plant Physiology"
    },
    { 
        id: 489, 
        questionEn: "Which element is essential for oil content in oilseeds?", 
        questionHi: "तिलहन में तेल की मात्रा के लिए कौन सा तत्व आवश्यक है?", 
        options: ["Boron / बोरॉन", "Sulfur / सल्फर", "Iron / लोहा", "Zinc / जस्ता"], 
        answer: 1,
        subject: "Plant Physiology"
    },
    { 
        id: 490, 
        questionEn: "'Buttoning' in Cauliflower is caused by deficiency of?", 
        questionHi: "फूलगोभी में 'बटनिंग' (Buttoning) किसकी कमी से होती है?", 
        options: ["Nitrogen / नाइट्रोजन", "Potassium / पोटेशियम", "Molybdenum / मोलिब्डेनम", "Boron / बोरॉन"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 491, 
        questionEn: "Richest source of Iron among fruits is?", 
        questionHi: "फलों में लोहे (Iron) का सबसे समृद्ध स्रोत कौन सा है?", 
        options: ["Apple / सेब", "Walnut / अखरोट", "Date Palm / खजूर", "Dry Karonda / सूखा करोंदा"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 492, 
        questionEn: "Richest source of Vitamin C among fruits is?", 
        questionHi: "फलों में विटामिन सी का सबसे समृद्ध स्रोत कौन सा है?", 
        options: ["Aonla / आंवला", "Guava / अमरूद", "Barbados Cherry / बारबाडोस चेरी", "Citrus / नींबू"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 493, 
        questionEn: "Which fruit is known as 'Poor Man's Fruit'?", 
        questionHi: "'गरीब का फल' (Poor Man's Fruit) किसे कहा जाता है?", 
        options: ["Custard Apple / सीताफल", "Ber / बेर", "Jackfruit / कटहल", "Banana / केला"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 494, 
        questionEn: "Guava is also known as?", 
        questionHi: "अमरूद (Guava) को और किस नाम से जाना जाता है?", 
        options: ["Apple of Tropics / उष्णकटिबंधीय सेब", "King of Fruits / फलों का राजा", "Fruit of Paradise / स्वर्ग का फल", "Queen of Fruits / फलों की रानी"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 495, 
        questionEn: "Which fruit is known as 'King of Temperate Fruits'?", 
        questionHi: "'शीतोष्ण फलों का राजा' (King of Temperate Fruits) किसे कहा जाता है?", 
        options: ["Peach / आडू", "Apple / सेब", "Plum / आलूबुखारा", "Pear / नाशपाती"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 496, 
        questionEn: "Which is the National Fruit of India?", 
        questionHi: "भारत का राष्ट्रीय फल कौन सा है?", 
        options: ["Mango / आम", "Jackfruit / कटहल", "Banana / केला", "Guava / अमरूद"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 497, 
        questionEn: "'Kalpavriksha' refers to which tree?", 
        questionHi: "'कल्पवृक्ष' (Kalpavriksha) किस पेड़ को कहा जाता है?", 
        options: ["Coconut / नारियल", "Banyan / बरगद", "Peepal / पीपल", "Neem / नीम"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 498, 
        questionEn: "Which tree is known as 'Wonder Tree'?", 
        questionHi: "किस पेड़ को 'वंडर ट्री' (Wonder Tree) कहा जाता है?", 
        options: ["Bamboo / बांस", "Neem / नीम", "Teak / सागौन", "Subabul / सुबबूल"], 
        answer: 1,
        subject: "Forestry"
    },
    { 
        id: 499, 
        questionEn: "Which flower is known as 'Glory of East'?", 
        questionHi: "'पूर्व का गौरव' (Glory of East) किस फूल को कहा जाता है?", 
        options: ["Lotus / कमल", "Rose / गुलाब", "Chrysanthemum / गुलदाउदी", "Jasmine / चमेली"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 500, 
        questionEn: "Which flower is a 'Symbol of Love'?", 
        questionHi: "'प्रेम का प्रतीक' (Symbol of Love) कौन सा फूल है?", 
        options: ["Rose / गुलाब", "Tulip / ट्यूलिप", "Lotus / कमल", "Orchid / आर्किड"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 501, 
        questionEn: "International Rice Research Institute (IRRI) is located at?", 
        questionHi: "अंतर्राष्ट्रीय चावल अनुसंधान संस्थान (IRRI) कहाँ स्थित है?", 
        options: ["Manila, Philippines / मनीला, फिलीपींस", "Mexico / मैक्सिको", "Hyderabad, India / हैदराबाद, भारत", "Rome, Italy / रोम, इटली"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 502, 
        questionEn: "ICRISAT is located at?", 
        questionHi: "ICRISAT (अर्ध-शुष्क उष्णकटिबंधीय फसलों के लिए अंतर्राष्ट्रीय अनुसंधान संस्थान) कहाँ स्थित है?", 
        options: ["New Delhi / नई दिल्ली", "Chennai / चेन्नई", "Hyderabad / हैदराबाद", "Bangalore / बैंगलोर"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 503, 
        questionEn: "The World Food Prize was established by?", 
        questionHi: "विश्व खाद्य पुरस्कार (World Food Prize) किसके द्वारा स्थापित किया गया था?", 
        options: ["FAO / एफएओ", "Norman Borlaug / नॉर्मन बोरलॉग", "Rockefeller Foundation / रॉकफेलर फाउंडेशन", "M.S. Swaminathan / एम.एस. स्वामीनाथन"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 504, 
        questionEn: "Who was the first recipient of the World Food Prize?", 
        questionHi: "विश्व खाद्य पुरस्कार के पहले प्राप्तकर्ता कौन थे?", 
        options: ["M.S. Swaminathan / एम.एस. स्वामीनाथन", "Amartya Sen / अमर्त्य सेन", "G.S. Khush / जी.एस. खुश", "Verghese Kurien / वर्गीज कुरियन"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 505, 
        questionEn: "Operation Flood is related to?", 
        questionHi: "ऑपरेशन फ्लड (Operation Flood) किससे संबंधित है?", 
        options: ["Fish Production / मछली उत्पादन", "Milk Production / दुग्ध उत्पादन", "Flood Control / बाढ़ नियंत्रण", "Oilseed Production / तिलहन उत्पादन"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 506, 
        questionEn: "Yellow Revolution is related to?", 
        questionHi: "पीली क्रांति (Yellow Revolution) किससे संबंधित है?", 
        options: ["Spices / मसाले", "Pulses / दलहन", "Oilseeds / तिलहन", "Fruits / फल"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 507, 
        questionEn: "Blue Revolution is related to?", 
        questionHi: "नीली क्रांति (Blue Revolution) किससे संबंधित है?", 
        options: ["Fish Production / मछली उत्पादन", "Water Conservation / जल संरक्षण", "Indigo / नील", "Poultry / मुर्गी पालन"], 
        answer: 0,
        subject: "General Agriculture"
    }
    ];

    window.quizData = window.quizData.concat(data);
})();

(function() {
    // Options have been shuffled
    const data = [
    { 
        id: 408, 
        questionEn: "Golden Revolution is related to?", 
        questionHi: "स्वर्ण क्रांति (Golden Revolution) किससे संबंधित है?", 
        options: ["Oilseeds / तिलहन", "Eggs / अंडे", "Fruits and Honey / फल और शहद", "Fish / मछली"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 409, 
        questionEn: "Silver Revolution is related to?", 
        questionHi: "रजत क्रांति (Silver Revolution) किससे संबंधित है?", 
        options: ["Milk / दूध", "Egg/Poultry / अंडा/मुर्गी पालन", "Cotton / कपास", "Potato / आलू"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 410, 
        questionEn: "Round Revolution is associated with?", 
        questionHi: "गोल क्रांति (Round Revolution) किससे संबंधित है?", 
        options: ["Potato / आलू", "Tomato / टमाटर", "Egg / अंडा", "Onion / प्याज"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 411, 
        questionEn: "Which buffalo breed has the highest fat percentage in milk?", 
        questionHi: "किस भैंस की नस्ल के दूध में वसा (fat) का प्रतिशत सबसे अधिक होता है?", 
        options: ["Murrah / मुर्रा", "Surti / सुरती", "Mehsana / मेहसाणा", "Bhadawari / भदावरी"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 412, 
        questionEn: "Which is the heaviest breed of Buffalo?", 
        questionHi: "भैंस की सबसे भारी नस्ल कौन सी है?", 
        options: ["Murrah / मुर्रा", "Nili-Ravi / नीली-रावी", "Jaffrabadi / जाफराबादी", "Surti / सुरती"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 413, 
        questionEn: "Zero Tillage system was first started in?", 
        questionHi: "शून्य जुताई (Zero Tillage) प्रणाली सबसे पहले कहाँ शुरू की गई थी?", 
        options: ["India / भारत", "USA / यूएसए", "China / चीन", "UK / यूके"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 414, 
        questionEn: "The term 'Evergreen Revolution' was given by?", 
        questionHi: "'सदाबहार क्रांति' (Evergreen Revolution) शब्द किसके द्वारा दिया गया था?", 
        options: ["Verghese Kurien / वर्गीज कुरियन", "M.S. Swaminathan / एम.एस. स्वामीनाथन", "N.E. Borlaug / एन.ई. बोरलॉग", "Dr. Lalji Singh / डॉ. लालजी सिंह"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 415, 
        questionEn: "Which instrument is used to measure soil moisture tension?", 
        questionHi: "मृदा नमी तनाव (soil moisture tension) मापने के लिए किस यंत्र का उपयोग किया जाता है?", 
        options: ["Tensiometer / टेन्सियोमीटर", "Pycnometer / पाइक्नोमीटर", "Lysimeter / लाइसीमीटर", "Hygrometer / हाइग्रोमीटर"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 416, 
        questionEn: "Central Institute of Agricultural Engineering (CIAE) is located at?", 
        questionHi: "केंद्रीय कृषि अभियांत्रिकी संस्थान (CIAE) कहाँ स्थित है?", 
        options: ["Ludhiana / लुधियाना", "New Delhi / नई दिल्ली", "Bhopal / भोपाल", "Hyderabad / हैदराबाद"], 
        answer: 2,
        subject: "Agricultural Engineering"
    },
    { 
        id: 417, 
        questionEn: "National Dairy Research Institute (NDRI) is located at?", 
        questionHi: "राष्ट्रीय डेयरी अनुसंधान संस्थान (NDRI) कहाँ स्थित है?", 
        options: ["Anand / आनंद", "Izatnagar / इज्जतनगर", "Hisar / हिसार", "Karnal / करनाल"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 418, 
        questionEn: "Indian Veterinary Research Institute (IVRI) is located at?", 
        questionHi: "भारतीय पशु चिकित्सा अनुसंधान संस्थान (IVRI) कहाँ स्थित है?", 
        options: ["Izatnagar / इज्जतनगर", "Mathura / मथुरा", "Chennai / चेन्नई", "Mukteshwar / मुक्तेश्वर"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 419, 
        questionEn: "Which gas is released from paddy fields?", 
        questionHi: "धान के खेतों से कौन सी गैस निकलती है?", 
        options: ["Carbon Dioxide / कार्बन डाइऑक्साइड", "Methane / मीथेन (CH4)", "Nitrous Oxide / नाइट्रस ऑक्साइड", "Sulphur Dioxide / सल्फर डाइऑक्साइड"], 
        answer: 1,
        subject: "Environmental Science"
    },
    { 
        id: 420, 
        questionEn: "Khaira disease of rice is controlled by spraying?", 
        questionHi: "चावल के खैरा रोग (Khaira disease) को किसके छिड़काव से नियंत्रित किया जाता है?", 
        options: ["Copper Sulphate / कॉपर सल्फेट", "Ferrous Sulphate / फेरस सल्फेट", "Zinc Sulphate / जिंक सल्फेट", "Borax / बोरेक्स"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 421, 
        questionEn: "Which crop is known as 'Camel Crop'?", 
        questionHi: "किस फसल को 'ऊंट फसल' (Camel Crop) कहा जाता है?", 
        options: ["Maize / मक्का", "Sorghum / ज्वार", "Bajra / बाजरा", "Ragi / रागी"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 422, 
        questionEn: "Which crop is known as 'King of Cereals'?", 
        questionHi: "अनाजों का राजा (King of Cereals) किस फसल को कहा जाता है?", 
        options: ["Rice / चावल", "Maize / मक्का", "Wheat / गेहूं", "Barley / जौ"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 423, 
        questionEn: "Which crop is known as 'Queen of Cereals'?", 
        questionHi: "अनाजों की रानी (Queen of Cereals) किस फसल को कहा जाता है?", 
        options: ["Maize / मक्का", "Rice / चावल", "Wheat / गेहूं", "Oat / जई"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 424, 
        questionEn: "Which crop is known as 'King of Coarse Cereals'?", 
        questionHi: "मोटे अनाजों का राजा (King of Coarse Cereals) किसे कहा जाता है?", 
        options: ["Sorghum / ज्वार", "Bajra / बाजरा", "Ragi / रागी", "Maize / मक्का"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 425, 
        questionEn: "Which crop is known as 'Poor Man's Meat'?", 
        questionHi: "'गरीबों का मांस' (Poor Man's Meat) किस फसल को कहा जाता है?", 
        options: ["Gram / चना", "Soybean / सोयाबीन", "Pea / मटर", "Lentil / मसूर"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 426, 
        questionEn: "Gummosis is a major problem in?", 
        questionHi: "गमोसिस (Gummosis) किसमें एक प्रमुख समस्या है?", 
        options: ["Mango / आम", "Citrus / नींबू वर्गीय", "Apple / सेब", "Guava / अमरूद"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 427, 
        questionEn: "Ultra-High Density Planting (UHDP) is common in?", 
        questionHi: "अति-उच्च घनत्व रोपण (UHDP) किसमें आम है?", 
        options: ["Mango / आम", "Banana / केला", "Papaya / पपीता", "Guava / अमरूद (Meadow Orcharding)"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 428, 
        questionEn: "Pungency in Onion is due to?", 
        questionHi: "प्याज में तीखापन (Pungency) किसके कारण होता है?", 
        options: ["Diallyl Disulphide / डायलील डाइसल्फाइड", "Capsaicin / कैप्साइसिन", "Allyl Propyl Disulphide / एलील प्रोपाइल डाइसल्फाइड", "Solanine / सोलानिन"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 429, 
        questionEn: "Pungency in Garlic is due to?", 
        questionHi: "लहसुन में तीखापन किसके कारण होता है?", 
        options: ["Allyl Propyl Disulphide / एलील प्रोपाइल डाइसल्फाइड", "Allicin / एलीसिन", "Curcumin / करक्यूमिन", "Diallyl Disulphide / डायलील डाइसल्फाइड"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 430, 
        questionEn: "Red color in Chili is due to?", 
        questionHi: "मिर्च में लाल रंग किसके कारण होता है?", 
        options: ["Lycopene / लाइकोपीन", "Capsanthin / कैप्सैन्थिन", "Anthocyanin / एंथोसायनिन", "Capsaicin / कैप्साइसिन"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 431, 
        questionEn: "Which spice is known as 'Queen of Spices'?", 
        questionHi: "'मसालों की रानी' (Queen of Spices) किसे कहा जाता है?", 
        options: ["Clove / लौंग", "Black Pepper / काली मिर्च", "Cardamom / इलायची", "Cinnamon / दालचीनी"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 432, 
        questionEn: "Which spice is known as 'King of Spices'?", 
        questionHi: "'मसालों का राजा' (King of Spices) किसे कहा जाता है?", 
        options: ["Cardamom / इलायची", "Turmeric / हल्दी", "Black Pepper / काली मिर्च", "Ginger / अदरक"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 433, 
        questionEn: "Which fruit is known as 'King of Fruits'?", 
        questionHi: "'फलों का राजा' (King of Fruits) किसे कहा जाता है?", 
        options: ["Apple / सेब", "Banana / केला", "Mango / आम", "Orange / संतरा"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 434, 
        questionEn: "Which vegetable is known as 'Poor Man's Friend'?", 
        questionHi: "'गरीब का दोस्त' (Poor Man's Friend) किस सब्जी को कहा जाता है?", 
        options: ["Potato / आलू", "Tomato / टमाटर", "Onion / प्याज", "Brinjal / बैंगन"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 435, 
        questionEn: "Which flower is known as 'King of Flowers'?", 
        questionHi: "'फूलों का राजा' (King of Flowers) किसे कहा जाता है?", 
        options: ["Lotus / कमल", "Jasmine / चमेली", "Marigold / गेंदा", "Rose / गुलाब"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 436, 
        questionEn: "Which crop is known as 'King of Fodder crops'?", 
        questionHi: "'चारा फसलों का राजा' (King of Fodder) किसे कहा जाता है?", 
        options: ["Lucerne / ल्यूसन", "Berseem / बरसीम", "Napier / नेपियर", "Sorghum / ज्वार"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 437, 
        questionEn: "Which crop is known as 'Queen of Fodder crops'?", 
        questionHi: "'चारा फसलों की रानी' (Queen of Fodder) किसे कहा जाता है?", 
        options: ["Berseem / बरसीम", "Cowpea / लोबिया", "Lucerne / ल्यूसन", "Oat / जई"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 438, 
        questionEn: "Which weed is known as 'King of Weeds'?", 
        questionHi: "'खरपतवारों का राजा' (King of Weeds) किसे कहा जाता है?", 
        options: ["Motha / मोथा", "Doob grass / दूब घास", "Congress grass / गाजर घास (Parthenium)", "Water hyacinth / जलकुंभी"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 439, 
        questionEn: "Pedology is the study of?", 
        questionHi: "पेडोलॉजी (Pedology) किसका अध्ययन है?", 
        options: ["Soil and plant relation / मृदा और पौधे का संबंध", "Soil origin and classification / मृदा उत्पत्ति और वर्गीकरण", "Rocks / चट्टानें", "Minerals / खनिज"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 440, 
        questionEn: "Edaphology is the study of?", 
        questionHi: "एडेफोलॉजी (Edaphology) किसका अध्ययन है?", 
        options: ["Soil classification / मृदा वर्गीकरण", "Soil in relation to plant growth / पौधों की वृद्धि के संबंध में मिट्टी", "Soil genesis / मृदा उत्पत्ति", "Rocks / चट्टानें"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 441, 
        questionEn: "Olericulture is the branch of agriculture dealing with?", 
        questionHi: "ओलेरीकल्चर (Olericulture) कृषि की वह शाखा है जो किससे संबंधित है?", 
        options: ["Fruits / फल", "Flowers / फूल", "Vegetables / सब्जियां", "Medicinal plants / औषधीय पौधे"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 442, 
        questionEn: "Pomology is the branch of agriculture dealing with?", 
        questionHi: "पोमोलॉजी (Pomology) कृषि की वह शाखा है जो किससे संबंधित है?", 
        options: ["Vegetables / सब्जियां", "Flowers / फूल", "Forests / वन", "Fruits / फल"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 443, 
        questionEn: "Floriculture is the branch of agriculture dealing with?", 
        questionHi: "फ्लोरिकल्चर (Floriculture) कृषि की वह शाखा है जो किससे संबंधित है?", 
        options: ["Flowers / फूल", "Fruits / फल", "Vegetables / सब्जियां", "Spices / मसाले"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 444, 
        questionEn: "World Environment Day is celebrated on?", 
        questionHi: "विश्व पर्यावरण दिवस (World Environment Day) कब मनाया जाता है?", 
        options: ["22nd April / 22 अप्रैल", "5th June / 5 जून", "16th October / 16 अक्टूबर", "23rd December / 23 दिसंबर"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 445, 
        questionEn: "National Farmer's Day (Kisan Diwas) is celebrated on?", 
        questionHi: "राष्ट्रीय किसान दिवस (Kisan Diwas) कब मनाया जाता है?", 
        options: ["1st July / 1 जुलाई", "23rd December / 23 दिसंबर", "16th October / 16 अक्टूबर", "5th June / 5 जून"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 446, 
        questionEn: "NABARD was established in which year?", 
        questionHi: "नाबार्ड (NABARD) की स्थापना किस वर्ष हुई थी?", 
        options: ["1975", "1969", "1995", "1982"], 
        answer: 3,
        subject: "Economics"
    },
    { 
        id: 447, 
        questionEn: "World Trade Organization (WTO) was established in?", 
        questionHi: "विश्व व्यापार संगठन (WTO) की स्थापना कब हुई थी?", 
        options: ["1995", "1947", "1991", "2000"], 
        answer: 0,
        subject: "Economics"
    },
    { 
        id: 448, 
        questionEn: "Which was the first hybrid variety of Cotton?", 
        questionHi: "कपास की पहली संकर (hybrid) किस्म कौन सी थी?", 
        options: ["Varalaxmi / वरलक्ष्मी", "H-4", "DCH-32", "Sujata / सुजाता"], 
        answer: 1,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 449, 
        questionEn: "Which was the first hybrid variety of Maize released in India?", 
        questionHi: "भारत में जारी मक्का की पहली संकर किस्म कौन सी थी?", 
        options: ["Vikram / विक्रम", "Kisan / किसान", "Ganga-1", "Jawahar / जवाहर"], 
        answer: 2,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 450, 
        questionEn: "Which crop has the largest cultivated area in India?", 
        questionHi: "भारत में सबसे बड़े खेती वाले क्षेत्र में कौन सी फसल उगाई जाती है?", 
        options: ["Wheat / गेहूं", "Cotton / कपास", "Maize / मक्का", "Rice / चावल"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 451, 
        questionEn: "Which state is known as the 'Spice Garden of India'?", 
        questionHi: "किस राज्य को 'भारत का मसाला उद्यान' (Spice Garden of India) कहा जाता है?", 
        options: ["Karnataka / कर्नाटक", "Andhra Pradesh / आंध्र प्रदेश", "Tamil Nadu / तमिलनाडु", "Kerala / केरल"], 
        answer: 3,
        subject: "General Agriculture"
    },
    { 
        id: 452, 
        questionEn: "Which state is known as the 'Sugar Bowl of India'?", 
        questionHi: "किस राज्य को 'भारत का चीनी का कटोरा' (Sugar Bowl of India) कहा जाता है?", 
        options: ["Maharashtra / महाराष्ट्र", "Uttar Pradesh / उत्तर प्रदेश", "Punjab / पंजाब", "Haryana / हरियाणा"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 453, 
        questionEn: "Which state is known as the 'Egg Bowl of Asia'?", 
        questionHi: "किस राज्य को 'एशिया का अंडा कटोरा' (Egg Bowl of Asia) कहा जाता है?", 
        options: ["Tamil Nadu / तमिलनाडु", "Andhra Pradesh / आंध्र प्रदेश", "Punjab / पंजाब", "West Bengal / पश्चिम बंगाल"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 454, 
        questionEn: "Which crop consumes the maximum amount of pesticides in India?", 
        questionHi: "भारत में किस फसल में कीटनाशकों (pesticides) का सर्वाधिक उपयोग होता है?", 
        options: ["Rice / चावल", "Vegetables / सब्जियां", "Wheat / गेहूं", "Cotton / कपास"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 455, 
        questionEn: "The true stomach of ruminant animals is called?", 
        questionHi: "जुगाली करने वाले जानवरों के असली पेट (true stomach) को क्या कहा जाता है?", 
        options: ["Abomasum / एबोमेसम", "Rumen / रूमेन", "Reticulum / रेटिकुलम", "Omasum / ओमेसम"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 456, 
        questionEn: "The act of mating in Sheep is called?", 
        questionHi: "भेड़ में संभोग (mating) की क्रिया को क्या कहा जाता है?", 
        options: ["Serving / सर्विंग", "Tupping / टपिंग", "Coupling / कपलिंग", "Covering / कवरिंग"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 457, 
        questionEn: "The act of mating in Goat is called?", 
        questionHi: "बकरी में संभोग (mating) की क्रिया को क्या कहा जाता है?", 
        options: ["Tupping / टपिंग", "Serving / सर्विंग", "Farrowing / फैरोइंग", "Kidding / किडिंग"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 458, 
        questionEn: "Meat of Goat is known as?", 
        questionHi: "बकरी के मांस को किस नाम से जाना जाता है?", 
        options: ["Mutton / मटन", "Pork / पोर्क", "Beef / बीफ", "Chevon / चेवन"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 459, 
        questionEn: "Meat of Buffalo is known as?", 
        questionHi: "भैंस के मांस को किस नाम से जाना जाता है?", 
        options: ["Beef / बीफ", "Cara-beef / कारा-बीफ", "Mutton / मटन", "Buffen / बफेन"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 460, 
        questionEn: "Meat of Pig is known as?", 
        questionHi: "सुअर के मांस को किस नाम से जाना जाता है?", 
        options: ["Bacon / बेकन", "Pork / पोर्क", "Ham / हैम", "Chevon / चेवन"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 461, 
        questionEn: "Male inflorescence of Maize is known as?", 
        questionHi: "मक्का के नर पुष्पक्रम (Male inflorescence) को किस नाम से जाना जाता है?", 
        options: ["Silk / सिल्क", "Ear / ईयर", "Tassel / टैसल", "Cob / कोब"], 
        answer: 2,
        subject: "Botany"
    },
    { 
        id: 462, 
        questionEn: "Female inflorescence of Maize is known as?", 
        questionHi: "मक्का के मादा पुष्पक्रम (Female inflorescence) को किस नाम से जाना जाता है?", 
        options: ["Tassel / टैसल", "Spike / स्पाइक", "Panicle / पैनिकल्स", "Silk / सिल्क"], 
        answer: 3,
        subject: "Botany"
    },
    { 
        id: 463, 
        questionEn: "Which element is essential for pollen germination?", 
        questionHi: "पराग अंकुरण (pollen germination) के लिए कौन सा तत्व आवश्यक है?", 
        options: ["Boron / बोरॉन", "Zinc / जस्ता", "Calcium / कैल्शियम", "Magnesium / मैग्नीशियम"], 
        answer: 0,
        subject: "Plant Physiology"
    },
    { 
        id: 464, 
        questionEn: "Which element is a central component of Chlorophyll?", 
        questionHi: "क्लोरोफिल (Chlorophyll) का केंद्रीय घटक कौन सा तत्व है?", 
        options: ["Iron / लोहा", "Magnesium / मैग्नीशियम", "Manganese / मैंगनीज", "Nitrogen / नाइट्रोजन"], 
        answer: 1,
        subject: "Plant Physiology"
    },
    { 
        id: 465, 
        questionEn: "Which element is essential for Nitrogen Fixation?", 
        questionHi: "नाइट्रोजन स्थिरीकरण (Nitrogen Fixation) के लिए कौन सा तत्व आवश्यक है?", 
        options: ["Boron / बोरॉन", "Zinc / जस्ता", "Molybdenum / मोलिब्डेनम", "Copper / तांबा"], 
        answer: 2,
        subject: "Plant Physiology"
    },
    { 
        id: 466, 
        questionEn: "Which element imparts disease resistance in plants?", 
        questionHi: "कौन सा तत्व पौधों में रोग प्रतिरोधक क्षमता (disease resistance) प्रदान करता है?", 
        options: ["Nitrogen / नाइट्रोजन", "Phosphorus / फास्फोरस", "Calcium / कैल्शियम", "Potassium / पोटेशियम"], 
        answer: 3,
        subject: "Plant Physiology"
    },
    { 
        id: 467, 
        questionEn: "'White Bud' in Maize is caused by deficiency of?", 
        questionHi: "मक्का में 'सफेद कली' (White Bud) किसकी कमी से होती है?", 
        options: ["Zinc / जस्ता", "Iron / लोहा", "Boron / बोरॉन", "Magnesium / मैग्नीशियम"], 
        answer: 0,
        subject: "Plant Pathology"
    },
    { 
        id: 468, 
        questionEn: "'Whip tail' of Cauliflower is caused by deficiency of?", 
        questionHi: "फूलगोभी का 'व्हिप टेल' (Whip tail) रोग किसकी कमी से होता है?", 
        options: ["Boron / बोरॉन", "Calcium / कैल्शियम", "Molybdenum / मोलिब्डेनम", "Nitrogen / नाइट्रोजन"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 469, 
        questionEn: "'Hollow Heart' of Potato is caused by?", 
        questionHi: "आलू का 'हollow Heart' रोग किसके कारण होता है?", 
        options: ["Boron deficiency / बोरॉन की कमी", "Calcium deficiency / कैल्शियम की कमी", "Excess Nitrogen/Moisture / अतिरिक्त नाइट्रोजन/नमी", "Virus / विषाणु"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 470, 
        questionEn: "Fruit cracking is generally caused by deficiency of?", 
        questionHi: "फलों का फटना (Fruit cracking) आमतौर पर किसकी कमी से होता है?", 
        options: ["Calcium / कैल्शियम", "Zinc / जस्ता", "Potassium / पोटेशियम", "Boron / बोरॉन"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 471, 
        questionEn: "'Little Leaf' of Brinjal is caused by?", 
        questionHi: "बैंगन का 'छोटा पत्ता' (Little Leaf) रोग किसके कारण होता है?", 
        options: ["Virus / विषाणु", "Fungi / कवक", "Bacteria / जीवाणु", "Mycoplasma / माइकोप्लाज्मा (Phytoplasma)"], 
        answer: 3,
        subject: "Plant Pathology"
    },
    { 
        id: 472, 
        questionEn: "'Citrus Greening' is caused by?", 
        questionHi: "'सिट्रस ग्रीनिंग' (Citrus Greening) किसके कारण होता है?", 
        options: ["Virus / विषाणु", "Bacteria / जीवाणु (Candidatus)", "Fungi / कवक", "Nematode / सूत्रकृमि"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 473, 
        questionEn: "'Bunchy Top' of Banana is caused by?", 
        questionHi: "केले का 'बंची टॉप' (Bunchy Top) रोग किसके कारण होता है?", 
        options: ["Bacteria / जीवाणु", "Fungi / कवक", "Virus / विषाणु", "Mycoplasma / माइकोप्लाज्मा"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 474, 
        questionEn: "Potato Spindle Tuber disease is caused by?", 
        questionHi: "आलू का स्पिंडल ट्यूबर (Spindle Tuber) रोग किसके कारण होता है?", 
        options: ["Virus / विषाणु", "Viroid / वायरोइड", "Bacteria / जीवाणु", "Prion / प्रियन"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 475, 
        questionEn: "First Regional Rural Bank (RRB) was established in?", 
        questionHi: "पहला क्षेत्रीय ग्रामीण बैंक (RRB) कब स्थापित किया गया था?", 
        options: ["1969", "1982", "1991", "1975"], 
        answer: 3,
        subject: "Economics"
    },
    { 
        id: 476, 
        questionEn: "TRYSEM scheme was started in which year?", 
        questionHi: "TRYSEM योजना किस वर्ष शुरू की गई थी?", 
        options: ["1985", "1979", "1992", "1999"], 
        answer: 1,
        subject: "Extension Education"
    },
    { 
        id: 477, 
        questionEn: "Kisan Credit Card (KCC) scheme was introduced in?", 
        questionHi: "किसान क्रेडिट कार्ड (KCC) योजना कब शुरू की गई थी?", 
        options: ["2004", "1998", "1991", "2010"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 478, 
        questionEn: "Soil Health Card scheme was launched in?", 
        questionHi: "मृदा स्वास्थ्य कार्ड (Soil Health Card) योजना कब शुरू की गई थी?", 
        options: ["2014", "2016", "2015", "2018"], 
        answer: 2,
        subject: "Extension Education"
    },
    { 
        id: 479, 
        questionEn: "Under PM-KISAN, farmers get an annual support of?", 
        questionHi: "PM-KISAN के तहत, किसानों को कितनी वार्षिक सहायता मिलती है?", 
        options: ["Rs. 6000", "Rs. 10000", "Rs. 5000", "Rs. 12000"], 
        answer: 0,
        subject: "Economics"
    },
    { 
        id: 480, 
        questionEn: "What is the main benefit of Neem Coated Urea?", 
        questionHi: "नीम लेपित यूरिया (Neem Coated Urea) का मुख्य लाभ क्या है?", 
        options: ["Increases Nitrogen content / नाइट्रोजन सामग्री बढ़ाता है", "Slow release of Nitrogen / नाइट्रोजन की धीमी रिहाई", "Kills pests / कीटों को मारता है", "Decreases cost / लागत कम करता है"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 481, 
        questionEn: "Golden Rice is genetically modified to produce?", 
        questionHi: "गोल्डन राइस को क्या उत्पादन करने के लिए आनुवंशिक रूप से संशोधित किया गया है?", 
        options: ["Vitamin C / विटामिन सी", "Iron / लोहा", "Vitamin A / विटामिन ए (Beta-carotene)", "Protein / प्रोटीन"], 
        answer: 2,
        subject: "Biotechnology"
    },
    { 
        id: 482, 
        questionEn: "The concept of 'Super Rice' was developed by?", 
        questionHi: "'सुपर राइस' (Super Rice) की अवधारणा किसने विकसित की?", 
        options: ["Yuan Longping / युआन लॉन्गपिंग", "M.S. Swaminathan / एम.एस. स्वामीनाथन", "Borlaug / बोरलॉग", "Gurdev Khush / गुरुदेव खुश"], 
        answer: 3,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 483, 
        questionEn: "Bt Cotton is developed to provide resistance against?", 
        questionHi: "बीटी कपास (Bt Cotton) को किसके खिलाफ प्रतिरोध प्रदान करने के लिए विकसित किया गया है?", 
        options: ["Sucking pests / चूसने वाले कीट", "Diseases / रोग", "Nematodes / सूत्रकृमि", "Bollworms / बॉलवर्म"], 
        answer: 3,
        subject: "Biotechnology"
    },
    { 
        id: 484, 
        questionEn: "Azotobacter is an example of?", 
        questionHi: "एज़ोटोबैक्टर (Azotobacter) किसका उदाहरण है?", 
        options: ["Symbiotic Nitrogen fixer / सहजीवी नाइट्रोजन फिक्सर", "Free living Nitrogen fixer / मुक्त रहने वाला नाइट्रोजन फिक्सर", "P-Solubilizer / पी-घुलनशील", "P-Mobilizer / पी-मोबिलाइज़र"], 
        answer: 1,
        subject: "Microbiology"
    },
    { 
        id: 485, 
        questionEn: "VAM (Vesicular Arbuscular Mycorrhiza) helps in uptake of?", 
        questionHi: "VAM (वेसिकुलर आर्बुस्कुलर माइकोराइजा) किसके अवशोषण में मदद करता है?", 
        options: ["Nitrogen / नाइट्रोजन", "Potassium / पोटेशियम", "Phosphorus / फास्फोरस", "Sulphur / सल्फर"], 
        answer: 2,
        subject: "Microbiology"
    },
    { 
        id: 486, 
        questionEn: "Which is the major source of Sugar production in the World?", 
        questionHi: "विश्व में चीनी उत्पादन का प्रमुख स्रोत क्या है?", 
        options: ["Sugarbeet / चुकंदर", "Palm / ताड़", "Coconut / नारियल", "Sugarcane / गन्ना"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 487, 
        questionEn: "First cloned sheep 'Dolly' was developed by?", 
        questionHi: "पहली क्लोन भेड़ 'डॉली' (Dolly) किसके द्वारा विकसित की गई थी?", 
        options: ["Ian Wilmut / इयान विल्मुट", "Watson / वाटसन", "Khorana / खुराना", "Mendel / मेंडल"], 
        answer: 0,
        subject: "Biotechnology"
    },
    // --- New Questions (488-507) ---
    { 
        id: 488, 
        questionEn: "Which nutrient is known as 'Traffic Policeman' in plants?", 
        questionHi: "पौधों में 'ट्रैफिक पुलिसमैन' (Traffic Policeman) के रूप में किस पोषक तत्व को जाना जाता है?", 
        options: ["Nitrogen / नाइट्रोजन", "Potassium / पोटेशियम", "Phosphorus / फास्फोरस", "Calcium / कैल्शियम"], 
        answer: 1,
        subject: "Plant Physiology"
    },
    { 
        id: 489, 
        questionEn: "Which element is essential for oil content in oilseeds?", 
        questionHi: "तिलहन में तेल की मात्रा के लिए कौन सा तत्व आवश्यक है?", 
        options: ["Zinc / जस्ता", "Boron / बोरॉन", "Sulfur / सल्फर", "Iron / लोहा"], 
        answer: 2,
        subject: "Plant Physiology"
    },
    { 
        id: 490, 
        questionEn: "'Buttoning' in Cauliflower is caused by deficiency of?", 
        questionHi: "फूलगोभी में 'बटनिंग' (Buttoning) किसकी कमी से होती है?", 
        options: ["Boron / बोरॉन", "Molybdenum / मोलिब्डेनम", "Potassium / पोटेशियम", "Nitrogen / नाइट्रोजन"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 491, 
        questionEn: "Richest source of Iron among fruits is?", 
        questionHi: "फलों में लोहे (Iron) का सबसे समृद्ध स्रोत कौन सा है?", 
        options: ["Dry Karonda / सूखा करोंदा", "Date Palm / खजूर", "Walnut / अखरोट", "Apple / सेब"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 492, 
        questionEn: "Richest source of Vitamin C among fruits is?", 
        questionHi: "फलों में विटामिन सी का सबसे समृद्ध स्रोत कौन सा है?", 
        options: ["Aonla / आंवला", "Barbados Cherry / बारबाडोस चेरी", "Guava / अमरूद", "Citrus / नींबू"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 493, 
        questionEn: "Which fruit is known as 'Poor Man's Fruit'?", 
        questionHi: "'गरीब का फल' (Poor Man's Fruit) किसे कहा जाता है?", 
        options: ["Jackfruit / कटहल", "Banana / केला", "Ber / बेर", "Custard Apple / सीताफल"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 494, 
        questionEn: "Guava is also known as?", 
        questionHi: "अमरूद (Guava) को और किस नाम से जाना जाता है?", 
        options: ["King of Fruits / फलों का राजा", "Queen of Fruits / फलों की रानी", "Fruit of Paradise / स्वर्ग का फल", "Apple of Tropics / उष्णकटिबंधीय सेब"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 495, 
        questionEn: "Which fruit is known as 'King of Temperate Fruits'?", 
        questionHi: "'शीतोष्ण फलों का राजा' (King of Temperate Fruits) किसे कहा जाता है?", 
        options: ["Apple / सेब", "Pear / नाशपाती", "Peach / आडू", "Plum / आलूबुखारा"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 496, 
        questionEn: "Which is the National Fruit of India?", 
        questionHi: "भारत का राष्ट्रीय फल कौन सा है?", 
        options: ["Banana / केला", "Mango / आम", "Jackfruit / कटहल", "Guava / अमरूद"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 497, 
        questionEn: "'Kalpavriksha' refers to which tree?", 
        questionHi: "'कल्पवृक्ष' (Kalpavriksha) किस पेड़ को कहा जाता है?", 
        options: ["Neem / नीम", "Banyan / बरगद", "Coconut / नारियल", "Peepal / पीपल"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 498, 
        questionEn: "Which tree is known as 'Wonder Tree'?", 
        questionHi: "किस पेड़ को 'वंडर ट्री' (Wonder Tree) कहा जाता है?", 
        options: ["Teak / सागौन", "Bamboo / बांस", "Subabul / सुबबूल", "Neem / नीम"], 
        answer: 3,
        subject: "Forestry"
    },
    { 
        id: 499, 
        questionEn: "Which flower is known as 'Glory of East'?", 
        questionHi: "'पूर्व का गौरव' (Glory of East) किस फूल को कहा जाता है?", 
        options: ["Chrysanthemum / गुलदाउदी", "Rose / गुलाब", "Lotus / कमल", "Jasmine / चमेली"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 500, 
        questionEn: "Which flower is a 'Symbol of Love'?", 
        questionHi: "'प्रेम का प्रतीक' (Symbol of Love) कौन सा फूल है?", 
        options: ["Lotus / कमल", "Rose / गुलाब", "Tulip / ट्यूलिप", "Orchid / आर्किड"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 501, 
        questionEn: "International Rice Research Institute (IRRI) is located at?", 
        questionHi: "अंतर्राष्ट्रीय चावल अनुसंधान संस्थान (IRRI) कहाँ स्थित है?", 
        options: ["Rome, Italy / रोम, इटली", "Hyderabad, India / हैदराबाद, भारत", "Manila, Philippines / मनीला, फिलीपींस", "Mexico / मैक्सिको"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 502, 
        questionEn: "ICRISAT is located at?", 
        questionHi: "ICRISAT (अर्ध-शुष्क उष्णकटिबंधीय फसलों के लिए अंतर्राष्ट्रीय अनुसंधान संस्थान) कहाँ स्थित है?", 
        options: ["New Delhi / नई दिल्ली", "Bangalore / बैंगलोर", "Chennai / चेन्नई", "Hyderabad / हैदराबाद"], 
        answer: 3,
        subject: "General Agriculture"
    },
    { 
        id: 503, 
        questionEn: "The World Food Prize was established by?", 
        questionHi: "विश्व खाद्य पुरस्कार (World Food Prize) किसके द्वारा स्थापित किया गया था?", 
        options: ["Norman Borlaug / नॉर्मन बोरलॉग", "M.S. Swaminathan / एम.एस. स्वामीनाथन", "FAO / एफएओ", "Rockefeller Foundation / रॉकफेलर फाउंडेशन"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 504, 
        questionEn: "Who was the first recipient of the World Food Prize?", 
        questionHi: "विश्व खाद्य पुरस्कार के पहले प्राप्तकर्ता कौन थे?", 
        options: ["Verghese Kurien / वर्गीज कुरियन", "M.S. Swaminathan / एम.एस. स्वामीनाथन", "Amartya Sen / अमर्त्य सेन", "G.S. Khush / जी.एस. खुश"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 505, 
        questionEn: "Operation Flood is related to?", 
        questionHi: "ऑपरेशन फ्लड (Operation Flood) किससे संबंधित है?", 
        options: ["Flood Control / बाढ़ नियंत्रण", "Fish Production / मछली उत्पादन", "Milk Production / दुग्ध उत्पादन", "Oilseed Production / तिलहन उत्पादन"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 506, 
        questionEn: "Yellow Revolution is related to?", 
        questionHi: "पीली क्रांति (Yellow Revolution) किससे संबंधित है?", 
        options: ["Pulses / दलहन", "Fruits / फल", "Spices / मसाले", "Oilseeds / तिलहन"], 
        answer: 3,
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

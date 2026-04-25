(function() {
    const data = [
    { 
        id: 101, 
        questionEn: "A fruit plant propagated by vegetative method is?", 
        questionHi: "वानस्पतिक विधि (vegetative method) द्वारा प्रवर्धित किया जाने वाला फलदार पौधा कौन सा है?", 
        options: ["Banana / केला", "Papaya / पपीता", "Tomato / टमाटर", "Coconut / नारियल"], 
        answer: 0, 
        subject: "Horticulture" 
    },
    { 
        id: 102, 
        questionEn: "A fruit plant which can be layered easily is?", 
        questionHi: "किस फलदार पौधे में लेयरिंग (दाब कलम) आसानी से की जा सकती है?", 
        options: ["Papaya / पपीता", "Mango / आम", "Litchi / लीची", "Jackfruit / कटहल"], 
        answer: 2, 
        subject: "Horticulture" 
    },
    { 
        id: 103, 
        questionEn: "Which fruit is rich in fat content?", 
        questionHi: "कौन सा फल वसा (fat) से भरपूर होता है?", 
        options: ["Avocado / एवोकैडो", "Mango / आम", "Grapes / अंगूर", "Banana / केला"], 
        answer: 0, 
        subject: "Horticulture" 
    },
    { 
        id: 104, 
        questionEn: "Which fruit is rich in Vitamin A content?", 
        questionHi: "कौन सा फल विटामिन ए से भरपूर है?", 
        options: ["Orange / संतरा", "Banana / केला", "Mango / आम", "Apple / सेब"], 
        answer: 2, 
        subject: "Horticulture" 
    },
    { 
        id: 105, 
        questionEn: "A fruit that ripens only after harvest is?", 
        questionHi: "वह फल जो कटाई के बाद ही पकता है?", 
        options: ["Pomegranate / अनार", "Grape / अंगूर", "Cherry / चेरी", "Avocado / एवोकैडो"], 
        answer: 3, 
        subject: "Horticulture" 
    },
    { 
        id: 106, 
        questionEn: "Which is a fungal disease of mushroom?", 
        questionHi: "मशरूम का कवक (fungal) रोग कौन सा है?", 
        options: ["Mosaic / मोज़ेक", "Soft mildew / सॉफ्ट मिल्ड्यू", "Viral blight / वायरल ब्लाइट", "Bacterial blotch / बैक्टीरियल ब्लॉच"], 
        answer: 1, 
        subject: "Plant Pathology" 
    },
    { 
        id: 107, 
        questionEn: "A funnel-shaped cloud extending downwards is a characteristic feature of?", 
        questionHi: "नीचे की ओर फैली हुई कीप के आकार (funnel-shaped) की वादल किसकी विशेषता है?", 
        options: ["Tornado / बवंडर", "Hurricane / तूफान", "Typhoon / टाइफून", "Cyclone / चक्रवात"], 
        answer: 0, 
        subject: "Meteorology" 
    },
    { 
        id: 108, 
        questionEn: "A garden component making it larger is?", 
        questionHi: "बगीचे का वह घटक जो उसे बड़ा दिखाता है?", 
        options: ["Edge / किनारा", "Path / रास्ता", "Lawn / लॉन", "Hedge / बाड़"], 
        answer: 2, 
        subject: "Horticulture" 
    },
    { 
        id: 109, 
        questionEn: "A garden set below the level of the ground surrounding it is called?", 
        questionHi: "आसपास की जमीन के स्तर से नीचे बने बगीचे को क्या कहा जाता है?", 
        options: ["Sunken garden / धंसा हुआ बगीचा (Sunken garden)", "Terrace garden / टेरेस गार्डन", "Rock garden / रॉक गार्डन", "Vertical garden / वर्टिकल गार्डन"], 
        answer: 0, 
        subject: "Horticulture" 
    },
    { 
        id: 110, 
        questionEn: "A good quality Coconut seedling should have a collar girth of?", 
        questionHi: "एक अच्छी गुणवत्ता वाले नारियल के पौधे की कॉलर मोटाई (girth) कितनी होनी चाहिए?", 
        options: ["2-3 cm", "5-6 cm", "10-12 cm", "15-20 cm"], 
        answer: 2, 
        subject: "Horticulture" 
    },
    { 
        id: 111, 
        questionEn: "Which of the following is a granular insecticide?", 
        questionHi: "निम्नलिखित में से कौन सा एक दानेदार कीटनाशक (granular insecticide) है?", 
        options: ["Furadan 3G / फ्यूराडन 3G", "Dimethoate / डाइमेथोएट", "Chlorpyriphos / क्लोरपायरीफॉस", "Malathion / मैलाथियान"], 
        answer: 0, 
        subject: "Entomology" 
    },
    { 
        id: 112, 
        questionEn: "Which is a green manure crop?", 
        questionHi: "हरी खाद (green manure) वाली फसल कौन सी है?", 
        options: ["Barley / जौ", "Maize / मक्का", "Glyricidia / ग्लिरिसिडिया", "Wheat / गेहूं"], 
        answer: 2, 
        subject: "Agronomy" 
    },
    { 
        id: 113, 
        questionEn: "A group of ornamental plants used to grow over walls, trellis, arches, etc.?", 
        questionHi: "दीवारों, ट्रेल्स और मेहराबों पर उगाने के लिए उपयोग किए जाने वाले सजावटी पौधों का समूह?", 
        options: ["Climbers and Creepers / लताएँ और बेलें", "Shrubs / झाड़ियाँ", "Herbs / जड़ी-बूटियाँ", "Trees / पेड़"], 
        answer: 0, 
        subject: "Horticulture" 
    },
    { 
        id: 114, 
        questionEn: "A guarantee programme for people below the poverty line is?", 
        questionHi: "गरीबी रेखा से नीचे के लोगों के लिए गारंटी कार्यक्रम कौन सा है?", 
        options: ["PMKSY", "NFSM", "NHM", "RKVY"], 
        answer: 1, 
        subject: "Extension Education" 
    },
    { 
        id: 115, 
        questionEn: "Heat treatment of food material at 72°C for 15 seconds is known as?", 
        questionHi: "खाद्य सामग्री को 15 सेकंड के लिए 72°C पर ताप उपचारित करना क्या कहलाता है?", 
        options: ["Pasteurization / पाश्चुरीकरण", "Blanching / ब्लांचिंग", "Canning / डिब्बाबंदी", "Sterilization / बंध्याकरण"], 
        answer: 0, 
        subject: "Food Science" 
    },
    { 
        id: 116, 
        questionEn: "A high-density planting in apple can accommodate how many plants per hectare?", 
        questionHi: "सेब में उच्च घनत्व वाली बुवाई (high-density planting) में प्रति हेक्टेयर कितने पौधे लगाए जा सकते हैं?", 
        options: ["1500-2000", "500-1250", "250-400", "100-200"], 
        answer: 1, 
        subject: "Horticulture" 
    },
    { 
        id: 117, 
        questionEn: "Which hormone induces dwarfism in plants?", 
        questionHi: "कौन सा हार्मोन पौधों में बौनापन (dwarfism) प्रेरित करता है?", 
        options: ["MH (Maleic Hydrazide) / एमएच (मैलेइक हाइड्राजाइड)", "GA3", "Cytokinin", "IAA"], 
        answer: 0, 
        subject: "Plant Physiology" 
    },
    { 
        id: 118, 
        questionEn: "A hormone responsible for induction of dwarfism is?", 
        questionHi: "बौनापन प्रेरित करने के लिए जिम्मेदार हार्मोन है?", 
        options: ["Ethylene", "MH / एमएच", "NAA", "IBA"], 
        answer: 1, 
        subject: "Plant Physiology" 
    },
    { 
        id: 119, 
        questionEn: "Which hormone is used for flower induction?", 
        questionHi: "फूलों को प्रेरित (flower induction) करने के लिए किस हार्मोन का उपयोग किया जाता है?", 
        options: ["ABA", "IAA", "Zeatin", "TIBA"], 
        answer: 3, 
        subject: "Plant Physiology" 
    },
    { 
        id: 120, 
        questionEn: "A hormone used to increase fruit size is?", 
        questionHi: "फलों का आकार बढ़ाने के लिए किस हार्मोन का उपयोग किया जाता है?", 
        options: ["MH", "Ethylene", "GA-3 / जिबरेलिक एसिड", "ABA"], 
        answer: 2, 
        subject: "Plant Physiology" 
    },
    { 
        id: 121, 
        questionEn: "A hybrid produced using the nucleolus of one parent cell and cytoplasm of both cells?", 
        questionHi: "एक जनक कोशिका के केंद्रक और दोनों कोशिकाओं के कोशिका द्रव्य (cytoplasm) का उपयोग करके निर्मित संकर क्या कहलाता है?", 
        options: ["Cybrid / साइब्रिड", "Hybrid / हाइब्रिड", "Chimera / काइमेरा", "Somatic Hybrid / दैहिक संकर"], 
        answer: 0, 
        subject: "Biotechnology" 
    },
    { 
        id: 122, 
        questionEn: "Arka Hans is a hybrid variety of grape obtained from the cross of?", 
        questionHi: "अरका हंस (Arka Hans) अंगूर की एक संकर किस्म है जो किसके संकरण से प्राप्त होती है?", 
        options: ["Perlette x Beauty Seedless", "Bangalore Blue x Anab-e-Shahi", "Anab-e-Shahi x Thompson Seedless", "Gulabi x Bangalore Blue"], 
        answer: 1, 
        subject: "Horticulture" 
    },
    { 
        id: 123, 
        questionEn: "An insect parasitizing another insect is called?", 
        questionHi: "दूसरे कीट पर परजीवी (parasitizing) करने वाले कीट को क्या कहा जाता है?", 
        options: ["Parasitoid / परजीवी (Parasitoid)", "Scavenger / अपमार्जक", "Decomposer / अपघटक", "Predator / परभक्षी"], 
        answer: 0, 
        subject: "Entomology" 
    },
    { 
        id: 124, 
        questionEn: "'Mausam' is a journal related to?", 
        questionHi: "'मौसम' (Mausam) एक पत्रिका है जो किससे संबंधित है?", 
        options: ["Pathology / रोग विज्ञान", "Entomology / कीट विज्ञान", "Meteorology / मौसम विज्ञान", "Agronomy / सस्य विज्ञान"], 
        answer: 2, 
        subject: "Meteorology" 
    },
    { 
        id: 125, 
        questionEn: "A library composed of complementary copies of cellular mRNA is?", 
        questionHi: "कोशिकीय mRNA की पूरक प्रतियों से बनी लाइब्रेरी क्या है?", 
        options: ["C-DNA Library / सी-डीएनए लाइब्रेरी", "Genomic Library / जीनोमिक लाइब्रेरी", "RNA Library / आरएनए लाइब्रेरी", "Protein Library / प्रोटीन लाइब्रेरी"], 
        answer: 0, 
        subject: "Biotechnology" 
    },
    { 
        id: 126, 
        questionEn: "A line indicating all possible combinations of two inputs purchased with a given investment fund?", 
        questionHi: "दी गई निवेश राशि से खरीदे गए दो इनपुट के सभी संभावित संयोजनों को दर्शाने वाली रेखा?", 
        options: ["Demand Curve / मांग वक्र", "Isoquant / आइसोक्वांट", "Iso-Cost line / आइसो-कॉस्ट लाइन", "Budget Line / बजट लाइन"], 
        answer: 2, 
        subject: "Economics" 
    },
    { 
        id: 127, 
        questionEn: "A line representing different combinations of two variable inputs used to produce a given amount of output?", 
        questionHi: "उत्पादन की दी गई मात्रा का उत्पादन करने के लिए उपयोग किए जाने वाले दो चर इनपुट के विभिन्न संयोजनों को दर्शाने वाली रेखा?", 
        options: ["Iso-Revenue / आइसो-रेवेन्यू", "Production Possibility Curve / उत्पादन संभावना वक्र", "Supply Curve / आपूर्ति वक्र", "Isoquant / आइसोक्वांट"], 
        answer: 3, 
        subject: "Economics" 
    },
    { 
        id: 128, 
        questionEn: "Which liquefied gas is used to fumigate soil against nematodes?", 
        questionHi: "नेमाटोड के खिलाफ मिट्टी को धूमन (fumigate) करने के लिए किस तरल गैस का उपयोग किया जाता है?", 
        options: ["Oxygen / ऑक्सीजन", "Nitrogen / नाइट्रोजन", "Methyl Bromide / मिथाइल ब्रोमाइड", "Carbon Dioxide / कार्बन डाइऑक्साइड"], 
        answer: 2, 
        subject: "Plant Pathology" 
    },
    { 
        id: 129, 
        questionEn: "A liquid formulation of insecticide which contains a carrier is?", 
        questionHi: "कीटनाशक का एक तरल निर्माण जिसमें एक वाहक (carrier) होता है?", 
        options: ["Water dispersible powder / पानी में घुलनशील पाउडर", "Granules / दाने", "Fumigant / धूमन", "Dust / धूल"], 
        answer: 0, 
        subject: "Entomology" 
    },
    { 
        id: 130, 
        questionEn: "A low Percentage Base Saturation (PBS) in soil means?", 
        questionHi: "मिट्टी में कम प्रतिशत बेस संतृप्ति (Low PBS) का क्या अर्थ है?", 
        options: ["Neutrality / उदासीनता", "Alkalinity / क्षारीयता", "Acidity / अम्लीयता", "Salinity / लवणता"], 
        answer: 2, 
        subject: "Soil Science" 
    },
    { 
        id: 131, 
        questionEn: "Which is a man-made cereal?", 
        questionHi: "मानव निर्मित अनाज (man-made cereal) कौन सा है?", 
        options: ["Maize / मक्का", "Triticale / ट्रिटिकल", "Barley / जौ", "Wheat / गेहूं"], 
        answer: 1, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 132, 
        questionEn: "A market consisting of a single buyer of a product and many sellers?", 
        questionHi: "एक बाजार जिसमें किसी उत्पाद का एक ही खरीदार और कई विक्रेता होते हैं?", 
        options: ["Duopoly / द्वयधिकार", "Oligopoly / अल्पाधिकार", "Monopsony / क्रेता एकाधिकार (Monopsony)", "Monopoly / एकाधिकार"], 
        answer: 2, 
        subject: "Economics" 
    },
    { 
        id: 133, 
        questionEn: "A mass of rotted organic matter made from waste is called?", 
        questionHi: "अपशिष्ट से बने सड़े हुए कार्बनिक पदार्थों के ढेर को क्या कहा जाता है?", 
        options: ["Compost / खाद (Compost)", "Fertilizer / उर्वरक", "Peat / पीट", "Mulch / मल्च"], 
        answer: 0, 
        subject: "Soil Science" 
    },
    { 
        id: 134, 
        questionEn: "A mechanism of self-pollination in which flowers open only after pollination has taken place?", 
        questionHi: "स्व-परागण की एक क्रियाविधि जिसमें फूल परागण होने के बाद ही खुलते हैं?", 
        options: ["Herkomgamy / हरकोगैमी", "Cleistogamy / क्लिस्टोगैमी", "Chasmogamy / चैस्मोगैमी", "Dichogamy / डाइकोगैमी"], 
        answer: 2, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 135, 
        questionEn: "Which is a medicinal variety of Rice?", 
        questionHi: "चावल की औषधीय किस्म (medicinal variety) कौन सी है?", 
        options: ["Njavara / नजवरा", "Jaya / जया", "IR-8 / आईआर-8", "Basmati / बासमती"], 
        answer: 0, 
        subject: "Agronomy" 
    },
    { 
        id: 136, 
        questionEn: "Which is a medium duration rice variety?", 
        questionHi: "मध्यम अवधि की चावल की किस्म कौन सी है?", 
        options: ["Bala / बाला", "Padma / पद्मा", "Ratna / रत्ना", "Jaya / जया"], 
        answer: 3, 
        subject: "Agronomy" 
    },
    { 
        id: 137, 
        questionEn: "A mental and/or physical reaction that happens through seeing is called?", 
        questionHi: "एक मानसिक और/या शारीरिक प्रतिक्रिया जो देखने के माध्यम से होती है, कहलाती है?", 
        options: ["Learning experience / सीखने का अनुभव", "Teaching / शिक्षण", "Observation / अवलोकन", "Demonstration / प्रदर्शन"], 
        answer: 0, 
        subject: "Extension Education" 
    },
    { 
        id: 138, 
        questionEn: "A method by which food is kept out from spoilage after harvest?", 
        questionHi: "वह विधि जिसके द्वारा कटाई के बाद भोजन को खराब होने से बचाया जाता है?", 
        options: ["Grading / ग्रेडिंग", "Processing / प्रसंस्करण", "Preservation / संरक्षण", "Marketing / विपणन"], 
        answer: 2, 
        subject: "Food Science" 
    },
    { 
        id: 139, 
        questionEn: "Which method does not provide opportunity to practice selection for superior plants till F5 generation?", 
        questionHi: "कौन सी विधि F5 पीढ़ी तक श्रेष्ठ पौधों के चयन का अवसर प्रदान नहीं करती है?", 
        options: ["Single seed descent / एकल बीज वंश", "Bulk method / बल्क विधि", "Mass selection / समूह चयन", "Pedigree method / वंशावली विधि"], 
        answer: 0, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 140, 
        questionEn: "A method for improving specific traits like disease resistance is?", 
        questionHi: "रोग प्रतिरोधक क्षमता जैसे विशिष्ट लक्षणों में सुधार के लिए कौन सी विधि है?", 
        options: ["Pure line / शुद्ध वंश", "Clonal selection / क्लोनल चयन", "Pedigree method / वंशावली विधि", "Mass selection / समूह चयन"], 
        answer: 2, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 141, 
        questionEn: "Applying an electric field to cells to increase membrane permeability for DNA introduction is called?", 
        questionHi: "डीएनए परिचय के लिए झिल्ली पारगम्यता बढ़ाने के लिए कोशिकाओं पर विद्युत क्षेत्र लागू करना क्या कहलाता है?", 
        options: ["Electroporation / इलेक्ट्रोपोरेशन", "Microinjection / माइक्रोइंजेक्शन", "Transfection / ट्रांसफेक्शन", "Biolistics / बायोलिस्टिक्स"], 
        answer: 0, 
        subject: "Biotechnology" 
    },
    { 
        id: 142, 
        questionEn: "A method in which 20 to 30 rural people or farmers are contacted in a group?", 
        questionHi: "वह विधि जिसमें 20 से 30 ग्रामीण लोगों या किसानों से एक समूह में संपर्क किया जाता है?", 
        options: ["Community contact / सामुदायिक संपर्क", "Mass contact / जन संपर्क", "Group contact / समूह संपर्क", "Individual contact / व्यक्तिगत संपर्क"], 
        answer: 2, 
        subject: "Extension Education" 
    },
    { 
        id: 143, 
        questionEn: "A method in which desirable scattered favorable genes are selected in different plants in each generation?", 
        questionHi: "वह विधि जिसमें प्रत्येक पीढ़ी में विभिन्न पौधों में वांछनीय बिखरे हुए अनुकूल जीनों का चयन किया जाता है?", 
        options: ["Recurrent selection / आवर्ती चयन", "Pure line selection / शुद्ध वंश चयन", "Clonal selection / क्लोनल चयन", "Mass selection / समूह चयन"], 
        answer: 0, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 144, 
        questionEn: "Which breeding method is used for wheat?", 
        questionHi: "गेहूं के लिए किस प्रजनन विधि (breeding method) का उपयोग किया जाता है?", 
        options: ["Composite breeding / समग्र प्रजनन", "Synthetic breeding / सिंथेटिक प्रजनन", "Pure line selection / शुद्ध वंश चयन", "Clonal selection / क्लोनल चयन"], 
        answer: 2, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 145, 
        questionEn: "Which method of breeding is appropriate for the improvement of a good variety?", 
        questionHi: "एक अच्छी किस्म के सुधार के लिए प्रजनन की कौन सी विधि उपयुक्त है?", 
        options: ["Back cross method / बैक क्रॉस विधि", "Pedigree method / वंशावली विधि", "Bulk method / बल्क विधि", "Mass selection / समूह चयन"], 
        answer: 0, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 146, 
        questionEn: "Which breeding method is NOT appropriate for cross-pollinated crops?", 
        questionHi: "कौन सी प्रजनन विधि पर-परागित (cross-pollinated) फसलों के लिए उपयुक्त नहीं है?", 
        options: ["Synthetic breeding / सिंथेटिक प्रजनन", "Mass selection / समूह चयन", "Pure line selection / शुद्ध वंश चयन", "Recurrent selection / आवर्ती चयन"], 
        answer: 2, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 147, 
        questionEn: "A method of hormone application not generally practiced is?", 
        questionHi: "हार्मोन अनुप्रयोग की वह विधि जिसका सामान्य रूप से अभ्यास नहीं किया जाता है?", 
        options: ["Injection / इंजेक्शन", "Dipping / डुबोना", "Dusting / डस्टिंग", "Spraying / छिड़काव"], 
        answer: 0, 
        subject: "Plant Physiology" 
    },
    { 
        id: 148, 
        questionEn: "A method of plant analysis for assessing nutrient requirement in sugarcane is?", 
        questionHi: "गन्ने में पोषक तत्वों की आवश्यकता का आकलन करने के लिए पौधों के विश्लेषण की एक विधि है?", 
        options: ["Sap analysis / रस विश्लेषण", "Leaf analysis / पत्ती विश्लेषण", "Crop Logging / क्रॉप लॉगिंग", "Soil testing / मृदा परीक्षण"], 
        answer: 2, 
        subject: "Agronomy" 
    },
    { 
        id: 149, 
        questionEn: "A method which is not used for handling segregating populations?", 
        questionHi: "वह विधि जिसका उपयोग विसंयोजित (segregating) आबादी को संभालने के लिए नहीं किया जाता है?", 
        options: ["Bulk method / बल्क विधि", "Pedigree method / वंशावली विधि", "Mass Selection / समूह चयन", "Backcross method / बैकक्रॉस विधि"], 
        answer: 0, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 150, 
        questionEn: "A modern method of cashew propagation is by?", 
        questionHi: "काजू के प्रवर्धन (propagation) की आधुनिक विधि कौन सी है?", 
        options: ["Veneer grafting / विनियर ग्राफ्टिंग", "Air layering / एयर लेयरिंग", "Soft wood grafting / सॉफ्ट वुड ग्राफ्टिंग", "Patch budding / पैच बडिंग"], 
        answer: 2, 
        subject: "Horticulture" 
    },
    { 
        id: 151, 
        questionEn: "Which of the following is a multi-seeded fruit?", 
        questionHi: "निम्नलिखित में से कौन सा बहु-बीजीय (multi-seeded) फल है?", 
        options: ["Tomato / टमाटर", "Litchi / लीची", "Plum / बेर", "Mango / आम"], 
        answer: 0, 
        subject: "Horticulture" 
    },
    { 
        id: 152, 
        questionEn: "Which is a multinational seed company?", 
        questionHi: "बहुराष्ट्रीय बीज कंपनी (multinational seed company) कौन सी है?", 
        options: ["KRIBHCO", "IFFCO", "Bayer (Monsanto)", "NSC"], 
        answer: 2, 
        subject: "Seed Technology" 
    },
    { 
        id: 153, 
        questionEn: "A multistage sales tax with credit for taxes paid on business purchases is?", 
        questionHi: "व्यावसायिक खरीद पर भुगतान किए गए करों के लिए क्रेडिट के साथ एक बहुस्तरीय बिक्री कर है?", 
        options: ["VAT / वैट", "GST / जीएसटी", "Excise Duty / उत्पाद शुल्क", "Income Tax / आयकर"], 
        answer: 0, 
        subject: "Economics" 
    },
    { 
        id: 154, 
        questionEn: "A natural hydrological unit having a common runoff outlet point is?", 
        questionHi: "एक सामान्य अपवाह आउटलेट बिंदु वाली प्राकृतिक हाइड्रोलॉजिकल इकाई है?", 
        options: ["Catchment / जलग्रहण", "Command area / कमांड क्षेत्र", "Watershed / जलसंभर (Watershed)", "Basin / बेसिन"], 
        answer: 2, 
        subject: "Agronomy" 
    },
    { 
        id: 155, 
        questionEn: "A natural organic product which acts as an insecticide and carrier?", 
        questionHi: "एक प्राकृतिक कार्बनिक उत्पाद जो कीटनाशक और वाहक (carrier) के रूप में कार्य करता है?", 
        options: ["Oil of petroleum / पेट्रोलियम का तेल", "Castor oil / अरंडी का तेल", "Fish oil / मछली का तेल", "Neem oil / नीम का तेल"], 
        answer: 0, 
        subject: "Entomology" 
    },
    { 
        id: 156, 
        questionEn: "A natural warming process involving the interaction of sunlight and CO2?", 
        questionHi: "सूर्य के प्रकाश और CO2 की परस्पर क्रिया से जुड़ी एक प्राकृतिक वार्मिंग प्रक्रिया?", 
        options: ["Climate change / जलवायु परिवर्तन", "Ozone depletion / ओजोन क्षरण", "Greenhouse effect / ग्रीनहाउस प्रभाव", "Global warming / ग्लोबल वार्मिंग"], 
        answer: 2, 
        subject: "Environmental Science" 
    },
    { 
        id: 157, 
        questionEn: "Which is a non-selective herbicide?", 
        questionHi: "गैर-चयनात्मक शाकनाशी (non-selective herbicide) कौन सा है?", 
        options: ["Glyphosate / ग्लाइफोसेट", "2,4-D", "Butachlor / ब्यूटक्लोर", "Atrazine / एट्राज़िन"], 
        answer: 0, 
        subject: "Agronomy" 
    },
    { 
        id: 158, 
        questionEn: "A nut with no cholesterol?", 
        questionHi: "वह अखरोट/नट जिसमें कोलेस्ट्रॉल नहीं होता है?", 
        options: ["Walnut / अखरोट", "Groundnut / मूंगफली", "Nutmeg / जायफल", "Cashew / काजू"], 
        answer: 2, 
        subject: "Horticulture" 
    },
    { 
        id: 159, 
        questionEn: "A plant with yellow flowers is?", 
        questionHi: "पीले फूलों वाला पौधा कौन सा है?", 
        options: ["Allamanda cathartica / अलामंडा", "Rose / गुलाब", "Jasmine / चमेली", "Hibiscus / गुड़हल"], 
        answer: 0, 
        subject: "Horticulture" 
    },
    { 
        id: 160, 
        questionEn: "A parasite feeding on a primary parasite is called?", 
        questionHi: "प्राथमिक परजीवी पर भोजन करने वाले परजीवी को क्या कहा जाता है?", 
        options: ["Scavenger / अपमार्जक", "Predator / परभक्षी", "Secondary parasite / द्वितीयक परजीवी", "Hyperparasite / हाइपरपैरासाइट"], 
        answer: 2, 
        subject: "Entomology" 
    },
    { 
        id: 161, 
        questionEn: "A partial substitute for petroleum diesel is?", 
        questionHi: "पेट्रोलियम डीजल का आंशिक विकल्प (partial substitute) क्या है?", 
        options: ["Biodiesel / बायोडीजल", "Ethanol / इथेनॉल", "Biogas / बायोगैस", "Methanol / मेथनॉल"], 
        answer: 0, 
        subject: "Agronomy" 
    },
    { 
        id: 162, 
        questionEn: "A period of 4 consecutive weeks from May to mid-Oct with less rainfall is termed?", 
        questionHi: "मई से मध्य अक्टूबर तक लगातार 4 सप्ताह की कम वर्षा वाली अवधि को क्या कहा जाता है?", 
        options: ["Socio-economic drought / सामाजिक-आर्थिक सूखा", "Meteorological drought / मौसम संबंधी सूखा", "Agricultural drought / कृषि सूखा", "Hydrological drought / हाइड्रोलॉजिकल सूखा"], 
        answer: 2, 
        subject: "Meteorology" 
    },
    { 
        id: 163, 
        questionEn: "A pest causing 5% to 10% crop loss is termed as?", 
        questionHi: "5% से 10% फसल हानि करने वाले कीट को क्या कहा जाता है?", 
        options: ["Minor Pest / गौण कीट", "Regular Pest / नियमित कीट", "Sporadic Pest / छिटपुट कीट", "Major Pest / प्रमुख कीट"], 
        answer: 0, 
        subject: "Entomology" 
    },
    { 
        id: 164, 
        questionEn: "A pest causing less than 5% crop loss is termed as?", 
        questionHi: "5% से कम फसल हानि करने वाले कीट को क्या कहा जाता है?", 
        options: ["Epidemic Pest / महामारी कीट", "Major Pest / प्रमुख कीट", "Negligible Pest / नगण्य कीट", "Minor Pest / गौण कीट"], 
        answer: 2, 
        subject: "Entomology" 
    },
    { 
        id: 165, 
        questionEn: "A pest causing more than 10% crop loss is termed as?", 
        questionHi: "10% से अधिक फसल हानि करने वाले कीट को क्या कहा जाता है?", 
        options: ["Major Pest / प्रमुख कीट", "Minor Pest / गौण कीट", "Endemic Pest / स्थानिक कीट", "Negligible Pest / नगण्य कीट"], 
        answer: 0, 
        subject: "Entomology" 
    },
    { 
        id: 166, 
        questionEn: "Which pigment is responsible for the red colour in tomato?", 
        questionHi: "टमाटर में लाल रंग के लिए कौन सा वर्णक (pigment) जिम्मेदार है?", 
        options: ["Xanthophyll / ज़ैंथोफिल", "Carotene / कैरोटीन", "Lycopene / लाइकोपीन", "Anthocyanin / एंथोसायनिन"], 
        answer: 2, 
        subject: "Horticulture" 
    },
    { 
        id: 167, 
        questionEn: "Which plant hormone is in a gaseous state?", 
        questionHi: "कौन सा पादप हार्मोन गैसीय अवस्था में होता है?", 
        options: ["Ethylene / एथिलीन", "Cytokinin / साइटोकिनिन", "Gibberellin / जिबरेलिन", "Auxin / ऑक्सिन"], 
        answer: 0, 
        subject: "Plant Physiology" 
    },
    { 
        id: 168, 
        questionEn: "Which plant hormone is used for rooting?", 
        questionHi: "जड़ जमाने (rooting) के लिए किस पादप हार्मोन का उपयोग किया जाता है?", 
        options: ["2,4-D", "NAA", "IBA", "IAA"], 
        answer: 2, 
        subject: "Plant Physiology" 
    },
    { 
        id: 169, 
        questionEn: "A plant requiring less than 12 hours of daylight is called?", 
        questionHi: "12 घंटे से कम दिन के उजाले की आवश्यकता वाले पौधे को क्या कहा जाता है?", 
        options: ["Short day plant / अल्प दिवस पादप", "Long day plant / दीर्घ दिवस पादप", "Intermediate plant / मध्यवर्ती पादप", "Day neutral plant / दिवस उदासीन पादप"], 
        answer: 0, 
        subject: "Plant Physiology" 
    },
    { 
        id: 170, 
        questionEn: "A plant which closes stomata during the day and opens at night to collect CO2?", 
        questionHi: "वह पौधा जो दिन में रंध्र (stomata) बंद रखता है और CO2 इकट्ठा करने के लिए रात में खोलता है?", 
        options: ["Maize / मक्का", "Rice / चावल", "Pineapple (CAM) / अनानास (CAM)", "Wheat / गेहूं"], 
        answer: 2, 
        subject: "Plant Physiology" 
    },
    { 
        id: 171, 
        questionEn: "The practice of turning undecomposed green plant tissue into the soil is called?", 
        questionHi: "अघटित हरे पौधों के ऊतकों को मिट्टी में मिलाने की प्रथा को क्या कहा जाता है?", 
        options: ["Green Manuring / हरी खाद", "Mulching / मल्चिंग", "Vermicomposting / वर्मीकम्पोस्टिंग", "Composting / कंपोस्टिंग"], 
        answer: 0, 
        subject: "Agronomy" 
    },
    { 
        id: 172, 
        questionEn: "An insect predatory larva on lac encrustation in the field?", 
        questionHi: "खेत में लाख (lac) की पपड़ी पर एक कीट शिकारी लार्वा कौन सा है?", 
        options: ["Syrphid fly / सिरफिड फ्लाई", "Lady bird beetle / लेडी बर्ड बीटल", "Holcocera / होल्कोसेरा", "Chrysopa / क्राइसोपा"], 
        answer: 2, 
        subject: "Entomology" 
    },
    { 
        id: 173, 
        questionEn: "Which primary mineral contains Potassium?", 
        questionHi: "किस प्राथमिक खनिज में पोटैशियम (Potassium) होता है?", 
        options: ["Feldspar / फेल्डस्पार", "Quartz / क्वार्ट्ज", "Apatite / एपेटाइट", "Mica / अभ्रक"], 
        answer: 0, 
        subject: "Soil Science" 
    },
    { 
        id: 174, 
        questionEn: "Movement of a substance from an area of high concentration to low concentration is?", 
        questionHi: "उच्च सांद्रता वाले क्षेत्र से कम सांद्रता वाले क्षेत्र में पदार्थ की गति क्या कहलाती है?", 
        options: ["Plasmolysis / जीवद्रव्यकुंचन", "Osmosis / परासरण", "Diffusion / विसरण", "Imbibition / अंतःशोषण"], 
        answer: 2, 
        subject: "Plant Physiology" 
    },
    { 
        id: 175, 
        questionEn: "A process in which the branch of a plant is cut off to produce a flush of new shoots?", 
        questionHi: "वह प्रक्रिया जिसमें नए अंकुर पैदा करने के लिए पौधे की शाखा को काट दिया जाता है?", 
        options: ["Pollarding / पोलार्डिंग", "Thinning / विरलन", "Coppicing / कॉपिसिंग", "Pruning / छंटाई"], 
        answer: 0, 
        subject: "Horticulture" 
    },
    { 
        id: 176, 
        questionEn: "Deciding in the present what to do in the future about crops and livestock is called?", 
        questionHi: "फसलों और पशुधन के बारे में भविष्य में क्या करना है, यह वर्तमान में तय करना क्या कहलाता है?", 
        options: ["Farm Accounting / कृषि लेखांकन", "Farm Budgeting / कृषि बजटिंग", "Farm Planning / कृषि नियोजन", "Farm Management / कृषि प्रबंधन"], 
        answer: 2, 
        subject: "Economics" 
    },
    { 
        id: 177, 
        questionEn: "Estimating costs, returns, and net profit of a farm is called?", 
        questionHi: "किसी खेत की लागत, रिटर्न और शुद्ध लाभ का अनुमान लगाना क्या कहलाता है?", 
        options: ["Farm Budgeting / कृषि बजटिंग", "Farm Planning / कृषि नियोजन", "Record Keeping / रिकॉर्ड रखना", "Auditing / अंकेक्षण"], 
        answer: 0, 
        subject: "Economics" 
    },
    { 
        id: 178, 
        questionEn: "The process of formation of somatic embryos from callus is called?", 
        questionHi: "कैलस (callus) से दैहिक भ्रूण (somatic embryos) के निर्माण की प्रक्रिया क्या कहलाती है?", 
        options: ["Cloning / क्लोनिंग", "Organogenesis / अंगजनन", "Somatic Embryogenesis / दैहिक भ्रूणजनन", "Micropropagation / सूक्ष्मप्रवर्धन"], 
        answer: 2, 
        subject: "Biotechnology" 
    },
    { 
        id: 179, 
        questionEn: "The process of removal/tipping of apical buds of Chickpea is termed as?", 
        questionHi: "चने (Chickpea) की शीर्ष कलियों (apical buds) को हटाने/काटने की प्रक्रिया को क्या कहा जाता है?", 
        options: ["Nipping / निपिंग", "Desuckering / डीसकरिंग", "Detasseling / डीटैसेलिंग", "Topping / टॉपिंग"], 
        answer: 0, 
        subject: "Agronomy" 
    },
    { 
        id: 180, 
        questionEn: "The process of treatment of stalks for final fibre extraction is termed as?", 
        questionHi: "अंतिम रेशा निकालने के लिए डंठलों के उपचार की प्रक्रिया को क्या कहा जाता है?", 
        options: ["Stripping / स्ट्रिपिंग", "Ginning / ओटाई", "Retting / रेटिंग", "Curing / क्योरिंग"], 
        answer: 2, 
        subject: "Agronomy" 
    },
    { 
        id: 181, 
        questionEn: "A product prepared from strained pulp of fully ripe tomato fruits after cooking?", 
        questionHi: "पूरी तरह से पके टमाटर के फलों के गूदे को पकाने के बाद तैयार किया गया उत्पाद?", 
        options: ["Tomato Sauce/Ketchup / टमाटर सॉस/केचप", "Pickle / अचार", "Paste / पेस्ट", "Puree / प्यूरी"], 
        answer: 0, 
        subject: "Horticulture" 
    },
    { 
        id: 182, 
        questionEn: "A progeny of single homozygous, self-pollinated crops is called?", 
        questionHi: "एकल समयुग्मजी (homozygous), स्व-परागित फसलों की संतान को क्या कहा जाता है?", 
        options: ["Inbred / अंतःप्रजात", "Clone / क्लोन", "Pure line / शुद्ध वंश", "Hybrid / संकर"], 
        answer: 2, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 183, 
        questionEn: "Which programme provides at least 100 days of wage employment in rural areas?", 
        questionHi: "कौन सा कार्यक्रम ग्रामीण क्षेत्रों में कम से कम 100 दिनों का मजदूरी रोजगार प्रदान करता है?", 
        options: ["MGNREGA / मनरेगा", "IRDP", "SGSY", "PMGSY"], 
        answer: 0, 
        subject: "Extension Education" 
    },
    { 
        id: 184, 
        questionEn: "A protective plantation against strong winds consisting of rows of trees is called?", 
        questionHi: "तेज हवाओं के खिलाफ पेड़ों की पंक्तियों से युक्त सुरक्षात्मक वृक्षारोपण को क्या कहा जाता है?", 
        options: ["Strip cropping / पट्टीदार खेती", "Alley cropping / गली फसल", "Wind breaks / विंड ब्रेक", "Shelterbelts / शेल्टरबेल्ट"], 
        answer: 2, 
        subject: "Forestry" 
    },
    { 
        id: 185, 
        questionEn: "A pruning process where a circular ring of bark is removed is called?", 
        questionHi: "एक छंटाई प्रक्रिया जहां छाल का एक गोलाकार छल्ला (ring) हटा दिया जाता है, कहलाती है?", 
        options: ["Ringing/Girdling / रिंगिंग/गर्डलिंग", "Thinning / विरलन", "Notching / नॉचिंग", "Heading back / हेडिंग बैक"], 
        answer: 0, 
        subject: "Horticulture" 
    },
    { 
        id: 186, 
        questionEn: "A published material on a small paper with brief information is called?", 
        questionHi: "संक्षिप्त जानकारी के साथ छोटे कागज पर प्रकाशित सामग्री को क्या कहा जाता है?", 
        options: ["Pamphlet / पैम्फलेट", "Bulletin / बुलेटिन", "Leaflet / पत्रक (Leaflet)", "Folder / फोल्डर"], 
        answer: 2, 
        subject: "Extension Education" 
    },
    { 
        id: 187, 
        questionEn: "Which is a reduviid predator of Rhinoceros beetle?", 
        questionHi: "राइनोसेरस बीटल (Rhinoceros beetle) का रेडुविड शिकारी (reduviid predator) कौन सा है?", 
        options: ["Platymerus / प्लैटिमेरस", "Cryptolaemus", "Trichogramma", "Epiricania"], 
        answer: 0, 
        subject: "Entomology" 
    },
    { 
        id: 188, 
        questionEn: "Repetitive cultivation of an ordered succession of crops in the same land is?", 
        questionHi: "एक ही भूमि में फसलों के क्रमिक अनुक्रम की पुनरावृत्ति खेती क्या है?", 
        options: ["Relay cropping / रिले क्रॉपिंग", "Mixed cropping / मिश्रित खेती", "Crop rotation / फसल चक्र", "Monocropping / मोनोक्रॉपिंग"], 
        answer: 2, 
        subject: "Agronomy" 
    },
    { 
        id: 189, 
        questionEn: "Which rice pest can be controlled by draining water?", 
        questionHi: "पानी निकालकर किस चावल के कीट को नियंत्रित किया जा सकता है?", 
        options: ["Case worm / केस वर्म", "Stem borer / तना छेदक", "Gall midge / गॉल मिज", "Leaf folder / पत्ती मोड़क"], 
        answer: 0, 
        subject: "Entomology" 
    },
    { 
        id: 190, 
        questionEn: "Which rice variety is tolerant to BPH (Brown Plant Hopper)?", 
        questionHi: "कौन सी चावल की किस्म BPH (ब्राउन प्लांट हॉपर) के प्रति सहनशील है?", 
        options: ["Sambha Mahsuri / सांबा मसूरी", "IR-8", "Mahamaya / महामाया", "Swarna / स्वर्ण"], 
        answer: 2, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 191, 
        questionEn: "Farm Management is the science of?", 
        questionHi: "फार्म प्रबंधन (Farm Management) किसका विज्ञान है?", 
        options: ["Decision making / निर्णय लेना", "Marketing / विपणन", "Breeding / प्रजनन", "Cultivation / खेती"], 
        answer: 0, 
        subject: "Economics" 
    },
    { 
        id: 192, 
        questionEn: "A seed is composed of?", 
        questionHi: "बीज (seed) किससे बना होता है?", 
        options: ["Embryo & Seed coat / भ्रूण और बीज कोट", "Endosperm & Seed coat / एंडोस्पर्म और बीज कोट", "Embryo, Endosperm & Seed coat / भ्रूण, एंडोस्पर्म और बीज कोट", "Embryo only / केवल भ्रूण"], 
        answer: 2, 
        subject: "Seed Technology" 
    },
    { 
        id: 193, 
        questionEn: "Which is a seedless variety of Mango?", 
        questionHi: "आम की बीज रहित (seedless) किस्म कौन सी है?", 
        options: ["Sindhu / सिंधु", "Dashehari / दशहरी", "Amrapali / आम्रपाली", "Ratna / रत्ना"], 
        answer: 0, 
        subject: "Horticulture" 
    },
    { 
        id: 194, 
        questionEn: "Which is a seedless (soft-seeded) variety of Pomegranate?", 
        questionHi: "अनार की बीज रहित (soft-seeded) किस्म कौन सी है?", 
        options: ["Arakta / आरक्ता", "Bhagwa / भगवा", "Ganesh / गणेश", "Mridula / मृदुला"], 
        answer: 2, 
        subject: "Horticulture" 
    },
    { 
        id: 195, 
        questionEn: "A segment of DNA that codes for a specific character is called?", 
        questionHi: "डीएनए का एक खंड जो एक विशिष्ट लक्षण के लिए कोड करता है, क्या कहलाता है?", 
        options: ["Gene / जीन", "Nucleus / केंद्रक", "Ribosome / राइबोसोम", "Chromosome / गुणसूत्र"], 
        answer: 0, 
        subject: "Genetics & Plant Breeding" 
    },
    { 
        id: 196, 
        questionEn: "A self-replicating, extra-chromosomal genetic material found in plant cells?", 
        questionHi: "पौधों की कोशिकाओं में पाया जाने वाला स्व-प्रतिकृति, अतिरिक्त-गुणसूत्र आनुवंशिक पदार्थ?", 
        options: ["Vacuole / रिक्तिका", "Golgi body / गॉल्जी बॉडी", "Plastids / प्लास्टिड्स", "Ribosome / राइबोसोम"], 
        answer: 2, 
        subject: "Botany" 
    },
    { 
        id: 197, 
        questionEn: "A semi-solid transparent product prepared from pectin-containing fruit is?", 
        questionHi: "पेक्टिन युक्त फलों से तैयार किया गया अर्ध-ठोस पारदर्शी उत्पाद कौन सा है?", 
        options: ["Jelly / जेली", "Jam / जैम", "Preserve / प्रिजर्व", "Marmalade / मुरब्बा"], 
        answer: 0, 
        subject: "Food Science" 
    },
    { 
        id: 198, 
        questionEn: "A series of illustrated cards flashed before a group to tell a story is called?", 
        questionHi: "कहानी बताने के लिए एक समूह के सामने दिखाए गए सचित्र कार्डों की एक श्रृंखला को क्या कहा जाता है?", 
        options: ["Flannel graph / फलालैन ग्राफ", "Posters / पोस्टर", "Flash cards / फ्लैश कार्ड", "Charts / चार्ट"], 
        answer: 2, 
        subject: "Extension Education" 
    },
    { 
        id: 199, 
        questionEn: "Which is a shade-loving leafy vegetable?", 
        questionHi: "छाया पसंद करने वाली (shade-loving) पत्तेदार सब्जी कौन सी है?", 
        options: ["Water leaf / वाटर लीफ", "Amaranthus / चौलाई", "Fenugreek / मेथी", "Spinach / पालक"], 
        answer: 0, 
        subject: "Horticulture" 
    },
    { 
        id: 200, 
        questionEn: "A sheet of paper with a pictorial slogan used to attract mass attention is?", 
        questionHi: "जनसमूह का ध्यान आकर्षित करने के लिए सचित्र नारे वाला कागज का एक पत्र क्या है?", 
        options: ["Folder / फोल्डर", "Banner / बैनर", "Poster / पोस्टर", "Leaflet / पत्रक"], 
        answer: 2, 
        subject: "Extension Education" 
    }
    ];

    window.quizData = window.quizData.concat(data);
})();

(function() {
    const data = [
    { 
        id: 701, 
        questionEn: "Safflower belongs to which botanical family?", 
        questionHi: "कुसुम (Safflower) किस वानस्पतिक कुल से संबंधित है?", 
        options: ["Fabaceae / फैबेसी", "Asteraceae (Compositae) / एस्टेरेसी", "Poaceae / पोएसी", "Malvaceae / मालवेसी"], 
        answer: 1,
        subject: "Botany"
    },
    { 
        id: 702, 
        questionEn: "Triticale is the first man-made cereal, developed by crossing Wheat and?", 
        questionHi: "ट्रिटिकल पहला मानव निर्मित अनाज है, जिसे गेहूं और किसके संकरण से विकसित किया गया है?", 
        options: ["Maize / मक्का", "Oat / जई", "Rye / राई", "Barley / जौ"], 
        answer: 2,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 703, 
        questionEn: "Which was the first dwarf variety of rice developed in India?", 
        questionHi: "भारत में विकसित चावल की पहली बौनी किस्म कौन सी थी?", 
        options: ["Jaya / जया", "IR-8 / आईआर-8", "Taichung Native 1 / टीएन-1", "Padma / पद्मा"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 704, 
        questionEn: "What is the base temperature required for the germination of wheat?", 
        questionHi: "गेहूं के अंकुरण के लिए आवश्यक आधार तापमान (base temperature) क्या है?", 
        options: ["10.5 °C", "4.5 °C", "15.0 °C", "0.5 °C"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 705, 
        questionEn: "The toxic substance present in Cotton seed is known as?", 
        questionHi: "कपास के बीज में मौजूद विषैले पदार्थ को किस नाम से जाना जाता है?", 
        options: ["Glucosinolate / ग्लूकोसाइनोलेट", "Saponin / सैपोनिन", "Aflatoxin / एफ्लाटॉक्सिन", "Gossypol / गॉसिपोल"], 
        answer: 3,
        subject: "Biochemistry"
    },
    { 
        id: 706, 
        questionEn: "The toxic substance present in Sorghum leaves during early growth is?", 
        questionHi: "शुरुआती वृद्धि के दौरान ज्वार (Sorghum) की पत्तियों में मौजूद विषैला पदार्थ कौन सा है?", 
        options: ["HCN (Dhurrin) / एचसीएन (धुरिन)", "Ricinin / रिसिनिन", "BOAA / बीओएए", "Trypsin inhibitor / ट्रिप्सिन अवरोधक"], 
        answer: 0,
        subject: "Plant Pathology"
    },
    { 
        id: 707, 
        questionEn: "Consumption of Khesari dal (Lathyrus sativus) causes Lathyrism due to the presence of?", 
        questionHi: "खेसारी दाल (Lathyrus sativus) के सेवन से लेथिरिज्म रोग किसकी उपस्थिति के कारण होता है?", 
        options: ["Ergotamine / एर्गोटामाइन", "BOAA (Neurotoxin) / बीओएए (न्यूरोटॉक्सिन)", "Aflatoxin / एफ्लाटॉक्सिन", "Gossypol / गॉसिपोल"], 
        answer: 1,
        subject: "Biochemistry"
    },
    { 
        id: 708, 
        questionEn: "The primary protein found in corn (maize) is called?", 
        questionHi: "मक्का (corn) में पाए जाने वाले प्राथमिक प्रोटीन को क्या कहा जाता है?", 
        options: ["Gluten / ग्लूटेन", "Zein / जीन (Zein)", "Oryzenin / ओरीजेनिन", "Casein / कैसिइन"], 
        answer: 1,
        subject: "Biochemistry"
    },
    { 
        id: 709, 
        questionEn: "The primary protein found in wheat which imparts baking quality is?", 
        questionHi: "गेहूं में पाया जाने वाला प्राथमिक प्रोटीन जो बेकिंग की गुणवत्ता प्रदान करता है?", 
        options: ["Gluten / ग्लूटेन", "Zein / जीन", "Oryzenin / ओरीजेनिन", "Globulin / ग्लोब्युलिन"], 
        answer: 0,
        subject: "Food Science"
    },
    { 
        id: 710, 
        questionEn: "Which vitamin is heavily lost during the polishing (milling) of rice?", 
        questionHi: "चावल की पॉलिशिंग (मिलिंग) के दौरान कौन सा विटामिन भारी मात्रा में नष्ट हो जाता है?", 
        options: ["Vitamin D / विटामिन डी", "Vitamin C / विटामिन सी", "Vitamin B1 (Thiamine) / विटामिन बी1", "Vitamin A / विटामिन ए"], 
        answer: 2,
        subject: "Food Science"
    },
    { 
        id: 711, 
        questionEn: "The most prominent and problematic grassy weed in wheat fields is?", 
        questionHi: "गेहूं के खेतों में सबसे प्रमुख और समस्याग्रस्त घास वाली खरपतवार कौन सी है?", 
        options: ["Cyperus rotundus / मोथा", "Echinochloa crus-galli / इचिनोक्लोआ क्रस-गल्ली", "Cynodon dactylon / दूब घास", "Phalaris minor / फैलारिस माइनर"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 712, 
        questionEn: "Which bio-fertilizer is most widely recommended for sugarcane cultivation?", 
        questionHi: "गन्ने की खेती के लिए सबसे व्यापक रूप से किस जैव-उर्वरक (bio-fertilizer) की सिफारिश की जाती है?", 
        options: ["Azotobacter / एज़ोटोबैक्टर", "Rhizobium / राइजोबियम", "Blue Green Algae / नील हरित शैवाल", "Azolla / अजोला"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 713, 
        questionEn: "Which bio-fertilizer is highly suitable for Sorghum and other grasses?", 
        questionHi: "ज्वार और अन्य घासों के लिए कौन सा जैव-उर्वरक अत्यधिक उपयुक्त है?", 
        options: ["Rhizobium / राइजोबियम", "Azospirillum / एज़ोस्पिरिलम", "Frankia / फ्रैंकिया", "Mycorrhiza / माइकोराइजा"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 714, 
        questionEn: "Which soil order covers the largest geographical area in India?", 
        questionHi: "भारत में कौन सा मृदा गण (Soil order) सबसे बड़ा भौगोलिक क्षेत्र कवर करता है?", 
        options: ["Aridisols / एरिडिसोल", "Inceptisols / इनसेप्टिसोल", "Entisols / एंटीसोल", "Vertisols / वर्टीसोल"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 715, 
        questionEn: "Which soil order is predominantly associated with Black cotton soils?", 
        questionHi: "काली कपास मिट्टी (Black cotton soils) मुख्य रूप से किस मृदा गण से जुड़ी है?", 
        options: ["Vertisols / वर्टीसोल", "Alfisols / अल्फिसोल", "Oxisols / ऑक्सिसोल", "Mollisols / मोलिसोल"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 716, 
        questionEn: "According to ISSS, the diameter of a Silt particle ranges between?", 
        questionHi: "ISSS के अनुसार, सिल्ट (Silt) कण का व्यास किसके बीच होता है?", 
        options: ["0.2 to 0.02 mm", "2.0 to 0.2 mm", "0.02 to 0.002 mm", "< 0.002 mm"], 
        answer: 2,
        subject: "Soil Science"
    },
    { 
        id: 717, 
        questionEn: "Peat soils are generally characterized as?", 
        questionHi: "पीट मिट्टी (Peat soils) को आम तौर पर किस रूप में जाना जाता है?", 
        options: ["Acidic & high organic matter / अम्लीय और उच्च कार्बनिक पदार्थ", "Highly alkaline / अत्यधिक क्षारीय", "Sandy & arid / रेतीली और शुष्क", "Saline & low organic matter / लवणीय और कम कार्बनिक पदार्थ"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 718, 
        questionEn: "The highest and most generalized category of soil classification is?", 
        questionHi: "मृदा वर्गीकरण की सर्वोच्च और सबसे सामान्य श्रेणी कौन सी है?", 
        options: ["Family / कुल", "Great Group / महान समूह", "Order / ऑर्डर (गण)", "Series / श्रृंखला"], 
        answer: 2,
        subject: "Soil Science"
    },
    { 
        id: 719, 
        questionEn: "Soil aggregates that are naturally formed in the soil profile are called?", 
        questionHi: "मिट्टी के आवरण में प्राकृतिक रूप से बनने वाले मिट्टी के समुच्चयों (aggregates) को क्या कहा जाता है?", 
        options: ["Clods / क्लॉड्स (ढेले)", "Peds / पेड्स", "Concretions / कंक्रीट", "Fragments / टुकड़े"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 720, 
        questionEn: "Soil aggregates that are artificially formed by tillage operations are known as?", 
        questionHi: "जुताई कार्यों द्वारा कृत्रिम रूप से बनाए गए मिट्टी के ढेलों को क्या कहा जाता है?", 
        options: ["Peds / पेड्स", "Humus / ह्यूमस", "Pans / पैन", "Clods / क्लॉड्स"], 
        answer: 3,
        subject: "Soil Science"
    },
    { 
        id: 721, 
        questionEn: "Which nutrient is highly essential for the translocation of sugars in plants?", 
        questionHi: "पौधों में शर्करा के स्थानांतरण (translocation) के लिए कौन सा पोषक तत्व अत्यधिक आवश्यक है?", 
        options: ["Calcium / कैल्शियम", "Phosphorus / फास्फोरस", "Boron / बोरॉन", "Zinc / जस्ता"], 
        answer: 2,
        subject: "Plant Physiology"
    },
    { 
        id: 722, 
        questionEn: "The maximum permissible biuret content in urea intended for foliar spray is?", 
        questionHi: "पर्णीय छिड़काव (foliar spray) के लिए यूरिया में अनुमत अधिकतम बाियुरेट (biuret) मात्रा कितनी है?", 
        options: ["0.5%", "1.5%", "2.0%", "5.0%"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 723, 
        questionEn: "Which fertilizer is traditionally known as 'Pearl Ash'?", 
        questionHi: "किस उर्वरक को पारंपरिक रूप से 'पर्ल ऐश' (Pearl Ash) के रूप में जाना जाता है?", 
        options: ["Sodium nitrate / सोडियम नाइट्रेट", "Potassium sulphate / पोटेशियम सल्फेट", "Calcium cyanamide / कैल्शियम साइनामाइड", "Potassium carbonate / पोटेशियम कार्बोनेट"], 
        answer: 3,
        subject: "Soil Science"
    },
    { 
        id: 724, 
        questionEn: "The yellow color of Turmeric is due to the presence of?", 
        questionHi: "हल्दी का पीला रंग किसकी उपस्थिति के कारण होता है?", 
        options: ["Curcumin / करक्यूमिन", "Quercetin / क्वेरसेटिन", "Lycopene / लाइकोपीन", "Carotene / कैरोटीन"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 725, 
        questionEn: "The orange color of carrot is primarily due to?", 
        questionHi: "गाजर का नारंगी रंग मुख्य रूप से किसके कारण होता है?", 
        options: ["Anthocyanin / एंथोसायनिन", "Xanthophyll / ज़ैंथोफिल", "Carotene / कैरोटीन", "Betalain / बीटालेन"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 726, 
        questionEn: "The red color of carrot is due to the presence of?", 
        questionHi: "गाजर का लाल रंग किसकी उपस्थिति के कारण होता है?", 
        options: ["Anthocyanin / एंथोसायनिन", "Lycopene / लाइकोपीन", "Carotene / कैरोटीन", "Chlorophyll / क्लोरोफिल"], 
        answer: 0,
        subject: "Horticulture"
    },
    { 
        id: 727, 
        questionEn: "The extreme bitterness in bitter gourd (Karela) is due to?", 
        questionHi: "करेले में अत्यधिक कड़वाहट किसके कारण होती है?", 
        options: ["Cucurbitacin / कुकुरबिटासिन", "Momordicine / मोमोर्डिसिन", "Solanine / सोलानिन", "Capsaicin / कैप्साइसिन"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 728, 
        questionEn: "The bitterness often found in cucumbers is caused by?", 
        questionHi: "खीरे में अक्सर पाई जाने वाली कड़वाहट किसके कारण होती है?", 
        options: ["Allyl propyl disulphide / एलील प्रोपाइल डाइसल्फाइड", "Solasodine / सोलासोडिन", "Cucurbitacin / कुकुरबिटासिन", "Tannin / टैनिन"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 729, 
        questionEn: "Astringency in Brinjal (Eggplant) is associated with the presence of?", 
        questionHi: "बैंगन में कसैलापन (Astringency) किसकी उपस्थिति से जुड़ा है?", 
        options: ["Allicin / एलीसिन", "Solasodine / सोलासोडिन", "Curcumin / करक्यूमिन", "Momordicine / मोमोर्डिसिन"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 730, 
        questionEn: "Tartaric acid is predominantly found in large amounts in?", 
        questionHi: "टार्टरिक एसिड मुख्य रूप से बड़ी मात्रा में किसमें पाया जाता है?", 
        options: ["Apple and Pear / सेब और नाशपाती", "Lemon and Orange / नींबू और संतरा", "Tamarind and Grapes / इमली और अंगूर", "Mango and Papaya / आम और पपीता"], 
        answer: 2,
        subject: "Food Science"
    },
    { 
        id: 731, 
        questionEn: "Citric acid is predominantly found in?", 
        questionHi: "साइट्रिक एसिड मुख्य रूप से किसमें पाया जाता है?", 
        options: ["Citrus fruits / खट्टे फल", "Apple / सेब", "Tamarind / इमली", "Grapes / अंगूर"], 
        answer: 0,
        subject: "Food Science"
    },
    { 
        id: 732, 
        questionEn: "Malic acid is the primary acid predominantly found in?", 
        questionHi: "मैलिक एसिड मुख्य रूप से किसमें पाया जाने वाला प्राथमिक अम्ल है?", 
        options: ["Grapes / अंगूर", "Lemon / नींबू", "Apple / सेब", "Tamarind / इमली"], 
        answer: 2,
        subject: "Food Science"
    },
    { 
        id: 733, 
        questionEn: "Which nut is considered the richest source of Protein?", 
        questionHi: "किस अखरोट (nut) को प्रोटीन का सबसे समृद्ध स्रोत माना जाता है?", 
        options: ["Almond / बादाम", "Walnut / अखरोट", "Cashewnut / काजू", "Pecan / पेकन"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 734, 
        questionEn: "Which fruit is widely known as the 'Butter fruit'?", 
        questionHi: "किस फल को व्यापक रूप से 'बटर फ्रूट' (Butter fruit) के रूप में जाना जाता है?", 
        options: ["Mangosteen / मैंगोस्टीन", "Avocado / एवोकैडो", "Durian / डूरियन", "Macadamia / मैकाडामिया"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 735, 
        questionEn: "Which fruit is popularly known as the 'Star apple'?", 
        questionHi: "किस फल को 'स्टार एप्पल' (Star apple) के नाम से जाना जाता है?", 
        options: ["Passion fruit / पैशन फ्रूट", "Rambutan / रामबूटन", "Carambola (Star fruit) / कमरख (स्टार फ्रूट)", "Dragon fruit / ड्रैगन फ्रूट"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 736, 
        questionEn: "Polyembryony (multiple embryos in a single seed) is a common feature in?", 
        questionHi: "पॉलीएम्ब्रायोनी (एक ही बीज में कई भ्रूण) किस फल की एक सामान्य विशेषता है?", 
        options: ["Apple / सेब", "Citrus / नींबू वर्गीय फल", "Banana / केला", "Papaya / पपीता"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 737, 
        questionEn: "Which chemical is highly recommended to break seed dormancy in potato?", 
        questionHi: "आलू में बीजों की सुप्त अवस्था (dormancy) तोड़ने के लिए किस रसायन की अत्यधिक अनुशंसा की जाती है?", 
        options: ["Calcium carbonate / कैल्शियम कार्बोनेट", "Sodium chloride / सोडियम क्लोराइड", "Thiourea / थायोयूरिया", "Maleic Hydrazide / मैलेइक हाइड्राजाइड"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 738, 
        questionEn: "Which growth regulator is commercially used to induce uniform flowering in pineapple?", 
        questionHi: "अनानास में एक समान पुष्पन प्रेरित करने के लिए व्यावसायिक रूप से किस विकास नियामक (growth regulator) का उपयोग किया जाता है?", 
        options: ["Cytokinin / साइटोकिनिन", "Ethrel (Ethephon) / एथरेल (एथेफॉन)", "Gibberellic acid / जिबरेलिक एसिड", "Abscisic acid / एब्सिसिक एसिड"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 739, 
        questionEn: "Which training system allows maximum sunlight interception in grape vines?", 
        questionHi: "कौन सी प्रशिक्षण प्रणाली (training system) अंगूर की बेलों में अधिकतम सूर्य के प्रकाश को रोकने की अनुमति देती है?", 
        options: ["Kniffin system / निफिन सिस्टम", "Head system / हेड सिस्टम", "Telephone system / टेलीफोन सिस्टम", "Bower system (Pandal) / बावर सिस्टम (पंडाल)"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 740, 
        questionEn: "The highly advanced technique of rapid multiplication of plants in vitro is called?", 
        questionHi: "इन विट्रो में पौधों के तीव्र गुणन की अत्यधिक उन्नत तकनीक को क्या कहा जाता है?", 
        options: ["Grafting / ग्राफ्टिंग", "Micropropagation / सूक्ष्मप्रवर्धन", "Air layering / एयर लेयरिंग", "Budding / बडिंग"], 
        answer: 1,
        subject: "Biotechnology"
    },
    { 
        id: 741, 
        questionEn: "The very first plant parasitic nematode was discovered by?", 
        questionHi: "सबसे पहला पादप परजीवी सूत्रकृमि (nematode) किसके द्वारा खोजा गया था?", 
        options: ["Anton de Bary / एंटन डी बेरी", "T. Needham / टी. नीधम", "Louis Pasteur / लुई पाश्चर", "N.A. Cobb / एन.ए. कॉब"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 742, 
        questionEn: "Who is universally recognized as the Father of Nematology?", 
        questionHi: "सार्वभौमिक रूप से 'नेमाटोलॉजी के जनक' के रूप में किसे मान्यता प्राप्त है?", 
        options: ["T. Needham / टी. नीधम", "N.A. Cobb / एन.ए. कॉब", "E.J. Butler / ई.जे. बटलर", "K.C. Mehta / के.सी. मेहता"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 743, 
        questionEn: "Sandal spike, a devastating disease of sandalwood trees, is caused by?", 
        questionHi: "चंदन के पेड़ों की विनाशकारी बीमारी 'सैंडल स्पाइक' (Sandal spike) किसके कारण होती है?", 
        options: ["Bacteria / जीवाणु", "Fungus / कवक", "Phytoplasma / फाइटोप्लाज्मा", "Virus / विषाणु"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 744, 
        questionEn: "Grassy shoot disease of sugarcane is caused by?", 
        questionHi: "गन्ने का 'ग्रैसी शूट' (Grassy shoot) रोग किसके कारण होता है?", 
        options: ["Phytoplasma / फाइटोप्लाज्मा", "Nematode / सूत्रकृमि", "Fungus / कवक", "Bacteria / जीवाणु"], 
        answer: 0,
        subject: "Plant Pathology"
    },
    { 
        id: 745, 
        questionEn: "Which insect acts as a vector for the Rice Grassy Stunt virus?", 
        questionHi: "चावल के ग्रैसी स्टंट (Grassy Stunt) वायरस के लिए कौन सा कीट वाहक (vector) का काम करता है?", 
        options: ["Green leafhopper / हरा लीफहॉपर", "Yellow stem borer / पीला तना छेदक", "Gall midge / गॉल मिज", "Brown plant hopper (BPH) / ब्राउन प्लांट हॉपर"], 
        answer: 3,
        subject: "Entomology"
    },
    { 
        id: 746, 
        questionEn: "'Hopper burn' in rice fields is predominantly caused by?", 
        questionHi: "चावल के खेतों में 'हॉपर बर्न' (Hopper burn) मुख्य रूप से किसके कारण होता है?", 
        options: ["Rice gundhi bug / राइस गंधी बग", "Brown Plant Hopper (BPH) / ब्राउन प्लांट हॉपर", "Whitebacked planthopper / व्हाइटबैक्ड प्लांटहॉपर", "Leaf folder / पत्ती मोड़क"], 
        answer: 1,
        subject: "Entomology"
    },
    { 
        id: 747, 
        questionEn: "'Dead heart' symptom observed in sugarcane during early growth is caused by?", 
        questionHi: "गन्ने में प्रारंभिक विकास के दौरान देखा गया 'डेड हार्ट' लक्षण किसके कारण होता है?", 
        options: ["White grub / सफेद लट", "Shoot borer / तना छेदक (Shoot borer)", "Pyrilla / पायरिला", "Termites / दीमक"], 
        answer: 1,
        subject: "Entomology"
    },
    { 
        id: 748, 
        questionEn: "Which indigenous cattle breed is affectionately known as 'Lola' due to its loose skin?", 
        questionHi: "किस स्वदेशी मवेशी नस्ल को उसकी ढीली त्वचा के कारण प्यार से 'लोला' (Lola) कहा जाता है?", 
        options: ["Sahiwal / साहीवाल", "Red Sindhi / लाल सिंधी", "Gir / गिर", "Tharparkar / थारपारकर"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 749, 
        questionEn: "Which cattle breed is famous for its heavy and fast 'Sawai chal' (swift gait)?", 
        questionHi: "कौन सी मवेशी नस्ल अपनी भारी और तेज 'सवाई चाल' के लिए प्रसिद्ध है?", 
        options: ["Kankrej / कांकरेज", "Amritmahal / अमृतमहल", "Hallikar / हल्लीकर", "Nagori / नागौरी"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 750, 
        questionEn: "Which milch breed of cow is easily identified by its majestic 'half-moon' shaped horns?", 
        questionHi: "गाय की किस दुधारू नस्ल को उसके राजसी 'आधे-चांद' के आकार के सींगों से आसानी से पहचाना जा सकता है?", 
        options: ["Sahiwal / साहीवाल", "Gir / गिर", "Tharparkar / थारपारकर", "Deoni / देवनी"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 751, 
        questionEn: "Which is recognized as the tallest breed of sheep in India?", 
        questionHi: "भारत में भेड़ की सबसे लंबी (tallest) नस्ल किसे माना जाता है?", 
        options: ["Nellore / नेल्लोर", "Marwari / मारवाड़ी", "Gaddi / गद्दी", "Deccani / दक्कनी"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 752, 
        questionEn: "Which goat breed is highly prized and known as the 'Jersey of goats' due to its high milk fat?", 
        questionHi: "उच्च दूध वसा के कारण किस बकरी की नस्ल को अत्यधिक महत्व दिया जाता है और इसे 'बकरियों की जर्सी' कहा जाता है?", 
        options: ["Saanen / सानेन", "Jamunapari / जमुनापारी", "Anglo-Nubian / एंग्लो-न्युबियन", "Beetal / बीटल"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 753, 
        questionEn: "Toggenburg is a famous Swiss breed of which livestock?", 
        questionHi: "टोगेनबर्ग (Toggenburg) किस पशुधन की प्रसिद्ध स्विस नस्ल है?", 
        options: ["Cow / गाय", "Goat / बकरी", "Sheep / भेड़", "Pig / सुअर"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 754, 
        questionEn: "Central Avian Research Institute (CARI) is situated at?", 
        questionHi: "केंद्रीय पक्षी अनुसंधान संस्थान (CARI) कहाँ स्थित है?", 
        options: ["Izatnagar, Bareilly / इज्जतनगर, बरेली", "Karnal / करनाल", "Hyderabad / हैदराबाद", "Mathura / मथुरा"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 755, 
        questionEn: "Which is the most devastating and deadly viral disease in poultry birds worldwide?", 
        questionHi: "दुनिया भर में पोल्ट्री पक्षियों में सबसे विनाशकारी और घातक वायरल बीमारी कौन सी है?", 
        options: ["Fowl cholera / फाउल हैजा", "Coccidiosis / कॉक्सिडियोसिस", "Fowl pox / फाउल पॉक्स", "Ranikhet (Newcastle disease) / रानीखेत"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 756, 
        questionEn: "Coccidiosis, a severe intestinal disease in poultry, is caused by?", 
        questionHi: "पोल्ट्री में एक गंभीर आंतों की बीमारी 'कॉक्सिडियोसिस' किसके कारण होती है?", 
        options: ["Virus / विषाणु", "Fungus / कवक", "Protozoa / प्रोटोजोआ", "Bacteria / जीवाणु"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 757, 
        questionEn: "The specific act of mating in pigs is technically known as?", 
        questionHi: "सूअरों में संभोग की विशिष्ट क्रिया को तकनीकी रूप से क्या कहा जाता है?", 
        options: ["Tupping / टपिंग", "Coupling / कपलिंग", "Serving / सर्विंग", "Covering / कवरिंग"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 758, 
        questionEn: "The specific act of giving birth in sheep is known as?", 
        questionHi: "भेड़ में बच्चे को जन्म देने की विशिष्ट क्रिया को क्या कहा जाता है?", 
        options: ["Lambing / लैम्बिंग", "Kidding / किडिंग", "Farrowing / फैरोइंग", "Calving / काल्विंग"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 759, 
        questionEn: "The specific act of giving birth in goats is known as?", 
        questionHi: "बकरियों में बच्चे को जन्म देने की विशिष्ट क्रिया को क्या कहा जाता है?", 
        options: ["Farrowing / फैरोइंग", "Lambing / लैम्बिंग", "Kidding / किडिंग", "Calving / काल्विंग"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 760, 
        questionEn: "The meat of a young calf (young cattle) is properly known as?", 
        questionHi: "एक युवा बछड़े (युवा मवेशी) के मांस को ठीक से क्या कहा जाता है?", 
        options: ["Chevon / चेवन", "Beef / बीफ", "Pork / पोर्क", "Veal / वील"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 761, 
        questionEn: "What is the normal specific gravity of cow's milk?", 
        questionHi: "गाय के दूध का सामान्य विशिष्ट गुरुत्व (specific gravity) क्या होता है?", 
        options: ["1.032 to 1.035", "1.010 to 1.015", "1.028 to 1.030", "1.040 to 1.045"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 762, 
        questionEn: "The High Yielding Variety Programme (HYVP) was launched in India in?", 
        questionHi: "भारत में उच्च उपज किस्म कार्यक्रम (HYVP) कब शुरू किया गया था?", 
        options: ["1970", "1966", "1960", "1952"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 763, 
        questionEn: "The Swarnjayanti Gram Swarozgar Yojana (SGSY) was launched to alleviate rural poverty in?", 
        questionHi: "ग्रामीण गरीबी को कम करने के लिए स्वर्णजयंती ग्राम स्वरोजगार योजना (SGSY) कब शुरू की गई थी?", 
        options: ["2005", "1999", "1985", "1992"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 764, 
        questionEn: "The pan-India electronic trading portal, National Agriculture Market (e-NAM), was launched in?", 
        questionHi: "अखिल भारतीय इलेक्ट्रॉनिक ट्रेडिंग पोर्टल, राष्ट्रीय कृषि बाजार (e-NAM), कब लॉन्च किया गया था?", 
        options: ["2018", "2014", "2016", "2020"], 
        answer: 2,
        subject: "Economics"
    },
    { 
        id: 765, 
        questionEn: "Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) with the motto 'Har Khet Ko Pani' was launched in?", 
        questionHi: "'हर खेत को पानी' के आदर्श वाक्य के साथ प्रधान मंत्री कृषि सिंचाई योजना (PMKSY) कब शुरू की गई थी?", 
        options: ["2015", "2014", "2017", "2019"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 766, 
        questionEn: "Who proposed the 'Pure Line Theory' in genetics?", 
        questionHi: "आनुवंशिकी में 'प्योर लाइन थ्योरी' (Pure Line Theory) का प्रस्ताव किसने दिया था?", 
        options: ["Mendel / मेंडल", "W.L. Johannsen / डब्ल्यू.एल. जोहान्सन", "Morgan / मॉर्गन", "Bateson / बेटसन"], 
        answer: 1,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 767, 
        questionEn: "The term 'Genetics' was first coined by?", 
        questionHi: "'जेनेटिक्स' (Genetics) शब्द सबसे पहले किसके द्वारा गढ़ा गया था?", 
        options: ["W.L. Johannsen / डब्ल्यू.एल. जोहान्सन", "Muller / मुलर", "William Bateson / विलियम बेटसन", "Mendel / मेंडल"], 
        answer: 2,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 768, 
        questionEn: "The term 'Gene', replacing Mendel's 'factor', was coined by?", 
        questionHi: "मेंडल के 'कारक' (factor) को प्रतिस्थापित करने वाला 'जीन' (Gene) शब्द किसके द्वारा गढ़ा गया था?", 
        options: ["W.L. Johannsen / डब्ल्यू.एल. जोहान्सन", "Watson / वाटसन", "Bateson / बेटसन", "Morgan / मॉर्गन"], 
        answer: 0,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 769, 
        questionEn: "During which specific stage of prophase I does the synapsis of homologous chromosomes occur?", 
        questionHi: "प्रोफ़ेज़ I के किस विशिष्ट चरण के दौरान समजात गुणसूत्रों का सिनेप्सिस (synapsis) होता है?", 
        options: ["Diplotene / डिप्लोटीन", "Pachytene / पैकीटीन", "Zygotene / ज़ाइगोटीन", "Leptotene / लेप्टोटीन"], 
        answer: 2,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 770, 
        questionEn: "The unique phenomenon where a single gene controls multiple unrelated phenotypic traits is called?", 
        questionHi: "वह अनूठी घटना जहाँ एक एकल जीन कई असंबंधित फेनोटाइपिक लक्षणों को नियंत्रित करता है, क्या कहलाती है?", 
        options: ["Epistasis / एपिस्टेसिस", "Pleiotropy / प्लियोट्रॉपी", "Polyploidy / पॉलीप्लोइडी", "Codominance / कोडोमिनेंस"], 
        answer: 1,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 771, 
        questionEn: "The condition where an organism possesses more than two complete sets of chromosomes is called?", 
        questionHi: "वह स्थिति जहाँ किसी जीव में गुणसूत्रों के दो से अधिक पूर्ण सेट होते हैं, क्या कहलाती है?", 
        options: ["Polyploidy / पॉलीप्लोइडी", "Aneuploidy / एनेप्लोइडी", "Diploidy / डिप्लॉयडी", "Haploidy / अगुणित"], 
        answer: 0,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 772, 
        questionEn: "The fundamental concept of 'Center of Origin' of cultivated plants was given by?", 
        questionHi: "खेती वाले पौधों के 'उत्पत्ति के केंद्र' (Center of Origin) की मौलिक अवधारणा किसके द्वारा दी गई थी?", 
        options: ["N.I. Vavilov / एन.आई. वाविलोव", "Darwin / डार्विन", "Mendel / मेंडल", "Linnaeus / लिनिअस"], 
        answer: 0,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 773, 
        questionEn: "Which statistical test is commonly used to compare the means of two independent small samples?", 
        questionHi: "दो स्वतंत्र छोटे नमूनों के माध्यों की तुलना करने के लिए आमतौर पर किस सांख्यिकीय परीक्षण का उपयोग किया जाता है?", 
        options: ["Chi-square test / ची-स्क्वायर टेस्ट", "ANOVA / एनोवा", "Z-test / जेड-टेस्ट", "Student's t-test / स्टूडेंट्स टी-टेस्ट"], 
        answer: 3,
        subject: "Statistics"
    },
    { 
        id: 774, 
        questionEn: "Which statistical test is specifically used to test the 'goodness of fit' of observed data against expected data?", 
        questionHi: "अपेक्षित डेटा के विरुद्ध देखे गए डेटा की 'फिट की अच्छाई' (goodness of fit) का परीक्षण करने के लिए विशेष रूप से किस सांख्यिकीय परीक्षण का उपयोग किया जाता है?", 
        options: ["F-test / एफ-टेस्ट", "Chi-square test / ची-स्क्वायर टेस्ट", "t-test / टी-टेस्ट", "Z-test / जेड-टेस्ट"], 
        answer: 1,
        subject: "Statistics"
    },
    { 
        id: 775, 
        questionEn: "Who is globally considered the 'Father of Modern Statistics'?", 
        questionHi: "विश्व स्तर पर 'आधुनिक सांख्यिकी का जनक' (Father of Modern Statistics) किसे माना जाता है?", 
        options: ["Karl Pearson / कार्ल पियर्सन", "R.A. Fisher / आर.ए. फिशर", "Francis Galton / फ्रांसिस गैल्टन", "W.S. Gosset / डब्ल्यू.एस. गोसेट"], 
        answer: 1,
        subject: "Statistics"
    },
    { 
        id: 776, 
        questionEn: "In economics, the law that famously states 'bad money drives out good money' is known as?", 
        questionHi: "अर्थशास्त्र में, वह कानून जो प्रसिद्ध रूप से कहता है कि 'बुरा पैसा अच्छे पैसे को बाहर निकाल देता है', किस नाम से जाना जाता है?", 
        options: ["Engel's Law / एंगेल का नियम", "Gresham's Law / ग्रेशम का नियम", "Say's Law / से का नियम", "Law of Demand / मांग का नियम"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 777, 
        questionEn: "Which of the following crops is most sensitive to waterlogging?", 
        questionHi: "निम्नलिखित में से कौन सी फसल जलभराव (waterlogging) के प्रति सबसे अधिक संवेदनशील है?", 
        options: ["Rice / चावल", "Sugarcane / गन्ना", "Jute / जूट", "Maize / मक्का"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 778, 
        questionEn: "The practice of growing crops in the spaces between rows of main crops to utilize space and time is called?", 
        questionHi: "स्थान और समय का उपयोग करने के लिए मुख्य फसलों की पंक्तियों के बीच के स्थानों में फसल उगाने की प्रथा को क्या कहा जाता है?", 
        options: ["Intercropping / अंतरफसली खेती", "Relay cropping / रिले क्रॉपिंग", "Mixed cropping / मिश्रित खेती", "Ratoon cropping / रटून क्रॉपिंग"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 779, 
        questionEn: "A form of agriculture in which the purpose is primarily to grow crops for the survival of the farmer's family is?", 
        questionHi: "कृषि का एक रूप जिसका उद्देश्य मुख्य रूप से किसान के परिवार के अस्तित्व के लिए फसल उगाना है?", 
        options: ["Commercial farming / वाणिज्यिक खेती", "Plantation farming / वृक्षारोपण खेती", "Subsistence farming / निर्वाह खेती", "Extensive farming / व्यापक खेती"], 
        answer: 2,
        subject: "Economics"
    },
    { 
        id: 780, 
        questionEn: "Which extension method is most effective for teaching a completely new, complex skill to farmers?", 
        questionHi: "किसानों को पूरी तरह से नया, जटिल कौशल सिखाने के लिए कौन सी विस्तार विधि (extension method) सबसे प्रभावी है?", 
        options: ["Method demonstration / विधि प्रदर्शन", "Result demonstration / परिणाम प्रदर्शन", "Mass media / जनसंचार", "Campaign / अभियान"], 
        answer: 0,
        subject: "Extension Education"
    },
    { 
        id: 781, 
        questionEn: "In the context of the adoption process, 'Early Adopters' constitute what percentage of the farming population?", 
        questionHi: "गोद लेने की प्रक्रिया (adoption process) के संदर्भ में, 'शुरुआती अपनाने वाले' (Early Adopters) कृषक आबादी का कितना प्रतिशत हैं?", 
        options: ["34%", "13.5%", "2.5%", "16%"], 
        answer: 1,
        subject: "Extension Education"
    },
    { 
        id: 782, 
        questionEn: "The ratio of the standard deviation to the mean, expressed as a percentage, is called?", 
        questionHi: "माध्य (mean) से मानक विचलन (standard deviation) के अनुपात को, प्रतिशत के रूप में व्यक्त करने पर क्या कहा जाता है?", 
        options: ["Variance / विचरण", "Standard error / मानक त्रुटि", "Coefficient of Variation (CV) / भिन्नता का गुणांक", "Mean deviation / माध्य विचलन"], 
        answer: 2,
        subject: "Statistics"
    },
    { 
        id: 783, 
        questionEn: "Which measure of central tendency is most affected by extreme extreme values (outliers)?", 
        questionHi: "केंद्रीय प्रवृत्ति का कौन सा माप चरम मूल्यों (outliers) से सबसे अधिक प्रभावित होता है?", 
        options: ["Mode / बहुलक", "Arithmetic Mean / अंकगणितीय माध्य", "Median / माध्यिका", "Harmonic Mean / हरात्मक माध्य"], 
        answer: 1,
        subject: "Statistics"
    },
    { 
        id: 784, 
        questionEn: "The 'Kisan Call Center' operates primarily in how many regional languages (as of standard implementation)?", 
        questionHi: "'किसान कॉल सेंटर' मुख्य रूप से कितनी क्षेत्रीय भाषाओं में काम करता है?", 
        options: ["22", "15", "10", "12"], 
        answer: 0,
        subject: "Extension Education"
    },
    { 
        id: 785, 
        questionEn: "The cost that remains constant regardless of the volume of production in the short run is called?", 
        questionHi: "वह लागत जो अल्पावधि में उत्पादन की मात्रा की परवाह किए बिना स्थिर रहती है, क्या कहलाती है?", 
        options: ["Variable cost / परिवर्तनीय लागत", "Marginal cost / सीमांत लागत", "Fixed cost / निश्चित लागत", "Opportunity cost / अवसर लागत"], 
        answer: 2,
        subject: "Economics"
    },
    { 
        id: 786, 
        questionEn: "The return from the next best alternative forgone is formally defined as?", 
        questionHi: "छोड़े गए अगले सबसे अच्छे विकल्प से होने वाले लाभ को औपचारिक रूप से क्या परिभाषित किया गया है?", 
        options: ["Marginal return / सीमांत रिटर्न", "Opportunity cost / अवसर लागत", "Implicit cost / निहित लागत", "Variable cost / परिवर्तनीय लागत"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 787, 
        questionEn: "In the short run, production should be stopped if the price falls below?", 
        questionHi: "अल्पावधि में, यदि कीमत किससे नीचे गिरती है तो उत्पादन रोक दिया जाना चाहिए?", 
        options: ["Average Fixed Cost (AFC)", "Marginal Cost (MC)", "Average Variable Cost (AVC)", "Average Total Cost (ATC)"], 
        answer: 2,
        subject: "Economics"
    },
    { 
        id: 788, 
        questionEn: "The phase of the cell cycle where DNA replication occurs is?", 
        questionHi: "कोशिका चक्र का वह चरण जहाँ DNA प्रतिकृति (replication) होती है?", 
        options: ["S phase / एस चरण", "G1 phase / जी1 चरण", "G2 phase / जी2 चरण", "M phase / एम चरण"], 
        answer: 0,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 789, 
        questionEn: "The functional unit of inheritance is physically located on the?", 
        questionHi: "विरासत की कार्यात्मक इकाई भौतिक रूप से कहाँ स्थित है?", 
        options: ["Ribosome / राइबोसोम", "Chromosome / गुणसूत्र", "Lysosome / लाइसोसोम", "Golgi body / गॉल्जी बॉडी"], 
        answer: 1,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 790, 
        questionEn: "Which of the following is considered the best method to calculate depreciation of a tractor?", 
        questionHi: "निम्नलिखित में से किसे ट्रैक्टर के मूल्यह्रास (depreciation) की गणना करने की सबसे अच्छी विधि माना जाता है?", 
        options: ["Diminishing balance method / घटती शेष विधि", "Straight line method / सीधी रेखा विधि", "Sum of years digit method / वर्षों के अंकों का योग विधि", "Annuity method / वार्षिकी विधि"], 
        answer: 1,
        subject: "Agricultural Engineering"
    }
    ];

    window.quizData = window.quizData.concat(data);
})();

(function() {
    const data = [
    { 
        id: 601, 
        questionEn: "What is the recommended seed rate for hybrid maize?", 
        questionHi: "संकर मक्का (Hybrid maize) के लिए अनुशंसित बीज दर क्या है?", 
        options: ["10-15 kg/ha / 10-15 किग्रा/हेक्टेयर", "50-60 kg/ha / 50-60 किग्रा/हेक्टेयर", "20-25 kg/ha / 20-25 किग्रा/हेक्टेयर", "35-40 kg/ha / 35-40 किग्रा/हेक्टेयर"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 602, 
        questionEn: "The first product of photosynthesis in C3 plants is?", 
        questionHi: "C3 पौधों में प्रकाश संश्लेषण का पहला उत्पाद क्या है?", 
        options: ["Phosphoglyceric acid (PGA) / फॉस्फोग्लिसरिक एसिड", "Oxaloacetic acid (OAA) / ऑक्जेलोएसेटिक एसिड", "Malic acid / मैलिक एसिड", "Pyruvic acid / पाइरुविक एसिड"], 
        answer: 0,
        subject: "Plant Physiology"
    },
    { 
        id: 603, 
        questionEn: "Which is the most critical stage of irrigation in sugarcane?", 
        questionHi: "गन्ने में सिंचाई की सबसे महत्वपूर्ण अवस्था कौन सी है?", 
        options: ["Maturity stage / परिपक्वता अवस्था", "Grand growth stage / भव्य विकास अवस्था", "Germination stage / अंकुरण अवस्था", "Formative stage / निर्माणात्मक अवस्था"], 
        answer: 3,
        subject: "Agronomy"
    },
    { 
        id: 604, 
        questionEn: "The term 'Tillage' was coined by?", 
        questionHi: "'जुताई' (Tillage) शब्द किसके द्वारा गढ़ा गया था?", 
        options: ["Liebig / लिबिग", "Jethro Tull / जेथ्रो टुल", "Arthur Young / आर्थर यंग", "M.S. Swaminathan / एम.एस. स्वामीनाथन"], 
        answer: 1,
        subject: "Agronomy"
    },
    { 
        id: 605, 
        questionEn: "Which was the first herbicide produced in the world?", 
        questionHi: "विश्व में उत्पादित पहला शाकनाशी (herbicide) कौन सा था?", 
        options: ["Glyphosate / ग्लाइफोसेट", "Atrazine / एट्राजीन", "2,4-D / 2,4-डी", "Paraquat / पैराक्वेट"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 606, 
        questionEn: "Water use efficiency is highest in which type of plants?", 
        questionHi: "जल उपयोग दक्षता (Water use efficiency) किस प्रकार के पौधों में सबसे अधिक होती है?", 
        options: ["CAM plants / कैम पौधे", "C3 plants / C3 पौधे", "C4 plants / C4 पौधे", "Hydrophytes / जलोद्भिद"], 
        answer: 0,
        subject: "Plant Physiology"
    },
    { 
        id: 607, 
        questionEn: "Consumptive use of water is highest for which crop in India?", 
        questionHi: "भारत में किस फसल के लिए पानी का उपभोग्य उपयोग (consumptive use) सबसे अधिक है?", 
        options: ["Sugarcane / गन्ना", "Wheat / गेहूं", "Cotton / कपास", "Rice / चावल"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 608, 
        questionEn: "Which weed is responsible for 'Dropsy' disease in humans?", 
        questionHi: "मनुष्यों में 'ड्रॉप्सी' (Dropsy) रोग के लिए कौन सा खरपतवार जिम्मेदार है?", 
        options: ["Phalaris minor / फैलारिस माइनर", "Parthenium hysterophorus / गाजर घास", "Argemone mexicana / सत्यानाशी (Argemone)", "Cyperus rotundus / मोथा"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 609, 
        questionEn: "Khadar and Bhangar are two distinct categories of which soil type?", 
        questionHi: "खादर और भांगर किस प्रकार की मिट्टी की दो अलग-अलग श्रेणियां हैं?", 
        options: ["Red soil / लाल मिट्टी", "Alluvial soil / जलोढ़ मिट्टी", "Black soil / काली मिट्टी", "Laterite soil / लैटेराइट मिट्टी"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 610, 
        questionEn: "In soils, available water is held between the tension of?", 
        questionHi: "मिट्टी में, उपलब्ध जल (available water) कितने तनाव (tension) के बीच रहता है?", 
        options: ["-1/3 to -15 bars / -1/3 से -15 बार", "0 to -1/3 bars / 0 से -1/3 बार", "-15 to -31 bars / -15 से -31 बार", "> -31 bars / > -31 बार"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 611, 
        questionEn: "Which element is crucial for nodule formation in leguminous plants?", 
        questionHi: "फलीदार पौधों में गांठ (nodule) बनने के लिए कौन सा तत्व महत्वपूर्ण है?", 
        options: ["Zinc / जस्ता", "Boron / बोरॉन", "Iron / लोहा", "Molybdenum / मोलिब्डेनम"], 
        answer: 3,
        subject: "Soil Science"
    },
    { 
        id: 612, 
        questionEn: "VAM (Vesicular Arbuscular Mycorrhiza) is fundamentally a?", 
        questionHi: "VAM (वेसिकुलर आर्बुस्कुलर माइकोराइजा) मूल रूप से एक क्या है?", 
        options: ["Bacterium / जीवाणु", "Algae / शैवाल", "Fungus / कवक", "Virus / विषाणु"], 
        answer: 2,
        subject: "Microbiology"
    },
    { 
        id: 613, 
        questionEn: "Who is recognized as the Father of Soil Microbiology?", 
        questionHi: "मृदा सूक्ष्मजीव विज्ञान (Soil Microbiology) का जनक किसे माना जाता है?", 
        options: ["S.N. Winogradsky / एस.एन. विनोग्रैडस्की", "Louis Pasteur / लुई पाश्चर", "Alexander Fleming / अलेक्जेंडर फ्लेमिंग", "Robert Koch / रॉबर्ट कोच"], 
        answer: 0,
        subject: "Microbiology"
    },
    { 
        id: 614, 
        questionEn: "Rock phosphate is highly recommended for application in?", 
        questionHi: "रॉक फॉस्फेट के प्रयोग की अत्यधिक अनुशंसा किसमें की जाती है?", 
        options: ["Acidic soils / अम्लीय मिट्टी", "Alkaline soils / क्षारीय मिट्टी", "Saline soils / लवणीय मिट्टी", "Sodic soils / सोडिस्क मिट्टी"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 615, 
        questionEn: "Soil structure can be effectively changed or modified by?", 
        questionHi: "मिट्टी की संरचना (Soil structure) को किसके द्वारा प्रभावी ढंग से बदला या संशोधित किया जा सकता है?", 
        options: ["Irrigation / सिंचाई", "Fertilizer / उर्वरक", "Tillage / जुताई", "Pesticides / कीटनाशक"], 
        answer: 2,
        subject: "Soil Science"
    },
    { 
        id: 616, 
        questionEn: "The color of the soil is universally determined using?", 
        questionHi: "मिट्टी का रंग सार्वभौमिक रूप से किसका उपयोग करके निर्धारित किया जाता है?", 
        options: ["Spectrophotometer / स्पेक्ट्रोफोटोमीटर", "Munsell color chart / मुनसेल रंग चार्ट", "Litmus paper / लिटमस पेपर", "Tensiometer / टेन्सियोमीटर"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 617, 
        questionEn: "What is the standard C:N ratio of legume crop residues?", 
        questionHi: "फलीदार (legume) फसल अवशेषों का मानक C:N अनुपात क्या होता है?", 
        options: ["100:1 to 150:1", "10:1 to 12:1", "20:1 to 30:1", "50:1 to 60:1"], 
        answer: 2,
        subject: "Soil Science"
    },
    { 
        id: 618, 
        questionEn: "Seedless watermelon is genetically?", 
        questionHi: "बीज रहित तरबूज आनुवंशिक (genetically) रूप से क्या है?", 
        options: ["Tetraploid / टेट्राप्लॉइड", "Diploid / डिप्लॉयड", "Triploid / ट्रिप्लॉयड", "Hexaploid / हेक्साप्लॉइड"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 619, 
        questionEn: "Which state is the largest producer of Mango in India?", 
        questionHi: "भारत में आम का सबसे बड़ा उत्पादक राज्य कौन सा है?", 
        options: ["Maharashtra / महाराष्ट्र", "Andhra Pradesh / आंध्र प्रदेश", "Uttar Pradesh / उत्तर प्रदेश", "Gujarat / गुजरात"], 
        answer: 2,
        subject: "Horticulture"
    },
    { 
        id: 620, 
        questionEn: "Grapes are most commonly trained on which system in India?", 
        questionHi: "भारत में अंगूरों को सबसे अधिक किस प्रणाली (system) पर साधा (train) जाता है?", 
        options: ["Head system / हेड सिस्टम", "Bower system / बावर सिस्टम (पंडाल)", "Kniffin system / निफिन सिस्टम", "Telephone system / टेलीफोन सिस्टम"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 621, 
        questionEn: "Which is considered the most salt-tolerant fruit crop?", 
        questionHi: "कौन सी फल फसल सबसे अधिक नमक सहनशील (salt-tolerant) मानी जाती है?", 
        options: ["Apple / सेब", "Mango / आम", "Citrus / नींबू वर्गीय", "Date palm / खजूर"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 622, 
        questionEn: "'Kinnow' is a widely grown hybrid variety of?", 
        questionHi: "'किन्नो' (Kinnow) व्यापक रूप से उगाई जाने वाली किसकी संकर किस्म है?", 
        options: ["Grapefruit / ग्रेपफ्रूट", "Mandarin / मैंडरिन (संतरा)", "Sweet Orange / मीठा संतरा", "Lemon / नींबू"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 623, 
        questionEn: "What is the approximate chilling requirement of an Apple tree?", 
        questionHi: "एक सेब के पेड़ की अनुमानित शीतलन आवश्यकता (chilling requirement) कितनी होती है?", 
        options: ["200-400 hours", "800-1500 hours", "100-200 hours", "2000-3000 hours"], 
        answer: 1,
        subject: "Horticulture"
    },
    { 
        id: 624, 
        questionEn: "The fruit of Okra (Bhindi) is botanically known as?", 
        questionHi: "भिंडी (Okra) के फल को वानस्पतिक रूप से क्या कहा जाता है?", 
        options: ["Berry / बेरी", "Drupe / ड्रूप", "Pome / पोम", "Capsule / कैप्सूल"], 
        answer: 3,
        subject: "Horticulture"
    },
    { 
        id: 625, 
        questionEn: "Royal Jelly is secreted from which gland of the worker bee?", 
        questionHi: "रॉयल जेली (Royal Jelly) श्रमिक मधुमक्खी की किस ग्रंथि से स्रावित होती है?", 
        options: ["Salivary gland / लार ग्रंथि", "Hypopharyngeal gland / हाइपोफैरिंजियल ग्रंथि", "Wax gland / मोम ग्रंथि", "Venom gland / विष ग्रंथि"], 
        answer: 1,
        subject: "Entomology"
    },
    { 
        id: 626, 
        questionEn: "The Insecticide Act in India was passed in the year?", 
        questionHi: "भारत में कीटनाशक अधिनियम (Insecticide Act) किस वर्ष पारित किया गया था?", 
        options: ["1972", "1968", "1955", "1986"], 
        answer: 1,
        subject: "Entomology"
    },
    { 
        id: 627, 
        questionEn: "Which insecticide is generally considered very safe for vegetable crops before harvest?", 
        questionHi: "कटाई से पहले सब्जियों की फसलों के लिए कौन सा कीटनाशक आम तौर पर बहुत सुरक्षित माना जाता है?", 
        options: ["DDT / डीडीटी", "Malathion / मैलाथियान", "Endosulfan / एंडोसल्फान", "Phorate / फोरेट"], 
        answer: 1,
        subject: "Entomology"
    },
    { 
        id: 628, 
        questionEn: "The vector of the Papaya leaf curl virus is?", 
        questionHi: "पपीता लीफ कर्ल वायरस (Papaya leaf curl virus) का वाहक (vector) कौन है?", 
        options: ["Whitefly / सफेद मक्खी", "Aphid / एफिड", "Thrips / थ्रिप्स", "Mealybug / मिलीबग"], 
        answer: 0,
        subject: "Plant Pathology"
    },
    { 
        id: 629, 
        questionEn: "Mango mealybug naturally pupates in the?", 
        questionHi: "मैंगो मिलीबग (Mango mealybug) प्राकृतिक रूप से कहाँ प्यूपा (pupates) अवस्था में जाता है?", 
        options: ["Soil / मिट्टी", "Leaves / पत्तियां", "Stem / तना", "Fruits / फल"], 
        answer: 0,
        subject: "Entomology"
    },
    { 
        id: 630, 
        questionEn: "National Bureau of Agriculturally Important Insects (NBAII) is located at?", 
        questionHi: "कृषि की दृष्टि से महत्वपूर्ण कीटों का राष्ट्रीय ब्यूरो (NBAII) कहाँ स्थित है?", 
        options: ["New Delhi / नई दिल्ली", "Pune / पुणे", "Bengaluru / बेंगलुरु", "Lucknow / लखनऊ"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 631, 
        questionEn: "What is the scientific name of the Desert Locust?", 
        questionHi: "रेगिस्तानी टिड्डी (Desert Locust) का वैज्ञानिक नाम क्या है?", 
        options: ["Locusta migratoria / लोकस्टा माइग्रेटोरिया", "Schistocerca gregaria / शिस्टोसेरका ग्रेगेरिया", "Patanga succincta / पतंगा सक्सिनक्टा", "Hieroglyphus banian / हिएरोग्लिफस बनियान"], 
        answer: 1,
        subject: "Entomology"
    },
    { 
        id: 632, 
        questionEn: "Chemicals used to attract specifically male insects for trapping are called?", 
        questionHi: "फँसाने के लिए विशेष रूप से नर कीटों को आकर्षित करने के लिए उपयोग किए जाने वाले रसायनों को क्या कहा जाता है?", 
        options: ["Repellents / रिपेलेंट्स", "Pheromones / फेरोमोन", "Sterilants / स्टेरिलेंट्स", "Antifeedants / एंटीफीडेंट्स"], 
        answer: 1,
        subject: "Entomology"
    },
    { 
        id: 633, 
        questionEn: "White rust of crucifers (mustard) is caused by which fungus?", 
        questionHi: "क्रूसिफेर (सरसों) का सफेद रतुआ (White rust) किस कवक के कारण होता है?", 
        options: ["Erysiphe / एरीसिपे", "Albugo candida / एल्बुगो कैंडिडा", "Puccinia / पक्सिनिया", "Ustilago / उस्टिलागो"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 634, 
        questionEn: "Ear cockle disease in wheat is primarily caused by?", 
        questionHi: "गेहूं में ईयर कॉकल (Ear cockle) रोग मुख्य रूप से किसके कारण होता है?", 
        options: ["Fungi / कवक", "Bacteria / जीवाणु", "Nematode / सूत्रकृमि", "Virus / विषाणु"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 635, 
        questionEn: "Powdery mildew diseases are most effectively controlled by which fungicides?", 
        questionHi: "पाउडर फफूंदी (Powdery mildew) रोगों को किस कवकनाशी द्वारा सबसे प्रभावी ढंग से नियंत्रित किया जाता है?", 
        options: ["Copper fungicides / कॉपर कवकनाशी", "Sulphur fungicides / सल्फर कवकनाशी", "Mercurial fungicides / मर्क्यूरियल कवकनाशी", "Antibiotics / एंटीबायोटिक्स"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 636, 
        questionEn: "Rust fungi belong to which class of fungi?", 
        questionHi: "रस्ट कवक (Rust fungi) कवक के किस वर्ग से संबंधित हैं?", 
        options: ["Ascomycota / बेसिडिओमाइकोटा (Basidiomycota)", "Zygomycota / जाइगोमाइकोटा", "Oomycota / ऊमाइकोटा", "Deuteromycota / ड्यूटरोमाइकोटा"], 
        answer: 0,
        subject: "Plant Pathology"
    },
    { 
        id: 637, 
        questionEn: "Which was the very first plant virus discovered?", 
        questionHi: "खोजा गया सबसे पहला पादप वायरस कौन सा था?", 
        options: ["Cucumber mosaic virus (CMV) / ककड़ी मोज़ेक वायरस", "Tomato spotted wilt virus (TSWV) / टमाटर स्पॉटेड विल्ट वायरस", "Potato virus Y (PVY) / आलू वायरस वाई", "Tobacco mosaic virus (TMV) / तंबाकू मोज़ेक वायरस"], 
        answer: 3,
        subject: "Plant Pathology"
    },
    { 
        id: 638, 
        questionEn: "Ergot of Bajra (Pearl millet) is caused by?", 
        questionHi: "बाजरे का अरगट रोग (Ergot) किसके कारण होता है?", 
        options: ["Sclerospora graminicola / स्क्लेरोस्पोरा ग्रैमिनिकोला", "Claviceps fusiformis / क्लैविसेप्स फ्यूसीफोर्मिस", "Puccinia graminis / पक्सिनिया ग्रैमिनिस", "Tolyposporium penicillariae / टॉलीपोस्पोरियम पेनिसिलरी"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 639, 
        questionEn: "Red rot is a very destructive and serious disease of?", 
        questionHi: "रेड रॉट (Red rot) किसकी एक बहुत ही विनाशकारी और गंभीर बीमारी है?", 
        options: ["Wheat / गेहूं", "Sorghum / ज्वार", "Sugarcane / गन्ना", "Rice / चावल"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 640, 
        questionEn: "Who is widely acknowledged as the 'Father of Tissue Culture'?", 
        questionHi: "'ऊतक संवर्धन के जनक' (Father of Tissue Culture) के रूप में किसे व्यापक रूप से स्वीकार किया जाता है?", 
        options: ["Murashige / मुराशीगे", "Gottlieb Haberlandt / गोटलिब हैबरलैंड", "White / वाइट", "Skoog / स्कूग"], 
        answer: 1,
        subject: "Biotechnology"
    },
    { 
        id: 641, 
        questionEn: "The fundamental Law of Segregation was formulated by?", 
        questionHi: "पृथक्करण का मौलिक नियम (Law of Segregation) किसके द्वारा तैयार किया गया था?", 
        options: ["Morgan / मॉर्गन", "Bateson / बेटसन", "Gregor Mendel / ग्रेगर मेंडल", "Darwin / डार्विन"], 
        answer: 2,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 642, 
        questionEn: "In meiosis, crossing over takes place during which specific stage?", 
        questionHi: "अर्धसूत्रीविभाजन में, क्रॉसिंग ओवर (crossing over) किस विशिष्ट चरण के दौरान होता है?", 
        options: ["Zygotene / ज़ाइगोटीन", "Pachytene / पैकीटीन", "Diplotene / डिप्लोटीन", "Leptotene / लेप्टोटीन"], 
        answer: 1,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 643, 
        questionEn: "Alternate forms of a single gene are scientifically called?", 
        questionHi: "एक ही जीन के वैकल्पिक रूपों को वैज्ञानिक रूप से क्या कहा जाता है?", 
        options: ["Loci / लोकी", "Genomes / जीनोम", "Chromosomes / गुणसूत्र", "Alleles / एलील"], 
        answer: 3,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 644, 
        questionEn: "Triticale is the first man-made cereal, developed by crossing Wheat and?", 
        questionHi: "ट्रिटिकल पहला मानव निर्मित अनाज है, जिसे गेहूं और किसके संकरण (crossing) से विकसित किया गया है?", 
        options: ["Rye / राई", "Oats / जई", "Barley / जौ", "Maize / मक्का"], 
        answer: 0,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 645, 
        questionEn: "Who created the first artificial plant hybrid known as 'Fairchild's mule'?", 
        questionHi: "पहला कृत्रिम पादप संकर (artificial plant hybrid) 'फेयरचाइल्ड्स म्यूल' किसने बनाया था?", 
        options: ["Hugo de Vries / ह्यूगो डी व्रीस", "Thomas Fairchild / थॉमस फेयरचाइल्ड", "Mendel / मेंडल", "Koelreuter / कोएलर्यूटर"], 
        answer: 1,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 646, 
        questionEn: "The total number of chromosomes in a normal human somatic cell is?", 
        questionHi: "सामान्य मानव दैहिक कोशिका (somatic cell) में गुणसूत्रों की कुल संख्या कितनी होती है?", 
        options: ["23", "48", "46", "44"], 
        answer: 2,
        subject: "Biology"
    },
    { 
        id: 647, 
        questionEn: "Cytoplasmic male sterility (CMS) is highly utilized in agriculture for?", 
        questionHi: "कृषि में साइटोप्लाज्मिक नर बंध्यता (CMS) का अत्यधिक उपयोग किसके लिए किया जाता है?", 
        options: ["Disease resistance / रोग प्रतिरोधक क्षमता", "Mutation breeding / उत्परिवर्तन प्रजनन", "Clonal selection / क्लोनल चयन", "Hybrid seed production / संकर बीज उत्पादन"], 
        answer: 3,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 648, 
        questionEn: "The term 'Mutation' was originally coined by?", 
        questionHi: "'उत्परिवर्तन' (Mutation) शब्द मूल रूप से किसके द्वारा गढ़ा गया था?", 
        options: ["Morgan / मॉर्गन", "Muller / मुलर", "Hugo de Vries / ह्यूगो डी व्रीस", "Bateson / बेटसन"], 
        answer: 2,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 649, 
        questionEn: "Who is celebrated as the Father of Extension Education in the world?", 
        questionHi: "विश्व में 'विस्तार शिक्षा का जनक' (Father of Extension Education) किसे माना जाता है?", 
        options: ["S.K. Dey / एस.के. डे", "A. Knapp / ए. नैप", "J.P. Leagans / जे.पी. लीगांस", "Daniel Benor / डैनियल बेनोर"], 
        answer: 2,
        subject: "Extension Education"
    },
    { 
        id: 650, 
        questionEn: "The 'Lab to Land Programme' was launched by ICAR in which year?", 
        questionHi: "'लैब टू लैंड प्रोग्राम' ICAR द्वारा किस वर्ष शुरू किया गया था?", 
        options: ["1979", "1974", "1982", "1965"], 
        answer: 0,
        subject: "Extension Education"
    },
    { 
        id: 651, 
        questionEn: "The Panchayati Raj system in India was first introduced in 1959 in the state of?", 
        questionHi: "भारत में पंचायती राज व्यवस्था पहली बार 1959 में किस राज्य में शुरू की गई थी?", 
        options: ["Gujarat / गुजरात", "Maharashtra / महाराष्ट्र", "Rajasthan / राजस्थान (Nagaur)", "Andhra Pradesh / आंध्र प्रदेश"], 
        answer: 2,
        subject: "Extension Education"
    },
    { 
        id: 652, 
        questionEn: "The establishment of Krishi Vigyan Kendras (KVKs) was recommended by?", 
        questionHi: "कृषि विज्ञान केंद्रों (KVKs) की स्थापना की सिफारिश किसने की थी?", 
        options: ["Ashok Mehta Committee / अशोक मेहता समिति", "Mohan Singh Mehta Committee / मोहन सिंह मेहता समिति", "Balwant Rai Mehta Committee / बलवंत राय मेहता समिति", "Swaminathan Committee / स्वामीनाथन समिति"], 
        answer: 1,
        subject: "Extension Education"
    },
    { 
        id: 653, 
        questionEn: "Pradhan Mantri Fasal Bima Yojana (PMFBY) was launched in?", 
        questionHi: "प्रधानमंत्री फसल बीमा योजना (PMFBY) कब शुरू की गई थी?", 
        options: ["2016", "2014", "2018", "2015"], 
        answer: 0,
        subject: "Economics"
    },
    { 
        id: 654, 
        questionEn: "The National Extension Service (NES) was launched in India in?", 
        questionHi: "भारत में राष्ट्रीय विस्तार सेवा (NES) कब शुरू की गई थी?", 
        options: ["1952", "1960", "1953", "1947"], 
        answer: 2,
        subject: "Extension Education"
    },
    { 
        id: 655, 
        questionEn: "NITI Aayog (National Institution for Transforming India) replaced which previous body?", 
        questionHi: "नीति आयोग (NITI Aayog) ने किस पूर्व निकाय का स्थान लिया?", 
        options: ["Finance Commission / वित्त आयोग", "National Development Council / राष्ट्रीय विकास परिषद", "Planning Commission / योजना आयोग", "Election Commission / चुनाव आयोग"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 656, 
        questionEn: "Which institution is the main source of institutional agricultural credit in India?", 
        questionHi: "भारत में संस्थागत कृषि ऋण का मुख्य स्रोत कौन सा संस्थान है?", 
        options: ["Moneylenders / साहूकार", "Commercial Banks / वाणिज्यिक बैंक", "RRBs / क्षेत्रीय ग्रामीण बैंक", "Cooperative Societies / सहकारी समितियां"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 657, 
        questionEn: "A typical Demand Curve in economics generally slopes?", 
        questionHi: "अर्थशास्त्र में एक विशिष्ट मांग वक्र (Demand Curve) का ढलान आमतौर पर कैसा होता है?", 
        options: ["Upward to the right / दाईं ओर ऊपर", "Horizontal / क्षैतिज", "Downward to the right / दाईं ओर नीचे", "Vertical / लंबवत"], 
        answer: 2,
        subject: "Economics"
    },
    { 
        id: 658, 
        questionEn: "Microeconomics is also popularly known as?", 
        questionHi: "सूक्ष्म अर्थशास्त्र (Microeconomics) को लोकप्रिय रूप से और किस नाम से जाना जाता है?", 
        options: ["Price theory / मूल्य सिद्धांत", "Growth theory / विकास सिद्धांत", "Income theory / आय सिद्धांत", "Employment theory / रोजगार सिद्धांत"], 
        answer: 0,
        subject: "Economics"
    },
    { 
        id: 659, 
        questionEn: "The 'Law of Diminishing Returns' finds its earliest and widest application in?", 
        questionHi: "'ह्रासमान प्रतिफल का नियम' (Law of Diminishing Returns) का सबसे पहला और व्यापक अनुप्रयोग किसमें होता है?", 
        options: ["Information Technology / सूचना प्रौद्योगिकी", "Agriculture / कृषि", "Manufacturing / विनिर्माण", "Services / सेवा क्षेत्र"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 660, 
        questionEn: "Minimum Support Prices (MSP) for agricultural commodities are recommended by?", 
        questionHi: "कृषि जिंसों के लिए न्यूनतम समर्थन मूल्य (MSP) की सिफारिश किसके द्वारा की जाती है?", 
        options: ["NABARD / नाबार्ड", "CACP (Commission for Agricultural Costs and Prices)", "NITI Aayog / नीति आयोग", "FCI / एफसीआई"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 661, 
        questionEn: "Which is the apex financial body for agriculture and rural development credit in India?", 
        questionHi: "भारत में कृषि और ग्रामीण विकास ऋण के लिए सर्वोच्च वित्तीय निकाय कौन सा है?", 
        options: ["NABARD / नाबार्ड", "RBI / आरबीआई", "SBI / एसबीआई", "RRB / आरआरबी"], 
        answer: 0,
        subject: "Economics"
    },
    { 
        id: 662, 
        questionEn: "AGMARK certification is essentially related to?", 
        questionHi: "एगमार्क (AGMARK) प्रमाणन अनिवार्य रूप से किससे संबंधित है?", 
        options: ["Quantity of products / उत्पादों की मात्रा", "Quality of agricultural products / कृषि उत्पादों की गुणवत्ता", "Export duties / निर्यात शुल्क", "Packaging size / पैकेजिंग आकार"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 663, 
        questionEn: "The National Co-operative Development Corporation (NCDC) was established in?", 
        questionHi: "राष्ट्रीय सहकारी विकास निगम (NCDC) की स्थापना कब हुई थी?", 
        options: ["1956", "1963", "1975", "1982"], 
        answer: 1,
        subject: "Economics"
    },
    { 
        id: 664, 
        questionEn: "Among the following, which is considered the most 'liquid' asset?", 
        questionHi: "निम्नलिखित में से किसे सबसे अधिक 'तरल' (liquid) संपत्ति माना जाता है?", 
        options: ["Livestock / पशुधन", "Machinery / मशीनरी", "Cash / नकद (Cash)", "Land / भूमि"], 
        answer: 2,
        subject: "Economics"
    },
    { 
        id: 665, 
        questionEn: "Who is the ex-officio Chairman of NITI Aayog?", 
        questionHi: "नीति आयोग का पदेन अध्यक्ष (ex-officio Chairman) कौन होता है?", 
        options: ["Finance Minister / वित्त मंत्री", "President / राष्ट्रपति", "Prime Minister / प्रधानमंत्री", "Agriculture Minister / कृषि मंत्री"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 666, 
        questionEn: "Lactometer is an instrument specifically designed to measure?", 
        questionHi: "लैक्टोमीटर एक उपकरण है जिसे विशेष रूप से क्या मापने के लिए डिज़ाइन किया गया है?", 
        options: ["Fat content of milk / दूध में वसा की मात्रा", "Protein in milk / दूध में प्रोटीन", "Temperature of milk / दूध का तापमान", "Specific gravity of milk / दूध का विशिष्ट गुरुत्व"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 667, 
        questionEn: "Which is considered the best and largest dairy breed of goat in India?", 
        questionHi: "भारत में बकरी की सबसे अच्छी और सबसे बड़ी डेयरी नस्ल किसे माना जाता है?", 
        options: ["Beetal / बीटल", "Barbari / बरबरी", "Jamunapari / जमुनापारी", "Black Bengal / ब्लैक बंगाल"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 668, 
        questionEn: "Which sheep breed is renowned for producing the best carpet wool in India?", 
        questionHi: "भारत में सबसे अच्छी कालीन ऊन (carpet wool) के उत्पादन के लिए कौन सी भेड़ की नस्ल प्रसिद्ध है?", 
        options: ["Marwari / मारवाड़ी", "Chokla / चोकला", "Nali / नाली", "Magra / मगरा"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 669, 
        questionEn: "Which of the following is a prominent dual-purpose breed of cattle?", 
        questionHi: "निम्नलिखित में से कौन सी मवेशियों की एक प्रमुख दोहरे उद्देश्य (dual-purpose) वाली नस्ल है?", 
        options: ["Sahiwal / साहीवाल", "Haryana / हरियाणा", "Kangayam / कंगायम", "Amritmahal / अमृतमहल"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 670, 
        questionEn: "The meat of mature sheep is officially called?", 
        questionHi: "वयस्क भेड़ के मांस को आधिकारिक तौर पर क्या कहा जाता है?", 
        options: ["Mutton / मटन", "Chevon / चेवन", "Pork / पोर्क", "Beef / बीफ"], 
        answer: 0,
        subject: "Animal Husbandry"
    },
    { 
        id: 671, 
        questionEn: "What is the standard prescribed fat content in double toned milk?", 
        questionHi: "डबल टोंड दूध में मानक निर्धारित वसा (fat) की मात्रा कितनी होती है?", 
        options: ["3.0%", "0.5%", "1.5%", "4.5%"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 672, 
        questionEn: "Milk fever, a metabolic disease in high-yielding cows, is caused by a drop in blood level of?", 
        questionHi: "मिल्क फीवर (Milk fever), अधिक दूध देने वाली गायों में एक चयापचय रोग है, जो रक्त में किसके स्तर में गिरावट के कारण होता है?", 
        options: ["Phosphorus / फास्फोरस", "Calcium / कैल्शियम", "Glucose / ग्लूकोज", "Magnesium / मैग्नीशियम"], 
        answer: 1,
        subject: "Animal Husbandry"
    },
    { 
        id: 673, 
        questionEn: "Which highly contagious viral disease in poultry causes massive mortality?", 
        questionHi: "पोल्ट्री में कौन सा अत्यधिक संक्रामक वायरल रोग भारी मृत्यु दर का कारण बनता है?", 
        options: ["Coccidiosis / कॉक्सिडियोसिस", "Fowl pox / फाउल पॉक्स", "Ranikhet (Newcastle disease) / रानीखेत (न्यूकैसल रोग)", "Marek's disease / मारेक रोग"], 
        answer: 2,
        subject: "Animal Husbandry"
    },
    { 
        id: 674, 
        questionEn: "The routine management practice of removing horn buds from young calves is called?", 
        questionHi: "युवा बछड़ों से सींग की कलियों (horn buds) को हटाने की नियमित प्रबंधन प्रथा को क्या कहा जाता है?", 
        options: ["Castration / बधियाकरण", "Docking / डॉकिंग", "Debeaking / चोंच काटना", "Dehorning (Disbudding) / सींग काटना"], 
        answer: 3,
        subject: "Animal Husbandry"
    },
    { 
        id: 675, 
        questionEn: "National Farmers Day (Kisan Diwas) in India is celebrated to honor the birth anniversary of?", 
        questionHi: "भारत में राष्ट्रीय किसान दिवस (Kisan Diwas) किसकी जयंती के सम्मान में मनाया जाता है?", 
        options: ["Sardar Vallabhbhai Patel / सरदार वल्लभभाई पटेल", "M.S. Swaminathan / एम.एस. स्वामीनाथन", "Chaudhary Charan Singh / चौधरी चरण सिंह", "Lal Bahadur Shastri / लाल बहादुर शास्त्री"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 676, 
        questionEn: "World Soil Day is observed globally every year on?", 
        questionHi: "विश्व मृदा दिवस (World Soil Day) विश्व स्तर पर हर साल कब मनाया जाता है?", 
        options: ["5th December / 5 दिसंबर", "16th October / 16 अक्टूबर", "22nd April / 22 अप्रैल", "23rd December / 23 दिसंबर"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 677, 
        questionEn: "The headquarters of the Indian Council of Agricultural Research (ICAR) is located in?", 
        questionHi: "भारतीय कृषि अनुसंधान परिषद (ICAR) का मुख्यालय कहाँ स्थित है?", 
        options: ["Kolkata / कोलकाता", "New Delhi / नई दिल्ली", "Hyderabad / हैदराबाद", "Pune / पुणे"], 
        answer: 1,
        subject: "General Agriculture"
    },
    { 
        id: 678, 
        questionEn: "Which Indian state is the highest producer of total pulses?", 
        questionHi: "कौन सा भारतीय राज्य कुल दालों का सबसे बड़ा उत्पादक है?", 
        options: ["Maharashtra / महाराष्ट्र", "Uttar Pradesh / उत्तर प्रदेश", "Madhya Pradesh / मध्य प्रदेश", "Rajasthan / राजस्थान"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 679, 
        questionEn: "The United Nations declared which year as the 'International Year of Millets'?", 
        questionHi: "संयुक्त राष्ट्र ने किस वर्ष को 'अंतर्राष्ट्रीय बाजरा वर्ष' (International Year of Millets) घोषित किया?", 
        options: ["2023", "2015", "2020", "2025"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 680, 
        questionEn: "Which state became the first 'Fully Organic State' of India?", 
        questionHi: "भारत का पहला 'पूर्णतः जैविक राज्य' (Fully Organic State) कौन सा राज्य बना?", 
        options: ["Kerala / केरल", "Uttarakhand / उत्तराखंड", "Himachal Pradesh / हिमाचल प्रदेश", "Sikkim / सिक्किम"], 
        answer: 3,
        subject: "General Agriculture"
    },
    { 
        id: 681, 
        questionEn: "The Soil Health Card scheme was officially launched in 2015 at?", 
        questionHi: "मृदा स्वास्थ्य कार्ड योजना आधिकारिक तौर पर 2015 में कहाँ शुरू की गई थी?", 
        options: ["Suratgarh (Rajasthan) / सूरतगढ़ (राजस्थान)", "Ludhiana (Punjab) / लुधियाना (पंजाब)", "Pune (Maharashtra) / पुणे (महाराष्ट्र)", "Karnal (Haryana) / करनाल (हरियाणा)"], 
        answer: 0,
        subject: "Extension Education"
    },
    { 
        id: 682, 
        questionEn: "Globally, which country is the largest producer of milk?", 
        questionHi: "विश्व स्तर पर, दूध का सबसे बड़ा उत्पादक देश कौन सा है?", 
        options: ["Brazil / ब्राजील", "China / चीन", "India / भारत", "USA / यूएसए"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 683, 
        questionEn: "'Pink Revolution' is primarily associated with the increased production of?", 
        questionHi: "'गुलाबी क्रांति' (Pink Revolution) मुख्य रूप से किसके उत्पादन में वृद्धि से जुड़ी है?", 
        options: ["Fruits / फल", "Tomatoes / टमाटर", "Onion and Prawn / प्याज और झींगा", "Fertilizers / उर्वरक"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 684, 
        questionEn: "Central Institute of Post-Harvest Engineering and Technology (CIPHET) is located at?", 
        questionHi: "केंद्रीय कटाई-उपरान्त अभियांत्रिकी एवं प्रौद्योगिकी संस्थान (CIPHET) कहाँ स्थित है?", 
        options: ["Bhopal / भोपाल", "New Delhi / नई दिल्ली", "Ludhiana / लुधियाना", "Coimbatore / कोयंबटूर"], 
        answer: 2,
        subject: "General Agriculture"
    },
    { 
        id: 685, 
        questionEn: "Who is known as the 'Father of Hybrid Cotton' in India?", 
        questionHi: "भारत में 'संकर कपास के जनक' (Father of Hybrid Cotton) के रूप में किसे जाना जाता है?", 
        options: ["M.S. Swaminathan / एम.एस. स्वामीनाथन", "E.A. Siddiq / ई.ए. सिद्दीक", "G.S. Khush / जी.एस. खुश", "C.T. Patel / सी.टी. पटेल"], 
        answer: 3,
        subject: "Genetics & Plant Breeding"
    },
    { 
        id: 686, 
        questionEn: "The first transgenic crop introduced for commercial cultivation was?", 
        questionHi: "व्यावसायिक खेती के लिए पेश की गई पहली ट्रांसजेनिक फसल (transgenic crop) कौन सी थी?", 
        options: ["Cotton / कपास", "Maize / मक्का", "Tobacco / तंबाकू", "Tomato / टमाटर"], 
        answer: 2,
        subject: "Biotechnology"
    },
    { 
        id: 687, 
        questionEn: "The journal 'Indian Journal of Agricultural Sciences' is published by?", 
        questionHi: "पत्रिका 'इंडियन जर्नल ऑफ एग्रीकल्चरल साइंसेज' किसके द्वारा प्रकाशित की जाती है?", 
        options: ["ICAR / आईसीएआर", "IARI / आईएआरआई", "NABARD / नाबार्ड", "CSIR / सीएसआईआर"], 
        answer: 0,
        subject: "General Agriculture"
    },
    { 
        id: 688, 
        questionEn: "Which is the most widely consumed nitrogenous fertilizer in India?", 
        questionHi: "भारत में सबसे अधिक खपत वाला नाइट्रोजन युक्त उर्वरक कौन सा है?", 
        options: ["Urea / यूरिया", "Ammonium Sulphate / अमोनियम सल्फेट", "CAN / कैन", "DAP / डीएपी"], 
        answer: 0,
        subject: "Soil Science"
    },
    { 
        id: 689, 
        questionEn: "Which nematode is a serious pest of potato globally, famously known as the Golden Nematode?", 
        questionHi: "कौन सा नेमाटोड विश्व स्तर पर आलू का एक गंभीर कीट है, जिसे 'गोल्डन नेमाटोड' के नाम से जाना जाता है?", 
        options: ["Meloidogyne incognita / मेलोइडोगाइन इन्कोगनिटा", "Globodera rostochiensis / ग्लोबोडेरा रोस्टोचिएन्सिस", "Heterodera avenae / हेटेरोडेरा एवेनाई", "Pratylenchus spp. / प्रैटिलेंचस"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 690, 
        questionEn: "Root-knot nematodes belong to which genus?", 
        questionHi: "रूट-नॉट (Root-knot) नेमाटोड किस जीनस (genus) से संबंधित हैं?", 
        options: ["Globodera / ग्लोबोडेरा", "Meloidogyne / मेलोइडोगाइन", "Heterodera / हेटेरोडेरा", "Tylenchulus / टिलेंचुलस"], 
        answer: 1,
        subject: "Plant Pathology"
    },
    { 
        id: 691, 
        questionEn: "What is the primary origin place of Groundnut?", 
        questionHi: "मूंगफली का प्राथमिक उत्पत्ति स्थान क्या है?", 
        options: ["India / भारत", "China / चीन", "Brazil (South America) / ब्राजील", "Africa / अफ्रीका"], 
        answer: 2,
        subject: "Agronomy"
    },
    { 
        id: 692, 
        questionEn: "Which state in India has the largest geographical area under forest cover?", 
        questionHi: "भारत के किस राज्य में वन आवरण के अंतर्गत सबसे बड़ा भौगोलिक क्षेत्र है?", 
        options: ["Chhattisgarh / छत्तीसगढ़", "Arunachal Pradesh / अरुणाचल प्रदेश", "Madhya Pradesh / मध्य प्रदेश", "Maharashtra / महाराष्ट्र"], 
        answer: 2,
        subject: "Forestry"
    },
    { 
        id: 693, 
        questionEn: "Which state holds the record for the highest fertilizer consumption (kg/ha) in India?", 
        questionHi: "भारत में सर्वाधिक उर्वरक खपत (किग्रा/हेक्टेयर) का रिकॉर्ड किस राज्य के नाम है?", 
        options: ["Haryana / हरियाणा", "Punjab / पंजाब", "Uttar Pradesh / उत्तर प्रदेश", "Andhra Pradesh / आंध्र प्रदेश"], 
        answer: 1,
        subject: "Soil Science"
    },
    { 
        id: 694, 
        questionEn: "The disease 'Tikka' is a devastating fungal disease primarily of?", 
        questionHi: "'टिक्का' (Tikka) रोग मुख्य रूप से किसकी एक विनाशकारी फंगल बीमारी है?", 
        options: ["Groundnut / मूंगफली", "Mustard / सरसों", "Soybean / सोयाबीन", "Cotton / कपास"], 
        answer: 0,
        subject: "Plant Pathology"
    },
    { 
        id: 695, 
        questionEn: "What does 'Etiolation' in plants refer to?", 
        questionHi: "पौधों में 'इटियोलेशन' (Etiolation) का क्या अर्थ है?", 
        options: ["Development of plants in the dark / अंधेरे में पौधों का विकास", "Abnormal lengthening of roots / जड़ों का असामान्य रूप से लंबा होना", "Falling of leaves / पत्तियों का गिरना", "Over-watering symptoms / अधिक पानी के लक्षण"], 
        answer: 0,
        subject: "Plant Physiology"
    },
    { 
        id: 696, 
        questionEn: "In the context of farm machinery, the 'M.B. Plough' (Moldboard Plough) is used for?", 
        questionHi: "कृषि मशीनरी के संदर्भ में, 'एम.बी. हल' (Moldboard Plough) का उपयोग किसके लिए किया जाता है?", 
        options: ["Weeding / निराई", "Harvesting / कटाई", "Sowing / बुवाई", "Primary Tillage (Soil inversion) / प्राथमिक जुताई (मिट्टी पलटना)"], 
        answer: 3,
        subject: "Agricultural Engineering"
    },
    { 
        id: 697, 
        questionEn: "Which weed is notoriously famous as 'Terror of Bengal'?", 
        questionHi: "कौन सा खरपतवार 'बंगाल का आतंक' (Terror of Bengal) के रूप में कुख्यात है?", 
        options: ["Water Hyacinth (Eichhornia) / जलकुंभी", "Lantana camara / लैंटाना कैमरा", "Parthenium / गाजर घास", "Cuscuta / कस्कुटा"], 
        answer: 0,
        subject: "Agronomy"
    },
    { 
        id: 698, 
        questionEn: "The scientific rearing of silkworms for the commercial production of silk is known as?", 
        questionHi: "रेशम के व्यावसायिक उत्पादन के लिए रेशम के कीड़ों का वैज्ञानिक पालन क्या कहलाता है?", 
        options: ["Moriculture / शहतूत पालन", "Sericulture / रेशम उत्पादन", "Apiculture / मधुमक्खी पालन", "Lac culture / लाख उत्पादन"], 
        answer: 1,
        subject: "Entomology"
    },
    { 
        id: 699, 
        questionEn: "The 'Karnal Bunt' disease, which imparts a foul fishy odor to the field, is a disease of?", 
        questionHi: "'करनाल बंट' (Karnal Bunt) रोग, जो खेत में मछली जैसी दुर्गंध देता है, किसकी बीमारी है?", 
        options: ["Maize / मक्का", "Rice / चावल", "Wheat / गेहूं", "Barley / जौ"], 
        answer: 2,
        subject: "Plant Pathology"
    },
    { 
        id: 700, 
        questionEn: "Which hormone is primarily responsible for the ripening of climacteric fruits?", 
        questionHi: "क्लाइमेक्टेरिक फलों के पकने के लिए मुख्य रूप से कौन सा हार्मोन जिम्मेदार है?", 
        options: ["Ethylene / एथिलीन", "Gibberellin / जिबरेलिन", "Auxin / ऑक्सिन", "Cytokinin / साइटोकिनिन"], 
        answer: 0,
        subject: "Plant Physiology"
    }
    ];

    window.quizData = window.quizData.concat(data);
})();

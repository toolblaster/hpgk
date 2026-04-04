// Tourism Part 1: Overview & Hill Stations
if (!window.quizData) window.quizData = [];

window.quizData.push(
    // Tourism Overview
    {
        id: 1,
        questionEn: "When was the Himachal Pradesh Tourism Development Corporation (HPTDC) established?",
        questionHi: "हिमाचल प्रदेश पर्यटन विकास निगम (HPTDC) की स्थापना कब की गई थी?",
        options: ["1971", "1972", "1974", "1976"],
        answer: 1,
        explanation: "HPTDC was established on 1st September 1972 to promote tourism in the state. \n\n(HPTDC की स्थापना 1 सितंबर 1972 को राज्य में पर्यटन को बढ़ावा देने के लिए की गई थी।)"
    },
    {
        id: 2,
        questionEn: "What is the official slogan of Himachal Pradesh Tourism?",
        questionHi: "हिमाचल प्रदेश पर्यटन का आधिकारिक नारा क्या है?",
        options: ["Incredible Himachal (अतुल्य हिमाचल)", "Unforgettable Himachal (अविस्मरणीय हिमाचल)", "Dev Bhoomi Himachal (देवभूमि हिमाचल)", "Magical Himachal (जादुई हिमाचल)"],
        answer: 1,
        explanation: "The slogan is 'Unforgettable Himachal' (अविस्मरणीय हिमाचल)."
    },
    {
        id: 3,
        questionEn: "Which district of Himachal Pradesh attracts the maximum number of tourists annually?",
        questionHi: "हिमाचल प्रदेश का कौन सा जिला प्रतिवर्ष सर्वाधिक पर्यटकों को आकर्षित करता है?",
        options: ["Shimla (शिमला)", "Kullu (कुल्लू)", "Kangra (कांगड़ा)", "Chamba (चंबा)"],
        answer: 1,
        explanation: "Kullu district (especially Manali) often records the highest tourist footfall, closely followed by Shimla. \n\n(कुल्लू जिला (विशेषकर मनाली) अक्सर सर्वाधिक पर्यटकों को दर्ज करता है, उसके बाद शिमला का स्थान है।)"
    },
    {
        id: 4,
        questionEn: "In which year was the 'Kalka-Shimla Railway' declared a UNESCO World Heritage Site?",
        questionHi: "'कालका-शिमला रेलवे' को किस वर्ष यूनेस्को विश्व धरोहर स्थल घोषित किया गया था?",
        options: ["2005", "2006", "2008", "2010"],
        answer: 2,
        explanation: "It was inscribed as a World Heritage Site in July 2008. \n\n(इसे जुलाई 2008 में विश्व धरोहर स्थल के रूप में अंकित किया गया था।)"
    },
    {
        id: 5,
        questionEn: "Which place in Himachal Pradesh is known as 'Mini Switzerland'?",
        questionHi: "हिमाचल प्रदेश में किस स्थान को 'मिनी स्विट्जरलैंड' के नाम से जाना जाता है?",
        options: ["Solang Valley (सोलंग घाटी)", "Khajjiar (खज्जियार)", "Kufri (कुफरी)", "Narkanda (नारकंडा)"],
        answer: 1,
        explanation: "Khajjiar (Chamba) was named 'Mini Switzerland' by Willy P. Blazer on 7th July 1992. \n\n(7 जुलाई 1992 को विली पी. ब्लेज़र द्वारा खज्जियार (चंबा) को 'मिनी स्विट्जरलैंड' नाम दिया गया था।)"
    },
    {
        id: 6,
        questionEn: "The 'Great Himalayan National Park' (GHNP) is located in which district?",
        questionHi: "'ग्रेट हिमालयन नेशनल पार्क' (GHNP) किस जिले में स्थित है?",
        options: ["Lahaul-Spiti (लाहौल-स्पीति)", "Kinnaur (किन्नौर)", "Kullu (कुल्लू)", "Shimla (शिमला)"],
        answer: 2,
        explanation: "GHNP is in Kullu district and was declared a UNESCO World Heritage Site in 2014. \n\n(GHNP कुल्लू जिले में है और 2014 में इसे यूनेस्को विश्व धरोहर स्थल घोषित किया गया था।)"
    },
    {
        id: 7,
        questionEn: "Who discovered Shimla as a hill station in 1819?",
        questionHi: "1819 में एक हिल स्टेशन के रूप में शिमला की खोज किसने की थी?",
        options: ["Lord Amherst (लॉर्ड एमहर्स्ट)", "Lt. Rose (लेफ्टिनेंट रोज़)", "Major Kennedy (मेजर केनेडी)", "Lord Dalhousie (लॉर्ड डलहौजी)"],
        answer: 1,
        explanation: "Lt. Rose discovered Shimla in 1819. The first pucca house 'Kennedy House' was built by Major Kennedy in 1822. \n\n(लेफ्टिनेंट रोज़ ने 1819 में शिमला की खोज की। पहला पक्का घर 'केनेडी हाउस' 1822 में मेजर केनेडी द्वारा बनाया गया था।)"
    },
    {
        id: 8,
        questionEn: "Which town is known as the 'Mushroom City of India'?",
        questionHi: "किस शहर को 'भारत का मशरूम शहर' कहा जाता है?",
        options: ["Shimla (शिमला)", "Solan (सोलन)", "Palampur (पालमपुर)", "Manali (मनाली)"],
        answer: 1,
        explanation: "Solan is known as the Mushroom City due to extensive mushroom farming. \n\n(व्यापक मशरूम खेती के कारण सोलन को मशरूम सिटी के रूप में जाना जाता है।)"
    },
    {
        id: 9,
        questionEn: "Where is the 'Sobha Singh Art Gallery' located?",
        questionHi: "'सोभा सिंह आर्ट गैलरी' कहाँ स्थित है?",
        options: ["Naggar (नग्गर)", "Andretta (आंद्रेता)", "Paonta Sahib (पांवटा साहिब)", "Chamba (चंबा)"],
        answer: 1,
        explanation: "It is located in Andretta (Palampur, Kangra). Sobha Singh was a famous painter. \n\n(यह आंद्रेता (पालमपुर, कांगड़ा) में स्थित है। सोभा सिंह एक प्रसिद्ध चित्रकार थे।)"
    },
    {
        id: 10,
        questionEn: "Which of the following is known as the 'Valley of Gods'?",
        questionHi: "निम्नलिखित में से किसे 'देवताओं की घाटी' के रूप में जाना जाता है?",
        options: ["Kangra Valley (कांगड़ा घाटी)", "Kullu Valley (कुल्लू घाटी)", "Chamba Valley (चंबा घाटी)", "Sangla Valley (सांगला घाटी)"],
        answer: 1,
        explanation: "Kullu Valley is famous as 'Dev Ghati' or Valley of Gods. \n\n(कुल्लू घाटी 'देव घाटी' या देवताओं की घाटी के रूप में प्रसिद्ध है।)"
    },
    
    // Hill Stations - Shimla
    {
        id: 11,
        questionEn: "When did Shimla become the Summer Capital of British India?",
        questionHi: "शिमला ब्रिटिश भारत की ग्रीष्मकालीन राजधानी कब बनी?",
        options: ["1854", "1864", "1871", "1903"],
        answer: 1,
        explanation: "Sir John Lawrence officially declared Shimla the Summer Capital in 1864. \n\n(सर जॉन लॉरेंस ने 1864 में आधिकारिक तौर पर शिमला को ग्रीष्मकालीन राजधानी घोषित किया।)"
    },
    {
        id: 12,
        questionEn: "The 'Ridge' and 'Mall Road' are iconic features of which hill station?",
        questionHi: "'रिज' और 'माल रोड' किस हिल स्टेशन की प्रतिष्ठित विशेषताएं हैं?",
        options: ["Dalhousie (डलहौजी)", "Manali (मनाली)", "Shimla (शिमला)", "Dharamshala (धर्मशाला)"],
        answer: 2,
        explanation: "The Ridge and Mall Road are the heart of Shimla city. \n\n(रिज और माल रोड शिमला शहर के केंद्र हैं।)"
    },
    {
        id: 13,
        questionEn: "Which heritage building in Shimla was formerly the residence of the Viceroy of India?",
        questionHi: "शिमला की कौन सी विरासत इमारत पहले भारत के वायसराय का निवास स्थान थी?",
        options: ["Gorton Castle (गॉर्टन कैसल)", "Viceregal Lodge (वायसराय लॉज)", "Peterhoff (पीटरहॉफ)", "Barnes Court (बार्न्स कोर्ट)"],
        answer: 1,
        explanation: "The Viceregal Lodge (now IIAS) was the residence of the Viceroy. It was built in 1888. \n\n(वायसराय लॉज (अब IIAS) वायसराय का निवास स्थान था। इसे 1888 में बनाया गया था।)"
    },
    {
        id: 14,
        questionEn: "Kufri, a famous tourist spot near Shimla, is famous for which animal?",
        questionHi: "शिमला के पास एक प्रसिद्ध पर्यटन स्थल कुफरी किस जानवर के लिए प्रसिद्ध है?",
        options: ["Snow Leopard (हिम तेंदुआ)", "Himalayan Monal (हिमालयन मोनाल)", "Yak (याक)", "Musk Deer (कस्तूरी मृग)"],
        answer: 2,
        explanation: "Kufri has a Yak point and offers Yak rides. It also has a Himalayan Nature Park. \n\n(कुफरी में याक पॉइंट है और याक की सवारी की पेशकश करता है। यहाँ एक हिमालयन नेचर पार्क भी है।)"
    },
    {
        id: 15,
        questionEn: "The 'Scandal Point' is associated with which Indian Maharaja and British lady?",
        questionHi: "'स्कैंडल पॉइंट' किस भारतीय महाराजा और ब्रिटिश महिला से जुड़ा है?",
        options: ["Maharaja of Patiala & Viceroy's Daughter (पटियाला के महाराजा और वायसराय की बेटी)", "Maharaja of Kapurthala & Governor's Wife (कपूरथला के महाराजा और गवर्नर की पत्नी)", "Raja of Mandi & British Queen (मंडी के राजा और ब्रिटिश रानी)", "None of the above (इनमें से कोई नहीं)"],
        answer: 0,
        explanation: "It is believed that Bhupinder Singh (Maharaja of Patiala) eloped with the British Viceroy's daughter from here. \n\n(यह माना जाता है कि भूपिंदर सिंह (पटियाला के महाराजा) यहाँ से ब्रिटिश वायसराय की बेटी के साथ भाग गए थे।)"
    },
    {
        id: 16,
        questionEn: "At which place in Shimla is the 'Hanuman Statue' (108 feet) located?",
        questionHi: "शिमला में किस स्थान पर 'हनुमान प्रतिमा' (108 फीट) स्थित है?",
        options: ["Tara Devi (तारा देवी)", "Summer Hill (समर हिल)", "Jakhu Hill (जाखू हिल)", "Prospect Hill (प्रोस्पेक्ट हिल)"],
        answer: 2,
        explanation: "The 108-feet statue is at Jakhu Temple, the highest point in Shimla. \n\n(108 फीट की मूर्ति जाखू मंदिर में है, जो शिमला का सबसे ऊंचा स्थान है।)"
    },
    {
        id: 17,
        questionEn: "Which was the first electric building in Shimla?",
        questionHi: "शिमला में पहली विद्युत इमारत कौन सी थी?",
        options: ["Viceregal Lodge (वायसराय लॉज)", "Town Hall (टाउन हॉल)", "Gaiety Theatre (गेटी थिएटर)", "Christ Church (क्राइस्ट चर्च)"],
        answer: 0,
        explanation: "The Viceregal Lodge (1888) was the first building with electricity. \n\n(वायसराय लॉज (1888) बिजली वाली पहली इमारत थी।)"
    },
    {
        id: 18,
        questionEn: "Where is the 'State Museum' of Himachal Pradesh located?",
        questionHi: "हिमाचल प्रदेश का 'राज्य संग्रहालय' कहाँ स्थित है?",
        options: ["Chaura Maidan, Shimla (चौड़ा मैदान, शिमला)", "Annadale, Shimla (अन्नाडेल, शिमला)", "Dharamshala (धर्मशाला)", "Kullu (कुल्लू)"],
        answer: 0,
        explanation: "The HP State Museum is at Chaura Maidan, Shimla (Inverarm Hill). Established in 1974. \n\n(एचपी राज्य संग्रहालय चौड़ा मैदान, शिमला (इनवरर्म हिल) में है। 1974 में स्थापित।)"
    },
    {
        id: 19,
        questionEn: "What is the altitude of Shimla above sea level?",
        questionHi: "समुद्र तल से शिमला की ऊँचाई कितनी है?",
        options: ["1800 m", "2206 m", "2500 m", "1500 m"],
        answer: 1,
        explanation: "Shimla is located at an average altitude of 2206 meters (7238 feet). \n\n(शिमला 2206 मीटर (7238 फीट) की औसत ऊंचाई पर स्थित है।)"
    },
    {
        id: 20,
        questionEn: "Who opened the 'Gaiety Theatre' in Shimla in 1887?",
        questionHi: "1887 में शिमला में 'गेटी थिएटर' किसने खोला?",
        options: ["Lord Lytton (लॉर्ड लिटन)", "Lord Curzon (लॉर्ड कर्जन)", "Lord Dufferin (लॉर्ड डफरिन)", "Queen Victoria (महारानी विक्टोरिया)"],
        answer: 0,
        explanation: "It was designed by Henry Irwin and opened on 30th May 1887. The first play was 'Time Will Tell'. \n\n(इसे हेनरी इरविन ने डिजाइन किया था और 30 मई 1887 को खोला गया था। पहला नाटक 'टाइम विल टेल' था।)"
    }, 

    // Hill Stations - Manali & Kullu
    {
        id: 21,
        questionEn: "Manali is named after which sage?",
        questionHi: "मनाली का नाम किस ऋषि के नाम पर रखा गया है?",
        options: ["Sage Vashisht (ऋषि वशिष्ठ)", "Sage Manu (ऋषि मनु)", "Sage Vyas (ऋषि व्यास)", "Sage Parashar (ऋषि पराशर)"],
        answer: 1,
        explanation: "Manali is named after 'Manu-Alaya' (Abode of Manu). The only temple of Manu is here. \n\n(मनाली का नाम 'मनु-आलय' (मनु का निवास) पर रखा गया है। मनु का एकमात्र मंदिर यहाँ है।)"
    },
    {
        id: 22,
        questionEn: "Which temple in Manali is dedicated to the wife of Bhima?",
        questionHi: "मनाली का कौन सा मंदिर भीम की पत्नी को समर्पित है?",
        options: ["Manu Temple (मनु मंदिर)", "Vashisht Temple (वशिष्ठ मंदिर)", "Hadimba Devi Temple (हडिम्बा देवी मंदिर)", "Ghatotkach Temple (घटोत्कच मंदिर)"],
        answer: 2,
        explanation: "Hadimba Devi Temple (Dhungri Temple) is dedicated to Hidimba, Bhima's wife. Built in 1553. \n\n(हडिम्बा देवी मंदिर (ढुंगरी मंदिर) हिडिम्बा को समर्पित है, जो भीम की पत्नी थीं। 1553 में निर्मित।)"
    },
    {
        id: 23,
        questionEn: "Where is the 'Club House' located in Himachal?",
        questionHi: "हिमाचल में 'क्लब हाउस' कहाँ स्थित है?",
        options: ["Shimla (शिमला)", "Manali (मनाली)", "Dalhousie (डलहौजी)", "Kasauli (कसौली)"],
        answer: 1,
        explanation: "The Club House is a popular tourist spot in Manali run by HPTDC. \n\n(क्लब हाउस मनाली में एक लोकप्रिय पर्यटन स्थल है जो HPTDC द्वारा संचालित है।)"
    },
    {
        id: 24,
        questionEn: "Solang Valley is famous for which winter sport?",
        questionHi: "सोलंग घाटी किस शीतकालीन खेल के लिए प्रसिद्ध है?",
        options: ["Ice Hockey (आइस हॉकी)", "Skiing (स्कीइंग)", "Curling (कर्लिंग)", "Ice Skating (आइस स्केटिंग)"],
        answer: 1,
        explanation: "Solang Valley is a major hub for Skiing in winter and Paragliding in summer. \n\n(सोलंग घाटी सर्दियों में स्कीइंग और गर्मियों में पैराग्लाइडिंग का एक प्रमुख केंद्र है।)"
    },
    {
        id: 25,
        questionEn: "Which hot water spring is located near Manali?",
        questionHi: "मनाली के पास कौन सा गर्म पानी का झरना स्थित है?",
        options: ["Manikaran (मणिकरण)", "Tattapani (तत्तापानी)", "Vashisht (वशिष्ठ)", "Jeori (ज्यूरी)"],
        answer: 2,
        explanation: "Vashisht Hot Water Springs are located across the Beas river in Manali. \n\n(वशिष्ठ गर्म पानी के झरने मनाली में ब्यास नदी के पार स्थित हैं।)"
    },
    {
        id: 26,
        questionEn: "Rohtang Pass connects Kullu valley with which valley?",
        questionHi: "रोहतांग दर्रा कुल्लू घाटी को किस घाटी से जोड़ता है?",
        options: ["Kangra Valley (कांगड़ा घाटी)", "Lahaul & Spiti Valley (लाहौल और स्पीति घाटी)", "Sangla Valley (सांगला घाटी)", "Chamba Valley (चंबा घाटी)"],
        answer: 1,
        explanation: "Rohtang Pass (3978m) connects Kullu with the Lahaul & Spiti valley. \n\n(रोहतांग दर्रा (3978m) कुल्लू को लाहौल और स्पीति घाटी से जोड़ता है।)"
    },
    {
        id: 27,
        questionEn: "The 'Atal Tunnel' is built under which pass?",
        questionHi: "'अटल सुरंग' किस दर्रे के नीचे बनाई गई है?",
        options: ["Baralacha La (बारालाचा ला)", "Rohtang Pass (रोहतांग दर्रा)", "Kunzum Pass (कुंजुम दर्रा)", "Shipki La (शिपकी ला)"],
        answer: 1,
        explanation: "Atal Tunnel (9.02 km) is built under the Rohtang Pass. \n\n(अटल सुरंग (9.02 किमी) रोहतांग दर्रे के नीचे बनाई गई है।)"
    },
    {
        id: 28,
        questionEn: "Naggar was the ancient capital of which princely state?",
        questionHi: "नग्गर किस रियासत की प्राचीन राजधानी थी?",
        options: ["Mandi (मंडी)", "Suket (सुकेत)", "Kullu (कुल्लू)", "Chamba (चंबा)"],
        answer: 2,
        explanation: "Naggar was the capital of Kullu for 1400 years before it was moved to Sultanpur. \n\n(सुल्तानपुर स्थानांतरित होने से पहले 1400 वर्षों तक नग्गर कुल्लू की राजधानी थी।)"
    },
    {
        id: 29,
        questionEn: "Who built the 'Hadimba Temple' in Manali?",
        questionHi: "मनाली में 'हडिम्बा मंदिर' किसने बनवाया था?",
        options: ["Raja Bahadur Singh (राजा बहादुर सिंह)", "Raja Jagat Singh (राजा जगत सिंह)", "Raja Sansar Chand (राजा संसार चंद)", "Raja Sidh Singh (राजा सिद्ध सिंह)"],
        answer: 0,
        explanation: "It was built by Raja Bahadur Singh in 1553 AD. It has a Pagoda style roof. \n\n(इसका निर्माण राजा बहादुर सिंह ने 1553 ई. में करवाया था। इसमें पैगोडा शैली की छत है।)"
    },
    {
        id: 30,
        questionEn: "Where is the 'Nicholas Roerich Art Gallery' located?",
        questionHi: "'निकोलस रोरिक आर्ट गैलरी' कहाँ स्थित है?",
        options: ["Andretta (आंद्रेता)", "Naggar (नग्गर)", "Shimla (शिमला)", "Dharamshala (धर्मशाला)"],
        answer: 1,
        explanation: "It is located in Naggar (Kullu). Roerich was a Russian painter who lived here. \n\n(यह नग्गर (कुल्लू) में स्थित है। रोरिक एक रूसी चित्रकार थे जो यहाँ रहते थे।)"
    },

    // Hill Stations - Dharamshala & Kangra
    {
        id: 31,
        questionEn: "Dharamshala is divided into Upper and Lower Dharamshala. What is Upper Dharamshala known as?",
        questionHi: "धर्मशाला ऊपरी और निचली धर्मशाला में विभाजित है। ऊपरी धर्मशाला को किस नाम से जाना जाता है?",
        options: ["Sidhbari (सिद्धबाड़ी)", "Yol (योल)", "McLeodganj (मैक्लोडगंज)", "Dari (दारी)"],
        answer: 2,
        explanation: "Upper Dharamshala is McLeodganj, the residence of the Dalai Lama. \n\n(ऊपरी धर्मशाला मैक्लोडगंज है, जो दलाई लामा का निवास स्थान है।)"
    },
    {
        id: 32,
        questionEn: "Where is the HPCA Cricket Stadium located?",
        questionHi: "HPCA क्रिकेट स्टेडियम कहाँ स्थित है?",
        options: ["Shimla (शिमला)", "Dharamshala (धर्मशाला)", "Hamirpur (हमीरपुर)", "Una (ऊना)"],
        answer: 1,
        explanation: "The picturesque stadium is in Dharamshala. \n\n(सुंदर स्टेडियम धर्मशाला में है।)"
    },
    {
        id: 33,
        questionEn: "Which place is known as 'Little Lhasa' in India?",
        questionHi: "भारत में किस स्थान को 'छोटा ल्हासा' के नाम से जाना जाता है?",
        options: ["Spiti (स्पीति)", "McLeodganj (मैक्लोडगंज)", "Rewalsar (रिवालसर)", "Leh (लेह)"],
        answer: 1,
        explanation: "McLeodganj is called 'Little Lhasa' due to its large Tibetan population. \n\n(बड़ी तिब्बती आबादी के कारण मैक्लोडगंज को 'छोटा ल्हासा' कहा जाता है।)"
    },
    {
        id: 34,
        questionEn: "St. John in the Wilderness Church is the burial place of which Viceroy?",
        questionHi: "सेंट जॉन इन द वाइल्डरनेस चर्च किस वायसराय का दफन स्थान है?",
        options: ["Lord Mayo (लॉर्ड मेयो)", "Lord Elgin (लॉर्ड एल्गिन)", "Lord Dalhousie (लॉर्ड डलहौजी)", "Lord Curzon (लॉर्ड कर्जन)"],
        answer: 1,
        explanation: "Lord Elgin (I) is buried here (1863). The church is in McLeodganj. \n\n(लॉर्ड एल्गिन (I) को यहाँ दफनाया गया है (1863)। चर्च मैक्लोडगंज में है।)"
    },
    {
        id: 35,
        questionEn: "Which lake is located near Dharamshala?",
        questionHi: "धर्मशाला के पास कौन सी झील स्थित है?",
        options: ["Dal Lake (डल झील)", "Renuka Lake (रेणुका झील)", "Rewalsar Lake (रिवालसर झील)", "Prashar Lake (पराशर झील)"],
        answer: 0,
        explanation: "Dal Lake (distinct from Kashmir's) is near McLeodganj/Naddi. \n\n(डल झील (कश्मीर से अलग) मैक्लोडगंज/नड्डी के पास है।)"
    },
    {
        id: 36,
        questionEn: "Where is the 'War Memorial' located in Himachal?",
        questionHi: "हिमाचल में 'युद्ध स्मारक' कहाँ स्थित है?",
        options: ["Shimla (शिमला)", "Dharamshala (धर्मशाला)", "Hamirpur (हमीरपुर)", "Mandi (मंडी)"],
        answer: 1,
        explanation: "The War Memorial is located in Dharamshala amidst pine forests. \n\n(युद्ध स्मारक धर्मशाला में चीड़ के जंगलों के बीच स्थित है।)"
    },
    {
        id: 37,
        questionEn: "Triund is a popular trekking destination near which town?",
        questionHi: "त्रियुंड किस शहर के पास एक लोकप्रिय ट्रैकिंग स्थल है?",
        options: ["Manali (मनाली)", "Dharamshala (धर्मशाला)", "Dalhousie (डलहौजी)", "Chamba (चंबा)"],
        answer: 1,
        explanation: "Triund trek starts from McLeodganj/Dharamshala. \n\n(त्रियुंड ट्रेक मैक्लोडगंज/धर्मशाला से शुरू होता है।)"
    },
    {
        id: 38,
        questionEn: "Which monastery is the residence of the Dalai Lama?",
        questionHi: "कौन सा मठ दलाई लामा का निवास स्थान है?",
        options: ["Namgyal Monastery (नामग्याल मठ)", "Key Monastery (की मठ)", "Tabo Monastery (ताबो मठ)", "Kardang Monastery (करदांग मठ)"],
        answer: 0,
        explanation: "Namgyal Monastery (Tsuglagkhang Complex) in McLeodganj is his personal monastery. \n\n(मैक्लोडगंज में नामग्याल मठ (सुगलगखांग कॉम्प्लेक्स) उनका निजी मठ है।)"
    },
    {
        id: 39,
        questionEn: "When did the Dalai Lama come to Dharamshala?",
        questionHi: "दलाई लामा धर्मशाला कब आए थे?",
        options: ["1955", "1959", "1962", "1965"],
        answer: 1,
        explanation: "He arrived in India in 1959 and settled in Dharamshala (McLeodganj) in 1960. \n\n(वह 1959 में भारत आए और 1960 में धर्मशाला (मैक्लोडगंज) में बस गए।)"
    },
    {
        id: 40,
        questionEn: "Palampur is famous for which of the following?",
        questionHi: "पालमपुर निम्नलिखित में से किसके लिए प्रसिद्ध है?",
        options: ["Tea Gardens (चाय बागान)", "Apple Orchards (सेब के बाग)", "Coffee Plantations (कॉफी बागान)", "Orange Orchards (संतरे के बाग)"],
        answer: 0,
        explanation: "Palampur is known as the 'Tea Capital of Northwest India'. \n\n(पालमपुर को 'उत्तर पश्चिम भारत की चाय राजधानी' के रूप में जाना जाता है।)"
    },

    // Hill Stations - Dalhousie & Chamba
    {
        id: 41,
        questionEn: "Who founded Dalhousie in 1854?",
        questionHi: "1854 में डलहौजी की स्थापना किसने की थी?",
        options: ["Lord Curzon (लॉर्ड कर्जन)", "Lord Dalhousie (लॉर्ड डलहौजी)", "Lord Napier (लॉर्ड नेपियर)", "Raja of Chamba (चंबा के राजा)"],
        answer: 1,
        explanation: "It was founded by Lord Dalhousie on land acquired from the Raja of Chamba. \n\n(इसकी स्थापना लॉर्ड डलहौजी ने चंबा के राजा से प्राप्त भूमि पर की थी।)"
    },
    {
        id: 42,
        questionEn: "Panchpula is a tourist spot in which hill station?",
        questionHi: "पंचपुला किस हिल स्टेशन में एक पर्यटन स्थल है?",
        options: ["Shimla (शिमला)", "Manali (मनाली)", "Dalhousie (डलहौजी)", "Kasauli (कसौली)"],
        answer: 2,
        explanation: "Panchpula (Five Bridges) is a scenic spot in Dalhousie with a monument to Sardar Ajit Singh. \n\n(पंचपुला (पाँच पुल) डलहौजी में एक सुंदर स्थान है जहाँ सरदार अजीत सिंह का स्मारक है।)"
    },
    {
        id: 43,
        questionEn: "At which place does the 'Swiss Envoy' put a signboard of 'Mini Switzerland'?",
        questionHi: "'स्विस राजदूत' ने किस स्थान पर 'मिनी स्विट्जरलैंड' का साइनबोर्ड लगाया था?",
        options: ["Kufri (कुफरी)", "Khajjiar (खज्जियार)", "Solang (सोलंग)", "Sangla (सांगला)"],
        answer: 1,
        explanation: "Willy P. Blazer put the sign at Khajjiar in 1992. It is 6194 km from Bern. \n\n(विली पी. ब्लेज़र ने 1992 में खज्जियार में संकेत लगाया। यह बर्न से 6194 किमी दूर है।)"
    },
    {
        id: 44,
        questionEn: "Which river flows through Chamba town?",
        questionHi: "चंबा शहर से होकर कौन सी नदी बहती है?",
        options: ["Beas (ब्यास)", "Ravi (रावी)", "Satluj (सतलुज)", "Chenab (चिनाब)"],
        answer: 1,
        explanation: "Chamba town is situated on the banks of the Ravi river. \n\n(चंबा शहर रावी नदी के तट पर स्थित है।)"
    },
    {
        id: 45,
        questionEn: "Chaugan is a famous ground located in which district?",
        questionHi: "चौगान किस जिले में स्थित एक प्रसिद्ध मैदान है?",
        options: ["Kangra (कांगड़ा)", "Mandi (मंडी)", "Chamba (चंबा)", "Shimla (शिमला)"],
        answer: 2,
        explanation: "The Chaugan is the center of activity in Chamba town, famous for the Minjar fair. \n\n(चौगान चंबा शहर में गतिविधि का केंद्र है, जो मिंजर मेले के लिए प्रसिद्ध है।)"
    },
    {
        id: 46,
        questionEn: "Where is the 'Bhuri Singh Museum' located?",
        questionHi: "'भूरी सिंह संग्रहालय' कहाँ स्थित है?",
        options: ["Chamba (चंबा)", "Shimla (शिमला)", "Mandi (मंडी)", "Dharamshala (धर्मशाला)"],
        answer: 0,
        explanation: "Located in Chamba, established in 1908 by Raja Bhuri Singh. \n\n(चंबा में स्थित, 1908 में राजा भूरी सिंह द्वारा स्थापित।)"
    },
    {
        id: 47,
        questionEn: "Kalatop Khajjiar Sanctuary is in which district?",
        questionHi: "कालाटोप खज्जियार अभयारण्य किस जिले में है?",
        options: ["Shimla (शिमला)", "Chamba (चंबा)", "Kullu (कुल्लू)", "Sirmaur (सिरमौर)"],
        answer: 1,
        explanation: "It is located in Chamba district near Dalhousie. \n\n(यह डलहौजी के पास चंबा जिले में स्थित है।)"
    },
    {
        id: 48,
        questionEn: "Which peak is visible from Dalhousie?",
        questionHi: "डलहौजी से कौन सी चोटी दिखाई देती है?",
        options: ["Manimahesh Kailash (मणिमहेश कैलाश)", "Pir Panjal (पीर पंजाल)", "Dhauladhar (धौलाधार)", "All of the above (उपरोक्त सभी)"],
        answer: 3,
        explanation: "Dalhousie offers panoramic views of Pir Panjal, Dhauladhar, and sometimes Manimahesh. \n\n(डलहौजी से पीर पंजाल, धौलाधार और कभी-कभी मणिमहेश के मनोरम दृश्य दिखाई देते हैं।)"
    },
    {
        id: 49,
        questionEn: "Subhash Baoli is associated with which freedom fighter?",
        questionHi: "सुभाष बावली किस स्वतंत्रता सेनानी से जुड़ी है?",
        options: ["Bhagat Singh (भगत सिंह)", "Subhash Chandra Bose (सुभाष चंद्र बोस)", "Lala Lajpat Rai (लाला लाजपत राय)", "Mahatma Gandhi (महात्मा गांधी)"],
        answer: 1,
        explanation: "Subhash Chandra Bose spent time in Dalhousie in 1937 to recover his health. \n\n(सुभाष चंद्र बोस ने 1937 में अपने स्वास्थ्य को ठीक करने के लिए डलहौजी में समय बिताया था।)"
    },
    {
        id: 50,
        questionEn: "Which of the following is NOT a hill station in Chamba district?",
        questionHi: "निम्नलिखित में से कौन चंबा जिले का हिल स्टेशन नहीं है?",
        options: ["Dalhousie (डलहौजी)", "Khajjiar (खज्जियार)", "Bharmour (भरमौर)", "Kasauli (कसौली)"],
        answer: 3,
        explanation: "Kasauli is in Solan district. \n\n(कसौली सोलन जिले में है।)"
    },

    // Hill Stations - Solan & Sirmaur
    {
        id: 51,
        questionEn: "Kasauli is famous for which institute?",
        questionHi: "कसौली किस संस्थान के लिए प्रसिद्ध है?",
        options: ["IIT (आईआईटी)", "Central Research Institute (CRI) (केंद्रीय अनुसंधान संस्थान)", "NIT (एनआईटी)", "IIM (आईआईएम)"],
        answer: 1,
        explanation: "CRI Kasauli (est 1905) is famous for producing vaccines (e.g., anti-rabies). \n\n(CRI कसौली (स्थापना 1905) टीके (जैसे, एंटी-रेबीज) बनाने के लिए प्रसिद्ध है।)"
    },
    {
        id: 52,
        questionEn: "Where is the 'Monkey Point' located?",
        questionHi: "'मंकी पॉइंट' कहाँ स्थित है?",
        options: ["Shimla (शिमला)", "Kasauli (कसौली)", "Chail (चायल)", "Solan (सोलन)"],
        answer: 1,
        explanation: "Monkey Point (Manki Point) is the highest point in Kasauli. \n\n(मंकी पॉइंट कसौली का सबसे ऊंचा स्थान है।)"
    },
    {
        id: 53,
        questionEn: "Chail is famous for having the world's highest?",
        questionHi: "चायल किसके लिए विश्व में सबसे ऊंचा होने के लिए प्रसिद्ध है?",
        options: ["Post Office (डाकघर)", "Cricket Ground (क्रिकेट मैदान)", "Railway Station (रेलवे स्टेशन)", "Dam (बांध)"],
        answer: 1,
        explanation: "Chail has the world's highest cricket ground (2444m). Built by Maharaja Bhupinder Singh. \n\n(चायल में दुनिया का सबसे ऊंचा क्रिकेट मैदान (2444 मीटर) है। महाराजा भूपिंदर सिंह द्वारा निर्मित।)"
    },
    {
        id: 54,
        questionEn: "Who built the Chail Palace?",
        questionHi: "चायल पैलेस का निर्माण किसने करवाया था?",
        options: ["Raja of Sirmaur (सिरमौर के राजा)", "Maharaja of Patiala (पटियाला के महाराजा)", "Raja of Bushahr (बुशहर के राजा)", "British (अंग्रेज)"],
        answer: 1,
        explanation: "Built by Maharaja Bhupinder Singh of Patiala after he was banished from Shimla. \n\n(पटियाला के महाराजा भूपिंदर सिंह द्वारा शिमला से निर्वासित किए जाने के बाद बनवाया गया था।)"
    },
    {
        id: 55,
        questionEn: "Which place is known as the 'Peach Bowl of Asia'?",
        questionHi: "किस स्थान को 'एशिया का आड़ू का कटोरा' कहा जाता है?",
        options: ["Rajgarh (Sirmaur) (राजगढ़, सिरमौर)", "Solan (सोलन)", "Kullu (कुल्लू)", "Kotgarh (कोटगढ़)"],
        answer: 0,
        explanation: "Rajgarh in Sirmaur is famous for Peach production. \n\n(सिरमौर का राजगढ़ आड़ू उत्पादन के लिए प्रसिद्ध है।)"
    },
    {
        id: 56,
        questionEn: "Where is the 'Mohan Shakti Heritage Park' located?",
        questionHi: "'मोहन शक्ति हेरिटेज पार्क' कहाँ स्थित है?",
        options: ["Shimla (शिमला)", "Solan (सोलन)", "Mandi (मंडी)", "Una (ऊना)"],
        answer: 1,
        explanation: "It is located at Hart in Solan district. \n\n(यह सोलन जिले के हार्ट में स्थित है।)"
    },
    {
        id: 57,
        questionEn: "Renuka Lake is located in which district?",
        questionHi: "रेणुका झील किस जिले में स्थित है?",
        options: ["Mandi (मंडी)", "Sirmaur (सिरमौर)", "Chamba (चंबा)", "Bilaspur (बिलासपुर)"],
        answer: 1,
        explanation: "Renuka Lake (largest natural lake in HP) is in Sirmaur. Shaped like a sleeping woman. \n\n(रेणुका झील (HP की सबसे बड़ी प्राकृतिक झील) सिरमौर में है। सोती हुई महिला के आकार की।)"
    },
    {
        id: 58,
        questionEn: "Barog is famous for?",
        questionHi: "बड़ोग किसके लिए प्रसिद्ध है?",
        options: ["Longest Railway Tunnel (सबसे लंबी रेलवे सुरंग)", "Highest Peak (सबसे ऊंची चोटी)", "Largest Lake (सबसे बड़ी झील)", "Oldest Temple (सबसे पुराना मंदिर)"],
        answer: 0,
        explanation: "Barog Tunnel (No. 33) is the longest tunnel on the Kalka-Shimla Railway track. \n\n(बड़ोग सुरंग (नंबर 33) कालका-शिमला रेलवे ट्रैक पर सबसे लंबी सुरंग है।)"
    },
    {
        id: 59,
        questionEn: "Paonta Sahib is situated on the banks of which river?",
        questionHi: "पांवटा साहिब किस नदी के तट पर स्थित है?",
        options: ["Giri (गिरी)", "Bata (बाटा)", "Yamuna (यमुना)", "Tons (टोंस)"],
        answer: 2,
        explanation: "It is on the banks of the Yamuna river. Guru Gobind Singh lived here. \n\n(यह यमुना नदी के तट पर है। गुरु गोबिंद सिंह यहाँ रहते थे।)"
    },
    {
        id: 60,
        questionEn: "Suketi Fossil Park is located in which district?",
        questionHi: "सुकेती जीवाश्म पार्क किस जिले में स्थित है?",
        options: ["Solan (सोलन)", "Sirmaur (सिरमौर)", "Bilaspur (बिलासपुर)", "Una (ऊना)"],
        answer: 1,
        explanation: "Located in Sirmaur (Shivalik Hills). It is Asia's first park where fossils are displayed at the site of discovery. \n\n(सिरमौर (शिवालिक हिल्स) में स्थित है। यह एशिया का पहला पार्क है जहाँ जीवाश्मों को खोज स्थल पर प्रदर्शित किया जाता है।)"
    },

    // Misc Overview & Facts
    {
        id: 61,
        questionEn: "Naldehra is famous for which sport?",
        questionHi: "नालदेहरा किस खेल के लिए प्रसिद्ध है?",
        options: ["Cricket (क्रिकेट)", "Golf (गोल्फ)", "Polo (पोलो)", "Hockey (हॉकी)"],
        answer: 1,
        explanation: "Naldehra (near Shimla) has one of the oldest 9-hole Golf courses, patronized by Lord Curzon. \n\n(नालदेहरा (शिमला के पास) में सबसे पुराने 9-होल गोल्फ कोर्सों में से एक है, जिसे लॉर्ड कर्जन ने संरक्षण दिया था।)"
    },
    {
        id: 62,
        questionEn: "Which village is known as the 'highest polling station' in the world?",
        questionHi: "किस गाँव को दुनिया का 'सबसे ऊँचा मतदान केंद्र' माना जाता है?",
        options: ["Kibber (किब्बर)", "Hikkim (हिक्किम)", "Langza (लांगजा)", "Komic (कोमिक)"],
        answer: 3,
        explanation: "Tashigang is now the highest, but historically Hikkim/Kibber were. Currently, Tashigang (15,256 ft) holds the record. If Tashigang is not in option, Hikkim is often the answer in old GK. Let's assume standard current GK: Tashigang. But keeping generic famous ones. Option Komic/Hikkim. Let's stick to Hikkim for traditional GK or update. \n*Correction*: Tashigang is currently highest. Hikkim has the highest post office. Let's change question to Highest Post Office to be safe.",
        questionEn: "Which village has the world's highest Post Office?",
        questionHi: "विश्व का सबसे ऊँचा डाकघर किस गाँव में है?",
        options: ["Kibber (किब्बर)", "Hikkim (हिक्किम)", "Langza (लांगजा)", "Kaza (काजा)"],
        answer: 1,
        explanation: "Hikkim (Spiti) has the world's highest post office. \n\n(हिक्किम (स्पीति) में दुनिया का सबसे ऊंचा डाकघर है।)"
    },
    {
        id: 63,
        questionEn: "Malana village is famous for?",
        questionHi: "मलाणा गाँव किसके लिए प्रसिद्ध है?",
        options: ["Apples (सेब)", "Ancient Democracy (प्राचीन लोकतंत्र)", "Hot Springs (गर्म पानी के झरने)", "Monastery (मठ)"],
        answer: 1,
        explanation: "Malana is known for having one of the oldest democracies in the world and Jamlu Devta. \n\n(मलाणा दुनिया के सबसे पुराने लोकतंत्रों में से एक और जमलू देवता के लिए जाना जाता है।)"
    },
    {
        id: 64,
        questionEn: "Where is 'Chitkul' located?",
        questionHi: "'चितकुल' कहाँ स्थित है?",
        options: ["Lahaul (लाहौल)", "Spiti (स्पीति)", "Kinnaur (किन्नौर)", "Chamba (चंबा)"],
        answer: 2,
        explanation: "Chitkul is the last inhabited village on the Indo-Tibetan border in Kinnaur (Baspa Valley). \n\n(चितकुल किन्नौर (बास्पा घाटी) में भारत-तिब्बत सीमा पर आखिरी बसा हुआ गाँव है।)"
    },
    {
        id: 65,
        questionEn: "Bir Billing is famous for?",
        questionHi: "बीड़ बिलिंग किसके लिए प्रसिद्ध है?",
        options: ["Skiing (स्कीइंग)", "Paragliding (पैराग्लाइडिंग)", "Rafting (राफ्टिंग)", "Skating (स्केटिंग)"],
        answer: 1,
        explanation: "Bir Billing (Kangra) is a world-renowned site for Paragliding. \n\n(बीड़ बिलिंग (कांगड़ा) पैराग्लाइडिंग के लिए एक विश्व प्रसिद्ध स्थल है।)"
    },
    {
        id: 66,
        questionEn: "Which place is the 'Gateway to Lahaul'?",
        questionHi: "'लाहौल का प्रवेश द्वार' कौन सा स्थान है?",
        options: ["Rohtang Pass (रोहतांग दर्रा)", "Koksar (कोकसर)", "Keylong (केलंग)", "Gramphu (ग्राम्फू)"],
        answer: 1,
        explanation: "Koksar is the first village in Lahaul after crossing Rohtang, often called the gateway. \n\n(रोहतांग पार करने के बाद कोकसर लाहौल का पहला गाँव है, जिसे अक्सर प्रवेश द्वार कहा जाता है।)"
    },
    {
        id: 67,
        questionEn: "Where is the 'Padam Palace' located?",
        questionHi: "'पदम पैलेस' कहाँ स्थित है?",
        options: ["Shimla (शिमला)", "Rampur (रामपुर)", "Nahan (नाहन)", "Solan (सोलन)"],
        answer: 1,
        explanation: "Padam Palace is located in Rampur Bushahr. Built by Raja Padam Singh. \n\n(पदम पैलेस रामपुर बुशहर में स्थित है। राजा पदम सिंह ने बनवाया था।)"
    },
    {
        id: 68,
        questionEn: "Which town was founded by Raja Sahil Varman?",
        questionHi: "राजा साहिल वर्मन ने किस शहर की स्थापना की थी?",
        options: ["Mandi (मंडी)", "Kullu (कुल्लू)", "Chamba (चंबा)", "Shimla (शिमला)"],
        answer: 2,
        explanation: "Raja Sahil Varman founded Chamba town and named it after his daughter Champavati. \n\n(राजा साहिल वर्मन ने चंबा शहर की स्थापना की और इसका नाम अपनी बेटी चंपावती के नाम पर रखा।)"
    },
    {
        id: 69,
        questionEn: "Where is the 'Rang Mahal' located?",
        questionHi: "'रंग महल' कहाँ स्थित है?",
        options: ["Chamba (चंबा)", "Sujanpur (सुजानपुर)", "Bilaspur (बिलासपुर)", "Nahan (नाहन)"],
        answer: 0,
        explanation: "The Rang Mahal is in Chamba, built by Raja Umed Singh. (There is also one in Bilaspur, now submerged). \n\n(रंग महल चंबा में है, जिसे राजा उम्मेद सिंह ने बनवाया था।)"
    },
    {
        id: 70,
        questionEn: "Which place is called the 'Ajanta of the Himalayas'?",
        questionHi: "किस स्थान को 'हिमालय का अजंता' कहा जाता है?",
        options: ["Key Monastery (की मठ)", "Tabo Monastery (ताबो मठ)", "Masroor Rock Cut Temple (मसरूर रॉक कट मंदिर)", "Dhankar Monastery (धनकर मठ)"],
        answer: 1,
        explanation: "Tabo Monastery is called the 'Ajanta of the Himalayas' due to its murals. \n\n(भित्ति चित्रों के कारण ताबो मठ को 'हिमालय का अजंता' कहा जाता है।)"
    },
    {
        id: 71,
        questionEn: "Which place is called the 'Ellora of the Himalayas'?",
        questionHi: "किस स्थान को 'हिमालय का एलोरा' कहा जाता है?",
        options: ["Baijnath (बैजनाथ)", "Masroor Rock Cut Temple (मसरूर रॉक कट मंदिर)", "Hidimba Temple (हडिम्बा मंदिर)", "Jwalaji (ज्वालाजी)"],
        answer: 1,
        explanation: "Masroor Rock Cut Temple (Kangra) is called the 'Ellora of the Himalayas'. \n\n(मसरूर रॉक कट मंदिर (कांगड़ा) को 'हिमालय का एलोरा' कहा जाता है।)"
    },
    {
        id: 72,
        questionEn: "Tattapani is famous for?",
        questionHi: "तत्तापानी किसके लिए प्रसिद्ध है?",
        options: ["Cold Desert (शीत मरुस्थल)", "Hot Water Springs (गर्म पानी के झरने)", "Skiing (स्कीइंग)", "Monasteries (मठ)"],
        answer: 1,
        explanation: "Tattapani (Mandi) is famous for sulphur Hot Water Springs on the bank of Sutlej. \n\n(तत्तापानी (मंडी) सतलुज के तट पर सल्फर युक्त गर्म पानी के झरनों के लिए प्रसिद्ध है।)"
    },
    {
        id: 73,
        questionEn: "Where is 'Prashar Lake' located?",
        questionHi: "'पराशर झील' कहाँ स्थित है?",
        options: ["Kullu (कुल्लू)", "Mandi (मंडी)", "Chamba (चंबा)", "Shimla (शिमला)"],
        answer: 1,
        explanation: "Prashar Lake is in Mandi. It has a floating island and a pagoda style temple. \n\n(पराशर झील मंडी में है। इसमें एक तैरता हुआ द्वीप और पैगोडा शैली का मंदिर है।)"
    },
    {
        id: 74,
        questionEn: "Which is the highest cricket ground in the world?",
        questionHi: "दुनिया का सबसे ऊंचा क्रिकेट मैदान कौन सा है?",
        options: ["Dharamshala (धर्मशाला)", "Chail (चायल)", "Shimla (शिमला)", "Solan (सोलन)"],
        answer: 1,
        explanation: "Chail Cricket Ground (2444m) is the highest in the world. \n\n(चायल क्रिकेट ग्राउंड (2444 मीटर) दुनिया में सबसे ऊंचा है।)"
    },
    {
        id: 75,
        questionEn: "Where is the 'Himalayan Bird Park' located?",
        questionHi: "'हिमालयन बर्ड पार्क' कहाँ स्थित है?",
        options: ["Shimla (शिमला)", "Manali (मनाली)", "Dharamshala (धर्मशाला)", "Kufri (कुफरी)"],
        answer: 0,
        explanation: "It is located in Shimla (near Viceregal Lodge). \n\n(यह शिमला (वायसराय लॉज के पास) में स्थित है।)"
    },
    {
        id: 76,
        questionEn: "Which of these is a famous 'Valley of Shadows'?",
        questionHi: "इनमें से कौन सी प्रसिद्ध 'छाया की घाटी' है?",
        options: ["Pin Valley (पिन घाटी)", "Parvati Valley (पार्वती घाटी)", "Spiti Valley (स्पीति घाटी)", "None (कोई नहीं)"],
        answer: 0,
        explanation: "Pin Valley is sometimes referred to in this context due to its location, but 'Valley of Gods' is Kullu. Let's ask a more standard question. \nQuestion Change: Where is the 'Pin Valley National Park'?",
        questionEn: "Where is the 'Pin Valley National Park'?",
        questionHi: "'पिन वैली नेशनल पार्क' कहाँ है?",
        options: ["Kinnaur (किन्नौर)", "Lahaul (लाहौल)", "Spiti (स्पीति)", "Kullu (कुल्लू)"],
        answer: 2,
        explanation: "Pin Valley NP is in Spiti. \n\n(पिन वैली एनपी स्पीति में है।)"
    },
    {
        id: 77,
        questionEn: "The 'Shoolini Mela' is celebrated in?",
        questionHi: "'शूलिनी मेला' कहाँ मनाया जाता है?",
        options: ["Shimla (शिमला)", "Solan (सोलन)", "Sirmaur (सिरमौर)", "Mandi (मंडी)"],
        answer: 1,
        explanation: "Shoolini Mela is celebrated in Solan in honor of Shoolini Mata. \n\n(शूलिनी माता के सम्मान में सोलन में शूलिनी मेला मनाया जाता है।)"
    },
    {
        id: 78,
        questionEn: "Minjar Fair is associated with which district?",
        questionHi: "मिंजर मेला किस जिले से संबंधित है?",
        options: ["Chamba (चंबा)", "Mandi (मंडी)", "Kullu (कुल्लू)", "Kangra (कांगड़ा)"],
        answer: 0,
        explanation: "Minjar fair is held in Chamba (Chaugan) in August. Minjar refers to maize flowers. \n\n(मिंजर मेला अगस्त में चंबा (चौगान) में आयोजित किया जाता है। मिंजर मक्के के फूलों को संदर्भित करता है।)"
    },
    {
        id: 79,
        questionEn: "Dungri Mela in Manali is dedicated to?",
        questionHi: "मनाली में डुंगरी मेला किसे समर्पित है?",
        options: ["Manu Rishi (मनु ऋषि)", "Hadimba Devi (हडिम्बा देवी)", "Vashisht Rishi (वशिष्ठ ऋषि)", "Ghatotkach (घटोत्कच)"],
        answer: 1,
        explanation: "It is held at Hadimba Devi Temple in May. \n\n(यह मई में हडिम्बा देवी मंदिर में आयोजित किया जाता है।)"
    },
    {
        id: 80,
        questionEn: "Where is the 'Chinmaya Tapovan' located?",
        questionHi: "'चिन्मय तपोवन' कहाँ स्थित है?",
        options: ["Dharamshala (धर्मशाला)", "Shimla (शिमला)", "Manali (मनाली)", "Solan (सोलन)"],
        answer: 0,
        explanation: "It is located near Dharamshala (Sidhbari). Founded by Swami Chinmayananda. \n\n(यह धर्मशाला (सिद्धबाड़ी) के पास स्थित है। स्वामी चिन्मयानंद द्वारा स्थापित।)"
    },
    {
        id: 81,
        questionEn: "Which pass is known as the 'Pass with Crossroads on Summit'?",
        questionHi: "किस दर्रे को 'शिखर पर चौराहे वाला दर्रा' कहा जाता है?",
        options: ["Rohtang (रोहतांग)", "Baralacha La (बारालाचा ला)", "Kunzum (कुंजुम)", "Shipki La (शिपकी ला)"],
        answer: 1,
        explanation: "Baralacha La connects Lahaul, Ladakh, Spiti, and Zanskar. \n\n(बारालाचा ला लाहौल, लद्दाख, स्पीति और ज़ांस्कर को जोड़ता है।)"
    },
    {
        id: 82,
        questionEn: "Where is the 'Booty Weavers Cooperative Society' famous for shawls?",
        questionHi: "शॉल के लिए प्रसिद्ध 'बूटी वीवर्स को-ऑपरेटिव सोसाइटी' कहाँ है?",
        options: ["Kullu (कुल्लू)", "Shimla (शिमला)", "Chamba (चंबा)", "Kinnaur (किन्नौर)"],
        answer: 0,
        explanation: "Kullu is famous for its Shawl industry (Bhuttico). \n\n(कुल्लू अपने शॉल उद्योग (भुट्टिको) के लिए प्रसिद्ध है।)"
    },
    {
        id: 83,
        questionEn: "Keylong is the headquarters of which district?",
        questionHi: "केलंग किस जिले का मुख्यालय है?",
        options: ["Kinnaur (किन्नौर)", "Lahaul & Spiti (लाहौल और स्पीति)", "Chamba (चंबा)", "Kullu (कुल्लू)"],
        answer: 1,
        explanation: "Keylong is the HQ of Lahaul & Spiti. \n\n(केलंग लाहौल और स्पीति का मुख्यालय है।)"
    },
    {
        id: 84,
        questionEn: "Recong Peo is the headquarters of which district?",
        questionHi: "रिकांगपिओ किस जिले का मुख्यालय है?",
        options: ["Lahaul & Spiti (लाहौल और स्पीति)", "Kinnaur (किन्नौर)", "Shimla (शिमला)", "Mandi (मंडी)"],
        answer: 1,
        explanation: "Recong Peo is the HQ of Kinnaur. \n\n(रिकांगपिओ किन्नौर का मुख्यालय है।)"
    },
    {
        id: 85,
        questionEn: "Which is the largest man-made lake in Himachal?",
        questionHi: "हिमाचल में सबसे बड़ी मानव निर्मित झील कौन सी है?",
        options: ["Gobind Sagar (गोबिंद सागर)", "Pong Dam (पोंग बांध)", "Chamera (चमेरा)", "Pandoh (पंडोह)"],
        answer: 0,
        explanation: "Gobind Sagar (Bilaspur) on Sutlej river is the largest artificial lake. \n\n(सतलुज नदी पर गोबिंद सागर (बिलासपुर) सबसे बड़ी कृत्रिम झील है।)"
    },
    {
        id: 86,
        questionEn: "Where is the 'Indian Institute of Advanced Study' (IIAS) located?",
        questionHi: "'भारतीय उच्च अध्ययन संस्थान' (IIAS) कहाँ स्थित है?",
        options: ["Summer Hill, Shimla (समर हिल, शिमला)", "Prospect Hill, Shimla (प्रोस्पेक्ट हिल, शिमला)", "Observatory Hill, Shimla (ऑब्जर्वेटरी हिल, शिमला)", "Jakhu Hill, Shimla (जाखू हिल, शिमला)"],
        answer: 2,
        explanation: "IIAS is housed in the Viceregal Lodge on Observatory Hill. \n\n(IIAS ऑब्जर्वेटरी हिल पर वायसराय लॉज में स्थित है।)"
    },
    {
        id: 87,
        questionEn: "Where is the 'Army Training Command' (ARTRAC) located?",
        questionHi: "'आर्मी ट्रेनिंग कमांड' (ARTRAC) कहाँ स्थित है?",
        options: ["Yol (योल)", "Shimla (शिमला)", "Dagshai (दगशाई)", "Subathu (सुबाथू)"],
        answer: 1,
        explanation: "ARTRAC is headquartered in Shimla. \n\n(ARTRAC का मुख्यालय शिमला में है।)"
    },
    {
        id: 88,
        questionEn: "Who calls Himachal 'The Apple State of India'?",
        questionHi: "हिमाचल को 'भारत का सेब राज्य' कौन कहता है?",
        options: ["It is a general nickname (यह एक सामान्य उपनाम है)", "Jawaharlal Nehru (जवाहरलाल नेहरू)", "Y.S. Parmar (वाई.एस. परमार)", "None (कोई नहीं)"],
        answer: 0,
        explanation: "It is popularly known as the Apple State due to high production. \n\n(उच्च उत्पादन के कारण इसे लोकप्रिय रूप से सेब राज्य के रूप में जाना जाता है।)"
    },
    {
        id: 89,
        questionEn: "Which of the following is a 'Heritage Hotel' run by HPTDC?",
        questionHi: "निम्नलिखित में से कौन HPTDC द्वारा संचालित 'हेरिटेज होटल' है?",
        options: ["Hotel Holiday Home (होटल हॉलिडे होम)", "The Castle, Naggar (द कैसल, नग्गर)", "Hotel Peterhoff (होटल पीटरहॉफ)", "All of the above (उपरोक्त सभी)"],
        answer: 1,
        explanation: "The Castle, Naggar (Kullu) is a heritage property. Palace Hotel (Chail) is another. \n\n(द कैसल, नग्गर (कुल्लू) एक विरासत संपत्ति है। पैलेस होटल (चायल) एक और है।)"
    },
    {
        id: 90,
        questionEn: "Kee Gompa (Monastery) is located in?",
        questionHi: "की गोम्पा (मठ) कहाँ स्थित है?",
        options: ["Kinnaur (किन्नौर)", "Lahaul (लाहौल)", "Spiti (स्पीति)", "Kullu (कुल्लू)"],
        answer: 2,
        explanation: "Kee Monastery is in Spiti Valley. \n\n(की मठ स्पीति घाटी में है।)"
    }
);
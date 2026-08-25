const API_KEY = "fca3fb5ffd8b7362758bcb97441c20a2";

const uiDict = {
  en: {
    welcome:
      "Hello! 👋 Ask me for the weather of any city by typing or speaking.",
    humidity: "Humidity",
    wind: "Wind",
    notFound: "City not found, please try again.",
    error: "Network error occurred.",
    forecastTitle: "📅 5-Day Forecast:",
    advisoryTitle: "🌾 Farmer Advisory:",
    alertTitle: "⚠️ Severe Weather Alert:",
    rainAdv: "Rain expected today, avoid crop irrigation.",
    hotAdv: "High temperature recorded, ensure adequate crop hydration.",
    normalAdv:
      "Weather conditions are favorable for normal farming activities.",
    severeAlert:
      "Alert: Severe weather conditions or heavy storms detected in this area!",
  },
  hi: {
    welcome: "नमस्ते! 👋 बोलकर या लिखकर किसी भी शहर का मौसम पूछें।",
    humidity: "नमी",
    wind: "हवा",
    notFound: "शहर नहीं मिला, कृपया सही नाम बोलें।",
    error: "नेटवर्क त्रुटि आई है।",
    forecastTitle: "📅 अगले 5 दिनों का पूर्वानुमान:",
    advisoryTitle: "🌾 किसान सलाह:",
    alertTitle: "⚠️ गंभीर मौसम चेतावनी:",
    rainAdv: "बारिश की संभावना है, कृपया फसलों की सिंचाई न करें।",
    hotAdv: "तापमान अधिक है, फसलों में पर्याप्त नमी बनाए रखें।",
    normalAdv: "मौसम अनुकूल है, कृषि कार्य सामान्य रूप से किए जा सकते हैं।",
    severeAlert:
      "सतर्क रहें! इस समय क्षेत्र में गंभीर मौसमी स्थिति या भारी बारिश की चेतावनी है।",
  },
  bn: {
    welcome: "হ্যালো! 👋 যেকোনো শহরের আবহাওয়া সম্পর্কে বলুন বা লিখুন।",
    humidity: "আর্দ্রতা",
    wind: "বাতাস",
    notFound: "শহর পাওয়া যায়নি, আবার চেষ্টা করুন।",
    error: "নেটওয়ার্ক ত্রুটি ঘটেছে।",
    forecastTitle: "📅 ৫ দিনের পূর্বাভাস:",
    advisoryTitle: "🌾 কৃষক পরামর্শ:",
    alertTitle: "⚠️ আবহাওয়া সতর্কবার্তা:",
    rainAdv: "আজ বৃষ্টির সম্ভাবনা রয়েছে, ফসলে জল সেচ দেওয়া থেকে বিরত থাকুন।",
    hotAdv:
      "উচ্চ তাপমাত্রা রেকর্ড করা হয়েছে, ফসলে পর্যাপ্ত আর্দ্রতা বজায় রাখুন।",
    normalAdv: "আবহাওয়া অনুকূল রয়েছে, স্বাভাবিক কৃষিকাজ চালানো যেতে পারে।",
    severeAlert:
      "সতর্কতা: এই অঞ্চলে তীব্র আবহাওয়া বা ভারী ঝড়ের আশঙ্কা রয়েছে!",
  },
  ta: {
    welcome: "வணக்கம்! 👋 பேசியோ அல்லது தட்டியோ வானிலையை அறியுங்கள்.",
    humidity: "ஈரப்பதம்",
    wind: "காற்று",
    notFound: "நகரம் கிடைக்கவில்லை.",
    error: "வலைப்பின்னல் பிழை.",
    forecastTitle: "📅 5 நாள் முன்னறிவிப்பு:",
    advisoryTitle: "🌾 விவசாய ஆலோசனை:",
    alertTitle: "⚠️ வானிலை எச்சரிக்கை:",
    rainAdv:
      "இன்று மழை பெய்ய வாய்ப்புள்ளது, பயிர்களுக்கு நீர் பாய்ச்சுவதை தவிர்க்கவும்.",
    hotAdv: "வெப்பநிலை அதிகமாக உள்ளது, பயிர்களில் ஈரப்பதத்தை பராமரிக்கவும்.",
    normalAdv: "வானிலை சாதகமாக உள்ளது, வழக்கமான விவசாய பணிகளை மேற்கொள்ளலாம்.",
    severeAlert:
      "எச்சரிக்கை: இந்த பகுதியில் கடுமையான வானிலை அல்லது பலத்த காற்று எச்சரிக்கை!",
  },
  te: {
    welcome: "నమస్కారం! 👋 మాట్లాడి లేదా టైప్ చేసి వాతావరణం తెలుసుకోండి.",
    humidity: "తేమ",
    wind: "గాలి",
    notFound: "నగరం కనుగొనబడలేదు.",
    error: "నెట్‌వర్క్ లోపం.",
    forecastTitle: "📅 5 రోజుల అంచనా:",
    advisoryTitle: "🌾 రైతు సలహా:",
    alertTitle: "⚠️ తీవ్రమైన వాతావరణ హెచ్చరిక:",
    rainAdv: "ఈరోజు వర్షం పడే అవకాశం ఉంది, పంటలకు నీరు పెట్టడం మానుకోండి.",
    hotAdv: "ఉష్ణోగ్రత ఎక్కువగా ఉంది, పంటలలో తగినంత తేమ ఉండేలా చూసుకోండి.",
    normalAdv: "వాతావరణం అనుకూలంగా ఉంది, సాధారణ వ్యవసాయ పనులు చేసుకోవచ్చు.",
    severeAlert:
      "హెచ్చరిక: ఈ ప్రాంతంలో తీవ్రమైన వాతావరణం లేదా భారీ తుఫాను హెచ్చరిక ఉంది!",
  },
  kn: {
    welcome: "ನಮಸ್ಕಾರ! 👋 ಮಾತನಾಡಿ ಅಥವಾ ಟೈಪ್ ಮಾಡಿ ಹವಾಮಾನ ತಿಳಿಯಿರಿ.",
    humidity: "ಆರ್ದ್ರತೆ",
    wind: "ಗಾಳಿ",
    notFound: "ನಗರ ಕಂಡುಬಂದಿಲ್ಲ.",
    error: "ದೋಷ ಸಂಭವಿಸಿದೆ.",
    forecastTitle: "📅 5 ದಿನಗಳ ಮುನ್ಸೂಚನೆ:",
    advisoryTitle: "🌾 ರೈತರ ಸಲಹೆ:",
    alertTitle: "⚠️ ಹವಾಮಾನ ಎಚ್ಚರಿಕೆ:",
    rainAdv:
      "ಇಂದು ಮಳೆಯಾಗುವ ನಿರೀಕ್ಷೆಯಿದೆ, ಬೆಳೆಗಳಿಗೆ ನೀರು ಹಾಯಿಸುವುದನ್ನು ತಪ್ಪಿಸಿ.",
    hotAdv: "ಉಷ್ಣಾಂಶ ಹೆಚ್ಚಾಗಿದೆ, ಬೆಳೆಗಳಲ್ಲಿ ತೇವಾಂಶ ಕಾಪಾಡಿಕೊಳ್ಳಿ.",
    normalAdv:
      "ಹವಾಮಾನ ಅನುಕೂಲಕರವಾಗಿದೆ, ಸಾಮಾನ್ಯ ಕೃಷಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಮುಂದುವರಿಸಬಹುದು.",
    severeAlert:
      "ಎಚ್ಚರಿಕೆ: ಈ ಪ್ರದೇಶದಲ್ಲಿ ತೀವ್ರ ಹವಾಮಾನ ಅಥವಾ ಭಾರೀ ಮಳೆಯ ಮುನ್ನೆಚ್ಚರಿಕೆ ಇದೆ!",
  },
  ml: {
    welcome:
      "नमस्कार! 👋 കാലാവസ്ഥ അറിയാൻ സംസാരിക്കുകയോ ടൈപ്പ് ചെയ്യുകയോ ചെയ്യുക.",
    humidity: "ஈரப்பதம்",
    wind: "காற்று",
    notFound: "നഗരം കണ്ടെത്തിയില്ല.",
    error: "പിശക്.",
    forecastTitle: "📅 5 ദിവസത്തെ പ്രവചനം:",
    advisoryTitle: "🌾 കർഷക ഉപദേശം:",
    alertTitle: "⚠️ കാലാവസ്ഥ മുന്നറിയിപ്പ്:",
    rainAdv:
      "ഇന്ന് മഴയ്ക്ക് സാധ്യതയുണ്ട്, വിളകൾക്ക് വെള്ളം നൽകുന്നത് ഒഴിവാക്കുക.",
    hotAdv: "താപനില കൂടുതലാണ്, വിളകളിൽ ആവശ്യത്തിന് ഈർപ്പം നിലനിർത്തുക.",
    normalAdv: "കാലാവസ്ഥ അനുകൂലമാണ്, സാധാരണ കൃഷി കാര്യങ്ങൾ ചെയ്യാം.",
    severeAlert:
      "മുന്നറിയിപ്പ്: ഈ പ്രദേശത്ത് കടുത്ത കാലാവസ്ഥയോ ശക്തമായ മഴയോ ഉണ്ടാകാൻ സാധ്യതയുണ്ട്!",
  },
  mr: {
    welcome: "नमस्कार! 👋 बोलून किंवा लिहून हवामान तपासा.",
    humidity: "आर्द्रता",
    wind: "वारा",
    notFound: "शहर सापडले नाही.",
    error: "त्रुटी आली आहे.",
    forecastTitle: "📅 5 दिवसांचा अंदाज:",
    advisoryTitle: "🌾 शेतकरी सल्ला:",
    alertTitle: "⚠️ हवामान इशारा:",
    rainAdv: "आज पाऊस पडण्याची शक्यता आहे, पिकांना पाणी देणे टाळा.",
    hotAdv: "तापमान जास्त आहे, पिकांमध्ये योग्य ओलावा ठेवा.",
    normalAdv: "हवामान अनुकूल आहे, नेहमीची शेतीची कामे करता येतील.",
    severeAlert:
      "इशारा: या क्षेत्रात तीव्र हवामान किंवा मुसळधार पाऊस पडण्याचा इशारा आहे!",
  },
  gu: {
    welcome: "नमस्ते! 👋 બોલીને કે લખીને હવામાન જાણો.",
    humidity: "ભેજ",
    wind: "પવન",
    notFound: "शहर મળ્યું નથી.",
    error: "ભૂલ આવી છે.",
    forecastTitle: "📅 5 દિવસની πρόβλεψη:",
    advisoryTitle: "🌾 ખેડૂત સલાહ:",
    alertTitle: "⚠️ ગંભીર હવામાન ચેતવણી:",
    rainAdv: "આજે વરસાદની શક્યતા છે, પાકને પાણી પાવું નહીં.",
    hotAdv: "તાપમાન વધારે છે, પાકમાં પૂરતો ભેજ જાળવી રાખો.",
    normalAdv: "હવામાન અનુકૂળ છે, સામાન્ય ખેતીકામ કરી શકાય છે.",
    severeAlert:
      "ચેતવણી: આ વિસ્તારમાં ગંભીર હવામાન અથવા ભારે વરસાદની ચેતવણી છે!",
  },
  pa: {
    welcome: "ਸਤਿ ਸ্ৰੀ ਅਕਾਲ! 👋 ਬੋਲ ਕੇ ਜਾਂ ਲਿਖ ਕੇ ਮੌਸਮ ਪਤਾ ਕਰੋ।",
    humidity: "ਨਮੀ",
    wind: "ਹਵਾ",
    notFound: "ਸ਼ਹਿਰ ਨਹੀਂ ਮਿਲਿਆ.",
    error: "ਗਲਤੀ ਆਈ है.",
    forecastTitle: "📅 5 ਦਿਨਾਂ ਦੀ ਭਵਿੱਖਬਾਣੀ:",
    advisoryTitle: "🌾 ਕਿਸਾਨ ਸਲਾਹ:",
    alertTitle: "⚠️ ਮੌਸਮ ਚੇਤਾਵਨੀ:",
    rainAdv: "ਅੱਜ ਮੀਂਹ ਪੈਣ ਦੀ ਸੰਭਾਵਨਾ ਹੈ, ਫਸਲਾਂ ਨੂੰ ਪਾਣੀ ਨਾ ਦਿਓ.",
    hotAdv: "ਤਾਪਮਾਨ ਵੱਧ ਹੈ, ਫਸਲਾਂ ਵਿੱਚ ਨਮੀ ਬਣਾ ਕੇ ਰੱਖੋ.",
    normalAdv: "ਮੌਸਮ ਅਨੁਕੂਲ ਹੈ, ਖੇਤੀ ਦੇ ਆਮ ਕੰਮ ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ.",
    severeAlert:
      "ਚੇਤਾਵਨੀ: ਇਸ ਖੇਤਰ ਵਿੱਚ ਗੰਭੀਰ ਮੌਸਮ ਜਾਂ ਭਾਰੀ ਮੀਂਹ ਦੀ ਚੇਤਾਵਨੀ ਹੈ!",
  },
  or: {
    welcome: "ନମସ୍କାର! 👋 କହିing କିମ୍ବା ଟାଇପ୍ କରି ପାଣିପାଗ ଜାଣନ୍ତୁ।",
    humidity: "ଆର୍ଦ୍ରତା",
    wind: "ପବନ",
    notFound: "ସହର ମିଳିଲା ନାହିଁ.",
    error: "ତ୍ରୁଟି ଘଟିଛି।",
    forecastTitle: "📅 5 ଦିନର ପୂର୍ବାନୁମାନ:",
    advisoryTitle: "🌾 କୃଷକ ପରାମର୍ଶ:",
    alertTitle: "⚠️ ପାଣିପାଗ ସତर्कତା:",
    rainAdv: "ଆଜି ବର୍ଷା ହେବାର ସମ୍ଭାବନା ଅଛି, ଫସଲରେ ଜଳସେଚନ କରନ୍ତୁ ନାହିଁ।",
    hotAdv: "ତାପମାତ୍ରା ଅଧିକ ଅଛି, ଫସଲରେ ପର୍ଯ୍ୟାପ୍ତ ଆର୍ଦ୍ରତା ବଜାଇ ରଖନ୍ତୁ।",
    normalAdv: "ପାଣିପାଗ अनुकूल ଅଛି, ସାଧାରଣ କୃଷି କାର୍ଯ୍ୟ କରାଯାଇପାରିବ।",
    severeAlert:
      "ସତର୍କତା: ଏହି ଅଞ୍ଚଳରେ ତୀବ୍ର ପାଣିପାଗ କିମ୍ବା ପ୍ରବଳ ବର୍ଷା ହେବାର ସତର୍କତା ଅଛି!",
  },
};

const weatherDescDict = {
  hi: {
    "clear sky": "साफ आसमान",
    "few clouds": "कुछ बादल",
    "scattered clouds": "छिटपुट बादल",
    "broken clouds": "घने बादल",
    "shower rain": "झमाझम बारिश",
    rain: "बारिश",
    thunderstorm: "तूफान के साथ बारिश",
    snow: "बर्फबारी",
    mist: "कोहरा / धुंध",
    haze: "धुंध",
    "overcast clouds": "बादल छाए हुए हैं",
  },
  bn: {
    "clear sky": "পরিষ্কার আকাশ",
    "few clouds": "কিছু মেঘ",
    "scattered clouds": "বিক্ষিপ্ত মেঘ",
    "broken clouds": "ভাঙা মেঘ",
    "shower rain": "বৃষ্টি",
    rain: "বৃষ্টি",
    thunderstorm: "ঝড়ো হাওয়া সহ বৃষ্টি",
    mist: "কুয়াশা",
    haze: "কুয়াশা",
    "overcast clouds": "মেঘাচ্ছন্ন আকাশ",
  },
};

document.getElementById("langSelect").addEventListener("change", function () {
  let lang = this.value;
  document.getElementById("welcomeMsg").innerText = uiDict[lang].welcome;
});

function checkEnter(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function sendPreset(cityName) {
  document.getElementById("userInput").value = cityName;
  sendMessage();
}

function startVoiceInput() {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!window.SpeechRecognition) {
    alert("Voice input is not supported in this browser.");
    return;
  }

  let recognition = new window.SpeechRecognition();
  let selectedLang = document.getElementById("langSelect").value;

  const langMap = {
    en: "en-US",
    hi: "hi-IN",
    bn: "bn-IN",
    ta: "ta-IN",
    te: "te-IN",
    kn: "kn-IN",
    ml: "ml-IN",
    mr: "mr-IN",
    gu: "gu-IN",
    pa: "pa-IN",
    or: "or-IN",
  };
  recognition.lang = langMap[selectedLang] || "hi-IN";

  let micIcon = document.getElementById("micIcon");
  micIcon.classList.remove("text-danger", "text-sky-400");
  micIcon.classList.add("text-success", "fa-beat");

  recognition.onresult = function (event) {
    let spokenText = event.results[0][0].transcript.toLowerCase().trim();

    const cityCorrections = {
      muzaffarpur: [
        "muzaffarpur",
        "muzaffar pur",
        "muzffarpur",
        "mozaffarpur",
        "muzapur",
        "muzaffar",
        "मुजफ्फरपुर",
        "मुज़फ़्फ़रपुर",
      ],
      bhubaneswar: [
        "bhubaneswar",
        "bhubaneshwar",
        "bhubneshwar",
        "bhubneswer",
        "bhubneswar",
        "bhuvaneshwar",
        "भुवनेश्वर",
      ],
      patna: ["patna", "patana", "pattna", "पटना"],
      mumbai: ["mumbai", "bombay", "mombai", "मुंबई", "बम्बई"],
      kolkata: ["kolkata", "calcutta", "kolkatta", "कोलकाता", "कलकत्ता"],
      bengaluru: ["bengaluru", "bangalore", "banglore", "बेंगलुरु", "बैंगलोर"],
      delhi: ["delhi", "dilli", "dehli", "दिल्ली"],
    };

    let correctedCity = spokenText;
    for (let actualCity in cityCorrections) {
      for (let wrongWord of cityCorrections[actualCity]) {
        if (spokenText.includes(wrongWord)) {
          correctedCity = actualCity;
          break;
        }
      }
    }

    document.getElementById("userInput").value = correctedCity;
    micIcon.classList.remove("text-success", "fa-beat");
    micIcon.classList.add("text-danger");
    sendMessage();
  };

  recognition.onerror = function () {
    micIcon.classList.remove("text-success", "fa-beat");
    micIcon.classList.add("text-danger");
  };

  recognition.onend = function () {
    micIcon.classList.remove("text-success", "fa-beat");
    micIcon.classList.add("text-danger");
  };

  recognition.start();
}

async function sendMessage() {
  let inputField = document.getElementById("userInput");
  let text = inputField.value.trim();
  if (!text) return;

  let selectedLang = document.getElementById("langSelect").value;
  let chatWindow = document.getElementById("chatWindow");

  chatWindow.innerHTML += '<div class="message user-msg">' + text + "</div>";
  inputField.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;

  let cleanText = text.toLowerCase();

  const hindiEnglishMap = {
    मुजफ्फरपुर: "muzaffarpur",
    मुज़फ़्फ़रपुर: "muzaffarpur",
    पटना: "patna",
    दिल्ली: "delhi",
    मुंबई: "mumbai",
    कोलकाता: "kolkata",
    बेंगलुरु: "bengaluru",
    चेन्नई: "chennai",
  };

  for (let hiName in hindiEnglishMap) {
    if (cleanText.includes(hiName)) {
      cleanText = hindiEnglishMap[hiName];
      break;
    }
  }

  let fillerWords = [
    "weather in",
    "mausam",
    "ka mausam",
    "kaisa hai",
    "kya hai",
    "temperature",
    "forecast",
    "batao",
    "dikhao",
    "city",
    "weather",
    "mujhe",
    "ka",
    "ki",
    "ke",
    "chhote",
    "update",
  ];

  let city = cleanText;
  fillerWords.forEach((word) => {
    let regex = new RegExp(`\\b${word}\\b`, "gi");
    city = city.replace(regex, "");
  });
  city = city.trim();
  if (!city) city = cleanText;

  chatWindow.innerHTML += `
    <div id="loading" class="message bot-msg">
      <div class="typing-dots"><span></span><span></span><span></span></div>
    </div>`;
  chatWindow.scrollTop = chatWindow.scrollHeight;

  try {
    let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

    let [resCurrent, resForecast] = await Promise.all([
      fetch(currentWeatherUrl),
      fetch(forecastUrl),
    ]);

    let data = await resCurrent.json();
    let forecastData = await resForecast.json();

    let loader = document.getElementById("loading");
    if (loader) loader.remove();

    if (data.cod === 200) {
      let temp = data.main.temp;
      let rawDesc = data.weather[0].description;
      let cityName = data.name;
      let humidity = data.main.humidity;
      let wind = data.wind.speed;

      let desc = rawDesc;
      if (
        weatherDescDict[selectedLang] &&
        weatherDescDict[selectedLang][rawDesc]
      ) {
        desc = weatherDescDict[selectedLang][rawDesc];
      }

      let emoji = "⛅";
      if (rawDesc.includes("rain")) emoji = "🌧️";
      else if (temp > 35) emoji = "🔥";
      else if (temp < 15) emoji = "🥶";
      else if (rawDesc.includes("clear") || rawDesc.includes("sun"))
        emoji = "☀️";

      let t = uiDict[selectedLang];

      let alertMsg = "";
      if (
        rawDesc.includes("thunderstorm") ||
        rawDesc.includes("heavy intensity rain") ||
        temp > 40
      ) {
        alertMsg = `<br><br><span style="color: #f87171;"><b>${t.alertTitle}</b> ${t.severeAlert}</span>`;
      }

      let advisoryMsg = "";
      if (rawDesc.includes("rain") || rawDesc.includes("shower")) {
        advisoryMsg = `<br><br><span style="color: #34d399;"><b>${t.advisoryTitle}</b> ${t.rainAdv}</span>`;
      } else if (temp > 35) {
        advisoryMsg = `<br><br><span style="color: #34d399;"><b>${t.advisoryTitle}</b> ${t.hotAdv}</span>`;
      } else {
        advisoryMsg = `<br><br><span style="color: #34d399;"><b>${t.advisoryTitle}</b> ${t.normalAdv}</span>`;
      }

      let forecastListHtml = "";
      if (forecastData.cod === "200") {
        forecastListHtml = `<br><br><b>${t.forecastTitle}</b><div style="font-size: 0.85rem; margin-top: 4px; display: flex; gap: 8px; overflow-x: auto;">`;

        let dailyMap = {};
        forecastData.list.forEach((item) => {
          let date = item.dt_txt.split(" ")[0];
          if (!dailyMap[date] && item.dt_txt.includes("12:00:00")) {
            dailyMap[date] = item;
          }
        });

        let count = 0;
        for (let d in dailyMap) {
          if (count >= 4) break;
          let dayItem = dailyMap[d];
          let dayTemp = Math.round(dayItem.main.temp);
          let dayName = new Date(d).toLocaleDateString(
            selectedLang === "hi" ? "hi-IN" : "en-US",
            { weekday: "short" },
          );
          forecastListHtml += `<div style="background: rgba(255,255,255,0.05); padding: 4px 8px; border-radius: 8px; text-align: center; min-width: 55px;">${dayName}<br>${dayTemp}°C</div>`;
          count++;
        }
        forecastListHtml += `</div>`;
      }

      let reply = `${emoji} <b>${cityName}</b>: <b>${temp}°C</b>, ${desc}.<br>💧 ${t.humidity}: ${humidity}% | 💨 ${t.wind}: ${wind} m/s${alertMsg}${advisoryMsg}${forecastListHtml}`;

      chatWindow.innerHTML +=
        '<div class="message bot-msg">' + reply + "</div>";
    } else {
      let t = uiDict[selectedLang];
      chatWindow.innerHTML +=
        '<div class="message bot-msg">' + t.notFound + "</div>";
    }
  } catch (err) {
    let loader = document.getElementById("loading");
    if (loader) loader.remove();
    let t = uiDict[selectedLang];
    chatWindow.innerHTML +=
      '<div class="message bot-msg">' + t.error + "</div>";
  }

  chatWindow.scrollTop = chatWindow.scrollHeight;
}

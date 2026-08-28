const WEATHER_API_KEY = "fca3fb5ffd8b7362758bcb97441c20a2";
const GEMINI_API_KEY = "AQ.Ab8RN6LjI99nrEOoCmQ8cx_vzjDsj0A49YXeKXY9n9IHMFFrSQ";

const uiDict = {
  en: {
    name: "English",
    code: "en-US",
    welcome:
      "Hello! 👋 Ask me for the weather of any city by typing or speaking.",
    humidity: "Humidity",
    wind: "Wind",
    notFound: "City not found, please try again.",
    error: "Network error occurred.",
    forecastTitle: "📅 5-Day Forecast:",
    speedUnit: "m/s",
    nextDay: "Next Day",
    defaultAlert: "⚠️ Alert: Weather is normal, no severe risks detected.",
    defaultFarmer:
      "🌾 Farmer Advisory: Regular irrigation recommended as per crop needs.",
    defaultTip:
      "💡 AI Tip: Stay hydrated and protect yourself from direct sun.",
  },
  hi: {
    name: "Hindi",
    code: "hi-IN",
    welcome: "नमस्ते! 👋 बोलकर या लिखकर किसी भी शहर का मौसम पूछें।",
    humidity: "नमी",
    wind: "हवा",
    notFound: "शहर नहीं मिला, कृपया सही नाम बोलें।",
    error: "नेटवर्क त्रुटि आई है।",
    forecastTitle: "📅 अगले 5 दिनों का पूर्वानुमान:",
    speedUnit: "मीटर/सेकंड",
    nextDay: "अगला दिन",
    defaultAlert: "⚠️ चेतावनी: मौसम सामान्य है, किसी खतरे की आशंका नहीं है।",
    defaultFarmer:
      "🌾 किसान सलाह: फसलों में आवश्यकतानुसार नियमित रूप से हल्की सिंचाई करें।",
    defaultTip:
      "💡 स्मार्ट टिप्स: पर्याप्त मात्रा में पानी पिएं और धूप से अपना बचाव रखें।",
  },
  bn: {
    name: "Bengali",
    code: "bn-IN",
    welcome: "হ্যালো! 👋 যেকোনো শহরের আবহাওয়া সম্পর্কে বলুন বা লিখুন।",
    humidity: "আর্দ্রতা",
    wind: "বাতাস",
    notFound: "শহর পাওয়া যায়নি, আবার চেষ্টা করুন।",
    error: "নেটওয়ার্ক ত্রুটি ঘটেছে।",
    forecastTitle: "📅 ৫ দিনের পূর্বাভাস:",
    speedUnit: "মিটার/সেকেন্ড",
    nextDay: "পরের দিন",
    defaultAlert: "⚠️ সতর্কতা: আবহাওয়া স্বাভাবিক আছে, কোনো বিপদের আশঙ্কা নেই।",
    defaultFarmer:
      "🌾 কৃষক পরামর্শ: ফসলের প্রয়োজন অনুযায়ী নিয়মিত হালকা সেচ দিন।",
    defaultTip:
      "💡 স্মার্ট টিপস: পর্যাপ্ত পরিমাণে জল পান করুন এবং রোদ থেকে নিজেকে রক্ষা করুন।",
  },
  ta: {
    name: "Tamil",
    code: "ta-IN",
    welcome:
      "வணக்கம்! 👋 எந்தவொரு நகரத்தின் வானிலையையும் தட்டச்சு செய்து அல்லது பேசி கேட்கவும்.",
    humidity: "ஈரப்பதம்",
    wind: "காற்று",
    notFound: "நகரம் கிடைக்கவில்லை, மீண்டும் முயற்சிக்கவும்.",
    error: "பிணைய பிழை ஏற்பட்டது.",
    forecastTitle: "📅 5 நாள் வானிலை முன்னறிவிப்பு:",
    speedUnit: "மீ/செ",
    nextDay: "அடுத்த நாள்",
    defaultAlert: "⚠️ எச்சரிக்கை: வானிலை இயல்பாக உள்ளது, எந்த ஆபத்தும் இல்லை.",
    defaultFarmer:
      "🌾 விவசாய ஆலோசனை: பயிர் தேவைக்கேற்ப வழக்கமான பாசனம் செய்யவும்.",
    defaultTip:
      "💡 ஸ்மார்ட் குறிப்பு: போதுமான தண்ணீர் குடிக்கவும், வெயிலில் இருந்து பாதுகாக்கவும்.",
  },
  te: {
    name: "Telugu",
    code: "te-IN",
    welcome:
      "నమస్తే! 👋 టైప్ చేయడం లేదా మాట్లాడటం ద్వారా ఏ నగరం వాతావరణాన్ని అయినా అడగండి.",
    humidity: "తేమ",
    wind: "గాలి వేగం",
    notFound: "నగరం కనుగొనబడలేదు, మళ్ళీ ప్రయత్నించండి.",
    error: "నెట్‌వర్క్ లోపం సంభవించింది.",
    forecastTitle: "📅 5 రోజుల ముందస్తు అంచనా:",
    speedUnit: "మీ/సె",
    nextDay: "మరుసటి రోజు",
    defaultAlert:
      "⚠️ హెచ్చరిక: వాతావరణం సాధారణంగా ఉంది, ఎటువంటి తీవ్రమైన ప్రమాదం లేదు.",
    defaultFarmer:
      "🌾 రైతు సలహా: పంట అవసరాన్ని బట్టి క్రమం తప్పకుండా నీరు అందించండి.",
    defaultTip:
      "💡 స్మార్ట్ సూచన: తగినంత నీరు తాగండి మరియు ఎండ నుండి మిమ్మల్ని మీరు కాపాడుకోండి.",
  },
  kn: {
    name: "Kannada",
    code: "kn-IN",
    welcome:
      "ನಮಸ್ಕಾರ! 👋 ಟೈಪ್ ಮಾಡುವ ಮೂಲಕ ಅಥವಾ ಮಾತನಾಡುವ ಮೂಲಕ ಯಾವುದೇ ನಗರದ ಹವಾಮಾನವನ್ನು ಕೇಳಿ.",
    humidity: "ಆರ್ದ್ರತೆ",
    wind: "ಗಾಳಿಯ ವೇಗ",
    notFound: "ನಗರ ಕಂಡುಬಂದಿಲ್ಲ, ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
    error: "ನೆಟ್‌ವರ್ಕ್ ದೋಷ ಸಂಭವಿಸಿದೆ.",
    forecastTitle: "📅 5 ದಿನಗಳ ಮುನ್ಸೂಚನೆ:",
    speedUnit: "ಮೀ/ಸೆ",
    nextDay: "ಮುಂದಿನ ದಿನ",
    defaultAlert: "⚠️ ಎಚ್ಚರಿಕೆ: ಹವಾಮಾನ ಸಾಮಾನ್ಯವಾಗಿದೆ, ಯಾವುದೇ ಅಪಾಯವಿಲ್ಲ.",
    defaultFarmer: "🌾 ರೈತರ ಸಲಹೆ: ಬೆಳೆಗಳ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ನೀರಾವರಿ ಮಾಡಿ.",
    defaultTip:
      "💡 ಸ್ಮಾರ್ಟ್ ಸಲಹೆ: ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ ಮತ್ತು ಬಿಸಿಲಿನಿಂದ ರಕ್ಷಿಸಿಕೊಳ್ಳಿ.",
  },
  ml: {
    name: "Malayalam",
    code: "ml-IN",
    welcome:
      "നമസ്കാരം! 👋 ടൈപ്പ് ചെയ്തോ സംസാരിച്ചോ ഏത് നഗരത്തിലെയും കാലാവസ്ഥ അറിയുക.",
    humidity: "ആർദ്രത",
    wind: "കാറ്റ്",
    notFound: "നഗരം കണ്ടെത്തിയില്ല, വീണ്ടും ശ്രമിക്കുക.",
    error: "നെറ്റ്‌വർക്ക് പിശക് സംഭവിച്ചു.",
    forecastTitle: "📅 5 ദിവസത്തെ പ്രവചനം:",
    speedUnit: "മീ/സെ",
    nextDay: "അടുത്ത ദിവസം",
    defaultAlert: "⚠️ മുന്നറിയിപ്പ്: കാലാവസ്ഥ സാധാരണമാണ്, അപകടമില്ല.",
    defaultFarmer: "🌾 കർഷക ഉപദേശം: വിളയുടെ ആവശ്യാനുസരണം നനയ്ക്കുക.",
    defaultTip: "💡 സ്മാർട്ട് ടിപ്പ്: ധാരാളം വെള്ളം കുടിക്കുക.",
  },
  mr: {
    name: "Marathi",
    code: "mr-IN",
    welcome:
      "नमस्कार! 👋 टाईप करून किंवा बोलून कोणत्याही शहराचे हवामान विचारा.",
    humidity: "आर्द्रता",
    wind: "वारा",
    notFound: "शहर सापडले नाही, कृपया पुन्हा प्रयत्न करा.",
    error: "नेटवर्क त्रुटी आली.",
    forecastTitle: "📅 पुढील ५ दिवसांचा अंदाज:",
    speedUnit: "मी/से",
    nextDay: "पुढील दिवस",
    defaultAlert: "⚠️ इशारा: हवामान सामान्य आहे, कोणताही धोका नाही.",
    defaultFarmer: "🌾 शेतकरी सल्ला: पिकांच्या आवश्यकतेनुसार नियमित पाणी द्या.",
    defaultTip: "💡 टीप: भरपूर पाणी प्या आणि उन्हापासून स्वतःचे संरक्षण करा.",
  },
  gu: {
    name: "Gujarati",
    code: "gu-IN",
    welcome: "નમસ્તે! 👋 ટાઇપ કરીને અથવા બોલીને કોઈપણ શહેરના હવામાન વિશે પૂછો.",
    humidity: "ભેજ",
    wind: "પવન",
    notFound: "શહેર મળ્યું નથી, ફરી પ્રયાસ કરો.",
    error: "નેટવર્ક ભૂલ આવી.",
    forecastTitle: "📅 5 દિવસનું પૂર્વાનુમાન:",
    speedUnit: "મી/સે",
    nextDay: "આગામી દિવસ",
    defaultAlert: "⚠️ ચેતવણી: હવામાન સામાન્ય છે, કોઈ ભય નથી.",
    defaultFarmer: "🌾 ખેડૂત સલાહ: પાકની જરૂરિયાત મુજબ પિયત આપો.",
    defaultTip: "💡 સ્માર્ટ ટિપ: પૂરતું પાણી પીઓ અને તડકાથી બચો.",
  },
  pa: {
    name: "Punjabi",
    code: "pa-IN",
    welcome:
      "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ! 👋 ਟਾਈਪ ਕਰਕੇ ਜਾਂ ਬੋਲ ਕੇ ਕਿਸੇ ਵੀ ਸ਼ਹਿਰ ਦੇ ਮੌਸਮ ਬਾਰੇ ਪੁੱਛੋ।",
    humidity: "ਨਮੀ",
    wind: "ਹਵਾ ਦੀ ਗਤੀ",
    notFound: "ਸ਼ਹਿਰ ਨਹੀਂ ਮਿਲਿਆ, ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    error: "ਨੈੱਟਵਰਕ ਗੜਬੜ ਆਈ ਹੈ।",
    forecastTitle: "📅 5 ਦਿਨਾਂ ਦਾ ਪੂਰਵ-ਅਨੁਮਾਨ:",
    speedUnit: "ਮੀ/ਸੈ",
    nextDay: "ਅਗਲਾ ਦਿਨ",
    defaultAlert: "⚠️ ਚੇਤਾਵਨੀ: ਮੌਸਮ ਆਮ ਹੈ, ਕੋਈ ਖਤਰਾ ਨਹੀਂ ਹੈ।",
    defaultFarmer: "🌾 ਕਿਸਾਨ ਸਲਾਹ: ਫਸਲਾਂ ਦੀ ਲੋੜ ਅਨੁਸਾਰ ਸਿੰਚਾਈ ਕਰੋ।",
    defaultTip: "💡 ਸਮਾਰਟ ਟਿੱਪ: ਪੂਰਾ ਪਾਣੀ ਪੀਓ ਅਤੇ ਧੁੱਪ ਤੋਂ ਬਚੋ।",
  },
  or: {
    name: "Odia",
    code: "or-IN",
    welcome: "ନମସ୍କାର! 👋 ଟାଇପ୍ କରି କିମ୍ବା କହି କୌଣସି ବି ସହରର ପାଣିପାଗ ପଚାରନ୍ତୁ।",
    humidity: "ଆର୍ଦ୍ରତା",
    wind: "ପବନ",
    notFound: "ସହର ମିଳିଲା ନାହିଁ, ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।",
    error: "ନେଟୱାର୍କ ତ୍ରୁଟି ଘଟିଛି।",
    forecastTitle: "📅 ୫ ଦିନର ପୂର୍ବାନୁମାନ:",
    speedUnit: "ମି/ସେ",
    nextDay: "ଆଗାମୀ ଦିନ",
    defaultAlert: "⚠️ ସତର୍କତା: ପାଣିପାଗ ସାଧାରଣ ଅଛି, କୌଣସି ବିପଦ ନାହିଁ।",
    defaultFarmer: "🌾 କୃଷକ ପରାମର୍ଶ: ଆବଶ୍ୟକତା ଅନୁଯାୟୀ ଜଳସେଚନ କରନ୍ତୁ।",
    defaultTip: "💡 ଟିପ୍ସ: ପ୍ରଚୁର ପାଣି ପିଅନ୍ତୁ ଏବଂ ଖରାରୁ ରକ୍ଷା ପାଅନ୍ତୁ।",
  },
};

const weatherDescDict = {
  hi: {
    "clear sky": "साफ आसमान",
    "few clouds": "कुछ बादल",
    "scattered clouds": "छिटपुट बादल",
    "broken clouds": "घने बादल",
    "overcast clouds": "आसमान में घने बादल",
    "light rain": "हल्की बारिश",
    "moderate rain": "मध्यम बारिश",
    "heavy intensity rain": "भारी बारिश",
    rain: "बारिश",
    thunderstorm: "तूफान और बिजली कड़कने के साथ भारी बारिश",
    snow: "बर्फबारी",
    mist: "कोहरा / धुंध",
    haze: "हल्की धुंध",
    fog: "घना कोहरा",
  },
  bn: {
    "clear sky": "পরিষ্কার আকাশ",
    "few clouds": "কিছু মেঘ",
    "scattered clouds": "বিক্ষিপ্ত মেঘ",
    "broken clouds": "ভাঙা মেঘ",
    "overcast clouds": "মেঘাচ্ছন্ন আকাশ",
    "light rain": "হালকা বৃষ্টি",
    "moderate rain": "মাঝারি বৃষ্টি",
    "heavy intensity rain": "প্রবল বৃষ্টি",
    rain: "বৃষ্টি",
    thunderstorm: "বজ্রসহ ঝোড়ো বৃষ্টি",
    snow: "তুষারপাত",
    mist: "কুয়াশা",
    haze: "কুয়াশা",
    fog: "ঘন কুয়াশা",
  },
  ta: {
    "clear sky": "தெளிவான வானம்",
    "few clouds": "சில மேகங்கள்",
    "scattered clouds": "சிதறிய மேகங்கள்",
    "broken clouds": "அடர்ந்த மேகங்கள்",
    "overcast clouds": "மேகமூட்டமான வானம்",
    "light rain": "லேசான மழை",
    "moderate rain": "மிதமான மழை",
    "heavy intensity rain": "கனமழை",
    rain: "மழை",
    thunderstorm: "இடியுடன் கூடிய மழை",
    snow: "பனிப்பொழிவு",
    mist: "பனிமூட்டம்",
    haze: "லேசான பனி",
    fog: "அடர்ந்த பனி",
  },
  te: {
    "clear sky": "నిర్మలమైన ఆకాశం",
    "few clouds": "కొన్ని మబ్బులు",
    "scattered clouds": "చెదురుమదురు మబ్బులు",
    "broken clouds": "మబ్బులతో కూడిన ఆకాశం",
    "overcast clouds": "పూర్తిగా మబ్బు పట్టిన ఆకాశం",
    "light rain": "తేలికపాటి వర్షం",
    "moderate rain": "మోస్తరు వర్షం",
    "heavy intensity rain": "భారీ వర్షం",
    rain: "వర్షం",
    thunderstorm: "ఉరుములతో కూడిన వర్షం",
    snow: "మంచు కురవడం",
    mist: "మంచు",
    haze: "తెలికపాటి పొగమంచు",
    fog: "దట్టమైన పొగమంచు",
  },
  kn: {
    "clear sky": "ನಿರ್ಮಲ ಆಕಾಶ",
    "few clouds": "ಕೆಲವು ಮೋಡಗಳು",
    "scattered clouds": "ಚದುರಿದ ಮೋಡಗಳು",
    "broken clouds": "ದಟ್ಟ ಮೋಡಗಳು",
    "overcast clouds": "ಮೋಡ ಮುಸುಕಿದ ಆಕಾಶ",
    "light rain": "ಹಗುರ ಮಳೆ",
    "moderate rain": "ಸಾಧಾರಣ ಮಳೆ",
    "heavy intensity rain": "ಭಾರಿ ಮಳೆ",
    rain: "ಮಳೆ",
    thunderstorm: "ಸಿಡಿಲಿನಿಂದ ಕೂಡಿದ ಮಳೆ",
    snow: "ಹಿಮಪಾತ",
    mist: "ಮಂಜು",
    haze: "ಹಗುರ ಮಂಜು",
    fog: "ದಟ್ಟ ಮಂಜು",
  },
  ml: {
    "clear sky": "തെളിഞ്ഞ ആകാശം",
    "few clouds": "ചില മേഘങ്ങൾ",
    "scattered clouds": "ചിതറിയ മേഘങ്ങൾ",
    "broken clouds": "കനത്ത മേഘങ്ങൾ",
    "overcast clouds": "മേഘാവൃതമായ ആകാശം",
    "light rain": "ലഘുവായ മഴ",
    "moderate rain": "മിതമായ മഴ",
    "heavy intensity rain": "കനത്ത മഴ",
    rain: "മഴ",
    thunderstorm: "ഇടിമിന്നലോട് കൂടിയ മഴ",
    snow: "മഞ്ഞുവീഴ്ച",
    mist: "മഞ്ഞ്",
    haze: "മഞ്ഞ്",
    fog: "കനത്ത മഞ്ഞ്",
  },
  mr: {
    "clear sky": "निरभ्र आकाश",
    "few clouds": "काही ढग",
    "scattered clouds": "विखुरलेले ढग",
    "broken clouds": "दाट ढग",
    "overcast clouds": "ढगाळ आकाश",
    "light rain": "हलका पाऊस",
    "moderate rain": "मध्यम पाऊस",
    "heavy intensity rain": "मुसळधार पाऊस",
    rain: "पाऊस",
    thunderstorm: "विजांसह मुसळधार पाऊस",
    snow: "बर्फवृष्टी",
    mist: "धुके",
    haze: "हळुवार धुके",
    fog: "दाट धुके",
  },
  gu: {
    "clear sky": "સ્વચ્છ આકાશ",
    "few clouds": "થોડા વાદળો",
    "scattered clouds": "છૂટાછવાયા વાદળો",
    "broken clouds": "ઘેરા વાદળો",
    "overcast clouds": "વાદળછાયું આકાશ",
    "light rain": "હળવો વરસાદ",
    "moderate rain": "મધ્યમ વરસાદ",
    "heavy intensity rain": "ભારે વરસાદ",
    rain: "વરસાદ",
    thunderstorm: "વીજળી સાથે ભારે વરસાદ",
    snow: "બરફવર્ષા",
    mist: "ઝાકળ",
    haze: "ઝાકળ",
    fog: "ગાઢ ધુમ્મસ",
  },
  pa: {
    "clear sky": "ਸਾਫ਼ ਆਸਮਾਨ",
    "few clouds": "ਕੁਝ ਬੱਦਲ",
    "scattered clouds": "ਖਿੰਡੇ ਹੋਏ ਬੱਦਲ",
    "broken clouds": "ਘਣੇ ਬੱਦਲ",
    "overcast clouds": "ਬੱਦਲਵਾਈ ਵਾਲਾ ਆਸਮਾਨ",
    "light rain": "ਹਲਕੀ ਬਾਰਿਸ਼",
    "moderate rain": "ਦਰਮਿਆਨੀ ਬਾਰਿਸ਼",
    "heavy intensity rain": "ਭਾਰੀ ਬਾਰਿਸ਼",
    rain: "ਬਾਰਿਸ਼",
    thunderstorm: "ਝੱਖੜ ਅਤੇ ਗਰਜ ਨਾਲ ਬਾਰਿਸ਼",
    snow: "ਬਰਫ਼ਬਾਰੀ",
    mist: "ਧੁੰਦ",
    haze: "ਹਲਕੀ ਧੁੰਦ",
    fog: "ਘਣੀ ਧੁੰਦ",
  },
  or: {
    "clear sky": "ପରିଷ୍କାର ଆକାଶ",
    "few clouds": "କିଛି ମେଘ",
    "scattered clouds": "ବିକ୍ଷିପ୍ତ ମେଘ",
    "broken clouds": "ଘନ ମେଘ",
    "overcast clouds": "ମେଘୁଆ ଆକାଶ",
    "light rain": "ହାଲୁକା ବର୍ଷା",
    "moderate rain": "ମଧ୍ୟମ ବର୍ଷା",
    "heavy intensity rain": "ପ୍ରବଳ ବର୍ଷା",
    rain: "ବର୍ଷା",
    thunderstorm: "ଘଡ଼ଘଡ଼ି ସହ ବର୍ଷା",
    snow: "ବରଫପାତ",
    mist: "କୁହୁଡ଼ି",
    haze: "ହାଲୁକା କୁହୁଡ଼ି",
    fog: "ଘନ କୁହୁଡ଼ି",
  },
};

document.getElementById("langSelect").addEventListener("change", function () {
  let lang = this.value;
  document.getElementById("welcomeMsg").innerText = uiDict[lang]
    ? uiDict[lang].welcome
    : uiDict["en"].welcome;
});

function checkEnter(e) {
  if (e.key === "Enter") sendMessage();
}

function sendPreset(cityName) {
  document.getElementById("userInput").value = cityName;
  sendMessage();
}

const messageAudioStore = {};
let activeIconId = null;

function toggleSpeech(msgId, iconId) {
  let iconEl = document.getElementById(iconId);
  let text = messageAudioStore[msgId];

  if (!text || !window.speechSynthesis) return;

  if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    window.speechSynthesis.cancel();

    if (activeIconId) {
      let oldIcon = document.getElementById(activeIconId);
      if (oldIcon) oldIcon.className = "fa-solid fa-volume-high";
    }

    if (activeIconId === iconId) {
      activeIconId = null;
      return;
    }
  }

  let cleanText = text
    .replace(/<[^>]*>?/gm, "")
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF])/g,
      "",
    )
    .trim();
  if (!cleanText) return;

  let selectedLang = document.getElementById("langSelect").value;
  let langCode = uiDict[selectedLang] ? uiDict[selectedLang].code : "en-US";

  let utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = langCode;

  iconEl.className = "fa-solid fa-volume-xmark";
  activeIconId = iconId;

  utterance.onend = function () {
    iconEl.className = "fa-solid fa-volume-high";
    if (activeIconId === iconId) activeIconId = null;
  };

  utterance.onerror = function () {
    iconEl.className = "fa-solid fa-volume-high";
    if (activeIconId === iconId) activeIconId = null;
  };

  window.speechSynthesis.speak(utterance);
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
  recognition.lang = uiDict[selectedLang] ? uiDict[selectedLang].code : "hi-IN";

  let micIcon = document.getElementById("micIcon");
  micIcon.classList.remove("text-danger");
  micIcon.classList.add("text-success", "fa-beat");

  recognition.onresult = function (event) {
    let spokenText = event.results[0][0].transcript.trim();
    document.getElementById("userInput").value = spokenText;
    micIcon.classList.remove("text-success", "fa-beat");
    micIcon.classList.add("text-danger");
    sendMessage();
  };

  recognition.onerror = recognition.onend = function () {
    micIcon.classList.remove("text-success", "fa-beat");
    micIcon.classList.add("text-danger");
  };
  recognition.start();
}

function detectLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported");
    return;
  }
  let chatWindow = document.getElementById("chatWindow");
  chatWindow.innerHTML += `<div class="message bot-msg">📍 Detecting location...</div>`;
  chatWindow.scrollTop = chatWindow.scrollHeight;

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      fetchWeatherByCoords(lat, lon, "GPS Location");
    },
    () => {
      alert("Unable to retrieve location.");
    },
  );
}

async function getAIGeneratedInsights(weatherData, lang) {
  let langName = uiDict[lang] ? uiDict[lang].name : "English";
  let prompt = `You are WeatherGPT, an advanced AI weather, disaster management & agricultural assistant. 
  Current Weather Data for ${weatherData.name}:
  - Temperature: ${weatherData.temp}°C
  - Condition: ${weatherData.desc}
  - Humidity: ${weatherData.humidity}%
  - Wind Speed: ${weatherData.wind} m/s

  Provide rich, comprehensive, and helpful insights in the following 3 sections using exact localized terms:
  1. ⚠️ **Disaster Alert / चेतावनी**: Strictly analyze weather risks. Give a warning if risk exists, otherwise state safe conditions.
  2. 🌾 **Farmer Advisory / किसान सलाह**: Give practical agricultural guidance or irrigation tips based on current humidity and wind.
  3. 💡 **AI Smart Tips / स्मार्ट टिप्स**: Give 2 practical lifestyle or safety tips suited for this weather.

  CRITICAL REQUIREMENT: 
  - Write the ENTIRE response strictly, 100% in "${langName}" language. Use bold headings and clean HTML line breaks (<br>).`;

  try {
    let responseUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    let res = await fetch(responseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
    let result = await res.json();
    return result.candidates[0].content.parts[0].text;
  } catch (error) {
    let t = uiDict[lang] || uiDict["en"];
    return `<br>${t.defaultAlert}<br>${t.defaultFarmer}<br>${t.defaultTip}`;
  }
}

async function fetchWeatherByCoords(lat, lon, labelName) {
  let chatWindow = document.getElementById("chatWindow");
  let selectedLang = document.getElementById("langSelect").value;
  let t = uiDict[selectedLang] || uiDict["en"];

  try {
    let currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`;

    let [resCurrent, resForecast] = await Promise.all([
      fetch(currentWeatherUrl),
      fetch(forecastUrl),
    ]);

    let data = await resCurrent.json();
    let forecastData = await resForecast.json();

    if (data.cod === 200) {
      let temp = data.main.temp;
      let rawDesc = data.weather[0].description;
      let areaName = data.name || labelName;
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
      else if (rawDesc.includes("thunderstorm")) emoji = "⚡";
      else if (temp > 35) emoji = "🔥";
      else if (temp < 15) emoji = "🥶";
      else if (rawDesc.includes("clear") || rawDesc.includes("sun"))
        emoji = "☀️";

      let aiInsights = await getAIGeneratedInsights(
        { name: areaName, temp, desc: rawDesc, humidity, wind },
        selectedLang,
      );

      let forecastListHtml = "";
      if (forecastData.cod === "200") {
        forecastListHtml = `<br><br><b>${t.forecastTitle}</b><div style="font-size: 0.85rem; margin-top: 4px; display: flex; gap: 8px; overflow-x: auto; max-width: 100%; box-sizing: border-box;">`;
        let dailyMap = {};

        forecastData.list.forEach((item) => {
          let date = item.dt_txt.split(" ")[0];
          if (!dailyMap[date]) {
            dailyMap[date] = { temp: Math.round(item.main.temp), date: date };
          }
        });

        let count = 0;
        let todayDate = new Date().toISOString().split("T")[0];

        for (let d in dailyMap) {
          if (d === todayDate) continue;
          if (count >= 4) break;

          let dayItem = dailyMap[d];
          let dayName =
            count === 0
              ? t.nextDay
              : new Date(d).toLocaleDateString(t.code, { weekday: "long" });

          forecastListHtml += `<div style="background: rgba(255,255,255,0.05); padding: 4px 8px; border-radius: 8px; text-align: center; min-width: 55px; flex-shrink: 0;">${dayName}<br>${dayItem.temp}°C</div>`;
          count++;
        }
        forecastListHtml += `</div>`;
      }

      let reply = `${emoji} <b>${areaName}</b>: <b>${Math.round(temp)}°C</b>, ${desc}.<br>💧 ${t.humidity}: ${humidity}% | 💨 ${t.wind}: ${wind} ${t.speedUnit}`;
      if (aiInsights) {
        reply += `<br><br>${aiInsights}`;
      }
      reply += `${forecastListHtml}`;

      let msgId = "msg-" + Math.random().toString(36).substr(2, 9);
      let uniqueIconId = "icon-" + Math.random().toString(36).substr(2, 9);
      messageAudioStore[msgId] = reply;

      let messageHtml = `
        <div class="message bot-msg" style="word-wrap: break-word;">
          ${reply}
          <div style="margin-top: 8px; display: flex; justify-content: flex-end; align-items: center;">
            <button onclick="toggleSpeech('${msgId}', '${uniqueIconId}')" class="btn btn-sm btn-outline-secondary text-info border-secondary shadow-none d-flex align-items-center justify-content-center" style="width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,0.05);" title="Listen">
              <i id="${uniqueIconId}" class="fa-solid fa-volume-high" style="font-size: 0.8rem;"></i>
            </button>
          </div>
        </div>`;

      chatWindow.innerHTML += messageHtml;
    }
  } catch (err) {
    let errorMsg = t.error;
    chatWindow.innerHTML += `<div class="message bot-msg">${errorMsg}</div>`;
  }
  chatWindow.scrollTop = chatWindow.scrollHeight;
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
    "update",
    "village",
  ];

  let queryLocation = cleanText;
  fillerWords.forEach((word) => {
    let regex = new RegExp(`\\b${word}\\b`, "gi");
    queryLocation = queryLocation.replace(regex, "");
  });
  queryLocation = queryLocation.trim();
  if (!queryLocation) queryLocation = cleanText;

  chatWindow.innerHTML += `
    <div id="loading" class="message bot-msg">
      <div class="typing-dots"><span></span><span></span><span></span></div>
    </div>`;
  chatWindow.scrollTop = chatWindow.scrollHeight;

  let t = uiDict[selectedLang] || uiDict["en"];

  try {
    let geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(queryLocation)}&limit=1&appid=${WEATHER_API_KEY}`;
    let geoRes = await fetch(geoUrl);
    let geoData = await geoRes.json();

    let loader = document.getElementById("loading");
    if (loader) loader.remove();

    if (geoData.length > 0) {
      let lat = geoData[0].lat;
      let lon = geoData[0].lon;
      let resolvedName =
        geoData[0].name + (geoData[0].state ? `, ${geoData[0].state}` : "");
      await fetchWeatherByCoords(lat, lon, resolvedName);
    } else {
      chatWindow.innerHTML += `<div class="message bot-msg">${t.notFound}</div>`;
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  } catch (err) {
    let loader = document.getElementById("loading");
    if (loader) loader.remove();
    chatWindow.innerHTML +=
      '<div class="message bot-msg">' + t.error + "</div>";
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
}

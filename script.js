const API_KEY = "fca3fb5ffd8b7362758bcb97441c20a2";

const uiDict = {
  en: {
    welcome: "Hello! 👋 Ask me for the weather or forecast of any city.",
    humidity: "Humidity",
    wind: "Wind",
    notFound: "City not found, please try again.",
    error: "Network error occurred.",
  },
  hi: {
    welcome: "नमस्ते! 👋 मुझसे किसी भी शहर का मौसम या पूर्वानुमान पूछें।",
    humidity: "नमी",
    wind: "हवा",
    notFound: "शहर नहीं मिला, कृपया पुनः प्रयास करें।",
    error: "नेटवर्क त्रुटि आई है।",
  },
  bn: {
    welcome:
      "হ্যালো! 👋 আমাকে যেকোনো শহরের আবহাওয়া বা পূর্বাভাস সম্পর্কে জিজ্ঞাসা করুন।",
    humidity: "আর্দ্রতা",
    wind: "বাতাস",
    notFound: "শহর পাওয়া যায়নি, আবার চেষ্টা করুন।",
    error: "নেটওয়ার্ক ত্রুটি ঘটেছে।",
  },
  ta: {
    welcome:
      "வணக்கம்! 👋 எந்த நகரத்தின் வானிலை அல்லது முன்னறிவிப்பையும் என்னிடம் கேளுங்கள்.",
    humidity: "ஈரப்பதம்",
    wind: "காற்று",
    notFound: "நகரம் கிடைக்கவில்லை, மீண்டும் முயற்சிக்கவும்.",
    error: "வலைப்பின்னல் பிழை ஏற்பட்டுள்ளது.",
  },
  te: {
    welcome:
      "నమస్కారం! 👋 ఏదైనా నగరం యొక్క వాతావరణం లేదా సూచన గురించి నన్ను అడగండి.",
    humidity: "తేమ",
    wind: "గాలి",
    notFound: "నగరం కనుగొనబడలేదు, దయచేసి మళ్లీ ప్రయత్నించండి.",
    error: "నెట్‌వర్క్ లోపం సంభవించింది.",
  },
  kn: {
    welcome:
      "ನಮಸ್ಕಾರ! 👋 ಯಾವುದೇ ನಗರದ ಹವಾಮಾನ ಅಥವಾ ಮುನ್ಸೂಚನೆಯನ್ನು ನನ್ನನ್ನು ಕೇಳಿ.",
    humidity: "ಆರ್ದ್ರತೆ",
    wind: "ಗಾಳಿ",
    notFound: "ನಗರ ಕಂಡುಬಂದಿಲ್ಲ, ದಯವಿಟ್ಟು আবার ಪ್ರಯತ್ನಿಸಿ.",
    error: "ನೆಟ್‌ವರ್ಕ್ ದೋಷ ಸಂಭವಿಸಿದೆ.",
  },
  ml: {
    welcome:
      "नमस्कार! 👋 ഏതെങ്കിലും നഗരത്തിലെ കാലാവസ്ഥയോ പ്രവചനമോ എന്നോട് ചോദിക്കുക.",
    humidity: "ஈரப்பதம்",
    wind: "காற்று",
    notFound: "നഗരം കണ്ടെത്തിയില്ല, ദയവായി വീണ്ടും ശ്രമിക്കുക.",
    error: "നെറ്റ്‌വർക്ക് പിശക് സംഭവിച്ചു.",
  },
  mr: {
    welcome: "नमस्कार! 👋 मला कोणत्याही शहराचे हवामान किंवा अंदाज विचारू शकता.",
    humidity: "आर्द्रता",
    wind: "वारा",
    notFound: "शहर सापडले नाही, कृपया पुन्हा प्रयत्न करा.",
    error: "नेटवर्क त्रुटी आली आहे.",
  },
  gu: {
    welcome: "नमस्ते! 👋 મને કોઈપણ શહેરનું હવામાન અથવા πρόβλεψη সম্পর্কে પૂછો.",
    humidity: "ભેજ",
    wind: "પવન",
    notFound: "शहर મળ્યું નથી, કૃપા કરીને ફરી પ્રયાસ કરો.",
    error: "નેಟ್‌વર્ક ભૂલ આવી છે.",
  },
  pa: {
    welcome:
      "ਸਤਿ ਸ্ৰੀ ਅਕਾਲ! 👋 ਕਿਸੇ ਵੀ ਸ਼ਹਿਰ ਦਾ ਮੌਸਮ ਜਾਂ ਪૂર્वानुमान ਬਾਰੇ ਮੈਥੋਂ ਪੁੱਛੋ।",
    humidity: "ਨਮੀ",
    wind: "ਹਵਾ",
    notFound: "ਸ਼ਹਿਰ ਨਹੀਂ ਮਿਲਿਆ, ਕਿਰਪਾ ਕਰके ਦੁובਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
    error: "ਨੈੱਟਵਰਕ ਗਲਤੀ ਆਈ ਹੈ।",
  },
  or: {
    welcome:
      "ନମସ୍କାର! 👋 ମୋତେ କୌଣସି ସହରର ପାଣିପାଗ କିମ୍ବା ପୂର୍ବାନୁମାନ ବିଷୟରେ ପଚାରନ୍ତୁ।",
    humidity: "ଆର୍ଦ୍ରତା",
    wind: "ପବନ",
    notFound: "ସହର ମିଳିଲା ନାହିଁ, ଦୟାକରି ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ।",
    error: "ନେଟୱାର୍କ ତ୍ରୁଟି ଘଟିଛି।",
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
  recognition.lang = selectedLang === "hi" ? "hi-IN" : "en-US";

  let micIcon = document.getElementById("micIcon");
  micIcon.classList.remove("text-danger");
  micIcon.classList.add("text-success");

  recognition.onresult = function (event) {
    let spokenText = event.results[0][0].transcript;
    document.getElementById("userInput").value = spokenText;
    micIcon.classList.remove("text-success");
    micIcon.classList.add("text-danger");
    sendMessage();
  };

  recognition.onerror = function () {
    micIcon.classList.remove("text-success");
    micIcon.classList.add("text-danger");
  };

  recognition.onend = function () {
    micIcon.classList.remove("text-success");
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
  let isForecast =
    cleanText.includes("forecast") ||
    cleanText.includes("agle") ||
    cleanText.includes("next");

  let city = text.replace(/forecast|weather in|mausam/gi, "").trim();

  chatWindow.innerHTML += `
    <div id="loading" class="message bot-msg">
      <div class="typing-dots"><span></span><span></span><span></span></div>
    </div>`;
  chatWindow.scrollTop = chatWindow.scrollHeight;

  try {
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      encodeURIComponent(city) +
      "&units=metric&appid=" +
      API_KEY;
    let response = await fetch(url);
    let data = await response.json();

    let loader = document.getElementById("loading");
    if (loader) loader.remove();

    if (data.cod === 200) {
      let temp = data.main.temp;
      let desc = data.weather[0].description;
      let cityName = data.name;
      let humidity = data.main.humidity;
      let wind = data.wind.speed;

      let emoji = "⛅";
      if (desc.includes("rain")) emoji = "🌧️";
      else if (temp > 35) emoji = "🔥";
      else if (temp < 15) emoji = "🥶";
      else if (desc.includes("clear")) emoji = "☀️";

      let t = uiDict[selectedLang];
      let reply = `${emoji} <b>${cityName}</b>: <b>${temp}°C</b>, ${desc}.<br>💧 ${t.humidity}: ${humidity}% | 💨 ${t.wind}: ${wind} m/s.`;

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

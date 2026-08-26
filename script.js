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
};

const weatherDescDict = {
  hi: {
    "clear sky": "साफ आसमान",
    "few clouds": "कुछ बादल",
    "scattered clouds": "छिटपुट बादल",
    "broken clouds": "घने बादल",
    "overcast clouds": "आसमान में घने बादल छाए हुए हैं",
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
    mist: "কুয়াশা",
    haze: "কুয়াশা",
    fog: "ঘন কুয়াশা",
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
    let geoData = await geoRes.json(); // ठीक किया गया: यहाँ से `-` हटा दिया गया है

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

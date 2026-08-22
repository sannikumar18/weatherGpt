const API_KEY = "fca3fb5ffd8b7362758bcb97441c20a2";

function checkEnter(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function sendPreset(cityName) {
  document.getElementById("userInput").value = cityName;
  sendMessage();
}

// Mic button se bol kar input lene ke liye (Speech-to-Text)
function startVoiceInput() {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!window.SpeechRecognition) {
    alert(
      "Voice input is not supported in this browser. Please use Chrome or Edge.",
    );
    return;
  }

  let recognition = new window.SpeechRecognition();
  recognition.lang = "en-US";

  let micIcon = document.getElementById("micIcon");
  micIcon.classList.remove("text-danger");
  micIcon.classList.add("text-success"); // Sunte waqt green ho jayega

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

  let chatWindow = document.getElementById("chatWindow");

  chatWindow.innerHTML += '<div class="message user-msg">' + text + "</div>";
  inputField.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;

  let cleanText = text.toLowerCase();
  let isForecast = false;

  if (
    cleanText.includes("forecast") ||
    cleanText.includes("agle") ||
    cleanText.includes("next")
  ) {
    isForecast = true;
  }

  let city = text;
  city = city
    .replace(/forecast/gi, "")
    .replace(/weather in/gi, "")
    .replace(/mausam/gi, "")
    .replace(/agle dino ka/gi, "")
    .replace(/next days/gi, "")
    .trim();

  chatWindow.innerHTML +=
    '<div id="loading" class="message bot-msg">Analyzing weather data...</div>';
  chatWindow.scrollTop = chatWindow.scrollHeight;

  try {
    if (isForecast) {
      let url =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        encodeURIComponent(city) +
        "&units=metric&appid=" +
        API_KEY;
      let response = await fetch(url);
      let data = await response.json();

      let loader = document.getElementById("loading");
      if (loader) loader.remove();

      if (data.cod === "200") {
        let cityName = data.city.name;
        let reply = "📅 **5-Day Forecast for " + cityName + ":**<br>";

        for (let i = 0; i < data.list.length; i += 8) {
          let item = data.list[i];
          let date = item.dt_txt.split(" ")[0];
          let temp = Math.round(item.main.temp);
          let desc = item.weather[0].description;
          reply += `👉 <b>${date}</b>: ${temp}°C, ${desc}<br>`;
        }

        chatWindow.innerHTML +=
          '<div class="message bot-msg">' + reply + "</div>";
      } else {
        chatWindow.innerHTML +=
          '<div class="message bot-msg">Shehar ka naam theek se nahi mila, dobara try karo.</div>';
      }
    } else {
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
        let advice = "Maahol accha hai, enjoy karo!";

        if (desc.includes("rain") || desc.includes("drizzle")) {
          emoji = "🌧️";
          advice = "Baahar jaate waqt chhata zaroor lena!";
        } else if (temp > 35) {
          emoji = "🔥";
          advice = "Garmi zyada hai, paani peete rehna!";
        } else if (temp < 15) {
          emoji = "🥶";
          advice = "Thand hai, jacket pehen kar nikalna!";
        } else if (desc.includes("clear")) {
          emoji = "☀️";
          advice = "Aasman bilkul saaf hai!";
        }

        let reply =
          emoji +
          " **" +
          cityName +
          "** mein abhi temperature **" +
          temp +
          "°C** hai aur " +
          desc +
          ".<br>💧 Humidity: " +
          humidity +
          "% | 💨 Wind: " +
          wind +
          " m/s.<br>💡 *AI Tip:* " +
          advice;

        chatWindow.innerHTML +=
          '<div class="message bot-msg">' + reply + "</div>";
      } else {
        chatWindow.innerHTML +=
          '<div class="message bot-msg">Shehar ka naam theek se nahi mila, dobara try karo.</div>';
      }
    }
  } catch (err) {
    let loader = document.getElementById("loading");
    if (loader) loader.remove();
    chatWindow.innerHTML +=
      '<div class="message bot-msg">Network error aa gaya, baad mein try karo.</div>';
  }

  chatWindow.scrollTop = chatWindow.scrollHeight;
}

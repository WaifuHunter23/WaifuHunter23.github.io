// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "A little reckless around the edges", time: 10 },
  { text: "Call it young, dumb love, and it's just enough", time: 13 },
  { text: "Keep me guessing", time: 16 },
  { text: "How the story unfolds with you", time: 18 },
  { text: "Cuando camino hacia la oscuridad", time: 21 },
  { text: "Sé que estarás ahí encendiendo las luces", time: 24 },
  { text: "Cuando no haya estrellas", time: 26 },
  { text: "Te seguiré hasta la luna", time: 28 },
  { text: "No, we'll never fall apart", time: 32 },
  { text: "Even million miles apart", time: 35 },
  { text: "We were lightning from the start ", time: 38 },
  { text: "And it keeps me going to know that", time: 40 },
  { text: "Pase lo que pase, estás conmigo", time: 46 },
  { text: "Yo estoy contigo", time: 49 },
  { text: "Y no querría que fuera de otra manera", time: 51 },
  { text: "Sin duda alguna, en el fondo sé que", time: 56 },
  { text: "Saldremos adelante ", time: 61 },
  { text: "Como siempre lo hacemos", time: 63 },
  // { text: "", time:  },
  // { text: "", time:  },
  // { text: "", time:  },
  // { text: "", time:  },
  // { text: "", time:  },
  // { text: "", time:  },
  // { text: "", time:  },
  // { text: "", time:  },
  // { text: "", time:  },
];

// Animar las letras
function updateLyrics() {
  var currentTime = audio.currentTime;
  let currentLineIndex = -1;

  // Find the index of the appropriate lyric
  for (let i = 0; i < lyricsData.length; i++) {
      if (currentTime >= lyricsData[i].time) {
          currentLineIndex = i;
      } else {
          break; // Exit loop once we find the correct lyric
      }
  }

  if (currentLineIndex !== -1) {
      lyrics.style.opacity = 1;
      lyrics.innerHTML = lyricsData[currentLineIndex].text;
  } else {
      lyrics.style.opacity = 0;
      lyrics.innerHTML = "";
  }
}

// Use the timeupdate event for immediate updates
audio.addEventListener('timeupdate', updateLyrics);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  
  setTimeout(function () {
      titulo.style.display = "none"; // Ocultar el título
      // Iniciar la animación de la corona después de ocultar el título
      var corona = document.querySelector(".corona");
      corona.style.animation = "aparecer 2s forwards, mover 2s forwards"; // Inicia la animación de la corona
      corona.style.opacity = 1; // Asegúrate de que sea visible
  }, 3000); // Espera 3 segundos antes de ocultar completamente el título
}

// Llama a la función después de 216 segundos
setTimeout(ocultarTitulo, 173000);
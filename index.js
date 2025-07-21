const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recongnition = new SpeechRecognition();

recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    document.getElementById('output').textContent = transcript;
};
recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
};
recognition.onend = () => {
    console.log('Speech recognition ended');
    recognition.start();
};

function startListening() {
    recognition.start();
    console.log('Ready to receive speech input');
}

navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
        console.log('Microphone permission granted');
    })
    .catch(function(err) {
        console.log('Microphone permission denied:', err);
    });


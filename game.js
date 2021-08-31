let speech;
let recognizer = new webkitSpeechRecognition();

recognizer.interimResults = true;

        recognizer.lang = 'ru-Ru';
        
        recognizer.onresult = function (event){
            let result = event.results[event.resultIndex];

            if(result.isFinal){
                alert('You say: ' + result[0].transcript);
            } else {
                console.log('Intermediate result: ' + result[0].transcript);
            }

        };

        speechVoice = () => {
            recognizer.start();
        }
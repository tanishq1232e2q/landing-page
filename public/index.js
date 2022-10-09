function fun() {
    swal({
        text: 'Enter your name for biometric validation',
        content: "input",
        button: {
            text: "Search!",
            closeModal: false,
        },
    })
        .then(name => {
            if (!name) throw null;

            return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
        })
        .then(results => {
            return results.json();
        })
        .then(json => {
            const movie = json.results[0];

            if (!movie) {
                return swal("No user was found!");
            }

            const name = movie.trackName;
            const imageURL = movie.artworkUrl100;

            swal({
                title: "Top result:",
                text: name,
                icon: imageURL,
            });
        })
        .catch(err => {
            if (err) {
                swal("Oh noes!", "The AJAX request failed!", "error");
            } else {
                swal.stopLoading();
                swal.close();
            }
        });
   
    const words = "Welcome to JMedia Corporation. Our cyber portal facial recognition authentication is required to enter into the dashboard and use its features. Our company is highly advanced in terms of security, authorization, and authentication."

    const utterance1 = new SpeechSynthesisUtterance(words);
    setTimeout(() => {

        speechSynthesis.speak(utterance1);
    }, 2000);
}


function fg() {
    alert("jh")
}

const words = "Welcome to JMedia Corporation. Our cyber portal facial recognition authentication is required to enter into the dashboard and use its features. Our company is highly advanced in terms of security, authorization, and authentication."

const utterance1 = new SpeechSynthesisUtterance(words);
setTimeout(() => {

    speechSynthesis.speak(utterance1);
}, 2000);










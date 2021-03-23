$(document).ready(function () {
        $("#submit-btn").submit(function(e) {
            e.preventDefault();
        });
});

function discover () {
    $('.players-form').toggle();
    $('#separator1').toggle();
}

function random() {
    let firstPlayer = document.getElementById("first-player").value;
    let secondPlayer = document.getElementById("second-player").value;
    let thirdPlayer = document.getElementById("third-player").value;
    let fourthPlayer = document.getElementById("fourth-player").value;
    let players = [firstPlayer, secondPlayer, thirdPlayer, fourthPlayer];

    if (players.includes("")){
        alert("Veuillez entrer 4 noms de joueurs dans le formulaire");
    } else {
        let playersDiv = [
            document.getElementById("name-first-player"),
            document.getElementById("name-second-player"),
            document.getElementById("name-third-player"),
            document.getElementById("name-fourth-player")
        ];

        playersDiv.forEach((playerDiv, index) => {
            let randomName = Math.floor(Math.random() * players.length-1) + 1;
            playerDiv.innerHTML = players[randomName];
            players.splice(randomName, 1);
        });

        $('#player-results').show();
        $('#separator2').show();
        $('.players-form').hide();
        $('#separator1').hide();
    }
}



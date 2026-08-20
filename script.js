function ouvrirCadeau() {

    // Cacher le cadeau
    document.getElementById("cadeau").style.display = "none";

    // Afficher la surprise
    document.getElementById("surprise").style.display = "block";

    // Créer les confettis
    for (let i = 0; i < 100; i++) {

        let confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        confetti.style.backgroundColor =
            "hsl(" + Math.random() * 360 + ", 100%, 50%)";

        document.body.appendChild(confetti);

        // Supprimer le confetti après l'animation
        setTimeout(function() {
            confetti.remove();
        }, 4000);
    }
}

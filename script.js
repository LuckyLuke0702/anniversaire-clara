function ouvrirCadeau() {

    // Cacher le cadeau
    document.getElementById("cadeau").style.display = "none";

    // Afficher la surprise
    document.getElementById("surprise").style.display = "block";


    // =========================
    // CONFETTIS
    // =========================

    for (let i = 0; i < 100; i++) {

        let confetti = document.createElement("div");

        confetti.classList.add("confetti");


        /*
         * Sur téléphone, le body est dézoomé
         * à 0.42.
         *
         * Il faut donc utiliser une largeur
         * virtuelle beaucoup plus grande pour
         * que les confettis couvrent tout
         * l'écran.
         */

        if (window.innerWidth <= 600) {

            confetti.style.left =
                Math.random() * (100 / 0.42) + "vw";

        } else {

            confetti.style.left =
                Math.random() * 100 + "vw";
        }


        // Durée aléatoire de la chute
        confetti.style.animationDuration =
            (Math.random() * 2 + 2) + "s";


        // Couleur aléatoire
        confetti.style.backgroundColor =
            "hsl(" +
            Math.random() * 360 +
            ", 100%, 50%)";


        // Ajouter le confetti à la page
        document.body.appendChild(confetti);


        // Supprimer après l'animation
        setTimeout(function() {

            confetti.remove();

        }, 4000);
    }
}

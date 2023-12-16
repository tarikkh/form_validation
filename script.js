const btn = document.getElementById("submitBtn");
btn.addEventListener('click',valider);
let messages = document.getElementById('messages');

function valider(){
    messages.innerHTML = '';
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('motdepasse').value;

    if (nom === '') {
        afficherErreur('Le champ Nom est obligatoire.');
    }
    if (prenom === '') {
        afficherErreur('Le champ Prénom est obligatoire.');
    }

    if (email === '' || !email.includes('@')) {
        afficherErreur('Veuillez fournir une adresse e-mail valide.');
    }

    if(password.length < 6){
        afficherErreur('Le mot de passe doit contenir au moins 6 caractères.')
    }

 

}

function afficherErreur(message){
    let Erreur = document.createElement('p');
    Erreur.style.color = 'red';
    Erreur.textContent = message;
    messages.appendChild(Erreur);
}

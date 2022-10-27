/*constructeur */

function Book(titre, auteur, annee) {
    this.titre = titre;
    this.auteur = auteur;
    this.annee = annee;
}

//UI constructeur 

function UI() {

}

// Montrer alerte

    UI.prototype.showAlert = function(message, className) {
        //cree Div
        const div= document.createElement('div');
        // ajouter une class
        div.className = `alert ${className}`;

        // ajouter du texte
        div.appendChild(document.createTextNode(message));

        // prendre le parent
        const container = document.querySelector('.container');
        // prendre le forms
        const form = document.querySelector('#book-form')

        // inserer l'alerte
        container.insertBefore(div, form);

        // timeout pour faire partir la div 2s
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2500);
    }
//Event listener pour ajouter livre / erreur/ succes

document.getElementById('book-form').addEventListener('submit', function(e){

//On prend toutes les valeurs 
const titre = document.getElementById('titre').value;
const auteur = document.getElementById('auteur').value;
const annee = document.getElementById('annee').value;

// instaancier un nouveau book

const book = new Book(titre, auteur, annee);

// instacier UI

const ui = new UI();

// validation
if(titre ==='' || auteur ===''|| annee ==='') {
    ui.showAlert('Remplisser les champs', 'error')
} else {
    // Ajout du livre dans le tableau
    ui.addBookToList(book);

    //succes
    ui.showAlert('Livre ajoute', 'success');

    // clear fields
    ui.clearFields();
}
e.preventDefault();
});
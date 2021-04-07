const toggleButton = document.getElementById('toggle-button');
const sideBar = document.getElementById('side-bar');

toggleButton.addEventListener('click', show);

function show(){
    sideBar.classList.toggle('active');/*Ajoute une class='active' à l'élèment sideBar.
                                        toggle=clic 1 fois: 'active', 
                                                reclic: supprime la 'class' créée.*/
    
}

//Enlève la sidebar si on click sur le contenu de la page.
const content = document.querySelector('.content');

content.addEventListener('click', () => {
    sideBar.classList.remove('active');/*Supprime la class='active' quand on click sur le contenu.*/
})

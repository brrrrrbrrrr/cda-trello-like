const button = document.querySelector('#button');
const input = document.querySelector('#section');

const tableContainer = document.querySelector('#table-container');

button.addEventListener('click', function () {
  // Création de la div
  const newDiv = document.createElement('div');
  // Ajout de texte
  newDiv.textContent = input.value;
  // Ajout d'une classe
  newDiv.classList.add('table');
  //Ajout de la div a tableContainer
  tableContainer.appendChild(newDiv);

  //Création d'un bouton
  const newButon = document.createElement('button');
  // Ajout d'une classe
  newButon.classList.add('table-btn');
  // Ajout de texte
  newButon.textContent = 'Ajouter';
  // Ajout du bouton a la div crée
  newDiv.appendChild(newButon);

  //Création d'un input pour une liste
  const newInput = document.createElement('input');
  // Ajout d'une classe
  newInput.classList.add('table-input');
  // Ajout de l'input a la div crée
  newDiv.appendChild(newInput);

  // Ajouter un gestionnaire d'événement délégué sur le conteneur fixe
});

tableContainer.addEventListener('click', function (event) {
  // Vérifier si l'élément cliqué a la classe 'table-btn'
  if (event.target.classList.contains('table-btn')) {
    // Je suis obligé de retourné au parent de l'élément cliqué avec "parentElement"
    const inputElement =
      event.target.parentElement.querySelector('.table-input');
    // Recuperation de la value de l'input
    const inputValue = inputElement.value;
    console.log('Bouton cliqué !');
    console.log(inputValue);

    //Création d'une div pour la liste
    const newDivList = document.createElement('div');
    // Ajout d'une classe
    newDivList.classList.add('table-div_list');

    //Création d'une liste
    const newList = document.createElement('li');
    // Ajout d'une classe
    newList.classList.add('table-list');

    //Ajout a la nouvelle div
    newDivList.appendChild(newList);
    //Ajout du texte sur la liste
    newList.textContent = inputValue;

    //Ajout de la newDivList a la div parente
    event.target.parentElement.appendChild(newDivList);
  }
});

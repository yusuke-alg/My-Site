const fruits = [
  { name: "Gomu Gomu no Mi", description: "Un fruit du démon qui permet à l'utilisateur de se transformer en caoutchouc." },
  { name: "Mera Mera no Mi", description: "Un fruit du démon de type Logia qui permet à l'utilisateur de se transformer en feu." },
  { name: "Hie Hie no Mi", description: "Un fruit du démon de type Logia qui permet à l'utilisateur de créer, contrôler et se transformer en glace." },
  { name: "Yami Yami no Mi", description: "Un fruit du démon de type Logia qui permet à l'utilisateur de manipuler les ténèbres." },
  // Ajoutez d'autres fruits ici
];

// Fonction pour afficher la liste des fruits
function displayFruits(fruitList) {
  const fruitListContainer = document.getElementById("fruitList");
  fruitListContainer.innerHTML = ""; // Vide la liste avant de l'afficher

  fruitList.forEach(fruit => {
      const fruitCard = document.createElement("div");
      fruitCard.classList.add("fruit-card");

      const fruitName = document.createElement("h3");
      fruitName.textContent = fruit.name;

      const fruitDescription = document.createElement("p");
      fruitDescription.textContent = fruit.description;

      fruitCard.appendChild(fruitName);
      fruitCard.appendChild(fruitDescription);

      fruitListContainer.appendChild(fruitCard);
  });
}

// Fonction pour la recherche dynamique des fruits
function searchFruit() {
  const searchQuery = document.getElementById("searchBar").value.toLowerCase();
  const filteredFruits = fruits.filter(fruit => fruit.name.toLowerCase().includes(searchQuery));
  displayFruits(filteredFruits);
}

// Affichage initial des fruits
displayFruits(fruits);

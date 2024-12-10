document.getElementById("recipeForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Captura os dados do formulário
    const name = document.getElementById("recipeName").value;
    const ingredients = document.getElementById("ingredients").value;
    const instructions = document.getElementById("instructions").value;

    // Cria o elemento de receita
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe-card");

    recipeDiv.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Ingredientes:</strong> ${ingredients}</p>
        <p><strong>Modo de Preparo:</strong> ${instructions}</p>
    `;

    // Adiciona a receita ao contêiner
    document.getElementById("addedRecipes").appendChild(recipeDiv);

    // Limpa o formulário
    document.getElementById("recipeForm").reset();
});

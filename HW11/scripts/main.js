// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) => {
        console.log(carts);
        let div = document.createElement('div');

        document.body.appendChild(div);

        carts.forEach( cart => {
            let divOfCard = document.createElement('p');
            divOfCard.innerText = `id: ${cart.id}, total: ${cart.total}, discountedTotal: ${cart.discountedTotal}, userId: ${cart.userId}, products: ${JSON.stringify(cart.products)}`;
            div.appendChild(divOfCard);
        }
    )
    })
//
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(({ recipes }) => {
        console.log(recipes);

        let block = document.createElement('div');
        document.body.appendChild(block);

        for (const recipe of recipes) {
            let recipeDiv = document.createElement('div');
            recipeDiv.innerHTML = `<h2> id: ${recipe.id},${recipe.name}</h2>`;
            block.appendChild(recipeDiv);

            let ingredientsList = document.createElement('ul');
            ingredientsList.innerText = 'Ingredients:';
            recipeDiv.appendChild(ingredientsList);

            recipe.ingredients.forEach(ingredient => {
                let ingredientItem = document.createElement('li');
                ingredientItem.innerText = ingredient;
                ingredientsList.appendChild(ingredientItem);
            });

            let instructionsList = document.createElement('ol');
            instructionsList.innerText = 'Instructions:';
            recipeDiv.appendChild(instructionsList);

            recipe.instructions.forEach(instruction => {
                let instructionItem = document.createElement('li');
                instructionItem.innerText = instruction;
                instructionsList.appendChild(instructionItem);
            });

            let otherInfo = document.createElement('p');
            otherInfo.innerText = `Prep Time Minutes: ${recipe.prepTimeMinutes}, cookTimeMinutes: ${recipe.cookTimeMinutes},
            servings: ${recipe.servings}, rating: ${recipe.rating}, reviewCount:${recipe.reviewCount}`;

            recipeDiv.appendChild(otherInfo);

        }
    })
    ;
//
//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
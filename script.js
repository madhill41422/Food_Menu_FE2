document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
        // ... Your recipe data here ...
        {
            "name": "Veggie Delight",
            "imageSrc": "https://source.unsplash.com/random?veggies",
            "time": "30 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Chicken Grill",
            "imageSrc": "https://source.unsplash.com/random?chicken",
            "time": "45 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Cheese Pizza",
            "imageSrc": "https://source.unsplash.com/random?pizza",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.1
        },
        {
            "name": "Steak",
            "imageSrc": "https://source.unsplash.com/random?steak",
            "time": "60 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.7
        },
        {
            "name": "Grilled Salmon",
            "imageSrc": "https://source.unsplash.com/random?salmon",
            "time": "50 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Tomato Pasta",
            "imageSrc": "https://source.unsplash.com/random?pasta",
            "time": "35 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.0
        },
        {
            "name": "Vegan Salad",
            "imageSrc": "https://source.unsplash.com/random?salad",
            "time": "20 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.9
        },
        {
            "name": "Fried Chicken",
            "imageSrc": "https://source.unsplash.com/random?friedChicken",
            "time": "55 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Mushroom Risotto",
            "imageSrc": "https://source.unsplash.com/random?risotto",
            "time": "45 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.5
        },
        {
            "name": "Burger",
            "imageSrc": "https://source.unsplash.com/random?burger",
            "time": "30 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.2
        },
        {
            "name": "Paneer Tikka",
            "imageSrc": "https://source.unsplash.com/random?paneerTikka",
            "time": "40 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.4
        },
        {
            "name": "BBQ Ribs",
            "imageSrc": "https://source.unsplash.com/random?ribs",
            "time": "70 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.6
        },
        {
            "name": "Caesar Salad",
            "imageSrc": "https://source.unsplash.com/random?caesarSalad",
            "time": "25 min",
            "type": "veg",
            "isLiked": false,
            "rating": 3.8
        },
        {
            "name": "Fish Tacos",
            "imageSrc": "https://source.unsplash.com/random?fishTacos",
            "time": "35 min",
            "type": "non-veg",
            "isLiked": false,
            "rating": 4.3
        },
        {
            "name": "Chocolate Cake",
            "imageSrc": "https://source.unsplash.com/random?chocolateCake",
            "time": "90 min",
            "type": "veg",
            "isLiked": false,
            "rating": 4.9
        }
    ];

    const recipeContainer = document.getElementById("recipeContainer");
    const openDrawerButton = document.getElementById("openDrawerButton");
    const closeDrawerButton = document.getElementById("closeDrawerButton");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const nav = document.querySelector("nav");

    // Function to open the mobile drawer
    function openDrawer() {
        mobileDrawer.style.left = "0";
    }

    // Function to close the mobile drawer
    function closeDrawer() {
        mobileDrawer.style.left = "-80%"; // Hide the drawer
    }

    // Event listener for opening the drawer
    openDrawerButton.addEventListener("click", openDrawer);

    // Event listener for closing the drawer
    closeDrawerButton.addEventListener("click", closeDrawer);

    // Function to create a recipe card with specified elements
    function createRecipeCard(recipe) {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        // Create HTML structure for the recipe card
        recipeCard.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-details">
                <p class="recipe-type">${recipe.type === 'veg' ? 'Veg' : 'Non-Veg'}</p>
                <div class="recipe-name-rating">
                    <h1 class="recipe-name">${recipe.name}</h1>
                    <div class="recipe-rating">
                        <p><span class="star-icon">★</span> ${recipe.rating}</p>
                    </div>
                </div>
                <div class="recipe-time-action">
                <p class="recipe-time">${recipe.time}</p>
                <div class="recipe-actions">
                <i class="material-icons like-button">${recipe.isLiked ? "favorite" : "favorite_border"}</i>
                    <i class="material-icons chat">chat</i>
                </div>
                </div>
            </div>
        `;

        // Add an event listener to the like button to toggle isLiked property
        const likeButton = recipeCard.querySelector(".like-button");
        likeButton.addEventListener("click", () => {
            recipe.isLiked = !recipe.isLiked;
            likeButton.textContent = recipe.isLiked ? "favorite" : "favorite_border";
        });

        recipeContainer.appendChild(recipeCard);
    }

    // Function to display recipes
    function displayRecipes(recipesToDisplay) {
        recipeContainer.innerHTML = "";
        recipesToDisplay.forEach((recipe) => {
            createRecipeCard(recipe);
        });
    }

    // Initial display of all recipes
    displayRecipes(recipes);

    // Search functionality
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter((recipe) =>
            recipe.name.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

    // Filter by recipe type functionality
    const allRecipes = document.getElementById("AllRecipes");
    const vegRecipes = document.getElementById("VegRecipes");
    const nonVegRecipes = document.getElementById("NonVegRecipes");

    allRecipes.addEventListener("click", () => {
        displayRecipes(recipes);
    });

    vegRecipes.addEventListener("click", () => {
        const vegRecipes = recipes.filter((recipe) => recipe.type === "veg");
        displayRecipes(vegRecipes);
    });

    nonVegRecipes.addEventListener("click", () => {
        const nonVegRecipes = recipes.filter((recipe) => recipe.type === "non-veg");
        displayRecipes(nonVegRecipes);
    });

    // Rating filter functionality
    const ratingFilterAbove = document.getElementById("ratingFilterAbove");
    const ratingFilterBelow = document.getElementById("ratingFilterBelow");

    function filterByRating(rating, isAbove) {
        const filteredRecipes = isAbove
            ? recipes.filter((recipe) => recipe.rating >= rating)
            : recipes.filter((recipe) => recipe.rating < rating);
        displayRecipes(filteredRecipes);
    }

    ratingFilterAbove.addEventListener("click", () => {
        filterByRating(4.0, true);
    });

    ratingFilterBelow.addEventListener("click", () => {
        filterByRating(4.0, false);
    });

    // Mobile drawer functionality
    openDrawerButton.addEventListener("click", () => {
        mobileDrawer.style.display = "block";
    });

    closeDrawerButton.addEventListener("click", () => {
        mobileDrawer.style.display = "none";
    });

    // Toggle menu icon for screens with width 786px or less
    function toggleMenuIcon() {
        if (window.innerWidth <= 786) {
            nav.style.display = "none"; // Hide the navigation bar
            openDrawerButton.style.display = "block"; // Show the menu icon
        } else {
            nav.style.display = "flex"; // Display the navigation bar
            openDrawerButton.style.display = "none"; // Hide the menu icon
            mobileDrawer.style.display = "none"; // Hide the mobile drawer
        }
    }

    // Initial check and event listener for screen width
    toggleMenuIcon();
    window.addEventListener("resize", toggleMenuIcon);
});
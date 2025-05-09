//alert("Hello from the page load")
//https://www.themealdb.com/api/json/v1/1/random.php

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.meals[0]);
    const meals = data.meals[0];
    getMeals(meals);
  });

function getMeals(meals) {
  let myHTML = `<h1>Your Today's Meal</h1> 
  
  <div id="meal" class="row meal">
  <div class="row">
    <div class="columns five">
        <h2>${meals.strMeal}</h2>
        <img src="${meals.strMealThumb}" alt="Meal Image">
 <p><strong>Category:</strong> ${meals.strCategory}</p>
        <p><strong>Area:</strong> ${meals.strArea}</p>
        <p><strong>Tags:</strong>${meals.strTags} </p>
        <h5>Ingredients:</h5>
<ul>
        
        <li>${meals.strIngredient1} --- ${meals.strMeasure1}</li>
        <li>${meals.strIngredient2} --- ${meals.strMeasure2}</li>
        <li>${meals.strIngredient3} --- ${meals.strMeasure3}</li>
        <li>${meals.strIngredient4} --- ${meals.strMeasure4}</li>
        <li>${meals.strIngredient5} --- ${meals.strMeasure5}</li>
        <li>${meals.strIngredient6} --- ${meals.strMeasure6}</li>
        <li>${meals.strIngredient7} --- ${meals.strMeasure7}</li>
        <li>${meals.strIngredient8} --- ${meals.strMeasure8}</li>
        <li>${meals.strIngredient9} --- ${meals.strMeasure9}</li>
        <li>${meals.strIngredient10} --- ${meals.strMeasure10}</li>
        <li>${meals.strIngredient11} --- ${meals.strMeasure11}</li>
        <li>${meals.strIngredient12} --- ${meals.strMeasure12}</li>
        <li>${meals.strIngredient13} --- ${meals.strMeasure13}</li>
        <li>${meals.strIngredient14} --- ${meals.strMeasure14}</li>
        <li>${meals.strIngredient15} --- ${meals.strMeasure15}</li>
        <li>${meals.strIngredient16} --- ${meals.strMeasure16}</li>
        <li>${meals.strIngredient17} --- ${meals.strMeasure17}</li>
        <li>${meals.strIngredient18} --- ${meals.strMeasure18}</li>
        <li>${meals.strIngredient19} --- ${meals.strMeasure19}</li>
        <li>${meals.strIngredient20} --- ${meals.strMeasure20}</li>

        
            
        </ul>

         <div class="columns seven">
        <h4>${meals.strMeal}</h4>
        <p> ${meals.strInstructions
        }</p>
        </div>

         </div>

         <div class="row">
    <h5>Video Recipe</h5>
    <div class="videoWrapper">
        <iframe width="380" height="250" src="https://www.youtube.com/embed/${meals.strYoutube.slice(-11)}">
        
        </iframe>
    </div>

         </div>


 `;

 //console.log(meals.strYoutube);
 //console.log(meals.strYoutube.slice(-11));
  document.getElementById("meal").innerHTML = myHTML;
}

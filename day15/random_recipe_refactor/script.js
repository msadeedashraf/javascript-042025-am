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


let myListofIngrediens = "";

//console.log(meals[`strIngredient1`] +'---'+ meals[`strMeasure1`] );
//console.log(meals[`strIngredient2`] +'---'+ meals[`strMeasure2`]);
//console.log(meals[`strIngredient3`] +'---'+ meals[`strMeasure3`]);


for ( a= 1 ;a <= 20; a++ )
{
  if (meals[`strIngredient${a}`] )
  {
myListofIngrediens += "<li>" + meals[`strIngredient${a}`] + "---" + meals[`strMeasure${a}`] +"</li>"
  }
  else
  {
    break;
  }
}
  
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
        
       ${myListofIngrediens}

        
            
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

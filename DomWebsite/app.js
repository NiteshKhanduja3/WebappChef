
var FindItem = document.querySelector('.findform')

FindItem.addEventListener('submit',function(event){
event.preventDefault();
var GetVAlue = document.querySelector('.find').value;
//fetching the VAlues
baseUrl =' https://forkify-api.herokuapp.com/api/search';
baseUrl += `?q=${GetVAlue}`

fetch(baseUrl)
.then(function(response){
    return response.json();
})
.then(function(getvalue1){
    var lodingText = document.querySelector('.lod');
    lodingText.style.display='block'
    console.log(getvalue1);
   for(var i=0;i<=10;i++){
    var showpublisher = getvalue1.recipes[i]['publisher'];
    var showputitle =getvalue1.recipes[i]['title'];
    var imageurl =getvalue1.recipes[i]['image_url'];
    var recipeId = getvalue1.recipes[i]['recipe_id'];
    var SocialRank = getvalue1.recipes[i]['social_rank'];
    var PublisherUrl = getvalue1.recipes[i]['publisher_url'];
    var sourceUrl = getvalue1.recipes[i]['source_url'];


var showData = document.createElement('div');
showData.setAttribute('id','dis')
    showData.setAttribute('class','col-sm-3')
    showData.style.marginTop='100px'
    showData.style.border ='1px solid black'
    showData.style.textAlign='center'
    showData.style.backgroundColor= 'white';
    
    showData.style.bor ='2px'
    
    showData.style.borderRadius= '8px'
    showData.style.display ='inline-block'
    showData.style.marginLeft= '80px';
    
    
  //Displaying Data
    
   showData.innerHTML  =` <p style="margin-top:10px;">Recipe Id:${recipeId} <br>
         Is It your Favourite Dish? <input type="checkbox" name="vehicle1" > <br></p>
    <img src=${imageurl} style="height:200px ; width:100%;"><hr><br>
   <b id="font1"><a href=${PublisherUrl}>Publisher Name: </a></b>${showpublisher}<hr> <br>
   <p id="font1"><b>Rank: ${SocialRank}</b></p>
   <b>TITLE:</b>${showputitle}<br><p id="font1" style="margin-bottom:10px;">
   <button type="button" onclick="morein(${recipeId})"
    style="border-radius:10px ;" class="btn btn-info">Ingredients</button>
    shown at last of this Page
    </p>
   
 
   `

   document.body.appendChild(showData);
 
   }
   lodingText.style.display='none'  

})


.catch(function (err) {console.log(err);
    
})
})


// Showing Ingridents In Bottom
function morein(recipeId){
 
    
    base1 = ('https://forkify-api.herokuapp.com/api/get')
    base1 += `?rId=${recipeId}`
    fetch(base1)
    .then (function (response){
        return response.json();
    })
    .then(function(showDta){

        console.log(showDta);
        var LIStIngri =showDta.recipe.ingredients;
       
    
             var INGRID = document.createElement('div');
    INGRID.setAttribute('class','col-sm-3')
    INGRID.style.marginTop='100px'
    INGRID.style.border ='1px solid black'
    INGRID.style.textAlign='center'
    INGRID.style.backgroundColor= 'white';
    
    INGRID.style.bor ='2px'
    
    INGRID.style.borderRadius= '8px'
    INGRID.style.display ='inline-block'
    INGRID.style.marginLeft= '80px';
    
    
   // it will show the Ingredient at LAst
   
    
   INGRID.innerHTML  =`
        <p><ul><li> Ingredients Of Dish are<hr><br>${LIStIngri}</li></ul></p>
   `

   document.body.appendChild(INGRID);
        
        
    })
    .catch(function(err){
        console.log(err);
    })

}

//Question (1)
const example = (a,b) => {
    return a - b;
}

//Question (2)
const apiUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(apiUrl)
.then(function(response){
    return response.json();
})
.then(function(json){
    for(let i = 0; i < json.results.length; i++){
        console.log(json.results[i].name);
    }
})
.catch(function(error){
    window.location.href = "error.html";
});


//Question (3)
const replaceWord = "These cats are outrageous.";
console.log(replaceWord.replace("cats", "giraffes"));

//Question (4)
function checkUrlParam(){ //Added in function to prevent redirect during testing
    const urlSearch = document.location.search;
    const urlData = new URLSearchParams(urlSearch);
    if (urlData.has("userId")){
        let id = urlData.get("userId");

        if(id < 10){
            window.location.href = "first.html";
        }
        else{
            window.location.href = "secound.html";
        }
    }
    else{
        window.location.href = "third.html";
    }
}

//Question (5)
const parentElement = document.querySelector(".container");
const childElement = document.querySelector("button");
parentElement.removeChild(childElement);

//Question (6)
const parentElement2 = document.querySelector(".animals li");
const newListItem = document.createElement("li");
newListItem.innerHTML = "Parrots";
newListItem.className = "parrots";
parentElement2.after(newListItem);

//Question (7)
const apiUrl2 = "https://api.rawg.io/api/games/3801";

fetch(apiUrl2)
.then(function(response){
    return response.json();
})
.then(function(json){
    document.querySelector(".rating").innerHTML = json.rating;
})
.catch(function(error){
    console.log(error);
});
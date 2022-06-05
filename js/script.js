var pets = [
    {
        type:"cat",
        age: 5.5,
    },
    {
        type: "dog",
        age: 3.8,
    },
    {
        type: "parrot",
        age: 4.0,
    }
];  

    for (var i = 0; i < pets.length; i++) {

        if (pets[i].age >= 4.0)
    
        console.log(pets[i])
}


//question 2

function creatingOneFunction (argument) {
    }








// quesiton 3

var subheading = document.querySelector("h2")
var button = document.querySelector("button")

//console.dir(subheading);

button.onclick = function () {
    subheading.innerHTML = "updated subheading";
    var colorToBlueInThesubheadingH2 = subheading;
    colorToBlueInThesubheadingH2.style.color = "blue"
}
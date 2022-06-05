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
        var pet = pets[i];
        console.log(pet)
}


//question 2

function creatingOneFunction (argumentOfTheFunction) {

    var typeofArguemnt= typeof argumentOfTheFunction;


}

console.log("typeofArguemnt");











// quesiton 3

var subheading = document.querySelector("h2")
var button = document.querySelector("button")

//console.dir(subheading);

button.onclick = function () {
    subheading.innerHTML = "updated subheading";
    var colorToBlueInThesubheadingH2 = subheading;
    colorToBlueInThesubheadingH2.style.color = "blue"
}
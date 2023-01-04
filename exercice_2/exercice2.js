// Récupérez le formulaire et consolez-le.

let form = document.forms[0]
console.log(form);

// Récupérez les entrées par leur identifiant et console.log les.

let elem1 = document.getElementById("fname")
console.log(elem1)

let elem2 = document.getElementById("lname")
console.log(elem2)

let elem3 = document.getElementById("submit")
console.log(elem3)

// Récupérez les entrées par leur name attribut et console.log les.

let elemByInSide1 = form.elements.fname
let elemByInSide2 = form.elements.lname

console.log(elemByInSide1,elemByInSide2);

function returnResult () //rapport au clic de égal
{
    
}


let inputs = document.getElementsByTagName("button");
let val = document.getElementsByTagName("p");
let screen = document.getElementById("screen")
let result = screen.textContent;

function displayScreen ()    //Affichage de la valeur dans l'écran
{
    console.log(this.textContent);
    
    if (this.textContent != "=", "CE", "←"){
    screen.textContent = screen.textContent + this.textContent;
}

    if(this.textContent === "=")
    {
        eval(result);
    }
}
    


for (let i = 0; i<= inputs.length; i++) //Parcours le tableau des boutons
{
    inputs[i].addEventListener("click", displayScreen);

}


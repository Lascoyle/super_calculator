let inputs = document.getElementsByTagName("button");
let val = document.getElementsByTagName("p");
let screen = document.getElementById("screen");
let result = screen.textContent + this.textContent;

function displayScreen ()    //Affichage des valeurs dans l'écran
{
    console.log(this.textContent);
    
    if (this.textContent != "=", "CE", "←")
    {
        screen.textContent = screen.textContent + this.textContent;
    }

    if (this.textContent === "=") //tofix
    {
        return eval(result);
    }

    if (this.textContent === "CE") //Effacement des valeurs dans l'écran
    {
        return screen.textContent = null;
    }

    if (this.textContent === "←") //tofix
    {
        return screen.textContent = screen.textContent;
    }
}
    


for (let i = 0; i<= inputs.length; i++) //Parcours le tableau des boutons
{
    inputs[i].addEventListener("click", displayScreen);

}


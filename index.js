let home = document.getElementById("home")
let away = document.getElementById("away");
let counterh = 0;
let countera = 0;

function incrementHome(x)
{
    count = x;
    counterh +=x;
    home.innerHTML = counterh;
    console.log(count);
}

function incrementAway(x)
{
    count = x;
    countera +=x;
    away.innerHTML = countera;
    console.log(count);
}
function reset(){
    count=0;
    counterh = 0;
    countera = 0;
    home.innerHTML = counterh;
    away.innerHTML = countera;
}
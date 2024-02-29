const rollDice = (e) =>
{
    let random = Math.floor(Math.random()*7);

    document.getElementById("num").innerHTML=`${random}`;
}

document.getElementById("roll").addEventListener("click",rollDice)


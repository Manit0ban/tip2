// Evemt Listener

document.getElementById("fif").addEventListener("click", fif);
document.getElementById("twent").addEventListener("click", twent);
document.getElementById("twentfif").addEventListener("click", twentfif);
document.getElementById("thirt").addEventListener("click", thirt);
document.getElementById("custom").addEventListener("click", custom);
document.getElementById("clear").addEventListener("click", clear);

// Opening Message

alert("Use this tool to calculate tips. If a zero pops up under the buttons, hit clear (last button) to dismiss it.")

function fif () {

    // IN
    
    let value = +document.getElementById("a").value;
    let people = +document.getElementById("b").value;

    // PRO
    
    let value2 = 0.15 * value;
    let final = value + value2;
    let final2 = value2 / people;
    let final3 = final / people;

    // OUT


    
    finalMes = `Final Bill: ${final.toFixed(2)}`;
    final2Mes = `Tip Split: ${final2.toFixed(2)}`;
    final3Mes = `Final Bill Split: ${final3.toFixed(2)}`;

    document.getElementById("span").innerHTML = finalMes;
    document.getElementById("span2").innerHTML = final2Mes;
    document.getElementById("span3").innerHTML = final3Mes;

    console.log(final, final2);
}

function twent () {

    // IN
    
    let value = +document.getElementById("a").value;
    let people = +document.getElementById("b").value;

    // PRO
    
    let value2 = 0.20 * value;
    let final = value + value2;
    let final2 = value2 / people;
    let final3 = final / people;

    // OUT
    

    
    finalMes = `Final Bill: ${final.toFixed(2)}`;
    final2Mes = `Tip Split: ${final2.toFixed(2)}`;
    final3Mes = `Final Bill Split: ${final3.toFixed(2)}`;

    document.getElementById("span").innerHTML = finalMes;
    document.getElementById("span2").innerHTML = final2Mes;
    document.getElementById("span3").innerHTML = final3Mes;


    console.log(final, final2);
}

function twentfif () {

    // IN
    
    let value = +document.getElementById("a").value;
    let people = +document.getElementById("b").value;

    // OUT
    
    let value2 = 0.25 * value;
    let final = value + value2;
    let final2 = value2 / people;
    let final3 = final / people;

    // OUT

    
    finalMes = `Final Bill: ${final.toFixed(2)}`;
    final2Mes = `Tip Split: ${final2.toFixed(2)}`;
    final3Mes = `Final Bill Split: ${final3.toFixed(2)}`;

    document.getElementById("span").innerHTML = finalMes;
    document.getElementById("span2").innerHTML = final2Mes;
    document.getElementById("span3").innerHTML = final3Mes;


    console.log(final, final2);
}

function thirt () {

    // IN
    
    let value = +document.getElementById("a").value;
    let people = +document.getElementById("b").value;

    // PRO
    
    let value2 = 0.30 * value;
    let final = value + value2;
    let final2 = value2 / people;
    let final3 = final / people;

    // OUT
    
  

    
    finalMes = `Final Bill: ${final.toFixed(2)}`;
    final2Mes = `Tip Split: ${final2.toFixed(2)}`;
    final3Mes = `Final Bill Split: ${final3.toFixed(2)}`;

    document.getElementById("span").innerHTML = finalMes;
    document.getElementById("span2").innerHTML = final2Mes;
    document.getElementById("span3").innerHTML = final3Mes;


    console.log(final, final2);
}

function custom () {

    // IN
    
    let value = +document.getElementById("a").value;
    let people = +document.getElementById("b").value;
    let cusT = +prompt("Enter a custom tip percentage")

    // PRO
    
    cusT = cusT / 100;
    let value2 = cusT * value;
    let final = value + value2;
    let final2 = value2 / people;
    let final3 = final / people;

    // OUT
    
    finalMes = `Final Bill: ${final.toFixed(2)}`;
    final2Mes = `Tip Split: ${final2.toFixed(2)}`;
    final3Mes = `Final Bill Split: ${final3.toFixed(2)}`;

    document.getElementById("span").innerHTML = finalMes;
    document.getElementById("span2").innerHTML = final2Mes;
    document.getElementById("span3").innerHTML = final3Mes;

}


function clear () {

    // IN
    
    let value = +document.getElementById("a").value;

    // PRO
    
    value = null;

    // OUT
    
    document.getElementById("span").innerHTML = value;
    document.getElementById("span2").innerHTML = value;
    document.getElementById("span3").innerHTML = value;
    document.getElementById("a").value = value;
    document.getElementById("b").value = value;
    
    reset();

}

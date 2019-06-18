$("circle").addClass("rempli");
$("rect").addClass("rempli");

let remplir = document.getElementById("remplir");
let vider = document.getElementById("vider");

remplir.addEventListener("click", function () {
    $("circle").addClass("rempli");
    $("rect").addClass("rempli");
    $("circle").removeClass("vide");
    $("rect").removeClass("vide");

})

vider.addEventListener("click", function () {
    $("circle").removeClass("rempli");
    $("rect").removeClass("rempli");
    $("circle").addClass("vide");
    $("rect").addClass("vide");

})
let circles = document.querySelectorAll("circle")
let rect = document.querySelectorAll("rect")
let ligne1 = document.getElementsByClassName("ligne1")
let ligne2 = document.getElementsByClassName("ligne2")
let ligne3 = document.getElementsByClassName("ligne3")
let ligne4 = document.getElementsByClassName("ligne4")
let ligne5 = document.getElementsByClassName("ligne5")
let lignes = [ligne1, ligne2, ligne3, ligne4, ligne5]
console.log(circles)
for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function () {
        if ($(circles[i]).hasClass("rempli")) {
            $(circles[i]).addClass("vide")
            $(circles[i]).removeClass("rempli")
        }
        else {
            $(circles[i]).addClass("rempli")
            $(circles[i]).removeClass("vide")
        }
    })
}

for (let i = 0; i < rect.length; i++) {
    rect[i].addEventListener("click", function () {

        for (let j = 0; j < lignes.length; j++) {
            if ($(lignes[i][j]).hasClass("rempli")) {
                $(lignes[i][j]).addClass("vide")
                $(lignes[i][j]).removeClass("rempli")
            }
            else {
                $(lignes[i][j]).addClass("rempli")
                $(lignes[i][j]).removeClass("vide")
            }
        }
        // condition speciale pour le losange
        if (i === 2) {
            for (let k = 0; k < 5; k++) {
                if (i !== 2 || k!==2) {
                    if ($(lignes[k][i]).hasClass("rempli")) {
                        $(lignes[k][i]).addClass("vide")
                        $(lignes[k][i]).removeClass("rempli")
                    }
                    else {
                        $(lignes[k][i]).addClass("rempli")
                        $(lignes[k][i]).removeClass("vide")
                    }
                }
            }
        }
    }
    )
}




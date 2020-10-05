

/*Ambas funciones suman valoraciones (positivas o negativas) 
a las recetas publicadas según el botón presionado.*/



function meGusta() {
    let idReceta = Number($(this).attr("data-positiva"));
    let idClass = $(this).attr("class")
    let mismoAutor = recetaPropia(idReceta)

    if (!mismoAutor) {
        for (let i = 0; i < recetas.length; i++) {
            if (recetas[i].id === idReceta) {
                recetas[i].meGusta++;

                break;
            }
        }
        if (idClass === "meGusta") {

            listarResultadoBusqueda(busquedaActual)


        } else if (idClass === "meGustaBienvenida") {
            mostrarTodasRecetas();


        } else if (idClass === "meGustaFiltro") {
            mostrarRecetasFiltradas(autorFiltrado);
        }

    } else {
        alert("No puedes valorar tu propia receta")

        switch (idClass) {

            case "meGusta": istarResultadoBusqueda(busquedaActual)
                break;
            case "meGustaBienvenida": mostrarTodasRecetas()
                break;
            case "meGustaFiltro": mostrarRecetasFiltradas(autorFiltrado)
                break;

        }







    }
}


function noMeGusta() {
    let idReceta = Number($(this).attr("data-negativa"));
    let idClass = $(this).attr("class")
    let mismoAutor = recetaPropia(idReceta)


    if (!mismoAutor) {
        for (let i = 0; i < recetas.length; i++) {
            if (recetas[i].id === idReceta) {
                recetas[i].noMeGusta++;

                break;
            }
        }

        if (idClass === "noMeGusta") {


            listarResultadoBusqueda(busquedaActual)

        } else if (idClass === "noMeGustaBienvenida") {
            mostrarTodasRecetas();


        } else if (idClass === "noMeGustaFiltro") {
            mostrarRecetasFiltradas(autorFiltrado);

        }

    } else {
        alert("No puedes valorar tu propia receta")

        switch (idClass) {

            case "noMeGusta": istarResultadoBusqueda(busquedaActual)
                break;
            case "noMeGustaBienvenida": mostrarTodasRecetas()
                break;
            case "noMeGustaFiltro": mostrarRecetasFiltradas(autorFiltrado)
                break;

        }




    }
}




/*Verifica que la receta valorada no sea de la autoría del usuario que está valorando.*/


function recetaPropia(idReceta) {
    let recetaPropia = false



    for (let i = 0; i < recetas.length; i++) {
        if (recetas[i].id === idReceta) {
            if (usuarioLogueado === recetas[i].autor) {

                recetaPropia = true

            }

        }

    }

    return recetaPropia


}


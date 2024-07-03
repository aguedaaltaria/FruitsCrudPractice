// GET ///////////////////////
const mostrarGET = document.getElementById("mostrarGET");
const formularioGET = document.getElementById("formularioGET");
const cuadroGET = document.querySelector(".cuadroGET");
let moverGET = true;

mostrarGET.addEventListener('click', function moverGet() {
    if (moverGET == true) {
        cuadroGET.style.left = 1 + 'rem';
        formularioGET.style.right = -150 + 'px';
        mostrarGET.textContent = 'Ocultar';
        moverGET = false;
    } else {
        cuadroGET.style.left = 400 + 'px';
        formularioGET.style.right = 0;
        mostrarGET.textContent = 'Mostrar';
        moverGET = true;
    }
})


// POST /////////////////////
const mostrarPOST = document.getElementById("mostrarPOST");
const formularioPOST = document.getElementById("formularioPOST");
const cuadroPOST = document.querySelector(".cuadroPOST");
let moverPOST = true;

mostrarPOST.addEventListener('click', function() {
    if (moverPOST == true) {
        cuadroPOST.style.left = 1 + 'rem';
        formularioPOST.style.right = -150 + 'px';
        mostrarPOST.textContent = 'Ocultar';
        moverPOST = false;
    } else {
        cuadroPOST.style.left = 400 + 'px';
        formularioPOST.style.right = 0;
        mostrarPOST.textContent = 'Mostrar';
        moverPOST = true;
    }
})


// PUT /////////////////////
const mostrarPUT = document.getElementById("mostrarPUT");
const formularioPUT = document.getElementById("formularioPUT");
const cuadroPUT = document.querySelector(".cuadroPUT");
let moverPUT = true;

mostrarPUT.addEventListener('click', function() {
    if (moverPUT == true) {
        cuadroPUT.style.left = 1 + 'rem';
        formularioPUT.style.right = -150 + 'px';
        mostrarPUT.textContent = 'Ocultar';
        moverPUT = false;
    } else {
        cuadroPUT.style.left = 400 + 'px';
        formularioPUT.style.right = 0;
        mostrarPUT.textContent = 'Mostrar';
        moverPUT = true;
    }
})


// DELETE ///////////////////////////////
const mostrarDELETE = document.getElementById("mostrarDELETE");
const formularioDELETE = document.getElementById("formularioDELETE");
const cuadroDELETE = document.querySelector(".cuadroDELETE");
let moverDELETE = true;

mostrarDELETE.addEventListener('click', function() {
    if (moverDELETE == true) {
        cuadroDELETE.style.left = 1 + 'rem';
        formularioDELETE.style.right = -150 + 'px';
        mostrarDELETE.textContent = 'Ocultar';
        moverDELETE = false;
    } else {
        cuadroDELETE.style.left = 400 + 'px';
        formularioDELETE.style.right = 0;
        mostrarDELETE.textContent = 'Mostrar';
        moverDELETE = true;
    }
})
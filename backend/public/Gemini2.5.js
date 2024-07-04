// const formularioGET = document.getElementById("formularioGET");
// const formularioPOST = document.getElementById("formularioPOST");
// const formularioPUT = document.getElementById("formularioPUT");
// const formularioDELETE = document.getElementById("formularioDELETE");


// const btnGET = document.getElementById("btnGET");
// const btnPOST = document.getElementById("btnPOST");
// const btnPUT = document.getElementById("btnPUT");
// const btnDELETE = document.getElementById("btnDELETE");



const listaDeFrutas = document.getElementById("listaDeFrutas");

formularioGET.addEventListener('submit', event => {
    event.preventDefault();

    const nombreGET = (document.getElementById("nombreGET")).value;

    fetch(`/frutas/${nombreGET}`)
    .then(response => response.json())
    .then((data) => {
        if (data) {
            alert(`Fruta existe: ${data.nombre}`)
            listaDeFrutas.style.opacity = 1;
            listaDeFrutas.innerHTML = `
            <button id="cerrarListaDeFrutas"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
            <h3>Lista de frutas</h3>
            <h4>Fruta encontrada:</h4>
            <p>Nombre: ${data.nombre}</p>
            <p>Color: ${data.color}</p>
            `;

            const cerrarListaDeFrutas = document.getElementById("cerrarListaDeFrutas");

            cerrarListaDeFrutas.addEventListener('click', () => {
            listaDeFrutas.style.opacity = 0;
            
            })
        }
        // } else {
        //     listaDeFrutas.style.opacity = 1;
        //     listaDeFrutas.innerHTML = `
        //     <p>Fruta no encontrada: ${data.nombre}</p>
        //     `;
        //     listaDeFrutas.style.color = 'red';
        // }
    })
    .catch(error => {
        console.error(error);
        alert(`Fruta no existe: ${nombreGET}`);
        listaDeFrutas.style.opacity = 1;
            listaDeFrutas.innerHTML = `
            <button id="cerrarListaDeFrutas"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"  fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
            <p>Fruta no encontrada: ${nombreGET}</p>
            `;
            listaDeFrutas.style.color = 'red';
            const cerrarListaDeFrutas = document.getElementById("cerrarListaDeFrutas");
            cerrarListaDeFrutas.addEventListener('click', () => {
            listaDeFrutas.style.opacity = 0;
            
})
    })
});

formularioPOST.addEventListener('submit', event => {
    event.preventDefault();

    const nombrePOST = (document.getElementById("nombrePOST")).value;
    const colorPOST = (document.getElementById("colorPOST")).value;

    const newFruta = {
        nombre: nombrePOST,
        color: colorPOST,
    };

    fetch('/frutas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFruta),
    })
    .then(response => response.json())
    .then(data => {
        alert(`Fruta creada con exito: ${data.nombre}`)
    })
    .catch(error => {
        console.error(error);
        alert('Error al crear nueva Fruta')
    })
});

formularioPUT.addEventListener('submit', event => {
    event.preventDefault();

    const nombrePUT = (document.getElementById("nombrePUT")).value;
    const newnombrePUT = (document.getElementById("newnombrePUT")).value;
    const colorPUT = (document.getElementById("colorPUT")).value;

    const FrutaModificada = {
        nombre: newnombrePUT,
        color: colorPUT,
    };

    fetch(`/frutas/${nombrePUT}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(FrutaModificada),
    })
    .then(response => response.json())
    .then(data => {
        alert(`Fruta modificada con exito: ${data.nombre}`)
    })
    .catch(error => {
        console.error(error);
        alert('Error al modificar la Fruta')
    })
})

formularioDELETE.addEventListener('submit', event => {
    event.preventDefault();

    const nombreDELETE = (document.getElementById("nombreDELETE")).value;

    fetch(`/frutas/${nombreDELETE}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            alert("Fruta eliminada con exito")
        } else {
            alert("Error al eliminar la fruta")
        }
    })
    .catch(error => {
        console.error(error);
        alert('Error al eliminar la Fruta')
    })
})
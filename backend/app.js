const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const readData = function() {
    const data = fs.readFileSync("./frutas.json");
    return JSON.parse(data);
}

const writeData = function(data) {
    fs.writeFileSync("./frutas.json", JSON.stringify(data));
}


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Gemini2.5.html'));
})

app.get("/frutas", (req, res) => {
    const data = readData();
    res.json(data.frutas);
});

app.get("/frutas/:nombre", (req, res) => {
    const data = readData();
    const nombre = req.params.nombre;
    const fruta = data.frutas.find((fruta) => {
        return fruta.nombre === nombre
    });

    res.json(fruta);
});

app.post("/frutas", (req, res) => {
    const data = readData();
    const body = req.body;
    const newFruta = {
        ...body,
    };
    data.frutas.push(newFruta);
    writeData(data);
    res.json(newFruta);
});

app.put("/frutas/:nombre", (req, res) => {
    const data = readData();
    const body = req.body;
    const nombre = req.params.nombre;
    const frutaIndex = data.frutas.findIndex((fruta) => {
        return fruta.nombre === nombre
    });

    data.frutas[frutaIndex] = {
        ...body,
    };
    
    writeData(data);
    res.json({ mensaje: "Modificado" });    
});

app.delete("/frutas/:nombre", (req, res) => {
    const data = readData();
    const nombre = req.params.nombre;
    const frutaIndex = data.frutas.findIndex((fruta) => {
        return fruta.nombre === nombre
    });
    
    data.frutas.splice(frutaIndex, 1);
    writeData(data);
    res.json({ mensaje: "Borrado" });
});


const PORT = process.env.PORT ?? 3100;

app.listen(PORT, () => {
    console.log(`server listening on por http://localhost:${PORT}`);
});
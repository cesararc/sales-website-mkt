const express = require('express');
const app = express();

const PORT = 8080;

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('src'));

// Ruta para manejar la solicitud de la página principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

import express from 'express';
import { uploadProcessData } from "./fuego.js";
import { initializeFirebaseApp } from "./fuego.js";

const app = express().use(express.json()); 
app.use(express.urlencoded({ extended: true }));


const PORT = 8080;

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('src'));
app.use('/assets', express.static('src/assets'));



// Ruta para manejar la solicitud de la página principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});


app.post('/procesar-formulario', (req, res) => {
    // Accede a los datos del formulario desde el cuerpo de la solicitud
    const { name, phone, email, message} = req.body;
    console.log(req);
    uploadProcessData(name, phone, email, message);
    console.log('Nombre:', name);
    console.log('Teléfono:', phone);
    console.log('Email:', email);
    console.log('Mensaje:', message);

    // Aquí puedes llamar a tu función y pasarle los datos del formulario
    // uploadProcessData(name, phone, email);

    // Envía una respuesta al cliente
    res.sendStatus(204);
});


// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

initializeFirebaseApp();





//Tienda + AI + WhatsApp = ❤️

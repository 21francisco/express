const express = require('express'); 
const { fstat } = require('fs');
const app = express();  
const port = 5000
const fs = require('fs');
const { Z_ASCII } = require('zlib');

// middleware

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}));


/* app.get("/formulario", (req, res) => {  
console.log(req.query);

res.send("formulario enviado...." + req.query.nombre)

}) */

app.post("/formulario", (req, res) => {  
    console.log(req.body);
    const {nombre , apellido} = req.body;
    if (!nombre || !apellido) return res.redirect("/error.html");

    fs.writeFile(`archivos/${nombre}.txt`,apellido, (err) => {
        if(err) return res.send("Fallo al crear el archivo");
        res.download(__dirname + `/archivos/${nombre}.txt`);
               

    });
        
    });

app.get('/', (req, res) =>{

res.send("visitaste la pagina de inicio")

})


app.post('/FrankCode', (req, res) =>{

    res.send("visitaste FrankCode")
    
    })

app.listen(port, () => console.log("😎😎😎😎"))
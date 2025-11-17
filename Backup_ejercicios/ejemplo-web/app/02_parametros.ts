import express, { type Request, type Response } from "express";
const app = express(); //con el express generamos la app web
const port = 3000;

//te muestra formulario /alumno referencia url (uri entendible, buenas practicas de rest)
app.get("/alumno/new", (req: Request, res: Response) => {
  res.send("Formulario de creación del alumno");
});

app.post("/alumno/create", (req: Request, res: Response) => {
  // El nombre no es un parametro de la URL por lo que hay que leerlo usando
  // la property query
  res.send(`Alumno creado con nombre: ${req.params.nombre}`);
});

app.get("/alumno/edit/:id", (req: Request, res: Response) => {
  res.send(`Formulario de edición de alumno con ID: ${req.params.nombre}`);
});

app.put("/alumno/update/:id", (req: Request, res: Response) => {
  //En este caso nos llega una combinación de parámetros:
  // - 'id' es un parámetro de la URL así que se lee usando 'params'
  // - 'nombre' es un parámetro pasado por query string, así que se lee usando 'query'
  res.send(
    `Alumno creado con ID ${req.params.id} actualizado con nombre: ${req.query.nombre}`,
  );
});

app.delete("/alumno/destroy/:id", (req: Request, res: Response) => {
  res.send(`Alumno con ID ${req.params.id} eliminado`);
});

app.listen(port, () => {
  console.log("Escuchando en el puerto:  ", port);
});

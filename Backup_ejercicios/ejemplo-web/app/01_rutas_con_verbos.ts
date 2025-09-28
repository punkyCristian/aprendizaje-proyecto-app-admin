import express, { type Request, type Response } from "express";
const app = express(); //con el express generamos la app web
const port = 3000;

app.get("/alumno/new", (req: Request, res: Response) => {
  res.send("Formulario de creación del alumno");
});

app.post("/alumno/create", (req: Request, res: Response) => {
  res.send("Alumno creado");
});

app.get("/alumno/edit", (req: Request, res: Response) => {
  res.send("Formulario de edición del alumno");
});

app.put("/alumno/update", (req: Request, res: Response) => {
  res.send("Alumno actualizado");
});

app.delete("/alumno/new", (req: Request, res: Response) => {
  res.send("Alumno eliminado");
});

app.listen(port, () => {
  console.log("Escuchando en el puerto:  ", port);
});

import express, { type Request, type Response } from "express";
const app = express(); //con el express generamos la app web
const port = 3000;

// definimos el verbo get , req peticion
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Escuchando en el puerto: ", port);
});

import express, { type Request, type Response } from "express";
import methodOverride from "method-override";

const app = express(); //con el express generamos la app web
const port = 3000;

app.use(methodOverride("_method"));
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class Alumno {
  public id: number;
  public nombre: string;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}


let ultimoIdAsignado = 0;
const alumnos: Alumno[] = [];

function buscarAlumno(id: number): Alumno | undefined {
  return alumnos.find((a) => a.id === id);
}

app.get("/alumnos", (req: Request, res: Response) => {
  res.render("lista_alumnos", { alumnos: alumnos });
});

app.get("/alumno/new", (req: Request, res: Response) => {
  res.render("nuevo_alumno", { horaActual: new Date() });
});

app.post("/alumno/create", (req: Request, res: Response) => {
  alumnos.push(new Alumno(++ultimoIdAsignado, req.body.nombre));
  res.redirect("/alumnos");
});

app.get("/alumno/edit/:id", (req: Request, res: Response) => {
  const alumnoParaEditar: Alumno | undefined = buscarAlumno(
    Number(req.params.id),
  );
  res.render("edit_alumno", { alumno: alumnoParaEditar });
});

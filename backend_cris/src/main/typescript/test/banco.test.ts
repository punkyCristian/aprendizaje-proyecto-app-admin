import { describe, test, expect } from "@jest/globals";
import Banco from "../app/banco";

describe("banco", () => {
  test("creacion de cuenta", () => {
    const banco = new Banco();

    const titularDeLaCuenta: string = "Juan Perez";
    const dniTitularDeLaCuenta: string = "20202020";
    const numeroDeCuenta: string = banco.crearCuenta(
      titularDeLaCuenta,
      dniTitularDeLaCuenta,
    );

    expect(numeroDeCuenta.length).toBe(10);
  });
});

import { describe, test, expect } from "@jest/globals";
import Cuenta from "../app/cuenta";

describe("cuenta", () => {
  test("se crea con dni, nombre, numero y saldo 0", () => {
    const titularDeLaCuenta: string = "Juan Perez";
    const dniTitularDeLaCuenta: string = "20202020";
    const numeroDeCuenta: string = "0123456789";
    const cuenta = new Cuenta(
      numeroDeCuenta,
      titularDeLaCuenta,
      dniTitularDeLaCuenta,
    );

    expect(cuenta.getSaldo()).toBe(0);
  });
});

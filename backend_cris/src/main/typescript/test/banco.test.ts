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

  test("creacion de cuenta crea cuenta con saldo 0", () => {
    const banco = new Banco();

    const titularDeLaCuenta: string = "Juan Perez";
    const dniTitularDeLaCuenta: string = "20202020";
    const numeroDeCuenta: string = banco.crearCuenta(
      titularDeLaCuenta,
      dniTitularDeLaCuenta,
    );
    const saldo: number = banco.consultarSaldo(numeroDeCuenta);
    expect(saldo).toBe(0);
  });

  test("acreditar incrementa el saldo", () => {
    const banco = new Banco();

    const titularDeLaCuenta: string = "Juan Perez";
    const dniTitularDeLaCuenta: string = "20202020";
    const numeroDeCuenta: string = banco.crearCuenta(
      titularDeLaCuenta,
      dniTitularDeLaCuenta,
    );
    const montoAAcreditar: number = 10;
    banco.acreditarMonto(montoAAcreditar);
    const saldo: number = banco.consultarSaldo(numeroDeCuenta);
    expect(saldo).toBe(10);
  });
});

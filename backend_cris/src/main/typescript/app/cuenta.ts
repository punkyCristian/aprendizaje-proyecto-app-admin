export default class Cuenta {
  private numeroDeCuenta: string = "0123456789";
  private saldo: number;
  private titularDeLaCuenta: string;
  private dniTitularDeLaCuenta: string;

  constructor(
    numeroDeCuenta: string,
    titularDeLaCuenta: string,
    dniTitularDeLaCuenta: string,
  ) {
    this.numeroDeCuenta = numeroDeCuenta;
    this.titularDeLaCuenta = titularDeLaCuenta;
    this.dniTitularDeLaCuenta = dniTitularDeLaCuenta;
    this.saldo = 0;
  }

  getSaldo() {
    return this.saldo;
  }
}

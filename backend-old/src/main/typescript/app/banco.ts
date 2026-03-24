export default class Banco {
  crearCuenta(titularDeLaCuenta: string, dniTitularDeLaCuenta: string): string {
    const numeroDeCuenta: string = "0123456789";
    const cuenta: Cuenta = new Cuenta(
      numeroDeCuenta,
      titularDeLaCuenta,
      dniTitularDeLaCuenta,
    );
    return cuenta.obtenerNumeroDeCuenta();
  }
  consultarSaldo(numeroDeCuenta: string): number {
    return this.cuenta.getSaldo();
  }
  acreditarMonto(montoAAcreditar: number) {
    this.cuenta.acreditar(montoAAcreditar);
  }
}

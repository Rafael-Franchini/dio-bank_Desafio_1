export abstract class DioAccount {
  readonly #name: string;
  readonly #accountNumber: number;
  #balance = 0;
  readonly #status: boolean;

  constructor(name: string, accountNumber: number, status = true) {
    this.#name = name;
    this.#accountNumber = accountNumber;
    this.#status = status;
  }

  getName(): string { return this.#name; }
  getAccountNumber(): number { return this.#accountNumber; }
  getBalance(): number { return this.#balance / 100; }
  getStatus(): boolean { return this.#status; }

  deposit(value: number): void {
    this.credit(value);
  }

  withdraw(value: number): void {
    this.validateStatus();
    const cents = this.toCents(value);
    if (this.#balance <= cents) {
      throw new Error('O saldo deve ser maior que o valor do saque.');
    }
    this.#balance -= cents;
  }

  protected credit(value: number, bonus = 0): void {
    this.validateStatus();
    const cents = this.toCents(value);
    const bonusCents = bonus === 0 ? 0 : this.toCents(bonus);
    const nextBalance = this.#balance + cents + bonusCents;
    if (!Number.isSafeInteger(nextBalance)) {
      throw new Error('O saldo excede o limite permitido.');
    }
    this.#balance = nextBalance;
  }

  private validateStatus(): void {
    if (!this.#status) throw new Error('Conta inativa.');
  }

  private toCents(value: number): number {
    const cents = Math.round(value * 100);
    if (!Number.isFinite(value) || value <= 0 ||
        !Number.isSafeInteger(cents) || cents <= 0 ||
        Math.abs(value * 100 - cents) > 1e-6) {
      throw new Error('Informe um valor positivo com no máximo duas casas decimais.');
    }
    return cents;
  }
}

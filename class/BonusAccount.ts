import { DioAccount } from './DioAccount';

export class BonusAccount extends DioAccount {
  override deposit(value: number): void {
    this.credit(value, 10);
  }
}

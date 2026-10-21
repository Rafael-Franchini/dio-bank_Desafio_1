import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
  getLoan(value: number): void {
    this.credit(value);
  }
}

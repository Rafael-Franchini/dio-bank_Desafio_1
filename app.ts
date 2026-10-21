import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { BonusAccount } from './class/BonusAccount';

const peopleAccount = new PeopleAccount(123, 'Rafael', 1);
peopleAccount.deposit(100);
console.log(`Saldo da conta da pessoa física: R$ ${peopleAccount.getBalance().toFixed(2)}`);
peopleAccount.withdraw(30);
console.log(`Saldo da conta da pessoa física após saque: R$ ${peopleAccount.getBalance().toFixed(2)}`);
const companyAccount = new CompanyAccount('Rafa Tech Solutions', 2);
companyAccount.deposit(200);
console.log(`Saldo da conta da empresa: R$ ${companyAccount.getBalance().toFixed(2)}`);
companyAccount.getLoan(500);
console.log(`Saldo da conta da empresa após empréstimo: R$ ${companyAccount.getBalance().toFixed(2)}`);
companyAccount.withdraw(100);
console.log(`Saldo da conta da empresa após saque: R$ ${companyAccount.getBalance().toFixed(2)}`);

const bonusAccount = new BonusAccount('Conta com bônus', 3);
bonusAccount.deposit(100);
console.log(`Saldo da conta com bônus: R$ ${bonusAccount.getBalance().toFixed(2)}`);
bonusAccount.withdraw(20);
console.log(`Saldo da conta com bônus: R$ ${bonusAccount.getBalance().toFixed(2)}`);

for (const account of [peopleAccount, companyAccount, bonusAccount]) {
  console.log(`${account.getName()} | Conta ${account.getAccountNumber()} | Ativa: ${account.getStatus()} | Saldo: R$ ${account.getBalance().toFixed(2)}`);
}
console.log(`Documento da pessoa física: ${peopleAccount.getDocId()}`);

const inactiveAccount = new CompanyAccount('Conta inativa', 4, false);
try {
  inactiveAccount.getLoan(100);
} catch (error) {
  console.log(`Empréstimo recusado: ${(error as Error).message}`);
}

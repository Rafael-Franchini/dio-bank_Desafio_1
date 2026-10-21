import { DioAccount } from './DioAccount';

export class PeopleAccount extends DioAccount {
  readonly #docId: number;

  constructor(docId: number, name: string, accountNumber: number, status = true) {
    super(name, accountNumber, status);
    this.#docId = docId;
  }

  getDocId(): number { return this.#docId; }
}

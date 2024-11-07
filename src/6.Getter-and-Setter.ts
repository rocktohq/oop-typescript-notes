{
  // * Getter and Setter

  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // * Getter
    get Balance(): number {
      return this._balance;
    }
  }

  // Instances of BankAccount
  const account1 = new BankAccount(1, "John", 300);
  const account2 = new BankAccount(2, "Jenny", 200);

  const balance = account1.Balance;

  //
}

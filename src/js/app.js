export class ErrorRepository {
  constructor(codeNumb, description) {
    this.errors = new Map([[codeNumb, description]]);
    console.log(this.errors);
  }
  add(codeNumb, description) {
    this.errors.set(codeNumb, description);
  }
  translate(code) {
    const error = new Error("Unknown error");
    for (let elem of this.errors) {
      if (elem[0] === code) {
        console.log(elem[1]);
        return elem[1];
      }
    }
    throw error;
  }
}

const errors = new ErrorRepository(400, "Такой персонаж уже существует!");
errors.add(40, "Такой персонаж уже существует!");
errors.add(4, "Такой персонаж уже существует!");
//errors.translate(400);
//errors.translate(10);

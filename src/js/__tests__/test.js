import { ErrorRepository } from "../app.js";

test("get trow error", () => {
  expect(() => {
    const errors = new ErrorRepository(400, "Такой персонаж уже существует!");
    const error = new Error("Unknown error");
    const expResult = errors.translate(10);
  }).toThrow("Unknown error");
}); 

test("get description of error", () => {
  const errors = new ErrorRepository(400, "Такой персонаж уже существует!");
  const description = "Такой персонаж уже существует!";
  const expResult = errors.translate(400);
  expect(expResult).toEqual(description);
});
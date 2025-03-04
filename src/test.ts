import test from "ava";
import { Product } from "./index";
import { User } from "./index";


test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});
test("Testeo la clase User y sus métodos", (t) => {
  // test User class y sus métodos
  const user = new User("Alejandro")
  const product = new Product("Product 2", 10)
  user.addProduct(product)
  t.is(user.products.length, 1)
  t.is(user.products[0].name, "Product 2")
});

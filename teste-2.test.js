process.env.NODE_ENV = "TEST";

const { test, describe } = require("node:test");
const assert = require("node:assert");
const includesInFibb = require("./teste-2");

describe("Executando #includesInFibb", () => {
  test("Dado um numero fora da sequência", () => {
    assert.equal(includesInFibb(4), false);
    assert.equal(includesInFibb(6), false);
    assert.equal(includesInFibb(7), false);
    assert.equal(includesInFibb(9), false);
  });

  test("Dado um numero dentro da sequência", () => {
    assert.equal(includesInFibb(0), true);
    assert.equal(includesInFibb(1), true);
    assert.equal(includesInFibb(2), true);
    assert.equal(includesInFibb(3), true);
    assert.equal(includesInFibb(5), true);
    assert.equal(includesInFibb(8), true);
  });
});

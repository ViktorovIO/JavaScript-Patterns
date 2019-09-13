// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });
describe("pow", function() {

  // it("2 в степени 3 будет 8", function() {
  //   assert.equal(pow(2, 3), 8);
  // });
  // it("3 в степени 3 будет 27", function() {
  //   assert.equal(pow(3, 3), 27);
  // });
  
  it("Для отрицательных n возвращает NaN", function() {
    assert.isNaN(pow(2, -1));
  });
  it("Для дробных n возвращает NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

  describe("Возводит x в степень 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} в степени 3 будет ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  describe("Тест", function() {

    before(() => console.log("Тестирование началось"));
    after(() => console.log("Тестирование закончилось"));

    beforeEach(() => console.log("Перед тестом - начинаем выполнять тест"));
    afterEach(() => console.log("После теста - заканчиваем выполнение теста"));

    it('Тест 1', () => console.log(1));
    it('Тест 2', () => console.log(2));

  });

});

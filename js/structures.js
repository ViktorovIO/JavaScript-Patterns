class List {

  constructor() {
    this.memory = [];
    this.length = 0;
  }

  // О(1)
  get(address) {
    return this.memory[address];
  }

  // О(1)
  push(value) {
    this.memory[this.length] = value;
    this.length++;
  }

  // О(1)
  pop() {
    // Нет элементов - ничего не делаем
    if(this.length === 0) return;

    // Получаем последнее значение, перестаем его хранить, возвращаем его
    let lastAddress = this.length - 1;
    let value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length--;

    // Возвращаем значение, чтобы его можно было использовать
    return value
  }

  // Чтобы добавить новый элемент в начало списка,
  // нужно освободить пространство для этого значения,
  // сдвинув на один все последующие значения

  // O(n)
  unshift(value) {
    let previous = value;

    for(let address = 0; address < this.length; address++) {
      let current = this.memory[address];
      this.memory[address] = previous;
      previous = current;
    }

    this.memory[this.length] = previous;
    this.length++;
  }

  // O(n)
  shift() {
    if(this.length === 0) return;

    let value = this.memory[0];

    for (let address = 0; address < this.length-1; address++) {
      this.memory[address] = this.memory[address + 1];
    }

    delete this.memory[this.length - 1];
    this.length--;

    return value;
  }
}

class HashTable {

  constructor() {
    this.memory = [];
  }

  hashKey(key) {
    let hash = 0;
    for(let index = 0; index < key.length; index++) {
      let code = key.charCodeAt(index);

      hash = ((hash << 5) - hash) + code | 0;
    }

    return hash;
  }

  // O(1)
  get(key) {
    let address = this.hashKey(key);

    return this.memory[address];
  }

  // O(1)
  set(key, value) {
    let address = this.hashKey(key);

    this.memory[address] = value;
  }

  // O(1)
  remove(key) {
    let address = this.hashKey(key);

    if(this.memory[address]) {
      delete this.memory[address];
    }
  }
}

class Stack {

  constructor() {
    this.list = [];
    this.length = 0;
  }

  push(value) {
    this.length++;
    this.list.push(value);
  }

  pop() {
    if(this.length === 0) return;

    this.length--;
    return this.list.pop();
  }

  peek() {
    return this.list[this.length - 1];
  }
}

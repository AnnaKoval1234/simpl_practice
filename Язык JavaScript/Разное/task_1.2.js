let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
        return target[target.length + +prop];
    }
    else {
        return Reflect.get(target, prop, receiver);
    }
  }
});

alert( array[-1] ); // 3
alert( array[-2] ); // 2

// вся остальная функциональность массивов должна остаться без изменений
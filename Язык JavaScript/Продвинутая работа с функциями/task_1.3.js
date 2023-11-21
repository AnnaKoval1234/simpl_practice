// Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.

function fib(n) { 
    // if (n == 1 || n == 2)
    //     return 1;
    // else 
    //     return fib(n - 1) + fib(n - 2);

    let f1, f2, fn;
    f1 = f2 = fn = 1;
    for (let i = 3; i <= n; i++) {
        fn = f1 + f2;
        f1 = f2;
        f2 = fn;
    }
    return fn;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
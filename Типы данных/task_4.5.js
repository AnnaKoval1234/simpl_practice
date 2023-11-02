// На входе массив чисел, например.
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0».

function getMaxSubSum(arr) {
    let curSum = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (curSum + arr[i] < 0) {
            curSum = 0;
        }
        else {
            curSum += arr[i];
            if (curSum > maxSum) {
                maxSum = curSum;
            }
        }
    }
    return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([2, -1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );
alert( getMaxSubSum([1, 2, 3]) );
alert( getMaxSubSum([-1, -2, -3]) );
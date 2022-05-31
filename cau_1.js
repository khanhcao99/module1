function findMax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max;
}

let arr = [2, 33, 4, 55, 33, 111];
let find = findMax(arr);
function test_1(){
   alert("Giá trị lớn nhất trong mảng là: " + find);
}


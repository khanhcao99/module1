function tryRemoveFromArray(array) {
    let arr = [];
    let x = 3;
    for (let i = 0; i < array.length ; i++) {
        if (x !== array[i]){
            arr.push(array[i])
        }
    }
    return arr;
}

let array = [1,2,3,4,5,6,7];
let remote =tryRemoveFromArray(array);
function test_2() {
    alert(remote)
}
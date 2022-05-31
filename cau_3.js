function isFibonacci(number) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    let checkFibonacci = number;
    let flag = false;
    for (let i = 1; i < 500 ; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        if (checkFibonacci === nextTerm){
            flag = true;
        }
    }
    return flag;
}
let num = 55;
let check = isFibonacci(num);
function test_3() {
    alert(check)
}

// Find the element that occurs an odd number of times in an array
function solution(A) {
    const count = {};
    for (let i = 0; i < A.length; i++) {
        count[A[i]] = (count[A[i]] || 0) + 1;
    }
    for (const key in count) {
        if (count[key] % 2 === 1) {
            return parseInt(key);
        }
    }
    return 0;
}

// alternative solution using XOR
function solutionXOR(A) {
    let result = 0;
    for (let num of A) {
        result ^= num; 
    }
    return result;
}
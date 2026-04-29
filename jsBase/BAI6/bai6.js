// Input:
const n = +window.prompt("Nhập số n:");
function isPrime(n) {
    // Xử lý và in ra kết quả
    if (isNaN(n) || n < 0) {
        return "Sô nhập không hợp lệ"
    }
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
function printPrimeNumber(n) {
    if (isNaN(n) || n < 0) {
        return "Sô nhập không hợp lệ"
    }
    if (n < 2) return;
    let result = "";
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            result += i + " ";
        }
    }
    return result
}
// Output:
printPrimeNumber(n); // 2 3 5 7
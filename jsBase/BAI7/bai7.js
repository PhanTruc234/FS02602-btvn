// Input:
const a = +window.prompt("Nhập số a:");
const b = +window.prompt("Nhập số b:");
const c = +window.prompt("Nhập số c:");
function findMaxNumber(a, b, c) {
    // Xử lý và in ra kết quả
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return "Sô nhập không hợp lệ"
    }
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c
    } else {
        return a
    }
}

// Output:
console.log(findMaxNumber(a, b, c)) // 5
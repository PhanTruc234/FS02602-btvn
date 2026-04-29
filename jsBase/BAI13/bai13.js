// Input:
const n = +window.prompt("Nhập số n:");
function printIsoscelesTriangle(n, character) {
    // Xử lý và in ra kết quả
    if (isNaN(n) || n < 0) {
        return "Sô nhập không hợp lệ"
    }
    for (let i = 1; i <= n; i++) {
        let p = ""
        for (let j = 0; j < n - i; j++) {
            p += " "
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            p += character
        }
        console.log(p);
    }
}

// Output:
printIsoscelesTriangle(n, "*");
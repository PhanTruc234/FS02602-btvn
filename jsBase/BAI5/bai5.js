// Input:
const n = +window.prompt("Nhập số n:");
function printSquareNumber(n) {
    // Xử lý và in ra kết quả
    if (isNaN(n) || n < 0) {
        return "Sô nhập không hợp lệ"
    }
    if (n < 2) {
        return
    }
    for (let i = 2; i * i <= n; i++) {
        console.log(i)
    }
}
// Output:
printSquareNumber(n);
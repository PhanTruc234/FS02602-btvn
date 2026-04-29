// Input:
const n = +window.prompt("Nhập số n:");
const char = window.prompt("Nhập kí tự muốn in:")
function printChristmasTree(n, character) {
    // Xử lý và in ra kết quả
    for (let i = 1; i <= n; i++) {
        let p = ""
        for (let j = 0; j < n - i; j++) {
            p += " "
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            p += character
        }
        console.log(p)
    }
    let p = ""
    for (let j = 0; j < n - 1; j++) {
        p += " "
    }
    p += character
    console.log(p)
}

// Output:
printChristmasTree(n, char);
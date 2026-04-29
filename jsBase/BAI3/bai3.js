// Input:
const a = +window.prompt("Nhập số a:");
const b = +window.prompt("Nhập số b:");
const c = +window.prompt("Nhập số c:");
function sortNumber(a, b, c) {
    // Xử lý và in ra kết quả
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Giá trị không hợp lệ");
        return;
    }
    if (a > b) {
        b = a - b;
        a = a - b;
        b = a + b
    }
    if (a > c) {
        c = a - c;
        a = a - c;
        c = a + c
    }
    if (b > c) {
        c = b - c;
        b = b - c;
        c = b + c
    }
    console.log(a, b, c)
}

// Output:
sortNumber(a, b, c); // 1 2 3
// Input:
const a = +window.prompt("Nhập số a:");
const b = +window.prompt("Nhập số b:");
function swapNumber(a, b) {
    // Xử lý và in ra kết quả
    if (isNaN(a) || isNaN(b)) {
        console.log("Giá trị không hợp lệ");
        return;
    }
    a = b - a;
    b = b - a;
    a = a + b;
    console.log(a, b)
}

// Output:
swapNumber(a, b); // 5 3
// Input:
const a = +window.prompt("Nhập số a:");
const b = +window.prompt("Nhập số b:");
const c = +window.prompt("Nhập số c:");
function isTriangle(a, b, c) {
    // Viết logic trả về true hoặc false ở đâyđây
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Giá trị không hợp lệ");
        return;
    }
    if (a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0) {
        return true
    }
    return false
}

// Output:
console.log(isTriangle(a, b, c));
// Input:
const a = +window.prompt("Nhập số a:");
const b = +window.prompt("Nhập số b:");
function isSameSign(a, b) {
    // Viết logic kiểm tra 2 số cùng dấu ở đây
    if (a === 0 || b === 0) return false;
    return (a > 0 && b > 0) || (a < 0 && b < 0);
}

// Output:
console.log(isSameSign(a, b))
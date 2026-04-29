// Input:
const weight = +window.prompt("Nhập cân nặng");
const height = +window.prompt("Nhập chiều cao")
function calcBMI(weight, height) {
    // logic
    if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
        alert("Cân nặng và chiều cao không hợp lệ")
        return
    }
    let BMI = weight / height ** 2
    BMI = BMI.toFixed(2)
    if (BMI < 18.5) {
        alert("Thiếu cân")
    } else if (BMI >= 18.5 && BMI < 23) {
        alert("Bình thường")
    } else if (BMI >= 23 && BMI < 25) {
        alert("Thừa cân")
    } else {
        alert("Béo phì")
    }
}

// Output:
calcBMI(weight, height); // "BMI = 20.76, Bình thường"
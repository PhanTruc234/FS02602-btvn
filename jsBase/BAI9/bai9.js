// Input:
const km = +window.prompt("Nhập số km:");
function taxiBill(km) {
    // Xử lý và in ra kết quả
    if (isNaN(km) || km < 0) {
        return "Số điện không hợp lệ";
    }
    if (km <= 1) {
        return 10000
    }
    const bill = [
        { km: 1, price: 10000 },
        { km: 30, price: 8000 },
        { km: Infinity, price: 7000 }
    ]
    let money = 0;
    let prev = 0;
    for (let i = 0; i < bill.length; i++) {
        if (km <= prev) {
            break
        } else {
            let k = Math.min(km, bill[i].km) - prev;
            money += k * bill[i].price;
            prev = bill[i].km
        }
    }
    return money
}

// Output:
console.log(taxiBill(km).toLocaleString())
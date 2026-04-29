const a = +window.prompt("Nhập số a:");
const calculateElectricPrices = (electric) => {
    if (isNaN(electric) || electric < 0) {
        console.log("Số điện không hợp lệ");
        return;
    }
    const electricPrices = [
        { limit: 50, price: 1500 },
        { limit: 100, price: 2000 },
        { limit: 200, price: 3000 },
        { limit: 350, price: 4000 },
        { limit: Infinity, price: 5000 },
    ];
    let money = 0;
    let prev = 0;
    for (let i = 0; i < electricPrices.length; i++) {
        if (electric <= prev) {
            break;
        } else {
            let k = Math.min(electric, electricPrices[i].limit) - prev
            money += k * electricPrices[i].price
            prev = electricPrices[i].limit
        }
    }
    return money;
};
console.log(calculateElectricPrices(a).toLocaleString())
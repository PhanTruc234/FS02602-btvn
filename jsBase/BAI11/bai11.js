const tax = +window.prompt("Nhập số thuế:");
const calcultax = (tax) => {
    if (isNaN(tax) || tax < 0) {
        console.log("Số điện không hợp lệ");
        return;
    }
    const thue = [
        { price: 11000000, rate: 0 },
        { price: 25000000, rate: 0.05 },
        { price: 50000000, rate: 0.1 },
        { price: 80000000, rate: 0.2 },
        { price: Infinity, rate: 0.3 },
    ];
    let total = 0;
    let prev = 0;
    for (let i = 0; i < thue.length; i++) {
        if (tax <= prev) {
            break
        } else {
            let number = Math.min(tax, thue[i].price) - prev
            total += number * thue[i].rate
            prev = thue[i].price
        }
    }
    return total
}
console.log(calcultax(tax).toLocaleString())
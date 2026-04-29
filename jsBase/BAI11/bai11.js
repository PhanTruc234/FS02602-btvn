const rax = +window.prompt("Nhập số thuế:");
const calculRax = (l) => {
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
        if (l <= prev) {
            break
        } else {
            let tax = Math.min(l, thue[i].price) - prev
            total += tax * thue[i].rate
            prev = thue[i].price
        }
    }
    return total
}
console.log(calculRax(rax).toLocaleString())
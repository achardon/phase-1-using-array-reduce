const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(batteryCounter, 0);

function batteryCounter (accumulator, item) {
    return accumulator + item;
}
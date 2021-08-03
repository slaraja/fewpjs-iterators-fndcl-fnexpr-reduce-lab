//Create a new variable called totalBatteries 
//which is the sum of all of the battery amounts in the batteryBatches array
//use reduce() for this


const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total, batches) => total + batches) 
  
let crushed = {
  amount: 0,
  multiplier: 1,
  autoMultiplier: 0
}

let clickUpgrades = {
  snowboard: {
    price: 5,
    quantity: 0,
    multiplier: 10,
    display: "Boards"
  },
  goggles: {
    price: 15,
    quantity: 0,
    multiplier: 5,
    display: "Goggles"
  },
  energyDrink: {
    price: 5,
    quantity: 0,
    multiplier: 3,
    display: "Energy Drinks"
  }
}

let automaticUpgrades = {
  friends: {
    price: 5,
    quantity: 0,
    multiplier: 20,
    //button: document.getElementById("buy-friends"),
    display: "Friends"
  }
}
let purchaseSnowboardBtn = document.getElementById("buy-snowboard")

let autoCrush = crushed.amount + crushed.autoMultiplier

function crush() {
  //console.log("clicked");
  crushed.amount += crushed.multiplier
  console.log(crushed.amount)
  updateCrushedTotals()
}

function collectAutoUpgrades() {
  autoCrush += automaticUpgrades.friends.multiplier * automaticUpgrades.friends.quantity
  console.log(autoCrush);
  let Atemplate = " "
  Atemplate += `
  <h3 id="total">Total Runs Crushed: ${autoCrush}</h3>
  `
  document.getElementById("total").innerHTML = Atemplate


}

function updateCrushedTotals() {
  let template = " "
  template += `
  <h3 id="total">Total Runs Crushed: ${crushed.amount}</h3>
  `
  document.getElementById("total").innerHTML = template



}

function updateMultiplierTotals() {
  let template = " "
  template += `
<H3 id="multiplier">Runs Crushed per Day multiplier: ${crushed.multiplier}</H3>
`
  document.getElementById("multiplier").innerHTML = template

  let multiplierTemplate = " "
  multiplierTemplate += `
<h3 id="automatic">Automatic run crusher: ${automaticUpgrades.friends.quantity}</h3>
`
  document.getElementById("automatic").innerHTML = multiplierTemplate
}


function updateInventoryTotals() {
  let template = " "
  template += `
  <h4 id="snowboard">Board: ${clickUpgrades.snowboard.quantity}</h4>
  `
  document.getElementById("snowboard").innerHTML = template
  let gTemplate = " "
  gTemplate += `
  <h4 id="goggles">Goggles: ${clickUpgrades.goggles.quantity}</h4>
  `
  document.getElementById("goggles").innerHTML = gTemplate
  let eTemplate = " "
  eTemplate += `
  <h4 id="energyDrink">Energydrink:${clickUpgrades.energyDrink.quantity}</h4>
  `
  document.getElementById("energyDrink").innerHTML = eTemplate

  let fTemplate = " "
  fTemplate += `
  <h4 id="friends">Friends: ${automaticUpgrades.friends.quantity}</h4>
  `
  document.getElementById("friends").innerHTML = fTemplate
}
updateInventoryTotals()

function buySnowboard() {
  if (crushed.amount >= clickUpgrades.snowboard.price) {
    crushed.amount -= clickUpgrades.snowboard.price
    clickUpgrades.snowboard.quantity += 1
    clickUpgrades.snowboard.price *= 2
    crushed.multiplier += clickUpgrades.snowboard.multiplier
    updateCrushedTotals()
    updateInventoryTotals()
    updateMultiplierTotals()
  }
}

function buyGoggles() {
  if (crushed.amount >= clickUpgrades.goggles.price) {
    crushed.amount -= clickUpgrades.goggles.price
    clickUpgrades.goggles.quantity += 1
    clickUpgrades.goggles.price *= 2
    crushed.multiplier += clickUpgrades.goggles.multiplier
    updateCrushedTotals()
    updateInventoryTotals()
    updateMultiplierTotals()
  }
}

function buyEnergydrink() {
  if (crushed.amount >= clickUpgrades.energyDrink.price) {
    crushed.amount -= clickUpgrades.energyDrink.price
    clickUpgrades.energyDrink.quantity += 1
    clickUpgrades.energyDrink.price *= 2
    crushed.multiplier += clickUpgrades.energyDrink.multiplier
    updateCrushedTotals()
    updateInventoryTotals()
    updateMultiplierTotals()
  }
}

function buyAuto() {
  if (crushed.amount >= automaticUpgrades.friends.price) {
    crushed.amount -= automaticUpgrades.friends.price
    automaticUpgrades.friends.quantity += 1
    automaticUpgrades.friends.price *= 2
    crushed.autoMultiplier += automaticUpgrades.friends.multiplier
    // crushed.multiplier += automaticUpgrades.friends.multiplier
    updateInventoryTotals()
    updateMultiplierTotals()
    //startInterval()
    collectAutoUpgrades()
  }
}



function startInterval() {
  collectIntervals = setInterval(collectAutoUpgrades, 3000)
  //console.log("collect")
}

startInterval()
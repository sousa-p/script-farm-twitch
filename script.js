const pointsPerChest = 50;
const interval = 5000;
let chestBtn;

let clickedChestsCounter = 0;
let totalPoints = 0;

// Check if the chest button element exists
const existsChestBtn = () => {
  chestBtn = document.querySelector('#live-page-chat > div > div > div.Layout-sc-1xcs6mc-0.iTiPMO.chat-shell.chat-shell__expanded > div > div > section > div > div.Layout-sc-1xcs6mc-0.kILIqT.chat-input > div:nth-child(2) > div.Layout-sc-1xcs6mc-0.eWfUfi.chat-input__buttons-container > div.Layout-sc-1xcs6mc-0.cNKHwD > div > div > div > div.Layout-sc-1xcs6mc-0.kxrhnx > div > div > div > button');
  return chestBtn !== null && !chestBtn.classList.contains('kOzjlQ')
};

const clickOnChest = async () => chestBtn.click();

const successOnClick = () => {
  clickedChestsCounter += 1;
  totalPoints = clickedChestsCounter * pointsPerChest;
  console.log(`${clickedChestsCounter} clicks!\nTotal ${totalPoints} points!`);
}

const ifExistsChestClickOnIt = () => (existsChestBtn()) ? clickOnChest().then(successOnClick) : null;

//Set interval
const loop = setInterval(ifExistsChestClickOnIt, interval);
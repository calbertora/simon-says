let simon;

function initializeGame() {
  simon = new SimonGame();
}
let sequenceIndex = 0;
let clicksAllowed = 0;

class SimonGame {
  constructor() {
    this.TIME_COLOR_LIGHTED = 800;
    this.sequence = new Array(10)
      .fill(0)
      .map(() => this.getRandomMax());
    
    sequenceIndex = 1;
    clicksAllowed = sequenceIndex;

    this.lightColors = this.lightColors.bind(this);
    this.colorMap = {
      0: 'green',
      1: 'violet',
      2: 'red',
      3: 'blue',
    }
    this.initializeGame();
    this.userAnswers = [];
  }

  getRandomMax() {
    const COLORS_QUANTITY = 4;
    return Math.floor( Math.random() * COLORS_QUANTITY);
  }

  initializeGame() {
    this.hideButtonAndBackground();
    this.lightColors();
  }

  hideButtonAndBackground() {
    let button = document.getElementById('start-button');
    let background = document.getElementById('game-overflow');
    button.classList.add('hide');
    background.classList.add('hide');
  }

  lightColors() {
    console.log(sequenceIndex);
    for(let i=0; i < sequenceIndex; i++) {
      const color = this.sequence[i];
      window.setTimeout(()=> this.changeColorToLight(color), this.TIME_COLOR_LIGHTED*(i+1));
    }
  }

  changeColorToLight(colorNumber) {
    const color = this.colorMap[colorNumber];
    let colorElement = document.getElementById(color);
    colorElement.classList.add('light');
    setTimeout(()=> colorElement.classList.remove('light'), this.TIME_COLOR_LIGHTED/2);
    
  }

  setGameAnswer(colorClicked) {
    clicksAllowed--;
    
    if(colorClicked) {
      this.userAnswers.push(colorClicked);
    } else {
      this.hideContinueButton();
    }

    if(clicksAllowed === 0) {
      this.showContinueButton();
    }
    
  }

  hideContinueButton() {
    let continueButton = document.getElementById('continue-button');
    continueButton.classList.remove('visible');
    continueButton.classList.add('hide');  
  }

  showContinueButton() {
    let continueButton = document.getElementById('continue-button');
    continueButton.classList.remove('hide');
    continueButton.classList.add('visible');
  }

  finishGame() {
    let continueButton = document.getElementById('game-finished');
    continueButton.classList.remove('hide');
    continueButton.classList.add('visible'); 
  }

}

function setClickEvent(event) {

  if (clicksAllowed) {
    simon.setGameAnswer(event);
  } else {
    sequenceIndex++;
    if (sequenceIndex > 10) {
      simon.finishGame();
    } else {
      clicksAllowed = sequenceIndex;
      simon.hideContinueButton();
      simon.lightColors();
    }
  }
}
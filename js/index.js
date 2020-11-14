function initializeGame() {
  const simon = new SimonGame();
}

class SimonGame {
  constructor() {
    this.TIME_COLOR_LIGHTED = 800;
    this.sequence = new Array(10)
      .fill(0)
      .map(() => this.getRandomMax());
    
    this.sequenceIndex = 1;
    this.colorMap = {
      0: 'green',
      1: 'violet',
      2: 'red',
      3: 'blue',
    }
    this.initializeGame();
  }

  getRandomMax() {
    const COLORS_QUANTITY = 4;
    return Math.floor( Math.random() * COLORS_QUANTITY);
  }

  initializeGame() {
    //this.initializeColors();
    this.hideButtonAndBackground();
    this.lightColors();
  }

  hideButtonAndBackground() {
    let button = document.getElementById('start-button');
    let background = document.getElementById('game-overflow');
    button.classList.add('hide');
    background.classList.add('hide');
  }

  initializeColors() {
    const divs = document.getElementsByTagName('div');
    const divsList = [...divs];
    this.colors = divsList.filter(el => el.id.includes('color'));
    this.colors = this.colors.map(el => ({id: el.id.split('-')[0], element: el}));
  }

  lightColors() {
    for(let i=0; i < this.sequenceIndex; i++) {
      const color = this.sequence[i];
      window.setTimeout(()=> this.changeColorToLight(color), this.TIME_COLOR_LIGHTED);
    }
  }

  changeColorToLight(colorNumber) {
    const color = this.colorMap[colorNumber];
    let colorElement = document.getElementById(color);
    colorElement.classList.add('light');
    console.log(this.TIME_COLOR_LIGHTED);
    setTimeout(()=> colorElement.classList.remove('light'), this.TIME_COLOR_LIGHTED/2);
    
  }

}

function setClickEvent(event) {
  console.log(event);
}
abstract class Tamagocci {

  _weight = 5;
  minWeight = 1;
  maxWeight = 10;
  age = 0;
  _happiness = 5;
  isDead = false;

  get happiness() {
    return this._happiness;
  }

  set happiness(value) {
    this._happiness = value;
    this.checkIfDead();
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    this._weight = value;
    this.checkIfDead();
  }

  private checkIfDead(): void {
    if (
      this.minWeight > this.weight 
      || this.weight > this.maxWeight
      || this.happiness === 0
    ) {
      if (this.ondie) this.ondie();
      this.isDead = true;
    }
  }

  ondie: () => void;

  eat(): void {
    this.weight += 2;
  }

  play(): void {
    this.weight -= 1;
    this.happiness += 1;
  }

  becomeOlder(): void {
    this.age++;
    this.minWeight++;
    this.maxWeight++;
    this.happiness--;
  }

  protected get isBad() {
    return this.minWeight + 3 > this.weight 
      || this.weight > this.maxWeight - 3
      || this.happiness < 3;
  }

}

class Pikachu extends Tamagocci {

  getPicture(): string {
    if (this.isDead) {
      return 'pk_dead.gif';
    } else if (this.isBad) {
      return 'pk_bad.gif';
    } else {
      return 'pk_good.gif';
    }
  }

}

class HelloKitty extends Tamagocci {

  getPicture(): string {
    if (this.isDead) {
      return 'hk_dead.png';
    } else if (this.isBad) {
      return 'hk_bad.gif';
    } else {
      return 'hk_good.gif';
    }
  }

}
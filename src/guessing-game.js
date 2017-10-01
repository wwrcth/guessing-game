class GuessingGame {
    constructor() {
      this.low = 0;
      this.mid = 0;
      this.high = 0;
    }

    setRange(min, max) {
      this.low = min;
      this.high = max;
    }

    guess() {
      return this.mid = Math.ceil((this.low + this.high) / 2);
    }

    lower() {
      return this.high = this.mid;
    }

    greater() {
      return this.low = this.mid;
    }
}

module.exports = GuessingGame;

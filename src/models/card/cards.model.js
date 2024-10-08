import { sum } from 'es-toolkit';

import { BLACKJACK_RULE } from '@/lib/constants/blackjack-rule.constant';

class Cards {
  #cards;
  #score;

  constructor() {
    this.#cards = [];
    this.#score = 0;
  }

  // Ace 가치 계산 로직 바뀐다면 쪼개는 게 유리할 수 있다~
  #updateScore() {
    this.#score = sum(this.cards.map((card) => card.value));
  }

  add(card) {
    this.cards.push(card);
    this.#updateScore();
  }

  reset() {
    this.#cards = [];
    this.#score = 0;
  }

  get cards() {
    return this.#cards;
  }

  get score() {
    return this.#score;
  }

  checkIsBust() {
    return this.#score >= BLACKJACK_RULE.BUST_MINIMUM_THRESHOLD;
  }
}

export { Cards };

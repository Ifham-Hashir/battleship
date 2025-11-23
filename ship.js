function Ship(length) {
  return {
    hit() {
      this.hits++;
    },

    isSunk() {
      return this.hits >= this.length;
    },

    length: length,
    hits: 0,
  };
}

export default Ship;
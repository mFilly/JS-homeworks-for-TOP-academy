class Rectangle{
    /**
     * @param {number} width
     * @param {number} height
     */
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  
  const makeSquare = () => {
      return new Rectangle (10,20);
  };
  
  // Sample usage - do not modify
  console.log(makeSquare());
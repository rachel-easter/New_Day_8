// Base interfaces
interface Shape {
    color: string;
  }
  
  interface Dimensions {
    width: number;
    height: number;
  }
  
  // Interface extending multiple interfaces
  interface RectangularShape extends Shape, Dimensions {
    // The combined properties from Shape and Dimensions
    area: number;
  }
  
  // Implementation
  const rectangle: RectangularShape = {
    color: 'blue',
    width: 10,
    height: 5,
    area: 50,
  };
  
  console.log(rectangle);
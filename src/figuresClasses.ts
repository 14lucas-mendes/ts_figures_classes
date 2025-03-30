type Forms = 'triangule' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  forms: Forms;
  colors: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  forms: Forms = 'triangule';

  colors: Colors;

  constructor(a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides of the triangle must be positive numbers.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The values ​​provided do not form a valid triangle.');
    }
  }

  getArea(): number {
    const s = (a + b + c) / 2;

    const areaTriangle = Math.sqrt(
      s * (s - a) * (s - b) * (s - c),
    );

    return Math.round(areaTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  forms: Forms = 'circle';

  colors: Colors;

  constructor(raio: number) {
    if (raio <= 0) {
      throw new Error('The radius must be a positive number.');
    }
  }

  getArea(): number {
    const areaCircle = Math.PI * Math.pow(raio, 2);

    return Math.round(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  forms: Forms = 'rectangle';

  colors: Colors;

  constructor(base: number, heigth: number) {
    if (base <= 0 || heigth <= 0) {
      throw new Error('The base and height must be positive numbers.');
    }
  }

  getArea(): number {
    const areaRectangle = base * heigth;

    return Math.round(areaRectangle * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `${figure.colors} ${figure.forms} ${figure.getArea()}`;
}

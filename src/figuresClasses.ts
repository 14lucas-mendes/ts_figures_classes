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

  private a: number;

  private b: number;

  private c: number;

  constructor(a: number, b: number, c: number, color: Colors) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides of the triangle must be positive numbers.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The values ​​provided do not form a valid triangle.');
    }

    this.a = a;
    this.b = b;
    this.c = c;

    this.colors = color;
  }
  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const areaTriangle = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.round(areaTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  forms: Forms = 'circle';

  colors: Colors;

  private raio: number;

  constructor(raio: number, color: Colors) {
    if (raio <= 0) {
      throw new Error('The radius must be a positive number.');
    }

    this.raio = raio;
    this.colors = color;
  }

  getArea(): number {
    const areaCircle = Math.PI * Math.pow(this.raio, 2);

    return Math.round(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  forms: Forms = 'rectangle';

  colors: Colors;

  private base: number;

  private heigth: number;

  constructor(base: number, heigth: number, color: Colors) {
    if (base <= 0 || heigth <= 0) {
      throw new Error('The base and height must be positive numbers.');
    }

    this.base = base;
    this.heigth = heigth;
    this.colors = color;
  }

  getArea(): number {
    const areaRectangle = this.base * this.heigth;

    return Math.round(areaRectangle * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `Form: ${figure.forms}, Color: ${figure.colors}, Area: ${figure.getArea()}`;
}

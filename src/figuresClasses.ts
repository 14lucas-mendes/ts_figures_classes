type Forms = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  forms: Forms;
  colors: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  public forms: Forms = 'triangle';
  public colors: Colors;

  constructor(
    public a: number,
    public b: number,
    public c: number,
    color: Colors
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides of the triangle must be positive numbers.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The values provided do not form a valid triangle.');
    }

    this.colors = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const areaTriangle = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Math.round(areaTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  public forms: Forms = 'circle';
  public colors: Colors;

  constructor(public radius: number, color: Colors) {
    if (radius <= 0) {
      throw new Error('The radius must be a positive number.');
    }
    this.colors = color;
  }

  getArea(): number {
    const areaCircle = Math.PI * Math.pow(this.radius, 2);
    return Math.round(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public forms: Forms = 'rectangle';
  public colors: Colors;

  constructor(public base: number, public height: number, color: Colors) {
    if (base <= 0 || height <= 0) {
      throw new Error('The base and height must be positive numbers.');
    }
    this.colors = color;
  }

  getArea(): number {
    const areaRectangle = this.base * this.height;
    return Math.round(areaRectangle * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `${figure.colors} ${figure.forms}-${figure.getArea()}`;
}

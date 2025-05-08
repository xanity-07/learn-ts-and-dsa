interface Coordinates {
  x: number;
  y: number;
}
function parseCoords(obj: Coordinates): Coordinates;
function parseCoords(str: string): Coordinates;
function parseCoords(x: number, y: number): Coordinates;
function parseCoords(arg1: unknown, arg2?: unknown): Coordinates {
  let coords: Coordinates = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === 'object' && arg1 !== null && 'x' in arg1 && 'y' in arg1) {
    coords = {
      ...(arg1 as Coordinates),
    };
  } else if (typeof arg1 === 'string') {
    (arg1 as string).split(',').forEach((str) => {
      const [key, value] = str.split(':');
      coords[key as 'x' | 'y'] = parseInt(value);
    });
  } else {
    coords = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coords;
}

console.log(parseCoords({ x: 130, y: -723 }));
console.log(parseCoords('x:301,y:-102'));
console.log(parseCoords(-123, -862));

interface MovieDetails {
  readonly name: string;
  rating: number;
  printMovieInfo: (
    name: string,
    price: number,
    rating: number
  ) => string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movie1: MovieGenre = {
  genre: 'Action',
  name: 'Intersteller',
  rating: 9.8,
  printMovieInfo: function (
    name: string,
    price: number,
    rating: number
  ): string | number {
    if (!movie1.name) return 'No name in movie1 pass one';
    if (!movie1.rating) return 'No rating in movie1 pass one';
    return `Movie name: ${name}, Price: $${price}, Rating: ${rating}`;
  },
};

console.log(movie1.printMovieInfo(movie1.name, 23, movie1.rating));

//// * Declaration merging

// Original
interface Car {
  brand: string;
  start(): void;
}

// Declaration merging
interface Car {
  model: string;
  stop(): void;
}

const myCar: Car = {
  brand: 'Audi',
  model: 'R8',
  start() {
    console.log('Car starting...');
  },
  stop() {
    console.log('Car stopping...');
  },
};

console.log(myCar.brand, myCar.model);

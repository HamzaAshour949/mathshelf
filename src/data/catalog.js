// The shelf. Everything on the site comes from this one file.
// `by` says who is behind a resource: 'picked' (found and chosen by Mr. Hamza: "Mr. Hamza's pick")
// or 'made' (designed and built by Hamza Ashour).
// Lesson names, game names and video titles stay in English in every language.
// Cognito is the favourite channel: it is used wherever its video covers the objective.

export const YEARS = [7, 8, 9, 10];

const video = (id, title, channel, start) => ({
  id, title, channel, by: 'picked', ...(start ? { start } : {}),
});

// Cognito's powers series. Year 9 (1.2, 1.3) and Year 10 (2.2) both use it.
const POWERS = {
  intro: video('ZLlwb4syPx4', 'Introduction to Powers/Indices & 3 Basic Rules', 'Cognito'),
  multDiv: video('tHCM6qNdVSc', 'How to Multiply and Divide Numbers With Powers', 'Cognito'),
  power: video('83K4uW50HRU', 'How to Raise One Power to Another Power', 'Cognito'),
  fraction: video('RkFurqc0HTk', 'What to do when a Fraction has a Power', 'Cognito'),
  negative: video('FvRDjFHg0E8', 'What do you do with Negative Powers?', 'Cognito'),
  fractional: video('DvNYkbafpIY', 'What to do when Powers are Fractions', 'Cognito', 7),
};
const bodmas = video('70cAYYCJBuQ', 'How to use BODMAS (Order of Operations)', 'Cognito');

export const CATALOG = {
  7: {
    units: [
      {
        name: 'Unit 2',
        lessons: [
          {
            code: '2.1',
            title: 'Rules of divisibility',
            videos: [
              video('Df9h5t64NlQ', 'Divisibility tests for 2, 3, 4, 5, 6, 9, 10', 'Khan Academy'),
            ],
          },
          {
            code: '2.2',
            title: 'Factors, multiples and primes',
            videos: [
              video('PrSf78pnTyE', 'How to find Multiples and Factors', 'Cognito'),
              video('GjzKpryaTYk', 'What are Prime Numbers and Composite Numbers?', 'Cognito'),
              video('1F9CTS3aH9c', 'How to find the Highest Common Factor', 'Cognito'),
              video('RMJs_I9Nydw', 'How to find the Lowest Common Multiple (LCM)', 'Cognito'),
            ],
          },
          {
            code: '2.3',
            title: 'Positive and negative numbers',
            videos: [
              video('VW6UrPKPInA', 'Ordering negative numbers', 'Khan Academy'),
              video('NQSN00zL5gg', 'Adding and subtracting negative numbers', 'Khan Academy'),
            ],
          },
          {
            code: '2.4',
            title: 'Squares and square roots',
            videos: [
              video('B4zejSI8zho', 'Exponents and Square Roots', 'Math Antics'),
              video('yICR9PiW340', 'What are Square Roots?', 'Math with Mr. J'),
            ],
          },
          {
            code: '2.5',
            title: 'More powers and roots',
            videos: [
              video('Sjpkp8-0t1s', 'Square Roots and Cube Roots', 'Math with Mr. J'),
              video('NFcOa-DBJj0', 'How to Find the Square Root of a Number using Prime Factorisation', 'Sri Chaitanya Academy NEET'),
              video('8Ne9m1tjOqM', 'How to Find the Cube Root of a Number using the Prime Factorisation Method', 'Sri Chaitanya Academy NEET'),
              video('vZadmXOjozE', 'Finding the Side of a Square given the Area', 'Nabifroese Math Videos'),
              video('noxib87IKh4', 'How to Find the Side Length of a Cube when Given the Volume', 'Mr. Sal'),
            ],
          },
          {
            code: '2.6',
            title: 'Calculations',
            videos: [
              video('JTQ2Wh5E2js', 'How to Estimate in Maths', 'Cognito'),
              bodmas,
            ],
          },
        ],
      },
    ],
    games: [],
  },

  8: {
    units: [
      {
        name: 'Unit 2',
        lessons: [
          {
            code: '2.1',
            title: 'Solving one-step equations',
            videos: [
              video('9FuR91H8EVU', 'How to Solve Algebraic Equations (Part 1 of 3)', 'Cognito'),
              video('2REbsY4-S70', 'How to write one-step equations for word problems', 'Khan Academy'),
              video('Lz3VkLrDmhE', 'Forming equations', 'Corbettmaths'),
            ],
          },
          {
            code: '2.2',
            title: 'Solving two-step equations',
            videos: [
              video('PR1jgcArwWo', 'How to Solve Algebraic Equations (Part 2 of 3)', 'Cognito'),
              video('K282L0-T1jk', 'Solving word problems with Two-step Equations', 'MooMooMath and Science'),
              video('zG3uF7PV4kg', 'Solving Equations Using the Distributive Property (equations with brackets)', 'Math with Mr. J'),
            ],
          },
          {
            code: '2.3',
            title: 'More complex equations',
            videos: [
              video('zLXZ9JoOq84', 'How to Solve Algebraic Equations (Part 3 of 3)', 'Cognito'),
            ],
          },
          {
            code: '2.4',
            title: 'Working with formulae',
            videos: [
              video('6MfdfNtDCbs', 'Finding Ordered Pairs that Satisfy a Given Equation', 'Jason Lindow'),
              video('MaF27GdQJFY', 'What Are Formulas, And How Do I Use Them?', 'Cognito'),
            ],
          },
        ],
      },
    ],
    games: [],
  },

  9: {
    units: [
      {
        name: 'Unit 1',
        lessons: [
          {
            code: '1.1',
            title: 'STEM: Powers of 10',
            videos: [
              video('Xq4ySuqaf-A', 'Use and understand powers of 10 (1)', 'mahalodotcom', 53),
              video('6LG3aDd4WJY', 'Use and understand powers of 10 (2)', 'mahalodotcom'),
              video('54tag7XQFpw', 'Use the prefixes associated with powers of 10', 'Alom Shaha'),
              video('HH-yrNS80Cg', 'Effect of multiplying and dividing by any integer power of 10', 'Math with Mr. J'),
            ],
          },
          {
            code: '1.2',
            title: 'Calculating and estimating',
            videos: [
              POWERS.intro,
              POWERS.multDiv,
              video('-X0amVzMKFo', 'Round to a number of significant figures', 'Cognito'),
            ],
          },
          {
            code: '1.3',
            title: 'Indices',
            videos: [
              POWERS.power,
              POWERS.fraction,
              POWERS.negative,
              POWERS.fractional,
            ],
          },
          {
            code: '1.4',
            title: 'Standard form',
            videos: [
              video('H3ewmorcYjU', 'What is Standard Form', 'Cognito'),
              video('cW8e4KknHS8', 'How to Convert Number into Standard Form', 'Cognito'),
              video('M_kiJWaf2dc', 'Ordering standard form', 'Bright Maths'),
              video('u3FZaXs3hDE', 'How to Multiply and Divide in Standard Form', 'Cognito'),
              video('5iGgvtBDKKk', 'How to Add or Subtract Numbers in Standard Form', 'Cognito'),
            ],
          },
        ],
      },
      {
        name: 'Unit 2',
        lessons: [
          {
            code: '2.1',
            title: 'Surface area of prisms',
            videos: [
              video('s7GrS0b3FRw', 'Nets of 3D Shapes Explained', 'Minity Maths'),
              video('dCD02kuobnY', 'How to Find the Surface Area of a Rectangular Prism', 'Math with Mr. J'),
              video('918qWRjICbs', 'How to Find the Surface Area of a Triangular Prism', 'Math with Mr. J'),
            ],
          },
          {
            code: '2.2',
            title: 'Volume of prisms',
            videos: [
              video('_QdIzOVcjNI', 'How to Find the Volume of Cylinders & Prisms', 'Cognito'),
            ],
          },
          {
            code: '2.3',
            title: 'Circumference of a circle',
            videos: [
              video('pV2zMPKoNGY', 'Draw Circles Given the Radius or Diameter', 'Math Challengers'),
              video('X3ZyTM78ygk', 'How to find the Area and Circumference of a Circle', 'Cognito'),
              video('nDMpINuq1w0', 'What are Chords, Segments, Arcs and Sectors?', 'Cognito'),
            ],
          },
          {
            code: '2.4',
            title: 'Area of a circle',
            videos: [
              video('X3ZyTM78ygk', 'How to find the Area and Circumference of a Circle', 'Cognito'),
            ],
          },
          {
            code: '2.5',
            title: 'Cylinders',
            videos: [
              video('_QdIzOVcjNI', 'How to Find the Volume of Cylinders & Prisms', 'Cognito', 34),
              video('dNDbRbHNXFQ', 'How to Find the Surface Area of a Cylinder', 'Math with Mr. J'),
            ],
          },
          {
            code: '2.6',
            title: 'Pythagoras’ theorem',
            videos: [
              video('CnHgqfBSgco', 'Pythagoras’ Theorem And How To Use It', 'Cognito'),
              video('Z0AF2UHLVJ0', 'Pythagorean Theorem: Finding the Length of a Missing Leg', 'Math with Mr. J'),
            ],
          },
        ],
      },
    ],
    games: [
      {
        id: 'pythagorean-theorem',
        title: 'Pythagorean Theorem',
        by: 'made',
        blurb: 'games.pythagorean.desc',
        embed: 'games/pythagorean-theorem.html', // a single HTML file in public/games, shown unchanged
      },
    ],
  },

  10: {
    units: [
      {
        name: 'Unit 2',
        lessons: [
          {
            code: '2.1',
            title: 'Operations With Numbers',
            videos: [
              video('JXgduTLVjdg', 'Types of Numbers', 'Cognito'),
              video('vbPUS-0Wbv4', 'Classification of Numbers (Natural, Whole, Integers, Rational, Irrational, Real)', 'Nerdstudy'),
              video('0bZ2GcCTtCA', 'Basic Number Properties for Algebra', 'Professor Dave Explains'),
              bodmas,
            ],
          },
          {
            code: '2.2',
            title: 'Properties of Exponents',
            videos: [
              POWERS.intro,
              POWERS.multDiv,
              POWERS.power,
              POWERS.fraction,
              POWERS.negative,
              POWERS.fractional,
            ],
          },
          {
            code: '2.3',
            title: 'Introduction to Functions',
            videos: [
              video('DrEXTC6mIO8', 'Functions: Vertical Line Test, Ordered Pairs, Tables, Domain and Range', 'The Organic Chemistry Tutor'),
              video('_e0EdFGpcvc', 'Evaluating Functions (Intro to Function Notation)', 'Mario’s Math Tutoring'),
            ],
          },
          {
            code: '2.4',
            title: 'Operations With Functions',
            videos: [
              video('5934UqzXvKA', 'Operations with Functions: How to Add, Subtract, Multiply, or Divide Functions', 'MATHRoberg'),
              video('wUNWjd4bMmw', 'Introduction to function composition', 'Khan Academy'),
            ],
          },
          {
            code: '2.5',
            title: 'Inverses of Functions',
            videos: [
              video('-l7U3dEAGa4', 'How to Find the Inverse of a Function', 'NancyPi'),
              video('6u9Qh1Vi_Qw', 'Horizontal Line Test and One to One Functions', 'The Organic Chemistry Tutor'),
            ],
          },
          {
            code: '2.6',
            title: 'Special Functions',
            videos: [
              video('Uzw9tsGq2Pw', 'Graphing Piecewise Functions', 'The Organic Chemistry Tutor'),
              video('tHwpj9b4zZo', 'Graphing Step Functions', 'Mario’s Math Tutoring'),
              video('ld4UD98yHio', 'How To Graph Absolute Value Functions', 'The Organic Chemistry Tutor'),
            ],
          },
          {
            code: '2.7',
            title: 'A Preview of Transformations',
            videos: [
              video('MkP1LJR2PyM', 'Transforming Algebraic Functions: Shifting, Stretching, and Reflecting', 'Professor Dave Explains'),
              video('2S9LUinJ8-w', 'Function Transformations: Horizontal and Vertical Stretches and Compressions', 'Mathispower4u'),
            ],
          },
        ],
      },
    ],
    games: [],
  },
};

export function stats(year) {
  const d = CATALOG[year];
  let videos = 0;
  let lessons = 0;
  for (const u of d.units) for (const l of u.lessons) { lessons += 1; videos += l.videos.length; }
  return { videos, lessons, games: d.games.length };
}

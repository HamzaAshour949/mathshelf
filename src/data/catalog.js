// The shelf. Everything on the site comes from this one file.
// `by` says who is behind a resource: 'picked' (found and chosen by Mr. Hamza: "Mr. Hamza's pick")
// or 'made' (designed and built by Hamza Ashour).
// Lesson names, game names and video titles stay in English in every language.
// Term 1 = Units 1 to 4 (Year 10: chapters 1 to 4 of the Algebra 2 book).
// Cognito is the favourite channel: it is used wherever its video covers the objective.

export const YEARS = [7, 8, 9, 10];

const video = (id, title, channel, start) => ({
  id, title, channel, by: 'picked', ...(start ? { start } : {}),
});
const cognito = (id, title, start) => video(id, title, 'Cognito', start);

// Cognito videos that more than one lesson (or year) uses.
const C = {
  // numbers
  estimate: cognito('JTQ2Wh5E2js', 'How to Estimate in Maths'),
  bodmas: cognito('70cAYYCJBuQ', 'How to use BODMAS (Order of Operations)'),
  multFactors: cognito('PrSf78pnTyE', 'How to find Multiples and Factors'),
  primes: cognito('GjzKpryaTYk', 'What are Prime Numbers and Composite Numbers?'),
  hcf: cognito('1F9CTS3aH9c', 'How to find the Highest Common Factor'),
  lcm: cognito('RMJs_I9Nydw', 'How to find the Lowest Common Multiple (LCM)'),
  primeTrees: cognito('FL4MPqfbFbw', 'How to Use Prime Factor Trees to find Prime Factors'),
  types: cognito('JXgduTLVjdg', 'Types of Numbers'),
  // powers series
  pow1: cognito('ZLlwb4syPx4', 'Introduction to Powers/Indices & 3 Basic Rules'),
  pow2: cognito('tHCM6qNdVSc', 'How to Multiply and Divide Numbers With Powers'),
  pow3: cognito('83K4uW50HRU', 'How to Raise One Power to Another Power'),
  pow4: cognito('RkFurqc0HTk', 'What to do when a Fraction has a Power'),
  pow5: cognito('FvRDjFHg0E8', 'What do you do with Negative Powers?'),
  pow6: cognito('DvNYkbafpIY', 'What to do when Powers are Fractions', 7),
  // standard form
  sfMultDiv: cognito('u3FZaXs3hDE', 'How to Multiply and Divide in Standard Form'),
  sfAddSub: cognito('5iGgvtBDKKk', 'How to Add or Subtract Numbers in Standard Form'),
  // fractions
  fracSimplify: cognito('OfolhNzfVAk', 'Fractions Part 1 - How to Simplify Fractions'),
  fracMixed: cognito('BKnPKiSrUm8', 'What are Mixed Numbers and Improper Fractions & How to Convert Between Them'),
  fracMultDiv: cognito('qeWRewXB91g', 'How to Multiply and Divide Fractions'),
  fracAddSub: cognito('3fY1AqnrUhQ', 'How to Add and Subtract Fractions'),
  fracOf: cognito('T6uqFvTRgjk', 'Real Life Uses of Fractions - How to Find a Fraction of a Whole Number'),
  propConvert: cognito('rzKl-Nvaf6g', 'What are Proportions? How to Convert Between Fractions, Decimals and Percentages'),
  fracToDec: cognito('jfOGPDgMrp0', 'How to Convert Fractions to Decimals'),
  decToPct: cognito('u5f3pmZG_IU', 'How to Convert Decimals to Percentages'),
  decToFrac: cognito('oDF2p7Mpjsc', 'How to Convert Decimals to Fractions'),
  // algebra
  likeTerms: cognito('g9VIuFYB98g', 'How to Simplify Expressions by Collecting Like Terms'),
  simplify: cognito('honqw6r8uQY', 'How to Simplify Algebraic Expressions'),
  expand1: cognito('813YPh2SSnw', 'How to Expand Single Brackets'),
  expand2: cognito('Dvo1Q-yBBhk', 'How to Expand Double Brackets'),
  factorise: cognito('Cep2xcNQSVs', 'How to Factorise an Expression into a Bracket'),
  dots: cognito('JmyBxpYPIS0', 'What is Difference of Two Squares (DOTS)'),
  identities: cognito('5jXHWWtB_FE', 'How to Prove Algebraic Identities'),
  quad1: cognito('3kE_Q-JdlO4', 'Factorising Quadratics - Part 1 (When the x² Coefficient is 1)'),
  formulas: cognito('MaF27GdQJFY', 'What Are Formulas, And How Do I Use Them?'),
  eq1: cognito('9FuR91H8EVU', 'How to Solve Algebraic Equations (Part 1 of 3)'),
  eq2: cognito('PR1jgcArwWo', 'How to Solve Algebraic Equations (Part 2 of 3)'),
  eq3: cognito('zLXZ9JoOq84', 'How to Solve Algebraic Equations (Part 3 of 3)'),
  seqTypes: cognito('871OBfK5o2M', 'Types of Number Sequences - Arithmetic vs Geometric'),
  nthTerm: cognito('RAjTpz3yQ3Q', 'How to Write Expressions for the nth term of Arithmetic Sequences'),
  // geometry
  areaShapes: cognito('tN95TLKpmVQ', 'How to Find the Area of Rectangles, Parallelograms, Triangles and Trapeziums'),
  areaCompound: cognito('EoMPwuBBYq8', 'How to find the Area of Compound Shapes'),
  shapes3d: cognito('lEijwy3lrZ8', 'The Eight 3D Shapes You Need to Know - Vertices, Edges and Faces'),
  volCuboid: cognito('J3MyJmgypUc', 'Volumes of Cubes and Cuboids'),
  plans: cognito('WCwtVN7nKTE', '2D Projections Of 3D Objects'),
  scales: cognito('6XpBX-7cDPE', 'Using Scales on Maps and Scale Diagrams'),
  // graphs and lines
  plotTable: cognito('VM3i6-gvKSA', 'How to Plot a Straight Line Using a Table of Coordinates'),
  gradient: cognito('zVSq5b3PPfY', 'How to Find the Gradient of a Straight Line'),
  gradient2: cognito('T0g6M0YlXvk', 'How to Find the Gradient Using the Coordinates of Two Points'),
  intercepts: cognito('mhO_ANLBKXo', 'Plotting a Line by Finding Where it Crosses the Axes'),
  ymxc: cognito('nUk47WSiS30', 'What on Earth is y = mx + c'),
  lineEq: cognito('ys0Dxj-jKTk', 'How to Find the Equation of a Straight Line (y = mx + c)'),
  lineEq2: cognito('UdHaBsfatxc', 'Finding the Equation of a Straight Line From 2 Sets of Coordinates'),
  directProp: cognito('z9JlSDzSy3c', 'What Does Directly Proportional Mean?'),
  directEq: cognito('eGKT1EFseJc', 'How to Write Algebraic Expressions for Directly Proportional Relationships'),
  ineq1: cognito('e_tY6X5PwWw', 'What are Inequalities?'),
  ineq2: cognito('u-YNzmlZWeg', 'Solving Algebraic Inequalities with 1 Inequality Sign'),
  ineq3: cognito('L_AfY1Bqosk', 'Solving Algebraic Inequalities with 2 Inequality Signs'),
  ineqGraph: cognito('b9ODSx3RJAE', 'Solving Inequalities by Plotting them on a Graph'),
  simul: cognito('N7Zk-FQ6YeA', 'What Are Simultaneous Equations'),
  simulGraph: cognito('3G8uFHEdqH0', 'How to Solve Simultaneous Equations Using Graphs'),
  simulElim: cognito('68hMhae269k', 'How to Solve Simultaneous Equations - Using the Elimination Technique'),
};

export const CATALOG = {
  /* ---------------------------------------------------------------- Year 7 */
  7: {
    units: [
      {
        name: 'Unit 1',
        lessons: [
          {
            code: '1.1',
            title: 'Averages and range',
            videos: [
              video('e3uY2LraXts', 'Mean, Median, Mode, and Range', 'Math with Mr. J'),
              video('g3iU9Oa4fps', 'Comparing 2 Sets of Data using the Mean and Range', 'TLMaths'),
              video('qpbaglogObM', 'How to find a missing value given the mean', 'Khan Academy'),
            ],
          },
          {
            code: '1.2',
            title: 'More averages and range',
            videos: [
              video('2YtYsaKelmY', 'How to Make a Grouped Frequency Table', 'Math with Mr. J'),
              video('fHX7myclXyk', 'How to Construct a Histogram from a Frequency Distribution Table', 'Whats Up Dude'),
            ],
          },
          {
            code: '1.3',
            title: 'Two-way tables and bar charts',
            videos: [
              video('U785Y-QI-K8', 'Two Way Tables', 'Corbettmaths'),
              video('Em4-HVv6gH4', 'Dual Bar Charts', 'Corbettmaths'),
              video('EWUHQ4sXD1I', 'Composite Bar Charts', 'Corbettmaths'),
            ],
          },
          {
            code: '1.4',
            title: 'More graphs and tables 1',
            videos: [
              video('E1fYceXHIr4', 'Line Graphs', 'Corbettmaths'),
              video('E91bGT9BjYk', 'How to spot a misleading graph', 'TED-Ed'),
            ],
          },
          {
            code: '1.5',
            title: 'More graphs and tables 2',
            videos: [
              video('TfkNkrKMF5c', 'Excel Quick and Simple Charts Tutorial', 'Technology for Teachers and Students'),
              video('pxIDuag7Np8', 'How to Make Charts in Google Sheets for Teachers and Students', 'Jake Richards'),
              video('o7F-tbBl_hA', 'How To Choose The Right Graph (Types of Graphs and When To Use Them)', 'UNDATABLE'),
              video('LEXbMW-Amao', 'Drawing Bar Charts', 'Corbettmaths'),
              video('sdMT6iasnYQ', 'Drawing Pie Charts', 'Corbettmaths'),
            ],
          },
        ],
      },
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
            videos: [C.multFactors, C.primes, C.hcf, C.lcm],
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
            videos: [C.estimate, C.bodmas],
          },
        ],
      },
      {
        name: 'Unit 3',
        lessons: [
          {
            code: '3.1',
            title: 'Simplifying algebraic expressions',
            videos: [C.likeTerms],
          },
          {
            code: '3.2',
            title: 'Writing algebraic expressions',
            videos: [
              video('C_KffdI34ZU', 'How to write algebraic expressions from word problems', 'Khan Academy'),
            ],
          },
          {
            code: '3.3',
            title: 'Using formulae',
            videos: [
              C.formulas,
              video('XJmXvZdRRNQ', 'Algebra Substitution', 'JEDMATHS'),
            ],
          },
          {
            code: '3.4',
            title: 'Writing formulae',
            videos: [
              video('gn91zRbHRrc', 'Forming Algebraic Expressions', 'Corbettmaths'),
            ],
          },
          {
            code: '3.5',
            title: 'Brackets and formulae',
            videos: [C.expand1],
          },
        ],
      },
      {
        name: 'Unit 4',
        lessons: [
          {
            code: '4.1',
            title: 'Working with fractions',
            videos: [
              C.fracSimplify,
              video('u_QTuWj107o', 'Comparing Fractions', 'Math with Mr. J'),
              C.fracOf,
            ],
          },
          {
            code: '4.2',
            title: 'Adding and subtracting fractions',
            videos: [C.fracMixed, C.fracAddSub],
          },
          {
            code: '4.3',
            title: 'Fractions, decimals and percentages',
            videos: [C.propConvert, C.fracToDec, C.decToPct, C.decToFrac],
          },
          {
            code: '4.4',
            title: 'Multiplying by a fraction',
            videos: [C.fracMultDiv],
          },
          {
            code: '4.5',
            title: 'Working with mixed numbers',
            videos: [C.fracAddSub, C.fracMultDiv],
          },
        ],
      },
    ],
    games: [],
  },

  /* ---------------------------------------------------------------- Year 8 */
  8: {
    units: [
      {
        name: 'Unit 1',
        lessons: [
          {
            code: '1.1',
            title: 'Calculating with negative integers',
            videos: [
              video('NQSN00zL5gg', 'Adding and subtracting negative numbers', 'Khan Academy'),
              video('K_tPbVPfHgk', 'Integer Multiplication & Division', 'Math Antics'),
            ],
          },
          {
            code: '1.2',
            title: 'Prime factor decomposition',
            videos: [C.primeTrees, C.hcf, C.lcm],
          },
          {
            code: '1.3',
            title: 'Using indices',
            videos: [C.pow1, C.pow2],
          },
          {
            code: '1.4',
            title: 'Priority of operations',
            videos: [C.bodmas],
          },
        ],
      },
      {
        name: 'Unit 2',
        lessons: [
          {
            code: '2.1',
            title: 'Solving one-step equations',
            videos: [
              C.eq1,
              video('2REbsY4-S70', 'How to write one-step equations for word problems', 'Khan Academy'),
              video('Lz3VkLrDmhE', 'Forming equations', 'Corbettmaths'),
            ],
          },
          {
            code: '2.2',
            title: 'Solving two-step equations',
            videos: [
              C.eq2,
              video('K282L0-T1jk', 'Solving word problems with Two-step Equations', 'MooMooMath and Science'),
              video('zG3uF7PV4kg', 'Solving Equations Using the Distributive Property (equations with brackets)', 'Math with Mr. J'),
            ],
          },
          {
            code: '2.3',
            title: 'More complex equations',
            videos: [C.eq3],
          },
          {
            code: '2.4',
            title: 'Working with formulae',
            videos: [
              video('6MfdfNtDCbs', 'Finding Ordered Pairs that Satisfy a Given Equation', 'Jason Lindow'),
              C.formulas,
            ],
          },
        ],
      },
      {
        name: 'Unit 3',
        lessons: [
          {
            code: '3.1',
            title: 'Simplifying expressions',
            videos: [C.simplify],
          },
          {
            code: '3.2',
            title: 'More simplifying',
            videos: [C.pow2, C.pow3, C.identities],
          },
          {
            code: '3.3',
            title: 'Factorising expressions',
            videos: [C.factorise],
          },
          {
            code: '3.4',
            title: 'Expanding and factorising expressions',
            videos: [C.expand1, C.factorise],
          },
          {
            code: '3.5',
            title: 'Substituting and solving',
            videos: [
              video('XJmXvZdRRNQ', 'Algebra Substitution', 'JEDMATHS'),
              video('Lz3VkLrDmhE', 'Forming equations', 'Corbettmaths'),
            ],
          },
        ],
      },
      {
        name: 'Unit 4',
        lessons: [
          {
            code: '4.1',
            title: 'Area of triangles, parallelograms and trapezia',
            videos: [C.areaShapes],
          },
          {
            code: '4.2',
            title: 'Area of compound shapes',
            videos: [C.areaCompound],
          },
          {
            code: '4.3',
            title: 'Properties of 3D solids',
            videos: [
              video('s7GrS0b3FRw', 'Nets of 3D Shapes Explained', 'Minity Maths'),
              C.shapes3d,
            ],
          },
          {
            code: '4.4',
            title: 'Surface area',
            videos: [
              video('NPFSV6nEK_Q', 'How to Find the Surface Area of a Cube', 'Math with Mr. J'),
              video('dCD02kuobnY', 'How to Find the Surface Area of a Rectangular Prism', 'Math with Mr. J'),
            ],
          },
          {
            code: '4.5',
            title: 'Volume',
            videos: [
              C.volCuboid,
              video('luDoyp2G-YM', 'Understanding mL (millilitre), Litre, & Cubic Centimetre', 'Very Easy Learning'),
              video('mNGwo28SmHM', 'Conversions: cm3, liters, and ml', 'CK-12 Foundation'),
            ],
          },
          {
            code: '4.6',
            title: 'STEM: Measures of area and volume',
            videos: [
              video('nv26rIqbc4g', 'Converting Metric Units of Area', 'Corbettmaths'),
              video('ylehgnMC1gw', 'How To Convert Cubic Centimeters to Cubic Meters', 'The Organic Chemistry Tutor'),
            ],
          },
          {
            code: '4.7',
            title: 'Plans and elevations',
            videos: [C.plans],
          },
          {
            code: '4.8',
            title: 'Solving problems with 3D shapes and measures',
            videos: [
              video('mB1jlO-BwGM', 'Volume and Surface Area of Cuboids', '1st Class Maths'),
            ],
          },
        ],
      },
    ],
    games: [
      {
        id: 'jelly-terms',
        title: 'Jelly Terms',
        by: 'made',
        blurb: 'games.jelly.desc',
        embed: 'games/jelly-terms.html',
      },
    ],
  },

  /* ---------------------------------------------------------------- Year 9 */
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
              C.pow1,
              C.pow2,
              cognito('-X0amVzMKFo', 'Round to a number of significant figures'),
            ],
          },
          {
            code: '1.3',
            title: 'Indices',
            videos: [C.pow3, C.pow4, C.pow5, C.pow6],
          },
          {
            code: '1.4',
            title: 'Standard form',
            videos: [
              cognito('H3ewmorcYjU', 'What is Standard Form'),
              cognito('cW8e4KknHS8', 'How to Convert Number into Standard Form'),
              video('M_kiJWaf2dc', 'Ordering standard form', 'Bright Maths'),
            ],
          },
          {
            code: '1.5',
            title: 'STEM: Calculating with standard form',
            videos: [C.sfMultDiv, C.sfAddSub],
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
            videos: [cognito('_QdIzOVcjNI', 'How to Find the Volume of Cylinders & Prisms')],
          },
          {
            code: '2.3',
            title: 'Circumference of a circle',
            videos: [
              video('pV2zMPKoNGY', 'Draw Circles Given the Radius or Diameter', 'Math Challengers'),
              cognito('X3ZyTM78ygk', 'How to find the Area and Circumference of a Circle'),
              cognito('nDMpINuq1w0', 'What are Chords, Segments, Arcs and Sectors?'),
            ],
          },
          {
            code: '2.4',
            title: 'Area of a circle',
            videos: [cognito('X3ZyTM78ygk', 'How to find the Area and Circumference of a Circle')],
          },
          {
            code: '2.5',
            title: 'Cylinders',
            videos: [
              cognito('_QdIzOVcjNI', 'How to Find the Volume of Cylinders & Prisms', 34),
              video('dNDbRbHNXFQ', 'How to Find the Surface Area of a Cylinder', 'Math with Mr. J'),
            ],
          },
          {
            code: '2.6',
            title: 'Pythagoras’ theorem',
            videos: [
              cognito('CnHgqfBSgco', 'Pythagoras’ Theorem And How To Use It'),
              video('Z0AF2UHLVJ0', 'Pythagorean Theorem: Finding the Length of a Missing Leg', 'Math with Mr. J'),
            ],
          },
        ],
      },
      {
        name: 'Unit 3',
        lessons: [
          {
            code: '3.1',
            title: 'Arithmetic and quadratic sequences',
            videos: [
              C.nthTerm,
              video('f6I8EAzvrTQ', 'Quadratic Number Sequences: How To Work Out The First 3 Terms From The Quadratic nth Term', 'Maths Mark'),
            ],
          },
          {
            code: '3.2',
            title: 'Geometric sequences',
            videos: [C.seqTypes],
          },
          {
            code: '3.3',
            title: 'Expanding',
            videos: [
              C.expand2,
              video('jbF1Tm__dq4', 'Expand & Simplify brackets, one squared', 'Maths with Jay'),
              C.dots,
            ],
          },
          {
            code: '3.4',
            title: 'Factorising',
            videos: [C.quad1],
          },
          {
            code: '3.5',
            title: 'Solving quadratic equations',
            videos: [
              video('aUKaxKwOUvU', 'Quadratic Equations: Solve by factoring', 'Brian McLogan'),
              video('BmkV-MYW8S4', 'Solving Quadratic Equations by Factorising', 'The Maths Prof'),
            ],
          },
        ],
      },
      {
        name: 'Unit 4',
        lessons: [
          {
            code: '4.1',
            title: 'Constructing shapes',
            videos: [
              video('umzzZYY6RRg', 'Draw accurate net, cuboid', 'Mr J Bletcher'),
              video('JmwRBPtLbhc', 'Constructing a Triangle given three sides', 'KSAMathematics'),
              video('NzcTKGxwCCE', 'Constructing Triangles', 'Lambeth Academy'),
            ],
          },
          {
            code: '4.2',
            title: 'Constructions 1',
            videos: [
              video('IQ35R6CWqd8', 'Constructing a Perpendicular Bisector', 'vinteachesmath'),
              video('qVe1M4iHHmA', 'Constructing a Perpendicular Line Through a Point (on the line)', 'vinteachesmath'),
              video('5bZLpHVIUyE', 'Constructing a Perpendicular Line Through a Point (off the line)', 'vinteachesmath'),
            ],
          },
          {
            code: '4.3',
            title: 'Constructions 2',
            videos: [
              video('VYbRcqXQ_W4', 'Angle Bisector: How to Construct Using Compass', 'Mario’s Math Tutoring'),
              C.scales,
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

  /* --------------------------------------------------------------- Year 10 */
  // Algebra 2: each chapter of the book is a unit here (Term 1 = chapters 1 to 4).
  10: {
    units: [
      {
        name: 'Unit 1',
        lessons: [
          {
            code: '1.1',
            title: 'Tables and Graphs of Linear Equations',
            videos: [
              C.plotTable,
              video('AZroE4fJqtQ', 'Recognizing linear functions', 'Khan Academy'),
            ],
          },
          {
            code: '1.2',
            title: 'Slopes and Intercepts',
            videos: [C.gradient, C.gradient2, C.intercepts, C.ymxc],
          },
          {
            code: '1.3',
            title: 'Linear Equations in Two Variables',
            videos: [
              C.lineEq,
              C.lineEq2,
              video('DhDtKR0VyLE', 'Writing an equation using point slope form given two points', 'Brian McLogan'),
              video('6CFE60iP2Ug', 'Standard form for linear equations', 'Khan Academy'),
            ],
          },
          {
            code: '1.4',
            title: 'Direct Variation and Proportion',
            videos: [C.directProp, C.directEq],
          },
          {
            code: '1.5',
            title: 'Scatter Plots and Least-Squares Lines',
            videos: [
              video('vg02s4CNEAg', 'Scatter Graphs: Introduction, Correlation, and Line of Best Fit', 'Minity Maths'),
              video('sVeNrDLhgnI', 'Least Squares Regression Line on the TI83 TI84 Calculator', 'Cody Tabbert'),
            ],
          },
          {
            code: '1.6',
            title: 'Introduction to Solving Equations',
            videos: [
              C.eq1,
              C.eq2,
              C.eq3,
              video('R0bGxNzgL2o', 'Finding The Point of Intersection of Two Linear Equations With & Without Graphing', 'The Organic Chemistry Tutor'),
            ],
          },
          {
            code: '1.7',
            title: 'Introduction to Solving Inequalities',
            videos: [C.ineq1, C.ineq2, C.ineq3],
          },
          {
            code: '1.8',
            title: 'Solving Absolute-Value Equations and Inequalities',
            videos: [
              video('_cHbhzQVd7Y', 'How To Solve Absolute Value Equations, Basic Introduction', 'The Organic Chemistry Tutor'),
              video('3LN0IDooaIE', 'Solving Absolute Value Equations and Inequalities', 'The Organic Chemistry Tutor'),
            ],
          },
        ],
      },
      {
        name: 'Unit 2',
        lessons: [
          {
            code: '2.1',
            title: 'Operations With Numbers',
            videos: [
              C.types,
              video('vbPUS-0Wbv4', 'Classification of Numbers (Natural, Whole, Integers, Rational, Irrational, Real)', 'Nerdstudy'),
              video('0bZ2GcCTtCA', 'Basic Number Properties for Algebra', 'Professor Dave Explains'),
              C.bodmas,
            ],
          },
          {
            code: '2.2',
            title: 'Properties of Exponents',
            videos: [C.pow1, C.pow2, C.pow3, C.pow4, C.pow5, C.pow6],
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
      {
        name: 'Unit 3',
        lessons: [
          {
            code: '3.1',
            title: 'Solving Systems by Graphing or Substitution',
            videos: [
              C.simul,
              C.simulGraph,
              video('uzyd_mIJaoc', 'The substitution method', 'Khan Academy'),
            ],
          },
          {
            code: '3.2',
            title: 'Solving Systems by Elimination',
            videos: [
              C.simulElim,
              video('bq5gDsEdN3Q', 'One Solution, No Solution, or Infinitely Many Solutions - Consistent & Inconsistent Systems', 'The Organic Chemistry Tutor'),
            ],
          },
          {
            code: '3.3',
            title: 'Linear Inequalities in Two Variables',
            videos: [
              C.ineqGraph,
              video('cskHdgwB5k8', 'How To Graph Linear Inequalities In Two Variables', 'The Organic Chemistry Tutor'),
            ],
          },
          {
            code: '3.4',
            title: 'Systems of Linear Inequalities',
            videos: [
              C.ineqGraph,
              video('Egu5DPSBxdk', 'Graph the Feasible Region of a System of Linear Inequalities', 'Mathispower4u'),
              video('FWbcKade3rw', 'Graphing Systems of Linear Inequalities', 'The Organic Chemistry Tutor'),
            ],
          },
          {
            code: '3.5',
            title: 'Linear Programming',
            videos: [
              video('0TD9EQcheZM', 'Linear Programming 1: Maximization - Extreme/Corner Points', 'Joshua Emmanuel'),
              video('Y7e7DCsDUMY', 'Linear Programming (Optimization): 2 Examples, Minimize & Maximize', 'Mario’s Math Tutoring'),
            ],
          },
          {
            code: '3.6',
            title: 'Parametric Equations',
            videos: [
              video('QaN_3TytT_U', 'Parametric Equations', 'Professor Dave Explains'),
              video('pvbyMXsDR3A', 'Parametric Equations: How to Eliminate the Parameter', 'Mario’s Math Tutoring'),
            ],
          },
        ],
      },
      {
        name: 'Unit 4',
        lessons: [
          {
            code: '4.1',
            title: 'Using Matrices to Represent Data',
            videos: [
              video('PPOIlLhsT6s', 'Representing data with matrices', 'Khan Academy'),
              video('lTIMC1wdj_U', 'Matrices: Dimensions, Add, Subtract, Scalar Multiplication', 'Mario’s Math Tutoring'),
            ],
          },
          {
            code: '4.2',
            title: 'Matrix Multiplication',
            videos: [
              video('2spTnAiQg4M', 'How To Multiply Matrices', 'The Organic Chemistry Tutor'),
              video('O1-9f1g0OsI', 'Defined and undefined matrix operations', 'Khan Academy'),
            ],
          },
          {
            code: '4.3',
            title: 'The Inverse of a Matrix',
            videos: [
              video('OU9sWHk_dlw', 'Finding the determinant of a 2x2 matrix', 'Khan Academy'),
              video('01c12NaUQDw', 'Inverse of a 2x2 matrix', 'Khan Academy'),
              video('3ROzG6n4yMc', 'Determinant of 3x3 Matrices, 2x2 Matrix', 'The Organic Chemistry Tutor'),
            ],
          },
          {
            code: '4.4',
            title: 'Solving Systems With Matrix Equations',
            videos: [
              video('Kn3Fk3uOR5Q', 'Inverse Matrices: Solving Systems of Equations', 'Mario’s Math Tutoring'),
              video('rMGgU7Ilk34', 'Solving a System Using the Matrix Equation, AX=B', 'James Elliott'),
            ],
          },
          {
            code: '4.5',
            title: 'Using Matrix Row Operations',
            videos: [
              video('prVPD0sTp-k', 'Gaussian Elimination in Mathematics: The easiest Method!', 'Whiteboard Math'),
              video('eDb6iugi6Uk', 'Gaussian Elimination & Row Echelon Form', 'The Organic Chemistry Tutor'),
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

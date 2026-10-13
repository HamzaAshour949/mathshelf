// The shelf. Everything on the site comes from this one file.
// `by` says who is behind a resource: 'collected' (found and chosen by Mr. Hamza Ashour)
// or 'made' (designed and built by Hamza Ashour).
// Lesson names and game names stay in English in every language.

export const YEARS = [7, 8, 9, 10];

const video = (id, title, channel, start) => ({
  id, title, channel, by: 'collected', ...(start ? { start } : {}),
});

const EMPTY = { units: [], games: [] };

export const CATALOG = {
  7: EMPTY,
  8: EMPTY,
  10: EMPTY,
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
              video('ZLlwb4syPx4', 'Introduction to Powers/Indices & 3 Basic Rules', 'Cognito'),
              video('tHCM6qNdVSc', 'How to Multiply and Divide Numbers With Powers', 'Cognito'),
              video('-X0amVzMKFo', 'Round to a number of significant figures', 'Cognito'),
            ],
          },
          {
            code: '1.3',
            title: 'Indices',
            videos: [
              video('83K4uW50HRU', 'How to Raise One Power to Another Power', 'Cognito'),
              video('RkFurqc0HTk', 'What to do when a Fraction has a Power', 'Cognito'),
              video('FvRDjFHg0E8', 'What do you do with Negative Powers?', 'Cognito'),
              video('DvNYkbafpIY', 'What to do when Powers are Fractions', 'Cognito', 7),
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
};

export function stats(year) {
  const d = CATALOG[year];
  let videos = 0;
  let lessons = 0;
  for (const u of d.units) for (const l of u.lessons) { lessons += 1; videos += l.videos.length; }
  return { videos, lessons, games: d.games.length };
}

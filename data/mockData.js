// Bütün məlumat burada. Komponentlər bunu props ilə alır.
// Sabah API gələndə yalnız bu faylı fetch ilə əvəz etmək kifayətdir.
// Şəkil yolları public/images/ qovluğuna aiddir.

// Hero slider — 5 slayd
export const heroMovies = [
  { id: 'h1', type: 'Movie', title: 'Star Wars: The Force Awakens', releaseYear: 2023, durationMinutes: 160, genres: ['Fantasy', 'Action'], description: 'The third season of the American television series The Mandalorian stars Pedro Pascal as the title character...', backdropImage: '/images/backdrops/star-wars.jpg', trailerUrl: 'https://www.youtube.com/' },
  { id: 'h2', type: 'Movie', title: 'Air; Courting A Legend', releaseYear: 2022, durationMinutes: 160, genres: ['Superhero', 'Action'], description: 'Placeholder: Figma-dakı real təsviri bura yazın.', backdropImage: '/images/backdrops/air.jpg', trailerUrl: 'https://www.youtube.com/' },
  { id: 'h3', type: 'Movie', title: 'John Wick: Chapter 4', releaseYear: 2023, durationMinutes: 169, genres: ['Action', 'Thriller'], description: 'Placeholder: Figma-dakı real təsviri bura yazın.', backdropImage: '/images/backdrops/john-wick-4.jpg', trailerUrl: 'https://www.youtube.com/' },
  { id: 'h4', type: 'Movie', title: 'Gundala', releaseYear: 2022, durationMinutes: 124, genres: ['Superhero', 'Action'], description: 'Placeholder: Figma-dakı real təsviri bura yazın.', backdropImage: '/images/backdrops/gundala.jpg', trailerUrl: 'https://www.youtube.com/' },
  { id: 'h5', type: 'Movie', title: 'The Flash', releaseYear: 2023, durationMinutes: 144, genres: ['Action', 'Superhero'], description: 'Placeholder: Figma-dakı real təsviri bura yazın.', backdropImage: '/images/backdrops/the-flash.jpg', trailerUrl: 'https://www.youtube.com/' },
];

// Platform loqoları
export const platforms = [
  { id: 'p1', name: 'Disney', logoUrl: '/images/platforms/disney.png' },
  { id: 'p2', name: 'Netflix', logoUrl: '/images/platforms/netflix.png' },
  { id: 'p3', name: 'HBO Max', logoUrl: '/images/platforms/hbo-max.png' },
  { id: 'p4', name: 'Pixar', logoUrl: '/images/platforms/pixar.png' },
  { id: 'p5', name: 'Marvel', logoUrl: '/images/platforms/marvel.png' },
  { id: 'p6', name: 'Star Wars', logoUrl: '/images/platforms/star-wars.png' },
  { id: 'p7', name: 'National Geographic', logoUrl: '/images/platforms/natgeo.png' },
];

// Kart sıraları — hamısı eyni formadadır (MovieCard üçün)
export const justRelease = [
  { id: 'jr1', title: 'Enola Holmes 2', posterImage: '/images/posters/enola-holmes-2.jpg', type: 'Movie', rating: 4.8, genres: ['Action'] },
  { id: 'jr2', title: "Satan's slaves", posterImage: '/images/posters/satans-slaves.jpg', type: 'Movie', rating: 4.6, genres: ['Horror'] },
  { id: 'jr3', title: 'The Flash', posterImage: '/images/posters/the-flash.jpg', type: 'Movie', rating: 4.6, genres: ['Mystery'] },
  { id: 'jr4', title: 'Weak Hero', posterImage: '/images/posters/weak-hero.jpg', type: 'Series', rating: 4.6, genres: ['Action', 'Drama'], seasonLabel: 'Season 1' },
  { id: 'jr5', title: 'Wonder Woman', posterImage: '/images/posters/wonder-woman.jpg', type: 'Movie', rating: 4.6, genres: ['Action'] },
];

export const movies = [
  { id: 'm1', title: 'Antman & The Wasp Quantumania', posterImage: '/images/posters/antman.jpg', type: 'Movie', rating: 4.6, genres: ['Action'] },
  { id: 'm2', title: 'Air; Courting A Legend', posterImage: '/images/posters/air.jpg', type: 'Movie', rating: 4.6, genres: ['Action'] },
  { id: 'm3', title: 'John Wick; Chapter 4', posterImage: '/images/posters/john-wick-4.jpg', type: 'Movie', rating: 4.9, genres: ['Action'] },
  { id: 'm4', title: 'Mechamato Movie', posterImage: '/images/posters/mechamato.jpg', type: 'Movie', rating: 4.6, genres: ['Action'] },
  { id: 'm5', title: 'Super Mario Bros.', posterImage: '/images/posters/super-mario.jpg', type: 'Movie', rating: 4.6, genres: ['Action'] },
];

export const series = [
  { id: 's1', title: 'Wednesday Season 1', posterImage: '/images/posters/wednesday.jpg', type: 'Series', rating: 4.6, genres: ['Action'], seasonLabel: 'Season 1' },
  { id: 's2', title: 'Beef Series', posterImage: '/images/posters/beef.jpg', type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 's3', title: 'Valhalla Murders Series', posterImage: '/images/posters/valhalla.jpg', type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 's4', title: 'The Witcher Volume 2', posterImage: '/images/posters/witcher.jpg', type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 's5', title: 'The Foreigner', posterImage: '/images/posters/foreigner.jpg', type: 'Series', rating: 4.6, genres: ['Action'] },
];

export const koreanSeries = [
  { id: 'k1', title: 'Toxic', posterImage: '/images/posters/toxic.jpg', type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 'k2', title: 'Insider', posterImage: '/images/posters/insider.jpg', type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 'k3', title: 'Race Season 1', posterImage: '/images/posters/race.jpg', type: 'Series', rating: 4.6, genres: ['Action'], seasonLabel: 'Season 1' },
  { id: 'k4', title: 'Ghost Doctor', posterImage: '/images/posters/ghost-doctor.jpg', type: 'Series', rating: 4.6, genres: ['Action'] },
  { id: 'k5', title: 'The Pirates: The Last Royal Treasure', posterImage: '/images/posters/pirates.jpg', type: 'Series', rating: 4.6, genres: ['Action'] },
];

// Popular of the week — 1–4 sıra
export const popularWeekMovies = [
  { rank: 1, id: 'pw1', title: 'The Last Of Us', posterImage: '/images/posters/the-last-of-us.jpg', ageRating: 'PG-13', genres: ['Horror', 'Thriller'], rating: 4.3, type: 'Movie' },
  { rank: 2, id: 'pw2', title: 'Sri Asih', posterImage: '/images/posters/sri-asih.jpg', ageRating: 'PG-13', genres: ['Superhero', 'Action'], rating: 4.9, type: 'Movie' },
  { rank: 3, id: 'pw3', title: 'The Flash', posterImage: '/images/posters/the-flash.jpg', ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 3.7, type: 'Movie' },
  { rank: 4, id: 'pw4', title: 'Oppenheimer', posterImage: '/images/posters/oppenheimer.jpg', ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.4, type: 'Movie' },
];

// Featured — sağdakı kartlar; ilk film defolt seçilir
export const featuredMovies = [
  { id: 'f1', title: 'Air; Courting A Legend', tagline: '#1 in Australia', rating: 4.6, durationMinutes: 160, releaseYear: 2022, genres: ['Superhero', 'Action'], description: 'When international arms dealer and criminal mastermind Elena Federova orchestrates seven simultaneous New York City bank heists, an outcast agent must act.', posterImage: '/images/posters/air.jpg', backdropImage: '/images/backdrops/air.jpg' },
  { id: 'f2', title: 'The Last Of Us', tagline: 'Trending now', rating: 4.6, durationMinutes: 60, releaseYear: 2023, genres: ['Mystery', 'Drama'], description: 'Twenty years after a fungal outbreak, a hardened survivor is hired to smuggle a girl across a ravaged America.', posterImage: '/images/posters/the-last-of-us.jpg', backdropImage: '/images/backdrops/the-last-of-us.jpg' },
  { id: 'f3', title: "Satan's slaves", tagline: 'Trending now', rating: 4.6, durationMinutes: 107, releaseYear: 2022, genres: ['Horror'], description: 'A family is haunted by a mysterious presence after their mother dies, and the terror grows each night.', posterImage: '/images/posters/satans-slaves.jpg', backdropImage: '/images/backdrops/satans-slaves.jpg' },
  { id: 'f4', title: 'Enola Holmes 2', tagline: 'Trending now', rating: 4.8, durationMinutes: 129, releaseYear: 2022, genres: ['Action', 'Mystery'], description: 'Enola Holmes teams up with Sherlock to track down a missing girl and uncover a dangerous match factory plot.', posterImage: '/images/posters/enola-holmes-2.jpg', backdropImage: '/images/backdrops/enola-holmes-2.jpg' },
];

// Movies On Awards — dairəvi slider
export const awardsMovies = [
  { id: 'a1', title: 'Gundala', platformName: 'Prime Video', platformLogo: '/images/platforms/prime.png', label: 'Best Pictures', rating: 4.6, durationMinutes: 124, releaseYear: 2022, genres: ['Superhero', 'Action'], description: 'An Indonesian hero is born in a rain-soaked city, gaining lightning powers to fight corruption and crime.', backdropImage: '/images/backdrops/gundala.jpg' },
  { id: 'a2', title: 'Enola Holmes 2', platformName: 'Netflix', platformLogo: '/images/platforms/netflix.png', label: 'Best Pictures', rating: 4.8, durationMinutes: 129, releaseYear: 2022, genres: ['Action', 'Mystery'], description: 'Enola Holmes teams up with Sherlock to track down a missing girl and uncover a dangerous plot.', backdropImage: '/images/backdrops/enola-holmes-2.jpg' },
  { id: 'a3', title: 'The Last Of Us', platformName: 'HBO Max', platformLogo: '/images/platforms/hbo-max.png', label: 'Best Pictures', rating: 4.6, durationMinutes: 60, releaseYear: 2023, genres: ['Mystery', 'Drama'], description: 'A hardened survivor is hired to smuggle a girl across a ravaged America.', backdropImage: '/images/backdrops/the-last-of-us.jpg' },
];

// Fast və Live — hər biri 8 element (oxla 4-4 keçilir)
export const fastMovies = [
  { id: 'fa1', title: 'Oppenheimer', posterImage: '/images/posters/oppenheimer.jpg', ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.9, type: 'Movie' },
  { id: 'fa2', title: 'The End Movie', posterImage: '/images/posters/the-end.jpg', ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.8, type: 'Movie' },
  { id: 'fa3', title: 'The Flash', posterImage: '/images/posters/the-flash.jpg', ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.6, type: 'Movie' },
  { id: 'fa4', title: 'Fall', posterImage: '/images/posters/fall.jpg', ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.4, type: 'Movie' },
  { id: 'fa5', title: 'Gundala', posterImage: '/images/posters/gundala.jpg', ageRating: 'PG-13', genres: ['Superhero', 'Action'], rating: 4.6, type: 'Movie' },
  { id: 'fa6', title: 'Wonder Woman', posterImage: '/images/posters/wonder-woman.jpg', ageRating: 'PG-13', genres: ['Action'], rating: 4.6, type: 'Movie' },
  { id: 'fa7', title: 'Antman & The Wasp Quantumania', posterImage: '/images/posters/antman.jpg', ageRating: 'PG-13', genres: ['Action'], rating: 4.6, type: 'Movie' },
  { id: 'fa8', title: 'Super Mario Bros.', posterImage: '/images/posters/super-mario.jpg', ageRating: 'PG-13', genres: ['Action'], rating: 4.6, type: 'Movie' },
];

export const liveMovies = [
  { id: 'li1', title: 'Sonic 2', posterImage: '/images/posters/sonic-2.jpg', ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.9, type: 'Movie' },
  { id: 'li2', title: 'Pathaan', posterImage: '/images/posters/pathaan.jpg', ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.8, type: 'Movie' },
  { id: 'li3', title: 'Black Adam', posterImage: '/images/posters/black-adam.jpg', ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.6, type: 'Movie' },
  { id: 'li4', title: 'Indemnity', posterImage: '/images/posters/indemnity.jpg', ageRating: 'PG-13', genres: ['Comedy', 'Action'], rating: 4.4, type: 'Movie' },
  { id: 'li5', title: 'Mechamato Movie', posterImage: '/images/posters/mechamato.jpg', ageRating: 'PG-13', genres: ['Action'], rating: 4.6, type: 'Movie' },
  { id: 'li6', title: 'Enola Holmes 2', posterImage: '/images/posters/enola-holmes-2.jpg', ageRating: 'PG-13', genres: ['Action'], rating: 4.8, type: 'Movie' },
  { id: 'li7', title: 'Weak Hero', posterImage: '/images/posters/weak-hero.jpg', ageRating: 'PG-13', genres: ['Action', 'Drama'], rating: 4.6, type: 'Series' },
  { id: 'li8', title: "Satan's slaves", posterImage: '/images/posters/satans-slaves.jpg', ageRating: 'PG-13', genres: ['Horror'], rating: 4.6, type: 'Movie' },
];

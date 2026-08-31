class Movie{ 
    constructor(title, id, year, director, genre, ratingP, ratingMy, ratingMe, ratingK, guests) {
        this.title    = title;
        this.id       = id;
        this.year     = year;
        this.director = director;
        this.genre    = genre;
        this.ratingP  = ratingP;
        this.ratingMy = ratingMy;
        this.ratingMe = ratingMe;
        this.ratingK  = ratingK;
        this.ratingAvg = (ratingP + ratingMy + ratingMe + ratingK) / 4;
        this.guests   = guests;
        this.poster   = `posters/${this.id}`;
    }
};

      // Movies
const lotrF = new Movie('Lord of the Rings: The Fellowship of the Ring', 1, 2001, 'Peter Jackson', ['Adventure', 'Action', 'Fantasy'], 5, 5, 5, 5, 'None');
const lotrTT = new Movie('Lord of the Rings: The Two Towers', 2, 2002, 'Peter Jackson', ['Adventure', 'Action', 'Fantasy'], 5, 5, 5, 5, 'None');
const lotrRotT = new Movie('Lord of the Rings: The Return of the King', 3, 2003, 'Peter Jackson', ['Adventure', 'Action', 'Fantasy'], 5, 5, 5, 5, 'None');
const twilight = new Movie('Twilight', 4, 2008, 'Catherine Hardwicke', ['Drama', 'Fantasy', 'Romance'], 5, 5, 5, 3, 'None');
const twilightNM = new Movie('The Twilight Saga: New Moon', 5, 2009, 'Chris Weitz', ['Drama', 'Fantasy', 'Romance', 'Adventure'], 2, 3, 2, 3, 'None');
const twilightE = new Movie('The Twilight Saga: Eclipse', 6, 2010, 'David Slade', ['Drama', 'Fantasy', 'Romance', 'Adventure'], 3, 4, 4, 3, 'None');
const twilightBD1 = new Movie('The Twilight Saga: Breaking Dawn - Part 1', 7, 2011, 'Bill Condon', ['Drama', 'Fantasy', 'Romance', 'Adventure'], 3, 4, 5, 4, 'None');
const twilightBD2 = new Movie('The Twilight Saga: Breaking Dawn - Part 2', 8, 2012, 'Bill Condon', ['Drama', 'Fantasy', 'Romance', 'Adventure'], 5, 5, 5, 5, 'None');
const silenceLambs = new Movie('Silence of the Lambs', 9, 1991, 'Jonathan Demme', ['Crime', 'Thriller', 'Horror', 'Drama'], 5, 5, 4, 3, 'None');
const nachoLibre = new Movie('Nacho Libre', 10, 2006, 'Jared Hess', ['Family', 'Action', 'Comedy'], 5, 5, 4, 5, 'Lizzie');
const fantasticFox = new Movie('Fantastic Mr. Fox', 11, 2009, 'Wes Anderson', ['Comedy', 'Animation', 'Family', 'Adventure'], 3, 4, 4, 4, 'None') 
const donnieDarko = new Movie('Donnie Darko', 12, 2001, 'Richard Kelly', ['Drama', 'Fantasy', 'Mystery'], 4, 4, 4, 4, 'None');
const kabbieKushi = new Movie('Kabhii Khushi Kabhie Gham', 13, 2001, 'Karan Johar', ['Comedy', 'Drama'], 5, 5, 5, 5, 'None');
const suzume = new Movie('Suzume', 14, 2022, 'Makoto Shinkai', ['Fantasy', 'Animation', 'Adventure', 'Drama'], 3, 3, 4, 3, 'None')
const itsBegXmas = new Movie("It's Beginning to Look a Lot Like Christmas", 15, 2019, 'David Weaver', ['Romance', 'TV Movie'], 1, 4, 5, 3, 'None');
const campRock = new Movie('Camp Rock', 16, 2008, 'Matthew Diamon', ['Family', 'Music', 'TV Movie'], 3, 4, 4, 3, 'None');
const campRock2 = new Movie('Camp Rock 2: The Final Jam', 17, 2010, 'Paul Hoen', ['Family', 'Music', 'TV Movie'], 3, 3, 3, 4, 'None');

const movies = [lotrF, lotrTT, lotrRotT, twilight, twilightNM, twilightE, twilightBD1, twilightBD2, silenceLambs, nachoLibre, fantasticFox, donnieDarko, kabbieKushi, suzume, itsBegXmas, campRock, campRock2];

function getFilteredAndSorted() {
  const query = document.getElementById('filter-input').value.toLowerCase().trim();
  const sort  = document.getElementById('sort-select').value;

  let result = movies.filter(movie =>
    movie.title.toLowerCase().includes(query)           ||
    movie.director.toLowerCase().includes(query)        ||
    movie.genre.join(' ').toLowerCase().includes(query) ||
    movie.year.toString().includes(query)
  );

  if (sort === 'avg-desc') result.sort((a, b) => b.ratingAvg - a.ratingAvg);
  if (sort === 'avg-asc')  result.sort((a, b) => a.ratingAvg - b.ratingAvg);
  if (sort === 'year-desc') result.sort((a, b) => b.year - a.year);
  if (sort === 'year-asc')  result.sort((a, b) => a.year - b.year);

  return result;
}

function displayData(filteredMovies = movies) {
  const html = filteredMovies.map(item => `
    <div class="cardContainerParent">

        <h2>${item.title} (${item.id})</h2>

        <div class="cardContainerChild">
            <div class="cardImage">
                <img src="posters/${item.id}.jpg" alt="${item.title}">
            </div>

            <div class="cardDetails">
                <p>Directed by: ${item.director}</p>
                <p>Released: ${item.year}</p>
                <p>Genre: ${item.genre}</p>
                <p>Ratings:</p>
                <div class="ratings">
                    <p>Peter: ${item.ratingP}, Mya: ${item.ratingMy},</p>
                    <p>Meredith: ${item.ratingMe}, Kristine: ${item.ratingK}</p>
                </div>
                <p class="ratings-avg">Average Rating: ${item.ratingAvg}</p>
                <p>Guests: ${item.guests}</p>
            </div>
        </div>

    </div>
  `).join('');

  document.getElementById('display-movies').innerHTML = html || '<p>No movies found.</p>';
}

document.getElementById('filter-input').addEventListener('input', () => {
  displayData(getFilteredAndSorted());
});

document.getElementById('sort-select').addEventListener('change', () => {
  displayData(getFilteredAndSorted());
});

displayData();
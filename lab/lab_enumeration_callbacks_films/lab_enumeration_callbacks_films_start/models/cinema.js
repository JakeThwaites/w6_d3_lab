const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allFilmTitles = function () {
  let allTitles = [];
  this.films.map((film) => allTitles.push(film.title));
  return allTitles;
};

Cinema.prototype.getFilmByTitle = function(title) {
  let result;
  this.films.forEach((film) => {
    if (film.title === title) {
      result = film;
    };
  });
  return result;
};

Cinema.prototype.filterFilmsByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);

  // let allFilms = this.films
  // filmsOfGenre = allFilms.filter(film => film.genre === genre);
  // return filmsOfGenre;
};

Cinema.prototype.checkFilmsByYear = function(year) {
  // let number = this.films.reduce((accum, film) => {
  //   if (film.year === year) {
  //     accum ++;
  //   };
  // }, 0);
  // let result;
  // if (number) {
  //   result = true;
  // } else {
  //   result = false;
  // }
  // return result;

  let filmExists = false;

  this.films.forEach( (film) =>  {
    if (film.year === year) {
      filmExists = true;
    }
  })

  return filmExists;

};

module.exports = Cinema;

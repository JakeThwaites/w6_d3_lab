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

module.exports = Cinema;

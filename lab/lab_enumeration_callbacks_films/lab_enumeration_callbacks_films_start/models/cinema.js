const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allFilmTitles = function () {
  let allTitles = [];
  this.films.map((film) => allTitles.push(film.title));
  return allTitles;
};

module.exports = Cinema;

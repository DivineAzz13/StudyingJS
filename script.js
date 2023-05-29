let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

function askUserAboutFilm () {


  for (let i = 0; i < 2; i++) {
    let answer1 = prompt("Один из последних просмотренных фильмов?");
		let answer2 = prompt("На сколько оцените его?");
    personalMovieDB.movies[answer1] = +answer2;
  }

}

askUserAboutFilm();

console.log(personalMovieDB);
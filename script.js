let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function askUserAboutFilm() {
	for (let i = 0; i < 2; i++) {
		let answer1 = prompt("Один из последних просмотренных фильмов?");
		let answer2 = prompt("На сколько оцените его?");
		if (
			answer1 !== null &&
			answer1 !== "" &&
			answer1.length < 50 &&
			answer2 !== null &&
			answer2 !== ""
		) {
			personalMovieDB.movies[answer1] = +answer2;
		} else {
			i--;
		}
	}
}
askUserAboutFilm();

function howManyFilms() {
  if(numberOfFilms < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    console.log("Вы классический зритель");
  } else if (numberOfFilms >= 30) {
    console.log("Вы киноман");
	} else {
    console.log("Вы ошиблись");
  }
}

howManyFilms();

console.log(personalMovieDB);


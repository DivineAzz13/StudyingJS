let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}

start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
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
rememberMyFilms();

function detecPersonalLevel() {
	if (numberOfFilms < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
		console.log("Вы классический зритель");
	} else if (numberOfFilms >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Вы ошиблись");
	}
}

detecPersonalLevel();


function showMyDB() {
	if (personalMovieDB.privat === false) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		let yourGenre = prompt(`Ваш любимый жанр под номером ${i}`);
		if (yourGenre !== "" && yourGenre !== null) {
			personalMovieDB.genres.push(yourGenre);
		} else {
			i--;
		}
	}
} 

writeYourGenres();



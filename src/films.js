const movies = require('./data.js');

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map((movie) => movie.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter( movie => movie.director == director);
  console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let films = movies.filter( movie => movie.director == director);
  let average = films.map( (average) => average.score);
  let result = average.reduce( (acc, item) =>  { return acc = (acc + item ) / films.length});
  console.log('EXERCICE 3 ->', result.toFixed(2));
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  let titles = movies.map((movie) => movie.title).
  	sort()
  	.slice(0, 20);
  
  console.log('EXERCICE 4 ->', titles);
  return titles;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) { 
  let newArray = [...movies];
  let result = newArray
    .sort(SortArray)
    .sort((a,b) => a.year - b.year);
  
  function SortArray(a, b){
    if (a.title < b.title) {return -1;}
    if (a.title > b.title) {return 1;}
    return 0;
 }

 console.log('EXERCICE 5 ->', result);
 return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies,genre) {
  let films = movies.filter( movie => movie.genre == genre);
  let average = films.map( (average) => average.score);
  let result = average.reduce( (acc, item) =>  { return acc = (acc + item ) / films.length});
  console.log('EXERCICE 6 ->', result.toFixed(2));
    
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let newArray = [...movies];
  let result = newArray.forEach(myFunction);
  
  function myFunction(item) {
    let parts = item.duration;
    let replaced = parts.replace(/h/,'').replace(/min/,' ');    
    let hourToMinut = replaced[0] * 60
    + Number( (replaced[2] + replaced[3])
    );    
    return (hourToMinut);
  }; 
	console.log('EXERCICE 6 ->', result)
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}

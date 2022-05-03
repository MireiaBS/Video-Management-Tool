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
  return result; 
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let movies2 = movies.slice(0, movies.length); 
  movies2.forEach(myFunction);  
    function myFunction(movie) {      
      let parts = movie.duration;        
      if (parts.length > 2) {
        let replaced = parts.replace(/h/,'').replace(/min/,' ');
        movie.duration = Number(replaced[0]) * 60 + Number(replaced[2] + replaced[3]);
      }else{
        let replaced = parts.replace(/h/,'');
        movie.duration = Number(replaced[0] * 60);
      }         
      return (movie.duration); 
    }; 
	console.log('EXERCICE 7 ->', movies2);
  return movies2; 
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies,year) {
  let years = movies.filter(movie => movie.year == year);  
  let bestScore = years.sort(function (a, b) {
      if (a.score < b.score) {return -1;}
      if (a.score > b.score) {return 1;}
      return 0;
   }).reverse()
  let result = [];
  result.push(bestScore[0]);
  console.log('EXERCICE 8 ->', bestScore[0]);
  return result;
}

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

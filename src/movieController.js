import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("movies", { pageTitle: "Movies!", movies });
};
export const movieDetail = (req, res) => {
  const id = req.param("id");
  const movie = getMovieById(id);
  if (movie) {
    res.render("detail", { pageTitle: movie.title, movie });
  } else {
    res.render("404", { pageTitle: "404 NOT FOUND" });
  }
};
export const filterMovie = (req, res) => {
  const year = req.param("year");
  const rating = req.param("rating");

  if (year) {
    const movies = getMovieByMinimumYear(year);
    res.render("movies", { pageTitle: `Searching by year: ${year}`, movies });
  }
  if (rating) {
    const movies = getMovieByMinimumRating(rating);
    res.render("movies", {
      pageTitle: `Searching by rating: ${rating}`,
      movies
    });
  }
};

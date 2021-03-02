module.exports = {
    getMovies: async (req, res) => {
        const db = req.app.get("db")
        const movies = await db.movies.get_movies()
        res.status(200).send(movies)
    },
    deleteMovie: async (req, res) => {
        const db = req.app.get('db')
        const {movie_id} = req.params
        const movies = await db.movies.delete_movie(movie_id)
        res.status(200).send(movies)
    }
}
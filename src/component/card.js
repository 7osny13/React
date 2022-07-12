import { Link } from "react-router-dom";

function MovieCard({ movies: { poster_path, title, id } }) {
  return (
    <div className="card  bg-dark w-25  ">
     
      <i className="fa-solid fa-star" style={{color: "red" , fontSize : "1.5rem" , cursor: "pointer" , 
        borderRadius: "10rem" , backgroundColor : "transparent" , border: "transparent"
    }} >like</i>
      
      <Link to={`movie-detail/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="card-img-top"
        />
      </Link>
      <div className="card-header bg-light text-decoration-none">{title}</div>
    </div>
  );
}

export default MovieCard;

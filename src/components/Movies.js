import Rating from "./Rating"


const Movies = (props) => {

    return ( 
        <section>
            <h4>{props.movie.title}</h4> 
            <p>{props.movie.year}</p>
            <p>{props.movie.director}</p>
            <p>{props.movie.duration}</p>
            <Rating rating={props.movie.rate} />
            {props.movie.genre.map((genre, index)=>(
                <div key={index}>
                    <button className='genre' href="" >{genre}</button>
                    <br/>
                </div>
            ))}
           
        </section>
     );

}

export default Movies;





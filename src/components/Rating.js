const Rating = (props) => {

    let numberStars = []; 
    let ratingNumber = Math.floor(props.rating);

    for(let i = 0; i<=ratingNumber; i++){
        numberStars.push('star')
    }

    return(
        <div className='stars'>
            {numberStars.map((star, index) => (
                <span key={index}>
                    💥
                </span> 
            )
        )}
        </div>
    )
}
   
 
export default Rating ;




const Card = ({id, name, image, types}) =>{
    return(
        <div>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{types}</p>
        </div>
    )
}

export default Card;
export default function Card({item}){
    const {id,title,author,price,img} = item;
    return(
        <div className="cards">
            <div className="image-box">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>{price}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
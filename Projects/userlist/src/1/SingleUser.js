function SingleUser ({batu}){
    return(
        <div className="single-user">
            <img src={batu.picture.large} alt="" />
            <div className="user-info">
                <h3>{batu.location.country} {batu.location.city}</h3>  
                <p>{batu.email}</p>
                <p>{`${batu.name.first} ${batu.name.last}`}</p>        
            </div>
        </div>
    )
}
export default SingleUser;
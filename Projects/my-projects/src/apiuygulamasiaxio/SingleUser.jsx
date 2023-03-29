export const SingleUser =({batu})=>{
    return(
        <div className="single-user">
            <img src={batu.picture.large} alt="" />
            <div className="user-info">
                <h3>Name : <span>{batu.name.first} {batu.name.last}</span></h3>
                <p className="user-mail">{batu.email}</p>
                <p className="user-location">{batu.location.country} - {batu.location.city}</p>
            </div>
            {/* <img src={user.picture.large} alt="" />
            <div className="user-info">
                <h3>{user.name.first} {user.name.last}</h3>
                <p className="user-mail">Email : {user.email}</p>
                <p className="user-location">
                    {user.location.country} | {user.location.city}
                </p>

            </div> */}
        </div>
    )
}
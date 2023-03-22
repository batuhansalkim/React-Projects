import "../proje5/app5.css";
import Card from "../proje5/Card";

function Appbatu(){
    return(
        <div className="App5">
            <Card
                img="https://media.licdn.com/dms/image/C4D03AQEohqwLUIK0yg/profile-displayphoto-shrink_800_800/0/1605612810263?e=2147483647&v=beta&t=u1JLSkD6Z2GL4ppEI-9B-2iGDiO9vm97utliL9sYt1U"
            title="Batuhan SALKIM"
            description="batuhan salkım linkedin profile photo"
            />
            <Card
                img="https://fotolifeakademi.com/uploads/2020/12/cicek-fotografi-cekimi-workshop.webp"
                title="batuslkm"
                description="batuhan salkım ınstagram profile photo"
            />
            <Card
                img="https://orcun.baslak.com/wp-content/uploads/2022/02/nft-960x400.jpg"
                title="nft"
                description="free nft monkey "
            />
            
        </div>
    );
}
export default Appbatu;
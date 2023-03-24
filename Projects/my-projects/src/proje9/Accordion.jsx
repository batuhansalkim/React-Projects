export default function Accordion({title,active,setActive}){
    return(
        <div className="accordion">
            <div className="accordionHeading">
                <div className="container">
                    <p>{title}</p>
                    <span onClick={()=>setActive(title)}>CLICK ME</span>
                </div>
            </div>
            <div className={(active===title ? "show" : "")+ "accordionContent"}>
                <div className="container">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus deserunt excepturi at enim numquam cumque nobis ut eaque accusantium.</p>
                </div>
            </div>
        </div>
    )
}
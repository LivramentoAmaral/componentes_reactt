import foto from "./organico.jpeg"
import style from "./style.module.css" 

function Card () {
    return( <>
    <img src={foto} alt="" className={style.image} />

    <h2>Title</h2>

    <p>qualquer coisa...</p>
    
    </>);
}

export default Card;
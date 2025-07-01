import style from "./CatSpan.module.css"
function CatSpan (probs) {
    return(
        <span className={style.catSpan} style={{backgroundColor: probs.backColor, color: probs.color}}>{probs.title}</span>
    )
}

export default CatSpan;
import style from "./CatSpan.module.css"
function CatSpan({ backColor, color, title }) {
  return (
    <span
      className={style.catSpan}
      style={{ backgroundColor: `${backColor}`, color: `${color}` }}>
      {title}
    </span>
  );
}

export default CatSpan;
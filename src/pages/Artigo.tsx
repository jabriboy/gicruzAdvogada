import { useLocation } from "react-router-dom";
import '../styles/pages/Artigo.css'
import BtnVoltar from "../components/BtnVoltar";

function Artigo(){
    let { state } = useLocation();
    console.log(state)
    return(
        <>
        <h1 className="tituloArtigo">{state.artigo.titulo}</h1>
        <article>
            <h3 className="artigoDesc">{state.artigo.sobre}</h3>
            <img src={state.artigo.img} alt="imagem do artigo" />
            <p>{state.artigo.desc}</p>
        </article>
        <BtnVoltar path={"/todos-artigos"}/>
        </>
    )
}

export default Artigo;
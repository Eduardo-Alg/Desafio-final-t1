import livroDoado from "../../assets/livroDoado.png"
import S from "../../Pages/Doados/doados.module.scss"

export default function Doados(){
    return(
        <section className={S.doadosPage}>
            <h3>Livros Doados</h3>
            <article className={S.areaDoados}>
                <img src={livroDoado} alt="Livro Doado" />
                <p>
                O protagonista
                Susanne Andrade
                Ficção
                </p>
            </article>
        </section>
    )
}
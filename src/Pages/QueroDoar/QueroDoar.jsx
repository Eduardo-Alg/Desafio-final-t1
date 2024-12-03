import livrinho from "../../assets/livrinho.png"
import S from "../QueroDoar/QueroDoar.module.scss"


export default function QueroDoar(){
    return(
        <main className={S.menuCadastro}>
        <section>
            <h3>Por favor, preencha o formulário com suas informações e as informações do Livro</h3>
        </section>
        <section className={S.boxInput}>
            <div>
            <img src={livrinho} alt="Imagem de icone de um livro" />
            <h2>Informações do Livro</h2>
            </div>
            <form action="">
            <input type="text" placeholder="Título"/>
            <input type="text" placeholder="Categoria"/>
            <input type="text" placeholder="Autor"/>
            <input type="text" placeholder="Link da Imagem"/>
            <button>Doar</button>
            </form>
        </section>
        </main>
    )
}
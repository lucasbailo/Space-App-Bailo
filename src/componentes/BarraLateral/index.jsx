import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
`

const BarraLateral = () => {
    return(
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao
                        iconeAtivo="/icones/home-ativo.png"
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >
                        <a href="">Início</a>
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/mais-vistas-ativo.png"
                        iconeInativo="/icones/mais-vistas-inativo.png"
                        ativo={true}
                    >
                        <a href="">Mais vistas</a>
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/mais-curtidas-ativo.png"
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                        ativo={true}
                    >
                        <a href="">Mais curtidas</a>
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/novas-ativo.png"
                        iconeInativo="/icones/novas-inativo.png"
                        ativo={true}
                    >
                        <a href="">Novas</a>
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/surpreenda-me-ativo.png"
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                        ativo={true}
                    >
                        <a href="">Surpreenda-me</a>
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )

}

export default BarraLateral
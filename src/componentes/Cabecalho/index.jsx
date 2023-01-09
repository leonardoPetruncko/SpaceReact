import logo from './logo.png'
import search from './search.png'

export default function Cabecalho() {
    return (
        <header>
            <img src={logo} alt="Logo do Space" />
            <div>
                <input type="text"
                placeholder="O que Deseja?" />
                <img src={search} alt="icone da lupa"/>
            </div>
        </header>
    )
}
import { Link } from 'react-router-dom';
import './LiquidGlass.css'

function LiquidGlassSearch() {

    return (
        <form className="d-flex" role="search">
            <div class="wr">
                <div class="wr-btn">
                    <div class="liquid-ef"></div>
                    <div class="liquid-tint"></div>
                    <div class="liquid-shi"></div>
                    <div class="liquid-btn">
                            <img src="src\assets\lupa-flaticon.png" alt=""/>
                            <input className="barra_pesquisa"  type="search" placeholder="Pesquisar" aria-label="Search"/>
                    </div>
                </div>
            </div>
        </form>
    );

}

export default LiquidGlassSearch;
import { Link } from 'react-router-dom';
import './LiquidGlass.css'

function LiquidGlassbuttomCadastro() {

    return (
        <Link to="/cadastrar">
            <div class="wr">
                <div class="wr-btn">
                    <div class="liquid-ef"></div>
                    <div class="liquid-tint"></div>
                    <div class="liquid-shi"></div>
                    <div class="liquid-btn">
                        Sign Up
                    </div>
                </div>
            </div>
        </Link>
    );

}

export default LiquidGlassbuttomCadastro;
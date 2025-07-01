import { Link } from 'react-router-dom';
import './LiquidGlass.css'

function LiquidGlassbuttomLogin() {

    return (
        <Link to="/login">
            <div class="wr">
                <div class="wr-btn">
                    <div class="liquid-ef"></div>
                    <div class="liquid-tint"></div>
                    <div class="liquid-shi"></div>
                    <div class="liquid-btn">
                        Sign In
                    </div>
                </div>
            </div>
        </Link>
    );

}

export default LiquidGlassbuttomLogin;
import { Link } from 'react-router-dom';
import './LiquidGlassButtom.css'

function LiquidGlassbuttomProfile() {

    return (
        <Link to="/perfil">
            <div class="wr">
                <div class="wr-btn">
                    <div class="liquid-ef"></div>
                    <div class="liquid-tint"></div>
                    <div class="liquid-shi"></div>
                    <div class="liquid-btn">
                        Profile
                    </div>
                </div>
            </div>
        </Link>
    );

}

export default LiquidGlassbuttomProfile;
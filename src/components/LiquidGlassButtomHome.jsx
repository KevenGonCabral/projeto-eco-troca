import { Link } from 'react-router-dom';
import './LiquidGlassButtom.css'

function LiquidGlassbuttomHome() {

    return (
        <div class="wr">
            <div class="wr-btn">
                <div class="liquid-ef"></div>
                <div class="liquid-tint"></div>
                <div class="liquid-shi"></div>
                <div class="liquid-btn">
                    <Link to="/">Home</Link>
                </div>
            </div>
        </div>
    );

}

export default LiquidGlassbuttomHome;
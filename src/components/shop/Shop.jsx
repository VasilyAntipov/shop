import './shop.scss';
import Footer from '../footer/Footer';
import Header from '../header/Header'
import Homepage from '../homepage/Homepage'


function Shop() {
    return (
        <div className="Shop">
            <div className="container">
                <Header />
                <Homepage />
                <Footer />
            </div>
        </div>
    );
}

export default Shop;

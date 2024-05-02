import CartWidget from './CartWidget.jsx';
import ButtonComponent from './ButtonComponent.jsx';
import Logo from '../assets/img/logohome.png';
import './NavBar.css';

export default function NavBar() {
        return (
        <header className='navContainer'>
            <img src={Logo} alt="" />
            <nav className='navmenu'>
                <ButtonComponent nombre='Vinilos' />
                <ButtonComponent nombre='CDs' />
                <ButtonComponent nombre='Ofertas' />
                <ButtonComponent nombre='Accesorios' />
            </nav>
            <CartWidget /> 
        </header>
        );
}
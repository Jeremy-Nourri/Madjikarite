import { IoBasketOutline, IoMailOutline } from 'react-icons/io5';
import { RiAccountCircleLine } from "react-icons/ri";
import './style.scss';
import 'animate.css';

function IconsHeader() {

  return (
    <div className="header-icons">
      <div className="header-icons__container-contact">
        <IoMailOutline className="header-icons__contact"/>
      </div>

      <div className="header-icons__container-basket">
        <IoBasketOutline className="header-icons__basket"/>
        <p className="header-icons__link-text1">Mon panier</p>
      </div>

      <div className="header-icons__container-account">
        <RiAccountCircleLine className="header-icons__account" />
        <p className="header-icons__link-text1">Se connecter</p>
      </div>

    </div>
  );
}

export default IconsHeader;

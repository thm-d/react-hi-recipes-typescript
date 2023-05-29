import styles from './index.module.scss';
import { NavLink } from "react-router-dom";

interface IProps {
  displayWishlist: () => void,
  hideMenu: () => void
}

export const HeaderMenu = (props: IProps) => {
  const { displayWishlist, hideMenu } = props;

  return (
    <ul className={ `${ styles.MenuContainer } card p-20` }
        onClick={ hideMenu }
    >
      <li className="mb-5">
        <NavLink to="/admin">Admin</NavLink>
      </li>
      <li className="mb-5"
          onClick={ displayWishlist }
      >Wishlist
      </li>
      {/*<li>Connexion</li>*/ }
    </ul>
  );

};


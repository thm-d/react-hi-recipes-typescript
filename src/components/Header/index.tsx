import React, { useState } from 'react';
import styles from "./index.module.scss";
import { HeaderMenu } from "components/Header/components/HeaderMenu";
import { NavLink, useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { wishlistDisplayState } from "recoil/Atoms";



export const Header = () => {
  const [ showMenu, setShowMenu ] = useState(false);
  const setWishlistDisplay = useSetRecoilState(wishlistDisplayState);
  const location = useLocation();

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <NavLink to="/" className="flex-fill">
        <i className="fa-solid fa-utensils fa-xl"></i>
        <span className={`${styles.logo}`}>Hi Recipes</span>
      </NavLink>
      <ul className={styles.headerList}>
        <NavLink to="/admin">
          <button className="btn btn-primary mr-15 ">Admin</button>
        </NavLink>
        {!location.pathname.includes("admin") && (
          <button className="btn btn-reverse-primary mr-15"
                  onClick={() => setWishlistDisplay(true)}
          >
            <i className="fa-solid fa-heart mr-5"></i>
            <span>Wishlist</span>
          </button>
        )}
      </ul>
      <i className={`fa-solid fa-bars fa-xl ${styles.headerXs}`}
         onClick={() => setShowMenu(true)}
      ></i>

      {showMenu && (
        <>
          <div className="calc"
               onClick={() => setShowMenu(false)}
          ></div>
          <HeaderMenu displayWishlist={() => setWishlistDisplay(true)}
                      hideMenu={() => setShowMenu(false)}
          />
        </>
      )}
    </header>);
};
import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import styles from "./index.module.scss";


interface IProps {
  setFilter: Dispatch<SetStateAction<string>>
}

export const Search = (props: IProps) => {
  const { setFilter } = props

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  };

  return (
        <div className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}>
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input className="flex-fill"
                 onInput={handleInput}
                 type="text"
                 placeholder="Search" />
        </div>
  );
};
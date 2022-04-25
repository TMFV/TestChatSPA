import styles from './Searching.module.scss';
import { useState } from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';

function Searching() {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={styles.searching}>
      <div className={styles.container}>
        <input
          id='search'
          className={styles.input}
          name='search'
          type='text'
          value={searchText}
          placeholder='Search or start new chat'
          onChange={handleChange}
        ></input>
        <label className={styles.label}>
          <div className={styles.icon}></div>
        </label>
      </div>
    </div>
  );
}

export default Searching;

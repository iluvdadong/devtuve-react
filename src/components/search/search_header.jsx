import React, { useRef } from "react";
import { FaSearch, FaUserAlt } from "react-icons/fa";

import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch, onLogoClick }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeydown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => onLogoClick()}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Devtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="개발 관련 영상을 검색해주세요 :)"
        onKeyPress={onKeydown}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <FaSearch size="lg" color="#444" />
      </button>
      <button className={styles.button} type="submit" onClick={onClick}>
        <FaUserAlt size="lg" color="#444" />
      </button>
    </header>
  );
};

export default SearchHeader;

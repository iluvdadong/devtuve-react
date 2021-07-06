import React, { Componen, useRef } from 'react';

import styles from './search_header.module.css';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();

    const handleSearch = () => {

        const value = inputRef.current.value;
        console.log(`input value : ${value}`);
      //  onSearch(value);
    };

    const onClick = () => {
        handleSearch();
    };

    const onKeydown = e => {   
        console.log(`######## e: ${e}`)
        if(e.onKeydown === 'Enter') {
            handleSearch();
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input
                ref={inputRef}
                className={styles.input}
                type="search"
                placeholder="Search.."
                onKeyPress={onKeydown} /> 
            <button className={styles.button} type="submit" onClick={onClick}>
                <img 
                className={styles.buttonImg} 
                src="/images/search.png" 
                alt="search" 
                />
            </button>
        </header>
    );
};

export default SearchHeader;
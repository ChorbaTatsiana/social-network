import React, {useState} from "react";
import styles from "./Users.module.css";

let Paginator = ({totalItemsCount, pageSize, portionSize=10, onChangePage, currentPage}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortoinNumber = (portionNumber -1)*portionSize +1;
    let rightPortoinNumber = portionNumber + portionSize;
    
    return (
        <div className={styles.paginator}>
        {portionNumber >1 &&
        <button onClick={() => {setPortionNumber(portionNumber - 1)}} >Prev</button> }
        {pages
        .filter(p=> p >= leftPortoinNumber && p<= rightPortoinNumber)
        .map(p => {
            return <span
            className={currentPage === p ?
                    styles.selectedPage : styles.color}
            key={p}
            onClick={() => {
                onChangePage(p);
            }}>{p + ' '}</span>
        })}
        {portionCount > portionNumber && 
        <button onClick={()=> {setPortionNumber(portionNumber +1)}}>next</button>}
            {/* {pages.map(item => {
                return <span className={props.currentPage === item ?
                    styles.selectedPage : styles.color} onClick={() => { props.onChangePage(item) }}>
                    {item + ' '}</span>
            })} */}
        </div>)
};

export default Paginator;

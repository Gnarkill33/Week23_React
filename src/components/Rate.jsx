import React from 'react'
import styles from './rate.module.css'


function Rate(props) {
const {title, price, speed} = props;
    return (
    <div className={styles.rate_container}>
        <div className={styles.rate_title}>Безлимитный {title}</div>
        <div className={styles.rate_price_box}>
            <span>руб</span>
        <div className='rate_price'>{price}</div>
        <span> /мес</span>
        </div>
        <div className={styles.rate_speed}>до {speed} Мбит/сек</div>
        <div className={styles.rate_unlimited}>Объем включенного трафика не ограничен</div>
    </div>
    )

}

export default Rate
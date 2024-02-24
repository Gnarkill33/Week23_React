import Rate from './Rate.jsx';
import styles from './rateList.module.css';


function RateList() {
    return (
        <div className={styles.wrapper}> 
            <Rate 
                title='Безлимитный 300' 
                price='300' 
                speed='до 10 Мбит/сек'
                text='Объем включенного трафика не ограничен'
                color='blue'/>
            <Rate 
                title='Безлимитный 450' 
                price='450' 
                speed='до 50 Мбит/сек'
                text='Объем включенного трафика не ограничен'
                color='green'/>
            <Rate 
                title='Безлимитный 550' 
                price='550' 
                speed='до 100 Мбит/сек'
                text='Объем включенного трафика не ограничен'
                color='red'
                size='sizeable'/>
            <Rate 
                title='Безлимитный 1000' 
                price='1000' 
                speed='до 200 Мбит/сек'
                text='Объем включенного трафика не ограничен'
                color='black'/>
        </div>
    )
}

export default RateList
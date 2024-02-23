import Rate from './Rate.jsx';
import styles from './rateList.module.css';


function RateList() {
    return (
        <div className={styles.wrapper}> 
            <Rate 
                title='300' 
                price='300' 
                speed='10'/>
            <Rate 
                title='450' 
                price='450' 
                speed='50'/>
            <Rate 
                title='550' 
                price='550' 
                speed='100'/>
            <Rate 
                title='1000' 
                price='1000' 
                speed='200'/>
        </div>
    )
}

export default RateList
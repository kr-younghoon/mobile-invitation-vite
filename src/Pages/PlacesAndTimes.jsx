// import MapComponent from '../Home/Components/Map/MapComponent';
import styles from './PlacesAndTimes.module.css';

function PlacesAndTimes() {
    return (
        <div className={styles.scrollable_div}>
            <p className={styles.title}>
                이날 예배는 이렇게 <br />
                진행되어요.
            </p>
            <div>
                <div className={styles.sub}>
                    <p className={styles.sub_cap}>16:00-16:40</p>
                    <p className={styles.sub_lg}>예배 시작 및 찬양</p>
                </div>
                <div className={styles.sub}>
                    <p className={styles.sub_cap}>16:40-17:20</p>
                    <p className={styles.sub_lg}>
                        설교말씀
                        <br />
                        (Guest. Jeon Eunju)
                    </p>
                </div>
                <div className={styles.sub}>
                    <p className={styles.sub_cap}>17:20-17:40</p>
                    <p className={styles.sub_lg}>헌금과 기도</p>
                </div>
            </div>
            <p className={styles.title2}>우리 교회는 여기예요.</p>
            <div className={styles.map}>{/* <MapComponent /> */}</div>
            <p className={styles.sub_sm}>인천광역시 중구 신도시북로 74</p>
            <div className={styles.openMapBtn_layout}>
                <a
                    href="https://naver.me/GsTXzEG4"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className={styles.openMapBtn}>
                        네이버 지도로 열기
                    </button>
                </a>
            </div>
        </div>
    );
}

export default PlacesAndTimes;

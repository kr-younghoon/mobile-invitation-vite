import { Link } from 'react-router-dom';
import styles from './Step8Form.module.css';

const Step8Form = (props) => {
    return (
        <>
            <p className={styles.title}>
                아멘! 말씀대로 되길
                <br />
                소망합니다!
            </p>
            <br />
            <p className={styles.title}>
                {props.userName}님을
                <br />
                {props.tag} {props.inviterName}
                <br />
                청년과 함께 교회에서
                <br />
                볼 수 있기를
                <br />
                기대하겠습니다.
                <br />
            </p>
            <div className={styles.openMapBtn_layout}>
                <Link to="/reviews">
                    <button className={styles.openCommentsBtn}>
                        방명록 작성하기
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Step8Form;

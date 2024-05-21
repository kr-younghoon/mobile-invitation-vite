import Styles from './Step5Form.module.css';

const Step5Form = (props) => {
    return (
        <>
            <div className={`${Styles.formLayoutLine} ${Styles.slide_in} `}>
                <p className={Styles.title}>
                    우리는 11월 5일 <br />
                    *특별한 예배를
                </p>
                <p className={Styles.subtitleCaption}>
                    :청년들이 자신의 소중한 사람들을 초청하는 예배
                </p>
                <p className={Styles.title}>준비했어요.</p>
            </div>
            <div className={`${Styles.formLayoutLine} ${Styles.slide_in2} `}>
                <p className={Styles.title}>
                    <br />
                    {props.tag} {props.inviterName}
                    <br />
                    청년의 {props.relationship}인
                    <br />
                    {props.userName}님을
                    <br />꼭 만나고 싶어요!
                </p>
            </div>
        </>
    );
};

export default Step5Form;

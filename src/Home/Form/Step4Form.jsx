import { useState } from 'react';
import style from './Step4Form.module.css';
import Polygon3 from '../Assets/SVG/Polygon3';
import Polygon3Black from '../Assets/SVG/Polygon3Black';

const Step4Form = (props) => {
    const [whtsURName, setWhtsURName] = useState([]);
    // Step 1의 폼 컴포넌트 내용을 구현
    // const [inputValue, setInputValue] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(true); // 입력값이 비어 있는지 여부

    // 입력값이 변경될 때마다 호출되는 함수
    const handleInputChange = (e) => {
        setWhtsURName(e.target.value);
        const value = e.target.value;
        // setInputValue(value);
        // 입력값이 비어 있는지 여부 설정
        setIsInputEmpty(value.trim() === '');
    };

    const handleNext = () => {
        props.onUserNameReceived(whtsURName);
    };

    return (
        <>
            <p className={style.title}>
                당신의 이름도 <br /> 알려주실 수 있나요?
            </p>
            {isInputEmpty ? (
                <button
                    className={`${style.next_button} ${style.disabled}`}
                    onClick={handleNext}
                    disabled={isInputEmpty} // 입력값이 비어 있을 때 버튼 비활성화
                >
                    <p className={style.next_step_text}>다음으로</p>
                    <Polygon3 />
                </button>
            ) : (
                <button className={style.next_button} onClick={handleNext}>
                    <p className={style.next_step_text_black}>다음으로</p>
                    <Polygon3Black />
                </button>
            )}
            <div className={`${style.background_circle} ${style.slide_in}`}>
                <div></div>
                <p>
                    저는 {props.tag}
                    <br />
                    {props.inviterName} 청년의 {props.relationship}
                    <br />
                    <input onChange={handleInputChange}></input>입니다.
                </p>
            </div>
        </>
    );
};

export default Step4Form;

import React, { useState } from 'react';
import style from './Step1Form.module.css';
import Polygon3 from '../Assets/SVG/Polygon3';
import Polygon3Black from '../Assets/SVG/Polygon3Black';

function Step1Form(props) {
    // Step 1의 폼 컴포넌트 내용을 구현
    const [inputValue, setInputValue] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(true); // 입력값이 비어 있는지 여부

    // 입력값이 변경될 때마다 호출되는 함수
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        // 입력값이 비어 있는지 여부 설정
        setIsInputEmpty(value.trim() === '');
    };

    return (
        <div>
            {/* 폼 요소들을 추가 */}
            <p className={style.title}>
                안녕하세요!
                <br />
                만나서 반갑습니다.
            </p>
            {isInputEmpty ? (
                <button
                    className={`${style.next_button} ${style.disabled}`}
                    onClick={() => props.oninviterNameReceived(inputValue)}
                    disabled={isInputEmpty} // 입력값이 비어 있을 때 버튼 비활성화
                >
                    <p className={style.next_step_text}>다음으로</p>
                    <Polygon3 />
                </button>
            ) : (
                <button
                    className={style.next_button}
                    onClick={() => props.oninviterNameReceived(inputValue)}
                >
                    <p className={`${style.next_step_text_black}`}>다음으로</p>
                    <Polygon3Black />
                </button>
            )}
            <div className={`${style.background_circle} ${style.slide_in}`}>
                <div></div>
                <p>
                    당신을 초대한 사람은 <br />
                    누구인가요?
                    <input value={inputValue} onChange={handleInputChange} />
                </p>
            </div>
        </div>
    );
}

export default Step1Form;

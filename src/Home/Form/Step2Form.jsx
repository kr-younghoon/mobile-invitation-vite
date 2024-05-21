import { useState } from 'react';
import styles from './Step2Form.module.css';
import Polygon3 from '../Assets/SVG/Polygon3';
import Polygon3Black from '../Assets/SVG/Polygon3Black';

function Step2Form(props) {
    // Step 2의 폼 컴포넌트 내용을 구현
    const [selectedRelationship, setSelectedRelationship] = useState();
    const [nextStepTextClassName, setNextStepTextClassName] = useState(
        styles.next_step_text
    );
    const [polygonComponent, setPolygonComponent] = useState(<Polygon3 />);

    // 라디오 버튼을 클릭할 때 실행될 함수
    const handleRadioClick = (e) => {
        setSelectedRelationship(e.target.value);

        // 모든 라벨의 배경색을 초기화 (선택 해제)
        const labels = document.querySelectorAll('label');
        labels.forEach((label) => {
            label.style.backgroundColor = 'var(--point-color)';
            label.style.color = 'black';
        });

        // 선택된 라디오 버튼의 라벨 배경색 변경
        const selectedLabel = e.target.parentNode;
        selectedLabel.style.backgroundColor = 'black';
        selectedLabel.style.color = 'white';

        // next_step_text 클래스를 next_step_text_black으로 변경
        setNextStepTextClassName(styles.next_step_text_black);

        // Polygon3 컴포넌트를 Polygon3Black으로 변경
        setPolygonComponent(<Polygon3Black />);
    };

    const handleNext = () => {
        if (selectedRelationship) {
            // 사용자가 선택한 값을 부모 컴포넌트로 전달
            props.onDataReceived(selectedRelationship);
        }
    };

    return (
        <div>
            <p className={styles.title}>
                {props.inviterName} 청년과 <br />
                어떤 사이인가요?
            </p>
            <button
                type="submit"
                className={styles.next_button}
                onClick={handleNext}
            >
                <p className={nextStepTextClassName}>다음으로 </p>
                {polygonComponent}
            </button>
            <form className={styles.formLayout}>
                <div className={`${styles.formLayoutLine} ${styles.slide_in} `}>
                    <label>
                        <input
                            type="radio"
                            name="relationship"
                            value="가족"
                            onChange={(e) =>
                                setSelectedRelationship(e.target.value)
                            }
                            onClick={handleRadioClick}
                        />
                        가족
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="relationship"
                            value="친구"
                            onChange={(e) =>
                                setSelectedRelationship(e.target.value)
                            }
                            onClick={handleRadioClick}
                        />
                        친구
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="relationship"
                            value="애인"
                            onChange={(e) =>
                                setSelectedRelationship(e.target.value)
                            }
                            onClick={handleRadioClick}
                        />
                        <p>애인</p>
                    </label>
                </div>
                <div className={`${styles.formLayoutLine} ${styles.slide_in2}`}>
                    <label>
                        <input
                            type="radio"
                            name="relationship"
                            value="직장동료"
                            onChange={(e) =>
                                setSelectedRelationship(e.target.value)
                            }
                            onClick={handleRadioClick}
                        />
                        직장동료
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="relationship"
                            value="선,후배"
                            onChange={(e) =>
                                setSelectedRelationship(e.target.value)
                            }
                            onClick={handleRadioClick}
                        />
                        선배,후배
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="relationship"
                            value="이웃"
                            onChange={(e) =>
                                setSelectedRelationship(e.target.value)
                            }
                            onClick={handleRadioClick}
                        />
                        이웃
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Step2Form;

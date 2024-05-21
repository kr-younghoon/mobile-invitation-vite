import { useState } from 'react';
import styles from './Step3Form.module.css';
import CheckboxButton from '../Components/Button/CheckBoxButton/CheckBoxButton';
import Polygon3 from '../Assets/SVG/Polygon3';
import Polygon3Black from '../Assets/SVG/Polygon3Black';

const Step3Form = (props) => {
    // Step 3의 폼 컴포넌트 내용을 구현
    const [selectedKeywords, setSelectedKeywords] = useState([]);

    const handleKeywordChange = (keyword) => {
        // 선택한 키워드가 이미 배열에 있다면 제거하고, 없다면 추가
        if (selectedKeywords.includes(keyword)) {
            setSelectedKeywords(
                selectedKeywords.filter((kw) => kw !== keyword)
            );
        } else {
            setSelectedKeywords([...selectedKeywords, keyword]);
        }
    };

    const isNextButtonDisabled = selectedKeywords.length === 0;
    const nextButtonTextClass = isNextButtonDisabled
        ? styles.next_step_text
        : styles.next_step_text_black;
    const NextButtonComponent = isNextButtonDisabled ? Polygon3 : Polygon3Black;

    const handleNext = () => {
        // 선택한 키워드 배열을 부모 컴포넌트로 전달
        props.onKeywordsReceived(selectedKeywords);
    };

    return (
        <div>
            <p className={styles.title}>
                {props.inviterName} 청년은
                <br />
                어떤 사람인가요?
            </p>
            <p className={styles.guide}>어울리는 키워드를 모두 골라주세요!</p>
            <button
                onClick={handleNext}
                className={styles.next_button}
                disabled={isNextButtonDisabled}
            >
                <p className={nextButtonTextClass}>다음으로</p>
                <NextButtonComponent />
            </button>
            <div
                // className={`${styles.CheckboxButtonLayout} ${styles.fade_in_buttons}`}
                className={`${styles.CheckboxButtonLayout}`}
            >
                <div>
                    <CheckboxButton
                        value="😄 친절한"
                        checked={selectedKeywords.includes('😄 친절한')}
                        onChange={() => handleKeywordChange('😄 친절한')}
                    />
                    <CheckboxButton
                        value="👶🏻 귀여운"
                        checked={selectedKeywords.includes('👶🏻 귀여운')}
                        onChange={() => handleKeywordChange('👶🏻 귀여운')}
                    />
                    <CheckboxButton
                        value="💕 사랑스러운"
                        checked={selectedKeywords.includes('💕 사랑스러운')}
                        onChange={() => handleKeywordChange('💕 사랑스러운')}
                    />
                </div>
                <div>
                    <CheckboxButton
                        value="🐜 성실한"
                        checked={selectedKeywords.includes('🐜 성실한')}
                        onChange={() => handleKeywordChange('🐜 성실한')}
                    />
                    <CheckboxButton
                        value="👔 예의바른"
                        checked={selectedKeywords.includes('👔 예의바른')}
                        onChange={() => handleKeywordChange('👔 예의바른')}
                    />
                    <CheckboxButton
                        value="📚 똑똑한"
                        checked={selectedKeywords.includes('📚 똑똑한')}
                        onChange={() => handleKeywordChange('📚 똑똑한')}
                    />
                </div>
                <div>
                    <CheckboxButton
                        value="👩🏻‍🎤 사차원"
                        checked={selectedKeywords.includes('👩🏻‍🎤 사차원')}
                        onChange={() => handleKeywordChange('👩🏻‍🎤 사차원')}
                    />
                    <CheckboxButton
                        value="🤴🏻 왕자"
                        checked={selectedKeywords.includes('🤴🏻 왕자')}
                        onChange={() => handleKeywordChange('🤴🏻 왕자')}
                    />
                    <CheckboxButton
                        value="👸🏻 공주"
                        checked={selectedKeywords.includes('👸🏻 공주')}
                        onChange={() => handleKeywordChange('👸🏻 공주')}
                    />
                </div>
                <div>
                    <CheckboxButton
                        value="👨🏻‍💻 워커홀릭"
                        checked={selectedKeywords.includes('👨🏻‍💻 워커홀릭')}
                        onChange={() => handleKeywordChange('👨🏻‍💻 워커홀릭')}
                    />
                    <CheckboxButton
                        value="💒 예수쟁이"
                        checked={selectedKeywords.includes('💒 예수쟁이')}
                        onChange={() => handleKeywordChange('💒 예수쟁이')}
                    />
                    <CheckboxButton
                        value="🤹‍♀️ 재밌는"
                        checked={selectedKeywords.includes('🤹‍♀️ 재밌는')}
                        onChange={() => handleKeywordChange('🤹‍♀️ 재밌는')}
                    />
                </div>
                <div>
                    <CheckboxButton
                        value="🗑 쓰레기"
                        checked={selectedKeywords.includes('🗑 쓰레기')}
                        onChange={() => handleKeywordChange('🗑 쓰레기')}
                    />
                    <CheckboxButton
                        value="🍷 알코올 중독자"
                        checked={selectedKeywords.includes('🍷 알코올 중독자')}
                        onChange={() => handleKeywordChange('🍷 알코올 중독자')}
                    />
                    <CheckboxButton
                        value="💦 킹받는"
                        checked={selectedKeywords.includes('💦 킹받는')}
                        onChange={() => handleKeywordChange('💦 킹받는')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Step3Form;

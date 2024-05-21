import React, { useState } from 'react';
import styles from './CheckBoxButton.module.css';

function CheckboxButton({ value, onChange }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleCheckboxChange = (e) => {
        const newCheckedState = e.target.checked;
        onChange(newCheckedState); // 상위 컴포넌트에 체크 상태를 전달합니다.
        setIsChecked(newCheckedState); // isChecked 상태를 업데이트합니다.
    };

    const containerStyle = {
        border: isChecked ? '2px solid #000' : '2px solid var(--point-color)',
    };

    return (
        <label
            className={`${styles.size} ${isHovered ? styles.hovered : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={containerStyle}
        >
            <input
                type="checkbox"
                name="kind"
                value={value}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            {value}
        </label>
    );
}

export default CheckboxButton;

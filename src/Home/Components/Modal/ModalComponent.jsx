import { useState, useEffect } from 'react';

import Modal from 'react-modal';
import styles from './ModalComponent.module.css';
import ModalCloseBtn from '../../Assets/SVG/ModalCloseBtn';
import Lottie from 'lottie-react';
import DUMMY from '../../Assets/JSON/heart-boom.json';

function ModalComponent({ isOpen, closeModal, content }) {
    const ModalStyle = {
        overlay: {
            position: 'fixed',
            display: 'flex',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            zIndex: 1000,
            justifyContent: 'center',
            alignItems: 'center',
        },
        content: {
            position: 'relative',
            inset: 0,
            overflow: 'auto',
            width: '320px',
            height: '550px',
            borderRadius: '20px',
            padding: 0,
        },
    };

    const [showLottie, setShowLottie] = useState(true);
    useEffect(() => {
        let timer;

        if (isOpen) {
            timer = setTimeout(() => {
                setShowLottie(false); // 5초 후 Lottie를 숨김
            }, 5000); // 5000 밀리초 (5초)
        }

        return () => {
            clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 해제
            setShowLottie(true);
        };
    }, [isOpen]);

    return (
        <Modal
            appElement={document.getElementById('root')}
            // 또는 다른 주요 콘텐츠의 루트 요소
            style={ModalStyle}
            isOpen={isOpen}
            onRequestClose={closeModal}
        >
            <div className={styles.modal}>
                <div
                    className={styles.ModalLottie}
                    style={{ display: showLottie ? 'block' : 'none' }}
                >
                    <Lottie animationData={DUMMY} loop={false}></Lottie>
                </div>
                <div className={`${styles.layout} ${styles.slide_in2}`}>
                    <button
                        onClick={closeModal}
                        className={styles.ModalCloseBtn}
                    >
                        <ModalCloseBtn />
                    </button>
                    <p className={`${styles.sub_cap} ${styles.ModalGuideText}`}>
                        길게 탭하여 말씀카드를 저장해보세요!
                    </p>
                    <div className={styles.ModalImg}>{content}</div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalComponent;

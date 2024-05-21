import Lottie from 'lottie-react';
import DUMMY from '../Assets/JSON/bible.json';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import styles from './Step7Form.module.css';
import ModalComponent from '../Components/Modal/ModalComponent';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: 'AIzaSyD71fdJORDikBgInvsHgrA2uSj1Z03Y1ac',
    authDomain: 'side-project-ayoung.firebaseapp.com',
    projectId: 'side-project-ayoung',
    storageBucket: 'side-project-ayoung.appspot.com',
    messagingSenderId: '606367920386',
    appId: '1:606367920386:web:ec928f13d180ecd1a0d21b',
    measurementId: 'G-7EYW57RLXM',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Step7Form(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [urlPath, setUrlPath] = useState('');
    // const [DownloadPath, setDownloadPath] = useState('');

    const openModal = async () => {
        checkImageUrl();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const imgNameSet = Math.floor(Math.random() * 199);
    const imageUrl = `gs://mobileinvitation-f5217.appspot.com/Img${imgNameSet}.png`; // 실제 이미지 경로에 맞게 설정
    // const DownloadUrl = `../Assets/images/Img${imgNameSet}.png`; // 실제 이미지 경로에 맞게 설정

    const checkImageUrl = async () => {
        try {
            const imageRef = ref(storage, imageUrl);
            const url = await getDownloadURL(imageRef);
            console.log('이미지 URL:', url);

            setUrlPath(url);
            // setDownloadPath(DownloadUrl);
        } catch (error) {
            console.log(imageUrl);
            console.error('이미지 로드 중 오류 발생:', error);
        }
    };

    const modalContent = (
        <div>
            <div id="image-container">
                <img className={styles.imgLayout} src={urlPath} alt="Random" />
            </div>
            {/* <a href={DownloadPath} download="말씀.png"> */}
            {/* <button>다운로드</button> */}
            {/* </a> */}
        </div>
    );

    return (
        <>
            <p className={styles.title}>
                마지막으로,
                <br />
                {props.userName}님을
                <br />
                축복하기 위해
                <br />
                성경 말씀 한 구절
                <br />
                준비했어요!
            </p>
            <div className={styles.box}>
                <p> 두근두근! 나의 성경 말씀은? </p>
                <div className={styles.lottieSize}>
                    <Lottie animationData={DUMMY}></Lottie>
                </div>
                <button className={styles.modalOpenBtn} onClick={openModal}>
                    말씀카드 뽑기
                </button>
            </div>
            <div className={styles.ModalLayout}>
                <ModalComponent
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    content={modalContent}
                />
            </div>
        </>
    );
}

export default Step7Form;

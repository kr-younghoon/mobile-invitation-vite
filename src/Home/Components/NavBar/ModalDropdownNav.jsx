import { useState } from 'react';
import styles from './ModalDropdoxNav.module.css';
import CloseButtonSVG from '../../Assets/SVG/CloseButtonSVG';
import { Link } from 'react-router-dom';

function ModalDropdownNav() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div>
            <div className={styles.header_margin}>
                <button onClick={handleShow} className={styles.header_navbar}>
                    <div className={styles.header_navbar_line} />
                    <div className={styles.header_navbar_line} />
                </button>
            </div>

            {showModal && (
                <div className={styles.pre_modal}>
                    <div className={`${styles.modal}`}>
                        <div className={styles.modal_content}>
                            <button
                                className={styles.modal_close}
                                onClick={handleClose}
                            >
                                <CloseButtonSVG />
                            </button>

                            <div className={styles.modal_menu}>
                                <Link
                                    to="/"
                                    style={{ textDecoration: 'none' }}
                                    onClick={handleClose}
                                >
                                    <p className={styles.t}>첫 페이지</p>
                                </Link>

                                <Link
                                    to="/places-and-times"
                                    style={{ textDecoration: 'none' }}
                                    onClick={handleClose}
                                >
                                    <p className={styles.t}>시간 및 장소</p>
                                </Link>
                                <Link
                                    to="/reviews"
                                    style={{ textDecoration: 'none' }}
                                    onClick={handleClose}
                                >
                                    <p className={styles.t}>방문 후기</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModalDropdownNav;

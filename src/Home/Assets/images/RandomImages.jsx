import React, { useState, useEffect } from 'react';

function RandomImagePicker({ paths }) {
    const [randomImagePath, setRandomImagePath] = useState(null);
    const imagePaths = paths;

    useEffect(() => {
        // 이미지 경로 배열이 주어진 경우
        if (Array.isArray(imagePaths) && imagePaths.length > 0) {
            // 랜덤한 인덱스를 생성
            const randomIndex = Math.floor(Math.random() * imagePaths.length);

            // 해당 인덱스의 이미지 경로를 선택
            const selectedImagePath = imagePaths[randomIndex];
            setRandomImagePath(selectedImagePath);
        }
    }, [imagePaths]);

    return (
        <div>
            {randomImagePath ? (
                <>
                    <p>{randomImagePath}</p>
                    <img src="./01.jpeg" alt="Random" />
                </>
            ) : (
                <p>No images available.</p>
            )}
        </div>
    );
}

export default RandomImagePicker;

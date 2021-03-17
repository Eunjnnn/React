import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleHabit = (props) => {
    // state = {
    //     count: 0,
    // };

    const [count, setCount] = useState(0);
    const spanRef = useRef(); // 레퍼런스를 한번만 만들고 메모리에 저장해놓고 재사용함

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    useEffect(() => {
        console.log(`mounted & updated!: ${count}`);
    },[]); // 한번만 호출됨

    /* useEffect(() => {
        console.log(`mounted & updated!: ${count}`);
    },[count]); */ // 원하는 데이터가 변경될때마다 호출됨

    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">
                Reading
            </span>
            <span className="habit-count">{count}</span>
            <button 
                className="habit-button habit-increase"
                onClick={handleIncrement}
            >
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;
import React, { useState, useEffect, useCallback } from 'react'
import './ScrollToTop.scss'

export default function ScrollToTop(props) {

    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if(window.scrollY !== 0){
                //set thing to visible
                // document.getElementById("scroll-to-top").style.opacity = 1.0;
            }else{
                //set back to default
                // document.getElementById("scroll-to-top").style.opacity = 1.0;
            }
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <div id='scroll-to-top' onClick={console.log(props.scrollToTop)}>
            <p>Top</p>
        </div>
    )
}

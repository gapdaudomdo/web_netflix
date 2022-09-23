import { useEffect, useState } from "react";

export function useScrollY () {
    const [scrollY, setScrollY] = useState(0);
    const handleScrollY =() => {
        const csrollY = window.scrollY || document.documentElement.scrollTop;
    }

    useEffect( () =>{
        handleScrollY();
        window.addEventListener('scroll', handleScrollY);
        return () => {
            window.removeEventListener('scroll', handleScrollY);
        }
    },[]);
    return ([scrollY]);
}
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";


const ScrollBtn = () => {
  const [showBtn, setShowBtn]=useState(false);
  const scrollTop =()=>{
    window.scrollTo({ top:0, behavior: "smooth"});
  }
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="btn-wrap">
    <button className="scrolltop-btn" onClick={scrollTop}><IoIosArrowUp /></button>
    </div>
  );
};

export default ScrollBtn;
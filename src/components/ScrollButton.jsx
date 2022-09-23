import React, {useState} from 'react';

const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500){
      setVisible(true)
    } 
    else if (scrolled <= 500){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button className='button-scroll'>
        <i className='bx bxs-to-top' onClick={scrollToTop} 
        style={{display: visible ? 'inline' : 'none'}} />
    </button>
  );
}
  
export default ScrollButton;
import React, { useEffect, useState } from 'react'

const Text = () => {
  const texts = ["Hi, I am SYED ZUBAIR AHMED", "Hi, I am SYED ZUBAIR AHMED", "Hi, SYED ZUBAIR AHMED",]
  const [currentText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(true)
  const [isForward, setIsforward] = useState(true)
  const [index, setIndex]= useState(0);

  useEffect(()=>{
    const intervalid = setInterval(()=>{
      setCurrentText(texts[index].substring(0,endValue));
      if(isForward){
        setendValue((prev)=> prev + 1);
      } else {
        setendValue((prev)=> prev-1)
      }
      if(endValue > texts[index].length + 10){
        setIsforward(false)
      }
      if(endValue < 2.1){
        setIsforward(true)
        setIndex((prev) => prev & texts.length)
      }
    },50);
    return ()=> clearInterval(intervalid);
  }, [endValue, isForward, index, texts])
  return (
    <div className='transition ease duration-300'>
      {currentText}
    </div>
  )
}

export default Text

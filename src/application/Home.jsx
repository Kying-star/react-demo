import React from 'react';
import { useState } from 'react';
import '../assets/style/home.css'
function Home(props) {
  let [pos, setpos] = useState(0)
  const handleScroll = (e) => {
    console.log(e.pageY);
    console.log(pos - e.pageY);
    setpos(e.pageY);
    // if (e.nativeEvent.deltaY <= 0) {
    //   /* scrolling up */
    //   if (ele.scrollTop <= 0) {
    //     e.preventDefault();
    //     console.log('scrolling up')
    //   }
    // }
    // else {
    //   /* scrolling down */
    //   if (ele.scrollTop + ele.clientHeight >= ele.scrollHeight) {
    //     e.preventDefault();
    //     console.log('scrolling down')
    //   }
    // }
  }
  return (
    <div className="background" onWheel={(e) => handleScroll(e)}>
      <p className="title">企业非法集资风险预测</p>
      <p className="sec-title animation-1">简单</p>
      <p className="sec-title animation-2">高效</p>
      <p className="sec-title animation-3">强大</p>
    </div >
  )
}

export default React.memo(Home);
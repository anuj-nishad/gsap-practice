import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const scrollRef = useRef();

  useGSAP(()=>{
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box)=>{
      gsap.to(box,{
        x: 400,
        rotation: 360,
        scale: 1.5,
        borderRadius: "50%",
        opacity: 0.5,
        ease: "power1.inOut",
        scrollTrigger:{
          trigger: box,
          markers: true,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        }
      })
    })

  },{scope: scrollRef});


  // useGSAP(()=>{
  //   gsap.to(".blue-box",{
  //     y: 500,
  //     repeat: -1,
  //     repeatDelay: 0.5,
  //     yoyo: true,
  //     duration: 2,
  //     rotation: 360,
  //     ease: "power1.inOut",
  //     delay: 0.5,
  //     stagger: {
  //       amount :1.5,
  //       grid: [4,1],
  //       axis: 'x',
  //       from: "center"
  //     },
  //     paused: false,
  //     yoyoEase: true,
  //   })
  // },[]);

  // useGSAP(()=>{
  //   gsap.fromTo("#blue-box",{
  //     x: 20,
  //   },{
  //     x: 680,
  //     repeat: -1,
  //     yoyo: true,
  //     backgroundColor: "red",
  //     rotation: 360,
  //     borderRadius: "100%",
  //     duration: 2,
  //     ease: "bounce.out"
  //   })
  // },[]);

  // const timeline1 = gsap.timeline({
  //   repeat: -1,
  //   duration: 8
  // })

  // useGSAP(()=>{
  //   timeline1.to("#blue-box",{
  //     x:500,
  //     borderRadius: "20%"
  //   })
  //   timeline1.to("#blue-box",{
  //     y:500,
  //     borderRadius: "30%"

  //   })
  //   timeline1.to("#blue-box",{
  //     x:0,
  //     borderRadius: "50%",
  //     scale: 4,
  //     color: "white",
  //     fontSize: 50,

  //   })
  //   timeline1.to("#blue-box",{
  //     y:0,
  //     borderRadius: "0%",
  //     scale:1,
  //     color: "black",
  //     fontSize:0,
    
  //   })
  // },[]);

  function handleClick(){
    timeline1.paused()? timeline1.play(): timeline1.pause();

  }

  return (
    <div ref={scrollRef} className="h-[300vh] bg-gray-300 pt-[100vh]">
      <div className="blue-box my-4 h-28 w-28 bg-blue-500"></div>
      <div className="blue-box my-4 h-28 w-28 bg-blue-600"></div>
      <div className="blue-box my-4 h-28 w-28 bg-blue-700"></div>
      <div className="blue-box my-4 h-28 w-28 bg-blue-800"></div>
      <div className="blue-box my-4 h-28 w-28 bg-blue-900"></div>
      {/* <button className="px-4 py-2 bg-red-950 text-white rounded-2xl" onClick={()=>handleClick()}>Click this</button> */}
    </div>
  )
}

export default App

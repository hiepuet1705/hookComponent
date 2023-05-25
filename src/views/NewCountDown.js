import React from "react"
import {useState,useEffect} from 'react'
const NewCountDown = () => {
    const [count,setCount] = useState(20);
    useEffect(() => {
        if(count == 0) {
            return;
        }
        let timer =  setInterval(()=>{
            setCount(count-1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[count])
    return(<div>
        {count} hooks
    </div>)
}
export default NewCountDown
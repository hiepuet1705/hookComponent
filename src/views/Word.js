import React, { useState } from 'react'

const Word = () => {
   
    const [word,setWord] = useState(null);

    const countWord = (text) => {
        if(text === "" || text == null) return 0;
        const trimmedText = text.trim().replace(/\s+/g, " ");
      
        return trimmedText.split(" ").length;
        

    }

    const handleTextChange = (e) => {
        console.log(word)
        setWord(e.target.value)
    }

  return (
    <div>
        <div><label> {countWord(word)} words </label></div>
        <textarea value={word} onChange={(e)=>handleTextChange(e)} id="message" name="message" rows="12" cols="70">
</textarea>
    </div>
  )
}

export default Word
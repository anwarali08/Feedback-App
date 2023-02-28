import { useState,useContext,useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackForm() {
  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)
  useEffect (()=>{
    if(feedbackEdit.edit===true){
      setbtnDisabled(false)
      setText(feedbackEdit.item.text)
      // setRating(feedbackEdit.item.text)
    }
  },[feedbackEdit])
  const [text,setText] = useState('')
  const [rating,setRating] = useState(10)
  const [btnDisabled,setbtnDisabled] = useState(true)
  const [message,setmessage] = useState(null)
  const handleTextChange = (e)=>{
    console.log(e.target.value)
    setText(e.target.value)
    console.log(text)
    if(text==''){
      setbtnDisabled(true)
      setmessage(null)
    }else if(text!==''&&text.trim().length<=10){
      console.log(text)
      setmessage('Text must be atleast 10 characters')
      setbtnDisabled(true)
    }else{
      setmessage(null)
      setbtnDisabled(false) 
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(text.trim().length>10){
      const newFeedack = {
        rating,
        text
      }

      if(feedbackEdit.edit===true){
        updateFeedback(feedbackEdit.item.id,newFeedack)
        setText('')
      }else{
        addFeedback(newFeedack)
        setText('')
      }
    }
  }
  
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select ={(rating)=>(setRating(rating))}/>
        <div className="input-group">
          <input onChange ={handleTextChange} type="text" placeholder="Write a review" value={text}/>
          <Button type="submit" isDisabled ={btnDisabled}>Send</Button>
        </div>
        {message && <div className ='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
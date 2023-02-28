import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(
    [{
    id: 1,
    text: "This item is from context 1",
    rating: 10,
  },
  {
    id: 2,
    text: "This item is from context 2",
    rating: 5,
},
{
  id: 3,
  text: "This item is from context 3",
  rating: 8,
}]
  );
  const [feedbackEdit,setFeedbackEdit] = useState({
    item:{},
    edit:false
  })
  //Delete Feedback
  const DeleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };
// set item to update
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit:true
    })

  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([...feedback, newFeedback]);
  };

  const updateFeedback = (id,updatedItem) => {
    
    console.log(feedback)
    console.log("Editing")
    console.log(id)
    setFeedback(
      feedback.map((item)=> item.id === id? {...item,...updatedItem} :item)
    )
    console.log(feedback)
    setFeedbackEdit({
      item:{},
      edit:false
    })
    
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        DeleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

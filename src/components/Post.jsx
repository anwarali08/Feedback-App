// import {useParams} from "react-router-dom"
import {Navigate, useNavigate,Routes,Route} from "react-router-dom"
function Post() {
  const status =200
  const navigate = useNavigate()
  const onClick = ()=>{
    console.log("Hello buddy")
    navigate('/about')
  }
  if(status===404){
    return <Navigate to="/notfound"/>
  }
  // const params = useParams()
  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      {/* <h1>Post: {params.id}</h1>
      <h1>Name: {params.name}</h1> */}
      <Routes>
        <Route path="/show" element={<h1>Hello everyone</h1>}/>
      </Routes>
    </div>
  )
}

export default Post
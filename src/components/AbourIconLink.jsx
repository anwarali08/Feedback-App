import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AbourIconLink() {
  return (
    <div className='about-link'>
      <Link to="/about"> 
      {/* <Link to={{pathname:"/about",
                  search: "abcd",
                  hash: "hello"}}> */}
      <FaQuestion size={30}/>
      </Link>
    </div>
  )
}

export default AbourIconLink
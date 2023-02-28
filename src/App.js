import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
// import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AbourIconLink";
// import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext"
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={
              <>
                <FeedbackForm />
                <FeedbackStats/>
                <FeedbackList />

                {/* <Card>
                  <NavLink to="/" activeClassName = 'active'>
                    Home 
                    </NavLink>

                    <NavLink to="/about" activeClassName = 'active'>
                    About
                    </NavLink>
                </Card> */}
                <AboutIconLink />
              </>
            }>
            </Route>
            {/* <Route path="/about/*" element={<AboutPage />} />
            <Route path="/post*" element={<Post />} /> */}
            {/* <Route path="/post/show" element={<h1>Helllo guys</h1>}/> */}
            {/* <Route path="/post/:id/:name" element={<Post/>}/> */}

          </Routes>
        </div>
      </Router>
    </FeedbackProvider>

  );
}
export default App;

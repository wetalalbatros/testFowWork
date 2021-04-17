import React from 'react';
import Main from "./components/Main"
import './App.css';

const linkProps = [
  {id:5,url:'https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg'},
  {id:7,url:'https://media.bitdegree.org/storage/media/images/2018/10/The-Most-Essential-React-Interview-Questions.jpg'},
  {id:9,url:'https://miro.medium.com/max/1000/1*dyf4j5Gq3IXyGR1ZIs6VpA.jpeg'}]

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Main linkProps={linkProps}/>
        </div>
    </div>
  );
}

export default App;

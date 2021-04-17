import React, {useState, useEffect} from "react";
import axios from 'axios';
import ListItem from '../ListItem'
import './Main.css'
const Main = ({linkProps}) => {

  const [show, setShow] = useState(false)
  const [counter, setCounter] = useState(0)
  const [values, setValues] = useState(null)
  const checkValues = (res) => {
    const result = res.filter(num=>num%2)
    return result.length ? setShow(false) : setShow(true)
  }

  useEffect(() => {
    axios.all([
      axios.get(`https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new `),
      axios.get(`https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new `)
    ]).then(res => {
      const values = res.map(elem=>elem.data)
        checkValues(values);
        setValues(values)
      })
  },[counter])


  const links = linkProps.map(elem=> <ListItem key={elem.id} id={elem.id} link={show ? elem.url : "http://dummyimage.com/580"} />)

    return(
      <div>
        <div>
          <p>numbers: {values ? values.map(elem=><span className='int'>{elem}</span>): null}</p>
        </div>
        <button className='btn' onClick={()=>setCounter(counter+1)}>Try again</button>
        <ul className='list'>
         {links}
      </ul>
    </div>
    )
}

export default Main;
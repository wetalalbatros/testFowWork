import React from 'react'

const ListItem = ({link,id}) => {
  return (
    <li key={id.toString()}>
      {<img className='img' src={link} alt="Дефолтная картинка"/>}
  </li>
  )
}

export default ListItem
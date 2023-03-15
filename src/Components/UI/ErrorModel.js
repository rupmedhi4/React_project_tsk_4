import React from 'react'
import Card from './Card';
import Button from './Button'
import './ErrorModel.css'

 const ErrorModel=(props)=> {
  return (
    
    <div >
    <div onClick={props.onConfirm}/>
    <Card  className='model'>
        
      <header className='header'>
        <h2>{props.title}</h2>
      </header>
 
      <div className='content'>
        <p>{props.message}</p>
      </div> 

      <footer className='actions'>
           <Button onClick={props.onConfirm  }> okey </Button>
      </footer>
    </Card> 
    </div>
  )
}
export default ErrorModel;
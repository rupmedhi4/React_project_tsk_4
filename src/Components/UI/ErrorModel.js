import React from 'react'
import Card from './Card';
import Button from './Button'
import './ErrorModel.css'
import ReactDom from 'react-dom'

const Backdrop = (props) =>{
  return(
    <div onClick={props.onConfirm}/>
  )
}

const   ModalOverlay =(props)=>{
  return(
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
  )
}

 const ErrorModel=(props)=> {
  return (
    
    <div >
      {ReactDom.createPortal(<Backdrop 
      onClick={props.onConfirm}
      />,

       document.getElementById('backdrop-root')
      )}

      {ReactDom.createPortal(<ModalOverlay 
        title={props.title} message ={props.message}
        onConfirm={props.onConfirm}
      />,
      document.getElementById('overlay-root') 
      )}
    </div>
  )
}
export default ErrorModel;
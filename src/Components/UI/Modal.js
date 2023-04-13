import { Fragment } from "react"
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'


const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.closeModel}></div>;
};


const Overlay =(props) =>{
    return(
    <div className={classes.modal}>
    <div className={classes.overlay}>{props.children}</div>
    </div>
    )
}

const Modal =(props) =>{
    
    const modalRoot = document.getElementById('overlay');
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop closeModel={props.closeModel}/>,modalRoot)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,modalRoot)}
        </Fragment>
    )
    
};export default Modal


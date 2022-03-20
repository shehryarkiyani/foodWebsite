import React, { Component } from 'react';

import burger from '../../assets/burger1.avif'
import logo from "../../assets/logo.avif";
import halal from "../../assets/halal.png";
import {CardData} from "../../redux/actions/action"
import { useDispatch } from 'react-redux';
 const Card = (props) => {
const dispatch=useDispatch();
     let cl=props.img!=null?"col-6 col-sm-7 col-md-7 col-lg-7 col-xl-8 mycard-left":"col-12 mycard-left padd-right";
     const mstyle={
       marginTop:props.margin!=null?props.margin:''
     }
     const buttonClickHandler = () => {
     
      props.CardClicked(props.title);
  }
  return (
    <div className='mycard' onClick={buttonClickHandler}>
        <div className='row'>
            <div className={cl}>
               <div className='mycard-header' >{props.title} <div style={{display:'flex',flexDirection:'row'}}> {props.icon1!=null?<i style={{marginRight:'5px'}} class={props.icon1}></i>:''} {props.icon2!=null?<i style={{marginRight:'5px'}} class={props.icon2}></i>:''} {props.hl!=null? <img src={props.hl} style={{height:"21px"}}/>:''}   </div>  </div>
               <div className='mycard-detail' >
                   <span className='textline'> {props.description}
              </span>
               </div>
              <p className='myprice' style={mstyle} >
              {props.price}
              </p>
            </div>
           {props.img!=null? <div className='col-6 col-sm-5 col-md-5 col-lg-5 col-xl-4 mycard-img-container' style={{backgroundImage:`url(${props.img})`}}>
            </div>:''}
           
        </div>

    </div>
  )
}
export default Card;

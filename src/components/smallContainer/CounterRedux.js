import React from 'react'
import {connect } from 'react-redux'
import {minusCart, addCart } from '../../Actions/CounterActions'

function CounterRedux(props) {
    console.log('ini props', props)
    return (
        <div>
           <h1>Produk anda :{props.cart}</h1> 

           <button onClick={() =>{
               props.addCart()
            }}>+</button>
           <p>{props.cart}</p>
           <button onClick={()=>{props.minusCart()}}>-</button>
        </div>
    )
}

const mapStateToProps = ({cart}) =>{
    return {
        cart : cart
    }   
}
const mapDispatchToProps = (dispatch) => {
   return {
    addCart : ()=>dispatch(addCart()),
    minusCart : ()=>dispatch(minusCart())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterRedux)

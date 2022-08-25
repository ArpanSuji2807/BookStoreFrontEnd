import React from 'react'
import { CartDetails } from '../cartdetails/cartdetails'
import { CustomerDetails } from '../customer/customer'
import { OrderSummary } from '../ordersummary/ordersummary'
import './mycart.css'
import { getCartItem } from '../../services/dataservice'
import { Header } from '../Header/header'

export const Mycart = (props) => {

    const [sectTwo, setSectTwo] = React.useState(false)
    const [sectThree, setSectThree] = React.useState(false);
    const [cartArr,setCartArr] = React.useState([]) 

    const getAllCartItem = () => {
        getCartItem().then((res) => {
            console.log(res);
            setCartArr(res.data.data.books)
        }).catch((error) => {
            console.log(error);
        })
    }

   
    React.useEffect(() => {
        getAllCartItem()
    }, [])

    const showAddresDetails = () => {
        setSectTwo(true)
    }

    const showOrderSummary = () => {
        setSectThree(true)
    }

    
    return (<div className='cartwholePage'>
        <Header/>
    <div className='mycartpage'>
        <div className='cartheader'>
            Home/My cart
        </div>
        <div className='cartDetailsPage'>        
            <CartDetails   setSectTwo={setSectTwo} showAddresDetails={showAddresDetails} />)
        </div>
        {
            sectTwo ?
                <div className='customerDetails'>
                    <CustomerDetails setSectThree={setSectThree} showOrderSummary={showOrderSummary} />
                </div> :
                <div className="AddressDetails">
                    <div className="AddressDetails1">Address Details</div>
                </div>
        }
        {
            sectThree ?
                <OrderSummary /> :
                <div className="summary">
                    <div className="summary1">Order Summary</div>
                </div>
        }
    </div>
    </div>)
}
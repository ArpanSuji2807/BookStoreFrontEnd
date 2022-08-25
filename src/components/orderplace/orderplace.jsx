import React from 'react'
import './orderplace.css'
import placedOrderImg from '../../assets/orderplace.png'
import { Button } from '@mui/material'
import { Header } from '../Header/header'

export const PlaceOrder = () => {
    return (<div className='orderwholepage'>
        <Header/>
    <div className='orderplacepage'>
        <div className='orderImage'>
            <img src={placedOrderImg} className="orderimage" />
        </div>
        <div className='ordermessage'>
            hurray!!! your order is confirmed<br />
            the order id is #123456 save the order id for<br />
            further communication..
        </div>
        <div className='contactdetails'>
            <div className='contactheader'>
                <div className='contactemail'>Email us</div>
                <div className='contactNumber'>Contact us</div>
                <div className='contactAddress'>Address</div>
            </div>
            <div className='contactcontent'>
                <div className='emailcontent'>arpan@gmail.com</div>
                <div className='numbercontent'>+91-8897456889</div>
                <div className='addresscontent'>
                    42,14th Main, 15th Cross, Sector 4,opp to BDA,
                    complex, near Kumarakom restaurant, HSR Layout,
                    Bangalore 560034
                </div>
            </div>
        </div>
        <div className='shopping-button'>
            <Button variant="contained" size='small' >Continue Shopping</Button>
        </div>
    </div>
    </div>)
}
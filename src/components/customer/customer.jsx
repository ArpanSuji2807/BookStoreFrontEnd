import React from "react";
import './customer.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AddCustomerDetails } from "../../services/dataservice";

export const CustomerDetails = (props) => {

    const[customerDetails,setCustomerDetails] = React.useState({Name:'',PhoneNumber:'',Address:'',City:'',Landmark:'',Type:''})

    const showSectionThree =()=>{
        AddCustomerDetails(customerDetails).then((res) =>{
            console.log(res);
            props.showOrderSummary()
        }).catch((error) =>{
            console.log(error);
        })
    }

    const takeFullName = (event) =>{
        setCustomerDetails({...customerDetails,Name:event.target.value})
    }

    const takeMobile = (event) =>{
        setCustomerDetails({...customerDetails,PhoneNumber:event.target.value})
    }

    const takeAddress = (event) =>{
        setCustomerDetails({...customerDetails,Address:event.target.value})
    }

    const takeCity = (event) =>{
        setCustomerDetails({...customerDetails,City:event.target.value})
    }

    const takeState = (event) =>{
        setCustomerDetails({...customerDetails,Landmark:event.target.value})
    }

    const takeType = (event) =>{
        setCustomerDetails({...customerDetails,Type:event.target.value})
    }

    return (<div className="customer-whole-page">
        <div className="customercontent">
            <div className="customerHeader">
                <div className="customerHeader1">Customer Details</div>
                <div className="customerHeader2">Add New Address</div>
            </div>
            <div className="customerInput">
                <div className="nameInput">
                    <TextField onChange={takeFullName} style={{ width: '45%' }} id="outlined-basic" label="Full Name" variant="outlined" size="small" />
                    <TextField  onChange={takeMobile} style={{ width: '45%' }} id="outlined-basic" label="Mobile Number" variant="outlined" size="small" />
                </div>
                <div className="addressInput">
                    <TextField  onChange={takeAddress} style={{ width: '94%' }} id="outlined-basic" label="Address" variant="outlined" />
                </div>
                <div className="cityInput">
                    <TextField  onChange={takeCity} style={{ width: '45%' }} id="outlined-basic" label="city/town" variant="outlined" size="small" />
                    <TextField  onChange={takeState} style={{ width: '45%' }} id="outlined-basic" label="State" variant="outlined" size="small" />
                </div>
                <div className="type">Type</div>
                <div onChange={takeType} className="labels">
                    <div className="label1">
                        <input type="checkbox" id="Home" />
                        <label for="Home">Home</label><br />
                    </div>
                    <div className="label1">
                        <input type="checkbox" id="Work" />
                        <label for="Work">Work</label><br />
                    </div>
                    <div className="label1">
                        <input type="checkbox" id="Others" />
                        <label for="Others">Others</label><br />
                    </div>
                </div>
            </div>
            <div className="continue">
                {
                    props.sectThree? <div></div>:
                    <Button onClick={showSectionThree} size="small" style={{width:'20%'}} variant="contained">Continue</Button>
                }
            </div>
        </div>
    </div>)
}
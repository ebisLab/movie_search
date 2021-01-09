import React from 'react';
import Modal from 'react-modal'

export default function CheckoutModal({customStyles,setIsOpen,isOpen}) {
    return (
        <Modal
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        isOpen={isOpen}
        >
        <button onClick={()=>setIsOpen(false)}>Close</button>
        <div>Card Info</div>
        <div style={{width:"300px"}}>
        <form className="form" autoComplete="off" noValidate>
<fieldset>
  <label htmlFor="card-number">Card Number</label>
  <div style={{display:"inline-flex"}}>
  <input type="num" id="card-number" className="input-cart-number" maxLength="4" style={{width:"20%"}} />
  <input type="num" id="card-number-1" className="input-cart-number" maxLength="4" style={{width:"20%"}} />
  <input type="num" id="card-number-2" className="input-cart-number" maxLength="4" style={{width:"20%"}} />
  <input type="num" id="card-number-3" className="input-cart-number" maxLength="4" style={{width:"20%"}}/>
  </div>
</fieldset>
<fieldset>
  <label htmlFor="card-holder">Card holder</label>
  <input type="text" id="card-holder" />
</fieldset>
<fieldset className="fieldset-expiration">
  <label htmlFor="card-expiration-month">Expiration date</label>
  <div style={{display:"inline-flex"}}>
  <div className="select">
    <select id="card-expiration-month">
      <option></option>
      <option>01</option>
      <option>02</option>
      <option>03</option>
      <option>04</option>
      <option>05</option>
      <option>06</option>
      <option>07</option>
      <option>08</option>
      <option>09</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </select>
  </div>
  <div className="select">
    <select id="card-expiration-year">
      <option></option>
      <option>2016</option>
      <option>2017</option>
      <option>2018</option>
      <option>2019</option>
      <option>2020</option>
      <option>2021</option>
      <option>2022</option>
      <option>2023</option>
      <option>2024</option>
      <option>2025</option>
    </select>
  </div>
  </div>
</fieldset>
<fieldset className="fieldset-ccv">
  <label htmlFor="card-ccv">CCV</label>
  <input type="text" id="card-ccv" maxLength="3" />
</fieldset>
<button className="btn"><i className="fa fa-lock"></i> submit</button>
</form>
</div>
        </Modal>
    )
}

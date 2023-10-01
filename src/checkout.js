import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CheckoutPage = () => {
  const history = useHistory();

  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform payment processing and validation here
    // Call the payment gateway API to process the payment

    // Redirect to a success page after successful payment
    history.push('/success');
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="expiry">Expiry:</label>
          <input
            type="text"
            id="expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default CheckoutPage;

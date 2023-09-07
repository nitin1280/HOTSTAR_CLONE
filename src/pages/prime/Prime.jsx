import React, { useState } from 'react';
import './prime.css'; // Make sure to import your CSS file
import Header from '../../components/hedaer/Header';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';


const Prime = () => {
  const [subscriptionPlan, setSubscriptionPlan] = useState(null);
  const navigate = useNavigate()

  const handlePlanChange = (plan) => {
    setSubscriptionPlan(plan);
  };

  const handleSubscribe = () => {
    // Here you would handle the subscription, payment, and user authentication.
    // You might use an API call to your backend for these actions.
    alert("Thank You And Continue With Your Super😍")
    navigate("/home")
    console.log(`Subscribed to ${subscriptionPlan} plan!`);
  };

  return (
    <div className="app-container2">
      <Navbar/>
      <div className="subscription-container5">
        <h1 className='h1'>Hotstar Premium Subscription</h1>
        <h2 className='.h1'><li>Choose a subscription plan to unlock premium features:</li></h2>

       <h2 className='.h2'> <label>
          <input
            type="radio"
            name="subscriptionPlan"
            value="monthly"
            checked={subscriptionPlan === 'monthly'}
            onChange={() => handlePlanChange('monthly')}
          />
          Monthly Plan ($9.99/month)
        </label></h2>

       <h2 className='.h2'> <label>
          <input
            type="radio"
            name="subscriptionPlan"
            value="annual"
            checked={subscriptionPlan === 'annual'}
            onChange={() => handlePlanChange('annual')}
          />
          Annual Plan ($99.99/year)
        </label> </h2>

        <button onClick={handleSubscribe} disabled={!subscriptionPlan} className='btn4'>
          Continue With Super
        </button>
      </div>

      {subscriptionPlan && (
        <div className="benefits-container6">
          <h1 className='.h1'><li>Premium Benefits:</li></h1>
          <ul>
            {subscriptionPlan === 'monthly' && (
             <h2 className='.h2'> <li>Access to all premium content for 30 days</li></h2>
            )}
            {subscriptionPlan === 'annual' && (
             <h2 className='.h2'> <li>Unlimited access to premium content for 1 year</li></h2>
            )}
           <h2 className='.h2'><li>Ad-free streaming experience</li></h2>
            <h2 className='.h2'><li>Download content for offline viewing</li></h2>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Prime;

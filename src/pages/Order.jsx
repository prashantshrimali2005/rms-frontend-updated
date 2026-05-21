import React from 'react';
import OrdertopCard from '../components/OrdertopCard';
import OrderTable from '../components/OrderTable';
import ViewOrder from '../components/ViewOrder';

const Order = () => {
  return (
    <div>
        <div className='staff-left text-[#c3871c] font-bold text-3xl top-0 ml-3 mb-4'>
          <h1>Orders</h1>
        </div>
      <OrdertopCard/>
      <OrderTable/>
      <ViewOrder/>
    </div>
  );
}

export default Order;

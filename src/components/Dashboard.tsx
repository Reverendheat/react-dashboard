import React from 'react'
import { Card } from './Card';

export const Dashboard = () => {
  return (
    <>
      <div className="dash-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dash-container">
        <Card size="small" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?" title="Small Card" />
        <Card size="small" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?" title="Small Card" />
        <Card size="small" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?" title="Small Card" />
        <Card size="medium" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?" title="Small Medium" />
        <Card size="medium" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?" title="Small Medium" />
        <Card size="large" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sunt quidem architecto laborum quod fugit nesciunt? Cum labore mollitia quasi temporibus odit earum unde tenetur, aliquid rem quo voluptatem nam?" title="Small Large" />
      </div>
    </>
  )
}

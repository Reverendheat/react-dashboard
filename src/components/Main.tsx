import React from 'react'
import '../App.css';
import { Dashboard } from './Dashboard';
export const Main = () => {
  return (
    <main className='main-container'>
      <div className='item-full'>
        <Dashboard />
      </div>
    </main>
  )
}

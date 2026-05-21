import React from 'react'
import Sidebar from './components/Sidebar'
import Staff from './pages/Staff'
import Dashboard from './pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import TablesPage from './pages/TablesPage'
import Report from './pages/Report'
import Billing from './pages/Billing'
import Order from './pages/Order'

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-20 md:ml-60 min-h-screen w-full p-4 md:p-8 overflow-x-hidden">
         <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/table" element={<TablesPage/>}/>
          <Route path="/report" element={<Report/>}/>
          <Route path="/billing" element={<Billing/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App

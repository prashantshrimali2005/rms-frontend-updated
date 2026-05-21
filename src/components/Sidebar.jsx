import React from 'react'
import logo from '../assets/logo.png'

import {
  House,
  Table,
  NotepadText,
  SquareMenu,
  UserRound,
  ChartNoAxesCombined,
  ReceiptIndianRupee
} from 'lucide-react'

import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (

    <div className="bg-[#f8edd5ce] fixed left-0 top-0 bottom-0 w-20 md:w-60 z-50">

      <ul className="text-[#7b5a11cf] font-semibold p-2 space-y-3">

        {/* LOGO */}

        <div className="flex justify-center mb-8">

          <img
            src={logo}
            alt="logo"
            className="w-14 md:w-28 cursor-pointer rounded-full"
          />

        </div>



        {/* DASHBOARD */}

        <li>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-50
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >

            <House />

            <span className="hidden md:inline">
              Dashboard
            </span>

          </NavLink>

        </li>



        {/* TABLES */}

        <li>

          <NavLink
            to="/table"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-50
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >

            <Table />

            <span className="hidden md:inline">
              Tables
            </span>

          </NavLink>

        </li>



        {/* ORDERS */}

        <li>

          <NavLink
            to="/order"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-50
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >

            <NotepadText />

            <span className="hidden md:inline">
              Orders
            </span>

          </NavLink>

        </li>



        {/* MENU */}

        <li>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-50
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >

            <SquareMenu />

            <span className="hidden md:inline">
              Menu
            </span>

          </NavLink>

        </li>



        {/* STAFF */}

        <li>

          <NavLink
            to="/staff"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-50
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >

            <UserRound />

            <span className="hidden md:inline">
              Staff
            </span>

          </NavLink>

        </li>



        {/* BILLING */}

        <li>

          <NavLink
            to="/billing"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-50
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >

            <ReceiptIndianRupee />

            <span className="hidden md:inline">
              Billing
            </span>

          </NavLink>

        </li>



        {/* REPORT */}

        <li>

          <NavLink
            to="/report"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-50
              ${
                isActive
                  ? "bg-[#F9E4C0] border-r-4 border-[#d89216] shadow-sm"
                  : "hover:bg-[#F9E4C0]"
              }`
            }
          >

            <ChartNoAxesCombined />

            <span className="hidden md:inline">
              Report
            </span>

          </NavLink>

        </li>

      </ul>

    </div>
  )
}

export default Sidebar
import React from 'react'

const staffData = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Waiter",
    phone: "9876543210",
    shift: "Morning",
    status: "Active",
  },
  {
    id: 2,
    name: "Aman Verma",
    role: "Chef",
    phone: "9123456780",
    shift: "Evening",
    status: "Active",
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Manager",
    phone: "9988776655",
    shift: "Morning",
    status: "On Leave",
  },
  {
    id: 4,
    name: "Rohit Jain",
    role: "Cashier",
    phone: "9871204567",
    shift: "Night",
    status: "Active",
  },
  {
    id: 5,
    name: "Neha Joshi",
    role: "Waiter",
    phone: "9011223344",
    shift: "Evening",
    status: "Inactive",
  },
];

const Staff = () => {
  return (
    <main className="staff-main w-full min-h-screen bg-[#fffdf9] p-4 md:p-8 overflow-x-hidden">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-2xl md:text-4xl font-semibold text-[#7b5a11cf]">
          Staff Members
        </h1>

        <button className="bg-[#d89216] hover:bg-[#c98510] text-white px-3 md:px-5 py-2 md:py-3 rounded-xl text-xs md:text-base font-semibold transition whitespace-nowrap">
          + Add Staff
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full min-w-[650px]">

          <thead>
            <tr className="bg-[#f8edd5ce]">
              <th className="p-4 md:p-5 text-left text-[#7b5a11cf]">Name</th>
              <th className="p-4 md:p-5 text-left text-[#7b5a11cf]">Role</th>
              <th className="p-4 md:p-5 text-left text-[#7b5a11cf]">Phone</th>
              <th className="p-4 md:p-5 text-left text-[#7b5a11cf]">Shift</th>
              <th className="p-4 md:p-5 text-left text-[#7b5a11cf]">Status</th>
            </tr>
          </thead>

          <tbody>
            {staffData.map((staff) => (
              <tr key={staff.id}>
                <td className="p-4 md:p-5 text-center whitespace-nowrap">
                  {staff.name}
                </td>

                <td className="p-4 md:p-5 text-center whitespace-nowrap">
                  {staff.role}
                </td>

                <td className="p-4 md:p-5 text-center whitespace-nowrap">
                  {staff.phone}
                </td>

                <td className="p-4 md:p-5 text-center whitespace-nowrap">
                  {staff.shift}
                </td>

                <td className="p-4 md:p-5 text-center whitespace-nowrap">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${staff.status === "Active" ? "bg-green-100 text-green-700" : ""}
                      ${staff.status === "Inactive" ? "bg-red-100 text-red-700" : ""}
                      ${staff.status === "On Leave" ? "bg-yellow-100 text-yellow-700" : ""}
                    `}
                  >
                    {staff.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </main>
  )
}

export default Staff
import React from 'react'
import { Download } from 'lucide-react'

const invoiceData = [
  {
    invoiceNo: "INV-1001",
    tableNo: "T-01",
    amount: "₹1,250",
    payment: "UPI",
    paymentDate: "18 May 2026",
  },

  {
    invoiceNo: "INV-1002",
    tableNo: "T-05",
    amount: "₹2,100",
    payment: "Cash",
    paymentDate: "18 May 2026",
  },

  {
    invoiceNo: "INV-1003",
    tableNo: "T-03",
    amount: "₹980",
    payment: "Card",
    paymentDate: "17 May 2026",
  },

  {
    invoiceNo: "INV-1004",
    tableNo: "T-07",
    amount: "₹3,450",
    payment: "UPI",
    paymentDate: "17 May 2026",
  },

  {
    invoiceNo: "INV-1005",
    tableNo: "T-02",
    amount: "₹1,780",
    payment: "Cash",
    paymentDate: "16 May 2026",
  },

  {
    invoiceNo: "INV-1006",
    tableNo: "T-10",
    amount: "₹2,650",
    payment: "Card",
    paymentDate: "16 May 2026",
  },
]

const Billing = () => {

  return (

    <div className="staff-main p-4 md:p-8 w-full">

      {/* HEADING */}

      <div className="text-3xl md:text-4xl text-[#7b5a11cf] ml-4 md:ml-10 font-semibold">

        <h1>Invoice</h1>

      </div>



      {/* TABLE */}

      <div className="flex justify-center">

        <div className="m-4 md:m-10 max-w-full overflow-x-auto">

          <table className="min-w-[900px] border-gray-300 rounded-lg">

            <thead>

              <tr className="bg-[#f8edd5ce]">

                <td className="border-0 p-5 text-[#7b5a11cf]">
                  Invoice No.
                </td>

                <td className="border-0 p-5 text-[#7b5a11cf]">
                  Table
                </td>

                <td className="border-0 p-5 text-[#7b5a11cf]">
                  Amount
                </td>

                <td className="border-0 p-5 text-[#7b5a11cf]">
                  Payment
                </td>

                <td className="border-0 p-5 text-[#7b5a11cf]">
                  Date
                </td>

                <td className="border-0 p-5 text-[#7b5a11cf]">
                  Action
                </td>

              </tr>

            </thead>



            <tbody>

              {invoiceData.map((invoice, index) => (

                <tr key={index}>

                  <td className="p-5 text-center whitespace-nowrap">
                    {invoice.invoiceNo}
                  </td>

                  <td className="p-5 text-center whitespace-nowrap">
                    {invoice.tableNo}
                  </td>

                  <td className="p-5 text-center whitespace-nowrap">
                    {invoice.amount}
                  </td>

                  <td className="p-5 text-center whitespace-nowrap">
                    {invoice.payment}
                  </td>

                  <td className="p-5 text-center whitespace-nowrap">
                    {invoice.paymentDate}
                  </td>

                  <td className="p-5 text-center cursor-pointer whitespace-nowrap">

                    <div className="flex justify-center">

                      <Download />

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default Billing
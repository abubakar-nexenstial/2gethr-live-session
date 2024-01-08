import React from 'react'

export default function Table() {
  return (
    <div className="overflow-x-auto ">
  <table className="table border-t-2 border-[#424242] bg-slate-30 backdrop-blur-md text-white">
    <tbody>
      {/* row 1 */}
      <tr>
        <th>Title : </th>
        <td>This is the TItle Field</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>Creator : </th>
        <td>Jhon Doe</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>From : </th>
        <td>01/01/2023 08:00 PM</td>
      </tr>
      <tr>
        <th>To : </th>
        <td>01/01/2023 09:00 PM</td>
      </tr>
      <tr>
        <th>Description : </th>
        <td className='max-w-2/1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga in rerum magni at doloribus.</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

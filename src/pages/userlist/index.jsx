import React from 'react'
import DashboardHeader from '../dasboardheader'
import TableFilter from '../../components/layout/tablefilters'


const userTable = [
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        size: '5000',
        date:'2025-03-15',
        price: '149',
        referralLevel: 1,
        commission: '17,88'
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        size: '5000',
        date:'2025-03-15',
        price: '149',
        referralLevel: 1,
        commission: '17,88'
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        size: '5000',
        date:'2025-03-15',
        price: '149',
        referralLevel: 1,
        commission: '17,88'
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        size: '5000',
        date:'2025-03-15',
        price: '149',
        referralLevel: 1,
        commission: '17,88'
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        size: '5000',
        date:'2025-03-15',
        price: '149',
        referralLevel: 1,
        commission: '17,88'
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        size: '5000',
        date:'2025-03-15',
        price: '149',
        referralLevel: 1,
        commission: '17,88'
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        size: '5000',
        date:'2025-03-15',
        price: '149',
        referralLevel: 1,
        commission: '17,88'
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        size: '5000',
        date:'2025-03-15',
        price: '149',
        referralLevel: 1,
        commission: '17,88'
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        size: '5000',
        date:'2025-03-15',
        price: '149',
        referralLevel: 1,
        commission: '17,88'
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        size: '5000',
        date:'2025-03-15',
        price: '149',
        referralLevel: 1,
        commission: '17,88'
    },
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        size: '5000',
        date:'2025-03-15',
        price: '149',
        referralLevel: 1,
        commission: '17,88'
    },

]
const UserList = () => {
    return (
        <>
            <DashboardHeader heading="Users" />
            <div className='main'>
                <div className='customer-table'>
                    <TableFilter />
                    <div className='data-table-wrapped'>
                        <div className='data-table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Account Size ($)</th>
                                        <th>Price Paid ($)</th>
                                        <th>Purchase Date </th>
                                        <th>Referral Level</th>
                                        <th>Commission Earned ($) </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userTable?.map((td, index) => (
                                        <tr key={index}>
                                            <td>{td.name} </td>
                                            <td>{td.email}</td>
                                            <td>{td.size}</td>
                                            <td>{td.price}</td>
                                            <td>{td.date}</td>
                                            <td>LEVEL {td.referralLevel}</td>
                                            <td>{td.commission}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UserList
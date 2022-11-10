import React from 'react';
import styles from './OrderHistory.module.css';
import PageHeading from '../UtilityComponents/PageHeading/PageHeading';

function OrderHistory() {
  return (
    <div className={`${styles.historyContainer}`}>
        <PageHeading>Order History</PageHeading>

        <div className={`${styles.orderHistoryTableContainer}`}>
            <table className={`${styles.orderHistoryTable}`}>
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Order-Id</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1. </td>
                    <td>OR12345</td>
                    <td>Oppo 16 Pro</td>
                    <td>1</td>
                    <td>Ordered</td>
                </tr>
                <tr>
                    <td>2. </td>
                    <td>OR54321</td>
                    <td>Oppo 16 Pro</td>
                    <td>1</td>
                    <td>Ordered</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className={`${styles.noOrderContainer}`}>
            <h2>No order has been made yet.</h2>
        </div>
        
    </div>

  )
}

export default OrderHistory;
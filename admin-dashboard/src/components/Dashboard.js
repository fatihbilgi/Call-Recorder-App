import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/records')
            .then(response => {
                setRecords(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Call Records</h1>
            <table>
                <thead>
                    <tr>
                        <th>Filename</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map(record => (
                        <tr key={record._id}>
                            <td>{record.filename}</td>
                            <td>{new Date(record.date).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;

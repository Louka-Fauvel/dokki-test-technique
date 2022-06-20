import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import axios from "axios";

function Users() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await  axios('https://dummyjson.com/users');

            setData(result.data.users);
        };

        fetchData();
    }, [])

    return (
        <Fragment>
            <ul>
                {data.map((user: { id: React.Key; firstName: string; lastName: string; }) => (
                    <li key = {user.id} >
                        firstName: {user.firstName},
                        lastName: {user.lastName},
                    </li>
                ))}
            </ul>

        </Fragment>
    );
}

export default Users;
import React from 'react';
import FullUsers from "../full-user/FullUsers";


const AllUsers = ({items: users})=>  {

    return (
        <div>
            <FullUsers items={users}/>
        </div>
    );
}

export default AllUsers;
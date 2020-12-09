import React from "react";
import Paginator from "./Paginator";
import User from './User';

const Users = ({ totalUsersCount, pageSize, currentPage, onChangePage, ...props }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) pages.push(i);

    return (
        <div>
            <Paginator currentPage={currentPage} onChangePage={onChangePage}
                totalItemsCount={totalUsersCount} pageSize={pageSize} />
            {props.users.map(u => <User u={u}
                follow={props.follow}
                unfollow={props.unfollow} key={u.id} 
                followingInProgress={props.followingInProgress} />
            )}
        </div>)
};

export default Users;

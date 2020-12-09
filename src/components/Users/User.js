import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user-avatar.png";
import { NavLink } from "react-router-dom";

const User = ({ u, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={"/profile" + u.id}>
                        <img
                            className={styles.photoUser}
                            src={u.photos.small || userPhoto} />
                    </NavLink>
                </div>

                <div className={styles.infoUser}>
                    <p>{u.name}</p>
                    <p>{u.status}</p>
                    <div className={styles.location}>
                        <p>{"u.location.city"}</p>
                        <span>{"u.location.country"}</span>
                    </div>
                </div>
            </span>
            {u.followed ? (
                <button disabled={followingInProgress.some(u => u === u.id)} onClick={() => {
                    unfollow(u.id);
                }}
                    className={styles.buttonFollowed}> Unfollowed </button>) :
                (<button disabled={followingInProgress.some(u => u === u.id)}
                    onClick={() => {
                        follow(u.id);
                    }}
                    className={styles.buttonFollowed}
                >
                    Followed
    </button>
                )}
        </div >)
};

export default User;

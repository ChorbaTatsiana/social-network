import React, { useState, useEffect } from "react";


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const statusChange = e => {
        setStatus( e.currentTarget.value);
    }; 
    useEffect(()=> {
        setStatus(props.status);
    },[props.status])
    return (
        <>
            {!editMode ? (
                <div>
                    <span onDoubleClick={activateEditMode}>
                        {status || "-----"}
                    </span>
                </div>
            ) : (
                    <div>
                        <input
                            onChange={statusChange}
                            autoFocus={true}
                            onBlur={deactivateEditMode}
                            value={status}
                        />
                    </div>
                )}

        </>
    )
}

export default ProfileStatusWithHooks;

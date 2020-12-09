import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "./../../common/preloader/preloader";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        editMode: false,
        status: this.props.status
    };
    statusInputRef = React.createRef();
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };
    statusChange = e => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <>
                {!this.state.editMode ? (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || "-----"}
                        </span>
                    </div>
                ) : (
                        <div>
                            <input
                                onChange={this.statusChange}
                                autoFocus={true}
                                onBlur={this.deactivateEditMode}
                                value={this.state.status}
                            />
                        </div>
                    )}
            </>
        );
    }
}

export default ProfileStatus;

import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../common/preloader/preloader';

import ProfileStatusWithHooks from './PrfolieStatuswithHooks';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/* <div>
                <img crs='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.talkwalker.com%2Fblog%2Fwhat-is-image-analysis&psig=AOvVaw064vhZEMKq6fiLHSV7whld&ust=1605003720065000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjg2_ee9ewCFQAAAAAdAAAAABAD'></img>
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}></img>
                <span className={s.color}>{props.profile.fullName}</span>
                <span className={s.color}>{props.profile.aboutMe}</span>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;



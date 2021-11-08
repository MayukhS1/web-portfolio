import React, { useEffect, useState } from 'react'
import ProfileSkeleton from '../skeletons/ProfileSkeleton';

const User = () => {
    const [profile, setProfile] = useState(null);

    useEffect(()=>{
        setTimeout( async ()=> {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
            const data = await res.json();
            setProfile(data);
        },1500);
    },[profile])

    return (
        <div className="user-profile">
            <h2>User Details</h2>
            {profile && (
                <div className="profile">
                    <h3>{profile.username}</h3>
                    <p>{profile.email}</p>
                    <a href={profile.website}>{profile.website}</a>
                </div>
            )}

            {!profile && (
                <div>
                    <ProfileSkeleton/>
                </div>
            )}
        </div>
        
    )
}

export default User

import React from 'react'
import SkeletonElms from './SkeletonElms'

const ProfileSkeleton = ({theme}) => {
    const themeClass = theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-profile">
                <div>
                    <SkeletonElms type="avatar"/>
                </div>
                <div>
                    <SkeletonElms type="title"/>
                    <SkeletonElms type="text"/>
                    <SkeletonElms type="text"/>
                </div>
            </div>
        </div>
    )
}

export default ProfileSkeleton

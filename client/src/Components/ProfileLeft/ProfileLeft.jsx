import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import Infocard from '../Infocard/Infocard'
const ProfileLeft = () => {
  return (
   <div className="ProfileSide">
       <LogoSearch/>
       <Infocard/>
       <FollowersCard/>
   </div>
  )
}

export default ProfileLeft
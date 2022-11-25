import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { GoVerified } from 'react-icons/go'
import axios from 'axios'

import VideoCard from '../../components/VideoCard'
import NoResult from '../../components/NoResult'
import { IUser, Video } from '../../types'
import { BASE_URL } from '../../utils'

const Profile = () => {
    return (
        <div>Profile</div>
    )
}

export const getServerSideProps = async ({
    params: { userId },
  }: {
    params: { userId: string }
  }) => {
    const res = await axios.get(`${BASE_URL}/api/profile/${userId}`)
  
    return {
      props: { data: res.data },
    }
  }

export default Profile
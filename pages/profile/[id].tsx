import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { GoVerified } from 'react-icons/go'
import axios from 'axios'

import VideoCard from '../../components/VideoCard'
import NoResult from '../../components/NoResult'
import { IUser, Video } from '../../types'
import { BASE_URL } from '../../utils'

interface IProps {
    data: {
      user: IUser
      userVideos: Video[]
      userLikedVideos: Video[]
    }
}

const Profile = ({ data }: IProps) => {
    const { user, userVideos, userLikedVideos } = data
    
    return (
        <div className='w-full'>
            <div className='flex gap-6 md:gap-10 mb-4 bg-white w-full'>
            <div className='w-16 h-16 md:w-32 md:h-32'>
                <Image
                width={120}
                height={120}
                layout='responsive'
                className='rounded-full'
                src={user.image}
                alt='user-profile'
                />
            </div>
    
            <div>
                <div className='text-md md:text-2xl font-bold tracking-wider flex gap-2 items-center justify-center lowercase'>
                <span>{user.userName.replace(/\s+/g, '')} </span>
                <GoVerified className='text-blue-400 md:text-xl text-md' />
                </div>
                <p className='text-sm font-medium'> {user.userName}</p>
            </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({
    params: { id },
  }: {
    params: { id: string }
  }) => {
    const res = await axios.get(`${BASE_URL}/api/profile/${id}`)
  
    return {
      props: { data: res.data },
    }
  }

export default Profile
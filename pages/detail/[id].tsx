import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

import { GoVerified } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

import { BASE_URL } from '../../utils';

const Detail = () => {
  return (
    <div>Detail</div>
  )
}

export const getServerSideProps = async ({
    params: { id },
  }: {
    params: { id: string };
  }) => {
    const res = await axios.get(`${BASE_URL}/api/post/${id}`);
  
    return {
      props: { postDetails: res.data },
    };
  };

export default Detail
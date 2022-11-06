import axios from "axios"

import { Video } from "../types"

interface IProps {
  videos: Video[]
}

export default function Home({ videos } : IProps) {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length 
        ? videos?.map((video: Video) => (
          video.caption
        )) 
        : "" 
        }
    </div>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`)

  return {
    props: {
      videos: data
    }
  }
}

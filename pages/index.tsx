import axios from "axios"

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello World!!
    </h1>
  )
}

export const getServerSideProps = async () => {
  const response = await axios.get()
}

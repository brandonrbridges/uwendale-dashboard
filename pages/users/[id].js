import axios from 'axios'

const User = ({ user }) => {
  return (
    <>
      <div className='bg-gray-300 h-48 w-full' />
      <div className='bg-white container -mt-16 mx-auto p-8 rounded shadow'>
        <h1>{user.username}</h1>
        <p>{user.balance} credits</p>
        <p>{user.experience} experience</p>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await axios.get(`http://localhost:4000/api/users/${context.query.id}`)

  return {
    props: {
      user: response.data
    }
  }
}

export default User
import Link from 'next/link'

import axios from 'axios'

const Dashboard = ({ users }) => {
  return (
    <>
      {users.map(user => (
        <p>
          <Link href={`/users/${user.discordId}`}>
            <a>
              {user.username}
            </a>
          </Link>
        </p>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await axios.get('http://localhost:4000/api/users')

  return {
    props: {
      users: response.data
    }
  }
}

export default Dashboard
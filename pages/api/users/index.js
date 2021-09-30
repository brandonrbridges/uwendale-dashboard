import dbConnect from '@/helpers/dbConnect'

import User from '@/database/models/User'

const api = async (req, res) => {
  await dbConnect()

  if(req.method == 'GET') {
    const user = await User.find({}).lean()

    return res.status(200).json(user)
  }
}

export default api
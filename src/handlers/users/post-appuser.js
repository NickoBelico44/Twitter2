const { getConnection } = require("../../utils/db.utils")

module.exports = async (req, res) => {
  const { email, name } = req.body
  const connection = await getConnection()
  const [result] = await connection.execute('INSERT INTO APPUSER_POST (email, name) VALUES (?,?)', [email, name])
  console.log(' - result:', result)
  res.json({ email, name })
}
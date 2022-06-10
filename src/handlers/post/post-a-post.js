const { getConnection } = require("../../utils/db.utils")

module.exports = async (req, res) => {
  const { title, content } = req.body
  const email = req.header('X-Email')
  const connection = await getConnection()
  const [result] = await connection.execute('INSERT INTO POST_POST (creator_email,title,content) VALUES (?, ?, ?)', [email, title, content])
  const { insertId: id} = result 
  console.log(' - result:', result)
  const [result2] = await connection.execute('SELECT * FROM POST_POST JOIN APPUSER_POST ON APPUSER_POST.email = POST_POST.creator_email WHERE POST_POST.id = ?', [id])  
  console.log(result2);
  const { created_at: created_at, name: name} = result2 
  const author = {
    email: email,
    name: name
  }
  res.json({ id, title, content, created_at, author})
}
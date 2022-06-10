const { getConnection } = require("../../utils/db.utils")

module.exports = async(req, res) => {
    const { title, content } = req.body
    const email = req.header('X-Email')
    const connection = await getConnection()
    const [result] = await connection.execute('INSERT INTO POST (creator_email,title,content) VALUES (?, ?, ?)', [email, title, content])
    const { insertId: id } = result
    let response = { error: 'ERROR' }
    const [rows] = await connection.query('SELECT * FROM POST JOIN APPUSER ON APPUSER.email = POST.creator_email WHERE POST.id = ?', [id])
    const [row] = rows
    console.log(row)
    if (!rows.length) {
        res.status(404).end()
        return
    } else {
        const {
            id,
            title,
            content,
            created_at,
            name,
            email
        } = row
        response = { id, title, content, created_at, author: { email, name } }
    }
    res.json(response)
}
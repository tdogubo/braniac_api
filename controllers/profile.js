const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    db('users').where({ id }).then(user => {
        if (user.length) {
            res.json(user[0])
        } else {
            res.status(404).json({ message : 'Not Found'})
        }
     }).catch(err => {res.status(404).json('not found')
     })
}

module.exports = {
    handleProfileGet
}
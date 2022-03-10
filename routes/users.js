module.exports = app => {

    app.get('/users', (req, res) => {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json({
            users: [{
                name:'Carlos Santos',
                email:'carlos.santos.clear@gmail.com',
                id:1
            }]

        })
    })

    app.get('/users/admin', (req, res) => {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json({
            users: []

        })
    })
};
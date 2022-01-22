const Controller = require("./../controllers/controller")

module.exports = (app) => {
    app.get("/",Controller.index)
    app.get("/api/user/new",Controller.user)
    app.get("/api/company/new",Controller.company)
    app.get("/api/user/company",Controller.usercompany)
}

    
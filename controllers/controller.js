const faker = require('@faker-js/faker')

class User {
    constructor(){
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.firstName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

module.exports.index = (req, res) => {
    res.json("Hello")
};

module.exports.user = (req, res) => {
    res.json(new User)
};


module.exports.company = (req, res) => {
    res.json(new Company)
};

module.exports.usercompany = (req, res) => {
    res.json({user: new User, company: new Company})
};
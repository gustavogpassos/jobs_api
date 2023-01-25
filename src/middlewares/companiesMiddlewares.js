const companyEntity = require('../models/companiesModel')

exports.alreadyExists = async (newCompany) => {
    const company = await companyEntity.find({
        $or: [{ cnpj: newCompany.cnpj }, { email: newCompany.email }],
    })
    return company.length
}

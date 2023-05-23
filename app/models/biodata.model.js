module.exports = (sequelize, Sequelize) => {
    const biodata = sequelize.define('biodata', {
        nama: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tempatLahir: {
            type: Sequelize.STRING
        },
        tanggalLahir: {
            type: Sequelize.DATEONLY
        },
        alamat: {
            type: Sequelize.STRING
        }
    }, {freezeTableName: true});
    return biodata;
};
// // const connection = require('../connection')
// // const Sequelize = require('sequelize')

// const Photo = connection.Sequelize.define('photo', {
    
//     name: {
//         type: Sequelize.STRING(100),
//         allowNull: false
//     },
//     user: {
//         type: Sequelize.STRING(100),
//         allowNull: false
//     },
//     description: {
//         type: Sequelize.STRING(250),
//         allowNull: true
//     },
//     featured: {
//         type: Sequelize.BOOLEAN,
//         allowNull: false
//     }
    
// }, {
//     timestamps: true,
//     freezeTableName: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at',
//     tableName: 'photo'
// });

// module.exports = Photo
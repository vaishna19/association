const { Sequelize } = require('sequelize');
const db = new Sequelize('channel', 'root', 'vaishveer19', {
  host: 'localhost',
  dialect: 'mysql'
});
db.authenticate()
  .then(() => {
    console.log('connection success')
  })
module.exports - {
  db
}

const express = require('express')
const app = express()
const models = require("./models")
const post = models.post.findOne({
  include: [
    {
      model: models.comment,
      as:'comments'
    }
  ]
}).then(function (post) {
  console.log(post.comments)
  console.log(post.comments.length)
})
"use strict"
const Sequelize = require("sequelize");
const dbName = "tokenDB"
const sequelize = new Sequelize(dbName, "root", "2301230", {
    logging: false,
    define: {
        logging: false,
    }
});
const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING
    }
})
const Language = sequelize.define('language', {
    name: {
        type: Sequelize.STRING
    },
    selected:{
      type: Sequelize.BOOLEAN
    }
})
const Actor = sequelize.define('actor', {
    name: {
        type: Sequelize.STRING
    },
    selected:{
      type: Sequelize.BOOLEAN
    }
})
const Director = sequelize.define('director', {
    name: {
        type: Sequelize.STRING
    },
    selected:{
      type: Sequelize.BOOLEAN
    }
})
const Producer = sequelize.define('producer', {
    name: {
        type: Sequelize.STRING
    },
    selected:{
      type: Sequelize.BOOLEAN
    }
})
const Composer = sequelize.define('composer', {
    name: {
        type: Sequelize.STRING
    },
    selected:{
      type: Sequelize.BOOLEAN
    }
})
const Singer = sequelize.define('singer', {
    name: {
        type: Sequelize.STRING
    },
    selected:{
      type: Sequelize.BOOLEAN
    }
})
const Lyricists = sequelize.define('lyricists', {
    name: {
        type: Sequelize.STRING
    },
    selected:{
      type: Sequelize.BOOLEAN
    }
})

// One-way associations
let langOfUser = Language.belongsTo(User)
Actor.belongsTo(User)
Director.belongsTo(User)
Producer.belongsTo(User)
Composer.belongsTo(User)
Singer.belongsTo(User)
Lyricists.belongsTo(User)


sequelize.sync({force:false}).then(() => {
  console.log("created table")
  return User.findOne({where:{name:'Mick'}})

}).then(data =>{

data.getLanguages().then(x=>{
  debugger
})


})
.then((val)=>{
  console.log("saved data")
}).then(()=>{

  return  Language.findAll({
    include: [{
      model: User
    }]
  })

//   return User.findAll({
//   include: [{
//     model: Language,
//     through: {
//       where: {selected: true}
//     }
//   }]
// });
}).then(data=>{
  debugger
}).catch(console.log)

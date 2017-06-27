"use strict"
const Sequelize = require("sequelize");
const dbName = "testDB"
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
// const Actor = sequelize.define('actor', {
//     name: {
//         type: Sequelize.STRING
//     },
//     selected:{
//       type: Sequelize.BOOLEAN
//     }
// })
// const Director = sequelize.define('director', {
//     name: {
//         type: Sequelize.STRING
//     },
//     selected:{
//       type: Sequelize.BOOLEAN
//     }
// })
// const Producer = sequelize.define('producer', {
//     name: {
//         type: Sequelize.STRING
//     },
//     selected:{
//       type: Sequelize.BOOLEAN
//     }
// })
// const Composer = sequelize.define('composer', {
//     name: {
//         type: Sequelize.STRING
//     },
//     selected:{
//       type: Sequelize.BOOLEAN
//     }
// })
// const Singer = sequelize.define('singer', {
//     name: {
//         type: Sequelize.STRING
//     },
//     selected:{
//       type: Sequelize.BOOLEAN
//     }
// })
// const Lyricists = sequelize.define('lyricists', {
//     name: {
//         type: Sequelize.STRING
//     },
//     selected:{
//       type: Sequelize.BOOLEAN
//     }
// })

// One-way associations
//let langOfUser = Language.belongsTo(User)
// Actor.belongsTo(User)
// Director.belongsTo(User)
// Producer.belongsTo(User)
// Composer.belongsTo(User)
// Singer.belongsTo(User)
// Lyricists.belongsTo(User)

User.hasMany( Language);
// Instances of User will get the accessors getLanguages and setLanguages (addLanguages, addLanguage, countLanguages)
Language.belongsTo( User );
// Instances of Language will get the accessors getUser and setUser

sequelize.sync({force:true}).then(() =>{
  console.log("created table")
  return User.create({name:'Mick'}).then((user)=>{
    debugger
    return Language.create({name:'hindi',selected:true}).then(lang => {
      debugger
      return user.addLanguage(lang)
    })
  })
})
.then((record) => {
debugger
  return User.findOne({where:{name:'Mick'}});

}).then(user =>{

debugger
return user.getLanguages()

})
.then(function(langs){
  console.log("saved data")
  const lang = langs.pop()
  debugger
  console.log(lang.name)
  return lang.getUser()

}).then((user)=>{
debugger
console.log(user.name)
  // return  Language.findAll({
  //   include: [{
  //     model: User
  //   }],where:{name:'hindi'}
  // })

//   return User.findAll({
//   include: [{
//     model: Language,
//     through: {
//       where: {selected: true}
//     }
//   }]
// });
}).catch(console.log)

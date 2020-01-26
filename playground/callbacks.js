var getUser = (id,callback) => {

  // dummy obj

var user = {
  id:id,
  name: 'Anil'
}

setTimeout(()=> {
callback(user);
},3000);

}

getUser(31,(userObject) => {
  console.log(userObject);
});

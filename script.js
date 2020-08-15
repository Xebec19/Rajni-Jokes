const demo = document.getElementById('demo');
const fetchUsers = async function(){
  const user = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await user.json();
  var value1 = data.value;
  var value1 = value1.replace("Chuck Norris","Rajni Kant")
  demo.innerHTML=value1;
}
fetchUsers();
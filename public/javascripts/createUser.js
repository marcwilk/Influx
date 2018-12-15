let passMatch = false
let passLength = false

const check = function() {
  const pass = document.querySelector('#exampleInputPassword1').value
  const confirm = document.querySelector('#exampleInputPassword2').value
  if (pass == confirm) {
    document.getElementById('message2').style.color = 'white';
    passMatch = true
  } else {
    document.getElementById('message2').style.color = 'red';
    passMatch = false
  }
  if (pass.length >= 8) {
    document.getElementById('message1').style.color = 'white';
    passLength = true
  } else {
    document.getElementById('message1').style.color = 'red';
    passLength = false
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelector('#image').addEventListener('click', () => {
    window.location.href = 'feed.html'
    console.log('click')
  })



  const form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if(passLength && passMatch){
      let user = {}
      user.username = form.exampleUserName1.value
      user.email = form.exampleInputEmail1.value
      user.password = form.exampleInputPassword1.value
      window.location.href = 'feed.html'
      axios.post('/users', user)
      .then( results => {
        console.log(results)
      })
    } else {
      event.preventDefault()
      console.log('password invalid')
    }
  })
});

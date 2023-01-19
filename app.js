
var audio = document.getElementById('myaudio')

function som() {
    audio.play()
}

document.querySelector("input.check:checked").addEventListener('click', function som() {
    var audio = document.getElementById('myaudio')
    audio.play()
})
 



function registerDay(){
    document.getElementById("container").style.display = "block"
}

function addDay() {
      

    var data = document.querySelector("input.data").value
    var dia = data.substring(0, 2)
    var mes = data.substring(3, 5)
    
 
 
    var x = `<div class="dia">
    <p class="data"> Quar <br> ${dia}/${mes}</p>
  <input type="checkbox">
  <input type="checkbox">
  <input type="checkbox">
  <input type="checkbox">
  <input type="checkbox">
  <input type="checkbox">
 </div>`
 
     document.querySelector('.dias').innerHTML += x

     document.getElementById("container").style.display = "none"
 
 
 } 

 function voltar() {
    document.getElementById("container").style.display = "none"
 }


 



var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
var myModald = document.getElementById('myModald')
var myInputd = document.getElementById('myInputd')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

myModald.addEventListener('shown.bs.modald', function () {
    myInput.focus()
  })
  



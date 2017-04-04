//$(document).ready(function () {

//    $(".player").mb_YTPlayer();

//});


$().ready(function() {
  $('#wrapper').tubular({videoId: '0Bmhjf0rKe8'}); // where idOfYourVideo is the YouTube ID.
});



var jamModal;
jamModal = document.getElementById('jamModal');
jamModal.querySelector('.modal-close').addEventListener('click',function(){
    jamModal.style.display = 'none';
});

document.getElementById('click').addEventListener('click',function(){
		jamModal.style.display = 'block';
})


var maudesModal;
maudesModal = document.getElementById('maudesModal');
maudesModal.querySelector('.modal-close').addEventListener('click', function() {
  maudesModal.style.display = 'none';
});

document.getElementById('clickMaudes').addEventListener('click', function() {
  maudesModal.style.display = 'block';
})


var doughModal;
doughModal = document.getElementById('doughModal');
doughModal.querySelector('.modal-close').addEventListener('click', function() {
  doughModal.style.display = 'none';
});

document.getElementById('clickDough').addEventListener('click', function() {
  doughModal.style.display = 'block';
})


var flashModal;
flashModal = document.getElementById('flashModal');
flashModal.querySelector('.modal-close').addEventListener('click', function() {
  flashModal.style.display = 'none';
});

document.getElementById('clickFlash').addEventListener('click', function() {
  flashModal.style.display = 'block';
})



var burrModal;
burrModal = document.getElementById('burrModal');
burrModal.querySelector('.modal-close').addEventListener('click', function() {
  burrModal.style.display = 'none';
});

document.getElementById('clickburr').addEventListener('click', function() {
  burrModal.style.display = 'block';
})


var addictionModal;
addictionModal = document.getElementById('addictionModal');
addictionModal.querySelector('.modal-close').addEventListener('click', function() {
  addictionModal.style.display = 'none';
});

document.getElementById('clickaddiction').addEventListener('click', function() {
  addictionModal.style.display = 'block';
})

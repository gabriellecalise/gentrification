var jamModal;
jamModal = document.getElementById('jamModal');
jamModal.querySelector('.modal-close').addEventListener('click',function(){
    jamModal.style.display = 'none';
});

document.getElementById('click').addEventListener('click',function(){
		jamModal.style.display = 'block';
})

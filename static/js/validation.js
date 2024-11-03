const allInputsForm = document.querySelectorAll('form input')
allInputsForm.forEach(item => {
    item.addEventListener('input', function () {
        item.classList.remove('error-input')
        let errorMessage = item.closest('.error-check')?.querySelector('.error-bottom')
        let successIcon = item.closest('.input-container')?.querySelector('.success')
        let failedIcon = item.closest('.input-container')?.querySelector('.failed')
        if (errorMessage) {
            errorMessage.style.display = 'none';
        }
        if (item.name === 'name') {
            if (item.value.length < 3) {
                item.classList.add('error-input-val')
                errorMessage.style.display = 'block';
                errorMessage.innerText = 'введите не менее 3 символов'
                successIcon.style.display = 'none';
                failedIcon.style.display = 'block';
            } else {
                item.classList.remove('error-input-val')
                errorMessage.style.display = 'none';
                successIcon.style.display = 'block';
                failedIcon.style.display = 'none';
            }
        }
        if (item.name === 'phone') {
            console.log('sjdhfjksdfh')
            this.value = this.value.replace(/\D/g, '')
            if (this.value.length < 9) {
                item.classList.add('error-input-val')
                errorMessage.style.display = 'block';
                errorMessage.innerText = 'введите не менее 9 символов'
                successIcon.style.display = 'none';
                failedIcon.style.display = 'block';
            } else {
                item.classList.remove('error-input-val')
                errorMessage.style.display = 'none';
                successIcon.style.display = 'block';
                failedIcon.style.display = 'none';
            }
        }
        if (item.type === 'checkbox') {
            if (item.checked) {
                item.closest('.form-custom__checkbox').classList.remove('error-label')
            } else {
                item.closest('.form-custom__checkbox').classList.add('error-label')
            }
        }
    })
})
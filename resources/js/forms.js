const ajaxSend = async (formData, url) => {
    const fetchResp = await fetch(url, {
        method: 'POST',
        body: formData,
    })
    if (!fetchResp.ok) {
        throw await fetchResp.json()
    }
    return await fetchResp.text()
}


document.addEventListener('DOMContentLoaded', () => {
    const feedBackForm = document.querySelectorAll('.send-form')
    feedBackForm.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault()
            var isSubmit = true

            e.target.querySelectorAll('.error-input').forEach(function (field) {
                field.classList.remove('error-input')
            })
            e.target
                .querySelectorAll('.required')
                .forEach(function (field) {
                    if (!field.value) {
                        const errorMessage = field.closest('.error-check').querySelector('.error-bottom');
                        errorMessage.style.display = 'block';
                        errorMessage.innerText = 'Заполните поле'
                        isSubmit = false
                        field.classList.add('error-input')
                    }
                })
            e.target
                .querySelectorAll('.error-input-val')
                .forEach(function (field) {
                    isSubmit = false
                    field.classList.add('error-input')
                })
            if (!e.target.querySelector('[type="checkbox"]').checked) {
                isSubmit = false
                e.target.querySelector('[type="checkbox"]').closest('.form-custom__checkbox').classList.add('error-label')
            }

            if (isSubmit) {
                const formData = new FormData(this)
                ajaxSend(formData, 'https://jsonplaceholder.typicode.com/posts')
                    .then((response) => {
                        form.reset()
                        e.target.querySelectorAll('.error-input').forEach(function (field) {
                            field.classList.remove('error-input')
                        })
                        e.target.querySelectorAll('.filled').forEach(function (field) {
                            field.classList.remove('filled')
                        })
                        e.target.querySelectorAll('.success').forEach(function (item) {
                            item.style.display = 'none'
                        })
                    })
                    .catch((error) => {

                    })
                    .finally(() => {

                    })
            }
        })
    })
})

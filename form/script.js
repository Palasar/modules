const form = () => {
    const forms = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          inputsPhone = document.querySelectorAll('input[name = user_phone]'),
          informMessage = {
              loading: 'Загрузка...',
              success: 'Мы скоро с Вами свяжемся',
              failure: 'Что-то пошло не так'
          };

    inputsPhone.forEach(input => {
            input.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/\D/g, '');
            });
        });

    const cleanInput = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    const postData = async (url, data) => {
        const result = await fetch(url, data);
        return await result.text();
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusPost = document.createElement('div');
                statusPost.classList.add('status');
                statusPost.textContent = informMessage.loading;
                item.appendChild(statusPost);

            const formData = new FormData(item);

            postData('assets/server.php', {
                method: 'POST',
                body: formData
            })
            .then((res) => {
                console.log(res);
                statusPost.textContent = informMessage.success;
            })
            .catch(() => {
                statusPost.textContent = informMessage.failure;
            })
            .finally(() => {
                cleanInput();
                setTimeout(() => {
                    statusPost.remove();
                }, 5000);
            });
        });
    });
};
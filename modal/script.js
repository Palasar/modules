const modals = (targetSelector, modalSelector, closeSelector) => {

    const trigger = document.querySelectorAll(targetSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);
            
    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            if(e.target){
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    });
    
    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    setTimeout(() => {
        document.querySelector('.popup').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 60000);

};
        let modal = document.querySelector('#btn');
        let modalWrap = document.querySelector('.modal__wrap');
        let hide = document.querySelector('#close');
        let modalBlock = document.querySelector('.modal__block');

        modal.addEventListener('click', showModal);
        hide.addEventListener('click', showModal);
        hide.addEventListener('click', (event)=>event.stopPropagation());
        modalBlock.addEventListener('click', (event)=>event.stopPropagation());
        modalWrap.addEventListener('click', showModal);
        function showModal(){
            modalWrap.classList.toggle('visible');
        }
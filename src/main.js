document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            esconderTodasAbas();
            aba.classList.add('shows__list--is-active');
            removerBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        });
        
    }

})

function esconderTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let index = 0; index < tabsContainer.length; index++) {
        tabsContainer[index].classList.remove('shows__list--is-active');
        
    }
}

function removerBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].classList.remove('shows__tabs__button--is-active');
        
    }
}
let tg = window.Telegram.WebApp;

let send_reg = document.querySelector('[name="send_reg"]');

send_reg.addEventListener('click', () => {
    tg.close();
})
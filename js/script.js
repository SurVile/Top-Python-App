let tg = window.Telegram.WebApp;

let send_reg = document.querySelector('[name="send_reg"]'),
    buy_item = document.querySelectorAll('[name="buy_item"]');

send_reg.addEventListener('click', () => {
    let user_name = document.querySelector('[name="user_full_name"]').value,
        user_email = document.querySelector('[name="user_email"]').value,
        user_tel = document.querySelector('[name="user_tel"]').value;

    console.log(user_name + ', ' + user_email + ', ' + user_tel)

    let user_data = {
        data_type: 'user_reg',
        data_name: user_name,
        data_email: user_email,
        data_tel: user_tel
    }
    tg.sendData(JSON.stringify(user_data));

    tg.close();
})

buy_item.forEach(item => {
    item.addEventListener('click', (e) => {
        let button_block_info = item.parentNode;
        let article_name = button_block_info.parentNode.getAttribute('name');
    
        let article_data = {
            data_type: 'buy_item',
            data_name: article_name
        }
        tg.sendData(JSON.stringify(article_data));
    
        tg.close();
    })
})



module.exports = {
// Главное меню
    buttonMenu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '💵Оплатить доступ', callback_data: '/purchase'}],
                [{text: '🔎Подробнее о канале', callback_data: '/info'}],
                [{text: '👨‍💻Задать вопрос', callback_data: 'ask', url: 'https://t.me/pkrush'}],
            ]
        })
    }, 

// Назад

backButton: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text:'Назад', callback_data: '/start'}],
        ]
    })
},

// Назад + /info

backButton1: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '💵Оплатить доступ', callback_data: '/purchase'}],
            [{text:'Назад', callback_data: '/start'}],
        ]
    })
},

    // Оплата
oplataButton: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text:'🦦1 месяц', callback_data: '/mounth1'}],
            [{text:'🦈6 месяцев', callback_data: '/mounth6'}],
            [{text:'🐉12 месяцев', callback_data: '/mounth12'}],
            [{text:'Назад', callback_data: '/start'}]
        ]
    })
},

mounth1Button: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text:'💳Картой (любая валюта)', callback_data: '/cart'}],
            [{text: '👨‍💻Задать вопрос', callback_data: 'ask', url: 'https://t.me/pkrush'}],
            [{text:'Назад', callback_data: '/purchase'}]
        ]
    })
},

mounth6Button: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text:'💳Картой (любая валюта)', callback_data: '/cart'}],
            [{text: '👨‍💻Задать вопрос', callback_data: 'ask', url: 'https://t.me/pkrush'}],
            [{text:'Назад', callback_data: '/purchase'}]
        ]
    })
},

mounth12Button: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text:'💳Картой (любая валюта)', callback_data: '/cart'}],
            [{text: '👨‍💻Задать вопрос', callback_data: 'ask', url: 'https://t.me/pkrush'}],
            [{text:'Назад', callback_data: '/purchase'}]
        ]
    })
},


oplacheno: {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '✅Я оплатил', callback_data: '/succes'}],
            [{text: 'Назад', callback_data: '/purchase'}],
        ]
    })
},



}


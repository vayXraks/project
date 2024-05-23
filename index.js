const TelegramApi = require('node-telegram-bot-api')
const token = '6919458849:AAHkbbfjJGXc7gwPudz7tuuOyR_nhgcMmks'
const bot = new TelegramApi(token, {polling: true})
console.log("Бот включен!");
const {buttonMenu, oplataButton, backButton1, mounth1Button, mounth6Button, mounth12Button, oplacheno, backButton} = require('./options')
const chats = {}

/*Начало*/
 const start = () => {
    bot.setMyCommands ( [
        {command: '/start', description: 'Старт!'},
        {command: '/info', description: 'Получить информацию о боте.'},
        {command: '/need_help', description: 'Задать вопрос.'},
        {command: '/purchase', description: 'Оформить подписку.'}
    ])

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        //  start

        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://sl.combot.org/vanilla_vkstikers/webp/5xf09f918b.webp')
            return bot.sendMessage(chatId, `Приветствую👋\nЭтот бот поможет тебе попасть в закрытый телеграмм канал.\n` +
            `Подписка - ежемесячная, оплату принимаем в любой валюте.\nОтписаться можно в любой момент 🤝`, {
                buttonMenu,
                reply_markup: buttonMenu.reply_markup,
            }) 
        }

        // purchase

        if (text === '/purchase') {
            return bot.sendMessage(chatId, `💵 Стоимость подписки\n`+
            `1 Месяц - 1.500 рублей\n`+
            `6 Месяцев - 8.000 рублей\n`+
            `12 Месяцев - 15.000 рублей\n`+
            `При оплате картой оформляется автосписание\n`+
            `Оплатить и получить доступ\n`+
            `👇👇👇`, {
                oplataButton,
                reply_markup: oplataButton.reply_markup,
            }) 
        }

        // info

        if (text === '/info') {
            return bot.sendMessage(chatId, `В ЗАКРЫТОМ КАНАЛЕ 👇\n`+
            `✅ Сотни новых эфиров 2021-2024 гг с таймкодами\n` +
            `✅ Eженедельные трансляции и ответы на вопросы в комментариях\n`+
            `✅ Рассмотрю вашу ситуацию индивидуально и дам свои рекомендации\n`+
            `ЖДУ В КАНАЛЕ 👇👇👇`, {
                backButton1,
                reply_markup: backButton1.reply_markup
            });
        }

        // /need_help

        if (text === '/need_help') {
            return bot.sendMessage(chatId, `По любым вопросaм обращайтесь к модератору -> @pkrush`)
        }

        /*Условие обработки неизвестных боту сообщений.*/
        
        return bot.sendMessage(chatId, `ОШИБКА! Проверьте написанную вами команду!`)
     })

 }
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////////////////////////////////////////КНОПКИ///////////////////////////////////////////////////////////////////////////*/
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
 




 bot.on('callback_query', async msg => {
    const chatId = msg.message.chat.id;
    const data = msg.data;
    // Start
    if (data === '/start') {
        await bot.sendSticker(chatId, 'https://sl.combot.org/vanilla_vkstikers/webp/5xf09f918b.webp')
        return bot.sendMessage(chatId, `Приветствую👋\nЭтот бот поможет тебе попасть в закрытый телеграмм канал.\n` +
        `Подписка - ежемесячная, оплату принимаем в любой валюте.\nОтписаться можно в любой момент 🤝`, {
            buttonMenu,
            reply_markup: buttonMenu.reply_markup,
        }) 
    }

    // Purchase
    else if (data === '/purchase') {
        return bot.sendMessage(chatId, `💵 Стоимость подписки\n`+
        `1 Месяц - 1.500 рублей\n`+
        `6 Месяцев - 8.000 рублей\n`+
        `12 Месяцев - 15.000 рублей\n`+
        `При оплате картой оформляется автосписание\n`+
        `Оплатить и получить доступ\n` + 
        `👇👇👇`, {
            oplataButton,
            reply_markup: oplataButton.reply_markup,
        }) 
    }

    // Info
    else if (data === '/info') {
        return bot.sendMessage(chatId, `В ЗАКРЫТОМ КАНАЛЕ 👇\n`+
        `✅ Сотни новых эфиров 2021-2024 гг с таймкодами\n` +
        `✅ Eженедельные трансляции и ответы на вопросы в комментариях\n`+
        `✅ Рассмотрю вашу ситуацию индивидуально и дам свои рекомендации\n`+
        `ЖДУ В КАНАЛЕ 👇👇👇`, {
            backButton1,
            reply_markup: backButton1.reply_markup
        })
    }

    // 1 месяц

    else if (data === '/mounth1') {
        return bot.sendMessage(chatId, 
            `Выбрана подписка на 1 месяц\n`+
            `Выберите удобный вид оплаты: `, {
            mounth1Button,
            reply_markup: mounth1Button.reply_markup,
        }) 
    }

    // 6 месяцев

    else if (data === '/mounth6') {
        return bot.sendMessage(chatId, 
            `Выбрана подписка на 6 месяцев\n`+
            `Выберите удобный вид оплаты: `, {
            mounth6Button,
            reply_markup: mounth6Button.reply_markup,
        }) 
    }

    // 12 месяцев

    else if (data === '/mounth12') {
        return bot.sendMessage(chatId, 
            `Выбрана подписка на 12 месяцев\n`+
            `Выберите удобный вид оплаты: `, {
            mounth12Button,
            reply_markup: mounth12Button.reply_markup,
        }) 
    }

    // Оплата кнопка

    else if (data === '/cart') {
        return bot.sendMessage(chatId, 
            `Вы оплатили?`, {
            oplacheno,
            reply_markup: oplacheno.reply_markup,
        })
    }

    else if (data === '/succes') {
        return bot.sendMessage(chatId, `Получен доступ к телеграмм каналу!🟢\n` +
            `https://t.me/+WEm1ASVef384NjRi`, {
            backButton,
            reply_markup: backButton.reply_markup,
        })
    }








})
 start();
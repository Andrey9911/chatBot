import MessageCreater from './messageObj';
export default class ai{
    i = 'ai'
    answer = ''
    allActions = {
        'заказать пиццу': {
            answer: 'Хорошо, пицца начала делаться'
        },
        'еще что-то': {
            answer: 'что же я могу', 
            child: {
                'поспать':{answer: 'speep :)))'},
                'поесть':{answer: 'eat?  :)))'},
            }
        },
    }
    status = ['нет в сети', 'в сети', 'печатает...']
    sendFirstMess = () => {
        return {
            answer: 'Добро пожаловать в меня, бота. Здесь ты можешь:',
            child: this.allActions

        }
    }
    sendAnswer = (message) => {
        if(message == "привет"){
            return {
                answer: 'приыет, напиши что-нибудь, например "help" :',
    
            }
        }
        if(message == "хочу заказать пиццу")
        {
           return {
                answer: 'Вот, какие опции у нас есть :',
                child: this.allActions
    
            }
            // let mess = new MessageCreater(this.i, false, 'ok, me doing pizza');
        }
        if(message == "help"){
            return {
                answer: 'Вот, какие опции у нас есть :',
                child: this.allActions
    
            }
        }
        else
        {
            return { answer: 'повторите пожалуйста'}
        }
    }
    getCommand = (command) => {
            return this.allActions[command]
    }
}



// export default function sentAnswer(message)
// {
//     if(message == "хочу заказать пиццу")
//     {
//         return
//     }
// }
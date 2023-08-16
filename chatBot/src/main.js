import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import openChat from './openChat'

document.querySelector('.chat-bot__icon').addEventListener('click',function(){
    openChat(document.querySelector('.chat-bot__container'))
})

createApp(App).mount('#chat-bot')

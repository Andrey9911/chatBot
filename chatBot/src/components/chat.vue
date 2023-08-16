<script setup>
import {computed, createApp, ref, provide, watch } from 'vue';
import message from './message.vue'; 
import MessageCreater from '../messageObj';

const props = defineProps(['interlocutor', 'messagesAll'])

let array_mess = props.messagesAll
function getTheCommand(command){
    console.log(command);

    let messObj = new MessageCreater('me',false, command).create()
    setTimeout(() => {
      let messObj = new MessageCreater('ai',true, props.interlocutor.getCommand(command).answer, props.interlocutor.getCommand(command).child).create()
      array_mess.push(messObj);
       console.log(messObj);
    },0)

    array_mess.push(messObj)
    console.log(array_mess)
}

</script>
<template>
    <div class="window-chat">
        
        <message @subButAction="getTheCommand" v-for="el in props.messagesAll" :el="el"/>
    </div>
</template>

<style scoped lang="scss">
@import '../assets/base.scss';
.window-chat{
    overflow-y: scroll;
    width: 100%;
    padding: 0;
    height: 100%;
    padding: 0px choose-width();

    background-color: var(--common-back-color);

    &::-webkit-scrollbar {
        width: 10px; /* в основном для вертикальных полос прокрутки */
        height: 10px; /* в основном для горизонтальных полос прокрутки */
    }
    &::-webkit-scrollbar-thumb { /* плашка-бегунок */
        background: #ffffff2b;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track { /* фон */
        background: #ffffff00;
    }
}


</style>

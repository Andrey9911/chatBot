<script setup>
  import chat from './components/chat.vue'; 
  import footerBlock from './components/footerBlock.vue'; 
  import ai from './ai';
  import MessageCreater from './messageObj';
  import { computed, defineEmits, nextTick, onMounted, ref } from 'vue';

  const interlocutor = new ai()
  let isFree
  let myMess = ref('')
  let message_array = ref([])

  onMounted(() => {
    let messObj = new MessageCreater('ai',true, interlocutor.sendFirstMess().answer, interlocutor.sendFirstMess().child).create()
    message_array.value.push(messObj);
  })

  function receive(mess){
    
    let messObj = new MessageCreater('me',false, mess).create()
    setTimeout(() => {
      let messObj = new MessageCreater('ai',false, interlocutor.sendAnswer(mess).answer, interlocutor.sendAnswer(mess).child).create()
      message_array.value.push(messObj);
       console.log(messObj);
    },0)
    


    message_array.value.push(messObj);
    console.log(message_array.value);
  }
</script>

<template>
  <header class="header">
    <div class="header__avatarka"></div>
    <div class="header__nik"></div>
    <div class="header__status"></div>
  </header>
    

  <main>
    <chat  :interlocutor="interlocutor" :messagesAll="message_array"/>
  </main>
  <div class="foot">
    <footer-block @sub="receive"/>
  </div>
  
  
</template>

<style scoped lang="scss">
@import './assets/base.scss';
.header{
  height: 50px;
  padding: 10px 30px;
  box-sizing: border-box;
  background-color: var(--common-back-dop-block);
  
}
main{
  height: calc(100vh - 50px - 100px);
}
</style>

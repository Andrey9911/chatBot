<script setup>
import { provide, ref } from 'vue';

// import  from '';
  let mess = null
  const emit = defineEmits('sub')
  function send(){
    emit('sub', mess != null ? mess : 'entry message :(')
  }
</script>

<template>
  <div class="footer">
    <input type="text" v-model="mess" class="footer__input text-inp">
    <div class="footer__sent-but sent-but" @click="send">sent ></div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/base.scss';
  .footer{
      background-color:var(--common-back-dop-block);
      height: 100px;
      padding: 10px 0px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;

      .footer__input{
        width: choose-width-inp();
        height: 30px;
        background-color: #ffffff44;
        border: none;
        border-radius: 7px;
        padding: 5px 10px;
        margin-right: 10px;
        color: var(--common-color-text);
      }

      .footer__sent-but{
        background-color: var(--color-button);
        border-radius: 10px;
        padding: 5px 10px;
        width: fit-content;
        height: fit-content;
        color: var(--common-color-text);
      }
  }

</style>
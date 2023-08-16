<script setup>
import { inject, provide, ref } from 'vue';
const props = defineProps(['el'])
const emit = defineEmits('subButAction')
let whoClass = `message-block-write_${props.el.who}`

function activationAction(el)
{
  emit('subButAction', el.target.innerHTML)
}
</script>

<template>
    <div class="message-block" :class="whoClass" >
        <div class="message-block__content content">{{ props.el.message}}</div>
        <div class="message-block__actions actions-block">
          <div class="actions-block__child child" @click="activationAction" 
                        v-for="(ch, i) in props.el.child">{{ i }}</div>
        </div>
    </div>
  <header>

  </header>
</template>

<style scoped lang="scss">

  @mixin anything-chat{
    background-color: var(--common-color-mess);
    width: fit-content;
    height: fit-content;
    text-align: start;
    max-width: 200px;
    color: var(--common-color-text);
    padding: 5px 10px;
  }
  $margin-top-for-message: 50px;
  @function add-margin()
  {
    $margin-top-for-message: $margin-top-for-message + 30px;
    @return $margin-top-for-message; 
  }
  .message-block{
    width: 100%;
    margin: 50px 0;
    height: fit-content;
    &.message-block-write_me{padding-left:70%;}

  }
  .content{
    @include anything-chat();
  }
  .actions-block{
    display: flex;
    .actions-block__child{
      @include anything-chat();
      margin: 5px 0;
      border-radius: 20px;
      cursor: pointer;
    }
  }
  

</style>
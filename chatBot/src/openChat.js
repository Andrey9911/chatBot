export default function openChat(el)
{
    if(el.classList.contains('chat-bot__container_actve'))el.classList.remove('chat-bot__container_actve')
    else el.classList.add('chat-bot__container_actve')

    
}
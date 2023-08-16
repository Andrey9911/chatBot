export default function MessageCreater(who, isChild, message, child)
{
    this.who = who
    this.isChild = isChild
    this.message = message
    this.child = child

    this.create = () => {
        return this
    }
}
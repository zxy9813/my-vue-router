export default {
    name:'router-view',
    render(){
        return <a>456{this.$slots.default}</a>
    }
}
<template>
    <div id="app">
        <h3>Todo List</h3>
        <input-box @addTodo="addTodo"></input-box>
        <list-tab @choseTab="choseTab"></list-tab>
        <item-list :list="showList" @delItem="delItem"></item-list>
    </div>
</template>

<script>
    import store from './lib/store';

    import InputBox from './components/InputBox';
    import ListTab from './components/ListTab';
    import ItemList from './components/ItemList';

    export default {
        data() {
            return {
                tabIndex: 0,
                list: store.getStore()
            };
        },
        computed: {
            showList() {
                return this.tabIndex == 0 ?
                    this.list : this.list.filter(n => n.state == this.tabIndex);
            }
        },
        methods: {
            addTodo(todo) {
                this.list.push(todo);
            },
            choseTab(index) {
                this.tabIndex = index;
            },
            delItem(item) {
                let index = this.list.indexOf(item);
                this.list.splice(index, 1);
            }
        },
        watch: {
            list: {
                handler: function () {
                    // 保存信息到localStorage
                    store.saveStore(this.list);
                    // 弹框提示
                    this.$messageBox({
                        message: 'Change has been saved.'
                    });
                },
                deep: true
            }
        },
        components: {
            InputBox,
            ListTab,
            ItemList
        }
    }

</script>

<style lang="scss" scoped>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin: 60px auto;
        padding: 20px;
        width: 500px;
        box-sizing: border-box;
        box-shadow: 0 3px 16px 4px #ddd;
        h3 {
            margin: 0 0 10px;
            padding: 0 0 12px;
            text-align: center;
            border-bottom: 1px solid #ddd;
        }
    }
</style>
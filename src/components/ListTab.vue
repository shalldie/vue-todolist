<template>
    <div class="list-tab">
        <div @click="choseTab(index)" class="tab" :class="{active:tabIndex==index}" v-for="(item,index) in tabList">{{item}}</div>
    </div>
</template>

<script>
    import ItemList from './ItemList';
    export default {
        data() {
            return {
                tabIndex: 0,
                tabList: ['All', 'Todos', 'Dones']
            };
        },
        methods: {
            choseTab(index) {
                this.tabIndex = index;
                this.$emit('choseTab', index);
            }
        },
        components: {
            ItemList
        }
    }

</script>

<style lang="scss" scoped>
    .list-tab {
        display: flex;
        border-bottom: 1px dashed #ddd;
        .tab {
            flex: 1;
            cursor: pointer;
            color: #ddd;
            font-size: 16px;
            line-height: 36px;
            padding-left: 6px;
            &.active {
                color: #2ad;
            }
        }
    }
</style>
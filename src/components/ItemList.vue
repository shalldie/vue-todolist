<template>
    <ul class="item-list">
        <li v-for="(item,index) in list" :key="index">
            <div @click="toggleState(item)" class="text" :class="{deleted:item.state==2}">{{item.text}}</div>
            <div @click="delItem(item)" class="del">Del</div>
        </li>
    </ul>
</template>

<script>
    export default {
        props: {
            list: {
                required: true,
                type: Array
            }
        },
        methods: {
            toggleState(item) {
                item.state = (item.state + 1) % 2 || 2;
            },
            delItem(item) {
                this.$emit('delItem', item);
            }
        }
    }

</script>

<style lang="scss" scoped>
    .item-list {
        margin: 0;
        padding: 0;

        li {
            display: flex;

            .text {
                margin: 0;
                padding: 0;
                height: 40px;
                line-height: 40px;
                padding: 0 6px;
                list-style: none;
                border-bottom: 1px dashed #ddd;
                cursor: pointer;
                flex: 1;
                &.deleted {
                    text-decoration: line-through;
                    color: #f00;
                }
            }
            .del {
                color: #2ad;
                width: 60px;
                line-height: 40px;
                text-align: center;
                border: 1px dashed #ddd;
                border-width: 0 0 1px 1px;
                cursor: pointer;
                /*margin-left: 20px;*/
            }
        }
    }
</style>
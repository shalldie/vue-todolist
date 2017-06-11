<template>
    <div class="input-box">
        <input ref="textbox" @keyup.enter="addTodo" v-model="val" type="text" placeholder="Enter plan to save.">
        <button @click="addTodo" type="button">Add</button>
    </div>
</template>

<script>
    import store from '../lib/store';

    export default {
        data() {
            return {
                val: ''
            };
        },
        methods: {
            addTodo() {
                if (!this.val.trim().length) return;
                this.$emit('addTodo', {
                    text: this.val,
                    state: 1
                });
                this.val = '';
            }
        }
    }

</script>

<style lang="scss" scoped>
    .input-box {
        box-sizing: border-box;
        padding: 6px 0;
        display: flex;

        input,
        button {
            border: 1px solid #ddd;
            height: 30px;
            outline: none;
            box-sizing: border-box;
        }
        input {
            flex: 1;
            transition: .3s;
            padding: 0 6px;
            border-radius: 3px;
            &:focus {
                border-color: transparent;
                box-shadow: 0 0 12px #4cae4c;
            }
        }
        button {
            color: #fff;
            background-color: #5cb85c;
            border-color: #4cae4c;
            padding: 6px 12px;
            border-radius: 3px;
            margin-left: 20px;
            cursor: pointer;
            transition: .3s;
            font-weight: bold;
            &:hover {
                background-color: #449d44;
                border-color: #398439;
            }
            &:active {
                background-color: #398439;
                border-color: #255625;
            }
        }
    }
</style>
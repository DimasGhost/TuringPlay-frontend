<template>
    <div>
        <modal ref="modal" @modal-out-click="close">
            <h1 class="subtitle is-5 chat-header">Chat</h1>
            <div class="chat-wrapper">
                <div class="messages-wrapper">

                </div>
                <input class="chat-input" type="text" placeholder="Type here...">
            </div>
        </modal>
    </div>
</template>

<style lang="scss" scoped>
    .chat-header {
        margin: -5px 0 5px 0;
    }

    .chat-wrapper {
        background: #F6F6F6;
        border: 1px #ededed solid;
        width: 500px;
        max-width: 90vw;
        height: 80vh;
        display: flex;
        flex-direction: column;
    }

    .messages-wrapper {
        flex-grow: 1;
    }

    .chat-input {
        padding: 5px;
        font-size: 20px;
    }
</style>

<script>

import Modal from './../Modal.vue';

export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        show() {
            this.$refs.modal.show();
        },
        close() {
            this.$refs.modal.close();
        }
    },
    components: {
        Modal
    }
}
</script>
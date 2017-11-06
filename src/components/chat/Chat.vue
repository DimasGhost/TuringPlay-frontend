<template>
    <div>
        <modal ref="modal" @modal-out-click="close">
            <h1 class="subtitle is-5 chat-header">Chat</h1>
            <div class="chat-wrapper">
                <div class="messages-wrapper">
                    <div v-for="m in messages" class="message"
                         :class="[{'income-message' : m.income}, {'outcome-message' : !m.income}]">
                            {{m.text}}
                    </div>
                    <!--<div class="message income-message">-->
                        <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean-->
                        <!--efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.-->
                    <!--</div>-->
                    <!--<div class="message outcome-message">-->
                        <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean-->
                        <!--efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.-->
                    <!--</div>-->
                </div>
                <div class="chat-footer">
                    <input v-model="userInput" class="chat-input" type="text" placeholder="Type here...">
                    <a class="chat-button" @click="sendMessage">
                        <i class="fa fa-paper-plane"></i>
                    </a>
                </div>
            </div>
        </modal>
    </div>
</template>

<style lang="scss" scoped>
    .chat-element {
        transition: all .5s ease;
    }

    .chat-transition-enter .chat-element,
    .chat-transition-active .chat-element {
        transform: scale(1.1);
    }

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
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .message {
        margin-top: 8px;
        font-size: 17px;
        color: white;
        padding: 10px;
        line-height: 1.2em;
        border-radius: 5px;
        max-width: 60%;
        word-wrap: break-word;
        margin-bottom: 0;
    }

    .income-message {
        margin-left: 8px;
        margin-right: auto;
        background-color: #34495e;
    }

    .outcome-message {
        margin-right: 8px;
        margin-left: auto;
        background-color: #3498db;
    }

    .chat-footer {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        flex-shrink: 0;
        margin-top: 5px;
    }

    .chat-input {
        background: #ffffff;
        border: 1px #d3d3d3 solid;
        flex-grow: 1;
        padding: 5px;
        font-size: 20px;
        margin-left: 5px;
    }

    .chat-button {
        color: #858585;
        font-size: 22px;
        transition: all .3s ease;
        padding: 0 8px 3px 8px;
    }

    .chat-button:hover {
        color: #34495e;
    }
</style>

<script>

import Modal from './../Modal.vue';

export default {
    data() {
        return {
            messages: [],
            userInput: ""
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
        },
        sendMessage() {
            if (this.userInput === "")
                return;
            this.messages.push({text: this.userInput, income: false});
            this.userInput = "";
            setTimeout(() => {
                this.messages.push({ text: "Wtf?? IDI nahui! :) Короче пошёл в жопу", income: true });
            }, 800);
        }
    },
    components: {
        Modal
    }
}
</script>
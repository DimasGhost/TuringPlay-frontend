<template>
    <div>
        <modal ref="modal" @modal-out-click="close">
            <h1 class="subtitle is-5 chat-header">Chat</h1>
            <div class="chat-wrapper">
                <transition-group id="chat" name="messages-list" tag="div" class="chat-elements">
                    <div v-if="state !== null" :key="'intro'" style="width: 100%">
                        <div v-if="mode == 'mask'" class="intro">
                            <i class="fa fa-user-secret intro-icon"></i>
                            <div class="intro-text">
                                Pretend <strong>you are robot</strong>
                            </div>
                        </div>
                        <div v-else class="intro">
                            <i class="fa fa-search intro-icon"></i>
                            <div class="intro-text">
                                Guess: is it a <strong>human or a bot?</strong>
                            </div>
                        </div>
                        <hr style="width: 100%">
                    </div>
                    <div v-for="m in messages" :key="m.id" class="message"
                         :class="[{'income-message' : m.income}, {'outcome-message' : !m.income}]">
                        {{m.text}}
                    </div>
                    <div v-if="state === 'finalQuestion' || state === 'end'" :key="'finalQuestion'" style="width: 100%">
                        <hr style="width: 100%">
                        <div v-if="mode === 'mask'" class="intro-text">
                            Wait, your opponent is trying to decide who you are...
                        </div>
                        <div v-else-if="userDecision === null" class="intro-text">
                            <a class="button is-primary is-outlined" @click="guess(true)">HUMAN</a>
                            <span class="title is-3">OR</span>
                            <a class="button is-primary is-outlined" @click="guess(false)">ROBOT</a>
                            <span class="title is-3">?</span>
                        </div>
                        <div v-else class="intro-text">
                            OK, You think it was a {{userDecision ? "human" : "robot"}}...
                        </div>
                    </div>
                    <div v-if="state === 'end'" :key="'end'" style="width: 100%; text-align:center">
                        <hr style="width: 100%">
                        <i v-if="finalStatus" class="fa fa-trophy intro-icon"></i>
                        <i v-else class="fa fa-times intro-icon"></i>
                        <br>
                        <div v-if="mode === 'mask'" style="width: 100%">
                            <div v-if="finalStatus" class="intro-text">
                                You win! Your companion believed that you are robot!
                            </div>
                            <div v-else class="intro-text">
                                You lose. Your companion discovered that you are human :(
                            </div>
                        </div>
                        <div v-else style="width: 100%">
                            <div v-if="finalStatus" class="intro-text">
                                You win! You are right, it is {{itWasHuman ? 'human' : 'robot'}}!
                            </div>
                            <div v-else class="intro-text">
                                You lose! You mistaken, actually, it was {{itWasHuman ? 'human' : 'robot'}} :(
                            </div>
                        </div>
                    </div>
                </transition-group>
                <div class="messages-left">{{msgLeft}}/8 messages left</div>
                <div class="chat-footer">
                    <input v-model="userInput" class="chat-input" type="text" placeholder="Type here..."
                           :disabled="state !== 'chatting'" :class="[{'chat-input-disabled' : state !== 'chatting'}]">
                    <a class="chat-button" @click="sendMessage">
                        <i class="fa fa-paper-plane"></i>
                    </a>
                </div>
            </div>
        </modal>
    </div>
</template>

<style lang="scss" scoped>
    .messages-left {
        width: 100%;
        text-align: center;
        flex-shrink: 0;
        font-size: 15px;
        color: #6e6e6e;
    }

    .intro {
        padding-top: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .intro-icon {
        font-size: 80px;
        color: #34495e;
    }

    .intro-text {
        color: black;
        font-size: 20px;
        text-align: center;
    }

    .chat-header {
        margin: -5px 0 5px 0;
    }

    .chat-wrapper {
        background: #F6F6F6;
        border: 1px #ededed solid;
        width: 500px;
        max-width: 90vw;
        height: 85vh;
        display: flex;
        flex-direction: column;
    }

    .chat-elements {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: hidden;
        overflow-y: scroll;
        padding-bottom: 10px;
    }

    .messages-list-enter-active {
        transition: all .5s;
    }

    .messages-list-enter {
        opacity: 0;
        transform: translateY(-10px) scale(1.1);
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
        transition: all .5s;
    }

    .chat-input-disabled {
        background: #dadada;
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
            userInput: "",
            state: null,
            mode: null,
            msgLeft: 8,
            finalStatus: "",
            itWasHuman: "",
            userDecision: null
        }
    },
    mounted() {

    },
    methods: {
        show() {
            this.$refs.modal.show();
            this.messages = [];
            this.userInput = "";
            this.state = null;
            this.msgLeft = 8;
            this.mode = Math.random() < 0.5 ? "mask" : "guess";
            setTimeout(() => {
                this.state = "chatting";
                this.updateChatScroll();
                if (this.mode === "mask")
                    setTimeout(this.imitateCompanion, 1000);
            }, 500);
        },
        close() {
            this.$refs.modal.close();
        },
        imitateCompanion() {
            let m = ["Hello!", "How are you?", "Sorry, I do not understand you :(", "Oh nice...",
                "Do you think I'm robot?", "I'm asking you to be polite, please...", "You are talking like a bot!"];
            let t = m[Math.floor(Math.random()*m.length)];
            this.messages.push({
                text: t,
                income: true,
                id: this.messages.length
            });
            this.updateChatScroll();
        },
        sendMessage() {
            if (this.userInput === "" || this.msgLeft === 0)
                return;
            this.messages.push({
                text: this.userInput,
                income: false,
                id: this.messages.length
            });
            this.updateChatScroll();
            this.userInput = "";
            --this.msgLeft;
            if (this.msgLeft > 0)
                setTimeout(this.imitateCompanion, 1000);
            else {
                if (this.mode === "guess") {
                    setTimeout(this.imitateCompanion, 1000);
                    setTimeout(() => {
                        this.state = "finalQuestion";
                        this.userDecision = null;
                        this.updateChatScroll()
                    }, 1500);
                } else {
                    setTimeout(() => {
                        this.state = "finalQuestion";
                        this.updateChatScroll()
                    }, 500);
                    setTimeout(() => {
                        this.finalStatus = Math.random() < 0.5;
                        this.state = "end";
                        this.updateChatScroll()
                    }, 1500);
                }
            }
        },
        guess(decision) {
            this.userDecision = decision;
            this.itWasHuman = Math.random() < 0.5;
            this.finalStatus = (this.userDecision === this.itWasHuman);
            setTimeout(() => {
                this.state = "end";
                this.updateChatScroll();
            }, 1000);
        },
        updateChatScroll() {
            this.$nextTick(() => {
                let chat = document.getElementById("chat");
                if (chat === undefined || chat === null)
                    return;
                chat.scrollTop = chat.scrollHeight;
            });
        },
    },
    components: {
        Modal
    }
}
</script>
<template>
    <div>
        <transition name="modal">
            <div v-if="visible" class="modal-mask" @click="modalOutClick">
                <div class="modal-wrapper">
                    <div class="modal-container" @click="preventModalOutClick">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        display: table;
        transition: opacity .3s ease;
        color: black;
    }

    .modal-wrapper {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-container {
        display: inline-block;
        width: auto;
        height: auto;
        min-width: 50px;
        min-height: 50px;
        margin: 0 auto;
        padding: 12px 12px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        transform: scale(1.1);
    }
</style>

<script>

export default {
    data() {
        return {
            visible: false,
            oldHtmlOverflow: ""
        }
    },
    methods: {
        modalOutClick() {
            this.$emit('modal-out-click');
        },
        preventModalOutClick(e) {
            e.stopPropagation();
        },
        show() {
            if (this.visible)
                return;
            let h = document.getElementsByTagName('html')[0];
            this.oldHtmlOverflow = h.style.overflow;
            h.style.overflow = "hidden";
            this.visible = true;
        },
        close() {
            if (!this.visible)
                return;
            document.getElementsByTagName('html')[0].style.overflow = this.oldHtmlOverflow;
            this.oldHtmlOverflow = "";
            this.visible = false;
        }
    }
};
</script>
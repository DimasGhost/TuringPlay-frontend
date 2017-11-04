<template>
    <div>
        <modal ref="modal" @modal-out-click="close">
            <div class="keker"></div>
        </modal>
    </div>
</template>

<style lang="scss" scoped>
    .keker {
        background: black;
        width: 300px;
        height: 300px;
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
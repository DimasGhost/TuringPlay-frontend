<template>
    <div id="app" style="width: 100vw">
        <chat ref="chat"></chat>
        <div class="section">
            <div class="container">
                <page-title></page-title>
                <page-menu :open-chat="showChat"></page-menu>
                <top-table></top-table>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>

import PageTitle from './components/PageTitle.vue';
import PageMenu from './components/PageMenu.vue';
import TopTable from './components/TopTable.vue';
import Chat from './components/chat/Chat.vue';

export default {
    name: 'app',
    components: {
        PageTitle, PageMenu, TopTable, Chat
    },
    methods: {
        showChat() {
            this.$refs.chat.show();
        }
    }
};
</script>

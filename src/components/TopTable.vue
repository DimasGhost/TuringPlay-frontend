<template>
    <div class="columns is-centered">
        <div class="column is-5">
            <h1 class="title is-4 has-text-centered">Top-25</h1>
            <table class="table is-fullwidth users-table">
                <thead>
                <tr>
                    <th>Pos</th>
                    <th>Name</th>
                    <th>Winrate</th>
                    <th>Dialogs</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <th>{{index + 1}}</th>
                    <td><a class="title is-6">{{user.name}}</a></td>
                    <td>{{user.winrate}}%</td>
                    <td>{{user.gamesCnt}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .users-table th, .users-table td {
        text-align: center;
    }
</style>

<script>
export default {
    data() {
        return {
            names: ["Bruce", "John", "Petr", "Idar", "Airat", "Daniel", "Dmitry", "Vadim", "Asalak", "Benedict"],
            users: []
        };
    },
    mounted() {
        for (let i = 0; i < 25; ++i) {
            let user = {};
            user.name = this.names[Math.floor(Math.random() * (this.names.length - 1))];
            user.winrate = (Math.random() * 100).toFixed(2);
            user.gamesCnt = Math.floor(Math.random() * 1000);
            this.users.push(user);
        }
        this.users.sort((a, b) => {
            if (a.winrate > b.winrate)
                return -1;
            if (a.winrate < b.winrate)
                return 1;
            return 0;
        });
    }
}
</script>
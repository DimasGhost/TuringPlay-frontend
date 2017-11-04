<template>
    <div class="columns is-centered is-mobile">
        <div class="column is-narrow">
            <img class="logo" :src="this.logoSrc">
        </div>
        <div class="column is-narrow is-bottom project-title">
            <h1 class="title is-2" :class="[{'is-3': mqw <= 600}, {'is-4': mqw <= 400}]">
                Turing Play
            </h1>
            <h2 class="subtitle is-4" :class="[{'is-5': mqw <= 600}, {'is-6': mqw <= 400}]">
                By Armilon
            </h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .logo {
        width: 150px;
        @media(max-width: 600px) {
            width: 120px;
        }
        @media(max-width: 400px) {
            width: 100px;
        }
    }

    .project-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

</style>

<script>
export default {
    data() {
        return {
            //logoSrc: "http://abogoproductions.com/wp-content/uploads/2016/01/logo-kfc-705x705.png",
            logoSrc: "static/logo.png"
        };
    }
}
</script>
<template>
    <div class="columns is-centered">
        <div class="column is-5" style="text-align: center">
            <hr>
            <h5 class="subtitle is-4 has-text-centered login-text"
                :class="[{'is-5': mqw <= 600}, {'is-6': mqw <= 400}]"
                style="margin-bottom: 0.7rem">
                You signed in as <strong>George</strong>
            </h5>
            <h5 class="subtitle is-6 has-text-centered"
                :class="[{'is-7': mqw <= 600}, {'is-8': mqw <= 400}]">
                <strong>59</strong> users online
            </h5>
            <a class="button is-outlined"
               :class="[{'is-medium': mqw > 950}, {'is-normal': mqw <= 950 && mqw > 400}, {'is-small': mqw <= 400}]">
                <span class="icon">
                    <i class="fa fa-question"></i>
                </span>
                <span>About</span>
            </a>
            <a class="button is-outlined"
               :class="[{'is-large': mqw > 950}, {'is-medium': mqw <= 950 && mqw > 400}, {'is-normal': mqw <= 400}]"
                @click="openChat()"
            >
                <span class="icon">
                    <i class="fa fa-comments"></i>
                </span>
                <span>Start</span>
            </a>
            <a class="button is-outlined"
               :class="[{'is-medium': mqw > 950}, {'is-normal': mqw <= 950 && mqw > 400}, {'is-small': mqw <= 400}]">
                <span class="icon">
                    <i class="fa fa-user"></i>
                </span>
                <span>Profile</span>
            </a>
            <hr>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
    props: {
        openChat: {}
    }
}
</script>
<template>
    <div class="home">
        <section id="banner">
            <div class="inner">
                <h1>FindIT</h1>
                    <router-link to="/login" class="button alt">Login</router-link>
                    <router-link to="/register" class="button alt">Register</router-link>
            </div>
        </section>
    </div>
</template>

<script type="text/javascript">
"use strict";

export default {
    "name": "HomePage",
    "components": {
    },
    "data": function() {
        return {
        }
    }
}

</script>

<style scoped>

    .inner {
        height: 100vh;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #fff;
    }

</style>
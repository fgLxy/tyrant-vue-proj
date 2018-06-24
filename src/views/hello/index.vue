<template>
    <div>
        <!--<router-link :to="{name:'Home'}">back</router-link>-->

        <h3>hello page</h3>
        <!--<router-link to="page1/hello">get hello</router-link>-->
        <!--<router-view></router-view>-->
        <router-link to="/home">home</router-link>
        <br>
        <router-link to="/hello/fir">fir</router-link>
        <br>
        <router-link to="/hello/sec">sec</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'hello'
    }
</script>

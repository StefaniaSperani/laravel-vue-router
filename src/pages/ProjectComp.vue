<template>
    <section v-if="project">
        <h1>{{ project.title }}</h1>
        <img :src="`${store.imagBasePath}${project.cover_image}`" class="card-img-top" :alt="project.title">
        <p>{{ project.content }}</p>
        <div v-if="project.type">
            <h5>Type: {{ project.type.name }}</h5>
        </div>
    </section>
    <section v-else>Loading...</section>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'ProjectComp',
    data() {
        return {
            store,
            project: null,
        }
    },
    methods: {
        getProject() {
            console.log(this.$route);
            axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`).then((res) => {
                console.log(res.data.results);
                if (res.data.success) {
                    //console.log(response.data.results);
                    this.project = res.data.results;
                } else {
                    //console.log(this.$router);
                    this.$router.push({ name: 'not-found' });
                }

            });
        }
    },
    mounted() {
        this.getProject();
    }

}
</script>

<style lang="scss" scoped>

</style>
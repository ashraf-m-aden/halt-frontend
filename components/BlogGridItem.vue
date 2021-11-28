<template>
    <div class="blog">
        <div class="thumbnail">
            
                <img :src="blog.imgSrc" :alt="blog.title">

              <!-- <n-link 
            to="/blog-details"
             class="image">
            </n-link> c'est le lien , il faut mettre les contenu à l'interieur -->
        </div>
        <div class="info">
            <ul class="meta">
                <li><i class="far fa-calendar"></i>{{ blog.date }}</li>
                <!-- <li><i class="far fa-eye"></i>{{ blog.view }} Views</li> -->
            </ul>
            <h3 class="title">
                {{ blog.title }}
            </h3>
            
                <mark>Read More</mark>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blog']
    };
</script>
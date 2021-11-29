<template>
    <div class="section-padding-t90-b100">
        <div class="container">
            <!-- Section Title Start -->
            <SectionTitle title="Nous créons un plan d'action unique pour nos clients" sub-title="Une phrase d'accroche ici aussi" add-class-name="mb-60" />
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" data-aos="fade-up" v-for="(feature, index) in features" :key="index">
                    <div class="icon-box text-center" :class="addClassName">
                        <div class="icon">
                            <img class="svgInject" :src="feature.iconSrc" :alt="feature.title">
                        </div>
                        <div class="content">
                            <h3 class="title">{{ feature.title }}</h3>
                            <div class="desc">
                                <p>{{ feature.text }}</p>
                            </div>
                            <!-- <n-link to="/fr/about" class="link">Learn More</n-link> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["addClassName"],

        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
        },

        data() {
            return {
                features: [
                    {
                        id: 1,
                        title: "Strategie 1",
                        text: "                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                        iconSrc: "/images/svg/linea/linea-basic-target.svg"
                    },
                    {
                        id: 2,
                        title: "Strategie 2",
                        text: "                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                        iconSrc: "/images/svg/linea/linea-basic-target.svg"
                    },
                    {
                        id: 3,
                        title: "Strategie 3",
                        text: "                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                        iconSrc: "/images/svg/linea/linea-basic-target.svg"
                    }
                ]
            }
        },
    };
</script>
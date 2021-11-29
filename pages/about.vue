<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="We provide innovative and value added solutions" backgroundUrl= "/images/hero-image/corporate.jfif" />
        <AboutFour />

        <AboutTwo class="section-padding-top about-section-padding-bottom-200" />
        <AboutOne class="section-padding-top about-section-padding-bottom-200" />

        <CallToActionVideo />


        <CallToActionThree />

        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            AboutTwo: () => import('@/components/AboutTwo'),
            AboutOne: () => import('@/components/AboutOne'),
            CallToActionVideo: () => import('@/components/CallToActionVideo'),
            AboutFour: () => import('@/components/AboutFour'),
            TestimonialSectionOne: () => import('@/components/TestimonialSectionOne'),
            CallToActionThree: () => import('@/components/CallToActionThree'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                items: [
                    {
                        text: 'Acceuil',
                        to: "/fr/"
                    },
                    {
                        text: 'A propos',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'About us'
            }
        },
    };
</script>



<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="We provide innovative and value added solutions" backgroundUrl= "/images/bg/team.jpg" />

        <CallToActionOne />

        <!--Google Map Area Start-->
        <div class="google-map-area section-padding-bottom">
            <div class="container">
                <div class="contact-map-area">
                    <iframe class="contact-map" src="https://maps.google.com/maps?q=djibouti%20halt&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>

        <!--Google Map Area Start-->

        <ContactForm />

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
            CallToActionOne: () => import('@/components/CallToActionOne'),
            ContactForm: () => import('@/components/ContactForm'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                items: [
                    {
                        text: 'Acceuil',
                        to: "/"
                    },
                    {
                        text: 'Contact',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Contact'
            }
        },
    };
</script>



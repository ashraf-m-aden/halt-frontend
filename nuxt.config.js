export default {

    generate: {
        fallback: true,
        routes: [
            '/'
        ]
    },

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'HALT Group',
        titleTemplate: '%s || HALT Group',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel:"apple-touch-icon", sizes:"180x180", href:"./static/images/favicon_io/apple-touch-icon.png" },
            { rel:"icon", type:"image/png", sizes:"32x32", href:"./static/images/favicon_io/favicon-32x32.png" },
            { rel:"icon", type:"image/png", sizes:"16x16", href:"./static/images/favicon_io/favicon-16x16.png" }
        ],

    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        'assets/scss/style.scss'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/silentbox.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/Mixitup.client.js',
        {
            src: "~/plugins/aos",
            ssr: false
        },
        {
            src: "~/plugins/typed.js",
            ssr: false
        }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // Simple usage
        '@nuxtjs/router',

        // With options
        // ['@nuxtjs/router', { /* module options */ }]
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
    ],

    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ]
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        extend(config, ctx) {
        },
    },
    target: 'static'

}

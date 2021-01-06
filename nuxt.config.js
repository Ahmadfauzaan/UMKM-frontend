export default {

    generate: {
        fallback: true
    },

    // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
    ssr: false,


    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'Investasi UMKM',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/money-bag.svg' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
            },
        ],
    },


    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://auth.nuxtjs.org/guide/setup.html
        '@nuxtjs/auth',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: 'https://gentle-sea-19868.herokuapp.com'
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/api/v1/sessions', method: 'post', propertyName: 'data.token' },
                    logout: false,
                    user: { url: '/api/v1/user/fetch', method: 'get', propertyName: 'data' }
                },
                // tokenRequired: true,
                // tokenType: 'bearer',
                // globalToken: true,
                // autoFetchUser: true
            }
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
}
<template>
<div class="project-page">
    <section class="project-header pt-5">
    <div class="container mx-auto relative">
        <Navbar />
    </div>
    </section>
    <section class="container project-container mx-auto -mt-56">
    <div class="flex mt-3">
        <div class="w-3/4 mr-6">
        <div class="bg-white p-3 mb-3 border border-gray-400 rounded-20">
            <figure class="item-image">
            <img :src="default_image" alt="" class="rounded-20 w-full" />
            </figure>
        </div>
        <div class="flex -mx-2">
            <div
            v-for="image in campaign.data.images"
            :key="image.image_url"
            class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20"
            >
            <figure class="item-thumbnail">
                <img
                :src="$axios.defaults.baseURL + '/' + image.image_url"
                @click="
                    changeImage($axios.defaults.baseURL + '/' + image.image_url)
                "
                alt=""
                class="rounded-20 w-full"
                />
            </figure>
            </div>
        </div>
        </div>
        <div class="w-1/4">
        <div
            class="bg-white w-full p-5 border border-gray-400 rounded-20 sticky"
            style="top: 15px"
        >
            <h3>Project Leader:</h3>

            <div class="flex mt-3">
            <div class="w-1/4">
                <img
                :src="
                    $axios.defaults.baseURL + '/' + campaign.data.User.image_url
                "
                alt=""
                class="w-full inline-block rounded-full"
                />
            </div>
            <div class="w-3/4 ml-5 mt-1">
                <div class="font-semibold text-xl text-gray-800">
                {{ campaign.data.User.nama }}
                </div>
                <div class="font-light text-md text-gray-400">
                {{ campaign.data.backer_count }} investor sudah mendanai project ini
                </div>
            </div>
            </div>

            <h4 class="mt-5 font-semibold">Apa yang akan didapat investor  :</h4>
            <ul class="list-check mt-3">
            <li v-for="perk in campaign.data.perks" :key="perk">
                {{ perk }}
            </li>
            </ul>
            
            <nuxt-link
                to="projects/_id"
                class="text-center mt-3 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full"
            >
                Back
            </nuxt-link>
            </template>

        </div>
        </div>
    </div>
    </section>
    <section class="container mx-auto pt-8">
<div class="flex justify-between items-center">
        <div class="w-3/4 mr-6">
            <h3 class="text-2xl text-gray-900 mb-4 mt-5">
            Transaksi pendanaan
            </h3>
        </div>
        </div>
        <div class="block mb-2">
        <div class="w-full lg:max-w-full lg:flex mb-4" v-for="transaction in transactions.data" :key="transaction.id">
            <div
            class="w-full border border-gray-400 lg:border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
            >
            <div>
                <div class="text-gray-900 font-bold text-xl mb-1">
                {{transaction.nama}}
                </div>
                <p class="text-sm text-gray-600 flex items-center mb-2">
                Rp. {{new Intl.NumberFormat().format(transaction.amount)}} &middot; {{transaction.created_at}}
                </p>
            </div>
            </div>
        </div>
        </div>
    </section>
    <div class="cta-clip -mt-20"></div>
    <CallToAction />
    <Footer />
</div>
</template>

<script>
export default {
async asyncData({ $axios, params }) {
    const campaign = await $axios.$get('/api/v1/campaigns/' + params.id)
    const transactions = await $axios.$get('/api/v1/campaigns/' + params.id +'/transactions')

        return {campaign, transactions}
},
data() {
    return {
    default_image: '',
    transactions: {
        amount: 0,
        campaign_id: Number.parseInt(this.$route.params.id),
    },
    }
},
methods: {
    changeImage(url) {
    this.default_image = url
    },
    async fund() {
    try {
        let response = await this.$axios.post(
        '/api/v1/transactions',
        this.transactions
        )
        window.location = response.data.data.payment_url
        console.log(response.data.data.payment_url)
    } catch (error) {
        console.log(error)
    }
    },
},
mounted() {
    this.default_image =
    this.$axios.defaults.baseURL + '/' + this.campaign.data.image_url
}
}
</script>
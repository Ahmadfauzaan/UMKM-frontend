<template>
        <div class="project-page">
    <section class="dashboard-header pt-5">
        <div class="container mx-auto relative">
<Navbar />
        </div>
    </section>
    <section class="container mx-auto pt-8">
        <div class="flex justify-between items-center">
        <div class="w-full mr-6">
            <h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2>
        </div>
        </div>
        <div class="flex justify-between items-center">
        <div class="w-3/4 mr-6">
            <h3 class="text-2xl text-gray-900 mb-4">
                Buat Projects Baru</h3>
        </div>
         <button
            @click="save"
            class="bg-green-button hover:bg-green-button text-white font-bold px-4 py-1 rounded inline-flex items-center"
          >
            Save
          </button>
        </div>
        <div class="block mb-2">
        <div class="w-full lg:max-w-full lg:flex mb-4">
            <div
            class="w-full border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
            >
            <form class="w-full">
                <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                    Nama UMKM
                    </label>
                    <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Contoh: Demi Gunpla Demi Istri"
                    v-model="campaign.nama_campaign"
                    />
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                    Modal yang dibutuhkan
                    </label>
                    <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    placeholder="Contoh: 200000"
                    v-model.number="campaign.goal_amount"
                    />
                </div>
                <div class="w-full px-3">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                    >
                    Short Description
                    </label>
                    <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Deskripsi singkat mengenai UMKM mu"
                    v-model="campaign.short_description"
                    />
                </div>
                <div class="w-full px-3">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                    Apa yang akan didapat investor
                    </label>
                    <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Contoh: Mendapat keuntungan usaha 10%"
                    v-model="campaign.perks"
                    />
                </div>
                <div class="w-full px-3">
                    <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    >
                    Description
                    </label>
                    <textarea
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Isi deskripsi panjang untuk projectmu"
                    v-model="campaign.description"
                    ></textarea>
                </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    </section>
    <div class="cta-clip -mt-20"></div>
    <section class="call-to-action bg-purple-progress pt-64 pb-10"></section>
<Footer />
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    data() {
        return{
            campaign: {
                nama_campaign: '',
                short_description: '',
                description: '',
                goal_amount: '0',
                perks: '',
            },
        }
    },
    methods: {
        async save(){
            try {
                let response = await this.$axios.$post(
                    '/api/v1/campaigns', 
                    this.campaign
                    )
                this.$router.push({
                    name: 'dashboard-projects-id',
                    params: {id: response.data.id},
                })
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>
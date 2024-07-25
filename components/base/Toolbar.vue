<script setup lang="ts">
const items: Base.Sidebar[] = [
    {
        name: "Nuxt",
        href: "https://nuxt.com/",
        bg: "bg-green-4",
        clrText: ""
    },
    {
        name: "Quasar",
        href: "https://quasar.dev/",
        bg: "bg-blue-7",
        clrText: "text-white"
    },
    {
        name: "Pinia",
        href: "https://pinia.vuejs.org/",
        bg: "bg-amber-5",
        clrText: ""
    },
    {
        name: "Dadata",
        href: "https://dadata.ru/",
        bg: "bg-deep-orange-6",
        clrText: "text-white"
    }

]

</script>

<template>
<div class="q-pa-md q-gutter-y-sm">
    <h5>Libraries used</h5>
    <q-separator/>

    <template v-for="item in items">
        <q-toolbar :class="`${item.bg} ${item.clrText}`">
            <q-toolbar-title>
                {{ item.name }}
            </q-toolbar-title>
            <q-btn flat round dense icon="home" :href="item.href">
                <q-tooltip>
                    {{ `Open ${item.name} website` }}
                </q-tooltip>
            </q-btn>
        </q-toolbar>
    </template>
</div>
</template>

<style scoped lang="sass">
</style>
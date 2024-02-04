<template>
    <nav class="bg-zinc-950 py-4 px-8">
        <div class="flex gap-8 items-center mx-auto text-slate-200 text-lg">
            <router-link to="/">
                <img class="border-r border-slate-200 pr-8" alt="Logo" draggable="false" loading="lazy" src="../assets/logo.svg" width="80" />
            </router-link>
            <span class="flex items-center gap-3">
                <font-awesome-icon icon="building" />
                <router-link to="about" class="hover:text-teal-400 hover:underline duration-75">About</router-link>
            </span>
            <span class="flex items-center gap-3">
                <font-awesome-icon icon="phone" flip="horizontal" />
                <router-link to="contact" class="hover:text-teal-400 hover:underline duration-75">Contact</router-link>
            </span>
        </div>
    </nav>
</template>

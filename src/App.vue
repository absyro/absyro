<template>
    <nav class="bg-zinc-950 py-4 px-8">
        <div class="flex gap-8 items-center mx-auto text-slate-200 text-lg">
            <router-link active-class="border-teal-400" to="/" class="border-r border-slate-200 pr-6 duration-75">
                <img alt="Logo" draggable="false" loading="lazy" src="./assets/logo.svg" width="50" />
            </router-link>
            <span class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'building']" />
                <router-link active-class="text-teal-400" to="about" class="hover:text-teal-400 hover:underline duration-75">About</router-link>
            </span>
            <span class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'phone']" flip="horizontal" />
                <router-link active-class="text-teal-400" to="contact" class="hover:text-teal-400 hover:underline duration-75">Contact</router-link>
            </span>
        </div>
    </nav>
    <div class="p-4">
        <router-view />
    </div>
    <footer class="bg-zinc-950 text-white py-4 px-8">
        <div class="mx-auto text-center flex items-center justify-between">
            <p>&copy; 2024 Absyro - All rights reserved.</p>
            <div>
                <a href="https://github.com/absyro/absyro-website"><font-awesome-icon :icon="['fab', 'github']" size="lg" class="hover:text-teal-400 duration-75" /></a>
            </div>
        </div>
    </footer>
</template>

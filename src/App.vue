<template>
    <nav class="py-4 px-4 md:px-8 border-b border-zinc-900">
        <div class="flex gap-8 items-center mx-auto text-slate-200 text-lg">
            <router-link active-class="border-teal-400" to="/" class="border-r border-slate-200 pr-6 duration-200">
                <img alt="Logo" draggable="false" loading="lazy" src="./assets/logo.svg" width="50" />
            </router-link>
        </div>
    </nav>
    <div class="py-4 px-4 md:px-8">
        <router-view />
    </div>
    <footer class="text-white py-4 px-4 md:px-8 border-t border-zinc-900">
        <div class="mx-auto text-center flex flex-col md:flex-row items-center justify-between gap-4">
            <p class="border-b border-zinc-900 pb-4 md:border-0">Copyright &copy; 2024 Absyro - All rights reserved.</p>
            <div class="flex items-center gap-6">
                <a target="_blank" href="https://instagram.com/theabsyro"><font-awesome-icon icon="fab fa-instagram" size="lg" class="hover:text-teal-400 duration-200" /></a>
                <a target="_blank" href="https://github.com/absyro"><font-awesome-icon icon="fab fa-github" size="lg" class="hover:text-teal-400 duration-200" /></a>
            </div>
        </div>
    </footer>
</template>

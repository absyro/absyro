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

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
@import 'tailwindcss/components';

@font-face {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-a1biLD-H.woff2) format('woff2');
    unicode-range: U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0898-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC;
}

@font-face {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-a13iLD-H.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
    font-family: 'Cairo';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/cairo/v28/SLXgc1nY6HkvangtZmpQdkhzfH5lkSs2SgRjCAGMQ1z0hOA-a1PiLA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: italic;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAgM9UvI.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: italic;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLCwM9UvI.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: italic;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAwM9UvI.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: italic;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLDAM9UvI.woff2) format('woff2');
    unicode-range: U+0370-03FF;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: italic;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAAM9UvI.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: italic;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAQM9UvI.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: italic;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLDwM9.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVl2ZhZI2eCN5jzbjEETS9weq8-19-7DRs5.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVl2ZhZI2eCN5jzbjEETS9weq8-19a7DRs5.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVl2ZhZI2eCN5jzbjEETS9weq8-1967DRs5.woff2) format('woff2');
    unicode-range: U+1F00-1FFF;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVl2ZhZI2eCN5jzbjEETS9weq8-19G7DRs5.woff2) format('woff2');
    unicode-range: U+0370-03FF;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVl2ZhZI2eCN5jzbjEETS9weq8-1927DRs5.woff2) format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVl2ZhZI2eCN5jzbjEETS9weq8-19y7DRs5.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/robotocondensed/v27/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

* {
    font-family: Cairo, sans-serif;
}

.pace {
    pointer-events: none;
    user-select: none;
}
.pace.pace-inactive {
    display: none;
}
.pace .pace-progress {
    background: #3ed997;
    position: fixed;
    z-index: 2000;
    right: 100%;
    width: 100%;
    height: 2px;
    top: 0;
}
</style>
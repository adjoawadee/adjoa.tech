<script setup lang='ts'>
    import { ref } from 'vue';
    const isMobileMenuOpen = ref(false);
    const handleClick = () => {
        isMobileMenuOpen.value = !isMobileMenuOpen.value;
    }
</script>
<template>
    <header class="text-amber-600 container overflow-hidden md:pb-32">
        <nav class="flex justify-between bg-orange-200 md:px-24 p-4 w-full fixed top-0 z-10">
            <div class="flex items-center pl-2">
                <a class="transition ease-in-out delay-150 hover:-translate-y-1 duration-200" href="/">
                    <span class="text-2xl font-semibold">Adjoa</span>
                    <span>.</span>
                    <span class="text-2xl">tech</span>
                </a>
            </div>

            <button @click="handleClick" data-collapse-toggle="navbar-default" type="button" class="p-2 text-sm md:hidden" aria-expanded="false">
                <p class="uppercase underline underline-offset-4">menu</p>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="flex flex-row p-4 mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200">
                        <router-link class="py-2 pl-3 pr-4 md:p-0 target:shadow-lg" :to="{name:'home', hash: '#about' }">About</router-link>
                    </li>
                    <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200">
                        <router-link class="py-2 pl-3 pr-4 md:p-0 target:shadow-lg" :to="{name:'home', hash: '#experience' }">Experience</router-link>
                    </li>
                    <li class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200">
                        <router-link href="#" class="py-2 pl-3 pr-4 md:p-0" :to="{name:'home', hash: '#contact' }">Contact</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <transition enter-from-class="opacity-0"
                        enter-to-class="opacity-100"
                        enter-active-class="transition duration-300"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                        leave-active-class="transition duration-300">
            <div v-if="isMobileMenuOpen" class="fixed container m-auto h-full md:hidden pr-10  bg-orange-200 z-50 overflow-hidden">
                <button @click="handleClick" data-collapse-toggle="navbar-default" type="button" class="p-2 pb-10 text-sm absolute top-5 right-7" aria-expanded="false">
                        <p class="uppercase underline underline-offset-4">close</p>
                </button>
                <ul class="text-5xl pt-24 flex flex-col items-end gap-y-7">
                    <li>
                        <router-link @click="handleClick" :to="{name:'home', hash: '#about' }">
                            <p> <span class="text-sm">01.</span> About</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="handleClick" :to="{name:'home', hash: '#experience' }">
                            <p> <span class="text-sm">02.</span> Experience</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="handleClick" href="#" :to="{name:'home', hash: '#projects' }">
                            <p> <span class="text-sm">03.</span> Projects</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link @click="handleClick" href="#" :to="{name:'home', hash: '#contact' }">
                            <p> <span class="text-sm">04.</span> Contact</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </transition>
</header>
</template>

   
<template>
    <section id="contact" class="container mx-auto min-h-screen p-7 text-amber-600 relative">
        <div class="abstract-shape bg-gradient-to-r from-rose-200 via-orange-200 to-orange-300 absolute opacity-30 -right-32 scale-150 rotate-45"></div>
        <div class="abstract-shape-1 bg-gradient-to-tr from-rose-200 via-red-400 to-pink-300 absolute opacity-10 -left-24"></div>
        <div class="vertical-wave absolute left-48 scale-75 opacity-25"></div>
        <div class="pt-4 flex flex-col">
            <h1 class="text-6xl hero-text">Reach out or just say Hi 🙋🏽‍♀️</h1>
            <p class="pt-4 text-2xl text-cyan-900">My website is still in progress. 
                But if you made it this far, you are intrigued by what you see so far and you have a tip for my next <span class="hero-text">golden opportunity</span>, feel free to reach out!
            </p>
            <p class="pt-4 text-2xl text-cyan-900">
                And if you're feeling lazy to scroll back to the top, I made 
                <span class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-200">
                        <router-link class="hero-text" :to="{name:'home', hash: '#hero' }">this</router-link>
                </span>
                specially for you!
            </p>

            <div class="pt-16">
                <ul>
                    <li class="transition ease-in-out delay-150 hover:text-blue-700 duration-200">
                        <a href="https://www.linkedin.com/in/ewadee/" target="_blank">LINKEDIN</a>
                    </li>
                    <li class="transition ease-in-out delay-150 hover:text-blue-700 duration-200">
                        <a href="https://twitter.com/adjoa_wadee" target="_blank">X</a>
                    </li>
                    <li class="transition ease-in-out delay-150 hover:text-blue-700 duration-200">
                        <a href="mailto:adjoawadee@gmail.com?subject=Hi Adjoa...">MAIL</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

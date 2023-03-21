<template>
    <section id="hero" class="container mx-auto min-h-screen relative p-24 md:p-4 px-7 text-amber-600">
        <div class="abstract-shape bg-gradient-to-r from-rose-200 via-orange-200 to-orange-300 absolute opacity-30 right-0 -top-10"></div>
        <div class="abstract-shape bg-gradient-to-r from-rose-200 via-orange-200 to-orange-300 absolute opacity-30 right-0 -top-10 scale-75  rotate-80"></div>
        <div class="abstract-shape-1 bg-gradient-to-br from-red-100 via-red-200 to-red-300 absolute opacity-30 -left-24 -top-20"></div>
        <div class="abstract-shape-1 bg-gradient-to-br from-red-100 via-red-200 to-red-300 absolute opacity-30 -left-24 -top-20 scale-75  rotate-80"></div>
        <div class="wave absolute bottom-0 md:right-40 right-40 opacity-20"></div>
        <div class="flex flex-col md:flex-row md:space-x-10">
            <div class="flex-1">
                <img class="rounded-full" src="../assets/adjoa.png" alt="">
            </div>
            <div class="flex-1 py-6">
                
                <h1 class="hero-text text-6xl">Adjoa Wadee <sup class="text-sm font-extralight">she/her</sup>  </h1>
                <p class="text-3xl">FRONTEND ENGINEER</p>

                <div class="flex flex-col md:py-32 py-12 text-cyan-900 text-2xl space-y-1">
                    <p> <sup>01.</sup> I design and build <span class="hero-text">interactive</span> and <span class="hero-text">intuitive</span> web applications for the modern web.</p>
                    <p><sup>02.</sup> based in <span class="hero-text">the netherlands</span></p>
                    <p><sup>03.</sup> currently a <span class="hero-text">frontend consultant</span> at Passionate People</p>
                    
                </div>

                <div class="flex justify-start text-4xl">
                    <div class="space-x-6">
                        <a href="https://www.linkedin.com/in/ewadee/" target="_blank">
                            <span class="transition ease-in-out delay-150 hover:text-blue-700 duration-200">
                                <i class="devicon-linkedin-plain"></i>
                            </span>
                        </a>
                        <a href="https://github.com/adjoawadee" target="_blank">
                            <span class="transition ease-in-out delay-150 hover:text-blue-700 duration-200">
                                <i class="devicon-github-original"></i>
                            </span>
                        </a>
                        <a href="https://twitter.com/adjoa_wadee" target="_blank">
                            <span class="transition ease-in-out delay-150 hover:text-blue-700 duration-200">
                                <i class="devicon-twitter-original"></i>
                            </span>
                        </a>
                        <a href="https://dev.to/adjoawadee" target="_blank">
                            <span class="transition ease-in-out delay-150 hover:text-blue-700 duration-200">
                                <i class="fa-brands fa-dev"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="css">
    .hero-text { 
        font-weight: 700;
    }
</style>
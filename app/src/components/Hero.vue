<template>
    <section class="container mx-auto min-h-screen p-7 text-amber-600">
        <div class="flex flex-col md:flex-row md:space-x-10">
            <div class="flex-1">
                <div class="bkg-shape-img"></div>
                <div class="bkg-shape-img rotate-45 -scale-75"></div>
                <img class="rounded-full" src="../assets/adjoa.png" alt="">
            </div>
            <div class="flex-1 py-6">
                <h1 class="hero-text text-5xl">Adjoa Wadee</h1>
                <p class="text-3xl">FRONTEND ENGINEER</p>
                <p class="text-cyan-900 py-3 text-2xl">
                    Crafting 
                    <span class="text-2xl hero-text">beautiful</span> and 
                    <span class="text-2xl hero-text">intuitive</span> 
                    websites for the modern web.
                </p>

                <div class="py-3 grid grid-cols-4 gap-4">
                    <div class="block">1</div>
                    <div class="block">1</div>
                    <div class="block">1</div>
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
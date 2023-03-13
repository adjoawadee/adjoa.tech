<template>
    <nav class="container flex flex-wrap items-center justify-between mx-auto md:p-7 p-5 text-amber-600">
        <a href="/">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Adjoa</span>
            <span>.</span>
            <span class="text-2xl">tech</span>
        </a>

        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-amber-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-row p-4 mt-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                    <a href="#" class="py-2 pl-3 pr-4 md:p-0" aria-current="page">About</a>
                </li>
                <li>
                    <a href="#" class="py-2 pl-3 pr-4 md:p-0">Experience</a>
                </li>
                <li>
                    <a href="#" class="py-2 pl-3 pr-4 md:p-0">Projects</a>
                </li>
                <li>
                    <a href="#" class="py-2 pl-3 pr-4 md:p-0">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<template>
    <div class="sidebar-widget-wrapper">
        <div class="sidebar-widget">
            <div class="sidebar-widget-content">
                <div class="sidebar-widget-search">
                    <form>
                        <input type="text" placeholder="Search...">
                        <button><i class="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
        <!-- <div class="sidebar-widget">
            <h3 class="sidebar-widget-title mb-2">Categories</h3>
            <div class="sidebar-widget-content">
                <ul class="sidebar-widget-cate-list">
                    <li>
                        <n-link to="/fr/"><span class="text">App</span> <span class="count">2</span></n-link>
                    </li>
                    <li>
                        <n-link to="/fr/"><span class="text">Marketing</span> <span class="count">8</span></n-link>
                    </li>
                    <li>
                        <n-link to="/fr/"><span class="text">UX Design</span> <span class="count">4</span></n-link>
                    </li>
                    <li>
                        <n-link to="/fr/"><span class="text">Startup</span> <span class="count">3</span></n-link>
                    </li>
                </ul>
            </div>
        </div> -->
        <div class="sidebar-widget">
            <h3 class="sidebar-widget-title mb-2">Popular Posts</h3>
            <div class="sidebar-widget-content">
                <ul class="sidebar-widget-list-post">
                    <li>
                        <span class="cate">Marketing</span>
                        <n-link to="/fr/blog-details"> How your sales can work together in account-based marketing</n-link>
                    </li>
                    <li>
                        <span class="cate">Busniess</span>
                        <n-link to="/fr/blog-details">The six things marketers need to understand about DTC marketing</n-link>
                    </li>
                    <li>
                        <span class="cate">Marketing</span>
                        <n-link to="/fr/blog-details">Eleven top tips for developing agile marketing</n-link>
                    </li>
                    <li>
                        <span class="cate">Agency</span>
                        <n-link to="/fr/blog-details"> How your sales can work together in account-based marketing</n-link>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

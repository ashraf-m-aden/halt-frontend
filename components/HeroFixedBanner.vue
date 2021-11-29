<template>
    <div class="intro-slider">
        <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url('images/hero-image/corporate.jfif')` }">
            <div class="container">
                <div class="row row-cols-lg-1 row-cols-1">
                    <div class="col align-self-center">
                        <div class="intro-content m-auto text-center">
                            <h2 class="title">Réaliser vos projets</h2>
                                <client-only>
                                    <vue-typer  
                                        :text='["correctement","avec succés","et professionalisme"]'
                                        erase-style='backspace'
                                        :erase-delay='100'
                                    ></vue-typer>
                                </client-only>
                            <div class="desc">
                                <p>Nous sommes une agence située à Djibouti. Nous pensons stratégie, concevons, et réalisons vos objectis.</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
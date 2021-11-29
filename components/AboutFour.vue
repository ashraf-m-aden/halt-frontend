<template>
  <div class="section-padding-top section-padding-bottom-180">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-image-area">
            <div class="about-image js-tilt">
              <img src="/images/brochure/hero1.png" alt="image" />
            </div>
            <div class="about-image js-tilt">
              <img src="/images/brochure/usine2.png" alt="image" />
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation
              addClassName="shape-1"
              data-depth="1"
              imgSrc="/images/shape-animation/about-shape-1.png"
            />
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-content-area about-four">
            <div class="section-title-two">
              <span class="sub-title"
                >Our solutions begin with brand research</span
              >
              <h3 class="title">
HALT Group est né d'une vision d'un impact durable.              </h3>
            </div>
            <p>
              Bien avant notre lancement en 2007, nous possédions déja une passion et une volonté d'avoir un impact positif durable sur la république de Djibouti et
             la scene internationale. Nous réalisons maintenant cette vision chaque jour, non
               seulement à Djibouti mais partout dans le monde. Adopter cette vision d'un
               meilleur avenir pour notre équipe, nos partenaires et notre communauté d'affaires,
               nous a permis de devenir l'une des plus grandes entreprises de
               Djibouti et depuis de nombreuses années nous avons un impact international
               grâce à nos bureaux régionaux. Nous avons hate que vous nous rejoigniez
               sur notre chemin de croissance, de prospérité et de succès.
            </p>
            <n-link to="/fr/contact" class="btn btn-primary btn-hover-secondary mt-30"
              >Get Started</n-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
};
</script>

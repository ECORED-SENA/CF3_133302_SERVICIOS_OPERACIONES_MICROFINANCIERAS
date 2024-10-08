<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Mercado objetivo
    .row.bg-c3.mb-5
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p El mercado objetivo es un grupo de personas al que va dirigido un producto o servicio específico, ellos serán considerados grupo de compradores en potencia.
              p En el caso de las microfinanzas, el mercado objetivo son aquellas personas con menores ingresos que tengan un pequeño negocio, inclusive que deseen crearlo, sin embargo, esto dependerá de las políticas de la entidad.
              p.mb-0 Un mercado objetivo se caracteriza por tener en cuenta los siguientes aspectos para poder determinarlo:
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema1/img1.png", style="width: 400px" alt="").m-auto
          .row
            .col-12
              .p-4.bg-c4(data-aos="fade-down")
                .row.align-items-center
                  .col-lg-4
                    figure
                      img(src="@/assets/curso/tema1/img2.svg", style="width: 400px" alt="").m-auto
                  .col-lg-8
                    SlyderF(columnas="col-md-6")
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
                        .row.justify-content-center.mb-3
                          .col-auto
                            .p-2.bg-c5
                              p.text-white.mb-0 #[b Demográfica]
                        p.text-center Incluye a las personas que tienen características demográficas muy parecidas, en ellas se encuentran elementos como: edad, género, nivel de ingresos, nivel de educación, entre otros.
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema1/img4.svg' alt='AvatarTop')
                        .row.justify-content-center.mb-3
                          .col-auto
                            .p-2.bg-c5
                              p.text-white.mb-0 #[b Psicográfica]
                        p.text-center Hace referencia al estilo de vida de las personas, que puede influir en si los individuos son usuarios potenciales del producto o servicio, o no.
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema1/img5.svg' alt='AvatarTop')
                        .row.justify-content-center.mb-3
                          .col-auto
                            .p-2.bg-c5
                              p.text-white.mb-0 #[b Usos o utilidad]
                        p.text-center Se debe conocer el tipo y la frecuencia de uso de tu producto o servicio.
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema1/img6.svg' alt='AvatarTop')
                        .row.justify-content-center.mb-3
                          .col-auto
                            .p-2.bg-c5
                              p.text-white.mb-0 #[b Beneficio]
                        p.text-center Se conoce como beneficio común que los clientes esperan obtener, mediante el uso de su producto o servicio.
                      .tarjeta.color-acento-botones.p-4
                        .row.justify-content-center.mb-3
                          .col-6
                            img(src='@/assets/curso/tema1/img7.svg' alt='AvatarTop')
                        .row.justify-content-center.mb-3
                          .col-auto
                            .p-2.bg-c5
                              p.text-white.mb-0 #[b Ubicación geográfica]
                        p.text-center Los usuarios potenciales del producto o servicio, pueden vivir en un área determinada, que puede afectar la comercialización y distribución de su producto o servicio.
    p.mb-5(data-aos="fade-right") Específicamente para las microfinanzas, el mercado objetivo serán los microempresarios que cumplan características de acuerdo con la política de captación y colocación de la entidad financiera o microfinanciera.
    .row.alig-items-center
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        .p-4.bg-c6.h-100
          p Ahora, la segmentación de mercado o segmentación de clientes, es un proceso por el cual se pueden dividir a los clientes potenciales en distintos grupos.
          p.mb-0 En las microfinanzas, se refiere a una amplia gama de servicios financieros ofrecidos a los más pobres y a sus actividades que les proveen ingresos, como sus microempresas.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img2.png", style="width: 400px" alt="")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

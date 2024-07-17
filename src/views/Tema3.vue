<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estrategias de identificación de necesidades de los clientes
    .row.bg-c7.mb-5
      .col-12
        .px-5
          p La identificación de clientes se mide y caracteriza por un sector del mercado potencial que todavía no compra los productos o servicios, y de hacerlo, daría mejores márgenes de ganancias.
          p.mb-4 Existe diferentes clases de factores que determinan la concesión de un crédito, entre las que se pueden mencionar:
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-6.mb-4.mb-lg-0
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  | Personalidad y experiencia del microempresario.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  | Características del producto y/o servicio, y del mercado.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  | Estrategia y organización de la empresa.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  | Criterios relacionados con la información contable del negocio.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img1.png', alt='alt', style='width: 400px').m-auto
          p.mb-4 Existen diferentes clases de estrategias para identificar las necesidades de los clientes, como por ejemplo:
          .row
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/img1.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center #[b Entender por qué hacen las compras]
                    p.text-center.mb-0 Es importante saber la motivación de los clientes a la compra de productos y/o servicios: demandas de trabajo, necesidades de la familia, presiones presupuestarias, necesidades sociales o emocionales o preferencias de marca.
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/img2.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center #[b Identificar los métodos preferidos de compras]
                    p.text-center.mb-0 Tendrá importancia entender cómo compran: si compran en línea, por teléfono o en tiendas, si sus decisiones de compras la hacen espontáneamente o son cautelosos y cuidadosos.
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/img3.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center #[b Considerar hábitos de consumo]
                    p.text-center.mb-0 Averiguar la capacidad financiera y hábitos de consumo es esencial, y para ello se debe considerar el ingreso promedio, y de ese ingreso qué porcentaje gasta en el producto y/o servicio, y tener en cuenta el presupuesto.
            .col-md-6.col-lg.mb-5.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema3/img4.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center #[b Consultar lo que piensa el mercado de la empresa]
                    p.text-center.mb-0 Obtener información acerca de las opiniones y expectativas que tienen los clientes del negocio, de los productos y/o servicios, del servicio al cliente y de los competidores.
    .row
      .col-lg-8.mb-4.mb-lg-0
        .p-4.bg-c9.h-100
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema3/img5.svg', style='width: 230px', alt='')
            .col
              p.txt-c1 #[b ¿Sabías qué?]
              p.text-white Lo invitamos a escuchar el siguiente Pódcast:
              .row
                .col-12
                  TarjetaAudio.color-primario.mb-3(
                    texto="Métodos de investigación del cliente."
                    :audio="require('@/assets/curso/tema3/audio1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
      .col-lg-4
        .p-4.bg-c10.h-100
          p Los clientes son la razón del ser del negocio, conseguir la mayor información posible es esencial para hacer crecer la empresa, para ello es importante aplicar las estrategias de identificación de las necesidades de los clientes.
          p.mb-0 Lo invitamos a escuchar el siguiente pódcast, donde se presentan algunos métodos de investigación del cliente.

</template>

<script>
export default {
  name: 'Tema3',
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

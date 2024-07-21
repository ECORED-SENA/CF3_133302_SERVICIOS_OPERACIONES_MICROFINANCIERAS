<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Cliente microfinanciero
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0
        .row
          .col-12
            .p-4.bg-c6
              .row.align-items-center.mb-3
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src="@/assets/curso/tema7/img1.svg", style="width: 70px" alt="").m-auto
                .col
                  .p-4.bg-c20
                    p.text-white.mb-0 Son personas de bajos ingresos que no tienen acceso a instituciones financieras formales.
              p.mb-0 Los clientes de microfinanzas suelen ser autónomos, a menudo emprendedores domésticos. Son pobres y no pobres vulnerables, que tienen una fuente de ingresos relativamente estable.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema7/img1.png", style="width: 500px" alt="")
    Separador
    #t_7_1
    .titulo-segundo.color-primario
      h2 7.1 Tipos de clientes
    .row.bg-c21
      .col-12
        .px-5
          p.mb-5 Espinosa (2016), nos presenta los siguientes tipos de clientes:
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema7/img3.png", style="width: 300px" alt="").m-auto
            .col-lg-9
              SlyderF(columnas="col-md-6")
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-4
                      img(src='@/assets/curso/tema7/img2.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b El cliente que lo sabe todo]
                  p.text-center Siempre creen y quieren tener la razón, siempre están descontentos con las compras que realizan.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-4
                      img(src='@/assets/curso/tema7/img2.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b El cliente negociador]
                  p.text-center Es exigente y siempre busca obtener algo (una devolución, un descuento, una promoción, un regalo, etc.).
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-4
                      img(src='@/assets/curso/tema7/img2.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b El cliente impaciente]
                  p.text-center Nunca tiene tiempo para nada y necesita que hagan las cosas rápido para él.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-4
                      img(src='@/assets/curso/tema7/img2.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b El cliente renegón]
                  p.text-center Por lo general, son agresivos cuando realizan una compra, tienden a estar siempre a la defensiva.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-4
                      img(src='@/assets/curso/tema7/img2.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b El cliente indeciso]
                  p.text-center Tiene demasiada indecisión para realizar una compra y necesita apoyo de un tercero.
    p.mb-5 Sin embargo, en el microcrédito existen los siguientes tipos de clientes:
    .tarjeta.tarjeta--azul2
      .p-4.p-md-5
        SlyderA(tipo="b")
          .row.align-items-center.justify-content-center
            .col-lg-5
              p.text-white #[b El público objetivo]
              p.text-white.mb-0 Son los dueños de negocios que el analista visita en la fase de promoción que no están interesados en el microcrédito. En este grupo se encuentran aquellos microempresarios que son clientes de la banca formal por la solidez de su empresa.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema7/img4.png", style="width: 500px" alt="").m-auto
          .row.align-items-center.justify-content-center
            .col-lg-5
              p.text-white #[b Cliente potencial]
              p.text-white.mb-0 Son aquellos clientes que pueden ser objeto de microcrédito; a primera vista cumplen con los requisitos de la institución, y muy seguramente serán clientes cuando resuelvan sus dudas acerca del producto, o vean la necesidad del mismo.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema7/img5.png", style="width: 500px" alt="").m-auto
          .row.align-items-center.justify-content-center
            .col-lg-5
              p.text-white #[b Cliente eventual]
              p.text-white.mb-0 Es aquel cliente que adquiere el producto porque cumple con los requisitos de microcrédito, más no con los de la banca tradicional, o porque tiene buenas referencias del servicio.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema7/img6.png", style="width: 500px" alt="").m-auto
          .row.align-items-center.justify-content-center
            .col-lg-5
              p.text-white #[b Cliente habitual]
              p.text-white.mb-0 Es el cliente que se le otorga el crédito y sigue renovando dentro de la entidad.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema7/img7.png", style="width: 500px" alt="").m-auto
    Separador
    #t_7_2
    .titulo-segundo.color-primario
      h2 7.2 Manejo de los momentos de verdad
    .row.align-items-center
      .col-lg-8.order-2.order-lg-1
        p Es la percepción cuando el proveedor de un servicio y el cliente se confrontan, cuando se tiene contacto con el cliente; en este proceso se entrega un producto y/o servicio donde incluye la habilidad, la motivación y las herramientas utilizadas de quien representa la empresa, así mismo las expectativas y comportamiento del cliente.
        .row
          .col-12
            .p-4.bg-c10
              p.mb-0 En definitiva, un momento de verdad es una promesa que se relaciona con la marca o con un producto individual.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema7/img3.svg", style="width: 400px" alt="").m-auto
    Separador
    #t_7_3
    .titulo-segundo.color-primario
      h2 7.3 Características
    .row.bg-c22
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-9.order-2.order-lg-1
              p Se deben conocer las características de los clientes, puesto que es importante conocer su comportamiento para saber cómo tratarlo, tanto en el momento del otorgamiento del crédito como para la cobranza, en caso que llegue a quedar en mora.
              p.mb-0 A continuación, se encuentran las características de los clientes según su influencia y nivel de expresividad. Con estos datos y características, como asesor, puede hacer una matriz y avanzar en el reconocimiento de su cliente objetivo:
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema7/img8.png", style="width: 300px" alt="").m-auto
          TabsB.color-acento-botones.mb-5
            .p-4.p-lg-5(titulo="Extrovertido - Influyente" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Afable]
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Buenas relaciones personales.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Atento y servicial.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Sugerencias no obstructivas.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Amistoso y comprensivo.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Se adapta con facilidad.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema7/img9.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Extrovertido - Dominante" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Expresivo]
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Tiene equilibrio y capacidad social.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Generador de entusiasmo.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Incentivos personales.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Contacto personal.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Elogia.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Es inspirador.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema7/img10.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Introvertido - Influyente" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Analítico]
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Le gustan los datos, los hechos.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Coloca atención a los detalles.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Tiene argumentos lógicos.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Tiene un desempeño consistente.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema7/img11.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Introvertido - Dominante" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Emprendedor]
                  ul.lista-ul
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Fortaleza de carácter.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Persistente.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Tiene un norte, una dirección.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Tiene control.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Es competitivo.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #B15815")
                      |
                      p.mb-0 Es persuasivo.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema7/img12.png", style="width: 350px" alt="").m-auto

</template>

<script>
export default {
  name: 'Tema7',
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

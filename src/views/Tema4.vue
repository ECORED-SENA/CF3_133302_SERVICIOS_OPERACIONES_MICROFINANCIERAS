<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Factores de evaluación para los microcréditos
    .row.bg-c12
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              p Estos factores son aquellas variables que se deben tener en cuenta al momento que se evalúa un crédito para su otorgamiento o negación.
              p.mb-0 Dentro de algunos factores de evaluación de los microcréditos podemos mencionar:
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema4/img3.png", style="width: 300px" alt="").m-auto
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema4/img4.png", style="width: 300px" alt="").m-auto
            .col-lg-9(data-aos="fade-left")
              SlyderF(columnas="col-md-6")
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Antigüedad]
                  p.text-center Tiempo de duración del negocio.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Capacidad de endeudamiento]
                  p.text-center Capacidad de pago, de acuerdo con su situación financiera.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Créditos anteriores]
                  p.text-center Créditos concedidos en la misma entidad o en otra.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Destino del crédito]
                  p.text-center En qué se utilizarán los recursos otorgados.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Edad]
                  p.text-center Es importante según política de la entidad, que se encuentre dentro de los rangos.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Estado civil]
                  p.text-center Situación familiar del titular del crédito.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Garantía]
                  p.text-center Tipo de garantía aportada por el cliente.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Mora]
                  p.text-center Cumplimiento o incumplimiento de las obligaciones.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Sexo]
                  p.text-center Género del cliente.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Sector]
                  p.text-center Sector de la actividad al que pertenece el negocio.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Monto]
                  p.text-center Importe del crédito.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Duración]
                  p.text-center Número de cuotas mensuales del crédito.
                .tarjeta.color-acento-botones1.p-4
                  .row.justify-content-center.mb-3
                    .col-6
                      img(src='@/assets/curso/tema4/img1.svg' alt='AvatarTop')
                  .row.justify-content-center.mb-3
                    .col-auto
                      .p-2.bg-c5
                        p.text-white.mb-0 #[b Zona]
                  p.text-center Lugar geográfico donde se encuentra localizado el negocio.
    .row.bg-c13
      .col-12
        .px-5.pt-5
          .row.align-items-center.mb-5
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              p Para identificar los anteriores factores de evaluación, la entidad financiera o microfinanciera se vale de consultas en las centrales de riesgo como Datacrédito y Cifin, pero también cuenta con la valiosa información que recolecta el asesor microfinanciero cuando realiza la visita al negocio, verifica toda la información entregada por el cliente con facturas, recibos, y con la verificación zonal, todo esto para la gran responsabilidad con la que se toma la decisión de otorgar o negar un crédito, la cual depende del resultado de la investigación que se hace acerca del solicitante para conocer si lo pagará y de la percepción que el analista se forme respecto del solicitante en su comportamiento probable de pagar el crédito. (Morales y Castro, 2015)
              p Existen diferentes clases de factores que determinan la concesión de un crédito, se pueden mencionar:
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
            .col-lg-6(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema4/img5.png', alt='', style='width: 500px').m-auto
          .row.align-items-center.mb-5(data-aos="fade-down")
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/tema4/img2.svg', alt='', style='width: 160px').m-auto
            .col
              p.mb-0 Para analizar más el tema, lo invitamos a consultar el capítulo 3 del libro Crédito y cobranza, el cual se encuentra en el material complementario.

</template>

<script>
export default {
  name: 'Tema4',
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

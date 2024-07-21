<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 Desembolso
    p.mb-5 Un desembolso es hacer efectivo el dinero, esto ocurre cuando se solicita un préstamo, o se financia una inversión o negocio, el desembolso será el dinero entregado al prestatario o el dinero que una persona preste, invierta o salde.
    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .bloque-texto-d.color-secundario.px-4.py-2
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p #[b Es fundamental que las actividades desarrolladas en el otorgamiento de créditos sean precisas, para que estos se puedan recuperar, lo cual se logra mediante un análisis minucioso de los solicitantes de crédito para asegurar que sí tendrán los recursos necesarios para saldar sus deudas y que además estén dispuestos a pagar]
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .p.mb-0 (Morales y Castro, 2015)
      .col-lg-3
        figure
          img(src='@/assets/curso/tema13/img1.svg', style="width: 300px" alt='')
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-4.bg-c15
          .row.align-items-center
            .col-md-auto
              figure
                img(src='@/assets/curso/tema13/img2.svg', style="width: 100px" alt='')
            .col
              p.mb-0 Es por eso que en el sector financiero existen diferentes tipos de garantías, las cuales respaldan las deudas adquiridas por los clientes:
    .row.mb-5
      .col-12
        .p-5.bg-c29
          .row.justify-content-center
            .col-md-8.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c30.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema13/img2.png', style="width: 300px" alt='')
                .row.justify-content-center.mb-3
                  .col-auto
                    .px-4.py-3.bg-c5
                      p.text-white.mb-0 #[b Garantía personal]
                p.text-center.mb-0 Dependiendo de la política de crédito, suele ser el avalista o fiador quien será responsable del no pago de la deuda, sin embargo, podría darse como garantía personal, solamente el pagaré en blanco firmado por parte del deudor.
            .col-md-8.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c30.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema13/img3.png', style="width: 300px" alt='')
                .row.justify-content-center.mb-3
                  .col-auto
                    .px-4.py-3.bg-c5
                      p.text-white.mb-0 #[b Garantía hipotecaria]
                p.text-center.mb-0 Normalmente son bienes inmuebles (casas, apartamentos, bodegas, locales etc.), los cuales quedan a favor de la entidad, respaldando la deuda.
            .col-md-8.col-lg-4
              .p-4.bg-c30.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema13/img4.png', style="width: 300px" alt='')
                .row.justify-content-center.mb-3
                  .col-auto
                    .px-4.py-3.bg-c5
                      p.text-white.mb-0 #[b Garantía prendaría o pignoración]
                p.text-center.mb-0 Son bienes muebles como vehículo o maquinaria, que quedan a favor de la entidad financiera, garantizando el pago de la deuda.
    p.mb-0 El otorgamiento del crédito se convierte en el inicio de una relación gana - gana de la entidad financiera con el microempresario, y para profundizar en el tema, lo invitamos a consultar el capítulo 5 del libro Crédito y cobranza, el cual se encuentra en el material complementario.

</template>

<script>
export default {
  name: 'Tema13',
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

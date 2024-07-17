<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-md-auto
              figure
                img(src="@/assets/curso/intro/img1.svg", style="width: 100px" alt="").m-auto
            .col
              p.mb-0 Bienvenido al estudio del presente componente formativo. El éxito en el sector microfinanciero depende de la comprensión detallada del mercado objetivo y de la implementación de un sistema robusto de administración de riesgo crediticio (SARC). Identificar correctamente las necesidades de los clientes y evaluar factores clave para los microcréditos, son pasos esenciales. Métodos precisos de cálculo para créditos, junto con una sólida base en contabilidad, manejo de títulos valores, flujos de caja, y evaluación de la capacidad de pago y endeudamiento, forman el núcleo del manejo financiero. Los clientes microfinancieros presentan una variedad de tipos y características, y es crucial manejar adecuadamente los momentos de verdad para asegurar una relación duradera y beneficiosa.
          .row.mb-5
            .col-lg-8.mb-4.mb-lg-0
              .p-4.bg-c2
                p El manejo efectivo de bases de datos, incluida la minería de datos con respeto a la confidencialidad, es vital para la comprobación de la información de clientes y el análisis financiero. La capacidad de pago y el sobreendeudamiento son indicadores críticos a monitorear. Indicadores de gestión, como los financieros, de servicios, de recaudo y de evolución, proporcionan una visión clara del rendimiento. Parámetros específicos guían estos indicadores, y los informes microfinancieros son fundamentales para el comité de crédito durante la aprobación o negación de solicitudes. Finalmente, el proceso de desembolso cierra el ciclo, asegurando que los fondos lleguen a los beneficiarios de manera oportuna y eficiente.
                p.mb-0 Muchos éxitos en este proceso de aprendizaje.
            .col-lg-4
              figure
                img(src="@/assets/curso/intro/img2.svg", style="width: 400px" alt="").m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

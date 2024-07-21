<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Análisis financiero
    .row.bg-c25
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-7.order-2.order-lg-1
              p En un análisis financiero se ejecutan varias acciones: viabilidad, estabilidad y rentabilidad de un negocio, en el caso de las microfinanzas, es vital para observar la situación del negocio; este análisis permite comprender la información contable para diagnosticar la situación actual del negocio y proyectar su futuro.
              p.mb-0 Existen dos tipos de análisis financiero, de acuerdo con el tipo de información:
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema10/img1.png", style="width: 430px" alt="alt").m-auto
          .row.justify-content-center
            .col-md-8.col-lg-3.mb-4.mb-lg-0
              .p-4.bg-c15
                figure.mb-4
                  img(src="@/assets/curso/tema10/img1.svg", style="width: 100px" alt="alt").m-auto
                p.text-center #[b Análisis vertical]
                p.text-center.mb-0 Se utiliza cuando se trabajan los estados financieros de una empresa en un mismo año.
            .col-md-8.col-lg-3
              .p-4.bg-c15
                figure.mb-4
                  img(src="@/assets/curso/tema10/img2.svg", style="width: 100px" alt="alt").m-auto
                p.text-center #[b Análisis horizontal]
                p.text-center.mb-0 Se usa cuando se trabajan los estados financieros de varios años.
    Separador
    #t_10_1
    .titulo-segundo.color-primario
      h2 10.1 Sobreendeudamiento
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        p El sobreendeudamiento es la acumulación de deuda que no puede ser pagada con el nivel de ingresos actual y esperado.
        p Las personas ingresan al mercado de crédito con la intención de gastar más cuando tienen ingresos bajos y luego pagar la deuda al aumentar sus ingresos esperados.
        p.mb-0 Analicemos algunos puntos importantes:
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema10/img2.png", style="width: 430px" alt="alt").m-auto
    .row.align-items-center
      .col-lg-3.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema10/img3.png", style="width: 260px" alt="").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Causas de sobreendeudamiento")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Solicitar préstamos sin tener en cuenta que en el futuro tal vez no se cuenten con los mismos ingresos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 No calcular bien si el dinero alcanza para cumplir los pagos mensuales de un préstamo o de una tarjeta de crédito.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Prestar la tarjeta de crédito a familiares o amigos y tener que pagar sus deudas porque ellos no las pagan.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Ser garante de los préstamos de terceros que no pagan a tiempo.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 No tener ahorros para cubrir gastos inesperados o emergencias.
          .row(titulo="Señales de sobreendeudamiento")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Usar crédito para comprar comida y pagar servicios básicos, que son gastos que deben pagarse al contado, porque se consumen de inmediato.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Sacar un préstamo para pagar otro, incrementando así el nivel de deuda.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Usar ahorros para pagar préstamos, cuando el objetivo de los ahorros es cumplir metas o afrontar emergencias.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Dejar de pagar unas deudas para cumplir con otras, pagando un mes algo y al siguiente no.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Recibir recordatorios de pago de las instituciones financieras u otros acreedores, vía telefónica o por escrito.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Pagar solamente el pago mínimo de la tarjeta de crédito, cuando lo ideal es pagar el total del estado de cuenta cada mes.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Destinar gran parte de los ingresos al pago de deudas, es decir, que casi no quede dinero para los gastos básicos y fijos por tener que pagar los préstamos.
          .row(titulo="Cómo evitar el sobreendeudamiento")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Planificar el presupuesto.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Ahorrar.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Evitar la deuda mala (la que se usa para gastar).
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Conocer la capacidad de endeudamiento.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Solicitar el crédito que se necesite y que tenga un fin específico, en lo posible que sea productivo.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Informarse de todo lo que conlleva un crédito.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Comparar en varias entidades financieras y elegir la que más convenga en términos económicos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Pagar con puntualidad.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Llevar el control de los pagos.
          .row(titulo="Cómo salir del sobreendeudamiento")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 No endeudarse más, “tapar un hueco y destapar otro”.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Realizar una lista de todas las deudas y conseguir la posibilidad de unificarlas, en lo posible con compra de cartera, porque la tasa de interés es más baja.
    Separador
    #t_10_2
    .titulo-segundo.color-primario
      h2 10.2 Capacidad de pago
    .row.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        p En el estudio de un crédito es determinante para el otorgamiento o no del microcrédito o crédito y para eso es recomendable tener en cuenta la capacidad de pago, con esta se obtiene la situación económica del negocio y cómo esta capacidad de pago se refleja en los estados financieros y la liquidez precisa con que cuenta el negocio / propietario para atender las cuotas del crédito.
        p La capacidad se determinará mediante la formulación de los estados financieros de la microempresa (balance general el estado de pérdidas y ganancias), y el flujo de caja de la unidad socioeconómica.
        .row
          .col-12
            .p-4.bg-c15
              p.mb-0 El flujo mensual de efectivo de la unidad socioeconómica, establece la totalidad de los ingresos y los egresos de la unidad familiar, así como el flujo de caja del solicitante del crédito.
      .col-lg-6
        figure
          img(src="@/assets/curso/tema10/img4.png", style="width: 530px" alt="alt").m-auto
    p.mb-0 El tema de análisis financiero es importante en la preparación para un analista o un comercial, que haga uso de la información para la decisión de un crédito, es por eso que lo invitamos a consultar el capítulo 1 del libro Análisis financiero, el cual se encuentra en el material complementario.

</template>

<script>
export default {
  name: 'Tema10',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 Modelos de informes microfinancieros
    p.mb-5 Básicamente existen dos modelos de informes microfinancieros:
    .tarjeta.tarjeta--azul2.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b")
          .row.align-items-center.justify-content-center
            .col-lg-5
              p.text-white #[b Cualitativos]
              p.text-white Son aquellos que hacen referencias a las “cualidades”. Dicha información está relacionada con los adjetivos, por ejemplo, grande, espacioso, pequeño, responsable, paciente, flexible, costos, batato, etc.
              p.text-white #[b Características:]
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFFFFF")
                  |
                  p.text-white.mb-0 Se utiliza para comprender las opiniones y motivaciones de los consumidores.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFFFFF")
                  |
                  p.text-white.mb-0 Para la recopilación de datos se utilizan los métodos de grupo de enfoque y preguntas de texto abierta, con técnicas de grupos focales, entrevistas u observaciones.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFFFFF")
                  |
                  p.text-white.mb-0 El análisis e interpretación de datos puede llevar tiempo.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema12/img1.png", style="width: 500px" alt="").m-auto
          .row.align-items-center.justify-content-center
            .col-lg-5
              p.text-white #[b Cuantitativos]
              p.text-white Relaciona lo que tienen que ver con números, hace referencia básicamente a la cantidad, por ejemplo, valor, altura, tamaño, etc.
              p.text-white #[b Características:]
              ul.lista-ul.mb-0
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFFFFF")
                  |
                  p.text-white.mb-0 Los datos se pueden convertir en estadísticas útiles.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFFFFF")
                  |
                  p.text-white.mb-0 Los métodos para recopilar datos son más estructurados, incluyen encuestas online o de papel o móviles o cara a cara, incluso telefónicas.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #FFFFFF")
                  |
                  p.text-white.mb-0 Las preguntas son más cerradas y el tamaño de la muestra más grande.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema12/img2.png", style="width: 500px" alt="").m-auto
    p.mb-5 No es regla de oro enlistar los elementos de un informe, porque cada entidad tiene sus propios parámetros e instrumentos para evaluar y validar la información que en este reposa, sin embargo, dentro de los principales elementos del informe de crédito se deben considerar los siguientes:
    .row.bg-c27
      .col-12
        .p-5
          TabsB.color-acento-botones
            .p-4.p-lg-5(titulo="Información personal" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Información personal]
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Nombre completo.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Documento de identidad.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Dirección de ubicación (casa y/o negocio).
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Estado civil.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 En caso de ser casado(a) los datos completos del cónyuge.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Fecha de nacimiento.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Seguridad social.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Número de teléfono (fijo y/o celular).
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema12/img3.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Información financiera" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Información financiera]
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Cuentas bancarias (ahorro y/o corriente), CDT o encargos fiduciarios (montos y saldos).
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Créditos actuales y pasados (como titular, deudor solidario o codeudor).
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Total monto adeudado.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Fechas de inicio y cierre de las cuentas y créditos.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema12/img4.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Información comercial" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Información comercial]
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Referencias comerciales de proveedores y lista de clientes con datos como nombre y teléfonos.
                    li.d-flex
                      i.fas.fa-check-circle(style="color: #0F0721")
                      |
                      p.mb-0 Facturas de compra a proveedores.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema12/img5.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Balance general y Estado de ganancias y pérdidas" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Balance general y Estado de ganancias y pérdidas]
                  p.mb-0 Es importante tener este tipo de información, porque da una idea más clara de la situación financiera del cliente y/o negocio.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema12/img6.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Historial de crédito" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Historial de crédito]
                  p.mb-0 Reporte de las centrales de riesgo Datacrédito, CIFIN u otras, dependiendo de la política crediticia de la entidad.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema12/img7.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Garantía" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Garantía]
                  p.mb-0 Es importante para la entidad financiera conocer de qué manera se respaldará el crédito. Los tipos de garantía en las entidades financieras generalmente son personal (pagaré, fiador o algún elemento – electrodoméstico con que cuente el deudor), hipotecaria (bien inmueble como casa, apartamento, bodega, local etc.) o prendaria (vehículo o maquinaria).
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema12/img8.png", style="width: 350px" alt="").m-auto
    Separador
    #t_12_1
    .titulo-segundo.color-primario
      h2 12.1 Comité de crédito (aprobación o negación)
    p.mb-4 Grupo de colaboradores que una entidad financiera y/o microfinanciera destina para gestionar y evaluar cada solicitud de crédito para su aprobación o negación, dependiendo de la política de crédito; en caso de aprobación, inclusive este comité podría tener funciones de hacer seguimiento y recuperación de cartera.
    .row.align-items-center
      .col-lg-7.order-2.order-lg-1
        .row.mb-3
          .col-12
            .p-4.bg-c15
              p.mb-0 En caso de aprobación de las solicitudes, se seguirán los parámetros establecidos, si el asesor del microcrédito se encuentra dentro del comité, defenderá su solicitud con argumentos valederos para el otorgamiento del microcrédito y comunicará al cliente para posterior desembolso con su respectiva legalización.
        .row
          .col-12
            .p-4.bg-c20
              p.text-white.mb-0 En caso de negación de crédito por una o varias razones que establezca el comité, el asesor de microfinanzas tendrá dentro de sus funciones, el aviso al cliente de su negación, podrá o no dar razón de negación, porque dentro del sistema financiero se encuentra la reserva bancaria, entendida como el derecho que tiene la entidad financiera en dar información de la razón por la cual fue negada la solicitud.
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema12/img9.png", style="width: 480px" alt="").m-auto

</template>

<script>
export default {
  name: 'Tema12',
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

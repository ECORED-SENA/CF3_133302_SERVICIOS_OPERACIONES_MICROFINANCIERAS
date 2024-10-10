<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Técnicas de comprobación de la información de clientes
    .row.bg-c25
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              p Son todos aquellos procedimientos y recursos que el asesor microfinanciero utiliza para verificar la información que suministra el cliente del negocio, al momento de solicitar un microcrédito.
              p Dentro de estas técnicas podemos tener:
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Aplicativos de entidad financiera con Registraduría, para verificar la autenticidad del documento de identidad.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Consulta a las centrales de riesgo para verificar el comportamiento financiero y moras mayores a 30 días.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Bases de datos internas de la entidad financiera, para comprobar comportamiento financiero menor a 30 días dentro de la misma.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Llamadas telefónicas para constatar información que el cliente registra en los formularios, tales como referencias familiares.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Visitas al negocio o a la casa del cliente, como comprobación de dirección e información.
              p.mb-0 A continuación, se presentan los diferentes tipos de referenciación:
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema9/img2.png", style="width: 430px" alt="alt").m-auto
    .row.align-items-center
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema9/img3.png", style="width: 260px" alt="").m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Referenciación comercial")
            .col-12
              p.mb-0 Para la entidad financiera o microfinanciera, es valioso contar con las referencias comerciales tales como los proveedores del cliente, para conocer sus hábitos de compra en valor y en tiempo, también las referencias de algunos de sus clientes y finalmente qué vínculos tiene o ha tenido con el sector financiero, sus productos, promedios y valores adeudados hasta el momento.
          .row(titulo="Referenciación familiar")
            .col-12
              p.mb-0 Contar con las referencias de los familiares es esencial para la entidad financiera en el otorgamiento del crédito a un cliente, debido a que al interior de la familia, las personas son conocidas a profundidad, por ejemplo, en sus hábitos de pago, en la puntualidad con sus compromisos económicos y quizá puedan entregar información de su situación económica y financiera, si son muy allegados.
          .row(titulo="Referenciación zonal")
            .col-12
              p Consiste en hacer entrevistas en lugares cercanos al negocio, como establecimientos y vecinos, teniendo objetividad en lo que se pregunta, evitando malinterpretar o que coja otro rumbo la entrevista.
              p.mb-0 Es de suma importancia contar con los comentarios de las personas que se encuentran en el entorno del cliente que se encuentra realizando una solicitud de crédito, en aspectos que no pueden ser evidentes al momento de la visita, tales como la antigüedad del negocio, si los vecinos observan que ingresan clientes constantemente, cómo ven el negocio físicamente, qué les gustaría cambiar para hacerlo más atractivo, el comportamiento y atención de servicio que tiene el dueño del negocio, los horarios de apertura y cierre, la limpieza, el orden, entre otros.
    .row.justify-content-center.mt-5
      .col-lg-10
        .p-4.bg-c15(data-aos="fade-right")
          .row.align-items-center
            .col.mb-4.mb-md-0
              p.mb-0 La información siempre será la base en cualquier actividad económica, es por ello que debe tener un tratamiento especial y unas técnicas para su verificación. 
            .col-md-auto
              figure
                img(src="@/assets/curso/tema9/img1.svg", style="width: 100px" alt="alt").m-auto

</template>

<script>
export default {
  name: 'Tema9',
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

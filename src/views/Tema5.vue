<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Métodos de cálculo para créditos
    .row.bg-c14
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c15
                p.mb-0 Los métodos de cálculo se realizan a través del análisis cuantitativo y el cruce de información de ventas que se realiza a través de los estados y documentos solicitados para el crédito. Para ampliar la información, lo invitamos a visitar el siguiente video.
            .col-lg-5(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema5/img1.png", style="width: 400px" alt="").m-auto
          figure.mb-5(data-aos="fade-right")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          p.mb-5(data-aos="fade-right") Con esta información se hacen diferentes cálculos y se toman las ventas que arrojen un menor valor. El siguiente video nos presenta un ejemplo.
    .row.bg-c16
      .col-12
        .px-5.pt-5
          figure.mb-5(data-aos="fade-right")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          .tarjeta.color-secundario.p-3.mb-5(data-aos="fade-left")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/tema5/img1.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.mb-0 En el PDF #[b.txt-c1 Ejemplo] encontrará el texto correspondiente al ejemplo del video, para que pueda repasar y estudiar la información.
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
                      span(style="color: #000 !important") Descargar
                      i.fas.fa-file-download(style="color: #000 !important")
          p.mb-5(data-aos="fade-right") Para continuar con el estudio del crédito, conozcamos sobre el flujo de efectivo, información que se presenta en el siguiente video.
          figure.mb-5(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p(data-aos="fade-right") De acuerdo con el ejemplo del video, analicemos:
    p(data-aos="fade-right") #[b.txt-c2 Costo de ventas]
    p(data-aos="fade-right") Los artículos que más venden tienen los siguientes precios:
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        ul.lista-ul
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Artículo 1: lo vende a $1.000 y compra 30 unidades a $24.000.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Artículo 2: lo vende a $1.400 y lo compra a $1.000.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Artículo 3: lo vende a $1.800 y lo compra a $1.510.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Artículo 4: lo vende a $1.000 y lo compra a $830.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Artículo 5: lo vende a $2.500 y lo compra a $2.100.
        .row
          .col-12
            .p-4.bg-c15
              p Para la tienda, referente al comercio, compra $140.000 diarios y $640.000 semanales.
              p.mb-0 Para las empanadas y los jugos, compra día por medio $100.000.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/img2.png", style="width: 500px" alt="").m-auto
    p(data-aos="fade-right") #[b.txt-c2 Gastos de personal]
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p No tiene trabajadores, aunque en las mañanas cuando hay más clientela y llegan los proveedores sus dos hijos le ayudan al igual que su sobrina. La ayuda consiste en estar pendientes del negocio y hacer las empanadas, pero no paga sueldos, tanto los hijos como la sobrina viven con él y paga todos los gastos de ellos.
        p En gastos generales él muestra los recibos, allí se logra evidenciar que paga bien y tiene los siguientes gastos:
        ul.lista-ul
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Artículo 1: lo vende a $1.000 y compra 30 unidades a $24.000.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Artículo 2: lo vende a $1.400 y lo compra a $1.000.
        p No paga administración en el negocio, ni donde vive.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/img3.png", style="width: 500px" alt="").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c15(data-aos="fade-down")
          p.mb-0 En ingresos familiares el cliente dice que su esposa gana $700.000 mensuales, pero no quiere mostrar el desprendible de pago de ella porque expresa que él es quien está sacando el crédito y es un préstamo pequeño.
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema5/img4.png", style="width: 500px" alt="").m-auto
      .col-lg-7(data-aos="fade-left")
        p En gastos familiares paga lo siguiente:
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Arriendo: $500.000.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Servicios (agua, luz, gas y televisión): $200.000.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Educación: $250.000 por los dos hijos y la sobrina, están en bachillerato en colegio público.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Alimentación: $900.000.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Transporte: no gasta en transporte y el colegio está cerca a la casa y al negocio; su esposa paga su propio transporte de su sueldo.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            | Salud: su esposa tiene afiliado al núcleo familiar con su salario, ella paga $100.000.
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4.bg-c15(data-aos="fade-down")
          p.mb-0 #[b Nota:] cuando el dueño de negocio paga salarios estos van en gastos de personal, pero cuando se paga mano de obra por cada producto que la persona hace, entonces esa mano de obra va como costo dentro del producto, para este caso no se coloca ningún valor porque el propietario no paga ni salarios, ni mano de obra por cada empanada o jugo que se hace.
    p(data-aos="fade-right") #[b.txt-c2 Cruces de información (compras)]
    p.mb-5(data-aos="fade-right") Cuando se averigua el costo de las compras se pueden hacer preguntas al igual que en las ventas tales como:
    .row.justify-content-center.mb-2
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c6
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema5/img2.svg", style="width: 70px" alt="").m-auto
            .col
              p.mb-0 #[b ¿Cuántas son sus compras diarias?]
              p.mb-0 #[b ¿Compra semanal o mensualmente?]
              p.mb-0 #[b ¿Cuáles son los productos que más vende?]
      .col-lg-4(data-aos="fade-left")
        .p-4.bg-c10
          p Con esta información se saca el porcentaje del costo de venta, así:
          p.mb-0 Empresa comercial: el microempresario nombra los 5 artículos que más vende.
    .row.bg-c17.mb-5
      .col-12
        .px-5.pt-5
          .row.justify-content-center
            .col-lg-8(data-aos="fade-right")
              .titulo-sexto.color-acento-contenido.mb-4
                p.mb-0 #[b Tabla 1.] Artículos más vendidos
              .tabla-a.color-secundario.mb-5
                table
                  thead
                    tr
                      th Artículo
                      th Precio (a cómo se vende)
                      th Costo (a cómo se compra)
                      th % Costo
                  tbody.bg-white
                    tr
                      td.text-center Artículo 1
                      td.text-center $10.000
                      td.text-center $7.000
                      td.text-center 70 %
                    tr
                      td.text-center Artículo 2
                      td.text-center $25.000
                      td.text-center $17.000
                      td.text-center 70 %
                    tr
                      td.text-center Artículo 3
                      td.text-center $5.000
                      td.text-center $3.000
                      td.text-center 60 %
                    tr
                      td.text-center Artículo 4
                      td.text-center $8.000
                      td.text-center $5.000
                      td.text-center 63 %
                    tr
                      td.text-center Artículo 5
                      td.text-center $15.000
                      td.text-center $9.000
                      td.text-center 60 %
              .row
                .col-12
                  .p-4.bg-c6
                    p Fórmula % Costo Artículo 1: Costo ÷ Precio = $7.000 ÷ $10.000 = 0,7; 0,7x 100 = 70 %
                    p.mb-0 Fórmula % Costo Promedio: (% Costo Artículo 1 + % Costo Artículo 2 + % Costo Artículo 3 + % Costo Artículo 4 + % Costo Artículo 5) ÷ 5 artículos = (70 % + 70 % + 60 % + 63 % + 60 %) ÷ 5 = 0,65; 0,65 x 100 = 65 %
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Se deben hacer cruces de información para saber si el valor de las compras es similar a ese costo de venta.
        p.mb-5 Una persona que casi no compre, quiere decir que tampoco vende, aunque existen algunos negocios que no requieren mayores compras, como la parte de ensamble en las confecciones, donde la persona que contrata dichos servicios,es la que coloca las telas y demás.
        p #[b.txt-c2 Flujo de unidad familiar]
        p.mb-0 En el microcrédito se debe tener en cuenta la unidad familiar, porque los microempresarios retiran dinero de su negocio para suplir sus propias necesidades y las de su familia. De acuerdo a cómo vive y cómo tiene el negocio, así también serán sus ingresos y egresos, es importante entender cómo se manejan los ingresos familiares y mantener ese dato presente.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5/img5.png", style="width: 500px" alt="").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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

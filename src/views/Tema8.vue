<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Bases de datos
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .row
          .col-12
            .p-3.bg-c6
              p Es la agrupación de toda información que tiene un mismo entorno y puede estar por categorías, esta se ordena de manera sistemática, para poder ser consultada en un momento dado, sirve como análisis, como insumo para la realización de algún proyecto, inclusive con fines comerciales, tiene diversas formas de usos.
              p.mb-0 Las bases de datos se dividen en los siguientes tipos:
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema8/img1.png", style="width: 380px" alt="").m-auto
    .row.mb-0.mb-lg-5(data-aos="fade-down")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema8/img1.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.text-center #[b Jerárquica]
              p.text-center.mb-0 Organiza los datos utilizando estructura en árbol, ofrece mayor rapidez en la consulta de datos, pero su desventaja es que se debe realizar un diseño muy robusto.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema8/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.text-center #[b En red]
              p.text-center.mb-0 Utiliza una estructura de red, tiene acceso a la información de manera más sensible, pero su acceso es mucho más lento.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema8/img3.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.text-center #[b Relacional]
              p.text-center.mb-0 Conjunto de tablas que se relacionan, pero presentan deficiencia con los datos gráficos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema8/img4.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              p.text-center #[b Orientada a objetos]
              p.text-center.mb-0 Objeto se entiende por cualquier cosa del mundo real, ofrece un fácil manejo de todo tipo de dato complejo, manejado de forma rápida y ágil.
    p(data-aos="fade-right") En general, las bases de datos son archivadas en las memorias secundarias (discos duros, discos ópticos o memorias flash, servidores, datos en la nube).
    p.mb-5(data-aos="fade-right") Algunas formas de organización primaria, son:
    .row.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema8/img2.png", style="width: 260px" alt="").m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Archivos no ordenados")
            .col-12
              p.mb-0 Esta forma ubica los registros en el disco sin algún orden en particular, incluye nuevos registros al final del archivo.
          .row(titulo="Archivos secuenciales")
            .col-12
              p.mb-0 Lleva un orden de los registros con respecto al valor de alguna clave de ordenación.
          .row(titulo="Archivo de direccionamiento calculado")
            .col-12
              p.mb-0 Ocupa una función de direccionamiento que se aplica dentro de un campo determinado, para la ubicación de los registros en disco.
          .row(titulo="Árboles B")
            .col-12
              p.mb-0 Tienen estructura de árbol para ubicar los registros.
    .row.align-items-center
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p El análisis de datos se usa para determinar si el sistema existente protege los datos efectivamente, opera eficientemente y cumple con las metas de la organización.
        p.mb-0 Las entidades financieras utilizan las bases de datos, por ejemplo, para analizar los retiros y los patrones de gasto, para prevenir fraude o robo en la entidad.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema8/img3.png", style="width: 300px" alt="").m-auto
    Separador
    #t_8_1
    .titulo-segundo.color-primario.mb-0
      h2 8.1 Minería de datos y confidencialidad
    .row.bg-c23.pt-5
      .col-12
        .px-5
          p(data-aos="fade-right") La minería de datos (#[i data mining]), es un proceso para detectar información de conjuntos grandes de datos, su objetivo es encontrar patrones, tendencias o reglas que expliquen el comportamiento de los datos en un contexto específico.
          p.mb-4(data-aos="fade-right") Algunos de los beneficios que brinda la minería de datos, son:
          .row.align-items-center.mb-4
            .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Se puede aplicar a un montón de escenarios empresariales diferentes.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Contribuye a gestionar y organizar la información de la empresa de forma más eficiente.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Colabora en el ahorro de costos y tiempo en los procesos de la organización.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Al mostrar información clave, contribuye en la toma de decisiones estratégicas.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Brinda la posibilidad de desarrollar estrategias, para encontrar y atraer nuevos clientes.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Posibilita mejorar la atención al cliente de la empresa, a partir de la información obtenida.
              p Un proceso común de minería de datos suele tener cuatro partes principales: determinación de los objetivos, preprocesamiento de datos, determinación del modelo y análisis de los resultados.
              .row
                .col-12
                  .p-4.bg-c24
                    p.text-white.mb-0 La minería de datos al tener mucha información de las personas, son de gran valor, la información se la entregan por requisito para algún trámite o transacción, es por esto que la minería de datos tiene un código de ética para salvaguardar dicha información de manos inescrupulosas o con fines comerciales que beneficien a terceros.
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema8/img5.png", style="width: 430px" alt="").m-auto
          .row.align-items-center.mb-5
            .col-lg-10.order-2.order-lg-1(data-aos="fade-right")
              p Es así como muchas empresas aprovechan la información de la minería de datos y asumen que el individuo la entrega, por ejemplo, si una persona realiza transacciones con su tarjeta de crédito o con algún otro producto y esta información es muy útil para las empresas, detectando hábitos de consumo y de pago, estos datos los pueden utilizar con fines comerciales.
            .col-lg-2.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema8/img5.svg", style="width: 140px" alt="").m-auto

</template>

<script>
export default {
  name: 'Tema8',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Indicadores de gestión
    .row.bg-c25
      .col-12
        .px-5
          .row.align-items-center
            .col-lg-7.order-2.order-lg-1
              p.mb-0 Son datos que muestran las consecuencias de las decisiones que tomó la organización en un determinado tiempo, en algún proceso.
            .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema11/img2.png", style="width: 430px" alt="alt").m-auto
          Separador
          #t_11_1
          .titulo-segundo.color-primario
            h2 11.1 Tipos de indicadores
          .row.justify-content-center.mb-5
            .col-lg-8
              .p-4.bg-c15
                .row.align-items-center
                  .col.order-2.order-lg-1
                    p.mb-0 Estos indicadores se dividen en varios tipos y todos son importantes a la hora de la toma de acción crediticia.
                  .col-md-auto.mb-4.mb-md-0.order-1.order-lg-2
                    figure
                      img(src="@/assets/curso/tema11/img1.svg", style="width: 170px" alt="").m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema11/img2.svg', style="width:80px" alt='').m-auto
          .col.fig-p1(style="z-index: 1")
            .px-5.py-2.bg-c26
              h3.mb-0 #[span.txt-c1 Indicadores] #[span.text-white financieros]
    .row.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        .p-4.bg-c20
          p.text-white Muestran la relación que existe entre las diferentes cuentas de los estados financieros. Sirven para analizar su liquidez, solvencia, rentabilidad, y eficiencia operativa de un negocio.
          p.text-white.mb-0 Para el análisis de un crédito se dividen en 5 grupos:
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema11/img3.png", style="width: 430px" alt="alt").m-auto
    .row.bg-c27.mb-5
      .col-12
        .p-5
          TabsB.color-acento-botones
            .p-4.p-lg-5(titulo="Liquidez" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Liquidez]
                  p.mb-0 Capacidad de pago de una empresa para cubrir las obligaciones.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema11/img4.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Actividad" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Actividad]
                  p.mb-0 Se encuentran las características de la empresa, ciclo operacional, su periodo de pago, los plazos que ofrece, las costumbres de los clientes, entre otros.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema11/img5.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Endeudamiento" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Endeudamiento]
                  p.mb-0 Muestra el grado en que se utilizan los recursos de terceros, obtenidos a través de deuda, para financiar las actividades de la empresa y sostener o aumentar su capacidad operativa.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema11/img6.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Rentabilidad" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Rentabilidad]
                  p.mb-0 Son los beneficios obtenidos durante el ejercicio con la inversión realizada en activos operativos (utilidad contra inversiones).
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema11/img7.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Análisis de capacidad de pago" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Análisis de capacidad de pago]
                  p.mb-0 Relacionada con la generación operacional y, por supuesto, con el monto de la deuda y su costo.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema11/img8.png", style="width: 350px" alt="").m-auto
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema11/img2.svg', style="width:80px" alt='').m-auto
          .col.fig-p1(style="z-index: 1")
            .px-5.py-2.bg-c26
              h3.mb-0 #[span.txt-c1 Indicadores] #[span.text-white de servicios]
    .row.mb-4
      .col-12
        .p-4.bg-c15
          p.mb-0 El sector del microcrédito es responsable social por la información y el desarrollo de un país y en pro de esta responsabilidad, se tienen los siguientes indicadores de servicios:
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema11/img10.png", style="width: 480px" alt="alt").m-auto
      .col-lg-7
        ul.lista-ul.mb-0
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            |
            p.mb-0 Cobertura de la pobreza y la vulnerabilidad (pobreza, mujeres y área rural).
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            |
            p.mb-0 Satisfacción del cliente (deserción de clientes).
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            |
            p.mb-0 Creación de empleo (consolidación y creación).
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            |
            p.mb-0 Apoyo a capital social.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            |
            p.mb-0 Creación de capital y activos.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            |
            p.mb-0 Asignación de superávit como responsabilidad social.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            |
            p.mb-0 Diversificación de servicios (ahorro, seguros, etc.).
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            |
            p.mb-0 Acceso a servicios de desarrollo humano y económico (educación, salud, desarrollo micro empresarial, desarrollo económico).
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema11/img2.svg', style="width:80px" alt='').m-auto
          .col.fig-p1(style="z-index: 1")
            .px-5.py-2.bg-c26
              h3.mb-0 #[span.txt-c1 Indicadores] #[span.text-white de recaudo]
    .row.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema11/img11.png", style="width: 260px" alt="").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Riesgo normal")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 El cliente cuenta con una capacidad adecuada en términos de monto y origen de ingresos.
              p.mb-0 #[b Mora:] hasta 1 mes.
          .row(titulo="Riesgo aceptable")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Existe un riesgo potencial que puede afectar la capacidad de pago del deudor.
              p.mb-0 #[b Mora:] hasta 1 y 2 meses.
          .row(titulo="Crédito deficiente con riesgo aceptable")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Insuficiencia en la capacidad de pago del deudor y compromete el normal recaudo de la obligación.
              p.mb-0 #[b Mora:] hasta 2 y 3 meses.
          .row(titulo="Crédito de difícil cobro con riesgo significativo")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Su probabilidad de recaudo es altamente dudosa.
              p.mb-0 #[b Mora:] hasta 3 y 4 meses.
          .row(titulo="Riesgo de incobrabilidad")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Se estima incobrable.
              p.mb-0 #[b Mora:] mayor 4 meses.
    .row.mb-4(data-aos="fade-down")
      .col-auto
        .row.align-items-center
          .col-auto(style="z-index: 2")
            figure
              img(src='@/assets/curso/tema11/img2.svg', style="width:80px" alt='').m-auto
          .col.fig-p1(style="z-index: 1")
            .px-5.py-2.bg-c26
              h3.mb-0 #[span.txt-c1 Indicadores] #[span.text-white de evolución]
    .row.bg-c28
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema11/img13.png", style="width: 430px" alt="alt").m-auto
            .col-lg-7
              p Estos indicadores se pueden dividir en dos grupos:
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span a
                  |
                  p.mb-0 Perfil del cliente, el cual hace referencia a la información sociodemográfica del cliente:
              ul.lista-ul.ms-3
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Edad.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Monto desembolsado.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Antigüedad del crédito en meses.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Nivel de ingresos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Total de activos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Garantía.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Sector (urbano o rural).
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Sector agropecuario.
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span b
                  |
                  p.mb-0 Comportamiento histórico:
              ul.lista-ul.ms-3
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Porcentaje de cuotas pagadas.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Mora fecha evaluación.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Máxima mora en los 6 últimos meses.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Veces en mora (número de veces que se encontró en mora mayor a 30 días durante los 6 últimos meses).
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 Pagos (número de pagos realizados en los 6 últimos meses).
    Separador
    #t_11_2
    .titulo-segundo.color-primario
      h2 11.2 Parámetros
    p.mb-5 Son todos aquellos datos que determinan la situación de la empresa en términos contables:
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
      .row.justify-content-center(titulo="Capital de trabajo")
        .col-lg-10
          p El capital de trabajo muestra si la empresa tiene liquidez después de haber pagado sus pasivos a corto plazo.
          p Capital de trabajo = Activos corrientes - Pasivos corrientes
          p Los activos corrientes son la caja, bancos, cuentas por cobrar e inventarios y los pasivos corrientes son las deudas a corto plazo, es decir, los pasivos a corto plazo. 
          p #[b Ejemplo]
          p.mb-0 Activos corrientes: $3.000.000
          p.mb-0 Pasivos corrientes: $1.000.000
          p Capital de trabajo = $3.000.000 - $1.000.000 = $2.000.000
          p De acuerdo con el ejemplo, se puede observar que la empresa cuenta con suficiente liquidez, después de haber pagado sus pasivos a corto plazo.
      .row.justify-content-center(titulo="Razón corriente")
        .col-lg-10
          p Su interpretación indica cuánto tiene por cada peso que debe.
          p Razón corriente = Activos corrientes / Pasivos corrientes
          p #[b Ejemplo]
          p.mb-0 Activos corrientes: $3.000.000
          p.mb-0 Pasivos corrientes: $1.000.000
          p Razón corriente = $3.000.000 / $1.000.000 = $3
          p Indica que por cada peso que debe, cuenta con $3 para respaldar las deudas a corto plazo.
      .row.justify-content-center(titulo="Rotación de capital de trabajo")
        .col-lg-10
          p Rotación de capital de trabajo = Total de ventas / Capital de trabajo
          p #[b Ejemplo]
          p.mb-0 Ventas de contado y a crédito: $1.800.000
          p.mb-0 Capital de trabajo: $1.400.000
          p Rotación de capital de trabajo = $1.800.000 / $1.400.000 = $1.28
          p Indica que la empresa logra producir $1.28 pesos de ventas, por cada peso que mantiene en el capital de trabajo.
      .row.justify-content-center(titulo="Rentabilidad")
        .col-lg-10
          p Rentabilidad = Utilidad líquida / Total de activos
          p #[b Ejemplo]
          p.mb-0 Utilidad líquida: $500.000
          p.mb-0 Total activos: $4.000.000
          p Rentabilidad = $500.000 / $4.000.000 = 0,125; 0,125 x 100 = 12.5 %
          p Es decir, que los activos de la empresa generaron una utilidad del 12.5 % en el año.
      .row.justify-content-center(titulo="Margen bruto")
        .col-lg-10
          p Margen Bruto = 1 – (Costo de Ventas / Ventas)
          p #[b Ejemplo]
          p.mb-0 Ventas de contado y a crédito: $2.000.000
          p.mb-0 Costo de ventas: $1.200.000
          p Margen Bruto = 1 - ($1.200.000 / $2.000.000) = 0,6 x 100 = 60%
          p Del total de las ventas ,se generó una utilidad bruta del 60%.
      .row.justify-content-center(titulo="Endeudamiento futuro")
        .col-lg-10
          p Endeudamiento futuro = (Deudas + Préstamos) / Total de Activos.
      .row.justify-content-center(titulo="Pago vs. Ingreso")
        .col-lg-10
          p Cuota: $200.000
          p Ventas: $1.500.000
          p Pago vs. Ingreso = $200.000 / ($1.500.000 / 30 días) = 4
          p Esto quiere decir que en cuatro días, el cliente con lo que recibe de sus ventas, podría responder por la cuota, en esta parte no están incluidos ni los costos de ventas ni los gastos de otro tipo.

</template>

<script>
export default {
  name: 'Tema11',
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

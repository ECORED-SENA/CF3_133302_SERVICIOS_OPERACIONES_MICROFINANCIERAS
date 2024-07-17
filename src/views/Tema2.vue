<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistema de administración de riesgo crediticio SARC
    .row.bg-c7.mb-5
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1
              p SARC es el sistema administrativo de riesgo crediticio y tiene políticas y procedimientos específicos, los cuales definen los criterios y la forma mediante la cual la entidad evalúa, asume, califica, controla y cubre el riesgo crediticio.
              p.mb-0 SARC es el acrónimo de Sistema de Riesgo Crediticio y es tan importante que se basa en unos principios fundamentales que se evidencian a continuación:
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/img2.png", style="width: 400px" alt="").m-auto
          .tarjeta.tarjeta--azul
            .p-4.p-md-5
              SlyderA(tipo="b")
                .row.align-items-center.justify-content-center
                  .col-lg-5
                    p.text-white #[b Límites de exposición crediticia y de pérdida tolerada]
                    p.text-white.mb-0 Las políticas incluidas en el SARC incluirán puntos generales que pueden evidenciar la entidad, tanto de los niveles y límites de exposición (iniciales y potenciales), como el de los créditos totales (tanto individuales, como los que se encuentren dentro del portafolio).
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img3.png", style="width: 500px" alt="").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5
                    p.text-white #[b Otorgamiento de crédito]
                    p.text-white.mb-0 Las políticas contendrán las características básicas de las personas aptas para el crédito de la entidad y los niveles de tolerancia frente al riesgo, discriminar entre sus potenciales clientes para determinar si son sujetos de crédito y definir los niveles de adjudicación para cada uno de ellos.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img4.png", style="width: 500px" alt="").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5
                    p.text-white #[b Seguimiento y control]
                    p.text-white.mb-0 Las entidades deben tener un sistema de seguimiento y control del riesgo crediticio de los portafolios de la entidad, que implica un proceso continuo de clasificación y recalificación de las operaciones crediticias.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img5.png", style="width: 500px" alt="").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5
                    p.text-white #[b Capital económico]
                    p.text-white.mb-0 Es la estimación del nivel de patrimonio necesario para absorber las pérdidas no esperadas de la entidad.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img6.png", style="width: 500px" alt="").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5
                    p.text-white #[b Políticas de las bases de datos que soportan el SARC]
                    p.text-white.mb-0 Las políticas y las bases de datos se emplearán en la construcción de los modelos internos para la medición del riesgo de crédito de los diversos portafolios, las demás bases de datos que empleen las entidades en el proceso de administración del riesgo crediticio, como son otorgamiento, seguimiento, cobranza, etc., deben tener una longitud mínima de siete (7) años. (Superintendencia Bancaria de Colombia, 2006)
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img7.png", style="width: 500px" alt="").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5
                    p.text-white #[b Garantías]
                    p.text-white.mb-0 Según el Banco de Occidente (2017), “las políticas deben definir criterios para la exigencia y aceptación de garantías para cada tipo de crédito”, es decir, que es la forma correcta para evitar que el contrato de prestación de los servicios financieros se incumpla por alguna de las partes de manera irregular, y en caso que así sea, se debe hacer la exigencia de estas garantías.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img8.png", style="width: 500px" alt="").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5
                    p.text-white #[b Constitución de provisiones]
                    p.text-white.mb-0 En las políticas se tendrán en cuenta los sistemas de cubrimiento del riesgo mediante provisiones generales e individuales, que permitan absorber las pérdidas esperadas que se despliegan de la exposición crediticia de la entidad y se estiman a través de las metodologías y los análisis desarrollados en el SARC.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img9.png", style="width: 500px" alt="").m-auto
                .row.align-items-center.justify-content-center
                  .col-lg-5
                    p.text-white #[b Recuperación de cartera]
                    p.text-white.mb-0 Las entidades dentro de su políticas y procedimientos, deben adelantar la toma oportuna de medidas para enfrentar los incumplimientos, con el objeto de minimizar las pérdidas, con base en la historia de recuperaciones y las variables críticas que determinan la minimización de las pérdidas.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img10.png", style="width: 500px" alt="").m-auto
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        p En el Comité de Basilea, se introdujeron incentivos para que las entidades desarrollen sus propios sistemas de gestión de riesgo. Para conocer a profundidad acerca del tema, lo invitamos a consultar #[b El riesgo de crédito en perspectiva], el cual se encuentra en el material complementario.
        p.mb-0 El SARC debe contar al menos con los siguientes componentes básicos:
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img11.png", style="width: 400px" alt="").m-auto
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img12.png", style="width: 300px" alt="").m-auto
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Políticas de administración del Riesgo Crediticio (RC)")
            .col-12
              p.mb-0 Define con claridad y precisión los criterios bajo los cuales la organización debe evaluar, calificar, asumir, controlar y cubrir el RC.
          .row(titulo="Procesos de administración del RC")
            .col-12
              p.mb-0 El SARC debe contar con procesos para la identificación, medición y control del RC. En ellos se deben definir en forma clara y expresa las responsabilidades de cada uno de los funcionarios y organismos internos involucrados en dicha administración, así como los sistemas de seguimiento de esta, contemplando la adopción de medidas frente a su incumplimiento.
          .row(titulo="Modelos internos o de referencia")
            .col-12
              p Modelos internos o de referencia para la estimación o cuantificación de pérdidas esperadas.
              p.mb-0 Cuando se tienen los sistemas de medición como las pérdidas, dentro de su SARC, las entidades diseñan y adoptan respecto de la cartera comercial, de consumo, de vivienda y de microcrédito, ya sea para uno, algunos o la totalidad de sus portafolios o para alguno o la totalidad de los componentes de la medición de la pérdida esperada, sus propios modelos internos de estimación, o aplicar, para los mismos efectos, los modelos de referencia diseñados por la SFC para diversos portafolios.
          .row(titulo="Sistema de provisiones para cubrir el RC")
            .col-12
              p.mb-0 Estas deben calcularse en función de las pérdidas esperadas que arroje la aplicación del modelo interno.
          .row(titulo="Procesos de control interno")
            .col-12
              p.mb-0 El diseño e implementación de un esquema para la administración del RC, debe contar con procesos de control interno, mediante los cuales se verifique la implementación de las metodologías, procedimientos y, en general, el cumplimiento de todas las reglas de su funcionamiento, incluyendo especialmente el oportuno flujo de información a la junta directiva, consejo de administración y al nivel administrativo de la entidad.
    p.mb-5 Es así como en las diferentes etapas de los procesos, se debe generar la información necesaria para evaluar los respectivos riesgos, la cual ayuda en la toma de decisiones y contiene las siguientes etapas relacionadas con la operación de crédito:
    .row.justify-content-center
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c8
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/tema2/img2.svg' alt='AvatarTop')
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-c5
                p.text-white.mb-0 #[b Etapa de otorgamiento]
          p.text-center Se basa en el conocimiento de la persona susceptible de crédito o contraparte, de su capacidad de pago y de las características del contrato a celebrar entre las partes, que incluyen entre otros, las condiciones del préstamo, las garantías, las fuentes de pago y las condiciones macroeconómicas a las que pueda estar expuesto.
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c8
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/tema2/img3.svg' alt='AvatarTop')
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-c5
                p.text-white.mb-0 #[b Etapa de seguimiento y control]
          p.text-center Supone un continuo monitoreo y calificación de las operaciones crediticias, acorde con el proceso de otorgamiento.
          p.text-center.mb-0 En el caso de microcréditos, el continuo monitoreo y calificación de las operaciones crediticias, se debe realizar considerando como mínimo los aspectos evaluados en el proceso de otorgamiento, perfil del deudor, plazo de la operación y frecuencia de los pagos.
      .col-md-8.col-lg-4
        .p-4.bg-c8
          .row.justify-content-center.mb-3
            .col-5
              img(src='@/assets/curso/tema2/img4.svg' alt='AvatarTop')
          .row.justify-content-center.mb-3
            .col-auto
              .p-2.bg-c5
                p.text-white.mb-0 #[b Reestructuración de créditos]
          p.text-center Es toda obligación que modifique las condiciones originalmente pactadas, con el fin de permitirle al deudor la atención adecuada de su obligación ante el real deterioro de su capacidad de pago.

</template>

<script>
export default {
  name: 'Tema2',
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

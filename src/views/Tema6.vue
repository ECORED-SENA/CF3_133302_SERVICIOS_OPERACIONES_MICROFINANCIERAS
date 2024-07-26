<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Contabilidad básica
    .row.bg-c18.mb-5
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .row
                .col-12
                  .p-3.bg-c10
                    .row
                      .col-md-auto.mb-4.mb-md-0
                        figure
                          img(src="@/assets/curso/tema6/img1.svg", alt="").m-auto
                      .col
                        p Es la disciplina que se encarga de sistematizar, analizar, interpretar, y presentar mediante los estados financieros, la información financiera de una empresa.
                        p.mb-0 Ahora, los registros contables son todos aquellos elementos físicos en los cuales reposan todos datos de las operaciones de cada empresa, dentro de los cuales tenemos:
            .col-lg-5(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema6/img2.png", style="width: 380px" alt="").m-auto
          TabsB.color-acento-botones.mb-5(data-aos="fade-down")
            .p-4.p-lg-5(titulo="Contabilización de gastos" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Contabilización de gastos]
                  p.mb-0 Se lleva a cabo cuando se ingresan todos los costos del negocio, por ejemplo: compra de materia prima, gastos de artículos para la oficina, etc.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema6/img3.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Contabilización de ingresos" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Contabilización de ingresos]
                  p.mb-0 Representa todo el dinero que recauda la empresa por sus ventas, principalmente.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema6/img4.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Activos" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Activos]
                  p.mb-0 Este registro proviene de todos los activos que posee la empresa, incluye efectivo, mercancía, bienes; los activos pueden ser tangibles o intangibles.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema6/img5.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Pasivos" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Pasivos]
                  p.mb-0 Se registran todos los compromisos y obligaciones que tiene la empresa.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema6/img6.png", style="width: 350px" alt="").m-auto
            .p-4.p-lg-5(titulo="Capital" :icono="require('@/assets/curso/tema6/img2.svg')")
              .row.align-items-center.justify-content-center
                .col-lg-7.mb-4.mb-lg-0
                  p #[b Capital]
                  p.mb-0 Este representa el dinero que aportaron cada uno de los accionistas de la empresa.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema6/img7.png", style="width: 350px" alt="").m-auto
    p.mb-5(data-aos="fade-right") Los estados financieros se clasifican en:
    .row.align-items-center
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema6/img8.png", style="width: 260px" alt="").m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Estados financieros de propósito general")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Balance general:] comprende los activos, pasivo y patrimonio.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Estado de resultados:] comprende los ingresos, costos, gastos y corrección monetaria.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Estado de cambios en el patrimonio:] muestra los aportes de los socios y la distribución de las utilidades.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Estado de cambios en la situación financiera:] pronostica situaciones de riesgo de la empresa, se centra en las utilidades para la toma de decisiones.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Estado de flujo de efectivo:] contribuye en la planeación y generación de presupuestos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Estados financieros consolidados:] presentan la situación financiera, los resultados de las operaciones, los cambios de patrimonio y los flujos de efectivo.
          .row(titulo="Estados financieros de propósito especial")
            .col-12
              ul.lista-ul
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Balance inicial:] este es utilizado para comenzar las actividades de la empresa.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Estados financieros de periodos intermedios:] son estados financieros básicos que se realizan en un periodo determinado.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Estado de costos:] dan a conocer los gastos que se tuvieron en cuenta para producir los bienes o servicios de la empresa.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Estado de inventarios:] se encuentra cada una de las existencias de cada partida en el balance general.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Estados financieros extraordinarios:] se realizan en un periodo determinado de tiempo y pueden ejecutarse para ciertas actividades que determine la empresa.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #B15815")
                  |
                  p.mb-0 #[b Estados de liquidación:] se presentan ante un ente económico, cuando se ha cesado las operaciones.
    Separador
    #t_6_1
    .titulo-segundo.color-primario
      h2 6.1 Manejo de títulos valores
    p(data-aos="fade-right") Un título valor es un documento el cual tiene un derecho privado patrimonial.
    p.mb-5(data-aos="fade-right") Los títulos más utilizados en el tráfico mercantil son:
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")(data-aos="fade-down")
      .row(titulo="Letra de cambio")
        .col-12
          p Documento que contiene una orden por la que se debe pagar a su vencimiento el valor del dinero que allí estipule en un lugar determinado.
          p Se usa como documento que respalda una deuda por un determinado tiempo, existe una persona que emite la letra quien es el dueño del dinero, otra quien recibe el dinero y quien se compromete a pagar bajo las condiciones descritas. Tanto la letra como el derecho sobre ella se extingue cuando se ha pagado en su totalidad.
          p.mb-0 La letra tiene como característica el endoso, esto es transferir de propiedad de una persona a otra el título valor, quien tiene la letra se llama endosante y a quien la transfiere se llama endosatario, este último adquiere todos los derechos sobre el título valor.
      .row(titulo="Cheque")
        .col-12
          p Documento de valor que contiene una orden de pago que se libra contra un banco a favor de una persona o empresa.
          p Se usa como medio de pago para evitar cargar el efectivo como seguridad de una persona. Los cheques son el medio de manejo de una cuenta corriente de una persona natural o jurídica o de una entidad financiera. Los emitidos por una persona natural se llaman cheques personales, los emitidos por una persona jurídica se llaman empresarial y los emitidos por una entidad financiera se llaman cheques de gerencia.
          p Los cheques deben contener:
          ul.lista-ul
            li.d-flex
              i.fas.fa-check-circle(style="color: #B15815")
              |
              p.mb-0 El nombre de quien ha de pagar el cheque a su presentación, que debe ser una entidad financiera.
            li.d-flex
              i.fas.fa-check-circle(style="color: #B15815")
              |
              p.mb-0 Lugar de pago.
            li.d-flex
              i.fas.fa-check-circle(style="color: #B15815")
              |
              p.mb-0 Fecha de emisión del cheque.
            li.d-flex
              i.fas.fa-check-circle(style="color: #B15815")
              |
              p.mb-0 Un espacio que antecede el signo $, donde se registra el valor del cheque en número.
            li.d-flex
              i.fas.fa-check-circle(style="color: #B15815")
              |
              p.mb-0 La indicación “páguese o páguese a la orden de”, donde se registra el nombre del beneficiario del cheque.
            li.d-flex
              i.fas.fa-check-circle(style="color: #B15815")
              |
              p.mb-0 Un espacio que indica “la suma de”, donde se debe indicar el valor en letras.
            li.d-flex
              i.fas.fa-check-circle(style="color: #B15815")
              |
              p.mb-0 Firma de quien expide el cheque (con puño y letra). En caso de ser una empresa legalmente constituida deberá llevar además de la firma, los sellos registrados en su apertura.
          p En caso que sea un cheque de gerencia, el cual es emitido por una entidad financiera, deberá llevar las firmas y sellos requeridos según el valor del cheque.
          p.mb-0 Los cheques tienen una vigencia de 6 meses, es decir podrá ser cobrado 6 meses antes de la fecha que se coloque en el cheque (en caso de los posfechados) o 6 meses después de su expedición.
      .row(titulo="Pagaré")
        .col-12
          p Documento que generalmente se usa para respaldar un crédito donde se registra el compromiso económico por parte de una persona o empresa a un beneficiario (persona, empresa o entidad financiera).
          p Para el pagaré se deben tener en cuenta dos partes fundamentales:
          ul.lista-ul
            li.d-flex
              i.fas.fa-check-circle(style="color: #B15815")
              |
              p.mb-0 #[b Otorgante.] Es quien firma el pagaré y quien se compromete a pagar la suma convenida.
            li.d-flex
              i.fas.fa-check-circle(style="color: #B15815")
              |
              p.mb-0 #[b El beneficiario.] Es quien recibe la suma de dinero por la cual se firmó el pagaré, en caso que el beneficiario sea una entidad financiera, el pagaré se debe firmar en blanco, es decir, no habrá escrita en él la suma, porque no se sabe en qué momento se pueda hacer efectivo el título en caso que el otorgante incumpla, debido a que se sumará no solo el capital, sino intereses, honorarios de abogado y demás valores que la entidad estipule para hacer efectivo el cobro.
    Separador
    #t_6_2
    .titulo-segundo.color-primario
      h2 6.2 Flujo de caja
    .row.bg-c19
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
              p Es un informe financiero que presenta en detalle los flujos de ingresos y egresos de dinero que tiene una empresa en un determinado periodo de tiempo.
              p Dentro de los ingresos podemos tener: ingresos por ventas, cobro de deudas, alquileres, cobros de préstamos, intereses, todo aquello que nos genere ingreso de dinero a la empresa.
              .row
                .col-12
                  .p-4.bg-c10
                    p.mb-0 Dentro de los egresos podemos tener: pagos de facturas, impuestos, salarios, préstamos solicitados, intereses, amortizaciones, servicios públicos etc., todo lo que genere salidas de dinero.
            .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema6/img11.png', alt='alt', style='width: 400px').m-auto
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema6/img10.png', alt='alt', style='width: 400px').m-auto
            .col-lg-8(data-aos="fade-left")
              p.mb-0 La diferencia entre los ingresos y los egresos se conoce como saldo o flujo neto, por lo tanto, constituye un importante indicador de la liquidez de la empresa, es por esto que el flujo de caja permite a la empresa tomar decisiones como: ¿cuánta mercancía se necesita comprar?, si se compra a crédito o de contado, si se puede vender a crédito o de contado y a qué plazo, si la empresa puede o no solicitar créditos para alguna financiación y si existe liquidez para invertir.
    Separador
    #t_6_3
    .titulo-segundo.color-primario
      h2 6.3 Capacidad de pago
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Es la cantidad de dinero que una persona natural o jurídica tiene disponible después de pagar sus costos y gastos. Generalmente se expresa en pesos de forma mensual, así por ejemplo, si un individuo gana mensualmente $1.000.000 y sus gastos son de $800.000, tendría para endeudarse en un pago que no supere los $200.000 restantes.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img12.png', alt='alt', style='width: 400px').m-auto
    Separador
    #t_6_4
    .titulo-segundo.color-primario
      h2 6.4 Capacidad de endeudamiento
    p.mb-5(data-aos="fade-right") Es la cantidad máxima en la que una persona natural o jurídica puede llegar a endeudarse y solventar sin tener problemas financieros, generalmente expresada en porcentaje. Por ejemplo, podemos calcular la capacidad de endeudamiento con una sencilla fórmula:
    .row.justify-content-center.mb-5
      .col-auto
        .p-4.bg-c10(data-aos="fade-down")
          p.text-center.mb-0 #[b Pasivo actual + nuevo crédito x 100 % / Activo total]
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema6/img13.png', alt='alt', style='width: 400px').m-auto
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            |
            p.mb-0 Pasivo actual: son todas las deudas que tiene a hoy.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            |
            p.mb-0 Nuevo crédito: valor del crédito que está solicitado.
          li.d-flex
            i.fas.fa-check-circle(style="color: #B15815")
            |
            p.mb-0 Activo total: es todo lo que posee (vivienda, vehículo, negocio, electrodomésticos, etc.).
        p.mb-0 El resultado se multiplica por 100 % y el valor no puede superar 30 % para tener unas finanzas sanas, (sin embargo, cada entidad microfinanciera determinará el porcentaje de endeudamiento de sus clientes).

</template>

<script>
export default {
  name: 'Tema6',
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

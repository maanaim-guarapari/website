<template lang="html">
  <div>
    <background-img src="static/img/aprendiz-jr-page-background.jpg"/>
    <div class="container projeto-aprendiz-jr-container">
        <div class="row">
            <div class="col-md-12">
                <h1>Projeto Aprendiz Júnior</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 presentation">
                <div class="presentation-title">
                    <h2>A Paz do Senhor Jesus</h2>
                    <h4>Seja bem-vindo!</h4>
                </div>
                <div class="presentation-content">
                    <p>O Projeto Aprendiz Júnior iniciou- se em Guarapari em 2010, com uma pequena turma de flauta doce, ministrado por duas professoras de classe, que objetivavam ensinar crianças e adolescentes a aprenderem um instrumento para tocar em suas Igrejas. A turma de alunos era composta por 30  cias de  07  Igrejas da Área de Guarapari. Em 2012, o Senhor orientou a capacitar professoras para que essas ministrassem o ensino musical e espiritual em suas Igrejas, tornando o Projeto muito mais  abrangente. Além do ensino da flauta doce, hoje os aprendizes são contemplados com ensino de instrumentos de percussão e, dando continuidade ao Projeto Aprendiz Júnior, eles são inseridos no Projeto Aprendiz da Área de Guarapari recebendo aulas de instrumentos melódicos como violino, flauta transversal, saxofone, trombone, clarinete entre outros.</p>
                    <p>Todos os aprendizes se reúnem periodicamente  para  ensaios, cultos, evangelizações nos bairros. Cada Igreja tem um monitor responsável. Todo o material de ensaio é  disponibilizado  em capacitações onde o Senhor tem dado  o  entendimento  de  Corpo e muito tem acrescentado na vida espiritual das CIAS e professores de toda a  área de  Guarapari.</p>
                    <p>Atualmente, 29 Igrejas da nossa área fazem parte do Projeto. Temos um Pastor responsável, um diácono como  coordenador  e 142 monitores sendo capacitados e ministrando essa herança maravilhosa que é o louvor para  as  414 cias  que  temos  distribuídas nessas 29  Igrejas.</p>
                    <p>Muito o Senhor nos abençoou nesses 07 anos de Projeto Aprendiz Júnior!</p>
                </div>
            </div>
            <div class="col-sm-6 directives">
                <div class="col-md-12">
                    <div class="directives-title">
                        <h1>Diretrizes do Projeto</h1>
                    </div>
                    <div class="directives-content">
                      <modal v-for="diretriz in diretrizes"
                             :id="diretriz.id"
                             :title="diretriz.title"
                             :content="diretriz.content"
                             :btnVariant="diretriz.btnVariant"
                             :key="diretriz.id"
                             size="lg"/>
                    </div>
                    <div class="material-content">
                        <h1>Material</h1>
                        <p>Acesse o material do Projeto Aprendiz em nosso <a target="_blank" href="https://drive.google.com/drive/folders/0BwuioFg__yU_X2FFaHVGNVMwVEk?usp=sharing"><fa :icon="['fab', 'google-drive']"/> Google Drive</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

import Modal from '@/components/modal.vue'
import BackgroundImg from '@/components/background-img.vue'

export default {
  components: {
    Modal,
    BackgroundImg
  },
  computed: {
    ...mapGetters('aprendizJr', {
      diretrizes: 'diretrizes'
    })
  }
}
</script>

<style lang="scss">
.projeto-aprendiz-jr-container {
  margin-top: 25px;
  border-radius: 10px;
  background-color: rgba(white, .7);
}
</style>

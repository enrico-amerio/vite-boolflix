<script>
// import {store} from '../../data/store'
export default {
  
}
</script>

<template>
<div class="container wrapper ">
  <div class="error">
    <h2 class="mb-5">Ricorda, il buon cinema è come il buon vino: richiede pazienza e una buona ricerca!</h2>
    <h5 class="mb-3">Sembra che la tua ricerca non abbia prodotto alcun risultato, ecco alcuni consigli per migliorare la tua ricerca:</h5>
    <ul>
      <li>Verifica l'ortografia: Assicurati che le parole chiave inserite siano corrette e senza errori di battitura.</li>
      <li>Cerca per titoli parziali: Inserisci solo una parte del titolo del film se non sei sicuro dell'intero titolo.</li>
      <li>Ricorda: se il film che stai cercando non è disponibile sulla nostra piattaforma potresti trovare un'alternativa interessante, tra le oltre 5000 proposte presenti sul nostro sito</li>
    </ul>
  </div>
</div>
</template>

<style lang="scss" scoped>
.wrapper{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  
  .error{
    height: 90%;
    padding: 50px;
    border-radius: 20px;
    background-color: rgba(255,255,255,0.6);
    h5{
      color: #bb2d3b;
    }
    li{
      color: black;
    }
  }
}
</style>
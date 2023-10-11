/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".es", ".org"];

  function dominioRandom() {
    for (let p = 0; p < pronoun.length; p++) {
      for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
          for (let e = 0; e < ext.length; e++) {
            dominioaleatorio = pronoun[p] + adj[a] + noun[n] + ext[e];
            console.log(dominioaleatorio);
          }
        }
      }
    }
  }

  let dominioaleatorio = dominioRandom();
};

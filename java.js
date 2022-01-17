function mdp(){
  var continuer=true;
  var n=0;
  while (mdp!="sushis" && n!=3){
      mdp=prompt("Quel est le mot de passe ?");
      n++;
  }
  if (mdp!="sushis"){
      while (continuer){
          alert("Error 404");
      }
  }
  if (mdp=="sushis"){
      alert("Accès autorisé !");
  }
}

mdp()
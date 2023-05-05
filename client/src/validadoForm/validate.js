export const validate = (creatNewPokemon) => {
  let regexName = /^[a-z]+$/;
  let regexImg =/.(gif|jpeg|jpg|png)$/i;
  let rexNum = /^([0-9])*$/;  
  /* if(!/.(gif|jpeg|jpg|png)$/i.test(dogData.image)) errors.image = "Supported extensions: JPEG, JPG and PNG"; */

  let errors = {};
  //! VALIDACION NAME
  if (!creatNewPokemon.name)
    errors.name = "Username must not be empty";
  else if(creatNewPokemon.name.length >= 15) errors.name= "No puede tener mas de 15 caracteres"
  else if (!regexName.test(creatNewPokemon.name))
    errors.name = "Cannot have numbers";
  else if (creatNewPokemon.name !== creatNewPokemon.name.toLowerCase())
    errors.name = "Cannot have capital letters";

  //!Validacion link Image
  if (creatNewPokemon.image) {
    if (!regexImg.test(creatNewPokemon.image))
      errors.image = "It has to be an Image Link";
  }

  //! validacion vida
  if(creatNewPokemon.life){
    if(!rexNum.test(creatNewPokemon.life)) errors.life= "Only numbers"
    if(creatNewPokemon.life <= 0) errors.life = "cannot be less than or equal to 0"
  }

  //!validacion attack
  if(creatNewPokemon.attack){
    if(!rexNum.test(creatNewPokemon.attack)) errors.attack= "Only numbers"
    if(creatNewPokemon.attack <= 0) errors.attack = "cannot be less than or equal to 0"

  }

  //!validacion defense
  if(creatNewPokemon.defense){
    if(!rexNum.test(creatNewPokemon.defense)) errors.defense = "Only numbers"
    if(creatNewPokemon.defense <= 0) errors.defense = "cannot be less than or equal to 0"

  }  

  //!validacion spped
    if(creatNewPokemon.speed){
      if(!rexNum.test(creatNewPokemon.speed)) errors.speed = "Only numbers"
    if(creatNewPokemon.speed <= 0) errors.speed = "cannot be less than or equal to 0"

    }  

  //!validacion height
  if(creatNewPokemon.height){
    if(!rexNum.test(creatNewPokemon.height)) errors.height = "Only numbers"
    if(creatNewPokemon.height <= 0) errors.height = "cannot be less than or equal to 0"

  }  

  //!validacion weight
  if(creatNewPokemon.weight){
    if(!rexNum.test(creatNewPokemon.weight)) errors.weight= "Only numbers"
    if(creatNewPokemon.weight <= 0) errors.weight = "cannot be less than or equal to 0"

  }

  return errors;
};

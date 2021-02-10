// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (num, dna) => {
    return {
      specimenNum: num,
      dna: dna,
      mutate(){
        let newBase = returnRandBase(); 
        let index = Math.floor(Math.random() * dna.length);
        if(this.dna[index] === newBase){
          while(this.dna[index] === newBase){
            newBase = returnRandBase();
          }
        }
        this.dna[index] = newBase;
      },
      
      compareDNA(object){
        let porc = 0;
        for(let i = 0; i < object.dna.length; i++){
          if(this.dna[i] === object.dna[i]){
            porc++;
          }
        }
        porc = (porc/object.dna.length) * 100;
        console.log(`Specimen #${this.specimenNum} and Specimen #${object.specimenNum} have ${porc.toFixed(2)}% DNA in common`);
      },
  
      willLikelySurvive(){
        let porc = 0;
        for(let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === 'C' || this.dna[i] === 'G'){
            porc++;
          }
        }
        porc = (porc/this.dna.length) * 100;
        if(porc >= 60){
          return true;
        }
        else{
          return false;
        }
      }
  
    }
  };

  const createpAequor = () =>{
    let pAequor = [];
    let i = 0;
    while(pAequor.length < 30){
      let gudSpecimen = pAequorFactory(i, mockUpStrand());
      if(gudSpecimen.willLikelySurvive()){
        pAequor.push(gudSpecimen);
        i++;
      }
    }
    return pAequor;
  };
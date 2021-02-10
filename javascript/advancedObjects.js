//Factory functions, generates multiple objects
const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep(){
        console.log('Beep Boop');
      }
    }
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();
  console.log(typeof tinCan);
  
  //destructuring: Property Value Shorthand (ES6)
  function robotFactory(model, mobile){
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)


  //Destructured Assignment
  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const {functionality} = robot; //syntax
  functionality.beep();
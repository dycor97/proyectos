const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
  
    get desserts(){
      return this.desserts;
    },
  
    get mains(){
      return this.mains;
    },
  
    get appetizers(){
      return this.appetizers;
    },
  
    set appetizers(appetizerIn){
      this.appetizers.push(appetizerIn);
    },
  
    set mains(mainIn){
      this.mains.push(mainIn);
    },
  
    set desserts(desertIn){
      this.appetizers.push(dessertIn);
    },
  
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
  
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(dish);
    },
  
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
    },
  
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Hello, your order is: Appetizer: ${appetizer.name}, Main dish: ${main.name} and Dessert: ${dessert.name} with a total of: ${totalPrice} peso. `;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Aros de seboya', 5);
  menu.addDishToCourse('appetizers', 'Patatas', 10);
  menu.addDishToCourse('appetizers', 'Ensalada', 15);
  menu.addDishToCourse('mains', 'anvorguesa', 20);
  menu.addDishToCourse('mains', 'biste', 20);
  menu.addDishToCourse('mains', 'poyo azado', 20);
  menu.addDishToCourse('desserts', 'flan', 10);
  menu.addDishToCourse('desserts', 'jokei', 12);
  menu.addDishToCourse('desserts', 'keki', 15);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
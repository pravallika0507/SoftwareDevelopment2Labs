class Student {
    // Attributes
    #firstName;
    #lastName;
    #courseId;
    
    constructor(firstName, lastName, courseId) {
    
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#courseId = courseId;
    }
    getFormattedName() {
        return this.#firstName + ' ' + this.#lastName;
    }
    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName
    }

    set firstName(firstName) {
        this.#firstName = firstName;
    }

    set lastName(lastName) {
        this.#lastName = lastName;
    }
  }

  module.exports = {
      Student
  }

  class Example {
    #value;
    
    constructor(value) {
      this.#value = value;
    }
    
    // Get value
    get value() {
      return this.#value;
    }
  
      // Set value
      set value(value) {
      this.#value = value;
    }
  }
  
  // Create Example object.
  var example = new Example(5);
  // Get value
  var val = example.value;
  // Set value
  example.value = 10;
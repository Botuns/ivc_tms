function generateUniqueNumbers() {
    const maxNumber = 9000;
    let numbers = Array.from({ length: maxNumber }, (_, index) => index + 1);
  
    return function () {
      if (numbers.length === 0) {
        // Reset the array when all numbers have been used
        numbers = Array.from({ length: maxNumber }, (_, index) => index + 1);
      }
  
      // Generate a random index within the remaining numbers array
      const randomIndex = Math.floor(Math.random() * numbers.length);
  
      // Get the number at the random index and remove it from the array
      const randomNumber = numbers.splice(randomIndex, 1)[0];
  
      return randomNumber;
    };
  }
  
  // Create the function to generate unique numbers
  const generateNumber = generateUniqueNumbers();
  
  // Example usage
    console.log(generateNumber());
  
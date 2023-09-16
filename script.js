const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 21, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    console.log(data);
  }
  
  // 2. Add Data
    function addData() {
    const name = prompt("Enter name:");
    const age = prompt("Enter age:");
    const profession = prompt("Enter profession:");
    return { name, age, profession };
}

   function newArr() {
    const newData = addData();
    data.push(newData);
  }

  newArr(); 
 
  
  // 3. Remove Admins
  function removeAdmin() {
    const filteredUsers = data.filter(user => user !== data);
    console.log(filteredUsers); 
  }

  // 4. Concatenate Array
  function concatenateArray() {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
  const resultArray = [...array1, ...array2];
   console.log("Joined Array:", resultArray);

  }
//   concatenateArray();
  
  // 5. Average Age
  function averageAge() {

    let totalAge = 0;
    for (const index of data) {
    totalAge += index.age;

   }
   const average = totalAge / data.length;
   console.log(average)
  }
  


  
  // 6. Age Check
  function checkAgeAbove25() {

    const above25 = data.filter(index => index.age > 25);
    if (above25.length > 0) {
    console.log("above the age of 25");
    }
       else {
    console.log("Less");
    }

  }
  
  // 7. Unique Professions
  function uniqueProfessions() {


  }
  
  // 8. Sort by Age
  function sortByAge() {}
  
  // 9. Update Profession
  function updateJohnsProfession() {}
  
  // 10. Profession Count
  function getTotalProfessions() {}
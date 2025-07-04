const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:'Javascript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:'Python' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:'Java' },
      //... More employee records can be added here
    ];

     // Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;

  function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }

    function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
      const findEmployee = employees.find(employee => employee.id === employeeId);
      if (findEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${findEmployee.id}: ${findEmployee.name}: ${findEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
       }
   }

/ Function for your button
function findBySpecialization() {
    const specializationContainer = document.getElementById('specializationsList');

    // Get unique specializations
    const specializations = [...new Set(employees.map(emp => emp.specialization))];

    // Display as plain text list
    specializationContainer.innerHTML = `
        <h3>Available Specializations:</h3>
        <p>${specializations.join(', ')}</p>
    `;
}

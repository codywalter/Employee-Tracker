const mysql = require("mysql");
const inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "baseball06",
  database: "employeeTracker_db",
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start() {
  inquirer
    .prompt({
      name: "userChoice",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "Exit",
      ],
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.userChoice === "View All Employees") {
        viewEmployees();
      } else if (answer.userChoice === "View All Employees By Department") {
        viewByDepartment();
      } else if (answer.userChoice === "View All Employees By Manager") {
        viewByManager();
      } else if (answer.userChoice === "Add Employee") {
        addEmployee();
      } else if (answer.userChoice === "Remove Employee") {
        removeEmployee();
      } else if (answer.userChoice === "Update Employee Role") {
        updateRole();
      } else if (answer.userChoice === "Update Employee Manager") {
        updateManager();
      } else {
        connection.end();
      }
    });
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", function (err, results) {
    if (err) throw err;
    else {
      console.table(results);
    }
    start();
  });
}

function viewByDepartment() {
  inquirer
    .prompt([
      {
        name: "departmentChoice",
        type: "list",
        message: "Which Department ID would you like to view?",
        choices: [111, 222, 333, 444],
      },
    ])
    .then(function (answer) {
      if (answer.departmentChoice === 111) {
        connection.query(
          `SELECT * FROM role WHERE department_id = ${answer.departmentChoice};`,
          function (err, results) {
            if (err) throw err;
            else {
              console.table(results);
            }
            start();
          }
        );
      } else if (answer.departmentChoice === 222) {
        connection.query(
          `SELECT * FROM role WHERE department_id = ${answer.departmentChoice};`,
          function (err, results) {
            if (err) throw err;
            else {
              console.table(results);
            }
            start();
          }
        );
      } else if (answer.departmentChoice === 333) {
        connection.query(
          `SELECT * FROM role WHERE department_id = ${answer.departmentChoice};`,
          function (err, results) {
            if (err) throw err;
            else {
              console.table(results);
            }
            start();
          }
        );
      } else if (answer.departmentChoice === 444) {
        connection.query(
          `SELECT * FROM role WHERE department_id = ${answer.departmentChoice};`,
          function (err, results) {
            if (err) throw err;
            else {
              console.table(results);
            }
            start();
          }
        );
      }
    });
}

function viewByManager() {
  inquirer
    .prompt([
      {
        name: "managerChoice",
        type: "list",
        message: "Which manager ID would you like to view?",
        choices: [101, 202, 303, 404],
      },
    ])
    .then(function (answer) {
      if (answer.managerChoice === 101) {
        connection.query(
          `SELECT * FROM employee WHERE manager_id = ${answer.managerChoice};`,
          function (err, results) {
            if (err) throw err;
            else {
              console.table(results);
            }
            start();
          }
        );
      } else if (answer.managerChoice === 202) {
        connection.query(
          `SELECT * FROM employee WHERE manager_id = ${answer.managerChoice};`,
          function (err, results) {
            if (err) throw err;
            else {
              console.table(results);
            }
            start();
          }
        );
      } else if (answer.managerChoice === 303) {
        connection.query(
          `SELECT * FROM employee WHERE manager_id = ${answer.managerChoice};`,
          function (err, results) {
            if (err) throw err;
            else {
              console.table(results);
            }
            start();
          }
        );
      } else if (answer.managerChoice === 404) {
        connection.query(
          `SELECT * FROM employee WHERE manager_id = ${answer.managerChoice};`,
          function (err, results) {
            if (err) throw err;
            else {
              console.table(results);
            }
            start();
          }
        );
      }
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "employeeFirstName",
        type: "input",
        message: "What is your employee's FIRST NAME?",
      },
      {
        name: "employeeLastName",
        type: "input",
        message: "What is your employee's LAST NAME?",
      },
      {
        name: "employeeRoleId",
        type: "list",
        message: "What is your employee's ROLE ID?",
        choices: [100, 200, 300, 400],
      },
      {
        name: "employeeManagerId",
        type: "list",
        message: "What is your employee's MANAGER ID?",
        choices: [101, 202, 303, 404],
      },
      {
        name: "employeeTitle",
        type: "list",
        message: "What is your employee's TITLE?",
        choices: [
          "Front-End Developer",
          "Back-End Developer",
          "Admin Assistant",
          "Accountant",
        ],
      },
      {
        name: "employeeSalary",
        type: "number",
        message: "What is your employee's SALARY?",
      },
      {
        name: "employeeDepartmentId",
        type: "list",
        message: "What is your employee's DEPARTMENT ID?",
        choices: [111, 222, 333, 444],
      },
    ])
    .then(function (answer) {
      connection.query(
        `INSERT INTO department (name) VALUES ("${answer.employeeFirstName} ${answer.employeeLastName}");`,
        function (err, results) {
          if (err) throw err;
          else {
            console.table(results);
          }
          start();
        }
      );
    });
}

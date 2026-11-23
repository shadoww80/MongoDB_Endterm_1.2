// Scenario 1.2 - Employee Directory (MongoDB Query Operators, Projection, Sort, Skip, Limit)
// Database: hr | Collection: employees

// Switch to 'hr' database (works in mongosh, load(), piped input, and copy-paste)
db = db.getSiblingDB("hr");

// Reset collection so script runs cleanly every time
db.employees.drop();

// 1. Insert eight employees into the employees collection
print("--- Step 1: Insert Eight Employees ---");
printjson(
  db.employees.insertMany([
    { empId: 1, name: "Anita", dept: "HR", salary: 42000, city: "Chennai" },
    { empId: 2, name: "Bala", dept: "IT", salary: 65000, city: "Bengaluru" },
    { empId: 3, name: "Charan", dept: "IT", salary: 58000, city: "Chennai" },
    { empId: 4, name: "Deepa", dept: "Finance", salary: 50000, city: "Mumbai" },
    { empId: 5, name: "Elan", dept: "IT", salary: 72000, city: "Chennai" },
    { empId: 6, name: "Farah", dept: "HR", salary: 45000, city: "Delhi" },
    { empId: 7, name: "Gopal", dept: "Finance", salary: 61000, city: "Chennai" },
    { empId: 8, name: "Hema", dept: "Sales", salary: 38000, city: "Hyderabad" }
  ])
);

// 2. Find employees who earn more than 60000 using $gt
print("\n--- Step 2: Salary > 60000 ($gt) ---");
printjson(db.employees.find({ salary: { $gt: 60000 } }).toArray());

// 3. Find employees who earn between 45000 and 60000 (both inclusive) using $gte and $lte
print("\n--- Step 3: Salary between 45000 and 60000 ($gte & $lte) ---");
printjson(db.employees.find({ salary: { $gte: 45000, $lte: 60000 } }).toArray());

// 4. Find employees of the IT or Finance department using $in
print("\n--- Step 4: IT or Finance Department ($in) ---");
printjson(db.employees.find({ dept: { $in: ["IT", "Finance"] } }).toArray());

// 5. Find Chennai employees earning more than 50000 using $and,
//    and employees who are in HR or earn more than 70000 using $or
print("\n--- Step 5a: Chennai Employees Earning > 50000 ($and) ---");
printjson(
  db.employees.find({
    $and: [
      { city: "Chennai" },
      { salary: { $gt: 50000 } }
    ]
  }).toArray()
);

print("\n--- Step 5b: HR Department OR Salary > 70000 ($or) ---");
printjson(
  db.employees.find({
    $or: [
      { dept: "HR" },
      { salary: { $gt: 70000 } }
    ]
  }).toArray()
);

// 6. Find employees who do not live in Chennai or Bengaluru using $nin
print("\n--- Step 6: Not in Chennai or Bengaluru ($nin) ---");
printjson(db.employees.find({ city: { $nin: ["Chennai", "Bengaluru"] } }).toArray());

// 7. Find employees whose name starts with A, B or C using $regex
print("\n--- Step 7: Name Starts with A, B, or C ($regex) ---");
printjson(db.employees.find({ name: { $regex: "^[ABC]" } }).toArray());

// 8. Show only names and salaries, highest salary first, skipping the first two and returning the next three
print("\n--- Step 8: Projection, Sort, Skip(2), Limit(3) ---");
printjson(
  db.employees
    .find({}, { _id: 0, name: 1, salary: 1 })
    .sort({ salary: -1 })
    .skip(2)
    .limit(3)
    .toArray()
);

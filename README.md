# Scenario 1.2 – Employee Directory (MongoDB)

## Overview
This project implements MongoDB query operators, projection, sorting, and pagination (`skip` & `limit`) for an HR employee directory.

- **Database:** `hr`
- **Collection:** `employees`
- **Topics:** `$gt`, `$gte`, `$lte`, `$in`, `$and`, `$or`, `$nin`, `$regex`, projection, `.sort()`, `.skip()`, `.limit()`

## Files Included
- `employee_directory.js`: Error-free executable `mongosh` script covering Steps 1 through 8.
- `output_screenshot.png`: Terminal output screenshot of the executed script.
- `README.md`: Setup and execution instructions.

## How to Run
Make sure MongoDB (`mongod`) is running, then run:

```bash
mongosh --file employee_directory.js
```

Or inside `mongosh`:
```javascript
load("employee_directory.js")
```

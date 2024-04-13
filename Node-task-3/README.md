* Repleace your local port to variable PORT
* Repleace your Mongo DB to variable DB_URL

Below is a step-by-step guide to testing each of the API endpoints using Postman based on your code:

1. Write API to create Mentor
Method: POST
URL: http://localhost:3000/mentor
Body: JSON object representing a mentor
json
example :-

{
  "name": "John Doe",
  "email": "john.doe@example.com"
}

2. Write API to create Student
Method: POST
URL: http://localhost:3000/student
Body: JSON object representing a student
json
Example:
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}

3. Write API to Assign a student to Mentor
Method: POST
URL: http://localhost:3000/mentor/:mentorId/assign
URL Params: Replace :mentorId with the ID of a mentor
Body: JSON object with an array of student IDs to assign
json
Example:
{
  "students": ["studentId1", "studentId2"]
}

4. Select one mentor and Add multiple Student
Method: POST
URL: http://localhost:3000/mentor/:mentorId/assign
URL Params: Replace :mentorId with the ID of a mentor
Body: JSON object with an array of student IDs to assign
json
Copy code
{
  "students": ["studentId3", "studentId4"]
}

5. A student who has a mentor should not be shown in List
Method: GET
URL: http://localhost:3000/students/unassigned

6. Write API to Assign or Change Mentor for particular Student
Method: PUT
URL: http://localhost:3000/student/:studentId/assignMentor/:mentorId

URL Params: Replace :studentId with the ID of a student and :mentorId with the ID of a mentor
7. Select One Student and Assign one Mentor
Method: PUT
URL: http://localhost:3000/student/:studentId/assignMentor/:mentorId
URL Params: Replace :studentId with the ID of a student and :mentorId with the ID of a mentor

8. Write API to show all students for a particular mentor
Method: GET
URL: http://localhost:3000/mentor/:mentorId/students
URL Params: Replace :mentorId with the ID of a mentor

9. Write an API to show the previously assigned mentor for a particular student
Method: GET
URL: http://localhost:3000/student/:studentId/previousMentor
URL Params: Replace :studentId with the ID of a student

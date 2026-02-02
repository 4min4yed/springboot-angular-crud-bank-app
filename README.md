# springboot-angular-crud-bank-app

An example project: Angular SPA frontend (client) + Spring Boot RESTful API backend (CRUD for bank accounts).

---

## Architecture Overview
* **Backend:** Spring Boot REST API (Port 8080/8081)
* **Frontend:** Angular SPA (Port 4200)
* **Database:** MySQL (Managed via Docker)

---

## 1. How to run (Backend & Database)

### Prerequisites
- Java 11 or later
- Maven
- MySQL server (or Docker)

### Step 1: Start MySQL
Start the database using Docker Compose to automatically create `bankdb`:
```bash
docker-compose up -d
```

### Step 2: Configure Database (If not using Docker defaults)
Open src/main/resources/application.properties and verify:

# Properties
spring.datasource.url=jdbc:mysql://localhost:3306/bankdb?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=secret

### Step 3: Run the Spring Boot App
# From the project root:

```bash
# Using Maven Wrapper (lancer backend)
.\mvnw.cmd spring-boot:run
```

2. How to run (Frontend )
Prerequisites
Node.js (v14+)

Angular CLI 
```bash
npm install -g @angular/cli
```

Steps to start:
Navigate to the client folder:

```bash
cd angular8-springboot-client
```
Install dependencies:

```bash
npm install
```
Launch the application:
```bash
ng serve
```
# Access the UI: Open http://localhost:4200 in your browser.

3. Testing the API
Sample JSON Responses
Created: {"id":3,"ownerName":"Charlie Ayed","balance":1200.0}

List: [{"id":2,"ownerName":"Charlie Updated","balance":1200.00},{"id":3,"ownerName":"Charlie Ayed","balance":1200.00}]

Manual Tests (via Curl)
Create Account:

```bash
curl.exe -i -X POST -H "Content-Type: application/json" -d "{\"ownerName\":\"Charlie Ayed\",\"balance\":1200.0,\"currency\":\"USD\"}" http://localhost:8081/api/v1/accounts
```
List All Accounts:

```bash
curl.exe -i http://localhost:8081/api/v1/accounts
```
Delete Account (ID 1):

```bash
curl -X DELETE http://localhost:8080/api/v1/accounts/1
```
#Notes :
The app uses spring.jpa.hibernate.ddl-auto=update by default to handle table creation.

If the backend is running on a different port (8081 vs 8080), ensure the Angular account.service.ts is updated accordingly.

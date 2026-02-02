# springboot-angular-crud-bank-app

An example project: Angular SPA frontend (client) + Spring Boot RESTful API backend (CRUD for bank accounts).

---

## How to run (Backend only)
Build: ```.\mvnw.cmd spring-boot:run```
Start MySQL: ```docker-compose up -d```

## Test

{"id":2,"ownerName":"Charlie Updated","balance":1200.0}
C:\Users\Mega-PC>curl.exe -i -X POST -H "Content-Type: application/json" -d "{\"ownerName\":\"Charlie Ayed\",\"balance\":1200.0,\"currency\":\"USD\"}" http://localhost:8081/api/v1/accounts
HTTP/1.1 201

{"id":3,"ownerName":"Charlie Ayed","balance":1200.0}
>curl.exe -i http://localhost:8081/api/v1/accounts
HTTP/1.1 200
Content-Type: application/json

[{"id":2,"ownerName":"Charlie Updated","balance":1200.00},{"id":3,"ownerName":"Charlie Ayed","balance":1200.00}]

### Prerequisites
- Java 11 or later
- Maven
- MySQL server

### 1) Create the database
- Login to MySQL and create a database (example):

```sql
CREATE DATABASE bankdb;
```

### 2) Configure database credentials
- Open `src/main/resources/application.properties` and update the following properties with your MySQL credentials if needed:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/bankdb?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=secret
```

### 3) Build and run
- From the project root run (uses embedded Tomcat on port 8080 by default):

```bash
mvn clean package
java -jar target/bank-backend-0.0.1-SNAPSHOT.jar
# or
mvn spring-boot:run
```

#### Run with Docker Compose (MySQL)
- Start MySQL using Docker Compose (creates `bankdb`):

```bash
docker-compose up -d
```
- Then run the app as above; the app will connect to `localhost:3306` with credentials in `src/main/resources/application.properties`.

### 4) Verify the API
- Health / list accounts:

```bash
curl -sS http://localhost:8080/api/v1/accounts
```

- Create an account:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"ownerName":"Alice","balance":100.00}' http://localhost:8080/api/v1/accounts
```

- Get by id:

```bash
curl http://localhost:8080/api/v1/accounts/1
```

- Update:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"ownerName":"Alice B","balance":150.00}' http://localhost:8080/api/v1/accounts/1
```

- Delete:

```bash
curl -X DELETE http://localhost:8080/api/v1/accounts/1
```

### Notes
- The app uses `spring.jpa.hibernate.ddl-auto=update` by default (creates/updates tables automatically in `bankdb`).
- Change `server.port` in `application.properties` if you need a different port.

---

If you want, I can add a Postman collection or docker-compose for MySQL to make setup even easier. ✅

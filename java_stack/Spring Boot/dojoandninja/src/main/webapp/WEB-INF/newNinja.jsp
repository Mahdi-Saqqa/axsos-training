<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Tacos</title>
  <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
  <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
<h1>New Dojo</h1>
<form:form action="/ninja/new" method="post" modelAttribute="ninja">
  <p>
    <form:select path="dojo">
    <c:forEach var="dojo" items="${dojos}">
      <form:option value="${dojo.id}">${dojo.name}</form:option>
    </c:forEach>
    </form:select>
  </p>
  <p>
    <form:label path="firstName">First Name</form:label>
    <form:errors path="firstName"/>
    <form:input path="firstName"/>
  </p>
  <p>
    <form:label path="lastName">Last Name</form:label>
    <form:errors path="lastName"/>
    <form:input path="lastName"/>
  </p>
  <p>
    <form:label path="age">Age</form:label>
    <form:errors path="age"/>
    <form:input path="age"/>
  </p>
  <input type="submit" value="Submit"/>
</form:form>
</body>
</html>
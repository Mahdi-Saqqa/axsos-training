<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<meta charset="UTF-8">
<title>Fruity Loops</title>
</head>
<body class="w-100 h-100">
<div class="container w-25 m-auto mt-5">
<table class="table table-dark">
<tr>
<th>Name</th>
<th>Price</th>
</tr>

<c:forEach var="fruit" items="${fruits}">
<tr>
        <td><c:out value="${fruit.getName()}"></c:out></td>
        <td><c:out value="${fruit.getPrice()}"></c:out></td>
</tr>
        
</c:forEach>
</table>
</div>
</body>
</html>
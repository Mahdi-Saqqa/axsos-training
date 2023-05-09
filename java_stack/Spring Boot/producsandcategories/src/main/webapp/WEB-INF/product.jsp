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
  <title>${product.name}</title>
  <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
<h1 class="h1 text-center">${product.name}</h1>
<div class="row w-100 border-top border-3">
  <h2 class="h2">
    Categories
  </h2>
  <ul>
    <c:forEach var="category" items="${categoriesInProduct}">
      <li><a href="/categories/${category.id}">${category.name}</a> </li>
    </c:forEach>
  </ul>
</div>
<form action="/products/${product.id}/addcategory" method="post">
  <p>
    <label for="category">Add Category</label>
    <select name="category">
      <c:forEach var="category" items="${categoriesNotInProduct}">
        <option value="${category.id}">${category.name}</option>
      </c:forEach>
    </select>
  </p>
  <button type="submit" class="btn btn-primary">Add category</button>
</form>
</body>
</html>
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
  <title>${category.id}</title>
  <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
<h1 class="h1 text-center">${category.name}</h1>
<div class="row w-100 border-top border-3">
  <h2 class="h2">
    Products
  </h2>
  <ul>
    <c:forEach var="product" items="${productsInCategory}">
      <li><a href="/product/${product.id}">${product.name}</a> </li>
    </c:forEach>
  </ul>
</div>
<form action="/categories/${category.id}/addproduct" method="post">
  <p>
    <label for="product">Add Product</label>
    <select name="product">
      <c:forEach var="product" items="${productsNotInCategory}">
        <option value="${product.id}">${product.name}</option>
      </c:forEach>
    </select>
  </p>
  <button type="submit" class="btn btn-primary">Add Product</button>
</form>
</body>
</html>
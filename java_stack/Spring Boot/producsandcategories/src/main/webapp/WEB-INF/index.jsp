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
    <title>Home</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
<h1 class="h1 text-center my-3">Home Page</h1>
<div class="container">
    <div class="row">

    </div>
    <div class="row">
        <div class="col col-6">
            <div class="card">
                <div class="card-header">Products</div>
                <div class="card-body">
                    <ul>
                    <c:forEach var="product" items="${products}">
                    <li>
                        <a href="/products/${product.id}" class="">${product.name}</a>
                    </li>
                    </c:forEach>
                    </ul>
                </div>
                <div class="card-footer d-grid p-0">
                    <a  href="/products/new" alt="create New product" class="btn btn-primary">New Product</a>

                </div>
            </div>
        </div>
        <div class="col col-6">
            <div class="card">
                <div class="card-header">Categories</div>
                <div class="card-body">
                    <ul>
                    <c:forEach var="category" items="${categories}">
                        <li>
                            <a href="/categories/${category.id}" class="">${category.name}</a>
                        </li>
                    </c:forEach>
                    </ul>
                </div>

                <div class="card-footer d-grid p-0">
                    <a  href="/categories/new" alt="create New category" class="btn btn-primary ">New Category</a>

                </div>
        </div>
    </div>

</div>
</div>
</body>
</html>


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
    <title>Save Travel</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
   <div class="container w-75 mx-auto">

        <div class="row my-5">
            <h2 class="h2 text-primary my-5">Edit an expense:</h2>
            <form:form action="/${save.id}/update" method="post" modelAttribute="save">
                <p>
                    <form:label path="expense" class="form-label">Expense Name</form:label>
                    <form:input path="expense" class="form-control"/>
                </p>
                <p>
                    <form:label path="vendor" class="form-label">Vendor</form:label>
                    <form:textarea path="vendor" class="form-control"/>
                </p>
                <p>
                    <form:label path="amount" class="form-label">Amount</form:label>
                    <form:input path="amount" type="number" step="0.01" class="form-control"/>
                </p>
                <p>
                    <form:label path="description" class="form-label">Description</form:label>
                    <form:textarea  path="description" class="form-control"/>
                </p>    
                <input type="submit" value="Submit"  class="btn btn-success"/>
                <div>
                    <form:errors path="expense" class="text-danger text-center d-block"/>
                    <form:errors path="vendor" class="text-danger text-center d-block"/>
                    <form:errors path="amount" class="text-danger text-center d-block"/>
                    <form:errors path="description" class="text-danger text-center d-block"/>
                </div>
            </form:form>
        </div>
   </div>
</body>
</html>
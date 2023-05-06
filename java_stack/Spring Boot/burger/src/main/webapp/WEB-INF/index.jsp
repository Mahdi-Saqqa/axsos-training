<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <!-- c:out ; c:forEach etc. -->
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <!-- Formatting (dates) -->
        <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
            <!-- form:form -->
            <%@ taglib prefix="form"
                uri="http://www.springframework.org/tags/form"%>
                <!-- for rendering errors on PUT routes -->
                <%@ page isErrorPage="true" %>
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <meta charset="UTF-8">
                            <title>Burger Tracker</title>
                            <link rel="stylesheet"
                                href="/webjars/bootstrap/css/bootstrap.min.css">
                            <script
                                src="/webjars/bootstrap/js/bootstrap.min.js"></script>
                        </head>
                        <body>
                            <div class="container">
                                <div class="row w-50 mx-auto mt-3">
                                    <h1 class="h1 my-3">Burger Tracker</h1>
                                    <table class="table table-dark table-active" >

                                        <thead>
                                            <tr class=" text-center">
                                                <th>Name</th>
                                                <th>Restaurant</th>
                                                <th>Rate (Out of 5)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <c:forEach var="burger"
                                                items="${allBurger}">
                                                <tr class=" text-center">
                                                    <td>${burger.name}</td>
                                                    <td>${burger.restaurant}</td>
                                                    <td>${burger.rating}</td>
                                                </tr>
                                            </c:forEach>
                                        </tbody>
                                    </table>
                                </div>
                                <h2 class="h2 text-center my-3">Add new Burger</h2>
                                <div class="row w-50 mx-auto mt-3">
                                    
                                    <form:form action="/burgers" method="post" modelAttribute="burger">

                                        <p>
                                            <form:label class="form-label" path="name">Burger Name</form:label>
                                            <form:input class="form-control" path="name"/>
                                        </p>
                                        <p>
                                            <form:label class="form-label" path="restaurant">Restaurant Name</form:label>
                                            <form:input class="form-control" path="restaurant"/>
                                        </p>
                                        <p>
                                            <form:label class="form-label" path="rating">Rating</form:label>
                                            <form:input class="form-control" path="rating"/>
                                        </p>
                                        <p>
                                            <form:label class="form-label" path="notes">Notes</form:label>
                                            <form:textarea class="form-control" type="number" path="notes"/>
                                        </p>    
                                        <input type="submit" class="btn btn-primary"  value="Submit"/>
                                        <div class="text-center">
                                            <form:errors class="text-danger d-block m-2" path="restaurant"/>
                                            <form:errors class="text-danger d-block m-2" path="rating"/>
                                            <form:errors class="text-danger d-block m-2" path="notes"/>     
                                            <form:errors class="text-danger d-block m-2" path="name"/>
                                        </div>
                                    </form:form>
                                </div>
                            </div>
                        </body>
                    </html>
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

                                <h2 class="h2 text-center my-3">Edit Burger</h2>
                                <div class="row w-50 mx-auto mt-3">
                                    
                                    <form:form action="/burgers/${burger.id}" method="post" modelAttribute="burger">
                                        <input type="hidden" name="_method" value="put">
                                        <p>
                                            <form:label class="form-label" path="name">Burger Name</form:label>
                                            <form:input class="form-control" path="name" value="${burger.name}"/>
                                        </p>
                                        <p>
                                            <form:label class="form-label" path="restaurant">Restaurant Name</form:label>
                                            <form:input class="form-control" path="restaurant" value="${burger.restaurant}"/>
                                        </p>
                                        <p>
                                            <form:label class="form-label" path="rating">Rating</form:label>
                                            <form:input class="form-control" path="rating" value="${burger.rating}"/>
                                        </p>
                                        <p>
                                            <form:label class="form-label" path="notes">Notes</form:label>
                                            <form:textarea class="form-control" type="number" path="notes" value="${burger.notes}"/>
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
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
                            <title>Save Travel</title>
                            <link rel="stylesheet"
                                href="/webjars/bootstrap/css/bootstrap.min.css">
                            <script
                                src="/webjars/bootstrap/js/bootstrap.min.js"></script>
                        </head>
                        <body>
                            <div class="container w-75 mx-auto">
                                <div class="row mt-4">
                                    <div class=" d-flex  justify-content-between my-5
                                        ">
                                        <h1 class="h1 text-primary">Expense
                                            Details</h1>
                                        <a class="h3" href="/">Go Back</a>
                                    </div>


                                    <div class=" display-6 w-75 d-flex 
                                        align-baseline"><span class="w-50">Expense Name</span>
                                        <span>${save.expense}</span>
                                    </div>
                                    <div class=" display-6 w-75 d-flex
                                        align-baseline"><span class="w-50">Expense Descriptions</span>
                                        <span>${save.description}</span>
                                    </div>
                                    <div class=" display-6 w-75 d-flex 
                                        align-baseline"><span class="w-50">Vendor</span>
                                        <span>${save.vendor}</span></div>
                                    <div class=" display-6 w-75 d-flex
                                        align-baseline"><span class="w-50">Amount</span>
                                    <span>$ ${save.amount}</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </body>
            </html>
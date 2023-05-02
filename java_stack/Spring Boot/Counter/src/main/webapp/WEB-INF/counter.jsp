<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Counter</title>
                <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
            </head>
            <body>
                <div class="container mt-5">
                    <h3 class="h3">You have visited <a href="./">localHost</a> ${count} times</h3>
                    <div class="container mt-5">
                        <a href="./" class="btn btn-success">Test anouther visit?</a>
                        <a href="./reset" class="btn btn-danger">Reset</a>
                        <a href="./addtwo" class="btn btn-secondary">+2</a>
                    </div>
                </div>
            </body>
        </html>
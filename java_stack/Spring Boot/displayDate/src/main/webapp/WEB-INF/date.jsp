<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date"%>
    <%@ taglib prefix="c" uri = "http://java.sun.com/jsp/jstl/core"%>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />

	<script type="text/javascript" src="/js/script.js"></script>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div class="container w-50 h-50 m-auto d-flex justify-content-evenly align-items-center">
<button class="btn btn-primary" onclick="dateAlert()"><c:out  value="${date}"/></button>

</div>
</body>
</html>
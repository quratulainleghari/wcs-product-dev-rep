<?xml version="1.0" encoding="UTF-8"?>

<%--
 =================================================================
  Licensed Materials - Property of IBM

  WebSphere Commerce

  (C) Copyright IBM Corp. 2006, 2009 All Rights Reserved.

  US Government Users Restricted Rights - Use, duplication or
  disclosure restricted by GSA ADP Schedule Contract with
  IBM Corp.
 =================================================================
--%>
<%@page contentType="text/xml;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://commerce.ibm.com/foundation" prefix="wcf"%>
<wcf:getData
	type="com.ibm.commerce.infrastructure.facade.datatypes.ConfigurationType"
	var="paymentTypes" expressionBuilder="findByUniqueID">
	<wcf:contextData name="storeId" data="${param.storeId}" />
	<wcf:param name="uniqueId" value="com.ibm.commerce.foundation.paymentType" />
</wcf:getData>
<values>
	<c:forEach var="attribute" items="${paymentTypes.configurationAttribute}">
		<c:forEach var="additionalValue" items="${attribute.additionalValue}">
			<c:if test="${additionalValue.name == 'shortDescription'}">
				<c:set var="shortDesc" value="${additionalValue.value}" />
			</c:if>
		</c:forEach>
		<value displayName="${shortDesc}"><wcf:cdata data="${attribute.primaryValue.value}"/></value>
	</c:forEach>
</values>

package cn.shuyouliu.common;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Provider
public class Exception404Mapper implements ExceptionMapper<Exception> {
	private static final Logger logger = LoggerFactory.getLogger(Exception404Mapper.class);

	@Override
	public Response toResponse(Exception exception) {
		ResponseBuilder responseBuilder = null;
		ExceptionResponse error = new ExceptionResponse();
		error.setCode("E000000");
		error.setMessage(exception.getMessage());
		error.setStatus("error");
		responseBuilder = Response.ok(error).status(Response.Status.INTERNAL_SERVER_ERROR);
		return responseBuilder.build();

	}
}
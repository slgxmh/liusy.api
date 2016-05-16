package cn.shuyouliu.common;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Provider
public class Exception404Mapper implements ExceptionMapper<RuntimeException> {
	private static final Logger logger = LoggerFactory.getLogger(Exception404Mapper.class);
    @Override
    public Response toResponse(RuntimeException e) {
    	logger.debug(" Error:"+ e.getMessage());
    	logger.debug(" "+e.toString());//status:50X,msg:
        return Response.status(404).entity("{\"status\":\"404\",\"msg\":\""+e.toString()+"\"}")
                .type(MediaType.TEXT_PLAIN).build();
    }
}
package cn.shuyouliu.common;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
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
  
        // 用户自定义的运行时异常处理  
        if (exception instanceof BaseException) {  
              
            //获取用户抛出的异常信息  
            String code = exception.getMessage();  
              
            //根据异常key获取对应的中文异常信息  
            String message = MessageUtil.getInstance().getMessage(  
                    (BaseException) exception);  
            Throwable cause = exception.getCause();  
            if (cause != null) {  
                String realReason = cause.getMessage();  
                message += " 可能的原因是：" + realReason + "";  
            }  
            http://blog.csdn.net/niityzu/article/details/51112878
            //自定义异常返回实体bean类  
            ExceptionResponse error = new ExceptionResponse();  
            error.setCode(code);  
            error.setMessage(message);  
            error.setStatus("error");  
  
            responseBuilder = Response.ok(error).status(  
                    ((BaseException) exception).getCode());  
        }  
        // 其他异常  
        else {  
            ExceptionResponse error = new ExceptionResponse();  
            error.setCode("E000000");  
            error.setMessage(exception.getMessage());  
            error.setStatus("error ");  
            responseBuilder = Response.ok(error).status(  
                    Response.Status.INTERNAL_SERVER_ERROR);  
        }  
        return responseBuilder.build();  
	
	@Override
	public Response toResponse(Exception e) {
		
		
		
		
		
		logger.debug(" Error:"+ e.getMessage());
    	logger.debug(" "+e.toString());//status:50X,msg:
        return Response.status(404).entity("{\"status\":\"404\",\"msg\":\""+e.toString()+"\"}")
                .type(MediaType.TEXT_PLAIN).build();
	}
} 
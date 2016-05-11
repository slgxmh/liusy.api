package cn.shuyouliu.reg;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.core.MultivaluedMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CORSResponseFilter
implements ContainerResponseFilter {
	private static final Logger logger = LoggerFactory.getLogger(CORSResponseFilter.class);
	public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext)
			throws IOException {
		
		logger.debug("CORSResponseFilter  method : " +requestContext.getMethod()
			+" UriInfo :"+ requestContext.getUriInfo());
		MultivaluedMap<String, Object> headers = responseContext.getHeaders();
		headers.add("Access-Control-Allow-Origin", "*");
		//headers.add("Access-Control-Allow-Origin", "http://zyhao.com"); //allows CORS (跨域请求 ) requests only coming from zyhao.com		
		headers.add("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");			
		headers.add("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, X-shuyouliu.cn");
		//http://www.cnblogs.com/dojo-lzz/p/4265637.html
	}
}

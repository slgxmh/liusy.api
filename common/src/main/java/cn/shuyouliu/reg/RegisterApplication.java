package cn.shuyouliu.reg;

import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.spring.scope.RequestContextFilter;

import cn.shuyouliu.common.Exception404Mapper;



/**
 * Registers the components to be used by the JAX-RS application
 * 
 * @author ama
 *
 */ 
public class RegisterApplication extends ResourceConfig {

	/**
	 * Register JAX-RS application components.
	 */
	public RegisterApplication() {
		packages("cn.shuyouliu.liusy.action");
		packages("cn.shuyouliu.gen.service");
		register(RequestContextFilter.class);
		register(JacksonFeature.class);
		register(MultiPartFeature.class);
		register(CORSResponseFilter.class);
		register(LoggingResponseFilter.class);
		register(Exception404Mapper.class);
	}
 
}

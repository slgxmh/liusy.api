package cn.shuyouliu.liusy.action;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;

import cn.shuyouliu.liusy.dao.IUserDao;
import cn.shuyouliu.liusy.entity.User;

@Path("/user")
public class UserAPI {
	private IUserDao userDao;
	
	public IUserDao getUserDao() {
		return userDao;
	}

	@Autowired
	public void setUserDao(IUserDao userDao) {
		this.userDao = userDao;
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<User> getUserList() {
		return userDao.getUserList();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public User addUser(User user) {
		userDao.insert(user);
		return user;
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public User getUser(@PathParam("id") int id) {
		return userDao.getUserById(id);
	}
	
	@PUT
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String updateUser(User user) {
		userDao.update(user);
		return "{\"success\":\"true\"}";
	}
	
	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public String deleteUser(@PathParam("id") int id) {
		userDao.deleteUserById(id);
		return "{\"success\":\"true\"}";
	}
	
	@GET
	@Path("/validate/{username}")
	@Produces(MediaType.TEXT_PLAIN)
	public String validate(@PathParam("username") String username) {
		return userDao.getUserByUsername(username) == null ? "true" : "false";
	}
}

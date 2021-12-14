package web

import (
	"docker-manager/web/handler/agent"
	"docker-manager/web/handler/mgr"
	"docker-manager/web/handler/user"
	"docker-manager/web/ws"
	"github.com/gin-gonic/gin"
)

// WsRouter 路由，把URL和执行方法连接起来
var WsRouter = func(router *gin.RouterGroup) {
	router.GET("/agent/ws", AgentTokenInterceptor, ws.WSAgentHandler)
	router.GET("/ws/log", AuthInterceptor, ws.WSManagerHandler)
}

// BaseRoute 基础路由
var BaseRouter = func(router *gin.RouterGroup) {
	router.GET("/base/version", user.VersionHandler)
	AgentRouter(router.Group("/agent"))
	MgrRouter(router.Group("/mgr"))
	UserRouter(router.Group("/user"))
}

var UserRouter = func(router *gin.RouterGroup) {
	router.POST("/login", user.LoginHandler)
	router.POST("/logout", user.LogoutHandler)
	router.GET("/info", AuthInterceptor, user.UserInfoHandler)
	router.GET("/userList", AuthInterceptor, user.UserListHandler)
	router.POST("/alterPassword", AuthInterceptor, user.AlterPasswordHandler)
	router.POST("/resetPassword", AuthInterceptor, user.ResetPasswordHandler)
	router.POST("/changeStatus", AuthInterceptor, user.ChangeStatusHandler)
	router.POST("/addUser", AuthInterceptor, user.AddUserHandler)
	router.POST("/deleteUser", AuthInterceptor, user.DeleteUserHandler)
}

var AgentRouter = func(router *gin.RouterGroup) {
	//router.Use(AuthInterceptor)
	router.POST("/reg", AgentTokenInterceptor, agent.RegDockerHandler)
	router.POST("/containers", AgentTokenInterceptor, agent.ContainersHandler)
	router.POST("/containers/stats", AgentTokenInterceptor, agent.ContainersStatsHandler)
	router.POST("/container/stats", AgentTokenInterceptor, agent.ContainerStatsHandler)
	router.POST("/images", AgentTokenInterceptor, agent.ImagesHandler)
	router.POST("/image/", AgentTokenInterceptor, agent.ImagesHandler)
	router.GET("/config", AgentTokenInterceptor, agent.GetConfig)
	router.POST("/login", agent.LoginHandler)
}

var MgrRouter = func(router *gin.RouterGroup) {

	router.GET("/servers", AuthInterceptor, mgr.GetServers)
	router.GET("/serverNames", AuthInterceptor, mgr.GetServerNames)
	router.GET("/containers", AuthInterceptor, mgr.GetContainers)
	router.POST("/containers/update", AuthInterceptor, mgr.UpdateContainerList)
	router.GET("/stats", AuthInterceptor, mgr.GetStats)
	router.POST("/stats/update", AuthInterceptor, mgr.UpdateStats)
	router.GET("/containerInfos", AuthInterceptor, mgr.GetContainerInfos)
	router.POST("/container/:operator", AuthInterceptor, mgr.ContainerOperatorHandler)

	router.GET("/image/list", AuthInterceptor, mgr.ImageList)

	router.GET("/app/list", AuthInterceptor, mgr.ServiceList)
	router.POST("/app/del", AuthInterceptor, mgr.DeleteService)
	router.POST("/app/update", AuthInterceptor, mgr.UpdateService)
	router.GET("/app/group", AuthInterceptor, mgr.AppGroupList)

	router.GET("/dashboardSize", AuthInterceptor, mgr.GetDashboardSize)
	router.GET("/serverSize", AuthInterceptor, mgr.GetServerSize)
	router.GET("/conatainerSize", AuthInterceptor, mgr.GetContainerSize)
	router.GET("/imageSize", AuthInterceptor, mgr.GetImageSize)
	router.GET("/taskSize", AuthInterceptor, mgr.GetTaskSize)
	router.GET("/appSize", AuthInterceptor, mgr.GetAppSize)

	router.POST("/log/follows", AuthInterceptor, mgr.GetFollowLogList)
	router.POST("/log/start", AuthInterceptor, mgr.LogFollowStart)
	router.POST("/log/close", AuthInterceptor, mgr.LogFollowClose)

	router.POST("/publish", AuthInterceptor, mgr.PublishHandler)
	router.GET("/tasks", AuthInterceptor, mgr.GetTasks)
	router.GET("/cmd", AuthInterceptor, mgr.ContainerCmd)

	router.GET("/config", AuthInterceptor, mgr.GetConfig)
	router.POST("/config/update", AuthInterceptor, mgr.UpdateConfig)
}

package model

import (
	"github.com/gin-gonic/gin"
	"github.com/xiaojun207/go-base-utils/utils"
	"xorm.io/xorm"
)

type Page struct {
	CurrentPage int   `json:"currentPage"`
	PageSize    int   `json:"pageSize"`
	Total       int64 `json:"total"`
}

func (e *Page) IsUse() bool {
	return e.PageSize > 0
}

func (e *Page) SetPageSql(session *xorm.Session) {
	if e.IsUse() {
		session.Limit(e.PageSize, (e.CurrentPage-1)*e.PageSize)
	}
}

func GetPage(c *gin.Context) (page Page) {
	currentPage := c.Query("currentPage")
	pageSize := c.Query("pageSize")
	if currentPage != "" && pageSize != "" {
		return Page{
			CurrentPage: utils.StrToInt(currentPage),
			PageSize:    utils.StrToInt(pageSize),
		}
	}

	return
}
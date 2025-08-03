package routes

import (
	"dnd/wiki"

	"github.com/labstack/echo/v4"
)

func Init(e *echo.Echo) {
	e.GET("/wiki", wiki.GetWiki)
}

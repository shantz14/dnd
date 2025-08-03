package main

import (
	"dnd/routes"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	//e.Use(middleware.Logger())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig {
		AllowOrigins: []string{"https://localhost:5173", "http://localhost:5173"},
	}))

	routes.Init(e)

	e.Logger.Fatal(e.Start(":1323"))
}


package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig {
		AllowOrigins: []string{"https://localhost:5173", "http://localhost:5173"},
	}))

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello from server")
	})

	e.Logger.Fatal(e.Start(":1323"))
}


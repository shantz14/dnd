package wiki

import (
	"fmt"
	"net/http"
	"os"

	"github.com/labstack/echo/v4"
)

func GetWiki(c echo.Context) error {
	content, err := os.ReadFile("./wiki/test.md")
	if err != nil {
		fmt.Println("Broke:" + err.Error())
		return c.String(http.StatusInternalServerError, "Broke")
	}
	return c.String(http.StatusOK, string(content))
}


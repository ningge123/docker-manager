package data

import (
	"docker-manager/pkg/data/base"
	"docker-manager/pkg/data/table"
	"docker-manager/pkg/model"
	"log"
)

func AddService(service table.Service) (err error) {
	var record table.Service
	has, err := base.DBEngine.Table("service").Where("Name=?", service.Name).Get(&record)
	if err != nil {
		log.Println("data.AddService.err:", err)
		return err
	}
	if has {
		base.DBEngine.Table("service").ID(record.Id).Update(service)
	} else {
		_, err = base.DBEngine.Table("service").Insert(&service)
	}
	return
}

func DeleteService(serviceName string) (err error) {
	_, err = base.DBEngine.Exec("delete from service where Name=?", serviceName)
	base.DBEngine.ClearCache(new(table.Service))
	return
}

func GetServices(page *model.Page) (record []table.Service, err error) {
	session := base.DBEngine.Table("service")
	page.FindPage(session, &record)
	return
}

func GetService(name string) (record table.Service, err error) {
	_, err = base.DBEngine.Table("service").Where("Name=?", name).Get(&record)
	if err != nil {
		log.Println("AddService.err:", err)
	}
	return
}
func GetServiceSize() int64 {
	count, err := base.DBEngine.Table("service").Count()
	if err != nil {
		log.Println("GetServiceSize.err:", err)
		return 0
	}
	return count
}

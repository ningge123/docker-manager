package service

import (
	"docker-manager/pkg/data"
	"docker-manager/pkg/model"
	"log"
)

var ipMap = model.SyncMap{}
var useWhiteList = false

func LoadWhiteList() {
	ipList, err := data.GetWhiteIpList()
	if err != nil {
		log.Println("LoadWhiteList.err:", err)
	}
	log.Println("LoadWhiteList.size:", len(ipList))
	ipMap.RemoveAll()
	for _, ip := range ipList {
		ipMap.Store(ip.IP, ip.Id)
	}

	useWhiteList = len(ipList) > 0
}

func IsWhiteIp(reqIp string) bool {
	//log.Println("reqIp:", reqIp)
	if useWhiteList {
		return ipMap.ContainKey(reqIp)
	}
	return true
}

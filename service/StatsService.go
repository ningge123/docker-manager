package service

import (
	"docker-manager/data"
	"docker-manager/data/table"
	"docker-manager/utils"
	utils2 "github.com/xiaojun207/go-base-utils/utils"
)

func UpdateStats(AppId string, json map[string]interface{}) {
	//AppId := c.GetHeader("AppId")
	//log.Printf("%v", &json)
	//ContainerId := json["ContainerId"].(string)
	Name := json["Name"].(string)
	Time := json["Time"].(float64)

	for _, t := range json["Stats"].([]interface{}) {
		v := t.(map[string]interface{})
		v["ContainerId"] = v["id"].(string)
		v["ServerName"] = Name
		v["Time"] = Time
		v["name"] = utils.TrimContainerName(v["name"].(string))
		var stats table.ContainerStats
		utils2.MapToStruct(v, &stats)

		stats.CpuStats = v["cpu_stats"].(map[string]interface{})
		stats.PrecpuStats = v["precpu_stats"].(map[string]interface{})
		//stats.Networks = v["networks"].(map[string]interface{})
		stats.StorageStats = v["storage_stats"].(map[string]interface{})
		stats.PidsStats = v["pids_stats"].(map[string]interface{})
		stats.MemoryStats = v["memory_stats"].(map[string]interface{})

		//cpu := utils.FormatCpu(stats.CpuStats, stats.PrecpuStats)
		//memory := utils.FormatMemory(stats.MemoryStats)

		//log.Println("", v["name"], cpu, memory)
		data.AddContainerStats(stats)
	}
}

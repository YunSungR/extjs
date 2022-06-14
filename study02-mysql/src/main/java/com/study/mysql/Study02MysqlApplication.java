package com.study.mysql;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages={"com.study.mysql"})
@MapperScan(basePackages={"com.study.mysql.dao"})
@SpringBootApplication
public class Study02MysqlApplication {

	public static void main(String[] args) {
		SpringApplication.run(Study02MysqlApplication.class, args);
	}

}

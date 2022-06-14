package com.study.mysql.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.study.mysql.model.MainVO;
import com.study.mysql.service.MainService;

@Controller
public class MainController {

	@Autowired
	MainService service;
	
	@RequestMapping("/")
	public String index() {
		return "index";
	}
	@ResponseBody
	@RequestMapping("/list")
	public Map<String,Object> list(Model model) {
		Map<String,Object> map=new HashMap<String,Object>();
		/* ArrayList<MainVO> list=service.list(); */
		ArrayList<Map<String,Object>> test=service.test();
		map.put("success", true);
		map.put("items", test);
		return map;
	}
	@ResponseBody
	@RequestMapping("/insert")
	public String insert(MainVO vo) {
		double avg=(vo.getKorean()+vo.getEnglish()+vo.getMath()+vo.getResearch())/4;
		vo.setAvg(avg);
		
		service.insert(vo);
		
		
		return "success";
	}
	@ResponseBody
	@RequestMapping("/update")
	public String update(MainVO vo) {
		
		double avg=(vo.getKorean()+vo.getEnglish()+vo.getMath()+vo.getResearch())/4;
		vo.setAvg(avg);
		service.update(vo);
		
		return "success";
	}
	@ResponseBody
	@RequestMapping("delete")
	public String delete(@RequestParam("len") int len) {
		System.out.println("len "+len);
		service.delete(len);
		
		return "success";
	}
}

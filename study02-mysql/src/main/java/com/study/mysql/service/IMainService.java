package com.study.mysql.service;

import java.util.ArrayList;
import java.util.Map;

import com.study.mysql.model.MainVO;

public interface IMainService {

	public ArrayList<MainVO> list();
	public ArrayList<Map<String,Object>> test();
	public void insert(MainVO vo);
	public void update(MainVO vo);
	public void delete(int len);
}

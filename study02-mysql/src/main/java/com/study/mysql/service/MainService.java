package com.study.mysql.service;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.study.mysql.dao.IMainDAO;
import com.study.mysql.model.MainVO;
@Service
public class MainService implements IMainService {

	@Autowired
	IMainDAO dao;
	@Override
	public ArrayList<MainVO> list() {
		// TODO Auto-generated method stub
		return dao.list();
	}
	@Override
	public ArrayList<Map<String, Object>> test() {
		// TODO Auto-generated method stub
		return dao.test();
	}
	@Override
	public void insert(MainVO vo) {
		// TODO Auto-generated method stub
		dao.insert(vo);
		
	}
	@Override
	public void update(MainVO vo) {
		// TODO Auto-generated method stub
		dao.update(vo);
	}
	@Override
	public void delete(int len) {
		// TODO Auto-generated method stub
		dao.delete(len);
		
	}
	
}


	Ext.onReady(function(){
	

	 Ext.create('Ext.grid.Panel',{
		renderTo:Ext.getBody(),
		id:'gird_object',
		tbar:[/*{
		xtype:'button',
		text:'데이터 호출',
		handler:function(){
			Ext.Ajax.request({
			url:'/com',
			success:function(res){
				var api=Ext.decode(res.responseText);
				console.log("api :" ,api);
			}
			})
		}
		},*/{
		xtype:'button',
		text:'수정',
		handler:function(){
			
		edit=Ext.create('Ext.window.Window',{
				autoShow : true,
			title:'수정',
			modal:true,
			 
			items:
			 new Ext.FormPanel({
			 	width:'500',
			height:'100%',
			autoHeight:true,
			items:[{
			xtype:'textfield',
			fieldLabel:'이름',
			id:'name',
			name:'name',
			margin:'10 10 10 0',
			height:'20',
			value:Ext.getCmp('gird_object').getStore().getAt(Ext.getCmp('gird_object').store.indexOf( Ext.getCmp('gird_object').getSelectionModel().getSelection()[0])).get('name'),
			validator: function(v) { // validator속성이 키입력시 발생
				if(/[0-9]/g.test(v)){
				v = v.replace(/[0-9]/g,'');
				}
				
			this.setValue(v);
			return true;
	
			}
			},{
			xtype:'textfield',
			fieldLabel:'국어',
			id:'korean',
			name:'korean',
			margin:'10 10 10 0',
			height:'20',
			value:Ext.getCmp('gird_object').getStore().getAt(Ext.getCmp('gird_object').store.indexOf( Ext.getCmp('gird_object').getSelectionModel().getSelection()[0])).get('korean'),
			validator: function(v) { // validator속성이 키입력시 발생
				if(/[^0-9]/g.test(v)){
				v = v.replace(/[^0-9]/g,'');
				}
			this.setValue(Number(v));
			if(Ext.getCmp('korean').getValue()>100){
				this.setValue(Number(100));
				return true;
			}
			return true;
	
			}
			},{
			xtype:'textfield',
			fieldLabel:'수학',
			id:'math',
			name:'math',
			margin:'10 10 10 0',
			height:'20',
			value:Ext.getCmp('gird_object').getStore().getAt(Ext.getCmp('gird_object').store.indexOf( Ext.getCmp('gird_object').getSelectionModel().getSelection()[0])).get('math'),
			validator: function(v) { // validator속성이 키입력시 발생
				if(/[^0-9]/g.test(v)){
				v = v.replace(/[^0-9]/g,'');
				}
			this.setValue(Number(v));
			if(Ext.getCmp('math').getValue()>100){
				this.setValue(Number(100));
				return true;
			}
			return true;
	
			}
			},{
			xtype:'textfield',
			fieldLabel:'영어',
			id:'english',
			name:'english',
			margin:'10 10 10 0',
			height:'20',
			value:Ext.getCmp('gird_object').getStore().getAt(Ext.getCmp('gird_object').store.indexOf( Ext.getCmp('gird_object').getSelectionModel().getSelection()[0])).get('english'),
			validator: function(v) { // validator속성이 키입력시 발생
				if(/[^0-9]/g.test(v)){
				v = v.replace(/[^0-9]/g,'');
				}
			this.setValue(Number(v));
			if(Ext.getCmp('english').getValue()>100){
				this.setValue(Number(100));
				return true;
			}
			return true;
	
			}
			},{
			xtype:'textfield',
			fieldLabel:'탐구',
			id:'research',
			name:'research',
			margin:'10 10 10 0',
			height:'20',
			value:Ext.getCmp('gird_object').getStore().getAt(Ext.getCmp('gird_object').store.indexOf( Ext.getCmp('gird_object').getSelectionModel().getSelection()[0])).get('research'),
			validator: function(v) { // validator속성이 키입력시 발생
				if(/[^0-9]/g.test(v)){
				v = v.replace(/[^0-9]/g,'');
				}
			this.setValue(Number(v));
			if(Ext.getCmp('research').getValue()>100){
				this.setValue(Number(100));
				return true;
			}
			return true;
	
			}
			},{
			xtype:'button',
			text:'취소',
			margin:'0 10 10 10',
			handler:function(btn){
				btn.up('window').close();
			}
			},
			{
			xtype:'button',
			text:'확인',
			margin:'0 10 10 10',
			handler:function(btn){
				/*var grid=Ext.getCmp('gird_object');
				record = grid.getSelectionModel().getSelected();
				Ext.getCmp('Name').value(record.get['Name']);
				console.log(record.get['Korean'])*/
				var len=Ext.getCmp('gird_object').getSelection().length;
				var edit_record=Ext.getCmp('gird_object').getSelection();
				var store= Ext.getCmp('gird_object').getStore();
				var form=btn.up('form');
				console.log(":sdas",Ext.getCmp('gird_object').getStore().getAt(Ext.getCmp('gird_object').store.indexOf( Ext.getCmp('gird_object').getSelectionModel().getSelection()[0])).get('num'));
				
				/*
				store[len-1].set('name',form.getForm().findField('name').getSubmitValue());
				store[len-1].set('korean',form.getForm().findField('korean').getSubmitValue());
				store[len-1].set('math',form.getForm().findField('math').getSubmitValue());
				store[len-1].set('english',form.getForm().findField('english').getSubmitValue());
				store[len-1].set('research',form.getForm().findField('research').getSubmitValue());*/
				
				/*edit_record.data.Name=form.getForm().findField('Name').getSubmitValue();
				edit_record.data.Korean=form.getForm().findField('Korean').getSubmitValue();
				edit_record.data.Math=form.getForm().findField('Math').getSubmitValue();
				edit_record.data.English=form.getForm().findField('English').getSubmitValue();
				edit_record.data.Research=form.getForm().findField('Research').getSubmitValue();
				var edit_record={
					Name:form.getForm().findField('Name').getSubmitValue(),
					Korean:form.getForm().findField('Korean').getSubmitValue(),
					Math:form.getForm().findField('Math').getSubmitValue(),
					English:form.getForm().findField('English').getSubmitValue(),
					Research:form.getForm().findField('Research').getSubmitValue()
				}*/
				/*Ext.getCmp('grdServiceLine').getView().refresh();*/
			
				
				
				Ext.Ajax.request({
				url:'/update',
				method:'post',
				params:{
					name:form.getForm().findField('name').getSubmitValue(),
					korean:form.getForm().findField('korean').getSubmitValue(),
					math:form.getForm().findField('math').getSubmitValue(),
					english:form.getForm().findField('english').getSubmitValue(),
					research:form.getForm().findField('research').getSubmitValue(),
					len:Ext.getCmp('gird_object').getStore().getAt(Ext.getCmp('gird_object').store.indexOf( Ext.getCmp('gird_object').getSelectionModel().getSelection()[0])).get('num')
				},
				success:function(){
					store.load();
					btn.up('window').close();
				}
				})
				
			}
			}]
			})
			
			})
			
		}
		},{
		xtype:'button',
		text:'삭제',
		handler:function(btn){
			var len=Ext.getCmp('gird_object').getSelection().length;
			var store= Ext.getCmp('gird_object').getStore();
			
			/*console.log(grid);
			var remove_rex=grid.getSelection();
			console.log(remove_rex);*/

			Ext.Ajax.request({
				url:'/delete',
				method:'post',
				params:{
					len:Ext.getCmp('gird_object').getStore().getAt(Ext.getCmp('gird_object').store.indexOf( Ext.getCmp('gird_object').getSelectionModel().getSelection()[0])).get('num')
				},
				success:function(){
					Ext.Msg.alert('삭제','삭제되었습니다');
					store.load();
				}
				})
			
			/*var row=grid.getSelection()[0];*/
			
		}
		},{
		xtype:'button',
		text:'추가',
		handler:function(){
			Ext.create('Ext.window.Window',{
				autoShow : true,
				modal:true,
			title:'추가',
			items:
		add=new Ext.FormPanel({
			 	width:'500',
			height:'100%',
			autoHeight:true,
			items:[{
			xtype:'textfield',
			fieldLabel:'이름',
			vtype:' engKorOnly',
			id:'name',
			name:'name',
			margin:'10 10 10 0',
			height:'20',
			validator: function(v) { // validator속성이 키입력시 발생
				if(/[0-9]/g.test(v)){
				v = v.replace(/[0-9]/g,'');
				}
				
			this.setValue(v);
			return true;
	
			}
			},{
			xtype:'textfield',
			fieldLabel:'국어',
			id:'korean',
			name:'korean',
			margin:'10 10 10 0',
			height:'20',
			validator: function(v) { // validator속성이 키입력시 발생
				if(/[^0-9]/g.test(v)){
				v = v.replace(/[^0-9]/g,'');
				}
			this.setValue(Number(v));
			if(Ext.getCmp('korean').getValue()>100){
				this.setValue(Number(100));
				return true;
			}
			return true;
	
			}
			},{
			xtype:'textfield',
			fieldLabel:'수학',
			id:'math',
			name:'math',
			margin:'10 10 10 0',
			height:'20',
			validator: function(v) { // validator속성이 키입력시 발생
				if(/[^0-9]/g.test(v)){
				v = v.replace(/[^0-9]/g,'');
				}
			this.setValue(Number(v));
			if(Ext.getCmp('math').getValue()>100){
				this.setValue(Number(100));
				return true;
			}
			return true;
	
			}
			},{
			xtype:'textfield',
			fieldLabel:'영어',
			id:'english',
			name:'english',
			margin:'10 10 10 0',
			height:'20',
			validator: function(v) { // validator속성이 키입력시 발생
				if(/[^0-9]/g.test(v)){
				v = v.replace(/[^0-9]/g,'');
				}
			this.setValue(Number(v));
			if(Ext.getCmp('english').getValue()>100){
				this.setValue(Number(100));
				return true;
			}
			return true;
	
			}
			},{
			xtype:'textfield',
			fieldLabel:'탐구',
			id:'research',
			name:'research',
			margin:'10 10 10 0',
			height:'20',
			validator: function(v) { // validator속성이 키입력시 발생
				if(/[^0-9]/g.test(v)){
				v = v.replace(/[^0-9]/g,'');
				}
			this.setValue(Number(v));
			if(Ext.getCmp('research').getValue()>100){
				this.setValue(Number(100));
				return true;
			}
			return true;
	
			}
			},{
			xtype:'button',
			text:'취소',
			margin:'0 10 10 10',
			handler:function(btn){
				btn.up('window').close();
			}
			},
			{
			xtype:'button',
			text:'확인',
			margin:'0 10 10 10',
			handler:function(btn){
				var store= Ext.getCmp('gird_object').getStore();
				var len=store.getCount();
				var form=btn.up('form')
				
				/*console.log(form.getForm().findField('research').getSubmitValue())
				var new_record={
					Name:form.getForm().findField('name').getSubmitValue(),
					Korean:form.getForm().findField('korean').getSubmitValue(),
					Math:form.getForm().findField('math').getSubmitValue(),
					English:form.getForm().findField('english').getSubmitValue(),
					Research:form.getForm().findField('research').getSubmitValue()
				}
				store.add(new_record);
				
				
				store.insert(len+1,new_record)
				btn.up('window').close();*/
				
				Ext.Ajax.request({
				url:'/insert',
				method:'post',
				params:{
					name:form.getForm().findField('name').getSubmitValue(),
					korean:form.getForm().findField('korean').getSubmitValue(),
					math:form.getForm().findField('math').getSubmitValue(),
					english:form.getForm().findField('english').getSubmitValue(),
					research:form.getForm().findField('research').getSubmitValue()
				},
				success:function(){
					store.load();
					btn.up('window').close();
				}
				})
			}
			}]
			})
			})
			
		}
		}],
		/*items:[{
		xtype:'grid',
		columns:[{
			flex:1,
			text:'학번',
			dataIndex:'Number'
		},
		{
			flex:1,
			text:'이름',
			dataIndex:'Name'
		},
		{
			flex:1,
			text:'국어',
			dataIndex:'Korean',
			xtype:'numbercolumn'
		},
		{
			flex:1,
			text:'수학',
			dataIndex:'Math',
			xtype:'numbercolumn'
		},
		{
			flex:1,
			text:'영어',
			dataIndex:'English',
			xtype:'numbercolumn'
		},
		{
			flex:1,
			text:'탐구',
			dataIndex:'Research',
			xtype:'numbercolumn'
		},
		{
			flex:1,
			text:'평균',
			dataIndex:'Avg',
			xtype:'numbercolumn'
			
			
		}
		
		],
		store:{
			autoLoad:true,
			fields:['Number','Name','Korean','Math','English','Research','Avg'],
			data:[
			['0000001','홍길동','85','89','95','88','54'],['0000002','성춘향','72','56','64','78','95']
			,['0000003','두리','65','86','74','72','65'],['0000004','나리','52','96','86','82','93']
			]
		}
		
		}]*/
		store:Ext.create(
		'Ext.data.Store',{
			autoLoad:true,
		 storeId:'dataStore',
		 proxy:{
		 	type:'ajax',
		     api: {
        	read:'/list'
        }
		 	
		 	,
		 	reader:{
		 	       type: 'json', 
            successProperty: 'success',
            rootProperty:'items'
    

		 	}
		 	

		 }
		 
			/*fields:[{
			name:'Num',
			fieldId:'Num'
			},
			{
			name:'Name'
			},
			{
			name:'Korean',
			type:'number'
			},
			{
			name:'Math',
			type:'number'
			},
			{
			name:'English',
			type:'number'
			},
			{
			name:'Research',
			type:'number'
			},
			{
			name:'Avg',
			type:'number'
			
			}
			],
			data:[
			['0000001','홍길동','85','89','95','88'],['0000002','성춘향','72','56','64','78']
			,['0000003','두리','65','86','74','72'],['0000004','나리','52','96','86','82']
			]*/
		
		}
		),
		selModel:Ext.create('Ext.selection.CheckboxModel',{
		 mode: 'Single',
    checkOnly: true
		}),
		xtype:'grid',
		
		columns:[{
			flex:1,
			text:'학번',
			id:'num',
			dataIndex:'num',
			align:'center'/*,
			renderer:function(value,meta,record,rowIndex,colIndex){
				return Ext.String.format('000000'+(rowIndex+1),"rowIndex");
			}*/
			
		},
		{
			flex:1,
			text:'이름',
			dataIndex:'name',
			align:'center'
		},
		{
			flex:1,
			text:'국어',
			dataIndex:'korean',
			xtype:'numbercolumn',
			align:'center',
			maxValue:100,
			minValue:0
		},
		{
			flex:1,
			text:'수학',
			dataIndex:'math',
			xtype:'numbercolumn',
			align:'center',
			maxValue:100,
			minValue:0
		},
		{
			flex:1,
			text:'영어',
			dataIndex:'english',
			xtype:'numbercolumn',
			align:'center',
			maxValue:100,
			minValue:0
		},
		{
			flex:1,
			text:'탐구',
			dataIndex:'research',
			xtype:'numbercolumn',
			align:'center'
		},
		{
			flex:1,
			text:'평균',
			dataIndex:'avg',
			xtype:'numbercolumn',
			renderer:function(f,meta,record){
				var kr =record.get("korean");
				var math =record.get("math");
				var en =record.get("english");
				var rs =record.get("research");
				var average=0;
				average=(kr+math+en+rs)/4;
				
				return Ext.util.Format.number(average,'0,000.00');
				
			},
			align:'center'
			
			
		}
		
		]
		
		
	});
	

});

/*

 Ext.onReady(function(){
 	Ext.create('Ext.grid.Panel',{
 		renderTo : Ext.getBody(),
 		columns : [
 			{
 				text : '제목1',
 				flex : 1,
 				dataIndex : 'title1'
 			},
 			{
 				text : '제목2',
 				flex : 1,
 				dataIndex : 'title2'
 			}
 		],
 		store : Ext.create('Ext.data.Store',{
 			fields : [
	 			{
	 				name : 'title1'
	 			},
	 			{
	 				name : 'title2'
	 			}
 			],
 			data : [
	 			
	 				['1','2','3'],
	 				['2','5','6']
	 			
 			],
 			proxy : {
 				type : 'memory'
 			}
 			
 		})
 	})
 })
*/
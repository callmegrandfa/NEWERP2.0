const vm=new Vue({
	el:".short-basic-data",
	data(){
		return{
			highSearchShow:false,
			canEdit:false,
			week1:true,
			week2:true,
			isChoose:true,
			noChoose:false,
			inputIndex:'',
			alreadyDo:['已审核','已送审','已结案','已作废','已审核','已送审','已结案','已作废','已审核','已送审','已结案','已作废'],
			companyTree:[{
				a: '公司1',
				a1:['子公司1','子公司2','子公司3','子公司4','子公司5']
				},  
				 {
				    a: '公司2',
					a1:['子公司1','子公司2','子公司3','子公司4','子公司5']
				}],
			tableData: [{
				sequence: '1',
				planCode: 'A001',
				planName: '哈哈',
				remark:'12',
				ifAllow:true,
				updateDate:'2017.12.20'
				}, {
				    sequence: '2',
				    planCode: 'A002',
				    planName: '哈哈',
				    remark:'1234',
				    ifAllow:false,
				    updateDate:'2017.12.20'
				}, {
				    sequence: '3',
				    planCode: 'A003',
				    planName: '哈哈',
				    remark:'faf',
				    ifAllow:false,
				    updateDate:'2017.12.20'
				}, {
				    sequence: '4',
				    planCode: 'A004',
				    planName: '哈哈',
				    remark:'fasdg',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}, {
				    sequence: '5',
				    planCode: 'A005',
				    planName: '哈哈',
				    remark:'fasdg',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}, {
				    sequence: '6',
				    planCode: 'A006',
				    planName: '哈哈',
				    remark:'fasdg',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}, {
				    sequence: '7',
				    planCode: 'A007',
				    planName: '哈哈',
				    remark:'fasdg',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}, {
				    sequence: '8',
				    planCode: 'A008',
				    planName: '哈哈',
				    remark:'fasdg',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}, {
				    sequence: '9',
				    planCode: 'A009',
				    planName: '哈哈',
				    remark:'fasdg',
				    ifAllow:true,
				    updateDate:'2017.12.20'
				}],
				isEdit:-1,//表格中input编辑
				ifUpdate:true,//编辑按钮（是否可见）
				ifSave:false,//保存按钮（是否可见）
			
		}
		
	},
	methods:{
		handleEdit:function(index){
			this.isEdit=index;//当选中行的索引值与列表中索引值相同，则编辑！
			//this.ifUpdate=false;
			//this.ifSave=true
		},
		handleDelete:function(index){
			this.tableData.splice(index,1);
		},
		searchShow:function(){
			let self = this;
			self.highSearchShow = true;
		},
		closeHighSearch:function(){
			let self = this;
			self.highSearchShow = false;
			console.log(self.highSearchShow)
		},
		doEdit:function(){
			let self = this;
			self.canEdit = true;
		},
		noEdit:function(){
			let self = this;
			self.canEdit = !self.canEdit;
		},
		cancelweek1:function(){
			let self = this;
			self.week1 = false;
		},
		cancelweek2:function(){
			let self = this;
			self.week2 = false;
		},
		changeChoose:function(index){
			let self = this;
			self.inputIndex == index;
			self.isChoose = !self.isChoose;
			self.noChoose = !self.noChoose;
		},
	},
});

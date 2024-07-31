// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  data: {
    unit:0,
    subjectPrice:"",
    subjectWeight:"",
    unitRange:['g','kg'],
    currentPrice:0
  },
  methods: {
    // 事件处理函数
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs',
      })
    },
    getWeight(e:any){
      this.setData({subjectWeight:e.detail.value})
    },
    getPrice(e:any){
      this.setData({subjectPrice:e.detail.value})
    },
    changePrice(){
      let nowWeight = this.data.unit == 0 ? this.data.subjectWeight :this.data.subjectWeight*1000;
      let currentP = this.data.subjectPrice * (500/nowWeight) || 0;
      this.setData({currentPrice : currentP});
    },
    onChangeUnit(e: any){
      this.setData({unit : e.detail.value})
      this.changePrice()
    }
  },
})

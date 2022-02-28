<template>
    <el-row style="margin-top:20px">
        <el-col :span="12" v-for="(o,i) in indexData" :key="i">
          {{ o }}
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>{{o.name}}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <img :src= o.img class="image">
                <div class="text item">
                    现值：{{o.price}}<br>
                    百分比：{{o.arrow=='↑'?'+':'-'}}{{(o.percent*100).toFixed(2)}}%<br>
                    涨跌：{{o.updown}}{{o.arrow}}<br>
                    成交量：{{o.volume}}<br>
                    成交额：{{o.turnover}}<br>
                    时间：{{o.time}}
                    {{currentDate}}
                </div>
            </el-card>

        </el-col>
    </el-row>

</template>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }

  .box-card {
    margin: 5px;
  }
</style>

<script>
export default {
  data () {
    return {
      indexData: { "name": "0", "price": "0", "arrow": "0", "percent": "0", "updown": "0", "volume": "0", "turnover": "0", "time": "0" }, "1": { "name": "1", "price": "1", "arrow": "1", "percent": "1", "updown": "1", "volume": "1", "turnover": "1", "time": "1" }, "2": { "name": "2", "price": "2", "arrow": "2", "percent": "2", "updown": "2", "volume": "2", "turnover": "2", "time": "2" }, "3": { "name": "3", "price": "3", "arrow": "3", "percent": "3", "updown": "3", "volume": "3", "turnover": "3", "time": "3" },
      currentDate: new Date()
    }
  },
  methods: {
    getindexdata () {
      const that = this
      this.getRequest('/api/finance/getIndexInfo').then(resp => {
        if (resp && resp.status === 200) {
          // var data = resp.data
          // that.indexData = resp.data
          // for (var key in [1,2,3,4]) {
          //   that.indexData[key] = {name: key, price: key, arrow: key, percent: key,
          //   updown: key, volume: key, turnover: key, time: key}
          //   // console.log(that.indexData[key])
          // }
          // for (var key in that.indexData) {
          //   that.indexData[key].img = '/api/finance/getImg?imgName=' + that.indexData[key].code
          // }
        }
      })
    }
  },
  created: function () {
    this.getindexdata()
  }
}
</script>

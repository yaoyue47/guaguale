class Scratch {
  constructor(page, opts) {
    opts = opts || {};
    this.page = page;
    this.canvasId = opts.canvasId || 'canvas';
    this.width = opts.width || 300;
    this.height = opts.height || 300;
    this.maskColor = opts.maskColor || '#dddddd';
    this.size = opts.size || 15,
      this.r = this.size * 2;
    this.area = this.r * this.r;
    this.showPercent = opts.showPercent || 0.2; //刮开多少比例显示全部
    this.rpx = wx.getSystemInfoSync().windowWidth / 750; //设备缩放比例
    this.scale = opts.scale || 0.7;
    this.totalArea = this.width * this.height;
    this.startCallBack = opts.startCallBack || false; //第一次刮时触发刮奖效果
    this.overCallBack = opts.overCallBack || false; //刮奖完触发
    this.magicString = opts.magicString //魔法字符串，解决重复new对象时 touchStart、Move、End时函数被覆盖问题
    this.init();
  }
  init() {
    let self = this;
    this.show = false;
    this.clearPoints = [];
    const query = wx.createSelectorQuery();
    //console.log(this.canvasId);
    query.select(this.canvasId)
      .fields({
        node: true,
        size: true
      })
      .exec((res) => {
        this.canvas = res[0].node;
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = res[0].width;
        this.canvas.height = res[0].height;
        self.drawMask();
        self.bindTouch();
      })
  }
  drawMask() {
    let self = this;
    this.ctx.fillStyle = this.maskColor;
    this.ctx.fillRect(0, 0, self.width * self.rpx, self.height * self.rpx);
  }
  bindTouch() { //magicString判断 
    if (this.magicString == "view1") {
      this.page.touchStart1 = (e) => {
        this.eraser(e, true);
      }
      this.page.touchMove1 = (e) => {
        this.eraser(e, false);
      }
      this.page.touchEnd1 = (e) => {
        if (this.show) {
          if (this.overCallBack) this.overCallBack();
          this.ctx.clearRect(0, 0, this.width * this.rpx, this.height * this.rpx);
        }
      }
    }
    if (this.magicString == "view2") {
      this.page.touchStart2 = (e) => {
        this.eraser(e, true);
      }
      this.page.touchMove2 = (e) => {
        this.eraser(e, false);
      }
      this.page.touchEnd2 = (e) => {
        if (this.show) {
          if (this.overCallBack) this.overCallBack();
          this.ctx.clearRect(0, 0, this.width * this.rpx, this.height * this.rpx);
        }
      }
    }
    if (this.magicString == "view3") {
      this.page.touchStart3 = (e) => {
        this.eraser(e, true);
      }
      this.page.touchMove3 = (e) => {
        this.eraser(e, false);
      }
      this.page.touchEnd3 = (e) => {
        if (this.show) {
          if (this.overCallBack) this.overCallBack();
          this.ctx.clearRect(0, 0, this.width * this.rpx, this.height * this.rpx);
        }
      }
    }
    if (this.magicString == "view4") {
      this.page.touchStart4 = (e) => {
        this.eraser(e, true);
      }
      this.page.touchMove4 = (e) => {
        this.eraser(e, false);
      }
      this.page.touchEnd4 = (e) => {
        if (this.show) {
          if (this.overCallBack) this.overCallBack();
          this.ctx.clearRect(0, 0, this.width * this.rpx, this.height * this.rpx);
        }
      }
    }
  }
  eraser(e, bool) {
    let len = this.clearPoints.length;
    let count = 0;
    let x = e.touches[0].x,
      y = e.touches[0].y;
    let x1 = x - this.size;
    let y1 = y - this.size;
    if (bool) {
      this.clearPoints.push({
        x1: x1,
        y1: y1,
        x2: x1 + this.r,
        y2: y1 + this.r
      })
    }
    for (let item of this.clearPoints) {
      if (item.x1 > x || item.y1 > y || item.x2 < x || item.y2 < y) {
        count++;
      } else {
        break;
      }
    }
    if (len === count) {
      this.clearPoints.push({
        x1: x1,
        y1: y1,
        x2: x1 + this.r,
        y2: y1 + this.r
      });
    }

    //添加计算已清除的面积，达到标准值后，设置刮卡区域刮干净
    let clearNum = parseFloat(this.r * this.r * len) / parseFloat(this.scale * this.totalArea);
    if (!this.show) {
      this.page.setData({
        clearNum: parseFloat(this.r * this.r * len) / parseFloat(this.scale * this.totalArea)
      })
    };
    if (this.startCallBack) this.startCallBack();
    //console.log(clearNum)
    if (clearNum > this.showPercent) {
      this.show = true;
    }
    this.clearArcFun(x, y, this.r, this.ctx);
  }
  clearArcFun(x, y, r, ctx) {
    let stepClear = 1;
    clearArc(x, y, r);
    function clearArc(x, y, radius) {
      let calcWidth = radius - stepClear;
      let calcHeight = Math.sqrt(radius * radius - calcWidth * calcWidth);

      let posX = x - calcWidth;
      let posY = y - calcHeight;

      let widthX = 2 * calcWidth;
      let heightY = 2 * calcHeight;

      if (stepClear <= radius) {
        ctx.clearRect(posX, posY, widthX, heightY);
        stepClear += 1;
        clearArc(x, y, radius);
      }
    }
  }
}

export default Scratch
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>水平居中</h1>
        <h2>方法一：父元素text-align 子元素必须是inline-block或者inline</h2>
        <div className="container-1 containerCommon">
          <div className="item-1 itemCommon">DEMO</div>
        </div>
        <h2>方法二：margin:0 auto</h2>
        <div className="containerCommon">
          <div className="item-2 itemCommon">DEMO</div>
        </div>
        <h2>
          方法三：父元素设置position:relative，子元素通过absolute+left+transform
          水平居中
          注意：这里居中的只是子元素的左边线，为了让整个子元素实现真正意义的居中，必须调整至子元素的中线居中，也就是必须向左调整半个子元素宽度的距离
        </h2>
        <div className="container-3 containerCommon">
          <div className="item-3 itemCommon">DEMO</div>
        </div>
        <h2>
          方法四：父元素设置position:relative，子元素通过absolute+left+margin
          水平居中
          注意：这个方法和上面方法三类似，唯一不同的是修正子元素整体定位时，这里用的是margin-left:-xxx，而方法三用的是css3的transform，方法三可以不用知道子元素的宽度，
          方法四必须知道子元素的宽度
        </h2>
        <div className="container-4 containerCommon">
          <div className="item-4 itemCommon">DEMO</div>
        </div>
        <h2>方法五：flex布局</h2>
        <div className="container-5 containerCommon">
          <div className="itemCommon">DEMO</div>
        </div>

        <h1>垂直居中</h1>
        <h2>
          方法一：父元素设置position:relative，子元素通过absolute+top+transform
          垂直居中 注意：这个方法和水平居中方法三类似，所以也必须调整中心线居中
        </h2>
        <div className="container-6 containerCommon">
          <div className="item-6 itemCommon">DEMO</div>
        </div>
        <h2>
          方法二：父元素设置position:relative，子元素通过absolute+top+margin-top:-xxx
          垂直居中 注意：这个方法和水平居中方法四类似，所以也必须调整中心线居中
        </h2>
        <div className="container-7 containerCommon">
          <div className="item-7 itemCommon">DEMO</div>
        </div>
        <h2>方法三：设置line-height 文本垂直居中</h2>
        <div className="container-8 containerCommon">
          asdasdasdasasd sadasdsa sadsadasd sad asd as
        </div>
        <h2>
          方法四：display:table-cell和vertical-algin: middle 进行垂直居中
          注意1：图片的垂直居中也是用这个属性vertical-algin: middle
          注意2：table-cell无法自动填充父级元素，除非父级元素是display:table，所以这里也就无法使用width:100%，只能手动设置px宽度,
          如果想要自适应父元素，也可以，只需要在外层再套一层父元素，设置为display:table即可
        </h2>
        <div className="container-9 containerCommon">
          <div className="itemCommon">DEMO</div>
        </div>
        <h2>方法五：flex布局</h2>
        <div className="container-10 containerCommon">
          <div className="itemCommon">DEMO</div>
        </div>

        <h1>总结：水平垂直居中</h1>
        <h2>
          方法一：综合定位方案1
          这个方法就是通过父元素设置position:relative，子元素通过absolute+left+top+margin或transform来达到布局要求,
          使用margin来调整位置需要知道子元素宽度，使用transform: translate(-50%,
          -50%)来调整位置，需要考虑适配性
        </h2>
        <div className="container-11 containerCommon">
          <div className="item-11 itemCommon">DEMO</div>
        </div>
        <h2>
          方法二：综合定位方案2
          这个方法就是通过父元素设置position:relative，子元素通过left:0,right:0,top:0,bottom:0,margin:auto来达到布局要求,
        </h2>
        <div className="container-12 containerCommon">
          <div className="item-12 itemCommon">DEMO</div>
        </div>
        <h2>
          方法三：利用display:table和display:table-cell特性
          说明：table-cell会自动填充table的空间，垂直居中使用vertical-align:
          middle;，水平居中可以使用行内元素的text-align:
          center;，也可以在子元素设置 margin: 0 auto;
        </h2>
        <div className="container-13 containerCommon">
          <div className="item-13 itemCommon">DEMO</div>
        </div>
        <h2>方法四：flex布局</h2>
        <div className="container-14 containerCommon">
          <div className="itemCommon">DEMO</div>
        </div>
      </div>
    );
  }
}

export default App;

(window.webpackJsonpdemo2=window.webpackJsonpdemo2||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),r=n(7),u=n.n(r),c=(n(13),n(1)),o=n(2),i=n(4),s=n(3),m=n(5),b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.overTen?a.a.createElement("h3",null,"You beat 10!",a.a.createElement("button",{onClick:this.props.onReset},"Reset")):null}}]),t}(l.Component),h=(n(14),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).handleClick=function(e){var t,l;null==n.state.sign?(t=10*n.state.number1+e,n.setState({number1:t})):(l=10*n.state.number2+e,n.setState({number2:l}))},n.handleSign=function(e){n.setState({sign:"+"})},n.result=function(e){var t;t=n.state.number1+n.state.number2,console.log(n.number1),n.setState({result:t})},n.cancel=function(e){n.setState({number1:null,number2:null,result:0,sign:null})},n.state={number1:null,number2:null,result:0,sign:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.result,n=this.state.number1,l=this.state.number2,r=this.state.sign;return a.a.createElement("div",null,a.a.createElement("h1",null," Calculator"),a.a.createElement("h2",null,"`",n,r,l),a.a.createElement(b,{overTen:this.state.overTen,onReset:this.resetCout}),a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.handleClick(1)}},"1"),a.a.createElement("button",{onClick:function(){return e.handleClick(2)}},"2"),a.a.createElement("button",{onClick:function(){return e.handleClick(3)}},"3")),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.handleClick(4)}},"4"),a.a.createElement("button",{onClick:function(){return e.handleClick(5)}},"5"),a.a.createElement("button",{onClick:function(){return e.handleClick(6)}},"6")),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.handleClick(7)}},"7"),a.a.createElement("button",{onClick:function(){return e.handleClick(8)}},"8"),a.a.createElement("button",{onClick:function(){return e.handleClick(9)}},"9")),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.handleClick(0)}},"0"),a.a.createElement("button",{onClick:function(){return e.handleSign()}},"+"),a.a.createElement("button",{onClick:function(){return e.result()}},"=")),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e.cancel()}},"Cancel"))),a.a.createElement("h1",null," Result: ",t," "))}}]),t}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.cf18483c.chunk.js.map
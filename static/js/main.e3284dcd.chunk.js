(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){t.exports=n(55)},24:function(t,e,n){},26:function(t,e,n){},47:function(t,e,n){},49:function(t,e,n){},51:function(t,e,n){},53:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(17),i=n.n(o),r=(n(24),n(2)),l=n(3),s=n(5),u=n(4),h=n(6),p=(n(26),n(7)),d=n.n(p),m=(n(47),n(8)),b=n.n(m),f=(n(49),function(t){function e(t){var n;return Object(r.a)(this,e),n=Object(s.a)(this,Object(u.a)(e).call(this,t)),new b.a("a8ee0fa5cc66b88f3a48",{cluster:"us2",forceTLS:!0}).subscribe("my-channel").bind("participants-updated",function(t){console.log("participants",t);var e=document.getElementById("participants");console.log(e),e&&(console.log(e),e.innerHTML="",t.participants.forEach(function(t){console.log(t),e.innerHTML+="<div>".concat(t,"</div>")}))}),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{id:"box"},c.a.createElement("h1",null,"Participantes "),c.a.createElement("div",{id:"participants"}))}}]),e}(a.Component)),v=n(9),E=(n(51),n(53),function(t){function e(t){var n;return Object(r.a)(this,e),n=Object(s.a)(this,Object(u.a)(e).call(this,t)),new b.a("a8ee0fa5cc66b88f3a48",{cluster:"us2",forceTLS:!0}).subscribe("my-channel").bind("new-transaction",function(t){console.log("pusher new-transaction",t),document.getElementById(t.lotId).innerHTML+="<div>".concat(t.participant," is pushing</div>")}),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"pushTransaction",value:function(){console.log(this.props.lot),d.a.post("http://localhost:4000/transactions",{participant:this.props.me,lot:this.props.lot.id}).then(function(t){console.log(t)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"lot",id:this.props.lot.id},c.a.createElement("h1",null,this.props.lot.title),c.a.createElement("button",{onClick:this.pushTransaction.bind(this)},"Adquirir"))}}]),e}(a.Component)),j=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={lots:[]},new b.a("a8ee0fa5cc66b88f3a48",{cluster:"us2",forceTLS:!0}).subscribe("my-channel").bind("new-transaction",function(t){console.log(t),document.getElementById("lots").innerHTML+="<div>".concat(t.participant," - ").concat(t.amount,"</div>")}),d.a.get("http://localhost:4000/lots").then(n.setLots.bind(Object(v.a)(Object(v.a)(n)))),n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"setLots",value:function(t){var e=this;console.log(t);var n=t.data.map(function(t){return c.a.createElement(E,{me:e.props.me,lot:t,key:t.id})});console.log(n),this.setState({lots:n})}},{key:"render",value:function(){return c.a.createElement("div",{id:"box"},c.a.createElement("h1",null,"Lotss"),c.a.createElement("div",{id:"lots"},this.state.lots))}}]),e}(a.Component),O=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={showAuction:!1,highestBid:0},n}return Object(h.a)(e,t),Object(l.a)(e,[{key:"joinAuction",value:function(){var t=document.getElementById("name").value;this.setState({showAuction:!0,me:t}),d.a.post("http://localhost:4000/participants",{participant:t}).then(function(t){console.log("participant posted")})}},{key:"leaveAuction",value:function(){var t=this.state.me;this.setState({showAuction:!1,me:null}),d.a.delete("http://localhost:4000/participants/".concat(t)).then(function(t){console.log("bye")})}},{key:"render",value:function(){return c.a.createElement("div",{id:"box"},c.a.createElement("h2",{id:"winner"}," "),c.a.createElement("h1",null,"Auctionsss"),c.a.createElement(f,null),this.state.showAuction?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("button",{onClick:this.leaveAuction.bind(this)},"Abandonar")),c.a.createElement(j,{me:this.state.me})):c.a.createElement("div",null,c.a.createElement("input",{id:"name",type:"text",placeholder:"Nombre"}),c.a.createElement("button",{onClick:this.joinAuction.bind(this)},"Participar"),c.a.createElement("h3",null,"Escribe tu nombre y da click en participar para unirte a la adquisisci\xf3n")))}}]),e}(a.Component),g=function(t){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(O,null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.e3284dcd.chunk.js.map
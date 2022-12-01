(function(){"use strict";var t={2029:function(t,e,n){var d=n(9963),r=n(6252);const s={id:"app"};function u(t,e,n,d,u,a){const i=(0,r.up)("new-student-form"),l=(0,r.up)("student-table"),o=(0,r.up)("StudentMessage");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(i,{onStudentAdded:a.newStudentAdded},null,8,["onStudentAdded"]),(0,r.Wm)(l,{students:u.students,onStudentArrivedOrLeft:a.studentArrivedOrLeft,onDeleteStudent:a.studentDeleted},null,8,["students","onStudentArrivedOrLeft","onDeleteStudent"]),(0,r.Wm)(o,{student:u.mostRecentStudent},null,8,["student"])])}var a=n(3577);const i={key:0,class:"alert alert-danger"},l={class:"card add-student m-2 p-2"},o=(0,r._)("h4",{class:"card-title"},"Add new student",-1),c={class:"form-group"},h=(0,r._)("label",{for:"name"},"Name",-1),p={class:"form-group"},m=(0,r._)("label",{for:"starID"},"Star ID",-1),A=(0,r._)("br",null,null,-1);function f(t,e,n,s,u,f){return(0,r.wg)(),(0,r.iD)("div",null,[u.errors.length>0?((0,r.wg)(),(0,r.iD)("div",i,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.errors,(t=>((0,r.wg)(),(0,r.iD)("li",null,(0,a.zw)(t),1)))),256))])):(0,r.kq)("",!0),(0,r._)("div",l,[o,(0,r._)("div",c,[h,(0,r.wy)((0,r._)("input",{id:"name",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>u.newStudentName=t)},null,512),[[d.nr,u.newStudentName,void 0,{trim:!0}]])]),(0,r._)("div",p,[m,(0,r.wy)((0,r._)("input",{id:"starID",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>u.newStarID=t)},null,512),[[d.nr,u.newStarID,void 0,{trim:!0}]]),A]),(0,r._)("button",{class:"btn btn-primary",onClick:e[2]||(e[2]=(...t)=>f.addStudent&&f.addStudent(...t))},"Add")])])}n(7658);var w={name:"NewStudentForm",emits:["student-added"],data(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent(){if(this.errors=[],this.newStudentName||this.errors.push("Student name must be entered"),this.newStarID||this.errors.push("StarID must be entered"),0===this.errors.length){let t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},v=n(3744);const S=(0,v.Z)(w,[["render",f]]);var g=S;const b={key:0,class:"alert alert-info"},D={key:1,class:"alert alert-success"};function k(t,e,n,s,u,i){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.wy)((0,r._)("div",null,[n.student.present?((0,r.wg)(),(0,r.iD)("div",b," Welcome, "+(0,a.zw)(n.student.name),1)):((0,r.wg)(),(0,r.iD)("div",D," Goodbye, "+(0,a.zw)(n.student.name)+". See you later! ",1))],512),[[d.F8,n.student.name]])])}var O={name:"StudentMessage",props:{student:Object}};const I=(0,v.Z)(O,[["render",k]]);var y=I;const E={class:"card student-list m-2 p-2"},K=(0,r._)("h4",{class:"card-title"},"Students",-1),_={class:"edit-table-toggle form-check"},C=(0,r._)("label",{for:"edit-table",class:"form-check-label"}," Edit table?",-1),G={id:"student-table"},P={class:"table"},T=(0,r._)("th",null,"Name",-1),j=(0,r._)("th",null,"StarID",-1),B=(0,r._)("th",null,"Present?",-1);function F(t,e,n,s,u,a){const i=(0,r.up)("student-row");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",E,[K,(0,r._)("div",_,[(0,r.wy)((0,r._)("input",{id:"edit-table",type:"checkbox",class:"form-check-input","onUpdate:modelValue":e[0]||(e[0]=t=>u.editTable=t)},null,512),[[d.e8,u.editTable]]),C]),(0,r._)("div",G,[(0,r._)("table",P,[(0,r._)("tr",null,[T,j,B,(0,r.wy)((0,r._)("th",null,"Delete",512),[[d.F8,u.editTable]])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.students,(t=>((0,r.wg)(),(0,r.j4)(i,{student:t,key:t.starID,edit:u.editTable,onStudentArrivedOrLeft:a.arrivedOrLeft,onDeleteStudent:a.studentDeleted},null,8,["student","edit","onStudentArrivedOrLeft","onDeleteStudent"])))),128))])])])])}var Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFNUlEQVR4nO2bTW9bRRSG33PtesbXThEUkEoSFJUUUglEJNSu2CNo+QMINkW0fwnYtID4BylsgB1FBCEqhETDpiIJZMGmia+vx8GZwyJxMzP2/bLHzrXwI3Xh8Znjd05nznwGmPP/hiblmAERCXGbiN4D8CqARkEXbQC/MfOXzW73UwK6/lVOKABxvb6ogXtgft2LQ+YHQRDcCDudv7z4Mwh8O2RAeG08ABCta603GBDefJ7gPQCRELe9Nr4P0XokxEfe/fomkvLHSEp+8q9e34jr9cWifuJ6fSmS8ivTV0vKH3zr9Z4D2lK2GGj2PwdEy2GnszuKr7heX9bM20ZRq6nU+bFFGngPQCQlm5+bSo31G779uXjPAbPGk2i2hbjORJ8AKDxeZ4xdYr7V6Ha/BowARFLuAFg6M1nTZaep1IvAfAicBoCYbwEYKVvPGDs4buucOXPmZK8EGajGUt4E8AETvQbmp6aga3SI9sH8KwFfhErdIaCXap72ZavZfJ56vQ0AV72KnB6bXK3eWIiif5IMEtcBDJyb8cYDwDXq9e4xUE0ySAzAyd57lhvf52osxIeFa7WkvG/t66X85rEQL01AoFf2hViNpPzWOUf4Psk+MQe4+/oKsFJX6k/fgidBR8qVI+CRUXTQVGpo8k7LAdY+XCm170nfxOkKkVtr2mbI2hfUwvDyyIqmTO3w8GWnKHGPk9wDmB9an7VeG1PX1NDMllZy2mKSGAAisgMAvDK+tKlhadVOW0zShoBVKWC+kueX20Jcj6TcjaTcaQvx9rTsTIjZCgABW0m2iQEI3B5AlGsIMNHHOD5WWzo5YpuKXZpWty3Wd0lfqE7Hjdpq2orKwDxWW56iHYDjvQsAa73S7XT+SLJPDMAzwD6APaOodiDESpaAs6YlxCXYV2h7TwOPk+yzzgStXlAFSj8TVAY1JnZ/ICMA7FTmICh9ADgI7ASYMv6BjAAQkdUD2MmupcTRyFonzgBA1hDQ2p4KZ2AIkM8hUBlcDOVaC5wl7ATAbYNLagCkUtsAYqPowsHCwrOjy5ssrWbzOQAXjKJYKrWTVic9BwAazPYc2uuVNg9wr2d3f+YtAnRaneyrMacLVZyNRpmouPsVJ4kPIzMA7KwFyjwTuNpc7cPIDIA7FaLMawFXW0YCBPIFwHZS4iFA7jlAEIwfgDCOt2AnkkuTeK42LgzUGDD3KrrRbidugvpk94DjadCcSipRrbY6gsaJEtVql2HvVrfJnsKHkveBhN2VKpXyDYNBTZndH8gbACcPBCWcCQI3N6WcA1r18hi5G4oyng+6mtKOwUzy9gDXWfmGgKMp7SDUJFcAgsHpZI0n+NR+RKweEASBvx7QiOO/QWTetpyPw/Bigrl5CZG2EfFm1w7DFwCcPqEl2m/E8d4wW5f8z+SYrYjqhIsS47VZ6mssn3ZaazsnOVrTyHPK2+chgGvGj6wB+M41OnmBmXl669WO+QrIGpG/Z/ntk7sHuFmVnLO3s2SIltw9IHcABrJqmdYCzhog7SLEJX8OODoamAly1508lpajQa2J5J7KGKi1pWzjNG8wBcFi3mw7KdpheJG13sXpf2avoVSDgMM89YvkgEMAv5hFrPWdjpRndlvUkXKFtb4Lux0/5208UGwWADN/TkTmw6m3joBHkZRF3HjjaEgZM39WxEeh1dzJMLgP4I0i9abIZkOpNwn4N2+FQn8vQMAhV6vvAPipsLTJs8nV6rtFGg+MuJ5n4FwsxE0QvQ9g3XxNNmVaAB7kfRY7Z84g/wHI6PskDHxYvAAAAABJRU5ErkJggg==";const N=["checked"];function V(t,e,n,s,u,i){return(0,r.wg)(),(0,r.iD)("tr",{class:(0,a.C_)({present:n.student.present,absent:!n.student.present})},[(0,r._)("td",null,(0,a.zw)(n.student.name),1),(0,r._)("td",null,(0,a.zw)(n.student.starID),1),(0,r._)("td",null,[(0,r._)("input",{type:"checkbox",checked:n.student.present,onChange:e[0]||(e[0]=t=>i.arrivedOrLeft(n.student,t.target.checked))},null,40,N)]),(0,r.wy)((0,r._)("td",null,[(0,r._)("img",{class:"delete-icon",onClick:e[1]||(e[1]=(...t)=>i.deleteStudent&&i.deleteStudent(...t)),src:Z})],512),[[d.F8,n.edit]])],2)}var W={name:"StudentRow",props:{student:Object,edit:Boolean},methods:{arrivedOrLeft(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent(){confirm(`Delete ${this.student.name}?`)&&this.$emit("delete-student",this.student)}}};const X=(0,v.Z)(W,[["render",V]]);var M=X,R={name:"StudentTable",components:{StudentRow:M},emits:["student-present","delete-student"],data(){return{editTable:!1}},props:{students:Array},methods:{arrivedOrLeft(t,e){this.$emit("student-arrived-or-left",t,e)},studentDeleted(t){this.$emit("delete-student",t)}}};const z=(0,v.Z)(R,[["render",F]]);var Y=z,J={name:"App",components:{NewStudentForm:g,StudentMessage:y,StudentTable:Y},data(){return{students:[],mostRecentStudent:{}}},mounted(){this.updateStudents()},methods:{updateStudents(){this.$student_api.getAllStudents().then((t=>{this.students=t})).catch((()=>alert("Unable to fetch student list")))},newStudentAdded(t){this.$student_api.addStudent(t).then((()=>{this.updateStudents()})).catch((t=>{let e=t.response.data.join(",");alert("Error adding student\n"+e)}))},studentArrivedOrLeft(t,e){t.present=e,this.$student_api.updateStudent(t).then((()=>{this.mostRecentStudent=t,this.updateStudents()})).catch((()=>alert("Unable to update student")))},studentDeleted(t){this.$student_api.deleteStudent(t.id).then((()=>{this.updateStudents(),this.mostRecentStudent={}})).catch((()=>alert("Unable to delete student")))}}};const Q=(0,v.Z)(J,[["render",u]]);var U=Q,L=n(594);let H="/api/students";var x={getAllStudents(){return L.Z.get(H).then((t=>t.data))},addStudent(t){return L.Z.post(H,t).then((t=>t.data))},updateStudent(t){return L.Z.patch(`${H}/${t.id}`,t).then((t=>t.data))},deleteStudent(t){return L.Z["delete"](`${H}/${t}`).then((t=>t.data))}};let q=(0,d.ri)(U);q.config.globalProperties.$student_api=x,q.mount("#app")}},e={};function n(d){var r=e[d];if(void 0!==r)return r.exports;var s=e[d]={exports:{}};return t[d](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,d,r,s){if(!d){var u=1/0;for(o=0;o<t.length;o++){d=t[o][0],r=t[o][1],s=t[o][2];for(var a=!0,i=0;i<d.length;i++)(!1&s||u>=s)&&Object.keys(n.O).every((function(t){return n.O[t](d[i])}))?d.splice(i--,1):(a=!1,s<u&&(u=s));if(a){t.splice(o--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var o=t.length;o>0&&t[o-1][2]>s;o--)t[o]=t[o-1];t[o]=[d,r,s]}}(),function(){n.d=function(t,e){for(var d in e)n.o(e,d)&&!n.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:e[d]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,d){var r,s,u=d[0],a=d[1],i=d[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(i)var o=i(n)}for(e&&e(d);l<u.length;l++)s=u[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(o)},d=self["webpackChunkstudent_sign_in"]=self["webpackChunkstudent_sign_in"]||[];d.forEach(e.bind(null,0)),d.push=e.bind(null,d.push.bind(d))}();var d=n.O(void 0,[998],(function(){return n(2029)}));d=n.O(d)})();
//# sourceMappingURL=app.c928d318.js.map
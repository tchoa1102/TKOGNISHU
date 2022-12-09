import{L as I}from"./Load.4c06503d.js";import{F as C,a as G}from"./FormCheck.914394a8.js";import{B as L,_ as T,F as g,G as j,l as E,r as w,o as a,c as n,b as u,a as e,e as d,w as y,d as v,t as _,m as A,v as F,f as b,j as h,q as V}from"./index.16961ad9.js";import{G as x}from"./group.service.403cd760.js";class N extends L{constructor(s="/api/store"){super(s)}async getAllEpisodes(s){return(await this.api.get(`/${s}`)).data}}const p=new N,D={components:{Load:I,FormControl:C,FormCheck:G},data(){const l=this.$route.params.slug;return{isLoad:!1,isShow:!1,film:{},slug:l,episodes:[],genres:[],countries:[],srcImgIsAdd:{},searchValue:"",searchResults:[],group:{}}},watch:{async searchValue(l,s,c){if(l.trim().length>0)try{this.searchResults=await x.getElementsByName(l),this.isLoad=!this.searchResults[0]}catch(r){console.log(r)}else this.isLoad=!1,this.searchResults=[]}},methods:{async retrieveData(){console.log(this.slug),await Promise.all([g.get(this.slug),p.getAllEpisodes(this.slug),j.getAll(),E.getAll()]).then(([l,s,c,r])=>{this.film=l,this.episodes=s,this.genres=c,this.countries=r,this.group=l.group}).catch(l=>console.log(l))},updateSrc(l,s){this.srcImgIsAdd[s]=l},async submit(l){const s=document.getElementById("form-submit"),c=new FormData(s);await g.update(this.slug,c).then(()=>console.log("Save film is successfully!")).catch(r=>console.log(r))},async submitFormAdd(l){const s=l.target,c=new FormData(s);this.isShow=!0,await p.create(c).then(()=>{this.isShow=!1,p.getAllEpisodes(this.slug).then(r=>this.episodes=r).catch(r=>console.log(r)),console.log("Episode was added!!")}).catch(r=>console.log(r))},chooseGroup(l){this.searchValue="",this.group={_id:l.target.dataset.id,name:l.target.innerText},this.searchResults=[]},deleteGroup(l){this.group={}},async addGroup(l){await x.create({name:this.searchValue}).then(s=>{this.isLoad=!1,this.group=s}).catch(s=>s)},async deleteEpisode(l){const s=l.currentTarget.dataset.id;this.isShow=!0,await p.delete(s).then(async()=>{console.log("Deleted!"),await p.getAllEpisodes(this.slug).then(c=>{this.episodes=c}).catch(c=>console.log("C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng reload!"))}).catch(c=>console.log(c)),this.isShow=!1},editEpisode(l){alert("Ch\u1EE9c n\u0103ng n\xE0y \u0111ang \u0111\u01B0\u1EE3c ph\xE1t tri\u1EC3n!")}},async created(){console.log("Kh\u1EDFi t\u1EA1o"),await this.retrieveData()}},B={class:"row justify-content-between"},R={class:"col-4"},P={class:"show-image"},M=["src"],H={class:"show-background"},U=["src"],O={class:"col-7 border-start border-light fs-4"},q={class:"row mb-3 justify-content-between align-items-center"},z={class:"col-sm-5"},K={class:"col-sm-5"},Q={class:"row mb-3 justify-content-between align-items-center"},J={class:"col-sm-5"},W={class:"col-sm-5"},X={class:"row mb-3 justify-content-between align-items-center"},Y={class:"col-sm-5"},Z={class:"col-sm-5"},$={class:"row mb-3 justify-content-between align-items-center"},ee=e("label",{class:"col-sm-2 col-form-label"},"Qu\u1ED1c gia",-1),se={class:"col-sm-8"},te={class:"form-check form-check-inline"},oe=["id","value"],le=["id","value"],ie=["for"],ae={class:"row mb-3 justify-content-between align-items-center"},ne=e("label",{class:"col-sm-2 col-form-label"},"Th\u1EC3 lo\u1EA1i",-1),ce={class:"col-sm-8"},re={class:"form-check form-check-inline"},de=["id","value"],me=["id","value"],ue=["for"],he={class:"row mb-3 justify-content-between align-items-center"},_e=e("label",{for:"author",class:"col-sm-5 col-form-label"},"T\xE1c gi\u1EA3",-1),pe={class:"col-sm-4"},fe=["value"],ve={class:"row mb-3 justify-content-between align-items-center"},be=e("label",{for:"note",class:"col-sm-5 col-form-label"},"Ghi ch\xFA",-1),ge={class:"col-sm-4"},we={name:"note",id:"note",rows:"2"},ye={class:"row mb-3 align-items-center"},xe=e("label",{for:"searchGroup",class:"col-sm-5 col-form-label"},"T\xEAn nh\xF3m cho anime",-1),ke={class:"col-sm-7"},Se={class:"row align-items-center"},Ie={class:"col-sm-10"},Ce={class:"row position-relative"},Ge={class:"col-12 list-group list-group-flush ms-2 mt-1 position-absolute top-0 left-0 border border-1 border-secondary rounded bg-light search-items",style:{"z-index":"1000"}},Le={class:"list-group-item text-truncate"},Te=["data-id"],je={key:1,class:"spinner-border text-secondary",role:"status"},Ee=e("span",{class:"visually-hidden"},"Loading...",-1),Ae=[Ee],Fe=e("i",{class:"fa-solid fa-circle-plus"},null,-1),Ve=[Fe],Ne={class:"row align-items-center w-100 form-check form-check-inline group-field"},De={class:"col-1"},Be=["value"],Re={class:"col-8 form-check-label LabelGroupId",for:""},Pe=e("i",{class:"fa-solid fa-xmark"},null,-1),Me=[Pe],He={class:"row mb-3 justify-content-between align-items-center"},Ue=e("label",{for:"searchGroup",class:"col-sm-5 col-form-label"},"T\u1EADp phim",-1),Oe={class:"col-sm-7"},qe={class:"row justify-content-between align-items-start"},ze={class:"col-10"},Ke={class:"row row-cols-3 align-items-center"},Qe={class:"col my-3"},Je={class:"position-relative cursor-pointer"},We=["data-id"],Xe=e("i",{class:"fa-solid fa-xmark"},null,-1),Ye=[Xe],Ze=e("a",{class:"col-1 mt-3 text-info",href:"#","data-bs-toggle":"modal","data-bs-target":"#form-add-episode"},[e("i",{class:"fa-solid fa-circle-plus"})],-1),$e=e("div",{class:"text-center"},[e("button",{type:"submit",class:"btn btn-primary"},"L\u01B0u")],-1),es={class:"modal-dialog"},ss={class:"modal-content"},ts={class:"modal-body fs-3"},os={class:"container-sm container-md container-fluid"},ls=e("div",{class:"row row-cols-2 justify-content-between"},[e("h5",{class:"col fs-3"},"TH\xCAM T\u1EACP PHIM"),e("button",{class:"col btn-close",type:"button","data-bs-dismiss":"modal","aria-label":"Close"})],-1),is={class:"row mt-3"},as=V('<div class="row mb-3 justify-content-between align-items-center"><label for="anime-name" class="col-sm-2 col-form-label">T\xEAn t\u1EADp</label><div class="col-sm-10"><input class="form-control fs-4" type="text" name="name"></div><span class="text-secondary fs-5">VD: 1, 2, 3, ..., movie, movie 1,...</span></div><div class="row mb-3 justify-content-between align-items-center"><label for="anime-name" class="col-sm-2 col-form-label">Id video</label><div class="col-sm-10"><input class="form-control fs-4" type="text" name="videoId"></div><span class="text-secondary fs-5">Id c\u1EE7a video tr\xEAn google drive, n\u1EBFu b\u1EA1n \u0111\xE3 l\u01B0u video v\xE0o google drive</span></div><div class="row mb-3 fs-5"><span>Ho\u1EB7c</span></div><div class="row mb-3"><label for="videoUpload" class="col-sm-2 col-form-label">T\u1EA3i l\xEAn video</label><div class="col-sm-10"><input type="file" name="videoUpload" id="videoUpload"></div></div>',4),ns={class:"row mb-3 justify-content-between align-items-center d-none"},cs=["value"],rs=e("div",{class:"d-flex"},[e("button",{class:"btn ms-auto text-dark fs-5 plus-episode",type:"submit"},"Th\xEAm"),e("button",{class:"btn ms-3 text-danger fs-4",type:"button","data-bs-dismiss":"modal"},"H\u1EE7y")],-1);function ds(l,s,c,r,o,i){const m=w("FormControl"),k=w("load");return a(),n(u,null,[o.film?(a(),n(u,{key:0},[e("form",{onSubmit:s[8]||(s[8]=h((...t)=>i.submit&&i.submit(...t),["prevent"])),id:"form-submit",class:"container-fluid mt-3 w-75 text-light fs-4",enctype:"multipart/form-data",action:"save",method:"POST"},[e("div",B,[e("div",R,[d(m,{label:"\u1EA2nh ch\xEDnh",name:"image",type:"file","onCreate:src":s[0]||(s[0]=t=>i.updateSrc(t,"show-image"))},{default:y(()=>[e("div",P,[e("img",{src:o.srcImgIsAdd["show-image"],style:{height:"120px","max-width":"300px"},alt:""},null,8,M)])]),_:1}),d(m,{label:"N\u1EC1n",name:"background",type:"file","onCreate:src":s[1]||(s[1]=t=>i.updateSrc(t,"show-background"))},{default:y(()=>[e("div",H,[e("img",{src:o.srcImgIsAdd["show-background"],style:{height:"200px","max-width":"300px"},alt:""},null,8,U)])]),_:1})]),e("div",O,[d(m,{label:"T\xEAn anime",name:"name",type:"text",class:"anime-name",value:o.film.name},null,8,["value"]),d(m,{label:"T\xEAn kh\xE1c",name:"otherName",type:"text",class:"anime-name",value:o.film.otherName},null,8,["value"]),d(m,{label:"M\xF4 t\u1EA3",name:"description",type:"textarea",cols:"60",rows:"2",value:o.film.description},null,8,["value"]),e("div",q,[e("div",z,[d(m,{label:"N\u0103m ph\xE1t h\xE0nh",name:"year",type:"number",wLabel:"5",wInput:"7",value:o.film.year},null,8,["value"])]),e("div",K,[d(m,{label:"L\u1ECBch chi\u1EBFu",name:"schedule",type:"text",class:"w-100",wLabel:"2",wInput:"8",value:o.film.schedule},null,8,["value"])])]),e("div",Q,[e("div",J,[d(m,{label:"T\u1ED5ng s\u1ED1 t\u1EADp d\u1EF1 ki\u1EBFn",name:"length",type:"number",class:"w-100",wLabel:"8",wInput:"4",value:o.film.length},null,8,["value"])]),e("div",W,[d(m,{label:"Nh\xE0 s\u1EA3n xu\u1EA5t",name:"producer",type:"text",class:"w-100",wLabel:"4",wInput:"8",value:o.film.producer},null,8,["value"])])]),e("div",X,[e("div",Y,[d(m,{label:"Th\u1EDDi l\u01B0\u1EE3ng",name:"time",type:"text",class:"w-100",wLabel:"8",wInput:"4",value:o.film.time},null,8,["value"])]),e("div",Z,[d(m,{label:"Ph\u1EA7n",name:"part",type:"text",class:"w-100",wLabel:"4",wInput:"8",value:o.film.part},null,8,["value"])])]),e("div",$,[ee,e("div",se,[(a(!0),n(u,null,v(o.countries,t=>(a(),n("div",te,[t.slug==o.film.country.slug?(a(),n("input",{key:0,class:"form-check-input",type:"radio",name:"countryId",id:t._id,value:t._id,checked:""},null,8,oe)):(a(),n("input",{key:1,class:"form-check-input",type:"radio",name:"countryId",id:t._id,value:t._id},null,8,le)),e("label",{class:"form-check-label",for:t._id},_(t.name),9,ie)]))),256))])]),e("div",ae,[ne,e("div",ce,[(a(!0),n(u,null,v(o.genres,t=>(a(),n("div",re,[o.film.genres[t.name]?(a(),n("input",{key:0,class:"form-check-input",type:"checkbox",name:"genre[]",id:t._id,value:t._id,checked:""},null,8,de)):(a(),n("input",{key:1,class:"form-check-input",type:"checkbox",name:"genre[]",id:t._id,value:t._id},null,8,me)),e("label",{class:"form-check-label",for:t._id},_(t.name),9,ue)]))),256))])]),e("div",he,[_e,e("div",pe,[e("input",{class:"w-100",type:"text",name:"author",id:"author",value:o.film.author},null,8,fe)])]),e("div",ve,[be,e("div",ge,[e("textarea",we,_(o.film.note),1)])]),e("div",ye,[xe,e("div",ke,[e("div",Se,[e("div",Ie,[A(e("input",{class:"w-100",type:"text",name:"searchGroup",placeholder:"Nh\u1EADp t\xEAn nh\xF3m c\u1EA7n t\xECm","onUpdate:modelValue":s[2]||(s[2]=t=>o.searchValue=t)},null,512),[[F,o.searchValue]]),e("div",Ce,[e("ul",Ge,[o.searchResults?(a(!0),n(u,{key:0},v(o.searchResults,(t,f)=>(a(),n("li",Le,[e("a",{onClick:s[3]||(s[3]=h((...S)=>i.chooseGroup&&i.chooseGroup(...S),["prevent"])),href:"#","data-id":t._id,class:"text-secondary text-decoration-none"},_(t.name),9,Te)]))),256)):b("",!0),o.isLoad?(a(),n("div",je,Ae)):b("",!0)])])]),e("a",{onClick:s[4]||(s[4]=h((...t)=>i.addGroup&&i.addGroup(...t),["prevent"])),class:"col-sm-1 text-info plus-icon",href:"#"},Ve)]),e("div",Ne,[o.group._id?(a(),n(u,{key:0},[e("div",De,[e("input",{class:"form-check-input",name:"groupId",type:"radio",value:o.group._id,checked:"checked"},null,8,Be)]),e("label",Re,_(o.group.name),1),e("a",{onClick:s[5]||(s[5]=h((...t)=>i.deleteGroup&&i.deleteGroup(...t),["prevent"])),href:"#",class:"col-1 text-danger unchecked-group"},Me)],64)):b("",!0)])])]),e("div",He,[Ue,e("div",Oe,[e("div",qe,[e("div",ze,[e("div",Ke,[(a(!0),n(u,null,v(o.episodes,t=>(a(),n("div",Qe,[e("div",Je,[e("a",{onClick:s[6]||(s[6]=h((...f)=>i.editEpisode&&i.editEpisode(...f),["stop","prevent"])),class:"d-block w-100 px-1 py-2 text-decoration-none text-dark text-center bg-light rounded text-truncate"},_(t.name),1),e("a",{onClick:s[7]||(s[7]=h((...f)=>i.deleteEpisode&&i.deleteEpisode(...f),["stop","prevent"])),class:"position-absolute border-0 top-0 end-0 text-danger fs-2 delete-episode-btn","data-id":t._id},Ye,8,We)])]))),256))])]),Ze])])])])]),$e],32),e("form",{onSubmit:s[9]||(s[9]=h((...t)=>i.submitFormAdd&&i.submitFormAdd(...t),["prevent"])),class:"modal fade",id:"form-add-episode",method:"POST",enctype:"multipart/form-data","data-bs-keyboard":"false",tabindex:"-1","aria-hidden":"true"},[e("div",es,[e("div",ss,[e("div",ts,[e("div",os,[ls,e("div",is,[as,e("div",ns,[e("input",{class:"form-control fs-4",type:"text",name:"filmId",value:o.film._id},null,8,cs)])]),rs])])])])],32)],64)):b("",!0),d(k,{isShow:o.isShow},null,8,["isShow"])],64)}const ps=T(D,[["render",ds]]);export{ps as default};

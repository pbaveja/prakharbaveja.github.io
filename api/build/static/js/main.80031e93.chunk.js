(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{155:function(e,t,a){e.exports=a(277)},272:function(e,t,a){},276:function(e,t,a){},277:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=(a(57),a(13)),i=(a(47),a(6)),s=a(15),m=a(30),p=a(32),d=a(31),u=a(33),h=(a(114),a(56)),y=a(12);var f=function(e){return r.a.createElement("h1",{className:"font-semi-bold"},e.value)},g=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement(f,{value:"Prakhar Baveja"}),r.a.createElement("div",{className:"col-12 col-md-10 mx-auto"},r.a.createElement("h6",{className:"source-code-pro mt-4"},"full-stack developer"),r.a.createElement("p",{className:"source-code-pro text-sm mt-3"},r.a.createElement("i",{className:"fas fa-map-marker-alt"}),"\xa0Delhi, India"),r.a.createElement("p",{className:"font-regular mt-4"},"Welcome to my corner on the web.",r.a.createElement("br",null),"Here you can find some of my work with the technologies used to create them.",r.a.createElement("br",null),"Be it a restful API or an elegant box-shadow, I can help you craft it!")))}}]),t}(r.a.Component),b=Object(y.b)("spotifyStore")(Object(y.c)(g)),E=(a(116),a(78));var S,v=function(e){return r.a.createElement("div",{onClick:function(){e.handleClick(e.title)},className:"card-custom mt-2 mb-0 rounded pointer"},r.a.createElement("div",{className:"card-custom-infos p-3 rounded"},r.a.createElement("div",null,r.a.createElement("h2",{className:"text-left"},e.title),r.a.createElement("p",{className:"source-code-pro text-left"},""!==e.description?e.description:"No description")),r.a.createElement("button",{className:"playlist-play-btn"},r.a.createElement("i",{className:"fas fa-play text-blue"}))))},k=(a(141),a(43)),j=(a(117),a(83)),N=Object(y.b)("playerStore")(S=Object(y.c)(S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handlePlay=function(e){a.props.playerStore.playSong({url:e.preview_url,id:e.id,name:e.name,artist:e.artists[0].name,image:e.album.images[0].url})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.playerStore.playerState;return console.log(t.trackData.name),r.a.createElement(k.a,{className:"playlist-track text-left mt-1",itemLayout:"horizontal",dataSource:this.props.el.tracks.items,renderItem:function(a){return r.a.createElement(k.a.Item,{onClick:function(){return e.handlePlay(a.track)}},r.a.createElement(k.a.Item.Meta,{className:"align-items-center",avatar:r.a.createElement(j.a,{src:a.track.album.images[0].url}),title:r.a.createElement("span",null,a.track.name),description:a.track.artists[0].name}),r.a.createElement("button",{className:"track-play-btn"},t.playing&&t.trackData.trackId===a.track.id?r.a.createElement("i",{className:"fas fa-pause text-gray"}):r.a.createElement("i",{className:"fas fa-play text-gray"})),r.a.createElement("span",null,t.playing))}})}}]),t}(r.a.Component))||S)||S,x=a(282),O=r.a.createElement(x.a,{style:{fontSize:24},spin:!0}),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(e){a.setState({isOpen:!a.state.isOpen,playlistToOpen:e})},a.state={isOpen:!1,playlistToOpen:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.spotifyStore.getPlaylistAsync("55kaalmMfuanMgINNafOQ8"),this.props.spotifyStore.getPlaylistAsync("53JEaESR7YzMhfK3I8WEan"),this.props.spotifyStore.getPlaylistAsync("1qGVxjrbNySEhHh8MzGo8c")}},{key:"componentWillUnmount",value:function(){this.props.spotifyStore.playlists=[]}},{key:"render",value:function(){var e=this,t="error"!==this.props.spotifyStore.status?this.props.spotifyStore.playlists:[];return r.a.createElement(c.a,{justify:"center my-3"},t&&r.a.createElement(i.a,{span:24},r.a.createElement("p",{className:"text-md"},"Here are a few playlists of mine from ",r.a.createElement("a",{href:"https://developer.spotify.com/documentation/web-api/",target:"_blank"},"Spotify's API."),r.a.createElement("br",null)),r.a.createElement("p",{className:"text-md"},"This is using ExpressJS as the backend framework, and Redis for caching the playlist data.",r.a.createElement("br",null),"For the frontend, Mobx is used for state management. You can check out the source code for this website ",r.a.createElement("a",{href:"https://github.com/pbaveja/prakharbaveja.github.io",target:"blank"},"here."))),t?t.map((function(t){return r.a.createElement(i.a,{key:t.name,xs:24,sm:12,md:8,className:"px-2"},r.a.createElement(v,{handleClick:e.handleClick,img:t.images[0].url,title:t.name,description:t.description}),e.state.isOpen&&t.name===e.state.playlistToOpen&&r.a.createElement(N,{el:t,handlePlay:e.handlePlay}))})):r.a.createElement(E.a,{indicator:O}))}}]),t}(r.a.Component),A=Object(y.b)("spotifyStore")(Object(y.c)(w)),P=(a(242),a(16)),M=(a(244),a(112)),T=a(281),I=function(){return r.a.createElement("img",{alt:"laravel",src:"https://laravel.com/img/logomark.min.svg",width:"15"})},C=function(){return r.a.createElement("img",{alt:"nodejs",src:"/images/nodejs.png",width:"15"})},D=function(){return r.a.createElement("img",{alt:"js",src:"/images/javascript.svg",width:"15"})},R=function(){return r.a.createElement("img",{alt:"react",src:"/images/reactjs.svg",width:"15"})},J=function(){return r.a.createElement("img",{alt:"next",src:"https://nextjs.org/static/favicon/favicon-32x32.png",width:"15"})},z=function(){return r.a.createElement("img",{alt:"mysql",src:"/images/mysql.png",width:"15"})},H=function(){return r.a.createElement("img",{alt:"mongodb",src:"/images/mongodb.png",width:"20"})},L=function(e){return r.a.createElement(T.a,Object.assign({component:I},e))},B=function(e){return r.a.createElement(T.a,Object.assign({component:C},e))},F=function(e){return r.a.createElement(T.a,Object.assign({component:D},e))},G=function(e){return r.a.createElement(T.a,Object.assign({component:R},e))},W=function(e){return r.a.createElement(T.a,Object.assign({component:J},e))},U=function(e){return r.a.createElement(T.a,Object.assign({component:z},e))},q=function(e){return r.a.createElement(T.a,Object.assign({component:H},e))},Q=a(283),_=a(284),K=a(285),V=M.a.Meta;var X=function(e){return[{title:"Hubhopper Studio",description:"A podcast hosting platform catered for the Indian creators, handling creation, RSS generation, distribution and anlytics all under one roof.",cover:"/images/hh-studio.png",logo:"https://files.hubhopper.com/podcast/12854/hubhopper-studio.jpg",link:"https://studio.hubhopper.com",technologyTags:[r.a.createElement(P.a,{style:{color:"#ff2d20"},className:"rounded-tag"},r.a.createElement(L,{style:{verticalAlign:"middle"}})," Laravel"),r.a.createElement(P.a,{style:{color:"#61dbfb"},className:"rounded-tag"},r.a.createElement(G,{style:{verticalAlign:"middle"}})," ReactJS"),r.a.createElement(P.a,{style:{color:"#4479a1"},className:"rounded-tag"},r.a.createElement(U,{style:{verticalAlign:"middle"}})," MySQL")]},{title:"Hubhopper Editor",description:"Feature rich browser based audio editor where you can import, record, trim, split, fade in/out and a lot more. Inspired by the demand for easy audio manipulation.",cover:"/images/hh-audio-editor.png",logo:"/images/hh-editor-logo.png",link:"https://studio.hubhopper.com/editor",technologyTags:[r.a.createElement(P.a,{style:{color:"#323330"},className:"rounded-tag"},r.a.createElement(F,{style:{verticalAlign:"middle"}})," JavaScript")]},{title:"Boilerplate MERN stack app for SAAS products.",description:"Contributed to the open source project used for SAAS platforms having the need for ACL permissions with teams/users. Using the MERN stack with NextJS.",link:"https://saas-app.builderbook.org/login",logo:"https://storage.googleapis.com/async-await/async-favicon32.png",cover:"https://user-images.githubusercontent.com/26158226/61417515-2891dd00-a8ac-11e9-9c08-0d1adef43c5b.png",technologyTags:[r.a.createElement(P.a,{style:{color:"#323330"},className:"rounded-tag"},r.a.createElement(B,{style:{verticalAlign:"middle"}})," NodeJS"),r.a.createElement(P.a,{style:{color:"#323330"},className:"rounded-tag"},r.a.createElement(q,{style:{verticalAlign:"middle"}})," MongoDB"),r.a.createElement(P.a,{style:{color:"#61dbfb"},className:"rounded-tag"},r.a.createElement(G,{style:{verticalAlign:"middle"}})," ReactJS")]},{title:"Hubhopper Web",description:"A podcast consumption web app catered for India. Showcasing featured, popular and upcoming podcasts. Hubhopper is india's largest podcast directory with over 50 milion hours of content.",cover:"/images/hh-web.png",logo:"https://hubhopper.com/static/favicon.ico",link:"https://hubhopper.com",technologyTags:[r.a.createElement(P.a,{style:{color:"#323330"},className:"rounded-tag"},r.a.createElement(B,{style:{verticalAlign:"middle"}})," NodeJS"),r.a.createElement(P.a,{style:{color:"#61dbfb"},className:"rounded-tag"},r.a.createElement(G,{style:{verticalAlign:"middle"}})," ReactJS")]},{title:"Enhans",description:"Made the porfolio website for the Enhans project that is a collaboration between 8 students from Srishti School of Art, Design and Technology and NIMHANS, dealing with doctor patient communication",cover:"/images/enhans-cover.png",logo:"/images/enhans.jpg",link:"https://enhans.co.in/",technologyTags:[r.a.createElement(P.a,{style:{color:"#61dbfb"},className:"rounded-tag"},r.a.createElement(G,{style:{verticalAlign:"middle"}})," ReactJS"),r.a.createElement(P.a,{style:{color:"#000000"},className:"rounded-tag"},r.a.createElement(W,{style:{verticalAlign:"middle"}})," NextJS")]},{title:"HTML5 Asteroid Game",description:"Recreating the retro Asteroid game in HTML5 and JS. Intially developed by Atari.",link:"https://pbaveja.github.io/HTML5-Asteroid-Game/",cover:"/images/asteroids.png",logo:"",technologyTags:[r.a.createElement(P.a,{style:{color:"#323330"},className:"rounded-tag"},r.a.createElement(F,{style:{verticalAlign:"middle"}})," JavaScript")]},{title:"Node Gmail",description:"NodeJS script for all things email. Drafting, sending, listing. Integrated with the googleapis. And mail templating with nodemailer",link:"https://github.com/pbaveja/node-gmail",technologyTags:[r.a.createElement(P.a,{style:{color:"#323330"},className:"rounded-tag"},r.a.createElement(B,{style:{verticalAlign:"middle"}})," NodeJS")]},{title:"XML Parser and Podcast Episode Downloader",description:"NodeJS script for parsing an RSS into JSON and downloading all it's episodes into a folder. Displays progress and uses promises to avoid concurrent HTTP connections errors.",link:"https://github.com/pbaveja/node-rss-parse-download",technologyTags:[r.a.createElement(P.a,{style:{color:"#323330"},className:"rounded-tag"},r.a.createElement(B,{style:{verticalAlign:"middle"}})," NodeJS")]}].map((function(e){var t="";return t="HTML5 Asteroid Game"===e.title?r.a.createElement(Q.a,{style:{fontSize:"25px"}}):"XML Parser and Podcast Episode Downloader"===e.title?r.a.createElement(_.a,{style:{fontSize:"25px"}}):e.logo?r.a.createElement(j.a,{src:e.logo}):r.a.createElement(K.a,{style:{fontSize:"25px"}}),r.a.createElement(i.a,{xs:24,md:8,className:"d-flex justify-content-center"},r.a.createElement(M.a,{className:"m-3",onClick:function(){return window.open(e.link,"_blank")},hoverable:!0,style:{width:300,borderRadius:"5px"},cover:e.cover&&r.a.createElement("img",{alt:"Hubhopper Studio",src:e.cover})},r.a.createElement(V,{className:"text-left",avatar:t,title:e.title,description:e.description}),r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex text-left"},e.technologyTags.map((function(e){return r.a.createElement("div",{className:"mt-1"},e)})))))}))},Y=a(286),$=a(287),Z=a(288);var ee,te=function(e){var t=[{title:"prakhar.baveja@gmail.com",link:"mailto:prakhar.baveja@gmail.com",icon:r.a.createElement(K.a,{style:{verticalAlign:"middle",fontSize:"20px"}})},{title:"Github",link:"https://github.com/pbaveja",icon:r.a.createElement(Y.a,{style:{verticalAlign:"middle",fontSize:"20px"}})},{title:"LinkedIn",link:"https://www.linkedin.com/in/prakhar-baveja-244907106/",icon:r.a.createElement($.a,{style:{verticalAlign:"middle",fontSize:"20px"}})},{title:"Instagram",link:"https://www.instagram.com/prakharbaveja",icon:r.a.createElement(Z.a,{style:{verticalAlign:"middle",fontSize:"20px"}})}];return r.a.createElement(c.a,{justify:"center my-3"},r.a.createElement(i.a,{span:24},r.a.createElement("p",{className:"text-md"},"Feel free to contact me through any of these mediums")),r.a.createElement("div",{className:"d-flex"},r.a.createElement(k.a,{className:"text-left",itemLayout:"horizontal",dataSource:t,renderItem:function(e){return r.a.createElement(k.a.Item,null,r.a.createElement("div",{className:"px-2"},e.icon),r.a.createElement(k.a.Item.Meta,{title:r.a.createElement("a",{href:e.link},e.title)}))}})))},ae=(a(278),a(154)),ne=a(152),re=a.n(ne),le=a(289),oe=a(290),ce=a(291),ie=a(292),se=a(293),me=Object(y.b)("playerStore")(ee=Object(y.c)(ee=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.playerStore,t=this.props.playerStore.playerState;return r.a.createElement("div",null,t.playerActive&&r.a.createElement("div",{className:"player",style:{position:"fixed",bottom:0,height:"90px",width:"100%",background:"#ffffffbf",boxShadow:"0px 30px 40px #eee",backdropFilter:"blur(5px)"}},r.a.createElement(c.a,{justify:"center"},r.a.createElement(le.a,{onClick:e.handleStop,className:"player-icon player-close",style:{zIndex:"100"}}),r.a.createElement(i.a,{span:24,className:"text-center mt-3"},r.a.createElement(oe.a,{className:"player-icon mx-3",style:{fontSize:"20px"}}),t.playing?r.a.createElement(ce.a,{onClick:e.handlePlayPause,className:"player-icon mx-3"}):r.a.createElement(ie.a,{onClick:e.handlePlayPause,className:"player-icon mx-3"}),r.a.createElement(se.a,{className:"player-icon mx-3",style:{fontSize:"20px"}})),r.a.createElement(i.a,{span:24,className:"d-flex justify-content-center align-items-center mt-2"},r.a.createElement("span",{className:"text-sm text-player-gray text-right px-2 ",style:{width:"10%"}},t.playedSeconds.toFixed()),r.a.createElement(ae.a,Object.assign({},this.props,{value:100*t.played,tipFormatter:null,onChange:e.handleSeekChange,onMouseDown:function(){console.log("mouse down mouse down")},onAfterChange:e.handleSeekMouseUp,style:{width:"80%",transition:"0.2s ease all",color:"#4661a3"},step:.1})),r.a.createElement("span",{className:"text-sm text-player-gray text-left px-2 ",style:{width:"10%"}},t.loadedSeconds.toFixed())))),r.a.createElement("div",{className:"d-none"},r.a.createElement(re.a,{ref:this.props.playerStore.ref,className:"react-player",width:"100%",height:"100%",url:t.url,playing:t.playing,loop:t.loop,playbackRate:t.playbackRate,volume:t.volume,muted:t.muted,onReady:this.props.playerStore.onReady,onStart:this.props.playerStore.onStart,onPlay:this.props.playerStore.handlePlay,onPause:this.props.playerStore.handlePause,onSeek:function(e){return console.log("onSeek",e)},onEnded:this.props.playerStore.handleEnded,onError:function(e){return console.log(e)},onProgress:this.props.playerStore.handleProgress,onDuration:this.props.playerStore.handleDuration})))}}]),t}(r.a.Component))||ee)||ee;a(272);var pe=Object(y.b)("playerStore")(Object(y.c)((function(e){return r.a.createElement("div",{style:{marginBottom:e.playerStore.playerState.playerActive&&"90px"},className:"footer mt-5"},r.a.createElement("div",{className:"footer-links"},r.a.createElement("a",{href:"http://github.com/pbaveja"},r.a.createElement("i",{className:"fab fa-github fa-xs"})),r.a.createElement("a",{href:"https://www.instagram.com/prakharbaveja"},r.a.createElement("i",{className:"fab fa-instagram fa-xs"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/prakhar-baveja-244907106/"},r.a.createElement("i",{className:"fab fa-linkedin fa-xs"}))),r.a.createElement("div",{className:"footer-copyright"},"Prakhar Baveja"))}))),de=a(55),ue=a.n(de),he=a(80),ye=a(2),fe=function e(){Object(s.a)(this,e),this.get=function(){var e=Object(he.a)(ue.a.mark((function e(t,a){var n,r;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Request("/api/"+t,{method:"GET"}),e.next=4,fetch(n);case 4:return r=e.sent,e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},ge=function e(){var t=this;Object(s.a)(this,e),this.playlists=[],this.status=!1,this.getPlaylistAsync=function(){var e=Object(he.a)(ue.a.mark((function e(a){var n,r,l;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={},r=new URLSearchParams(Object.entries(n)),e.next=5,t.apiService.get("spotify/playlists/"+a,r);case 5:l=e.sent,Object(ye.p)((function(){t.playlists.push(l)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Object(ye.p)((function(){t.status="error"}));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),this.apiService=new fe};Object(ye.j)(ge,{playlists:ye.o,searchQuery:ye.o,status:ye.o});var be,Ee,Se,ve=ge,ke=a(110),je=a(111),Ne=(a(274),be=function e(){var t=this;Object(s.a)(this,e),Object(ke.a)(this,"playerState",Ee,this),Object(ke.a)(this,"trackData",Se,this),this.playSong=Object(ye.f)((function(e){t.setTrackData(e),t.load(e.url)})),this.setTrackData=Object(ye.f)((function(e){t.playerState.trackData.trackId=e.id,t.playerState.trackData.name=e.name,t.playerState.trackData.image=e.image,t.playerState.trackData.artist=e.artist})),this.load=Object(ye.f)((function(e){t.playerState.url=e,t.playerState.playing=!0,t.playerState.played=0,t.playerState.loaded=0})),this.activatePlayer=Object(ye.f)((function(){t.playerState.playerActive=!0})),this.handlePlayPause=Object(ye.f)((function(){t.playerState.playing=!t.playerState.playing})),this.handlePlay=Object(ye.f)((function(){t.playerState.playing=!0,t.playerState.playerActive=!0})),this.handleStop=Object(ye.f)((function(){t.playerState.url=null,t.playerState.playing=!1,t.playerState.playerActive=!1})),this.handleEnded=Object(ye.f)((function(){t.playerState.playing=!1})),this.handleVolumeChange=Object(ye.f)((function(e){t.playerState.volume=parseFloat(e.target.value)})),this.handleToggleMuted=Object(ye.f)((function(){t.playerState.muted=!t.playerState.muted})),this.handleSetPlaybackRate=Object(ye.f)((function(e){t.playerState.playbackRate=parseFloat(e.target.value)})),this.handleSeekMouseDown=Object(ye.f)((function(e){t.playerState.seeking=!0})),this.handleSeekMouseUp=Object(ye.f)((function(e){console.log(e),t.playerState.seeking=!1,t.player.seekTo(parseFloat(e/100))})),this.handleSeekChange=Object(ye.f)((function(e){t.playerState.played=parseFloat(e/100)})),this.handleProgress=Object(ye.f)((function(e){t.playerState.seeking||(t.playerState.loaded=e.loaded,t.playerState.loadedSeconds=e.loadedSeconds,t.playerState.played=e.played,t.playerState.playedSeconds=e.playedSeconds)})),this.ref=function(e){t.player=e}},Ee=Object(je.a)(be.prototype,"playerState",[ye.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{trackData:{},url:null,playing:!1,volume:1,muted:!1,played:0,loaded:0,duration:0,playbackRate:1,loop:!1,buffering:!1,loadedSeconds:0,playedSeconds:0,playerActive:!1}}}),Se=Object(je.a)(be.prototype,"trackData",[ye.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{trackId:null,name:null,image:null,artist:null}}}),be),xe=h.a.TabPane,Oe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleSection=function(e){a.setState({activeSection:e})},a.store=new ve,a.playerStore=new Ne,a.state={activeSection:"1"},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{spotifyStore:this.store,playerStore:this.playerStore},r.a.createElement(c.a,{justify:"center",className:"my-5"},r.a.createElement(i.a,{xs:24,md:20},r.a.createElement(c.a,{justify:"center"},r.a.createElement(i.a,{span:24,className:"text-center"},r.a.createElement("img",{src:"/avatarPrakharSmall.jpeg",className:"img-fluid rounded-circle",style:{maxWidth:"150px"},alt:"avatar"})),r.a.createElement(i.a,{span:24},r.a.createElement(b,null))),r.a.createElement(c.a,{justify:"center",className:"mt-4"},r.a.createElement(i.a,{span:24,className:"text-center"},r.a.createElement(h.a,{size:"large",defaultActiveKey:"1",onChange:this.handleSection,tabBarStyle:{borderBottom:"none"},tabBarGutter:50},r.a.createElement(xe,{tab:"Projects",key:"1"},r.a.createElement(c.a,{justify:"start"}," ",r.a.createElement(X,null)," ")),r.a.createElement(xe,{tab:"Spotify x Me",key:"2"},r.a.createElement(A,null)),r.a.createElement(xe,{tab:"Contact",key:"3"},r.a.createElement(te,null))))))),r.a.createElement(me,null),r.a.createElement(pe,null))}}]),t}(r.a.Component);a(275),a(276),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[155,1,2]]]);
//# sourceMappingURL=main.80031e93.chunk.js.map
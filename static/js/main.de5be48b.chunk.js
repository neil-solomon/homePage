(this.webpackJsonphome_page=this.webpackJsonphome_page||[]).push([[0],{123:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(59),r=n.n(o),s=(n(77),n(78),n(1)),l=n(2),c=n(4),u=n(3),m=n(5),p=(n(46),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={nameClassName:"menuElementNameHoverOut",underscoreClassName:""},n.underscoreStyle={cursor:"pointer",display:"block",textAlign:"center",marginTop:"5px",borderBottom:"1px solid rgb(0,0,225,.5)",outline:"none"},n.hoverIn=function(){n.setState({nameClassName:"menuElementNameHoverIn"})},n.hoverOut=function(){n.props.active||n.setState({nameClassName:"menuElementNameHoverOut"})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){e.active&&!this.props.active?this.setState({nameClassName:"menuElementNameHoverOut"}):!e.active&&this.props.active&&this.setState({nameClassName:"menuElementNameHoverIn"})}},{key:"render",value:function(){var e,t,n,a=this;return e=this.props.active?"menuElementUnderscoreActivate":"menuElementUnderscoreDeactivate",this.props.windowIsLandscape?(t={fontSize:"25px",cursor:"pointer",display:"block",textAlign:"center",outline:"none"},n={display:"inline-block",marginLeft:"50px",marginRight:"50px",outline:"none"}):(t={fontSize:"20px",cursor:"pointer",display:"block",textAlign:"center",outline:"none"},n={display:"inline-block",marginLeft:"30px",marginRight:"30px",marginBottom:"10px",outline:"none"}),i.a.createElement("div",{style:n,onClick:function(){return a.props.handleClick(a.props.id)},onMouseEnter:this.hoverIn,onMouseLeave:this.hoverOut},i.a.createElement("div",{style:t,className:this.state.nameClassName},this.props.name),i.a.createElement("div",{style:this.underscoreStyle,className:e}))}}]),t}(i.a.Component)),d=n(21),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={animationTimeout:null},n.animationTimeout=function(){clearTimeout(n.state.animationTimeout),n.setState({animationTimeout:null})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout((function(){return e.animationTimeout()}),1e3);this.setState({animationTimeout:t})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.animationTimeout)}},{key:"render",value:function(){return null!=this.state.animationTimeout?null:(e=this.props.transitionOut?"menuContentTransitionOut":"menuContentTransitionIn",t=this.props.windowIsLandscape?{textAlign:"center",padding:"30px",fontSize:"20px",color:"rgb(33,33,33)"}:{textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"20px",fontSize:"18px",color:"rgb(33,33,33)"},i.a.createElement("div",{className:e},i.a.createElement("div",{style:t},"Hello!",i.a.createElement("br",null),i.a.createElement("br",null),"I am a student majoring in Computer Engineering and working part-time in software development. I have experience with C++, Python, and Javascript and I love creating interactive web pages using React. Check out my portfolio for examples of my projects!")));var e,t}}]),t}(i.a.Component),g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={imageClassName:"portfolioImage"},n.imageStyle={width:"100%",height:"auto",cursor:"pointer",borderRadius:"5px",boxShadow:"0px 2.5px 5px rgb(69, 90, 100, 0.25)"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,n;return this.props.windowIsLandscape?(e={display:"inline-block",width:"35vw",marginTop:"30px",marginLeft:"5vw",marginRight:"5vw",height:"425px",textAlign:"center",verticalAlign:"top"},t={fontSize:"20px",color:"rgb(83, 109, 254)",cursor:"pointer"},n={fontSize:"20px",color:"rgb(33,33,33)"}):(e={display:"inline-block",width:"80vw",marginTop:"20px",marginLeft:"5vw",marginRight:"5vw",height:"425px",textAlign:"center",verticalAlign:"top"},t={fontSize:"18px",color:"rgb(83, 109, 254)",cursor:"pointer"},n={fontSize:"18px",color:"rgb(33,33,33)"}),i.a.createElement("div",{style:e},i.a.createElement("a",{href:this.props.link,target:"blank"},i.a.createElement("img",{style:this.imageStyle,className:this.state.imageClassName,src:this.props.image,alt:this.props.name}),i.a.createElement("div",{style:t},this.props.name)),i.a.createElement("div",{style:n},this.props.description))}}]),t}(i.a.Component),v=n(60),w=n.n(v),f=n(61),b=n.n(f),E=n(62),y=n.n(E),T=n(63),k=n.n(T),M=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={animationTimeout:null},n.animationTimeout=function(){clearTimeout(n.state.animationTimeout),n.setState({animationTimeout:null})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout((function(){return e.animationTimeout()}),1e3);this.setState({animationTimeout:t})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.animationTimeout)}},{key:"render",value:function(){return null!=this.state.animationTimeout?null:(e=this.props.transitionOut?"menuContentTransitionOut":"menuContentTransitionIn",i.a.createElement("div",{className:e},i.a.createElement("div",null,i.a.createElement(g,{name:"Tic-Tac-Grow",description:"Original game Tic-Tac-Grow adds an exciting twist to the\r classic game by randomly adding a new cell to the board \r after each player takes their turn. Choose how many X's or O's in a\r row it takes to win and how big you want the board to grow.",image:b.a,link:"https://neil-solomon.github.io/score_keeper#/TicTacGrow",windowIsLandscape:this.props.windowIsLandscape}),i.a.createElement(g,{name:"Scoreboard",description:"An interactive scoreboard for keeping score during your\r favorite games. Featuring colorful icons for each player and\r a live chart of scoring progression. Turn score-keeping from a\r tedious chore to a fun and exciting part of game night!",image:w.a,link:"https://neil-solomon.github.io/score_keeper#/Scoreboard",windowIsLandscape:this.props.windowIsLandscape}),i.a.createElement(g,{name:"Risk Dice Roller",description:"The Risk Dice Roller will save you from rolling dice for hours on end.\r Featuring win probabilites calculated by running 1,000's of simulations,\r a live chart of the state of the armies as the battle progresses,\r and a uniform distribution of dice roll probabilities.",image:y.a,link:"https://neil-solomon.github.io/score_keeper#/RiskDiceRoller",windowIsLandscape:this.props.windowIsLandscape}),i.a.createElement(g,{name:"Virtual Bank",description:"Use the Virtual Bank to keep track of all of the money for\r all of the players in your game. Whether you have lost your Monopoly money\r or run out of Poker chips, the Virtual Bank makes it so you\r never have to make change or do math again!",image:k.a,link:"https://neil-solomon.github.io/score_keeper#/VirtualBank",windowIsLandscape:this.props.windowIsLandscape}))));var e}}]),t}(i.a.Component),A=n(125),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={animationTimeout:null,iconClassNames:["connectIcon","connectIcon"]},n.animationTimeout=function(){clearTimeout(n.state.animationTimeout),n.setState({animationTimeout:null})},n.hoverIn=function(e){var t=Object(d.a)(n.state.iconClassNames);t[e]="connectIconHoverIn",n.setState({iconClassNames:t})},n.hoverOut=function(e){var t=Object(d.a)(n.state.iconClassNames);t[e]="connectIconHoverOut",n.setState({iconClassNames:t})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout((function(){return e.animationTimeout()}),1e3);this.setState({animationTimeout:t})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.animationTimeout)}},{key:"render",value:function(){var e,t,n=this;return null!=this.state.animationTimeout?null:(e=this.props.transitionOut?"menuContentTransitionOut":"menuContentTransitionIn",t=this.props.windowIsLandscape?{textAlign:"center",padding:"30px",fontSize:"20px",color:"rgb(0,0,0,.75)"}:{textAlign:"center",paddingLeft:"10px",paddingRight:"10px",paddingTop:"20px",fontSize:"18px",color:"rgb(0,0,0,.75)"},i.a.createElement("div",{className:e},i.a.createElement("div",{style:t},"Please connect with me on LinkedIn! Also, check out the source code for all of my projects on Github."),i.a.createElement("div",{className:"connectIcons"},i.a.createElement("a",{href:"https://www.linkedin.com/in/neil-solomon/",target:"blank"},i.a.createElement("span",{className:this.state.iconClassNames[0]},i.a.createElement(A.a,{onMouseEnter:function(){return n.hoverIn(0)},onMouseLeave:function(){return n.hoverOut(0)},type:"linkedin"}))),i.a.createElement("a",{href:"https://github.com/neil-solomon",target:"blank"},i.a.createElement("span",{className:this.state.iconClassNames[1]},i.a.createElement(A.a,{onMouseEnter:function(){return n.hoverIn(1)},onMouseLeave:function(){return n.hoverOut(1)},type:"github"}))))))}}]),t}(i.a.Component),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={animationTimeout:null},n.breakStyle={marginTop:"30px",borderBottom:"1px solid rgb(189, 189, 189)"},n.highlightStyle={color:"rgb(83, 109, 254)"},n.animationTimeout=function(){clearTimeout(n.state.animationTimeout),n.setState({animationTimeout:null})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout((function(){return e.animationTimeout()}),1e3);this.setState({animationTimeout:t})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.state.animationTimeout)}},{key:"render",value:function(){return null!=this.state.animationTimeout?null:(e=this.props.transitionOut?"menuContentTransitionOut":"menuContentTransitionIn",t=this.props.windowIsLandscape?{padding:"30px",fontSize:"20px",textAlign:"center",color:"rgb(0,0,0,.75)"}:{paddingLeft:"10px",paddingRight:"10px",paddingTop:"20px",fontSize:"16px",textAlign:"center",color:"rgb(0,0,0,.75)"},i.a.createElement("div",{className:e},i.a.createElement("div",{style:t},i.a.createElement("div",{style:this.highlightStyle},"EDUCATION"),i.a.createElement("br",null),i.a.createElement("strong",null,"\u2003City College of the City University of New York"),i.a.createElement("br",null),"\u2003Bachelors of Engineering, Computer Engineering: June 2021. GPA: 3.0",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("strong",null,"\u2003LaGuardia Community College of the City University of New York"),i.a.createElement("br",null),"\u2003Associate in Science, Electrical Engineering: June 2018. GPA: 3.7",i.a.createElement("br",null),i.a.createElement("div",{style:this.breakStyle}),i.a.createElement("br",null),i.a.createElement("div",{style:this.highlightStyle},"COURSEWORK"),i.a.createElement("br",null),i.a.createElement("strong",null,"Completed"),i.a.createElement("br",null),"C++ for Engineers, Programming for EE (C++), Linear Algebra, Discrete Mathematics, Probability & Statistics, Calculus I II III & IV, Computer Aided Analysis (MATLAB), Digital Computer Systems",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("strong",null,"In Progress"),i.a.createElement("br",null),"Data Structures, Algorithms, Assembly Language, Operating Systems, Software Design",i.a.createElement("br",null),i.a.createElement("div",{style:this.breakStyle}),i.a.createElement("br",null),i.a.createElement("div",{style:this.highlightStyle},"EXPERIENCE"),i.a.createElement("br",null),i.a.createElement("strong",null,"GAL Manufacturing ",i.a.createElement("br",null),"R&D Software Technician, August 2018-present"),i.a.createElement("br",null),"Used React framework for development of the GALileo web app with a focus on displaying real-time data from the GALaxy elevator controller. Applied principles of object-oriented and functional programming in Python and C to improve the speed and maintainability of GALileo code.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("strong",null,"GAL Manufacturing",i.a.createElement("br",null)," R&D Software Intern, June 2018 - August 2018"),i.a.createElement("br",null),"Developed back-end code to facilitate communication between the GALaxy elevator controller and the new GALileo web-based application. Presented the new GALileo web app to company executives, showcasing live communication between the GALileo webpage and GALaxy elevator controller. Assisted in documentation of software team processes including GALaxy simulator set-up and testing, and software version control.",i.a.createElement("br",null),i.a.createElement("div",{style:this.breakStyle}),i.a.createElement("br",null),i.a.createElement("div",{style:this.highlightStyle},"AFFILIATIONS"),i.a.createElement("br",null),i.a.createElement("strong",null,"National Society of Black Engineers"),i.a.createElement("br",null),"Member, 2017-present.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("strong",null,"Institute of Electronics and Electrical Engineers"),i.a.createElement("br",null),"Member, 2017-present.")));var e,t}}]),t}(i.a.Component),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={className:"menuViewBlank",activeMenu:[!1,!1,!1,!1],transitionOutMenuView:!1,setActiveMenuTimeout:null},n.setActiveMenu=function(e){for(var t=Object(d.a)(n.state.activeMenu),a=0;a<t.length;++a)t[a]=a===e;clearTimeout(n.state.setActiveMenuTimeout),n.setState({transitionOutMenuView:!1}),n.setState({activeMenu:t})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;if(e.activeMenu!==this.props.activeMenu){var n,a;e.activeMenu[0]||e.activeMenu[1]||e.activeMenu[2]||e.activeMenu[3]?e.activeMenu[0]&&this.props.activeMenu[1]?(n="menuViewAboutToPortfolio",a=1):e.activeMenu[1]&&this.props.activeMenu[0]?(n="menuViewPortfolioToAbout",a=0):e.activeMenu[0]&&this.props.activeMenu[2]?(n="menuViewAboutToResume",a=2):e.activeMenu[2]&&this.props.activeMenu[0]?(n="menuViewResumeToAbout",a=0):e.activeMenu[0]&&this.props.activeMenu[3]?(n="menuViewAboutToConnect",a=3):e.activeMenu[3]&&this.props.activeMenu[0]?(n="menuViewConnectToAbout",a=0):e.activeMenu[1]&&this.props.activeMenu[2]?(n="menuViewPortfolioToResume",a=2):e.activeMenu[2]&&this.props.activeMenu[1]?(n="menuViewResumeToPortfolio",a=1):e.activeMenu[1]&&this.props.activeMenu[3]?(n="menuViewPortfolioToConnect",a=3):e.activeMenu[3]&&this.props.activeMenu[1]?(n="menuViewConnectToPortfolio",a=1):e.activeMenu[2]&&this.props.activeMenu[3]?(n="menuViewResumeToConnect",a=3):e.activeMenu[3]&&this.props.activeMenu[2]&&(n="menuViewConnectToResume",a=2):(n="menuViewBlankToAbout",a=0);var i=setTimeout((function(){return t.setActiveMenu(a)}),250);this.setState({setActiveMenuTimeout:i}),this.setState({className:n}),this.setState({transitionOutMenuView:!0})}}},{key:"render",value:function(){var e;return this.state.activeMenu[0]?e=i.a.createElement(h,{windowIsLandscape:this.props.windowIsLandscape,transitionOut:this.state.transitionOutMenuView}):this.state.activeMenu[1]?e=i.a.createElement(M,{windowIsLandscape:this.props.windowIsLandscape,transitionOut:this.state.transitionOutMenuView}):this.state.activeMenu[2]?e=i.a.createElement(S,{windowIsLandscape:this.props.windowIsLandscape,transitionOut:this.state.transitionOutMenuView}):this.state.activeMenu[3]&&(e=i.a.createElement(O,{windowIsLandscape:this.props.windowIsLandscape,transitionOut:this.state.transitionOutMenuView})),i.a.createElement("div",{style:{backgroundColor:"white"},className:this.state.className},e)}}]),t}(i.a.Component),I=n(70),x=n.n(I),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={activeMenu:[!1,!1,!1,!1],activateMenuTimeout:null,changeHeaderTimeout:null,menusAnimatingTimeout:null,initialAnimation:!0,windowIsLandscape:!0,headerClassNames:["header1","headerPicture1","headerTitle1","headerDescription1","headerSpanTitle1","headerSpanDescription1"]},n.windowResize=function(){n.setState({windowIsLandscape:window.innerWidth>window.innerHeight})},n.changeHeaderStyles=function(){clearTimeout(n.state.changeHeaderTimeout),n.setState({headerClassNames:["header2","headerPicture2","headerTitle2","headerDescription2","headerSpanTitle2","headerSpanDescription2"]}),n.setState({initialAnimation:!1})},n.toggleMenus=function(e){if(!n.state.menusAnimatingTimeout&&!n.state.initialAnimation){for(var t=[],a=0;a<n.state.activeMenu.length;++a)a===e?t.push(!0):t.push(!1);var i=setTimeout((function(){return n.toggleMenusAnimatingTimeout()}),1500);n.setState({activeMenu:t}),n.setState({menusAnimatingTimeout:i})}},n.toggleMenusAnimatingTimeout=function(){clearTimeout(n.state.menusAnimatingTimeout),n.setState({menusAnimatingTimeout:null})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=setTimeout((function(){return e.toggleMenus(0)}),2500),n=setTimeout((function(){return e.changeHeaderStyles()}),2400);window.addEventListener("resize",this.windowResize),this.setState({windowIsLandscape:window.innerWidth>window.innerHeight}),this.setState({activateMenuTimeout:t}),this.setState({changeHeaderTimeout:n})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.windowResize),clearTimeout(this.state.activateMenuTimeout),clearTimeout(this.state.changeHeaderTimeout)}},{key:"render",value:function(){var e,t;return this.state.initialAnimation||(e=i.a.createElement("div",{className:this.state.headerClassNames[4]},"Neil Solomon"),t=i.a.createElement("div",{className:this.state.headerClassNames[5]},"Software Engineer")),i.a.createElement("div",null,i.a.createElement("div",{style:{zIndex:1,position:"relative"}},i.a.createElement("div",{style:{backgroundColor:"white"}},i.a.createElement("div",{className:this.state.headerClassNames[0]},e,i.a.createElement("img",{src:x.a,alt:"myPicture",className:this.state.headerClassNames[1]}),t,i.a.createElement("div",{className:this.state.headerClassNames[2]},"Neil Solomon"),i.a.createElement("div",{className:this.state.headerClassNames[3]},"Software Engineer"))),i.a.createElement("div",{className:"menuElements"},i.a.createElement(p,{name:"About Me",id:0,active:this.state.activeMenu[0],handleClick:this.toggleMenus,windowIsLandscape:this.state.windowIsLandscape}),i.a.createElement(p,{name:"Portfolio",id:1,active:this.state.activeMenu[1],handleClick:this.toggleMenus,windowIsLandscape:this.state.windowIsLandscape}),i.a.createElement(p,{name:"Resume",id:2,active:this.state.activeMenu[2],handleClick:this.toggleMenus,windowIsLandscape:this.state.windowIsLandscape}),i.a.createElement(p,{name:"Connect",id:3,active:this.state.activeMenu[3],handleClick:this.toggleMenus,windowIsLandscape:this.state.windowIsLandscape})),i.a.createElement(C,{windowIsLandscape:this.state.windowIsLandscape,activeMenu:this.state.activeMenu}),void 0),i.a.createElement("div",{className:"backgroundAnimations"},i.a.createElement("div",{className:"backgroundAnimation1"}),i.a.createElement("div",{className:"backgroundAnimation2"}),i.a.createElement("div",{className:"backgroundAnimation3"}),i.a.createElement("div",{className:"backgroundAnimation4"}),i.a.createElement("div",{className:"backgroundAnimation5"}),i.a.createElement("div",{className:"backgroundAnimation6"}),i.a.createElement("div",{className:"backgroundAnimation7"}),i.a.createElement("div",{className:"backgroundAnimation8"})))}}]),t}(i.a.Component);var L=function(){return i.a.createElement("div",null,i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,t,n){},60:function(e,t,n){e.exports=n.p+"static/media/scoreboard.f2bd72e5.jpg"},61:function(e,t,n){e.exports=n.p+"static/media/ticTacGrow.8b71040b.jpg"},62:function(e,t,n){e.exports=n.p+"static/media/riskDiceRoller.8723012d.jpg"},63:function(e,t,n){e.exports=n.p+"static/media/virtualBank.6a25bcad.jpg"},70:function(e,t,n){e.exports=n.p+"static/media/wedding1crop2.5e6575f8.jpg"},72:function(e,t,n){e.exports=n(123)},77:function(e,t,n){},78:function(e,t,n){}},[[72,1,2]]]);
//# sourceMappingURL=main.de5be48b.chunk.js.map
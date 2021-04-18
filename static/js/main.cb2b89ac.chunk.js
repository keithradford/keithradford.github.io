(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var o=n(40),i=n.n(o),a=(n(88),n(121)),r=n(114),s=n(126),c=n(115),l=n(116),h=n(74),d=n(26),p=n(4);function b(){return Object(p.jsxs)(r.a,{justifyContent:"center",alignItems:"center",h:"100vh",bgRepeat:"no-repeat",bgSize:"cover",bgImg:"url(".concat("/portfolio/assets/background.jpg",")"),flexDirection:"column",color:"white",children:[Object(p.jsx)(s.a,{mt:"1rem",children:Object(p.jsx)(c.a,{as:"h1",fontSize:"4.5rem",fontFamily:"Open Sans",fontWeight:"bold",mb:"1rem",mr:"1rem",children:"Keith Radford"})}),Object(p.jsx)(c.a,{fontSize:"1.3rem",fontWeight:"bold",mt:"0",fontFamily:"Open Sans",children:"Software Engineering Student at the University of Victoria"}),Object(p.jsx)(h.Link,{to:"info",smooth:!0,children:Object(p.jsx)(l.a,{mt:"2.3rem","aria-label":"scroll-button",icon:Object(p.jsx)(d.a,{}),size:"lg",isRound:!0,colorScheme:"whiteAlpha",id:"down",fontSize:"30px"})})]})}var m=n(117),g=n(125),j=n(118),u=n(119),f=n(120),w=n(63);function x(e){var t=e.link,n=e.icon,o=e.label;return Object(p.jsx)(l.a,{id:"social","aria-label":o,icon:n,size:"lg",isRound:!0,colorScheme:"whiteAlpha",fontSize:"30px",as:"a",href:t,target:"_blank",_hover:{bgColor:"#EE495A"},_focus:{border:"none"}})}function k(){return Object(p.jsxs)(s.a,{spacing:"25px",children:[Object(p.jsx)(x,{label:"github",icon:Object(p.jsx)(w.a,{}),link:"https://github.com/keithradford"}),Object(p.jsx)(x,{label:"linkedin",icon:Object(p.jsx)(w.b,{}),link:"https://www.linkedin.com/in/keith-radford/"}),";"]})}function O(){return Object(p.jsx)(m.a,{minH:"fit-content",w:"70%",my:20,mx:"auto",children:Object(p.jsxs)(s.b,{align:"left",children:[Object(p.jsx)(c.a,{as:"h3",fontFamily:"Open Sans",fontWeight:"bold",color:"white",children:"About Me"}),Object(p.jsxs)(s.a,{children:[Object(p.jsx)(g.a,{src:"".concat("/portfolio/assets/keith.JPG"),h:"250px"}),Object(p.jsx)(j.a,{}),Object(p.jsxs)(s.b,{color:"whitesmoke",w:"75%",children:[Object(p.jsxs)(u.a,{children:["My name's Keith and I'm a student and software developer with an interest in making tools to help others. I'm from Victoria, BC and currently studying Software Engineering at UVic.",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"I am a former hockey player who has always had an interest in computers and how they work. Aside from coding I enjoy fitness, skiing, video games, and chess among other things. ",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),"Check me out on the various networks linked below, take a look at my"," ",Object(p.jsx)(f.a,{color:"#EE495A",href:"".concat("/portfolio/assets/resume.pdf"),target:"_blank",_focus:{border:"none"},children:"resume"}),", send me an email at"," ",Object(p.jsx)(f.a,{color:"#EE495A",href:"mailto:khr8771@gmail.com",_focus:{border:"none"},children:"khr8771@gmail.com"}),", and take a look at some of my projects and work experience!"]}),Object(p.jsx)(k,{})]})]})]})})}var y=n(7),v=n(80),S=n(123),C=n(122),I=n(1);function E(e){var t=e.project,n=Object(I.useState)(!1),o=Object(y.a)(n,2),i=o[0],c=o[1];return Object(p.jsxs)(a.a,{w:"100%",children:[Object(p.jsx)(v.a,{onClick:function(){return c(!i)},mt:"1px",w:"100%",py:"30px",borderRadius:"0",alignContent:"left",_focus:{border:"none"},children:Object(p.jsxs)(r.a,{align:"left",w:"100%",children:[Object(p.jsx)(u.a,{as:"strong",children:t.name}),Object(p.jsx)(u.a,{mx:"5px",children:"-"}),Object(p.jsx)(u.a,{color:"gray.900",children:t.slogan}),Object(p.jsx)(j.a,{}),i?Object(p.jsx)(d.b,{}):Object(p.jsx)(d.a,{})]})}),Object(p.jsx)(S.a,{in:i,children:Object(p.jsxs)(a.a,{bg:"white",px:"15px",pb:"15px",children:[t.links.map((function(e){return Object(p.jsx)(f.a,{color:"#EE495A",href:e.link,target:"_blank",_focus:{border:"none"},mr:"8px",children:e.name})})),Object(p.jsx)(u.a,{pb:"15px",pt:"5px",children:t.description}),Object(p.jsx)(s.a,{children:t.languages.map((function(e){return Object(p.jsx)(C.a,{bgColor:"#EE495A",color:"white",p:"5px",children:e})}))})]})})]})}var R=[{name:"uvic-course-scraper",slogan:"a Node.js scraper library for UVic course and schedule information",languages:["Node.js","TypeScript"],links:[{name:"github",link:"https://github.com/VikeLabs/uvic-course-scraper"},{name:"npm page",link:"https://www.npmjs.com/package/@vikelabs/uvic-course-scraper"}],description:"uvic-course-scraper is an NPM package developed by a team of UVic students with the goal of scraping UVic course data into a clean program-friendly format. Developed using the package Cheerio, we were able to parse UVic's HTML and expose to users of the package easy-to-use functions which provide various different types of data regarding courses."},{name:"clockwork",languages:["React","TypeScript","Firebase","Chakra UI"],slogan:"simplify the experience of searching courses and building timetables",links:[{name:"github",link:"https://github.com/VikeLabs/clockwork"},{name:"website",link:"https://clockwork.vikelabs.dev/"}],description:"clockwork is a website developed by a team of UVic students to improve the flow of viewing course information and building timetables for UVic. As it stands, students must visit three separate pages to view all the relevant information for a given course and it's sections. We built a simplified single-page view for every course at UVic which quickly displays students the information they want to see. The website acted as a way for us to gain experience in full-stack development, the importance of UI and UX, and working as a team using project management tools, participating in code review, and more."},{name:"Terminal Chess",languages:["Java"],slogan:"chess played through the command line",links:[{name:"github",link:"https://github.com/keithradford/terminal-chess"}],description:'Chess is a timeless game which also makes for a great project to work on to flesh out programming skills. So that\'s what I did! After I initially learned how to code in Java I set out to develop the game "Snake" played solely through the command line. While I was happy with what I produced and learned in the process, the game was a bit too complex for the environment I was looking to have it run in. However, instead of letting the code fade to obscurity I transformed it into chess instead! A much simpler, turn-based game, ended up working much better and proved to be a great challenge despite my proficiency in programming having increased between the development of the two.'}];function A(){return Object(p.jsxs)(s.b,{alignContent:"center",w:"70%",mx:"auto",align:"left",mt:"10rem",children:[Object(p.jsx)(c.a,{as:"h3",fontFamily:"Open Sans",fontWeight:"bold",color:"white",children:"Projects and Contributions"}),R.map((function(e){return Object(p.jsx)(E,{project:e})}))]})}function V(e){var t=e.work,n=Object(I.useState)(!1),o=Object(y.a)(n,2),i=o[0],c=o[1];return Object(p.jsxs)(a.a,{w:"100%",children:[Object(p.jsx)(v.a,{onClick:function(){return c(!i)},mt:"1px",w:"100%",py:"30px",borderRadius:"0",alignContent:"left",_focus:{border:"none"},children:Object(p.jsxs)(r.a,{align:"left",w:"100%",children:[Object(p.jsx)(u.a,{as:"strong",children:t.company}),Object(p.jsx)(u.a,{mx:"5px",children:"-"}),Object(p.jsx)(u.a,{color:"gray.900",children:t.position}),Object(p.jsx)(j.a,{}),i?Object(p.jsx)(d.b,{}):Object(p.jsx)(d.a,{})]})}),Object(p.jsx)(S.a,{in:i,children:Object(p.jsxs)(a.a,{bg:"white",px:"15px",pb:"15px",children:[t.links.map((function(e){return Object(p.jsx)(f.a,{color:"#EE495A",href:e.link,target:"_blank",_focus:{border:"none"},mr:"8px",children:e.name})})),Object(p.jsx)(u.a,{pb:"15px",pt:"5px",children:t.description}),Object(p.jsx)(s.a,{children:t.skills.map((function(e){return Object(p.jsx)(C.a,{bgColor:"#EE495A",color:"white",p:"5px",children:e})}))})]})})]})}var U=[{company:"Rooof",position:"Integration Engineer - Co-op",skills:["XPath","RegEx","Python","Django","JavaScript","AWS Route 53"],links:[{name:"website",link:"https://www.rooof.com/"}],period:"January 2020 - April 2020",description:'Rooof offers a chrome extension called PostEngine which real-estate companies to use to allow them to easily post listings from their websites onto Craigslist. My job was to create "mappings" of newly on-boarded companies websites which was essentially performing web-scraping tasks to tell the extension how to navigate the sites. I also got the opportunity to develop scripts using Python, Django, and AWS Route 53 to help automate tasks which allowed me to build software development skills working with experienced engineers.'},{company:"Change.org",position:"Software Engineer Intern",skills:["React","TypeScript","Docker","Ruby on Rails","GraphQL","Agile development"],links:[{name:"website",link:"https://www.change.org/"}],period:"January 2021 - April 2021",description:"Worked on the deprecation of Change.org's monolithic Ruby on Rails web app by translating pages from the legacy codebase into a more modern codebase made using React. Tasks involved reading and understanding Ruby on Rails, creating pages with React, creating new queries and mutations in GraphQL, and working in a containerized environment with Docker among many other things. Participated in daily stand-ups and agile development doing 2-week long sprints with the team I was apart of."},{company:"VikeLabs (Clockwork)",position:"Team Lead",skills:["Project management","Communication","Leadership"],links:[{name:"vikelabs",link:"https://www.vikelabs.ca/"},{name:"clockwork",link:"https://clockwork.vikelabs.dev/"}],period:"September 2020 - Present",description:"Worked as a team lead for a continuously growing team with the goal to develop and maintain a fully functioning website. Through the UVic club VikeLabs, I got placed into a team to work on a project throughout the Fall 2020 term. I was approached to be the team lead and have enjoyed working with my teammates as well as gaining skills in leadership, project management, and development skills throughout the period with the team."}];function L(){return Object(p.jsxs)(s.b,{alignContent:"center",w:"70%",mx:"auto",align:"left",my:"10rem",children:[Object(p.jsx)(c.a,{as:"h3",fontFamily:"Open Sans",fontWeight:"bold",color:"white",children:"Work Experience"}),U.map((function(e){return Object(p.jsx)(V,{work:e})}))]})}function P(){return Object(p.jsxs)(a.a,{bg:"#353535",children:[Object(p.jsx)(b,{}),Object(p.jsx)(O,{}),Object(p.jsxs)(a.a,{minH:"100vh",id:"info",children:[Object(p.jsx)(A,{}),Object(p.jsx)(L,{})]}),Object(p.jsx)("footer",{style:{textAlign:"center",color:"whitesmoke"},children:"\xa9 2021 Keith Radford"})]})}var W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),a(e),r(e)}))},_=n(124);i.a.render(Object(p.jsx)(_.a,{children:Object(p.jsx)(P,{})}),document.getElementById("root")),W()},88:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.cb2b89ac.chunk.js.map
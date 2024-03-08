(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8781:function(e,s,t){Promise.resolve().then(t.bind(t,2109)),Promise.resolve().then(t.bind(t,8217)),Promise.resolve().then(t.bind(t,9137)),Promise.resolve().then(t.bind(t,2551)),Promise.resolve().then(t.t.bind(t,1934,23))},2109:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return a}});var n=t(7437),i=t(963);function a(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.x7,{position:"top-right"})})}},8217:function(e,s,t){"use strict";t.r(s);var n=t(7437),i=t(1126),a=t(703);s.default=function(){return(0,n.jsxs)("div",{className:"bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center",children:[(0,n.jsx)(a.default,{src:"https://links.papareact.com/2i6",width:300,height:300,alt:"logo"}),(0,n.jsx)("button",{onClick:()=>(0,i.signIn)("google"),className:"text-white font-bold text-3xl animate-pulse",children:"Sign In to use ChatGPT"})]})}},2066:function(e,s,t){"use strict";var n=t(7437),i=t(7809),a=t(9262);let l=()=>fetch("/api/getEngines").then(e=>e.json());s.Z=function(){let{data:e,isLoading:s}=(0,i.ZP)("models",l),{data:t,mutate:r}=(0,i.ZP)("model",{fallbackData:"text-davinci-003"});return(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)(a.ZP,{className:"mt-2",options:null==e?void 0:e.modelOptions,defaultValue:t,placeholder:t,isSearchable:!0,isLoading:s,menuPosition:"fixed",classNames:{control:e=>"bg-slate-800  border-[#434654]"},onChange:e=>r(e.value)})})}},9058:function(e,s,t){"use strict";t.r(s);var n=t(7437),i=t(1073),a=t(8121),l=t(1126),r=t(7907),c=t(4793);s.default=function(){let e=(0,r.useRouter)(),{data:s}=(0,l.useSession)(),t=async()=>{var t,n;let i=await (0,a.ET)((0,a.hJ)(c.db,"users",null==s?void 0:null===(t=s.user)||void 0===t?void 0:t.email,"chats"),{userId:null==s?void 0:null===(n=s.user)||void 0===n?void 0:n.email,createdAt:(0,a.Bt)()});e.push("/chat/".concat(i.id))};return(0,n.jsxs)("div",{onClick:t,className:"border-gray-700 border chatRow",children:[(0,n.jsx)(i.Z,{className:"h-4 w-4"}),(0,n.jsx)("p",{children:"NewChat"})]})}},9137:function(e,s,t){"use strict";t.r(s),t.d(s,{SessionProvider:function(){return a}});var n=t(7437),i=t(1126);function a(e){let{children:s,session:t}=e;return(0,n.jsx)(i.SessionProvider,{children:s})}},2551:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return p}});var n=t(7437),i=t(8121),a=t(1126),l=t(8106),r=t(4793),c=t(3333),o=t(4424),d=t(8792),u=t(7907),h=t(2265),m=function(e){var s,t;let{id:m}=e,x=(0,u.usePathname)(),f=(0,u.useRouter)(),{data:v}=(0,a.useSession)(),[p,g]=(0,h.useState)(!1),[j]=(0,l.Kx)((0,i.hJ)(r.db,"users",null==v?void 0:null===(s=v.user)||void 0===s?void 0:s.email,"chats",m,"messages"));(0,h.useEffect)(()=>{x&&g(x.includes(m))},[x]);let b=async()=>{var e;await (0,i.oe)((0,i.JU)(r.db,"users",null==v?void 0:null===(e=v.user)||void 0===e?void 0:e.email,"chats",m)),f.replace("/")};return(0,n.jsxs)(d.default,{href:"/chat/".concat(m),className:"chatRow justify-center ".concat(p&&"bg-gray-700/50"),children:[(0,n.jsx)(c.Z,{className:"h-5 w-5"}),(0,n.jsx)("p",{className:"flex-1 hidden md:inline-flex truncate",children:(null==j?void 0:null===(t=j.docs[(null==j?void 0:j.docs.length)-1])||void 0===t?void 0:t.data().text)||"New Chat"}),(0,n.jsx)(o.Z,{onClick:b,className:"h-5 w-5 text-gray-700 hover:text-red-700"})]})},x=t(2066),f=t(9058),v=t(7913),p=function(){var e,s,t;let{data:c}=(0,a.useSession)(),[o,d,u]=(0,l.Kx)(c&&(0,i.IO)((0,i.hJ)(r.db,"users",null===(e=c.user)||void 0===e?void 0:e.email,"chats"),(0,i.Xo)("createdAt","asc")));return(0,n.jsxs)("div",{className:"hidden md:flex flex-col h-screen p-2",children:[(0,n.jsx)("div",{className:"flex-1",children:(0,n.jsxs)("div",{children:[(0,n.jsx)(f.default,{}),(0,n.jsx)("div",{className:"hidden sm:inline",children:(0,n.jsx)(x.Z,{})}),(0,n.jsxs)("div",{className:"flex flex-col space-y-2 my-2",children:[d&&(0,n.jsx)("div",{className:"animate-pulse text-center text-white",children:(0,n.jsx)("p",{children:"Loading Chats..."})}),null==o?void 0:o.docs.map(e=>(0,n.jsx)(m,{id:e.id},e.id))]})]})}),c&&(0,n.jsxs)("div",{className:"flex justify-between items-center cursor-pointer text-gray-300 transition-all duration-200 ease-out rounded-lg px-2",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,n.jsx)("img",{onClick:()=>(0,a.signOut)(),src:null===(s=c.user)||void 0===s?void 0:s.image,alt:"Profile picture",className:"h-10 2xl:h-12 w-10 2xl:w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"}),(0,n.jsx)("p",{className:"truncate",children:null===(t=c.user)||void 0===t?void 0:t.name})]}),(0,n.jsx)(v.Z,{className:"h-7 w-7"})]})]})}},4793:function(e,s,t){"use strict";t.d(s,{db:function(){return l}});var n=t(6142),i=t(8121);let a=(0,n.C6)().length?(0,n.Mq)():(0,n.ZF)({apiKey:"AIzaSyAq95sHH8SOfCrpE7Lo2kmq995-HPmAuxQ",authDomain:"chartgpt-messenger-ed3bb.firebaseapp.com",projectId:"chartgpt-messenger-ed3bb",storageBucket:"chartgpt-messenger-ed3bb.appspot.com",messagingSenderId:"950601888774",appId:"1:950601888774:web:677918d13804beaa013f87"}),l=(0,i.ad)(a)},1934:function(){}},function(e){e.O(0,[358,161,273,90,971,69,744],function(){return e(e.s=8781)}),_N_E=e.O()}]);
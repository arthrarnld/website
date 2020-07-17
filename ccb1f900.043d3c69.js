(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(7),o=(n(0),n(154)),i={title:"Neon: Node + Rust = \ud83d\udc96",author:"Dave Herman",categories:["Rust","Node","Neon"]},l={permalink:"/blog/2015/12/23/neon-node-rust",source:"@site/blog/2015-12-23-neon-node-rust.md",description:":::caution",date:"2015-12-23T00:00:00.000Z",tags:[],title:"Neon: Node + Rust = \ud83d\udc96",readingTime:6.225,truncated:!1,prevItem:{title:"Native JS Classes in Neon",permalink:"/blog/2016/04/01/native-js-classes-in-neon"}},s=[{value:"I Can Rust and So Can You!",id:"i-can-rust-and-so-can-you",children:[]},{value:"I Take Thee at thy Word",id:"i-take-thee-at-thy-word",children:[]},{value:"Fall Into our Rustic Revelry",id:"fall-into-our-rustic-revelry",children:[]},{value:"Their Thread of Life is Spun",id:"their-thread-of-life-is-spun",children:[]},{value:"Bridge Most Valiantly, with Excellent Discipline",id:"bridge-most-valiantly-with-excellent-discipline",children:[]},{value:"Wherefore&#39;s this Noise?",id:"wherefores-this-noise",children:[]},{value:"A Quick Thanks",id:"a-quick-thanks",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This article contains references to an outdated version of neon"))),Object(o.b)("p",null,"If you're a JavaScript programmer who's been intrigued by Rust's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://blog.rust-lang.org/2015/08/14/Next-year.html"}),Object(o.b)("em",{parentName:"a"},"hack without fear"))," theme---making systems programming safe and fun---but you've been waiting for inspiration, I may have something for you! I've been working on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dherman/neon"}),"Neon"),", a set of APIs and tools for ",Object(o.b)("strong",{parentName:"p"},"making it super easy to write native Node modules in Rust"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"TL;DR:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/dherman/neon"}),"Neon")," is an API for writing fast, crash-free native Node modules in Rust;"),Object(o.b)("li",{parentName:"ul"},"Neon enables Rust's parallelism with guaranteed thread safety;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/dherman/neon-cli"}),"Neon-cli")," makes it easy to create a Neon project and get started; and finally..."),Object(o.b)("li",{parentName:"ul"},"Help wanted!")),Object(o.b)("h2",{id:"i-can-rust-and-so-can-you"},"I Can Rust and So Can You!"),Object(o.b)("p",null,"I wanted to make it as easy as possible to get up and running, so I built ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dherman/neon-cli"}),"neon-cli"),", a command-line tool that lets you generate a complete Neon project skeleton with one simple command and build your entire project with nothing more than the usual ",Object(o.b)("inlineCode",{parentName:"p"},"npm install"),"."),Object(o.b)("p",null,"If you want to try building your first native module with Neon, ",Object(o.b)("strong",{parentName:"p"},"it's super easy"),": install ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dherman/neon-cli"}),"neon-cli")," with ",Object(o.b)("inlineCode",{parentName:"p"},"npm install -g neon-cli"),", then create, build, and run your new project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"% neon new hello\n...follow prompts...\n% cd hello\n% npm install\n% node -e 'require(\"./\")'\n")),Object(o.b)("p",null,"If you don't believe me, I made a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/dherman/neon-cli/master/screencast.gif"}),"screencast"),", so you ",Object(o.b)("em",{parentName:"p"},"know")," I'm legit."),Object(o.b)("h2",{id:"i-take-thee-at-thy-word"},"I Take Thee at thy Word"),Object(o.b)("p",null,"To illustrate what you can do with Neon, I created a little ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dherman/wc-demo"}),"word counting demo"),'. The demo is simple: read in the complete plays of Shakespeare and count the total number of occurrences of the word "thee". First I tried implementing it in pure JS. The top-level code splits the corpus into lines, and sums up the counts for each line:'),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function search(corpus, search) {\n  var ls = lines(corpus);\n  var total = 0;\n  for (var i = 0, n = ls.length; i < n; i++) {\n    total += wcLine(ls[i], search);\n  }\n  return total;\n}\n")),Object(o.b)("p",null,"Searching an individual line involves splitting the line up into word and matching each word against the search string:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function wcLine(line, search) {\n  var words = line.split(' ');\n  var total = 0;\n  for (var i = 0, n = words.length; i < n; i++) {\n    if (matches(words[i], search)) {\n      total++;\n    }\n  }\n  return total;\n}\n")),Object(o.b)("p",null,"The rest of the details are pretty straightforward but definitely ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dherman/wc-demo/blob/master/lib/search.js"}),"check out the code"),"---it's small and self-contained."),Object(o.b)("p",null,"On my laptop, running the algorithm across all the plays of Shakespeare usually takes about 280 -- 290ms. Not hugely expensive, but slow enough to be optimizable."),Object(o.b)("h2",{id:"fall-into-our-rustic-revelry"},"Fall Into our Rustic Revelry"),Object(o.b)("p",null,"One of the amazing things about Rust is that highly efficient code can still be remarkably compact and readable. In the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/neon-bindings/examples/blob/master/word-counting/native/src/lib.rs"}),"Rust version of the algorithm"),", the code for summing up the counts for all the lines looks pretty similar to the JS code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"let mut total = 0;\nfor word in line.split(' ') {\n    if matches(word, search) {\n        total += 1;\n    }\n}\ntotal // in Rust you can omit `return` for a trailing expression\n")),Object(o.b)("p",null,"In fact, that same code can be written at a higher level of abstraction ",Object(o.b)("em",{parentName:"p"},"without losing performance"),", using iteration methods like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://doc.rust-lang.org/std/iter/trait.Iterator.html#method.filter"}),Object(o.b)("inlineCode",{parentName:"a"},"filter"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://doc.rust-lang.org/std/iter/trait.Iterator.html#method.fold"}),Object(o.b)("inlineCode",{parentName:"a"},"fold"))," (similar to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"}),Object(o.b)("inlineCode",{parentName:"a"},"Array.prototype.filter"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"}),Object(o.b)("inlineCode",{parentName:"a"},"Array.prototype.reduce"))," in JS):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"line.split(' ')\n    .filter(|word| matches(word, search))\n    .fold(0, |sum, _| sum + 1)\n")),Object(o.b)("p",null,"In my quick experiments, that even seems to shave a few milliseconds off the total running time. I think this is a nice demonstration of the power of Rust's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://blog.rust-lang.org/2015/05/11/traits.html"}),"zero-cost abstractions"),", where idiomatic and high-level abstractions produce the same or sometimes even better performance (by making additional optimizations possible, like eliminating bounds checks) than lower-level, more obscure code."),Object(o.b)("p",null,"On my machine, the simple Rust translation runs in about 80 -- 85ms. Not bad---about 3x as fast just from using Rust, and in roughly the same number of lines of code (60 in JS, 70 in Rust). By the way, I'm being approximate here with the numbers, because this isn't a remotely scientific benchmark. My goal is just to demonstrate that you ",Object(o.b)("em",{parentName:"p"},"can")," get significant performance improvements from using Rust; in any given situation, the particular details will of course matter."),Object(o.b)("h2",{id:"their-thread-of-life-is-spun"},"Their Thread of Life is Spun"),Object(o.b)("p",null,"We're not done yet, though! Rust enables something even cooler for Node: we can easily and safely parallelize this code---and I mean ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://blog.rust-lang.org/2015/04/10/Fearless-Concurrency.html"}),"without the night-sweats and palpitations usually associated with multithreading"),". Here's a quick look at the top level logic in the Rust implementation of the demo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"let total = vm::lock(buffer, |data| {\n    let corpus = data.as_str().unwrap();\n    let lines = lines(corpus);\n    lines.into_iter()\n         .map(|line| wc_line(line, search))\n         .fold(0, |sum, line| sum + line)\n});\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"vm::lock")," API lets Neon safely expose the raw bytes of a Node ",Object(o.b)("inlineCode",{parentName:"p"},"Buffer")," object (i.e., a typed array) to Rust threads, by preventing JS from running in the meantime. And Rust's concurrency model makes programming with threads ",Object(o.b)("em",{parentName:"p"},"actually fun"),"."),Object(o.b)("p",null,"To demonstrate how easy this can be, I used ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://smallcultfollowing.com/babysteps/blog/2015/12/18/rayon-data-parallelism-in-rust/"}),"Niko Matsakis's new Rayon crate")," of beautiful data parallelism abstractions. Changing the demo to use Rayon is as simple as replacing the ",Object(o.b)("inlineCode",{parentName:"p"},"into_iter"),"/",Object(o.b)("inlineCode",{parentName:"p"},"map"),"/",Object(o.b)("inlineCode",{parentName:"p"},"fold"),"/ lines above with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"lines.into_par_iter()\n     .map(|line| wc_line(line, search))\n     .sum()\n")),Object(o.b)("p",null,"Keep in mind, Rayon wasn't designed with Neon in mind---its generic primitives match the iteration protocols of Rust, so Neon was able to just pull it off the shelf."),Object(o.b)("p",null,"With that simple change, on my two-core MacBook Air, the demo goes from about 85ms down to about 50ms."),Object(o.b)("h2",{id:"bridge-most-valiantly-with-excellent-discipline"},"Bridge Most Valiantly, with Excellent Discipline"),Object(o.b)("p",null,"I've worked on making the integration as seamless as possible. From the Rust side, Neon functions follow a simple protocol, taking a ",Object(o.b)("inlineCode",{parentName:"p"},"Call")," object and returning a JavaScript value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"fn search(call: Call) -> JS<Integer> {\n    let scope = call.scope;\n    // ...\n    Ok(Integer::new(scope, total))\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"scope")," object safely tracks handles into V8's garbage-collected heap. The Neon API uses the Rust type system to guarantee that your native module can't crash your app by mismanaging object handles."),Object(o.b)("p",null,"From the JS side, loading the native module is straightforward:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var myNeonModule = require('neon-bridge').load();\n")),Object(o.b)("h2",{id:"wherefores-this-noise"},"Wherefore's this Noise?"),Object(o.b)("p",null,"I hope this demo is enough to get people interested. Beyond the sheer fun of it, I think the strongest reasons for using Rust in Node are performance and parallelism. As the Rust ecosystem grows, it'll also be a way to give Node access to cool Rust libraries. Beyond that, I'm hoping that Neon can make a nice abstraction layer that just makes writing native Node modules less painful. With projects like ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/microsoft/node-uwp"}),"node-uwp")," it might even be worth exploring evolving Neon towards a JS-engine-agnostic abstraction layer."),Object(o.b)("p",null,"There are lots of possibilities, but ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dherman/neon"}),"I need help!")," If you want to get involved, I've created a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://rustbridge.slack.com"}),"community slack")," (grab an invite from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://rust-bindings-slackin.herokuapp.com"}),"the Slackin app"),") and a ",Object(o.b)("inlineCode",{parentName:"p"},"#neon")," IRC channel on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://wiki.mozilla.org/IRC"}),"Mozilla IRC")," (",Object(o.b)("inlineCode",{parentName:"p"},"irc.mozilla.org"),")."),Object(o.b)("h2",{id:"a-quick-thanks"},"A Quick Thanks"),Object(o.b)("p",null,"There's a ton of fun exploration and work left to do but I couldn't have gotten this far without huge amounts of help already: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/oppenlander/oppenlanderme/blob/master/public/articles/rust-ffi.md"}),"Andrew Oppenlander's blog post")," got me off the ground, Ben Noordhuis and Marcin Cie\u015blak helped me wrestle with V8's tooling, I picked up a few tricks from Nathan Rajlich's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/TooTallNate/node-bindings/blob/master/bindings.js"}),"evil genius code"),", Adam Klein and Fedor Indutny helped me understand the V8 API, Alex Crichton helped me with compiler and linker arcana, Niko Matsakis helped me with designing the safe memory management API, and Yehuda Katz helped me with the overall design."),Object(o.b)("p",null,"You know what this means? ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dherman/neon"}),Object(o.b)("strong",{parentName:"a"},"Maybe you can help too!"))))}b.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(h,l({ref:t},c,{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
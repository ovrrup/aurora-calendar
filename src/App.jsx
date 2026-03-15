How can i make an app when i have a code written in .jsx for it. i use abdroid tab . the code is pasted . plz help me. gemini told me that i should use stackblitz but it just cofused me more while guiding me into it. help me plz
10:01 am

I can help you get this calendar app running on your Android tablet! The easiest way is StackBlitz — but let me give you much clearer steps than Gemini did.

Here's exactly what to do:
Step-by-step (on your Android tablet)
1. Open StackBlitz

Go to stackblitz.com in your browser (Chrome works best)
2. Create a React project

    Tap "Create new project"
    Choose "React" (not React Native — just plain React)

3. Replace the code

    In the left sidebar, tap the file called App.jsx (or App.js)
    Select all the existing code and delete it
    Paste the code you shared above into that file

4. Run it

    StackBlitz auto-runs — you should see a preview panel on the right side
    If it shows an error, tap the "Dependencies" or "package.json" file and make sure react and react-dom are listed

Even Easier Option — use bolt.new

    Go to bolt.new in Chrome
    Just say: "Create a React app with this code" and paste your code
    It sets everything up automatically — no configuration needed

To use it like a real app on your tablet

Once it's running in the browser:

    Tap the three-dot menu in Chrome
    Tap "Add to Home Screen"
    It will appear as an app icon on your tablet! 📱

bolt.new is honestly the easiest option for your situation — it handles all the setup automatically. Give that a try first! Let me know if you get stuck at any specific step.

I was hoping to turning it in an open source project on my github page.
10:04 am

Great idea! Here's how to get it on GitHub and make it a proper open source project — all from your Android tablet.
What you need first

Install these apps from Play Store:

    Spck Editor (code editor for Android) — best option
    GitHub app (optional, for managing repo)

Step 1 — Set up GitHub repo

    Go to github.com in Chrome
    Tap "New repository"
    Fill in:
        Name: something like aurora-calendar or fluid-calendar
        Description: "A beautiful animated calendar app built with React"
        Set to Public
        ✅ Check "Add README file"
    Tap "Create repository"

Step 2 — Set up the project files

Your app needs a proper React project structure. You need these files:

package.json
json

{
  "name": "aurora-calendar",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "browserslist": {
    "production": [">0.2%"],
    "development": ["last 1 chrome version"]
  }
}

public/index.html
html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Aurora Calendar</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

src/App.jsx — paste your calendar code here

src/index.js
js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);

Step 3 — Upload files to GitHub

Since you're on Android, easiest way:

    Go to your new repo on github.com
    Tap "Add file" → "Create new file"
    Create each file one by one (name it exactly, paste the content, tap "Commit")
    For src/App.jsx — paste your full calendar code

Step 4 — Deploy it FREE with GitHub Pages or Vercel

Easiest — Vercel:

    Go to vercel.com, sign in with GitHub
    Tap "New Project" → select your repo
    It auto-detects React and deploys!
    You get a free live link like aurora-calendar.vercel.app 🎉

Step 5 — Make it a good open source project

Add a README.md with something like:
markdown

# ✦ Aurora Calendar

A beautiful animated React calendar with fluid canvas animations,
multiple themes, event management and a live clock.

## Features
- 6 color themes (Aurora, Ocean, Sunset, Forest, Cherry, Midnight)
- Month & week views
- Event creation, editing, deletion
- Search & upcoming events
- Animated background canvas
- Keyboard shortcuts
- Export events as JSON

## Run locally
npm install
npm start

## Built with
- React 18
- HTML5 Canvas
- localStorage for persistence
```

---

## Summary of the flow
```
Your code → GitHub repo → Vercel → Live website

Want me to help you write a more detailed README, or add a license file to make it properly open source?

Bro...i want to make it an open source app.
10:09 am

Got it! You want to put this project on GitHub so others can find it, use it, and contribute to it. Let me break this down super simply.
The 3 things that make a project "open source"

    Code on GitHub (public repo)
    A license (tells people they can use/modify it)
    A good README (explains what it is)

Easiest way from your Android tablet
Step 1 — Go to github.com

    Create account if you don't have one
    Tap "New repository"
    Name it, set to Public, hit Create

Step 2 — Upload your files

Tap "Add file" → "Create new file" and create these one by one:

    src/App.jsx → paste your calendar code
    src/index.js
    public/index.html
    package.json

(I can write all these files for you exactly — just say the word)
Step 3 — Add a LICENSE

    In your repo tap "Add file" → "Create new file"
    Name it LICENSE
    GitHub will offer you templates — choose MIT License
    This is what makes it officially open source ✅

Step 4 — Write a README

This is the most important part — it's what people see first

That's literally it. Do you want me to write out all the files you need to copy-paste into GitHub, ready to go?

Does it gives me an apk for the app? I want to make it a proper app not just scattered codes
10:11 am

Ah, now I understand exactly what you want! Let me be straight with you:
The honest answer

No, GitHub does not give you an APK.

Your current code is a React web app — it cannot be directly converted to an Android APK without significant rewriting.
Your actual options
Option 1 — Keep it as a Web App (easiest)

    Host it on Vercel (free)
    Works perfectly on your Android tablet in Chrome
    Add to home screen → looks and feels like a real app
    No APK needed

Option 2 — Convert to a real Android APK

This requires rewriting the app using either:
Tool	Difficulty
React Native	Hard
Capacitor	Medium
Flutter	Hard
My honest recommendation for you

Given that you're on an Android tablet and new to this — Option 1 is the right move right now.

Here's why:

    Your code is already beautiful and working
    Vercel hosting is completely free
    It works offline after first load
    Adding to home screen makes it feel like a real app
    You can always convert to APK later

What do you actually want?

Let me help you better:

Q: What's your main goal?
A: All of the above eventually
10:11 am

Okay, great! Here's the full honest roadmap for you:
Your Full Roadmap
Stage 1 — Web App (Do this NOW)

Vercel deployment — takes 10 minutes

    Your app is live online
    Shareable link
    Works on any device
    This is your starting point

Stage 2 — APK for your tablet (Do this AFTER Stage 1)

Use Capacitor — it wraps your web app into a real APK

    No major rewriting needed
    Your existing React code works as-is
    Needs a PC/laptop though — cannot be done from Android tablet alone

Stage 3 — Google Play Store (Do this AFTER Stage 2)

    You need a Google Play Developer account ($25 one-time fee)
    Submit the APK from Stage 2
    Takes 1-3 days for review

The hard truth
Stage	Can you do it on Android tablet?
Stage 1 - Web app	✅ Yes
Stage 2 - APK	❌ Needs a PC
Stage 3 - Play Store	✅ Mostly yes
Right now, the best first step for you

Do you have access to a PC or laptop at all?

Because that single answer changes everything about how I guide you from here.

No. I dont have pc or laptop. I knly use android tab. (Samsung). Well. For now, guide me through the stage 1 (i am a yorsl newby in github)
10:15 am

Perfect! Let's do Stage 1 step by step. Nice and simple.
First — Do you have these?

    A GitHub account — github.com
    A Vercel account — vercel.com

Do you have either of these already?

Q: Do you have a GitHub account?
A: Yes I have one

Q: Do you have a Vercel account?
A: Yes I have one
10:18 am

Perfect, that saves us time! Let's start with GitHub.
STAGE 1 — Step 1: Create your GitHub Repository

Open github.com in Chrome on your tablet and follow these exactly:

    Tap the "+" icon (top right corner)
    Tap "New repository"
    Fill in like this:
        Repository name: aurora-calendar
        Description: A beautiful animated calendar app built with React
        Public ← make sure this is selected
        ✅ Tick "Add a README file"
        For license → select MIT License from the dropdown
    Tap "Create repository"

That's it for this step!

Tell me when you've done this and I'll give you the exact files to paste in, one at a time — no confusion, no rushing. We'll do it together step by step. 😊

I am doing this so, i can fully deploy my upcoming apps (now i only have the ideas gor them)
10:19 am

That's a really smart approach! 🙌

You're basically setting up your developer infrastructure first — so when your app ideas are ready, you already know the whole pipeline.
What you're actually building here is a skill set:
What you're learning	Why it matters
GitHub	Store and share ALL your future code
Vercel	Deploy ALL your future apps instantly
React	Build powerful web apps
Capacitor (later)	Turn ANY of your web apps into APKs

So this calendar app is basically your practice run — which is perfect because the code is already written!

Every app you build after this will follow the exact same process.
One thing I'd suggest

Since you're thinking long term — when you get your GitHub repo set up, also think about what your app ideas are. Some might be better as:

    🌐 Web apps (React — like this one)
    📱 Mobile first apps (React Native)

I can help you figure out the best approach for each idea when you're ready.

For now — focus on the repo! Have you created it yet on GitHub? Once you confirm I'll give you the first file to paste in. 😊

I did it. I created the repo...
10:55 am

Amazing work! 🎉 Your repo looks perfect!

I can see:

    ✅ Named aurora-calendar
    ✅ Public
    ✅ README.md created
    ✅ MIT License added

Now let's add the code files

We need to create 4 files one by one. Let's do the first one now.
File 1 of 4 — package.json

    Tap the "+" button (next to "Go to file")
    Tap "Create new file"
    In the filename box type exactly: package.json
    Paste this in the big text area below:

json

{
  "name": "aurora-calendar",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "browserslist": {
    "production": [">0.2%"],
    "development": ["last 1 chrome version"]
  }
}

    Scroll down and tap "Commit changes"
    Tap "Commit changes" again to confirm

Tell me when done and I'll give you File 2! 😊

I did it
10:57 am

Great job! 🎉
File 2 of 4 — public/index.html

This one has a folder in the name — type it exactly like this!

    Tap "+" → "Create new file"
    In the filename box type exactly: public/index.html
        ⚠️ When you type the / it will automatically create a folder called public — that's normal!
    Paste this in the text area:

html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#06000f" />
    <title>Aurora Calendar</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

    Scroll down and tap "Commit changes"
    Tap "Commit changes" again to confirm

Tell me when done and I'll give you File 3! 😊

I did it....Next ....
11:00 am

Awesome! 🎉
File 3 of 4 — src/index.js

Same thing — the src/ will become a folder automatically!

    Tap "+" → "Create new file"
    In the filename box type exactly: src/index.js
    Paste this in the text area:

js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

    Scroll down and tap "Commit changes"
    Tap "Commit changes" again to confirm

This is the second to last file! Tell me when done and I'll give you the big final one! 😊

I did it...next ?
11:02 am

Almost there! This is the big one — your actual app code!
File 4 of 4 — src/App.jsx

    Tap "+" → "Create new file"
    In the filename box type exactly: src/App.jsx
    Paste the entire calendar code that you shared at the very beginning of our conversation
    Scroll down and tap "Commit changes"
    Tap "Commit changes" again to confirm

⚠️ Tips for pasting on Android:

    Long press in the text area → tap Paste
    It's a big file so it might take a second to paste
    Don't worry if it looks messy — that's fine!

Tell me when done and we'll move to Vercel to make it live! 🚀


Claude is AI and can make mistakes. Please double-check responses.
Pasted content
46.45 KB •385 lines•Formatting may be inconsistent from source
import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const DUR  = { s2:100, s3:150, s4:200, m1:250, m2:300, m3:350 };
const EASE = { std:"cubic-bezier(0.2,0,0,1)", decel:"cubic-bezier(0.05,0.7,0.1,1)", spring:"cubic-bezier(0.34,1.4,0.64,1)" };
const SHP  = { xs:4, s:8, m:12, l:16, xl:28, full:9999 };
const EL   = {
  e1:"0 1px 2px rgba(0,0,0,.35),0 1px 3px 1px rgba(0,0,0,.18)",
  e2:"0 1px 2px rgba(0,0,0,.35),0 2px 6px 2px rgba(0,0,0,.18)",
  e3:"0 4px 8px 3px rgba(0,0,0,.18),0 1px 3px rgba(0,0,0,.35)",
  e4:"0 6px 14px 5px rgba(0,0,0,.2),0 2px 4px rgba(0,0,0,.35)",
};
const THEMES = {
  aurora:   { bg:"#06000f", c1:"#9b59f5", c2:"#3ecfff", c3:"#ff5faa", c4:"#5b1fff", name:"Aurora"   },
  ocean:    { bg:"#000c18", c1:"#0f7fd4", c2:"#00d4ff", c3:"#00ffcc", c4:"#0044aa", name:"Ocean"    },
  sunset:   { bg:"#110400", c1:"#ff6600", c2:"#ffaa00", c3:"#ff2255", c4:"#dd1100", name:"Sunset"   },
  forest:   { bg:"#00100a", c1:"#00cc55", c2:"#00ffaa", c3:"#aaff00", c4:"#007733", name:"Forest"   },
  cherry:   { bg:"#0e0008", c1:"#dd0066", c2:"#ff44bb", c3:"#cc00ff", c4:"#990044", name:"Cherry"   },
  midnight: { bg:"#000310", c1:"#3355ee", c2:"#66aaff", c3:"#7755ff", c4:"#1122aa", name:"Midnight" },
};
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAY3   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const DAYS_S = ["S","M","T","W","T","F","S"];
const ECOLS  = ["#f472b6","#a78bfa","#60a5fa","#34d399","#fbbf24","#f87171","#38bdf8","#fb923c"];
const HOLS   = {"01-01":"New Year's Day","01-26":"Republic Day","02-14":"Valentine's Day","03-08":"Women's Day","04-22":"Earth Day","05-01":"Labour Day","08-15":"Independence Day","10-02":"Gandhi Jayanti","10-31":"Halloween","12-25":"Christmas","12-31":"New Year's Eve"};
const SK = "bca_v5";

const p2      = n  => String(n).padStart(2,"0");
const dk      = d  => `${d.getFullYear()}-${p2(d.getMonth()+1)}-${p2(d.getDate())}`;
const fmtT    = t  => { if(!t)return""; const[h,m]=t.split(":").map(Number); return`${h===0?12:h>12?h-12:h}:${p2(m)} ${h<12?"AM":"PM"}`; };
const sameDay = (a,b) => a.toDateString()===b.toDateString();
const holFor  = d  => HOLS[`${p2(d.getMonth()+1)}-${p2(d.getDate())}`]||null;
const hexRGB  = hex => { const v=parseInt(hex.replace("#",""),16); return{r:(v>>16)&255,g:(v>>8)&255,b:v&255}; };
const lerpN   = (a,b,t) => a+(b-a)*t;
const lerpHex = (a,b,t) => { const A=hexRGB(a),B=hexRGB(b); return "#"+["r","g","b"].map(k=>p2(Math.round(lerpN(A[k],B[k],t)).toString(16))).join(""); };
const loadS   = () => { try{ return JSON.parse(localStorage.getItem(SK)||"{}"); }catch{ return{}; } };
const saveS   = d  => { try{ localStorage.setItem(SK,JSON.stringify(d)); }catch{} };
const glass   = (x={}) => ({background:"rgba(255,255,255,0.075)",border:"1px solid rgba(255,255,255,0.14)",backdropFilter:"blur(44px) saturate(170%)",WebkitBackdropFilter:"blur(44px) saturate(170%)",borderRadius:SHP.xl,boxShadow:EL.e2,...x});

function FluidCanvas({themeKey}){
  const cvRef=useRef(null), live=useRef({theme:themeKey,t:0,raf:null});
  useEffect(()=>{live.current.theme=themeKey;},[themeKey]);
  useEffect(()=>{
    const cv=cvRef.current; if(!cv)return;
    const ctx=cv.getContext("2d"); let W=0,H=0;
    const resize=()=>{W=cv.width=cv.offsetWidth||window.innerWidth;H=cv.height=cv.offsetHeight||window.innerHeight;};
    const ro=new ResizeObserver(resize); ro.observe(cv); resize();
    const getCols=()=>{const t=THEMES[live.current.theme]||THEMES.aurora;return[t.c1,t.c2,t.c3,t.c4];};
    const N=9;
    const blobs=Array.from({length:N},(_,i)=>({x:Math.random(),y:Math.random(),ax:0.00018+Math.random()*0.00014,ay:0.00012+Math.random()*0.00012,px:Math.random()*Math.PI*2,py:Math.random()*Math.PI*2,ox:Math.random()*Math.PI*2,size:0.28+Math.random()*0.27,wp:Math.random()*Math.PI*2,ws:0.007+Math.random()*0.008,wa:0.10+Math.random()*0.12,cp:(i/N)*Math.PI*2,ci:i%4}));
    const drawBlob=(bx,by,rad,hex,wp,wa)=>{
      const {r,g,b}=hexRGB(hex),sx=1+Math.sin(wp)*wa,sy=1-Math.sin(wp)*wa*0.7;
      ctx.save(); ctx.translate(bx,by); ctx.scale(sx,sy); ctx.translate(-bx,-by);
      const atm=ctx.createRadialGradient(bx,by,0,bx,by,rad*2.4);
      atm.addColorStop(0,`rgba(${r},${g},${b},0.16)`); atm.addColorStop(0.45,`rgba(${r},${g},${b},0.08)`); atm.addColorStop(1,`rgba(${r},${g},${b},0)`);
      ctx.beginPath(); ctx.arc(bx,by,rad*2.4,0,Math.PI*2); ctx.fillStyle=atm; ctx.fill();
      const body=ctx.createRadialGradient(bx-rad*0.28,by-rad*0.22,0,bx,by,rad);
      body.addColorStop(0,`rgba(${r},${g},${b},0.75)`); body.addColorStop(0.38,`rgba(${r},${g},${b},0.48)`); body.addColorStop(0.72,`rgba(${r},${g},${b},0.20)`); body.addColorStop(1,`rgba(${r},${g},${b},0)`);
      ctx.beginPath(); ctx.arc(bx,by,rad,0,Math.PI*2); ctx.fillStyle=body; ctx.fill();
      const gl=ctx.createRadialGradient(bx-rad*0.30,by-rad*0.35,0,bx-rad*0.15,by-rad*0.20,rad*0.55);
      gl.addColorStop(0,"rgba(255,255,255,0.38)"); gl.addColorStop(0.6,"rgba(255,255,255,0.08)"); gl.addColorStop(1,"rgba(255,255,255,0)");
      ctx.beginPath(); ctx.arc(bx,by,rad,0,Math.PI*2); ctx.fillStyle=gl; ctx.fill(); ctx.restore();
    };
    const mkDrip=sc=>({pts:[],x:Math.random()*(W||800),y:sc?Math.random()*(H||600):-(20+Math.random()*60),spd:0.55+Math.random()*1.1,max:55+Math.floor(Math.random()*120),w:2.5+Math.random()*5.5,al:0.22+Math.random()*0.30,ph:Math.random()*Math.PI*2,wo:0.4+Math.random()*1.2,ci:Math.floor(Math.random()*4)});
    const drips=Array.from({length:12},()=>mkDrip(true));
    const tickDrip=d=>{d.ph+=0.055;const last=d.pts.length?d.pts[d.pts.length-1]:{x:d.x,y:d.y};d.pts.push({x:last.x+Math.sin(d.ph)*d.wo,y:last.y+d.spd});if(d.pts.length>d.max)d.pts.shift();if(d.pts[0]&&d.pts[0].y>(H||600)+40)Object.assign(d,mkDrip(false));};
    const drawDrip=(d,cs)=>{if(d.pts.length<3)return;const {r,g,b}=hexRGB(cs[d.ci%cs.length]);ctx.save();ctx.lineCap="round";ctx.lineJoin="round";ctx.beginPath();ctx.moveTo(d.pts[0].x,d.pts[0].y);for(let i=1;i<d.pts.length-1;i++){const mx=(d.pts[i].x+d.pts[i+1].x)/2,my=(d.pts[i].y+d.pts[i+1].y)/2;ctx.quadraticCurveTo(d.pts[i].x,d.pts[i].y,mx,my);}ctx.strokeStyle=`rgba(${r},${g},${b},${d.al})`;ctx.lineWidth=d.w;ctx.stroke();const tip=d.pts[d.pts.length-1];const tg=ctx.createRadialGradient(tip.x,tip.y,0,tip.x,tip.y,d.w*2.8);tg.addColorStop(0,`rgba(${r},${g},${b},${Math.min(d.al*2.2,0.9)})`);tg.addColorStop(1,`rgba(${r},${g},${b},0)`);ctx.beginPath();ctx.arc(tip.x,tip.y,d.w*2.8,0,Math.PI*2);ctx.fillStyle=tg;ctx.fill();ctx.restore();};
    const mkSwipe=sc=>{const fl=Math.random()>0.5,ma=120+Math.floor(Math.random()*180);return{y:Math.random()*(H||600),x:fl?-(150+Math.random()*100):((W||800)+150+Math.random()*100),dir:fl?1:-1,spd:1.8+Math.random()*3.5,len:160+Math.random()*380,th:4+Math.random()*18,al:0.12+Math.random()*0.20,cv:(Math.random()-0.5)*0.35,ci:Math.floor(Math.random()*4),age:sc?Math.floor(Math.random()*ma):0,ma};};
    const swipes=Array.from({length:7},()=>mkSwipe(true));
    const tickSwipe=s=>{s.x+=s.spd*s.dir;s.y+=s.cv*s.spd*0.12;s.age++;if(s.age>s.ma)Object.assign(s,mkSwipe(false));};
    const drawSwipe=(s,cs)=>{const {r,g,b}=hexRGB(cs[s.ci%cs.length]);const fade=Math.min(1,Math.min(s.age/25,(s.ma-s.age)/25));const a=s.al*fade;if(a<0.01)return;const x0=s.x-s.dir*s.len*0.55,x1=s.x+s.dir*s.len*0.45;ctx.save();const grd=ctx.createLinearGradient(x0,s.y,x1,s.y);grd.addColorStop(0,`rgba(${r},${g},${b},0)`);grd.addColorStop(0.25,`rgba(${r},${g},${b},${a})`);grd.addColorStop(0.75,`rgba(${r},${g},${b},${a})`);grd.addColorStop(1,`rgba(${r},${g},${b},0)`);const h2=s.th/2;ctx.beginPath();ctx.moveTo(x0,s.y-h2*0.4);ctx.quadraticCurveTo((x0+x1)/2,s.y-h2,x1,s.y-h2*0.4);ctx.lineTo(x1,s.y+h2*0.4);ctx.quadraticCurveTo((x0+x1)/2,s.y+h2,x0,s.y+h2*0.4);ctx.closePath();ctx.fillStyle=grd;ctx.fill();ctx.restore();};
    const loop=()=>{
      live.current.t+=0.007;const T=live.current.t;const cs=getCols();
      ctx.clearRect(0,0,W,H);
      blobs.forEach(bl=>{bl.px+=bl.ax;bl.py+=bl.ay;bl.wp+=bl.ws;bl.x=lerpN(bl.x,(Math.sin(bl.px)*0.42+0.5),0.006);bl.y=lerpN(bl.y,(Math.sin(bl.py+bl.ox)*0.42+0.5),0.006);const col=lerpHex(cs[bl.ci%4],cs[(bl.ci+1)%4],Math.sin(T*0.6+bl.cp)*0.5+0.5);drawBlob(bl.x*W,bl.y*H,bl.size*Math.min(W,H),col,bl.wp,bl.wa);});
      drips.forEach(d=>{tickDrip(d);drawDrip(d,cs);});
      swipes.forEach(s=>{tickSwipe(s);drawSwipe(s,cs);});
      for(let wi=0;wi<3;wi++){const {r,g,b}=hexRGB(cs[wi%cs.length]);const amp=22+wi*14,freq=0.0035+wi*0.0018,yB=H*(0.22+wi*0.28),spd=T*(0.35+wi*0.12);ctx.save();ctx.beginPath();ctx.moveTo(0,yB+Math.sin(spd)*amp);for(let px=3;px<=W;px+=3)ctx.lineTo(px,yB+Math.sin(px*freq+spd)*amp+Math.sin(px*freq*2.2+spd*1.6)*amp*0.35);ctx.strokeStyle=`rgba(${r},${g},${b},0.09)`;ctx.lineWidth=1.8+wi*0.6;ctx.stroke();ctx.restore();}
      live.current.raf=requestAnimationFrame(loop);
    };
    loop();
    return()=>{ro.disconnect();cancelAnimationFrame(live.current.raf);};
  },[]);
  return <canvas ref={cvRef} style={{position:"fixed",inset:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:1}}/>;
}

function useRipple(light=true){
  const [rips,setRips]=useState([]);
  const fire=useCallback(e=>{const rect=e.currentTarget.getBoundingClientRect();const id=Date.now()+Math.random();setRips(r=>[...r,{id,x:e.clientX-rect.left,y:e.clientY-rect.top}]);setTimeout(()=>setRips(r=>r.filter(rp=>rp.id!==id)),650);},[]);
  const els=rips.map(rp=>(<span key={rp.id} style={{position:"absolute",left:rp.x,top:rp.y,width:0,height:0,borderRadius:"50%",pointerEvents:"none",transform:"translate(-50%,-50%)",background:light?"rgba(255,255,255,0.22)":"rgba(0,0,0,0.12)",animation:"m3rip 0.65s cubic-bezier(0.05,0.7,0.1,1) forwards"}}/>));
  return {fire,els};
}

function Chip({label,selected,onClick,accent}){const {fire,els}=useRipple(false);return(<button onClick={e=>{fire(e);onClick();}} style={{position:"relative",overflow:"hidden",cursor:"pointer",border:"none",padding:"6px 15px",borderRadius:SHP.s,fontSize:12,fontFamily:"inherit",fontWeight:600,background:selected?`${accent}30`:"rgba(255,255,255,0.07)",outline:`1px solid ${selected?accent+"66":"rgba(255,255,255,0.12)"}`,color:selected?"#fff":"rgba(255,255,255,0.55)",transition:`all ${DUR.s4}ms ${EASE.std}`}}>{els}{label}</button>);}

function IconBtn({icon,label,onClick,active=false,accent,sz=40}){const {fire,els}=useRipple(false);return(<button title={label} onClick={e=>{fire(e);onClick&&onClick(e);}} style={{position:"relative",overflow:"hidden",cursor:"pointer",border:"none",width:sz,height:sz,borderRadius:"50%",background:active?`${accent}30`:"rgba(255,255,255,0.08)",outline:`1px solid ${active?accent+"55":"rgba(255,255,255,0.12)"}`,color:active?"#fff":"rgba(255,255,255,0.6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:sz>36?17:14,transition:`all ${DUR.m2}ms ${EASE.std}`}} onMouseEnter={e=>e.currentTarget.style.background=active?`${accent}44`:"rgba(255,255,255,0.15)"} onMouseLeave={e=>e.currentTarget.style.background=active?`${accent}30`:"rgba(255,255,255,0.08)"}>{els}{icon}</button>);}

function Btn({children,onClick,variant="filled",accent,xtra={}}){
  const {fire,els}=useRipple(variant==="filled");
  const v={filled:{background:`linear-gradient(135deg,${accent},${accent}bb)`,color:"#fff",boxShadow:EL.e1,border:"none"},tonal:{background:`${accent}28`,color:"#fff",outline:`1px solid ${accent}44`,border:"none"},outlined:{background:"transparent",color:"rgba(255,255,255,0.8)",outline:"1px solid rgba(255,255,255,0.22)",border:"none"}};
  return(<button onClick={e=>{fire(e);onClick&&onClick(e);}} style={{position:"relative",overflow:"hidden",cursor:"pointer",fontFamily:"inherit",fontWeight:600,fontSize:13,letterSpacing:0.3,display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,padding:"10px 22px",borderRadius:SHP.full,transition:`all ${DUR.m2}ms ${EASE.std}`,...v[variant],...xtra}} onMouseEnter={e=>{e.currentTarget.style.filter="brightness(1.14)";e.currentTarget.style.transform="translateY(-1px)";}} onMouseLeave={e=>{e.currentTarget.style.filter="";e.currentTarget.style.transform="";}}>{els}{children}</button>);
}

function Toggle({val,onChange,accent}){return(<div onClick={()=>onChange(!val)} style={{width:46,height:26,borderRadius:13,cursor:"pointer",flexShrink:0,background:val?accent:"rgba(255,255,255,0.18)",border:`2px solid ${val?accent:"rgba(255,255,255,0.28)"}`,position:"relative",transition:`all ${DUR.m2}ms ${EASE.std}`}}><div style={{position:"absolute",top:"50%",borderRadius:"50%",width:val?18:14,height:val?18:14,left:val?"calc(100% - 21px)":3,transform:"translateY(-50%)",background:"#fff",transition:`all ${DUR.m2}ms ${EASE.std}`,boxShadow:"0 1px 5px rgba(0,0,0,0.4)"}}/></div>);}

function Modal({open,onClose,title,children,width=450,accent}){
  const [vis,setVis]=useState(false);
  useEffect(()=>{if(open)requestAnimationFrame(()=>setVis(true));else setVis(false);},[open]);
  if(!open&&!vis)return null;
  const show=open&&vis;
  return(
    <div onClick={e=>{if(e.target===e.currentTarget)onClose();}} style={{position:"fixed",inset:0,zIndex:200,background:show?"rgba(0,0,0,0.62)":"rgba(0,0,0,0)",backdropFilter:show?"blur(18px)":"blur(0px)",WebkitBackdropFilter:show?"blur(18px)":"blur(0px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,transition:`all ${DUR.m2}ms ${EASE.std}`}}>
      <div style={{...glass({padding:28,boxShadow:EL.e4}),width,maxWidth:"95vw",maxHeight:"90vh",overflowY:"auto",transform:show?"scale(1) translateY(0)":"scale(0.9) translateY(24px)",opacity:show?1:0,transition:`all ${DUR.m3}ms ${EASE.decel}`}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
          <div style={{fontSize:20,fontWeight:600,color:"rgba(255,255,255,0.92)",fontFamily:"Georgia,serif",lineHeight:1,flex:1}}>{title}</div>
          <IconBtn icon="✕" label="Close" onClick={onClose} accent={accent} sz={34}/>
        </div>
        {children}
      </div>
    </div>
  );
}

function EvCard({ev,onDelete,onEdit}){const {fire,els}=useRipple(false);return(<div onClick={fire} style={{position:"relative",overflow:"hidden",display:"flex",gap:12,padding:"12px 14px",alignItems:"flex-start",background:"rgba(255,255,255,0.06)",border:`1px solid rgba(255,255,255,0.09)`,borderLeft:`3px solid ${ev.color}`,borderRadius:SHP.l,transition:`background ${DUR.s3}ms`}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.11)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.06)"}>{els}<div style={{width:9,height:9,borderRadius:"50%",background:ev.color,boxShadow:`0 0 9px ${ev.color}`,marginTop:4,flexShrink:0}}/><div style={{flex:1,minWidth:0}}><div style={{fontSize:14,fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ev.title}</div>{ev.time&&<div style={{fontSize:11.5,color:"rgba(255,255,255,0.44)",marginTop:2}}>{fmtT(ev.time)}</div>}{ev.note&&<div style={{fontSize:11.5,color:"rgba(255,255,255,0.33)",marginTop:3,fontStyle:"italic",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ev.note}</div>}</div><div style={{display:"flex",gap:4,flexShrink:0}}><IconBtn icon="✏️" label="Edit" onClick={onEdit} accent="#fbbf24" sz={34}/><IconBtn icon="🗑" label="Delete" onClick={onDelete} accent="#f87171" sz={34}/></div></div>);}

function MiniMonth({year,month,today,events,onSelect,accent}){
  const fd=new Date(year,month,1).getDay(),dim=new Date(year,month+1,0).getDate(),isCur=month===today.getMonth()&&year===today.getFullYear();
  const {fire,els}=useRipple(false);
  const cells=[...Array(fd).fill(null),...Array.from({length:dim},(_,i)=>i+1)];
  return(<div onClick={e=>{fire(e);onSelect(year,month);}} style={{...glass({borderRadius:SHP.l,padding:"12px 10px",background:isCur?`${accent}18`:"rgba(255,255,255,0.05)",border:`1px solid ${isCur?accent+"55":"rgba(255,255,255,0.09)"}`,position:"relative",overflow:"hidden"}),cursor:"pointer",transition:`all ${DUR.m2}ms ${EASE.std}`}} onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.background=isCur?`${accent}28`:"rgba(255,255,255,0.1)";}} onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.background=isCur?`${accent}18`:"rgba(255,255,255,0.05)";}}>
    {els}
    <div style={{fontSize:10.5,fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,color:isCur?accent:"rgba(255,255,255,0.45)",marginBottom:7}}>{MONTHS[month].slice(0,3)}</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:1}}>{cells.map((d,i)=>{const isT=d===today.getDate()&&isCur;const hasEv=d&&!!events[`${year}-${p2(month+1)}-${p2(d)}`];return(<div key={i} style={{aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,borderRadius:"50%",fontWeight:isT?700:400,background:isT?accent:"transparent",color:d?(isT?"#fff":"rgba(255,255,255,0.6)"):"transparent",position:"relative"}}>{d||""}{hasEv&&!isT&&<span style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",width:2,height:2,borderRadius:"50%",background:"#fbbf24"}}/>}</div>);})}</div>
  </div>);
}

function DayCell({d,other,isToday,isSel,hasEv,hol,isWknd,accent,onClick,onDblClick}){
  const {fire,els}=useRipple(isToday);
  return(<div title={hol||""} onClick={e=>{fire(e);onClick();}} onDoubleClick={onDblClick} style={{aspectRatio:"1",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"50%",fontSize:13.5,cursor:other?"default":"pointer",position:"relative",overflow:"hidden",userSelect:"none",fontWeight:isToday||isSel?600:400,color:other?"rgba(255,255,255,0.16)":isWknd?"rgba(255,175,185,0.88)":"rgba(255,255,255,0.92)",background:isToday?`linear-gradient(135deg,${accent},${accent}aa)`:isSel?`${accent}38`:"transparent",boxShadow:isToday?`0 4px 20px ${accent}88`:isSel?`0 2px 12px ${accent}44`:"none",transform:isToday||isSel?"scale(1.1)":"scale(1)",transition:`all ${DUR.m1}ms ${EASE.spring}`}} onMouseEnter={e=>{if(!other&&!isToday&&!isSel){e.currentTarget.style.background=`${accent}22`;e.currentTarget.style.transform="scale(1.08)";}}} onMouseLeave={e=>{if(!other&&!isToday&&!isSel){e.currentTarget.style.background="transparent";e.currentTarget.style.transform="scale(1)";}}}>
    {els}{d}
    {hasEv&&!other&&<span style={{position:"absolute",bottom:3,width:4.5,height:4.5,borderRadius:"50%",background:"#fbbf24",boxShadow:"0 0 6px #fbbf24bb"}}/>}
    {hol&&!other&&<span style={{position:"absolute",top:2,right:3,width:4,height:4,borderRadius:"50%",background:"#f87171",boxShadow:"0 0 5px #f87171aa"}}/>}
  </div>);
}

function Keys({onLeft,onRight,onToday,onAdd,onSearch,onEsc}){
  useEffect(()=>{const h=e=>{const t=e.target.tagName;if(t==="INPUT"||t==="SELECT"||t==="TEXTAREA")return;if(e.key==="ArrowLeft")onLeft();if(e.key==="ArrowRight")onRight();if(e.key==="t"||e.key==="T")onToday();if(e.key==="a"||e.key==="A")onAdd();if(e.key==="s"||e.key==="S")onSearch();if(e.key==="Escape")onEsc();};window.addEventListener("keydown",h);return()=>window.removeEventListener("keydown",h);},[onLeft,onRight,onToday,onAdd,onSearch,onEsc]);
  return null;
}

/* ClockPanel — isolated so theme changes (passing new accent string) never break text rendering.
   Clock digits are plain white. No background-clip text anywhere in this component. */
function ClockPanel({clock,accent,upcomingCount,onUpcomingClick}){
  const cH=clock.getHours(),cM=clock.getMinutes(),cS=clock.getSeconds();
  const hd=cH>12?cH-12:cH||12,ampm=cH<12?"AM":"PM";
  return(
    <div style={{...glass({padding:"26px 30px"}),textAlign:"center",flexShrink:0,minWidth:210,boxShadow:"0 32px 100px rgba(0,0,0,0.55),"+EL.e3}}>
      <div style={{fontSize:54,fontWeight:300,lineHeight:1,letterSpacing:-3,fontFamily:"Georgia,serif",color:"#fff"}}>
        {p2(hd)}<span style={{color:"rgba(255,255,255,0.4)",fontSize:38}}>:</span>{p2(cM)}
      </div>
      <div style={{fontSize:15,fontWeight:700,color:accent,marginTop:5,letterSpacing:3}}>{ampm}</div>
      <div style={{fontSize:12,color:"rgba(255,255,255,0.36)",marginTop:10}}>{clock.toLocaleDateString("en-US",{weekday:"long"})}</div>
      <div style={{fontSize:11,color:"rgba(255,255,255,0.26)",marginTop:3}}>{clock.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}</div>
      <div style={{display:"flex",gap:2.5,flexWrap:"wrap",justifyContent:"center",maxWidth:160,margin:"16px auto 0"}}>
        {Array.from({length:60},(_,i)=>(<div key={i} style={{width:4.5,height:4.5,borderRadius:"50%",flexShrink:0,background:i<cS?accent:"rgba(255,255,255,0.1)",boxShadow:i<cS?`0 0 5px ${accent}99`:"none",transition:`background ${DUR.s2}ms`}}/>))}
      </div>
      {upcomingCount>0&&(<div onClick={onUpcomingClick} style={{marginTop:18,cursor:"pointer",padding:"8px 16px",borderRadius:SHP.full,background:`${accent}22`,border:`1px solid ${accent}44`,fontSize:12,color:accent,fontWeight:600,display:"inline-flex",alignItems:"center",gap:6,transition:`background ${DUR.s4}ms`}} onMouseEnter={e=>e.currentTarget.style.background=`${accent}38`} onMouseLeave={e=>e.currentTarget.style.background=`${accent}22`}>📅 {upcomingCount} upcoming</div>)}
    </div>
  );
}

export default function App(){
  const [current,  setCurrent]  = useState(()=>{const n=new Date();return new Date(n.getFullYear(),n.getMonth(),1);});
  const [selected, setSelected] = useState(()=>new Date());
  const [view,     setView]     = useState("month");
  const [clock,    setClock]    = useState(()=>new Date());
  const [modal,    setModal]    = useState(null);
  const [editEv,   setEditEv]   = useState(null);
  const [yearNav,  setYearNav]  = useState(()=>new Date().getFullYear());
  const [searchQ,  setSearchQ]  = useState("");
  const [toast,    setToast]    = useState(null);
  const [form,     setForm]     = useState({title:"",time:"",color:ECOLS[0],note:"",repeat:"none"});
  const [data,setData]=useState(()=>{const s=loadS();return{events:s.events||{},theme:s.theme||"aurora",weekStart:s.weekStart??0,showHol:s.showHol!==false};});
  const save=useCallback(patch=>{setData(prev=>{const n={...prev,...patch};saveS(n);return n;});},[]);
  const th=THEMES[data.theme]||THEMES.aurora;

  useEffect(()=>{const t=setInterval(()=>setClock(new Date()),1000);return()=>clearInterval(t);},[]);
  const toast_=useCallback((msg,type="ok")=>{setToast({msg,type});setTimeout(()=>setToast(null),2300);},[]);

  /* isToday uses live clock string — never freezes on app-start date */
  const todayKey=`${clock.getFullYear()}-${p2(clock.getMonth()+1)}-${p2(clock.getDate())}`;
  const isToday=useCallback(d=>dk(d)===todayKey,[todayKey]);

  const nav=useCallback(dir=>{if(view==="month")setCurrent(c=>{const n=new Date(c);n.setMonth(n.getMonth()+dir);return n;});else setSelected(s=>{const n=new Date(s);n.setDate(n.getDate()+dir*7);return n;});},[view]);
  const goToday=useCallback(()=>{const t=new Date();setSelected(new Date(t));setCurrent(new Date(t.getFullYear(),t.getMonth(),1));},[]);

  const cells=useMemo(()=>{
    const fd=(new Date(current.getFullYear(),current.getMonth(),1).getDay()-data.weekStart+7)%7;
    const dim=new Date(current.getFullYear(),current.getMonth()+1,0).getDate();
    const pDim=new Date(current.getFullYear(),current.getMonth(),0).getDate();
    const arr=[];
    for(let i=fd-1;i>=0;i--)arr.push({d:pDim-i,other:true,date:new Date(current.getFullYear(),current.getMonth()-1,pDim-i)});
    for(let i=1;i<=dim;i++)arr.push({d:i,other:false,date:new Date(current.getFullYear(),current.getMonth(),i)});
    let nx=1;while(arr.length<42){arr.push({d:nx,other:true,date:new Date(current.getFullYear(),current.getMonth()+1,nx)});nx++;}
    return arr;
  },[current,data.weekStart]);

  const dayLabels=useMemo(()=>[...DAYS_S.slice(data.weekStart),...DAYS_S.slice(0,data.weekStart)],[data.weekStart]);
  const weekDays=useMemo(()=>{const s=new Date(selected);s.setDate(selected.getDate()-((selected.getDay()-data.weekStart+7)%7));return Array.from({length:7},(_,i)=>{const d=new Date(s);d.setDate(d.getDate()+i);return d;});},[selected,data.weekStart]);

  const selKey=dk(selected),selEvents=data.events[selKey]||[];

  const upcoming=useMemo(()=>{
    const arr=[],base=new Date(clock);base.setHours(0,0,0,0);
    for(let i=0;i<30;i++){const d=new Date(base);d.setDate(base.getDate()+i);const k=dk(d);(data.events[k]||[]).forEach(e=>arr.push({...e,_key:k,_date:new Date(d)}));}
    return arr;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data.events,todayKey]);

  const searchRes=useMemo(()=>{if(searchQ.trim().length<2)return[];const q=searchQ.toLowerCase();return Object.entries(data.events).flatMap(([k,evs])=>evs.filter(e=>e.title.toLowerCase().includes(q)||(e.note||"").toLowerCase().includes(q)).map(e=>({...e,_key:k})));},[data.events,searchQ]);

  const addEvent=useCallback(()=>{if(!form.title.trim())return;const key=dk(selected);save({events:{...data.events,[key]:[...(data.events[key]||[]),{...form,id:Date.now(),title:form.title.trim()}]}});setForm({title:"",time:"",color:ECOLS[0],note:"",repeat:"none"});toast_("Event saved ✓");setModal("events");},[form,selected,data.events,save,toast_]);
  const deleteEvent=useCallback((key,id)=>{const upd=(data.events[key]||[]).filter(e=>e.id!==id);const evs={...data.events};if(upd.length)evs[key]=upd;else delete evs[key];save({events:evs});toast_("Deleted","warn");},[data.events,save,toast_]);
  const saveEdit=useCallback(()=>{if(!editEv)return;const upd=(data.events[editEv._key]||[]).map(e=>e.id===editEv.id?{...e,...editEv}:e);save({events:{...data.events,[editEv._key]:upd}});setEditEv(null);setModal("events");toast_("Updated ✓");},[editEv,data.events,save,toast_]);

  const inp={background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.14)",color:"#fff",padding:"10px 14px",borderRadius:SHP.m,fontSize:13.5,fontFamily:"inherit",outline:"none",width:"100%",transition:`border-color ${DUR.s4}ms`};
  const lbl={fontSize:10.5,color:"rgba(255,255,255,0.42)",marginBottom:6,letterSpacing:0.9,fontWeight:700,textTransform:"uppercase"};
  const {fire:fabFire,els:fabEls}=useRipple(true);

  return(
    <div style={{position:"fixed",inset:0,fontFamily:"system-ui,sans-serif",color:"#fff",background:th.bg,overflow:"hidden"}}>
      <div style={{position:"fixed",inset:0,zIndex:0,background:`radial-gradient(ellipse 85% 65% at 8% 12%, ${th.c1}48 0%,transparent 55%),radial-gradient(ellipse 70% 58% at 94% 88%, ${th.c2}40 0%,transparent 55%),radial-gradient(ellipse 55% 48% at 58% 2%, ${th.c3}28 0%,transparent 50%),radial-gradient(ellipse 48% 42% at 2% 96%, ${th.c4}1a 0%,transparent 50%)`}}/>
      <FluidCanvas themeKey={data.theme}/>

      {toast&&(<div style={{position:"fixed",top:18,left:"50%",transform:"translateX(-50%)",zIndex:9999,...glass({borderRadius:SHP.full,padding:"10px 24px",fontSize:13,fontWeight:600}),background:toast.type==="warn"?"rgba(248,113,113,0.22)":"rgba(52,211,153,0.22)",border:`1px solid ${toast.type==="warn"?"rgba(248,113,113,0.4)":"rgba(52,211,153,0.4)"}`,whiteSpace:"nowrap",animation:`m3toast ${DUR.m2}ms ${EASE.decel} both`}}>{toast.msg}</div>)}

      <div style={{position:"relative",zIndex:10,display:"flex",height:"100vh",alignItems:"center",justifyContent:"center",gap:20,padding:20,flexWrap:"wrap",overflowY:"auto"}}>

        {/* CALENDAR */}
        <div style={{...glass({padding:28}),width:420,flexShrink:0,boxShadow:"0 32px 100px rgba(0,0,0,0.55),"+EL.e3}}>
          <div style={{display:"flex",gap:6,marginBottom:18,alignItems:"center",flexWrap:"wrap"}}>
            {[["month","Month"],["week","Week"]].map(([v,l])=>(<Chip key={v} label={l} selected={view===v} onClick={()=>setView(v)} accent={th.c1}/>))}
            <Chip label="Year" selected={false} onClick={()=>{setYearNav(current.getFullYear());setModal("year");}} accent={th.c1}/>
            <div style={{flex:1}}/>
            <IconBtn icon="🔍" label="Search"   onClick={()=>setModal("search")}   accent={th.c1}/>
            <IconBtn icon="📋" label="Upcoming" onClick={()=>setModal("upcoming")} accent={th.c1}/>
            <IconBtn icon="⚙️" label="Settings" onClick={()=>setModal("settings")} accent={th.c1}/>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20}}>
            <IconBtn icon="‹" label="Prev" onClick={()=>nav(-1)} accent={th.c1}/>
            <div style={{textAlign:"center",cursor:"pointer"}} onClick={()=>{setYearNav(current.getFullYear());setModal("year");}}>
              <div style={{fontFamily:"Georgia,serif",fontSize:22,fontWeight:600,lineHeight:1,color:"#fff"}}>
                {view==="week"?`${MONTHS[weekDays[0].getMonth()].slice(0,3)} ${weekDays[0].getDate()} – ${MONTHS[weekDays[6].getMonth()].slice(0,3)} ${weekDays[6].getDate()}`:MONTHS[current.getMonth()]}
              </div>
              <div style={{fontSize:11.5,color:"rgba(255,255,255,0.38)",marginTop:3,letterSpacing:3}}>{view==="week"?weekDays[0].getFullYear():current.getFullYear()}</div>
            </div>
            <IconBtn icon="›" label="Next" onClick={()=>nav(1)} accent={th.c1}/>
          </div>

          {view==="month"&&(<>
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",marginBottom:8}}>{dayLabels.map((d,i)=>(<div key={i} style={{textAlign:"center",fontSize:10,fontWeight:700,letterSpacing:0.8,color:"rgba(255,255,255,0.33)",padding:"4px 0"}}>{d}</div>))}</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:3}}>{cells.map(({d,other,date},i)=>(<DayCell key={i} d={d} other={other} isToday={isToday(date)} isSel={sameDay(date,selected)&&!isToday(date)} hasEv={(data.events[dk(date)]||[]).length>0} hol={data.showHol?holFor(date):null} isWknd={date.getDay()===0||date.getDay()===6} accent={th.c1} onClick={()=>{if(!other)setSelected(new Date(date));}} onDblClick={()=>{if(!other){setSelected(new Date(date));setModal("add");}}}/>))}</div>
          </>)}

          {view==="week"&&(<div>
            <div style={{display:"grid",gridTemplateColumns:"44px repeat(7,1fr)",gap:2,marginBottom:4}}>
              <div/>
              {weekDays.map((d,i)=>{const isT=isToday(d);return(<div key={i} style={{textAlign:"center"}}><div style={{fontSize:9,color:"rgba(255,255,255,0.38)",textTransform:"uppercase",letterSpacing:0.5,fontWeight:700}}>{DAY3[d.getDay()]}</div><div onClick={()=>setSelected(new Date(d))} style={{fontSize:16,fontWeight:600,cursor:"pointer",width:30,height:30,borderRadius:"50%",margin:"3px auto 0",display:"flex",alignItems:"center",justifyContent:"center",background:isT?`linear-gradient(135deg,${th.c1},${th.c2})`:"transparent",color:isT?"#fff":"rgba(255,255,255,0.85)",boxShadow:isT?`0 2px 14px ${th.c1}88`:"none",transition:`all ${DUR.m1}ms ${EASE.std}`}}>{d.getDate()}</div></div>);})}
            </div>
            <div style={{maxHeight:302,overflowY:"auto"}}>{Array.from({length:24},(_,h)=>(<div key={h} style={{display:"grid",gridTemplateColumns:"44px repeat(7,1fr)",gap:2,minHeight:36}}><div style={{fontSize:9.5,color:"rgba(255,255,255,0.28)",textAlign:"right",paddingRight:6,paddingTop:5,whiteSpace:"nowrap"}}>{h===0?"12am":h<12?h+"am":h===12?"12pm":(h-12)+"pm"}</div>{weekDays.map((d,i)=>{const key=dk(d);const evs=(data.events[key]||[]).filter(e=>e.time&&parseInt(e.time.split(":")[0])===h);return(<div key={i} onClick={()=>{setSelected(new Date(d));setModal("add");}} style={{borderTop:"1px solid rgba(255,255,255,0.04)",borderRadius:SHP.xs,cursor:"pointer",position:"relative",minHeight:36,transition:`background ${DUR.s3}ms`}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.05)"} onMouseLeave={e=>e.currentTarget.style.background="transparent"}>{evs.map(ev=>(<div key={ev.id} style={{position:"absolute",inset:"2px 2px",borderRadius:SHP.xs,padding:"2px 5px",fontSize:9.5,fontWeight:600,overflow:"hidden",whiteSpace:"nowrap",background:`${ev.color}30`,borderLeft:`2.5px solid ${ev.color}`}}>{ev.title}</div>))}</div>);})}</div>))}</div>
          </div>)}

          <div style={{marginTop:18,paddingTop:15,borderTop:"1px solid rgba(255,255,255,0.07)",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10}}>
            <div style={{minWidth:0}}>
              <div style={{fontSize:13,fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{selected.toLocaleDateString("en-US",{weekday:"short",month:"long",day:"numeric",year:"numeric"})}</div>
              {data.showHol&&holFor(selected)&&(<div style={{fontSize:11.5,color:"#f87171",marginTop:2}}>🎉 {holFor(selected)}</div>)}
              {selEvents.length>0&&(<div style={{fontSize:11.5,color:"rgba(255,255,255,0.38)",marginTop:2,cursor:"pointer"}} onClick={()=>setModal("events")}>{selEvents.length} event{selEvents.length>1?"s":""} · <span style={{color:th.c1}}>view</span></div>)}
            </div>
            <div style={{display:"flex",gap:8,flexShrink:0}}>
              <Btn onClick={()=>setModal("add")} variant="filled" accent={th.c1} xtra={{padding:"8px 18px",borderRadius:SHP.l,fontSize:12.5}}>✦ Add</Btn>
              <Btn onClick={goToday} variant="outlined" accent={th.c1} xtra={{padding:"8px 14px",borderRadius:SHP.l,fontSize:12.5}}>Today</Btn>
            </div>
          </div>
        </div>

        <ClockPanel clock={clock} accent={th.c1} upcomingCount={upcoming.length} onUpcomingClick={()=>setModal("upcoming")}/>
      </div>

      <button onClick={e=>{fabFire(e);setModal("add");}} style={{position:"fixed",bottom:24,right:24,zIndex:50,width:56,height:56,borderRadius:"50%",border:"none",background:`linear-gradient(135deg,${th.c1},${th.c2}99)`,color:"#fff",fontSize:24,cursor:"pointer",boxShadow:EL.e3,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",transition:`all ${DUR.m2}ms ${EASE.decel}`}} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";e.currentTarget.style.boxShadow=EL.e4;}} onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=EL.e3;}}>{fabEls}✦</button>

      {/* ADD */}
      <Modal open={modal==="add"} onClose={()=>setModal(null)} accent={th.c1} title={`Add · ${selected.toLocaleDateString("en-US",{month:"short",day:"numeric"})}`}>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <div><div style={lbl}>Title</div><input value={form.title} onChange={e=>setForm(f=>({...f,title:e.target.value}))} onKeyDown={e=>e.key==="Enter"&&addEvent()} placeholder="What's happening?" style={inp} autoFocus onFocus={e=>e.target.style.borderColor=`${th.c1}88`} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.14)"}/></div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <div><div style={lbl}>Time</div><input type="time" value={form.time} onChange={e=>setForm(f=>({...f,time:e.target.value}))} style={inp} onFocus={e=>e.target.style.borderColor=`${th.c1}88`} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.14)"}/>
            </div>
            <div><div style={lbl}>Repeat</div><select value={form.repeat} onChange={e=>setForm(f=>({...f,repeat:e.target.value}))} style={{...inp,cursor:"pointer"}}><option value="none">None</option><option value="daily">Daily</option><option value="weekly">Weekly</option><option value="monthly">Monthly</option></select></div>
          </div>
          <div><div style={lbl}>Note</div><input value={form.note} onChange={e=>setForm(f=>({...f,note:e.target.value}))} placeholder="Optional note…" style={inp} onFocus={e=>e.target.style.borderColor=`${th.c1}88`} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.14)"}/>
          </div>
          <div><div style={lbl}>Color</div><div style={{display:"flex",gap:9,marginTop:4,flexWrap:"wrap"}}>{ECOLS.map(c=>(<div key={c} onClick={()=>setForm(f=>({...f,color:c}))} style={{width:26,height:26,borderRadius:"50%",background:c,cursor:"pointer",border:`2.5px solid ${form.color===c?"#fff":"transparent"}`,boxShadow:form.color===c?`0 0 12px ${c},0 0 4px ${c}`:"none",transform:form.color===c?"scale(1.22)":"scale(1)",transition:`all ${DUR.s4}ms ${EASE.spring}`}}/>))}</div></div>
          <Btn onClick={addEvent} variant="filled" accent={th.c1} xtra={{marginTop:4,padding:"12px",borderRadius:SHP.l,fontSize:14}}>Save Event</Btn>
        </div>
      </Modal>

      {/* EVENTS */}
      <Modal open={modal==="events"} onClose={()=>setModal(null)} accent={th.c1} title={selected.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})}>
        {data.showHol&&holFor(selected)&&(<div style={{...glass({padding:"9px 14px",borderRadius:SHP.m,marginBottom:14,background:"rgba(248,113,113,0.13)",border:"1px solid rgba(248,113,113,0.28)"}),fontSize:13}}>🎉 {holFor(selected)}</div>)}
        {selEvents.length===0?<div style={{textAlign:"center",padding:"28px 0",color:"rgba(255,255,255,0.3)",fontSize:14}}>No events · <span style={{color:th.c1,cursor:"pointer"}} onClick={()=>setModal("add")}>Add one?</span></div>:<div style={{display:"flex",flexDirection:"column",gap:10}}>{selEvents.map(ev=>(<EvCard key={ev.id} ev={ev} onDelete={()=>deleteEvent(selKey,ev.id)} onEdit={()=>{setEditEv({...ev,_key:selKey});setModal("edit");}}/>))}</div>}
        <Btn onClick={()=>setModal("add")} variant="tonal" accent={th.c1} xtra={{marginTop:18,width:"100%",padding:"11px",borderRadius:SHP.l}}>✦ Add Event</Btn>
      </Modal>

      {/* EDIT */}
      <Modal open={modal==="edit"} onClose={()=>setModal(null)} accent={th.c1} title="Edit Event">
        {editEv&&(<div style={{display:"flex",flexDirection:"column",gap:14}}>
          <div><div style={lbl}>Title</div><input value={editEv.title} onChange={e=>setEditEv(v=>({...v,title:e.target.value}))} style={inp} onFocus={e=>e.target.style.borderColor=`${th.c1}88`} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.14)"}/>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
            <div><div style={lbl}>Time</div><input type="time" value={editEv.time||""} onChange={e=>setEditEv(v=>({...v,time:e.target.value}))} style={inp} onFocus={e=>e.target.style.borderColor=`${th.c1}88`} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.14)"}/>
            </div>
            <div><div style={lbl}>Repeat</div><select value={editEv.repeat||"none"} onChange={e=>setEditEv(v=>({...v,repeat:e.target.value}))} style={{...inp,cursor:"pointer"}}><option value="none">None</option><option value="daily">Daily</option><option value="weekly">Weekly</option><option value="monthly">Monthly</option></select></div>
          </div>
          <div><div style={lbl}>Note</div><input value={editEv.note||""} onChange={e=>setEditEv(v=>({...v,note:e.target.value}))} style={inp} onFocus={e=>e.target.style.borderColor=`${th.c1}88`} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.14)"}/>
          </div>
          <div><div style={lbl}>Color</div><div style={{display:"flex",gap:9,marginTop:4,flexWrap:"wrap"}}>{ECOLS.map(c=>(<div key={c} onClick={()=>setEditEv(v=>({...v,color:c}))} style={{width:26,height:26,borderRadius:"50%",background:c,cursor:"pointer",border:`2.5px solid ${editEv.color===c?"#fff":"transparent"}`,boxShadow:editEv.color===c?`0 0 12px ${c}`:"none",transform:editEv.color===c?"scale(1.22)":"scale(1)",transition:`all ${DUR.s4}ms ${EASE.spring}`}}/>))}</div></div>
          <div style={{display:"flex",gap:10,marginTop:4}}>
            <Btn onClick={saveEdit} variant="filled" accent={th.c1} xtra={{flex:1,padding:"11px",borderRadius:SHP.l}}>Save</Btn>
            <Btn onClick={()=>{deleteEvent(editEv._key,editEv.id);setModal(null);}} variant="tonal" accent="#f87171" xtra={{padding:"11px 18px",borderRadius:SHP.l,color:"#f87171"}}>Delete</Btn>
          </div>
        </div>)}
      </Modal>

      {/* UPCOMING */}
      <Modal open={modal==="upcoming"} onClose={()=>setModal(null)} accent={th.c1} title="Upcoming — Next 30 Days" width={490}>
        {upcoming.length===0?<div style={{textAlign:"center",color:"rgba(255,255,255,0.3)",padding:"24px 0",fontSize:14}}>No upcoming events</div>:
        <div style={{display:"flex",flexDirection:"column",gap:9}}>{upcoming.slice(0,25).map(ev=>(<div key={ev.id+ev._key} onClick={()=>{setSelected(new Date(ev._date));setCurrent(new Date(ev._date.getFullYear(),ev._date.getMonth(),1));setModal(null);}} style={{display:"flex",gap:14,padding:"12px 14px",cursor:"pointer",background:"rgba(255,255,255,0.05)",borderRadius:SHP.l,border:`1px solid rgba(255,255,255,0.08)`,borderLeft:`3px solid ${ev.color}`,transition:`background ${DUR.s4}ms`}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.1)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.05)"}><div style={{minWidth:50,textAlign:"center"}}><div style={{fontSize:10.5,color:"rgba(255,255,255,0.38)",textTransform:"uppercase",letterSpacing:0.5,fontWeight:700}}>{MONTHS[ev._date.getMonth()].slice(0,3)}</div><div style={{fontSize:24,fontWeight:500,lineHeight:1.1,marginTop:1}}>{ev._date.getDate()}</div><div style={{fontSize:10,color:"rgba(255,255,255,0.3)"}}>{DAY3[ev._date.getDay()]}</div></div><div style={{flex:1,minWidth:0,paddingTop:2}}><div style={{fontSize:13.5,fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ev.title}</div>{ev.time&&<div style={{fontSize:11.5,color:"rgba(255,255,255,0.4)",marginTop:2}}>{fmtT(ev.time)}</div>}{ev.note&&<div style={{fontSize:11.5,color:"rgba(255,255,255,0.3)",marginTop:3,fontStyle:"italic"}}>{ev.note}</div>}</div></div>))}</div>}
      </Modal>

      {/* SEARCH */}
      <Modal open={modal==="search"} onClose={()=>{setModal(null);setSearchQ("");}} accent={th.c1} title="Search Events">
        <input value={searchQ} onChange={e=>setSearchQ(e.target.value)} placeholder="Search title or note…" style={{...inp,marginBottom:14}} autoFocus onFocus={e=>e.target.style.borderColor=`${th.c1}88`} onBlur={e=>e.target.style.borderColor="rgba(255,255,255,0.14)"}/>
        {searchQ.length>1&&searchRes.length===0&&(<div style={{textAlign:"center",color:"rgba(255,255,255,0.3)",fontSize:13.5,padding:"16px 0"}}>No results</div>)}
        <div style={{display:"flex",flexDirection:"column",gap:9}}>{searchRes.map(ev=>(<div key={ev.id+ev._key} onClick={()=>{const d=new Date(ev._key+"T12:00:00");setSelected(d);setCurrent(new Date(d.getFullYear(),d.getMonth(),1));setModal(null);setSearchQ("");}} style={{display:"flex",alignItems:"center",gap:12,padding:"11px 14px",cursor:"pointer",background:"rgba(255,255,255,0.05)",borderRadius:SHP.l,border:`1px solid rgba(255,255,255,0.08)`,borderLeft:`3px solid ${ev.color}`,transition:`background ${DUR.s4}ms`}} onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,0.1)"} onMouseLeave={e=>e.currentTarget.style.background="rgba(255,255,255,0.05)"}><div style={{flex:1,minWidth:0}}><div style={{fontSize:13.5,fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ev.title}</div><div style={{fontSize:11.5,color:"rgba(255,255,255,0.4)",marginTop:2}}>{new Date(ev._key+"T12:00:00").toLocaleDateString("en-US",{weekday:"short",month:"long",day:"numeric",year:"numeric"})}{ev.time&&` · ${fmtT(ev.time)}`}</div></div></div>))}</div>
      </Modal>

      {/* YEAR */}
      <Modal open={modal==="year"} onClose={()=>setModal(null)} accent={th.c1} width={720}
        title={<span style={{display:"flex",alignItems:"center",gap:12}}><IconBtn icon="‹" label="Prev year" onClick={()=>setYearNav(y=>y-1)} accent={th.c1} sz={32}/><span style={{fontFamily:"Georgia,serif",fontSize:20,fontWeight:600}}>{yearNav}</span><IconBtn icon="›" label="Next year" onClick={()=>setYearNav(y=>y+1)} accent={th.c1} sz={32}/></span>}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
          {Array.from({length:12},(_,m)=>(<MiniMonth key={m} year={yearNav} month={m} today={clock} events={data.events} accent={th.c1} onSelect={(y,mo)=>{setCurrent(new Date(y,mo,1));setSelected(new Date(y,mo,1));setModal(null);}}/>))}
        </div>
      </Modal>

      {/* SETTINGS */}
      <Modal open={modal==="settings"} onClose={()=>setModal(null)} accent={th.c1} title="Settings" width={490}>
        <div style={{display:"flex",flexDirection:"column",gap:24}}>
          <div>
            <div style={{...lbl,marginBottom:12}}>Theme</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:9}}>
              {Object.entries(THEMES).map(([k,t])=>(<button key={k} onClick={()=>save({theme:k})} style={{padding:"12px 6px",borderRadius:SHP.l,cursor:"pointer",fontFamily:"inherit",fontWeight:600,fontSize:12.5,border:"none",background:data.theme===k?`${t.c1}38`:"rgba(255,255,255,0.06)",outline:`1px solid ${data.theme===k?t.c1+"77":"rgba(255,255,255,0.1)"}`,color:data.theme===k?"#fff":"rgba(255,255,255,0.5)",transition:`all ${DUR.m2}ms ${EASE.std}`,display:"flex",flexDirection:"column",alignItems:"center",gap:8}}><div style={{display:"flex",gap:5}}>{[t.c1,t.c2,t.c3].map((c,i)=>(<div key={i} style={{width:12,height:12,borderRadius:"50%",background:c,boxShadow:`0 0 7px ${c}99`}}/>))}</div>{t.name}</button>))}
            </div>
          </div>
          <div>
            <div style={{...lbl,marginBottom:12}}>Options</div>
            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              {[["Show Holidays",data.showHol,v=>save({showHol:v})],["Week starts Mon",data.weekStart===1,v=>save({weekStart:v?1:0})]].map(([label,val,setter])=>(<div key={label} style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><div style={{fontSize:14,color:"rgba(255,255,255,0.7)"}}>{label}</div><Toggle val={val} onChange={setter} accent={th.c1}/></div>))}
            </div>
          </div>
          <div>
            <div style={{...lbl,marginBottom:12}}>Data</div>
            <div style={{display:"flex",gap:10}}>
              <Btn variant="tonal" accent={th.c1} xtra={{flex:1,padding:"11px",borderRadius:SHP.l}} onClick={()=>{const blob=new Blob([JSON.stringify({events:data.events},null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`calendar-${new Date().toISOString().slice(0,10)}.json`;a.click();toast_("Exported ✓");}}>⬇ Export</Btn>
              <Btn variant="outlined" accent="#f87171" xtra={{flex:1,padding:"11px",borderRadius:SHP.l,color:"rgba(248,113,113,0.85)",outline:"1px solid rgba(248,113,113,0.35)"}} onClick={()=>{if(window.confirm("Clear ALL events?")){save({events:{}});toast_("Cleared","warn");}}}>🗑 Clear All</Btn>
            </div>
          </div>
        </div>
      </Modal>

      <Keys onLeft={()=>nav(-1)} onRight={()=>nav(1)} onToday={goToday} onAdd={()=>setModal("add")} onSearch={()=>setModal("search")} onEsc={()=>setModal(null)}/>
      <div style={{position:"fixed",bottom:14,left:"50%",transform:"translateX(-50%)",zIndex:20,fontSize:10,color:"rgba(255,255,255,0.17)",letterSpacing:0.5,whiteSpace:"nowrap"}}>← → Navigate · T Today · A Add · S Search · Esc Close</div>

      <style>{`*{box-sizing:border-box;}::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.14);border-radius:2px;}select option{background:#06000f;color:#fff;}input[type=time]::-webkit-calendar-picker-indicator{filter:invert(1);opacity:0.4;cursor:pointer;}@keyframes m3rip{to{width:320px;height:320px;opacity:0;}}@keyframes m3toast{from{opacity:0;transform:translate(-50%,-10px);}to{opacity:1;transform:translateX(-50%);}}`}</style>
    </div>
  );
}

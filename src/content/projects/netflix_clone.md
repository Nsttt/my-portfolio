---
title: "Netflix Clone"
subtitle: "A very simple Netflix clone."
description: "A very simple but accurate clone of a famous streaming service. Made with React (custom hooks & context), styled-components and Firebase"
date: "October 16, 2020"
link: "https://n-clone.nstlopez.com"
source: "https://github.com/nsttt/netflix-clone"
---

This is essentially a clone of the famous streaming platform Netflix, but built my way.
I decided to get more comfortable with React building a _quite complicated at the time_ project.
The idea was simple.
I wanted to copy a famous streaming platform design and logic but with my own stack.
The whole front-end is managed with a React app and the backend is a very basic Firebase setup with auth enabled.

The app consists of a main page, login and signup pages, and a browse page where you can see a few of stock shows gave to the app.

At the time when I built it I was planning on just making the “visible” part of it, but it ended up taking more than that. The auth part was probably the most tedious. Although it uses Firebase and it’s quite easy to setup I had never done anything like it and was quite an experience.

For the whole communication it was a really nice practice for the `useContext` hook. Pretty much the whole app is managed through it and gave me a really good glimpse of where and when is a nice idea to use it.

Talking about _hooks_ I also made my owns with this project!
The _hooks_ I’m talking about is the `useContent` and `useAuthListener`. Both made for the Firebase provider to be a little easier to work with and to access the `localStorage` for the auth sessions.

Design-wise I tried to make the app as close as the original as possible, I believe I made a really accurate clone of it, the part where I struggled the most is the `browse` page where the shows are displayed once you log in. It’s not as accurate as I’d like to, but I believe it turned out nicely.
On the other hand, the video player ended up being quite complicated, understandably, since it’s the key to the service, so I just made it play a stock video and called it a day.

I also got to know **styled-components**, which is the styling library used for the whole app. Pretty much my go-to library since then, I love it, works flawlessly and it puts you in control at the same time as give you a good way to structure your components.

---
title: 'Instagram Clone'
subtitle: 'A simple Instagram clone.'
description: 'A simple clone of Instagram with very basic functionality.  Made with React, TailwindCSS and Firebase. Including tests with testing-library, Jest and Cypress.'
date: '2020-01-01'
---

This is my second clone of a famous platform. First i started with my [Netflix clone](https://nstlopez.com/project/streaming-service) and now an Instagram clone.

The sole purpose for me to make these clones is to learn how to manage a page that is commonly used in production-ready environments, and since I use Instagram quite a bit, I decided to try to replicate it.

Since I wanted the project to be as straight-forward as possible I decided to use **React** with **create-react-app (CRA). I'm quite used to work with it and it seemed like a good option to build and learn new things on the way.**

Later on, I realised that [Vite 2.0](https://dev.to/yyx990803/announcing-vite-2-0-2f0a) got released and thought about migrating to it, it did not happen at the end because the project was already sort of half-made already and I was honestly too lazy to move everything.

I quite recommend you give it a look next time you want to start a new React project, it really is blazing fast.

Talking about technologies used, one of the reasons that this project was used for is an excuse to learn **TailwindCSS** since it's on everyone talks lately. Tailwind is a CSS framework based on classes. Working with it has been cool, it makes development quite easy, although if I had to say something about it, is that it really makes code a lot less legible and quite chaotic at some point.

This time I have used Firebase again, just like in the [Netflix clone](https://nstlopez.com/project/streaming-service), it just makes thing way easier for me, though, this time I decided to use more than what it offers, and not only do I use auth but also decided to upload data referring to followers to Firestore. Although this might be one of the last projects I use it. Don't take me wrong, Firebase is great, but lately I want to use my own data layer built on other DBs and with other approaches.

Another reason that I took a project like this one is to put to practice my knowledge on testing libraries. On my other clone I just used [testing-library](https://testing-library.com/) and called it a day, they were not really complex tests or really useful at all, so I decided to make something different on this project.

This time I used a classic approach of **testing-library** + **Jest** and end-to-end testing with **Cypress**.

This project has been quite a lot of fun. From managing the comments and the auth with Firebase to testing everything is running smoothly on any case as well as making the entire page as responsive as possible. This would probably be my last clone for a while, since I want to focus on making something different from the usual as a way to push myself further of my comfort zone as well as practicing other topics of project management.

Thanks for the read and hope you have a good day :).

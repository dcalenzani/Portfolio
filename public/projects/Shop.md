---
title: 'E-Shop'
excerpt: 'Google Drive & Whatsapp driven shop for small bussinesses'
coverImage: "/Eshop.jpg"
date: '2023-05-16'
author: 
    name: Daniel Alfonso
    picture: "/assets/blog/authors/Daniel.jpeg"
ogImage:
    url:"/Eshop.jpg"
---

# ESHOP: A quick fullstack integrated with Google Drive, focused on small bussinesses

## Introduction
I have worked with big companies (more than a 100 employees in just my country) as well as small ones (less than 5 employees and only on my country). One of the biggest differences between one and the other, at least in Peru, is the power of expense. 

So, can a e-commerce be implemented in a way that allows them to easily update the contents in their new tool? 

## Part one: Tools used

For this task, we'll create a front-end and back-end to commit sacrilegy: We are using Google Sheets as a database. 

Why not excel? Well, If we are trying to stay away from high cost, the office suite is really expensive, now it has even turned into a subscription model, which makes the investement more risky for small companies. Just as a write this, I'm thinking that maybe LibreOffice has some sort of free db integration, as ms access. But without taking away this possibility, maybe troubles with connectivity will aries when trying to opening your router to the world. I've tried it before, sometimes your ISP will mess your router so you are not able to do this without paying a small fee, specially on more modern routers.

So... Google Sheets and Google Drive!

For the frontend, I'm using [NextJS](https://nextjs.org) with [Typescript](https://typescriptlang.org) and [Tailwind](https://tailwindcss.com). Please note that these are personal preferences, and you could use any other framework whatsover, I'm in fact trying to refactor some of my projects into "the legend", [JQuery](https://jquery.com/), but have been focusing first on finishing acceptable public versions of my current work. Despite this disclaimer, the examples in code I'll use will use this additions to the vanilla Javascript.

For the backend, I'm also using NextJS. The deployment was done with [Vercel](https://vercel.com), which I'll admit is pretty good on their hobby plan, and with this implementation you wont burn real database storage (I'm looking at you [Vercel Postgres](https://vercel.com)!). As a general comment I will say that, if you are able you really should try self hosting, but this is a whole another topic which I've failed to implement myself. I also haven't found updated data for Movistars Peru Router model to open your ports in a stable manner, so I can't share relevant data on the topic.

![Stack](/public/img/stack.jpg)

## Part two: Set-up

1. Google Sheets:

As a "Database" we are using Google's cloud personal service, [Google Drive](https://www.drive.google.com), and subsequently creating a Google Sheets document where we'll fill our inventory. Please, note that **this "database" won't automatically update your inventory, its a quid pro quo**. 

![NewSheet](/public/img/newsheet.jpg)

On your table, create headers equivalent to your product needs. In this case I'll create:

1. Name
2. Cost
3. Description
4. Image
5. Stock

Which are the basic keys for each product, and will be showed in the UI.

If you don't have a google account I'm really happy for you, but you won't be able to complete this section. As I've stated, I'm not sure that LibreOffice has similar qualities. On the other side, you can check [MemMan](https://public-memman.vercel.app), which uses PSQL as a backend, this might be more useful for your requirenments.

2. NodeJS, NVM and NPM

[NodeJS](https://nodejs.org/) is a runtime for Javascript, based on the V8 Javascript engine created by Google for use in Chrome. This means that NodeJS will let you test and run your application without having to launch it publicly everytime you update something. 

Currently (2024-03-29) NodeJS can be installed using a prebuilt installer for Windows or Mac. If you don't want to use the installer, you can also use a package manager, I would recommend [Chocolatey]() for Windows and [Brew]() on Mac, in Linux, use NVM. All three environments can be built from source

> There are many versions of Node, and perhaps you'll need to use a different version in the future to colaborate with teams. So I would recommend installing [Node Version Manager](). This part might be a little bit hard if you use Windows(it was for me!) and also you are in your first steps at programming. Since there are no pre-installers for Windows, we need to first use [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/install), also called WSL, and install over it.

Installing NVM will also help in further steps, specially on Linux. If you are using Windows and you don't really want to try version control right now, then I would, again, recommend installing using just Chocolatey or the Prebuilt Installer in the latest version. Follow a similar path with Mac but using brew.

> We should be a little bit grateful to Microsoft, since (not unadvertedly aligned with their bussiness plans) they actually have been investing a lot of money and power into inserting linux and UNIX into Windows, and developing Open Source projects, you can _easily_ have linux on windows.

So, you have Node installed, and you might have catched that this tool includes NPM, or node package manager.

NPM comes handy when using node, here you'll find libraries with code for implementing different tools on your javascript development and also a CLI to run your applications, update them and built them for export. Be careful, since as well  as it happened with Python and Pip, some people will use the liberties of free code to distribute malware. Verify your sources.

We'll actually use a lot of npm on the next steps, it will be a key component on building our UI.

3. NextJS / React

[React]() was created by Facebook to create components of parts of your application that could repeat a lot of times in different pages. It helps a lot when creating UIs that interact differently on client and server models. But lacks a proper way to handle backend. 

To help us with this will use the NextJS framework, which uses React as a front-end and 




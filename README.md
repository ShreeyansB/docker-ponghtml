﻿# docker-ponghtml

A simple pong webpage wrapped in a Docker container

### Usage

Clone the repo:
```bash
git clone https://github.com/ShreeyansB/docker-ponghtml.git
```
Build the image:
```bash
docker build -t shreeyansb/ponghtml
```
Run the image:
```bash
docker run -p 8080:8080 shreeyansb/ponghtml
```

> Credits to [straker](https://gist.github.com/straker/81b59eecf70da93af396f963596dfdc5) for the pong game

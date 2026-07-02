---
layout: post
title: "Newton-Raphson"
date: 2026-06-19 14:35
description: PLACEHOLDER
tags: Optimizers
categories: Optimizers
chart:
  plotly: false
---

# Introduction
The core function of an optimizer is to minimize the loss function. For deep neural networks, we can never find the true loss function $F(\theta)$ (in which $\theta$ is the parameters of the function) due to the loss function being hyperconvex, however we can approximate the true loss function $F(\theta)$ using a surrogate function $f(\theta)$. This function $f(x)$ can be approximated using taylor series approximation.

## Taylor Series Approximation
Taylor series is a way of approximating any continously differentiable function $\mathcal{L}(\theta)$ using polynominals of degree n. The higher the degree, the better the approximation. For a better explaination and visual intuition of Taylor Series, I would recommend watching [Grant's video on this](https://youtu.be/3d6DsjIBzJ4?si=PNw_f9Vf4hwluY9Y).





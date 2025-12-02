---
layout: post
title: A Study Guide: Categorizing Deep Learning Optimizers by Modification Type
date: 2025-12-02 16:21
description: This metapost classifies popular optimizers based on their core modifications—Momentum, Adaptive Learning Rates, or a Hybrid approach—serving as a Table of Contents for a structured deep dive.
tags: Optimizers
categories: Optimizers
chart:
  plotly: false
---

# Introduction

All deep learning optimizers fundamentally modify the **Stochastic Gradient Descent (SGD)** update rule to improve convergence speed and stability.

The base equation for SGD is:

$$w_t = w_{t-1} -\eta_{eff} \cdot \nabla w_t$$

Optimizers introduce complexity by modifying the **effective learning rate term** ($\eta_{eff}$) and/or the **gradient direction term** ($\nabla_{eff}$).

## Category 1: Direction/Velocity Modifiers (Momentum)

These optimizers focus on modifying the **effective gradient direction** ($\nabla_{eff}$) via history accumulation (momentum) while maintaining a **fixed global learning rate** ($\eta$).

- SGD
- Momentum based Gradient Descent
- Nesterov Accelerated Gradient Descent

## Category 2: Adaptive Learning Rate Modifiers

These optimizers focus on making the **effective learning rate** ($\eta_{eff}$) per-parameter and inversely proportional to the history of squared gradients. They do **not** use momentum accumulation.

- AdaGrad
- RMSProp
- AdaDelta
  j

### Category 3: Hybrid (Momentum + Adaptive $\eta$)

These methods combine the direction smoothing of Momentum (Category 1) with the per-parameter scaling of Adaptive $\eta$ (Category 2). They are the default choice for many modern applications.

- Adam
- AdamW
- NAdam

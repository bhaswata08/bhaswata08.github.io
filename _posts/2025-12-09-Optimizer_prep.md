---
layout: post
title: An Introduction to Optimizers for Deep learning
date: 2025-12-09 22:00
description: Optimizers are the key to efficiently training deep learning models. This post introduces the fundamental principles behind them, explaining how standard Stochastic Gradient Descent (SGD) is modified by advanced optimizers like Momentum, AdaGrad, and Adam.
tags: Optimizers
categories: Optimizers
chart:
  plotly: false
---

# Goals

This post provides a pedagogical classification of optimizers based on how they modify gradient updates and learning rates, along with the intuition behind this framework. It also serves as a Table of contents for this series. Individual optimizers will be covered in detail in separate, dedicated posts linked below.

# Introduction

All deep learning optimizers fundamentally modify the Stochastic Gradient Descent (SGD) update rule to improve convergence speed and stability.
Refer to Parameter Update Rule for Stochastic Gradient Descent(SGD).

$$\theta_t = \theta_{t-1} - \eta g_t$$

- Where $\theta\_t$ are the model parameters at timestep $t$.
- $\eta$ is the learning rate.
- $g\_t$ is the gradient with respect to parameters at timestep t.
- $\Delta \theta\_t = \theta\_t - \theta\_{t-1}$

Optimizers introduce complexity by modifying this equation to look more like this:

$$\theta_t = \theta_{t-1} - \eta_{eff} \hat{g_t}$$

All the optimizers fundamentally modify either effective learning rate ($\eta_{eff}$) or the effective gradient updates ($\hat{g_t}$) or a combination of both.

## Category 1: Optimizers that modify the gradient $\hat{g_t}$ (Momentum/velocity modifiers)

These optimizers focus on modifying the **effective gradient direction** ($\hat{g_t}$) via history accumulation (momentum) while maintaining a fixed global learning rate ($\eta$).

### Intuition

The modification of $\hat{g_t}$ is about using gradient history to determine the direction and magnitude of the current step. Instead of blindly following the current gradient $g_t$, we incorporate information from past gradients to make smarter directional choices.

Take momentum based gradient descent for example,

$$\hat{g_t} = \beta \hat{g_{t-1}} + g_t$$

Momentum based gradient descent will be explained in detail in the next post. #TODO

This is essentially akin to modifying the momentum or how much energy does the gradient updates($g_t$) have and how it will react to plateaus and valleys. Giving the update "energy" so it can barrel through shallow local minima or traverse flat plateaus more quickly.

### Examples

- Momentum based Gradient Descent #TODO
- Nesterov Accelerated Gradient Descent #TODO

## Category 2: Modifying learning rate $\eta_{eff}$ (Adaptive learning rate modifiers)

These optimizers focus on making the **effective learning rate** parameter-specific and adaptive, usually inversely proportional to the history of squared gradients.

### Intuition

The goal behind modifying the effective learning rate is to assign parameter wise adaptation of effective updates ($\Delta \theta_t$). Say our model is vectorized by two parameters $w$ and $b$. Now, say $w$'s loss landscape is steep and hence requires low learning rate (to avoid overshoot) and $b$'s loss landscape is flat and requires high learning rate (to learn effectively).

Take AdaGrad for example:

$$\eta_{eff} = \frac{\eta}{\sqrt{v_t} + \epsilon}$$

Where $v_t = v_{t-1} + g_t^2$,

AdaGrad assigns higher learning rates to parameters with infrequent updates (sparse features) and lower learning rates to parameters with frequent updates (dense features).

AdaGrad will be explained in detail in the subsequent posts. #TODO

### Examples

- AdaGrad (#TODO)
- RMSProp (#TODO)
- [AdaDelta]({% post_url 2025-12-01-Adadelta %})

## Category 3: Hybrid (Momentum + Adaptive $\eta$)

These methods combine the direction smoothing of Momentum (Category 1) with the per-parameter scaling of Adaptive $\eta$ (Category 2). They are the default choice for many modern applications.

### Intuition

By combining both techniques, these optimizers gain the speed of momentum on plateaus and the stability of adaptive learning rates in steep valleys.

### Examples

- [Adam (Adaptive Moment Estimation)]({% post_url 2025-12-02-adam %})
- AdaMax (#TODO: Link to post)
- NAdam (Nesterov-accelerated Adam) (#TODO: Link to post)

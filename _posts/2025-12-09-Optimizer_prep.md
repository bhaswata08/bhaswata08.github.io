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

This post provides a pedagogical classification of optimizers based on how they modify gradient updates and learning rates, along with the intuition behind this framework. It does not explain individual optimizers in detail—those will be covered in separate dedicated posts (#TODO).

# Introduction

Refer to Parameter Update Rule for Stochastic Gradient Descent(SGD).

$$\theta_t = \theta_{t-1} - \eta g_t$$

- Where $\theta\_t$ are the model parameters at timestep $t$.
- $\eta$ is the learning rate.
- $g\_t$ is the gradient with respect to parameters at timestep t.
- $\Delta \theta\_t = \theta\_t - \theta\_{t-1}$

We are going to modify the equation this way.

$$\theta_t = \theta_{t-1} - \eta_{eff} \hat{g_t}$$

All the optimizers fundamentally modify either effective learning rate $\eta_{eff}$ or the effective gradient updates $\hat{g_t}$ or a combination of both.

## Examples of optimizers that modify $\hat{g_t}$

- Momentum based Gradient Descent
- Nestrov Accelerated Gradient Descent

## Examples of optimizers that modify $\eta_{eff}$

- AdaGrad
- RMSProp
- AdaDelta

## Examples of optimizers that modify both $\eta_{eff}$ and $\hat{g_t}$

- Adam
- AdaMax
- NAdam

# Intuition behind modifying $\eta_{eff}$ and $\hat{g_t}$

## Modification of effective gradient updates.

Take momentum based gradient descent for example,

$$\hat{g_t} = \beta \hat{g_{t-1}} + g_t$$

Momentum based gradient descent will be explained in detail in the next post. #TODO

The modification of $\hat{g_t}$ is about using gradient history to determine the direction and magnitude of the current step. Instead of blindly following the current gradient $g_t$, we incorporate information from past gradients to make smarter directional choices. This is essentially akin to modifying the momentum or how much energy does the gradient updates($g_t$) have and how it will react to plateaus and valleys. In both momentum based gradient descent and Nestrov based gradient descent we give additional energy to the gradient updates in plateaus so that it takes larger steps (Intuition and nuances behind this explained in #TODO).

## Modification of effective learning rate

Take AdaGrad for example:

$$\eta_{eff} = \frac{\eta}{\sqrt{v_t} + \epsilon}$$

Where $v_t = v_{t-1} + g_t^2$,

AdaGrad assigns higher learning rates to parameters with infrequent updates (sparse features) and lower learning rates to parameters with frequent updates (dense features).

AdaGrad will be explained in detail in the subsequent posts. #TODO

The point behind modifying the effective learning rate is to assign parameter wise adaptation of effective updates ($\Delta \theta_t$). Say our model is vectorized by two parameters $w$ and $b$. Now, say $w$'s loss landscape is steep and hence requires low learning rate(to avoid overshoot) and $b$'s loss landscape is flat and requires high learning rate(to learn effectively). Modification of effective learning rate in optimizers make it so that this is handled. Details for this will be discussed in #TODO

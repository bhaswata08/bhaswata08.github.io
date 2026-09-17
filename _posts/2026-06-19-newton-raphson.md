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

### 1D case

Taylor series is a way of approximating any continuously differentiable function $\mathcal{L}(\theta)$ at the point $\theta_0$ using polynomials of degree n. The higher the degree, the better the approximation. For a better explanation and visual intuition of Taylor Series, I would recommend watching [Grant's video on this](https://youtu.be/3d6DsjIBzJ4?si=PNw_f9Vf4hwluY9Y).
$$\mathscr{L}(\theta) = \mathscr{L}(\theta_0) + \frac{\mathscr{L}'(\theta_0)}{1!}(\theta - \theta_0) + \frac{\mathscr{L}''(\theta_0)}{2!}(\theta - \theta_0)^2 + \dots = \sum_{k=0}^\infty \frac{\mathscr{L}^{(k)}(\theta_0)}{k!}(\theta - \theta_0)^k$$

> Note: A Taylor series expands a function evaluated at an arbitrary point $\theta$ around a fixed reference point $\theta_0$.

Say we have calculated the loss at the point $\theta_0$ and we want to find a step $\delta$ that moves us to a new point with lower loss.
So, $\theta_{new} = \theta_0 + \delta$

Substituting $\theta_0 + \delta$ for $\theta$ into the Taylor series, the reference point stays $\theta_0$, and the evaluation point becomes $\theta_0 + \delta$
$$\mathscr{L}(\theta_0 + \delta) = \mathscr{L}(\theta_0) + \mathscr{L}'(\theta_0)\delta + \frac{1}{2}\mathscr{L}''(\theta_0)\delta^2 + \frac{1}{6}\mathscr{L}'''(\theta_0)\delta^3 + \dots$$
The infinite series isn't something we can optimize directly. By taking the quadratic approximation of the taylor series approximation:
$$\mathscr{L}(\theta_0 + \delta) \approx \mathscr{L}(\theta_0) + \mathscr{L}'(\theta_0)\delta + \frac{1}{2}\mathscr{L}''(\theta_0)\delta^2$$
Now this is quadratic in $\delta$ and has a closed form minimum. We minimize over $\delta$ and set derivative as 0 to get the direction of minimization of loss:
$$\frac{d}{d\delta}\left[ \mathscr{L}(\theta_0) + \mathscr{L}'(\theta_0)\delta + \frac{1}{2}\mathscr{L}''(\theta_0)\delta^2 \right] = 0$$
Treating $\mathscr{L}(\theta_0)$, $\mathscr{L}'(\theta_0)$, and $\mathscr{L}''(\theta_0)$ as constants relative to $\delta$:
$$\mathscr{L}'(\theta_0) + \mathscr{L}''(\theta_0)\delta = 0$$
Solving for the ideal step size $\delta^*$:
$$\delta^* = -\frac{\mathscr{L}'(\theta_0)}{\mathscr{L}''(\theta_0)}$$

So movement towards minimization becomes: $$\theta_{new} = \theta_0 + \delta^* = \theta_0 - \delta^* = -\frac{\mathscr{L}'(\theta_0)}{\mathscr{L}''(\theta_0)}$$

> Note: There is no learning rate to tune, the step size is a property of the curvature, steep and narrow curvature results in $\mathscr{L}''$ being large which results to small cautious steps, and flat curvature ($\mathscr{L}''$ small) results in a large confident step. This is the property that every optimizer downstream of Newton-Raphson exploits, in one way or the other.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/radofcurv.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
  Low curvature vs High curvature regions
</div>

### Generalizing to n dimensions

We now generalize from the 1-D case where the singular scalar parameter was $\theta$ to a n dimensional case where $\theta$ is a vector in $\mathbb{R}^p$. The same derivation goes through $\mathscr{L}'(\theta_0)$ replaced by the gradient instead $\nabla \mathscr{L} (\theta_0)$ and $\mathscr{L} (\theta_0)$ replaced by the [Hessian](https://en.wikipedia.org/wiki/Hessian_matrix) $H = \nabla^2 \mathscr{L} (\theta_0)$, the matrix of all partial derivatives. The update becomes:
$$\theta_{new} = \theta - H^{-1} \nabla \mathscr{L}(\theta_0)$$

$$
H = \begin{bmatrix}
\dfrac{\partial^2 \mathscr{L}}{\partial \theta_1^2} & \dfrac{\partial^2 \mathscr{L}}{\partial \theta_1 \partial \theta_2} & \cdots & \dfrac{\partial^2 \mathscr{L}}{\partial \theta_1 \partial \theta_p} \\[10pt]
\dfrac{\partial^2 \mathscr{L}}{\partial \theta_2 \partial \theta_1} & \dfrac{\partial^2 \mathscr{L}}{\partial \theta_2^2} & \cdots & \dfrac{\partial^2 \mathscr{L}}{\partial \theta_2 \partial \theta_p} \\[10pt]
\vdots & \vdots & \ddots & \vdots \\[6pt]
\dfrac{\partial^2 \mathscr{L}}{\partial \theta_p \partial \theta_1} & \dfrac{\partial^2 \mathscr{L}}{\partial \theta_p \partial \theta_2} & \cdots & \dfrac{\partial^2 \mathscr{L}}{\partial \theta_p^2}
\end{bmatrix}_{\mathbb{R}^{p\times p}}
$$

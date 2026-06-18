---
layout: post
title: Eigenvalues and Eigenvectors
date: 2026-02-23 16:56
description: PLACEHOLDER
tags: Basics
categories: Basics
chart:
  plotly: false
---
# Introduction
When we multiply a vector with any matrix, it transforms the matrix into a different path.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/eigenval1.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   How a matrix multiplication changes vectors
</div>

So a vector was minding its own path, when suddenly due to a matrix multiplication, it was forced to change direction. But what if we had a matrix which just scaled the vector without changing its direction? i.e. A matrix multiplication that just scales the vector and refuses to change the direction.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/eigenvec2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
   Eigenvector refusing to change path
</div>

For a given square matrix A, there exists special vector which refuse to stray from their path. These vectors are called eigenvectors.

$$Ax = \lambda x(\text{Direction remains the same})$$

## Motivation
The concept of eigenvalues and eigenvectors are extremely important in case of vanishing and exploding gradients.
Assume we have a vector($v_t$) representing some gradient. Now assume it gets updated by the value $k$ after 1 step. Assume k is the eigenvalue of the eigenvector $v_t$.

i.e. 
After 0 iteration, $g_0 = v_0$
After 1 iteration, $g_1 = kv_0$
After 2 iteration, $g_2 = k^2 v_0$
After n iteration, $g_3 = k^2 v_0$

Now if $k > 1$, after certain iterations, the gradient will explode.
And if $k < 1$, after certain iterations, the gradient will vanish.

This is why eigenvalues and eigenvectors are important. To ensure that our gradients dont explode, we need k = 1.

### The gory sidetrack to prove why so
Scenario: Lets assume that on day 0, $k_1$ students eat chinese food and $k_2$ students eat Mexican food. On each subsequent day $i$, a fraction $p$ of the students who ate Chinese food on day $(i-1)$, continue to eat Chinese food on day $i$ and $(1-p)$ shift to Mexican food, and similarly a fraction $q$ of students who ate Mexican food on day $i$, and $(1-q)$ shift to chinese food.

i.e. 
$$
v_1 = \left[  \begin{matrix}
pk_1 + (1-q)k_2 \\
qk_2 + (1-p)k_2
\end{matrix} \right]
$$

Where row 1 is the number of people eating Mexican food and row 2 is the number of people eating Chinese food.

$$
v_1 = \left[  \begin{matrix}
p & (1-q) \\
(1-p) & q
\end{matrix} \right]\left[  \begin{matrix}
k1 \\
k_2
\end{matrix} \right]
$$

Let,
$$
A = \left[  \begin{matrix}
p & (1-q) \\
(1-p) & q
\end{matrix} \right]
$$

Therefore
$$
v_1 = 
A\left[  \begin{matrix}
k1 \\
k_2
\end{matrix} \right]
$$

And in nth iteration,
$$
v_n = 
A^n \left[  \begin{matrix}
k1 \\
k_2
\end{matrix} \right]
$$

Question: Will it reach a steady state? i.e. is A = 1
(NOTE: Observe that A is a stochastic matrix)

TODOPOST

#### Sidetrack:

1. **Stochastic Matrix**: A matrix M is called a stochastic matrix if all the entries are positive and the sum of elements in each column is equal to 1.

$$\sum_j P_{ij} = 1 \hspace{0.2cm} \forall i$$

2. Dominant Eigen values: The largest eigen value of A is called the dominant eigenvalue. 

Theorem: The largest (dominant) eigenvalue of a stochastic matrix is 1. 

1. Proof that $\lambda = 1$ is an eigenvalue
#TODO (see appendix for proof)

2. Proof that No eigenvalue satisfies |λ| > 1
#TODO (see appendix for proof)

Theorem: if A is a $n \times n$ square matrix with a dominant eigenvalue, then the sequence of vectors given by $Av_0, A^2v_0, \dots, A^n v_0, \dots$ approaches a multiple of the dominant of eigenvector of A.(theorem slightly mistated).
#TODO Write in simpler terms.

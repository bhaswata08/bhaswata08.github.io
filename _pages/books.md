---
layout: book-shelf
title: bookshelf
permalink: /reading_list/
nav: true
collection: reading_list
---
## Optimizers sequence to study

### Classical Foundations (The Math Origins)
- [ ] Newton-Raphson (The theoretical second-order ideal)
- [ ] Natural Gradient Descent / Amari 1998 (The intractable Fisher-geometry ideal that K-FAC etc. approximate)

### First Order Scalar Steps (The Physics Lineage)
- [x] SGD
- [x] Momentum based SGD
- [x] Nesterov Based SGD
- [ ] Schedule-free optimizers (The modern twist on the momentum baseline)

### Diagonal Coordinate-wise Adaptivity (The Magnitude Scalers)

#### Lineage 1: The Core Evolution
- [ ] Rprop (Riedmiller & Braun, 1993 — the mini-batch-unstable precursor RMSProp was built to fix)
- [ ] AdaGrad (The grandfather of adaptivity)
- [ ] RMSProp (Fixes AdaGrad's dying learning rate using EMA of squared gradients; Hinton's mini-batch fix for Rprop)
- [ ] MaxProp (Informal L∞ norm cousin of RMSProp — no canonical paper, derive it yourself from AdaMax in one line)
- [x] AdaDelta (Fixes RMSProp's learning rate units)
- [x] Adam (Combines RMSProp variance tracking + SGD Momentum)

#### Lineage 2: The Modern Adam Ecosystem (roughly chronological)
- [x] AdaMax (Adam generalized to L∞ norm — Dec 2014, same paper as Adam)
- [ ] Nadam (Adam + Nesterov Momentum — 2016)
- [ ] AMSGrad (Fixes Adam's theoretical convergence bugs)
- [ ] AdaBound / AMSBound (Clips Adam's learning rate to behave like SGD late-game)
- [ ] RAdam (Rectifies Adam's chaotic variance during early training warm-up)
- [ ] AdamW (The modern standard: completely decouples weight decay from gradients)
- [ ] Adafactor (Compresses Adam's memory footprint for early Transformers)
- [ ] Adan (Applies Nesterov momentum to *both* first and second moments)
- [ ] Prodigy (The modern cousin that auto-tunes its own learning rate)

#### Key Paper (read before writing AdaDelta/Adam posts)
- [ ] Kunstner, Balles & Hennig — "Limitations of the Empirical Fisher Approximation for Natural Gradient Descent" (2019)
  (True Fisher vs Empirical Fisher vs Hessian — the citable form of your FIM ≠ Hessian thesis)

### Layer-wise Adaptive Scaling (The Large-Batch Specialists)
- [ ] LARS (Layer-wise Adaptive Rate Scaling — applied to SGD)
- [ ] LAMB (Layer-wise Adaptive Moments — applied to AdamW for massive batch sizes)

### Sign-based & Matrix-structured Updates (The Structural Departures)
- [ ] signSGD / Signum (Bernstein et al., 2018 — pure sign update; Lion is this, rediscovered by program search)
- [ ] LION (Throws away variance, updates purely via the *sign* of momentum)
- [ ] Muon (Matrix-level orthogonalization via Newton-Schulz — abandons diagonal preconditioning entirely; natural foil to Shampoo/K-FAC)

### True Second-Order Curvature Approximations (The Matrix Preconditioners)
- [ ] AdaHessian (Yao et al., 2020 — diagonal Hessian via Hutchinson estimator; Sophia fixes this)
- [ ] Sophia (Lightweight diagonal Hessian clipping based on loss flatness)
- [ ] K-FAC (Kronecker-factored structural approximation of the Fisher matrix)
- [ ] Shampoo / Distributed Shampoo (Preconditions gradients using full structural data matrices)

### Meta-optimizers / Wrappers (Mechanisms that wrap around other optimizers)
- [ ] Lookahead (Tracks slow weights behind a fast optimizer)
- [ ] Ranger (Lookahead wrapped specifically around RAdam)

### Capstone / Unifying Lens
- [ ] Bernstein & Newhouse — "Old Optimizer, New Norm: An Anthology" (2024)
  (Reframes Adam/Shampoo/Prodigy as steepest descent under different operator norms — geometric close to the whole series)

---
title: Logistic noising
description: A study of deterministic chaotic dynamics for more efficient diffusion models.
date: "Aug–Apr 2025"
sortDate: "2025-04-01T00:00:00Z"
pdf: "/pdfs/Denoising_Logistic_Diffusion.pdf"
---

Semester project supervised by Prof. M. S. Santhanam at IISER Pune (Aug–Apr 2025). I studied how replacing stochastic noising with deterministic chaotic dynamics can make the reversal process faster and better suited to edge devices and compute-constrained environments.

This report presents my work on denoising a deterministic logistic
noise process for image generation within a diffusion-based framework.
Building on prior work, I model the reverse dynamics using a tree-
based branch selection mechanism applied to a class of the CIFAR-
10 dataset. I first explore a discrete branch-selection approach, and
then extend it to a continuous (soft) branch-selection formulation to
improve reconstruction quality. Finally, I investigate modifications
to the loss function to further enhance performance. Experimental
results demonstrate the effectiveness of the proposed approaches and
highlight the trade-offs between discrete and continuous formulations.

[Report](https://github.com/abhijeet11-8/Deterministic-Noising-Diffusion-model/blob/main/Logistic_Diffusion_Model.pdf) · [Code](https://github.com/abhijeet11-8/Logistic_Noising/tree/main)

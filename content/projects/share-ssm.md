---
title: Spiking Harmonic Resonate-and-Fire SSM
description: A second-order, fully spiking state-space model for long sequences.
date: "May–Jul 2025"
sortDate: "2025-07-01T00:00:00Z"
---

Summer project supervised by Prof. Ayon Borthakur at IIT Guwahati (May–Jul 2025). We proposed and evaluated a piking heterogeneous
harmonic resonate-and-fire state space model ($SH^2RFSSM$) without non-linearities such as GeLU, GLU, or GSU.

SHaRe-SSM outperformed first-order SSMs on long-sequence classification and a 50K-sequence regression task, while being highly energy efficient. The work also studied discretisation methods and network heterogeneities.

We propose and rigorously evaluate a second-order spiking SSM, completely spike-based without using any non-linearities such as GeLU, GLU, or GSU.
Furthermore, we observe that SHaRE-SSM outperforms all first-order SSMs on very long sequence classification and is extremly energy efficient than ANN-based second-order SSMs.

Also, we extend SHaRe-SSM to energy-efficient long-range regression applications and propose a convolving kernel-based regression. We observe that SHaRe-SSM outperforms first-order SSMs on a 50K sequence length regression task.
Finally, we study and explore the impact of discretization methods and network heterogeneities on SHaRe-SSM.
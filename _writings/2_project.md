---
layout: page
title: High Performance Matrix Matrix Multiplication
# img: assets/img/matrix_multiplication.jpg
importance: 3
category: work
related_publications: false
---

This C-based project provides a matrix-matrix multiplication routine that is capable of achieving
near-peak performance on a [Haswell microarchitecture](https://en.wikipedia.org/wiki/Haswell_(microarchitecture)). 

The project employs blocking for efficient memory retrieval, a five-loop routine for rapid 
matrix-matrix multiplication, and an assembly micro-kernel for enhanced performance.

The algorithm supports matrices stored in both column and row order, 
accommodates matrices of any size and shape, and includes a separate routine optimized for small matrices.

Please contact me at [hurleyqi@utexas.edu](mailto:hurleyqi@utexas.edu) if you are interested. 
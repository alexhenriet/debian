---
sidebar_label: 'PDF manipulation'
sidebar_position: 2
id: pdf
title: 'PDF manipulation'
slug: /pdf-manipulation
pagination_next: null
pagination_prev: null
---

# PDF manipulation

## Packages

```bash
apt install pdftk ghostscript qpdf pdfchain pdfarranger
```

## Concatenate files

```bash
pdftk file1.pdf file2.pdf file3.pdf cat output combined.pdf
```

## Reduce files size


```bash
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/printer -dNOPAUSE -dQUIET -dBATCH -sOutputFile=reduced_size.pdf original.pdf
```
Available qualities from worse to best are: **screen, ebook, printer, prepress**. 

## Remove index from a file

```bash
qpdf --empty --pages input.pdf -- output.pdf
```

## GUIs

**pdfchain** and **pdfarranger** are GUIs for manipulating PDF.
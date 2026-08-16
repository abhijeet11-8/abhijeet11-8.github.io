# Project PDFs

Place PDFs related to projects in this folder.

To display a PDF inside a project page, add its public path to that project's frontmatter:

```yaml
pdf: "/projects/pdfs/my-project.pdf"
```

For example, `public/projects/pdfs/my-project.pdf` is served as `/projects/pdfs/my-project.pdf` and will be embedded on the corresponding project page.

The embedded viewer is tall by default to make document pages easier to read. Browser PDF controls are provided by the visitor's browser and cannot be reliably hidden by the site.

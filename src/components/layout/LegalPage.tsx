import type { LegalDocument } from "@/content/legal";

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <article className="pb-section pt-[calc(var(--spacing-header)+4rem)] lg:pt-[calc(var(--spacing-header)+6rem)]">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <p className="label-text flex items-center gap-3 text-mute">
            <span aria-hidden="true" className="h-px w-8 bg-bordo" />
            Yasal
          </p>
          <h1 className="mt-8 font-serif text-h2">{document.title}</h1>

          {document.status === "draft" ? (
            <p role="note" className="mt-10 border border-bordo/40 px-5 py-4 text-sm text-bordo">
              Bu metin taslaktır ve hukuki onaydan sonra güncellenecektir.
            </p>
          ) : (
            document.updatedAt && (
              <p className="mt-6 text-sm text-mute">
                Son güncelleme:{" "}
                <time dateTime={document.updatedAt}>{new Date(document.updatedAt).toLocaleDateString("tr-TR")}</time>
              </p>
            )
          )}

          <div className="mt-14 space-y-12">
            {document.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-h4">{section.heading}</h2>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="mt-4 max-w-prose text-mute">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

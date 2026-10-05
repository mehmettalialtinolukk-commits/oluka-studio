import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pt-header">
      <div className="container-site">
        <p className="label-text text-mute">404</p>
        <h1 className="mt-6 font-serif text-h1">
          Bu sayfa <em className="font-normal italic text-bordo">bulunamadı.</em>
        </h1>
        <p className="mt-8 max-w-[40ch] text-lead text-mute">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
        <ButtonLink href="/" variant="outline" className="mt-10" arrow>
          Ana sayfaya dön
        </ButtonLink>
      </div>
    </section>
  );
}

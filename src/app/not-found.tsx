import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-white overflow-hidden px-6">
      <div className="text-center max-w-lg">
        <p
          className="text-[clamp(100px,20vw,200px)] font-bold leading-none tracking-tighter text-magenta"
          style={{
            fontFamily: '"PP Neue Montreal", "Helvetica Neue", Helvetica, sans-serif',
          }}
        >
          404
        </p>
        <h1
          className="font-display text-[clamp(20px,4vw,36px)] font-bold uppercase leading-tight text-black mt-2 mb-4"
        >
          Wrong turn, rider
        </h1>
        <p className="font-body text-base text-black/60 mb-10 max-w-sm mx-auto">
          This page dropped off the back of the peloton. Let&apos;s get you back on course.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

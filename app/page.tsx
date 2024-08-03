import UpFade from "@/components/animate/upfade";
import Divider from "@/components/ui/divider";
import ProjectCarousel from "@/components/ui/project-carousel";

export default function Home() {
  return (
    <main className="grid gap-y-[25px]">
      <header className="grid gap-y-[20px]">
        <UpFade>
          <span className="text-muted/70 font-medium text-[14px] lg:text-[20px]">
            Hello there, Welcome!
          </span>
        </UpFade>
        <UpFade delay={0.1}>
          <h1 className="text-[22px] lg:text-[42px] flex font-semibold leading-snug">
            Hello, let me introduce myself, my name is Gerrard Setiawan also
            known as Ver, I came from Indonesia and I am ready to accept full
            time/part time remote work in the field of graphic design.
          </h1>
        </UpFade>
      </header>
      <UpFade className="gap-y-[25px] grid" delay={0.15}>
        <Divider />
        <section className="grid gap-[10px] md:gap-[20px]">
          <header className="flex justify-between">
            <p className="uppercase tracking-[1.8px] font-inter text-muted text-[12px]">
              banner
            </p>
          </header>
          <ProjectCarousel />
        </section>
        <Divider />
        <section className="grid gap-[10px] md:gap-[20px]">
          <header className="flex justify-between">
            <p className="uppercase tracking-[1.8px] font-inter text-muted text-[12px]">
              feed design
            </p>
          </header>
          <ProjectCarousel />
        </section>
        <Divider />
        <section className="grid gap-[10px] md:gap-[20px]">
          <header className="flex justify-between">
            <p className="uppercase tracking-[1.8px] font-inter text-muted text-[12px]">
              poster
            </p>
          </header>
          <ProjectCarousel />
        </section>
        <Divider />
      </UpFade>
      <footer className="flex justify-between pb-[25px]">
        <span className="font-inter text-[14px] text-muted">
          Vero Projects.
        </span>
        <span className="font-inter text-[14px] text-muted">© 2024</span>
      </footer>
    </main>
  );
}

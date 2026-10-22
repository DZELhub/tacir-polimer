import Image from "next/image";
export default function PartnerNetworkDecoration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-10 right-0 bottom-0 -z-10 hidden w-1/2 overflow-hidden opacity-[0.12] md:block lg:-top-16 lg:w-[55%] lg:opacity-[0.18]"
    >
      <Image
        src="/images/decorations/world-network.svg"
        alt=""
        aria-hidden="true"
        fill
        unoptimized
        sizes="(min-width: 1280px) 660px, (min-width: 1024px) 55vw, 50vw"
        className="object-contain object-right-top"
      />
    </div>
  );
}

import Image from "next/image";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";
import { footer, site } from "@/lib/content";

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

export function Footer() {
  return (
    <footer className="overflow-hidden bg-night pt-[50px] text-snow">
      <div className="container-site flex flex-col gap-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-[260px] flex-col gap-6 lg:max-w-[174px]">
            <Image
              src={site.logo.src}
              alt={site.name}
              width={site.logo.width}
              height={site.logo.height}
              className="h-auto w-[123px]"
            />
            <p className="text-base leading-[19px] font-light">{footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:flex lg:gap-16">
            {footer.columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-6 lg:w-[218px]">
                <h2 className="text-base leading-[19px] font-bold">{column.title}</h2>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-base leading-[19px] transition-colors hover:text-brand"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 flex flex-col gap-6 sm:col-span-1 lg:w-[157px]">
              <h2 className="text-base leading-[19px] font-bold">Contactez-nous</h2>
              <ul className="flex flex-col gap-4 text-base leading-[19px]">
                <li>
                  <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="hover:text-brand">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="break-all hover:text-brand lg:break-normal lg:whitespace-nowrap">
                    {site.email}
                  </a>
                </li>
                <li className="whitespace-nowrap">{site.hours}</li>
              </ul>
            </div>

            <div className="col-span-2 flex flex-col gap-4 sm:col-span-1 lg:w-[140px]">
              <h2 className="text-base leading-[19px] font-bold">Réseaux sociaux</h2>
              <ul className="flex gap-4">
                {footer.socials.map(({ label, href, icon }) => {
                  const Icon = socialIcons[icon];
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        className="grid size-9 place-items-center rounded-full transition-colors hover:bg-white/10 hover:text-brand"
                      >
                        <Icon className="size-5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[#5b5b5b] py-5 text-base leading-[19px] font-light sm:flex-row sm:justify-between">
          <span>{footer.language}</span>
          <span>{footer.copyright}</span>
        </div>
      </div>

      {/* Oversized wordmark, cropped by the bottom edge like in the design. */}
      <div aria-hidden="true" className="container-site h-[0.6em] overflow-hidden text-[min(23.9vw,344px)] ">
        <p className="font-display leading-[0.9] whitespace-nowrap text-brand uppercase">
          {footer.wordmark}
        </p>
      </div>
    </footer>
  );
}

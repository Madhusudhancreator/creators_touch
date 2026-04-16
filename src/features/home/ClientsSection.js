import Image from "next/image";

const DEFAULT_DATA = {
  heading: "Brands We've Worked With",
  items: [
    { name: "Cream Stone",        src: "/assets/clients/cream_stone.png"                },
    { name: "Reliance",           src: "/assets/clients/reliance.png"                   },
    { name: "KL University",      src: "/assets/clients/kl_university.png"              },
    { name: "The Gateway Hotels", src: "/assets/clients/the_gateway_hotels_resorts.png" },
    { name: "Trendset Mall",      src: "/assets/clients/trendset_mall.png"              },
    { name: "MVR Mall",           src: "/assets/clients/mvr_mall.png"                   },
  ],
};

export default function ClientsSection({ block = null }) {
  const data    = block?.data ?? DEFAULT_DATA;
  const clients = data.items   ?? DEFAULT_DATA.items;
  const heading = data.heading ?? DEFAULT_DATA.heading;

  return (
    <section className="pb-16 px-4 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          {heading}
        </h2>
        <div className="mt-3 mx-auto w-12 h-0.5 bg-gray-300 rounded-full" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
        {clients.map(({ name, src }) => (
          <div
            key={name}
            className="group w-full flex items-center justify-center p-4 sm:p-6 rounded-xl border border-gray-100 bg-gray-50 transition-shadow duration-300 hover:shadow-md"
          >
            <div className="relative w-36 h-24 sm:w-48 sm:h-28 transition-all duration-300">
              <Image
                src={src}
                alt={name}
                fill
                sizes="(max-width: 640px) 144px, 192px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

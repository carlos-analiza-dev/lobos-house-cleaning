import { MapPin } from "lucide-react";
import Image from "next/image";

const InicioHome = () => {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/LobosHome.jpeg"
          alt="Home"
          fill
          priority
          className="object-cover object-right md:object-center"
          quality={100}
        />

        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
            Lobo&#39;s House Cleaning
          </h2>

          <p className="mt-8 text-lg font-medium text-white/90 sm:text-xl">
            At Lobo&#39;s House Cleaning, we are known for providing the best
            service and the most reliable staff in the area.
          </p>
        </div>

        <div className="flex items-center mt-8 gap-5 text-white/90 ">
          <MapPin size={30} />
          <p className="text-lg font-medium sm:text-xl">
            107 Culver St Chattanooga, TN 37415
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Offices", value: "1" },
              { label: "Employees", value: "10+" },
              { label: "Services", value: "10+" },
              { label: "Days off", value: "Flexible" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-base font-medium text-white/80">
                  {stat.label}
                </dt>
                <dd className="text-2xl md:text-4xl font-bold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default InicioHome;

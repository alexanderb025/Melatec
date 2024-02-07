"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Cook = () => {
  return (
    <div className="relative" id="cook-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        {/* <div className="absolute right-0 bottom-[-18%] hidden lg:block">
          <Image
            src={"/images/Cook/burger.png"}
            alt="burger-image"
            width={463}
            height={622}
          />
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start">
            <Image
              src="/images/Cook/ban2.jpg"
              alt="nothing"
              className="rounded-3xl"
              width={636}
              height={808}
            />
          </div>

          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal mb-3 ls-51 uppercase text-start">
                Nosotros
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black text-start">
                Nuestra historia
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-2">
                Melatec es una empresa con más de 20 años de experiencia en el
                diseño y armado de muebles de melamine, desde nuestros inicios
                trabajamos con materiales y acabado de primera calidad, lo que
                hace que nuestros clientes queden satisfechos.{" "}
              </p>
              <p className="text-grey md:text-lg font-normal mb-10 text-start mt-1">
                Queremos seguir siendo una empresa posisionada en el sector, y
                seguir haciendo felices a más familias peruanas con nuestros
                modernos y deslumbrantes muebles.
              </p>
              {/* <div className="flex align-middle justify-center md:justify-start">
                <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6">
                  Learn more
                </button>
              </div> */}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cook;

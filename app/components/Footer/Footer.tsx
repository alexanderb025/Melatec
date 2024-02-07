import Link from "next/link";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

interface ProductType {
  id: number;
  section: string;
  link: string[];
  ref: string[];
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://www.facebook.com/MueblesMelatecTrujillo?locale=es_LA",
    width: 10,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://www.instagram.com/melatec.trujillo/",
    width: 14,
  },
  {
    imgSrc: "/images/Footer/tiktok-1.svg",
    link: "https://www.tiktok.com/@melatectrujillo",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Empresa",
    link: [
      "Presentación*#home-section",
      "Ofrecemos*#about-section",
      "Nosotros*#cook-section",
    ],
    ref: ["#home-section", "#about-section", "#cook-section"],
  },
  {
    id: 2,
    section: "Contacto",
    link: ["Comunicate al +51965050141*"],
    ref: [""],
  },
  {
    id: 3,
    section: "Más",
    link: ["Fabricantes*#gallery-section"],
    ref: ["#gallery-section"],
  },
];

const footer = () => {
  return (
    <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        {/* COLUMN-1 */}

        <div className="sm:col-span-6 lg:col-span-5">
          <div className="flex flex-shrink-0 items-center border-right">
            <Image
              src="/images/Logo/logo.jpg"
              alt="logo"
              width={80}
              height={80}
            />
            <Link href="/" className="text-2xl font-semibold text-pink ml-4">
              MELATEC
            </Link>
          </div>
          <div className="flex">
            <FaLocationDot className="mt-4"></FaLocationDot>
            <h3 className="text-textbl text-xs font-medium mt-5 ml-2">
              {" "}
              Av. Mansiche 1758 frente a expomall
            </h3>
          </div>

          <h3 className="text-textbl text-xs font-medium mt-5 mb-4 lg:mb-16">
            {" "}
            Visita nuestras redes sociales.
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((items, i) => (
              <Link href={items.link} key={i}>
                <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={items.width}
                    height={2}
                    className="sepiaa"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CLOUMN-2/3/4 */}

        {products.map((product) => (
          <div key={product.id} className="sm:col-span-2">
            <p className="text-black text-xl font-semibold mb-9">
              {product.section}
            </p>
            <ul>
              {product.link.map((link: string, index: number) => (
                <li key={index} className="mb-5">
                  <Link
                    href={link.split("*")[1]}
                    className="text-footerlinks text-base font-normal mb-6 space-links"
                  >
                    {link.split("*")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* All Rights Reserved */}

      <div className="py-10 md:flex items-center justify-between border-t border-t-bordertop">
        <h4 className="text-darkgrey text-sm text-center md:text-start font-normal">
          @2023 - MELATEC
        </h4>
        {/* <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-darkgrey text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                    <div className="h-5 bg-bordertop w-0.5"></div>
                    <h4 className='text-darkgrey text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                </div> */}
      </div>
    </div>
  );
};

export default footer;

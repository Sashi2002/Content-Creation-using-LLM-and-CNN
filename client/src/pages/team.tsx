import sashi from "../../public/sashi.jpeg";
import ayush from "../../public/ayush.jpg";
import sarthak from "../../public/sarthak.jpeg";

const teamData = [
  {
    name: "Object 1",
    id: 1,
    style: "Style 1",
  },
  {
    name: "Object 2",
    id: 2,
    style: "Style 2",
  },
  {
    name: "Object 3",
    id: 3,
    style: "Style 3",
  },
];

export default function team() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <div className="flex h-full flex-col items-center md:flex-row">
        <div className="container mx-auto mb-16 mt-4 md:px-6">
          <section className="mb-32 text-center">
            <h2 className="mb-12 text-3xl font-bold">
              Meet our{" "}
              <u className="dark:text-primary-400 text-[#226cff]">Team</u>
            </h2>

            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
              <div className="mb-6 lg:mb-0">
                <div className="absolute block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src={ayush.src}
                      className="rounded-t-lg object-cover"
                      height={400}
                      width={400}
                    />
                    <a href="">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute bottom-0 left-0 text-white dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6 text-white">
                    <h5 className="mb-4 text-2xl font-bold">Ayush Garg</h5>
                    <p className="">Frontend Developer</p>
                  </div>
                </div>
              </div>

              <div className="mb-6 lg:mb-0">
                <div className="absolute block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src={sashi.src}
                      className="rounded-t-lg"
                      height={400}
                      width={400}
                    />
                    <a href="">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute bottom-0 left-0  text-white dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6 text-white">
                    <h5 className="mb-4 text-2xl font-bold">
                      Sashikanta Mohanty
                    </h5>
                    <p className="">UI Designer & Frontend Developer</p>
                  </div>
                </div>
              </div>

              <div className="mb-6 lg:mb-0">
                <div className="absolute block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src={sarthak.src}
                      className="rounded-t-lg"
                      height={400}
                      width={400}
                    />
                    <a href="">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute bottom-0 left-0 text-white dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6 text-white">
                    <h5 className="mb-4 text-2xl font-bold">
                      Sarthak Sachdeva
                    </h5>
                    <p className="">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

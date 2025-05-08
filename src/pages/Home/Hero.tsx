import Container from "@/components/common/Container";
import banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[85vh] flex items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <Container>
        <div className="relative z-10  flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left Content */}
          <div className="text-white max-w-xl space-y-6">
            <p className="text-sm font-bold tracking-widest text-white">
              BEST <span className="text-base">CAR</span> REPAIR
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold md:leading-16">
              WE ARE QUALIFIED & <br />
              <span className="text-base">PROFESSIONAL</span>
            </h1>
            <p className="text-gray-300">
              AES is a car repair service that provides high-quality repairs and
              maintenance for all types of vehicles. Our team of experienced
              technicians is dedicated to ensuring your vehicle is in top
              condition, using the latest technology and techniques to get the
              job done right.
            </p>
            <button className="bg-base hover:bg-red-700 text-white font-semibold px-6 py-3 rounded">
              GET STARTED
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

import Header from "../../components/Header";

export default function Thanks() {
  return (
    <>
      <Header />
      <div className="py-16 text-center px-[5%] ">
        <h1 className="text-[38px] sm:text-[42px] mb-5 md:text-[45px] lg:text-[50px] leading-[50px] font-bold">
          Thank You
        </h1>

        <p className="text-[18px] md:text-[22px] leading-[30px] font-bold">
          We will get in touch with you shortly to learn more and answer any
          questions you might have regarding your requirements. In the meantime,
          feel free to email or call us directly at +91 82370 02020 to discuss
          further.
        </p>
      </div>
    </>
  );
}

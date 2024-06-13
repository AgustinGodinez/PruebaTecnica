export default function Home() {
  return (
    <main
      id="Home"
      className="bg-cover bg-no-repeat bg-center h-screen md:h-[90vh] p-10"
      style={{ backgroundImage: "url('/VideoEmtech-3.gif')" }}
    >
      <article className="w-full h-full flex flex-col justify-center items-start md:flex-row md:items-center md:px-36">
        <h1 className="text-white font-semibold text-5xl mb-10 xl:text-8xl">
          Empowering <br /> your digital future
        </h1>
        <h2 className="text-white font-light text-2xl md:pl-32 xl:text-3xl">
          We believe in transforming the digital landscape of your business
          <hr className="border-4 border-Cblue border-solid w-1/2 mt-10" />
        </h2>
      </article>
    </main>
  );
}
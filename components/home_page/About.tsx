export default function About() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700">
              Welcome to our company! We are a team of passionate individuals
              dedicated to providing high-quality products and exceptional
              customer service. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed ultricies nulla id massa ultrices, eu
              hendrerit ligula vulputate. Nulla facilisi. Donec auctor, velit at
              aliquam lacinia, purus velit vestibulum dui, ac luctus odio dolor
              at lacus.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img
              alt="About Us"
              className="rounded-lg object-cover aspect-[16/9] overflow-hidden"
              height="400"
              src="/placeholder.svg"
              width="720"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

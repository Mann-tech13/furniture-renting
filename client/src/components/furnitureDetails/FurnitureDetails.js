const features = [
  {
    name: "Name",
    description: "Luxury Velvet Sofa",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  {
    name: "Category",
    description: "Sofa",
  },
  { name: "Price", description: "$199" },
  {
    name: "Material",
    description:
      "Best quality material",
  },
  { name: "Color", description: 'Green' },
];

export default function FurnitureDetails() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="px-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Furniture Specifications
          </h2>
          <p className="mt-4 text-gray-500">
            A sofa designed to redefine the way you lounge. Made for trendy
            homes, this sofa features a modern design that also offers a
            breakthrough in space management. The seat cushions are removable,
            so it’s super easy to keep clean. It comes in different options like
            1 seater, 2 seater, 3 seater and L-shape sofa.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="row my-4 flex">
            <button
              type=""
              className="flex w-50 justify-center rounded-md bg-themeRed px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-2"
            >
              Rent Now
            </button>
            <button
              type=""
              className="flex w-50 justify-center rounded-md bg-themeRed px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mx-2"
            >
              Add to collection
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/3/CV/NR/VH/182365761/imported-modern-furniture-500x500.jpg"
            alt="Green sofa"
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://content.jdmagicbox.com/quickquotes/images_main/green-3-2-1-seater-sofa-set-2221131069-g3n0mkgx.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
            alt="Green sofa"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}

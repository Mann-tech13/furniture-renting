const features = [
  {
    name: "Name",
    description: "Sofa",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  {
    name: "Category",
    description: "Hand sanded and finished with natural oil",
  },
  { name: "Price", description: "Wood card tray and 3 refill packs" },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
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
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
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
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}

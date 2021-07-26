import Head from "next/head";
import Link from "next/link";
import Plant from "components/Plants";

import Layout from "components/Layout/Layout.js";

export default function Example() {
  let ExamplePlant = [
    {
      ImageLink: "/static/example_photos/albomonstera.JPG",
      Name: "Monstera Albo Variegated",
      Description: "Monstera Albo Variegated is a beautiful plant yeahhhhh",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/syngoniumfantasy.JPG",
      Name: "Syngonium Fantasy",
      Description: "Syngonium Fantasy",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/silveryanne.JPG",
      Name: "Silvery Anne",
      Description: "Silvery Anne",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/thaiconstelation.PNG",
      Name: "Thai Constellation",
      Description: "Thai Constellation",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/anthchoc.JPG",
      Name: "Anthurium Chocolate",
      Description: "Anthurium Chocolate",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/anthchoc.JPG",
      Name: "Anthurium Chocolate",
      Description: "Anthurium Chocolate",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/anthmag.JPG",
      Name: "Anthurium Magnificum",
      Description: "Anthurium Magnificum",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/anthuriumveitchii.JPG",
      Name: "Anthurium Veitchii",
      Description: "Anthurium Veitchii",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/calatheamusaica.JPG",
      Name: "Calathea Musaica",
      Description: "Calathea Musaica",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/cebublue.JPG",
      Name: "Epipremnum Cebu Blue",
      Description: "Epipremnum Cebu Blue",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/elephantearvar.JPG",
      Name: "Alocasia Macrorrhiza Variegata",
      Description: "Alocasia Macrorrhiza Variegata",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/epipremnum.JPG",
      Name: "Epipremnum Pinnatum Variegated",
      Description: "Epipremnum Pinnatum Variegated",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/melano.JPG",
      Name: "Philodendron Melanochrysum",
      Description: "Philodendron Melanochrysum",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/philogigas.JPG",
      Name: "Philodendron Gigas",
      Description: "Philodendron Gigas",
      ContactLink: "https://moodmap.app",
    },
    {
      ImageLink: "/static/example_photos/philomajestic.JPG",
      Name: "Philodendron Majestic",
      Description: "Philodendron Majestic",
      ContactLink: "https://moodmap.app",
    },
  ];

  let ExampleUser = [{
    Name: "Tom",
        
  }]
  // useEffect(() => {

  // });

  // const {}
  return (
    <div>

    <Layout title = "Greenr Space">
      <div className="flex flex-col items-center justify-left  py-2">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-left">
          <h1 className="text-6xl font-bold">
            Plant Smith{" "}
          </h1>
          <p className="mt-3 text-2xl">
            @plant.smith{" "}
          </p>
          <p className="mt-3 text-2xl">
            Rare Aroid & Tropical Plant Collector{" "}
          </p>
          </main>
          </div>
          <div className="grid grid-cols-3 gap-4 flex justify-evenly">
            {ExamplePlant.map((number) => (
              <Plant
              key={number}
                ImageLink={number.ImageLink}
                Name={number.Name}
                Description={number.Description}
                ContactLink={number.ContactLink}
              />
            ))}
          </div>
          
    </Layout>
    </div>

  );
}

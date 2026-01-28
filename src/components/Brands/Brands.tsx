import React from "react";
import "./Brands.scss";

interface Brand {
  id: string;
  name: string;
  logo: string;
}

const Brands: React.FC = () => {
  const brands: Brand[] = [
    { id: "1", name: "Cola Cola", logo: "src/assets/logos/Coca-Cola.svg" },
    { id: "2", name: "Forbes", logo: "src/assets/logos/Forbes.svg" },
    { id: "3", name: "Inditex", logo: "src/assets/logos/Inditex.svg" },
    { id: "4", name: "Mcdonalds", logo: "src/assets/logos/Mcdonalds.svg" },
    { id: "5", name: "Natura", logo: "src/assets/logos/Natura.svg" },
    { id: "6", name: "Oceanbank", logo: "src/assets/logos/Oceanbank.svg" },
    { id: "7", name: "Puma", logo: "src/assets/logos/Puma.svg" },
    { id: "8", name: "Visa", logo: "src/assets/logos/Visa.svg" },
    { id: "9", name: "Yoplait", logo: "src/assets/logos/Yoplait.svg" },
  ];

  return (
    <div className="brands">
      <span className="brands__title">Brand that trust us</span>
      <div className="brands__logos">
        {brands.map((brand) => (
          <img key={brand.id} src={brand.logo} alt={brand.name} />
        ))}
      </div>
    </div>
  );
};

export default Brands;

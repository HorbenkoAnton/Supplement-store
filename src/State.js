import React, { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Whey Protein', price: '$59.99', topSale: true, imageLink: 'https://m.media-amazon.com/images/I/71dsRmG6UXL._AC_SL1500_.jpg' },
    { id: 7, name: 'Fat Burner', price: '$34.99', topSale: true, imageLink: 'https://i.makeup.pl/g/g4/g488rulumffh.jpg' },
    { id: 8, name: 'Omega-3 Fish Oil', price: '$14.99', topSale: false, imageLink: 'https://m.media-amazon.com/images/I/61gql67AMcL._AC_UF1000,1000_QL80_.jpg' },
    { id: 9, name: 'ZMA', price: '$29.99', topSale: true, imageLink: 'https://image.ceneostatic.pl/data/products/336215/p-optimum-zma-90-kap.jpg' },
    { id: 10, name: 'Mass Gainer', price: '$54.99', topSale: false, imageLink: 'https://m.media-amazon.com/images/I/71Te4HlulxL._AC_UF894,1000_QL80_.jpg' },
    { id: 11, name: 'Casein Protein', price: '$49.99', topSale: true, imageLink: 'https://image.ceneostatic.pl/data/products/51704406/i-optimum-nutrition-100-casein-protein-1820g.jpg' },
    { id: 2, name: 'BCAA', price: '$29.99', topSale: false, imageLink: 'https://fasklep.pl/1901-large_default/fa-core-bcaa-811-350-g.jpg' },
    { id: 3, name: 'Pre-Workout', price: '$39.99', topSale: true, imageLink: 'https://sklep.sfd.pl/produkt_img/95bc108ac669d3faa4d624a3abc96120Pre_Workout_i42346_d1200x1200.png' },
    { id: 4, name: 'Multivitamin', price: '$19.99', topSale: false, imageLink: 'https://medpak.com.pl/41060-large_default/muscletech-platinum-multivitamin-90-tabletek.jpg' },
    { id: 5, name: 'Vegan Protein', price: '$49.99', topSale: true, imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9SpPqnJYZMWa6xEpJDaj09LxAQCn5RVtU51qxUr6IE3xuEe7KN2mANPsGqo2SDXoLBg&usqp=CAU' },
    { id: 6, name: 'Creatine Monohydrate', price: '$24.99', topSale: false, imageLink: 'https://m.media-amazon.com/images/I/71hAuGXkp5L._AC_UF1000,1000_QL80_.jpg' },
    { id: 12, name: 'CLA', price: '$24.99', topSale: false, imageLink: 'https://images.vitaminimages.com/pp/VF/puritanspride/product_images/product_detail/017948.jpg' },
    { id: 13, name: 'Electrolyte Powder', price: '$14.99', topSale: true, imageLink: 'https://m.media-amazon.com/images/I/818bn-mhlbL._AC_UF1000,1000_QL80_.jpg' },
    { id: 14, name: 'Protein Bars', price: '$19.99', topSale: false, imageLink: 'https://www.bodyworld.eu/media/product/4016/500x640.jpg?nc=1668777710' },
    { id: 15, name: 'L-Glutamine', price: '$22.99', topSale: true, imageLink: 'https://image.ceneostatic.pl/data/products/59922815/p-swanson-l-glutamine-500-mg-100-kaps.jpg' },
    { id: 16, name: 'Hydration Multiplier', price: '$29.99', topSale: false, imageLink: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/lqd/lqd00845/y/27.jpg' }
  ]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProducts = () => useContext(ProductsContext);

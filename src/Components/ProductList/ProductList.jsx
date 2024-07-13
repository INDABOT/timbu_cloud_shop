import { useEffect, useState } from "react";
import axiosInstance from "../API/Apicall";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import rating from "../../assets/star.svg"
const ProductList = () => {
  const [productList, setProducts] = useState([]); // State to store the list of products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products using the Axios instance
        const response = await axiosInstance.get("/products" , {
          params: {
            organization_id: "745686858b3343d7b3ab0eadcf95fadb", // Organization ID parameter
            reverse_sort: false, // Sorting parameter
            page: 1, // Pagination parameter
            size: 30, // Number of products per page
            Appid: "1J993O54AJJ4GJH",
            Apikey: "e90393ea56e1422fa10317e69385788b20240713104353896781"
          },
        });

        // Map the response data to extract necessary product information
        const items = response.data.items.map((item) => ({
          name: item.name,
          price: extractPrice(item.current_price),
          id: item.id,
          image: `https://api.timbu.cloud/images/${
            item.photos.length > 0 ? item.photos[0].url : ""
          }`,
        }));

        // Update the state with the fetched products
        setProducts(items);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to extract price from the current_price array
  const extractPrice = (current_price) => {
    if (
      current_price &&
      current_price.length > 0 &&
      current_price[0].NGN &&
      current_price[0].NGN.length > 0
    ) {
      return current_price[0].NGN[0];
    }
    return "Price not available";
  };

  return (
    <section className={styles.product_container}>
      <h3>All Products</h3>
      <div className={styles.product_card}>
        {productList.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            text="A perfect blend of nature" // Add appropriate value
            rating={rating} // Add appropriate value
            starNo={4.5} // Add appropriate value
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

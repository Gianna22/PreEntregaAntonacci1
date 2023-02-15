import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemConteiner from './components/ItemConteiner/ItemConteiner';
import { Header } from './components/Header/Header';
import { ProductList } from './components/product/ProductList';



function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
    <>
      <Navbar />
      <ItemConteiner/>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
			/>
		</>
	)
}

export default App;
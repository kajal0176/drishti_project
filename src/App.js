import React, { useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { OrderList } from 'primereact/orderlist';
import './App.css'


export default function FilterDemo() {
    // Dummy product data without category
    <script src="https://unpkg.com/primereact/primereact.all.min.js"></script>
    const initialProducts = [
        { id: 1, name: 'Laptop', price: 1000, image: 'laptop.png' },
        { id: 2, name: 'Smartphone', price: 800, image: 'smartphone.png' },
        { id: 3, name: 'Headphones', price: 150, image: 'headphones.png' },
        { id: 4, name: 'Keyboard', price: 50, image: 'keyboard.png' },
        { id: 5, name: 'Mouse', price: 30, image: 'mouse.png' }
    ];

    const [products, setProducts] = useState(initialProducts);

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span className="font-bold">{item.name}</span>
                </div>
                <span className="font-bold text-900">${item.price}</span>
            </div>
        );
    };
    
    return (
      <PrimeReactProvider>
        <div className="card xl:flex xl:justify-content-center min-h-screen">
            <OrderList
                dataKey="id"
                filterPlaceholder="search an item"
                value={products}
                onChange={(e) => setProducts(e.value)}
                itemTemplate={itemTemplate}
                header="Products"
                filter
                filterBy="name" // Enable filtering by name
                className='order-list-no-arrows'
            ></OrderList>
        </div>
        </PrimeReactProvider>
    );
}

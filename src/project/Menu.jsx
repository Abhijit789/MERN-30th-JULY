import React, { useState } from 'react'
import Card from './Card'

function Menu() {
    let[menuItems,setMenuItems]=useState([
  {
    id: 1,
    dishName: "Masala Dosa",
    price: 80,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    dishName: "Idli Sambar",
    price: 60,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    dishName: "Vada Sambar",
    price: 70,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    dishName: "Poha",
    price: 50,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    dishName: "Upma",
    price: 50,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    dishName: "Aloo Paratha",
    price: 90,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    dishName: "Chole Bhature",
    price: 120,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    dishName: "Pav Bhaji",
    price: 110,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    dishName: "Veg Thali",
    price: 180,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    dishName: "Paneer Butter Masala",
    price: 220,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    dishName: "Dal Tadka",
    price: 150,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    dishName: "Rajma Masala",
    price: 160,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    dishName: "Jeera Rice",
    price: 120,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    dishName: "Veg Biryani",
    price: 190,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    dishName: "Chicken Biryani",
    price: 260,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    dishName: "Butter Chicken",
    price: 280,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    dishName: "Chicken Curry",
    price: 250,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    dishName: "Fish Curry",
    price: 270,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    dishName: "Samosa",
    price: 30,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    dishName: "Paneer Pakora",
    price: 100,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 21,
    dishName: "Onion Pakora",
    price: 80,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 22,
    dishName: "French Fries",
    price: 100,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 23,
    dishName: "Veg Sandwich",
    price: 90,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 24,
    dishName: "Cheese Sandwich",
    price: 120,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 25,
    dishName: "Veg Burger",
    price: 130,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 26,
    dishName: "Chicken Burger",
    price: 180,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 27,
    dishName: "Paneer Tikka",
    price: 180,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 28,
    dishName: "Chicken Tikka",
    price: 220,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 29,
    dishName: "Gulab Jamun",
    price: 60,
    category: "timepass",
    image: "https://images.unsplash.com/photo-1666190094765-9b4b5b5e3f8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 30,
    dishName: "Rasmalai",
    price: 90,
    category: "timepass",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 31,
    dishName: "Ice Cream",
    price: 80,
    category: "timepass",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 32,
    dishName: "Chocolate Brownie",
    price: 120,
    category: "timepass",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 33,
    dishName: "Cheese Corn Balls",
    price: 140,
    category: "timepass",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 34,
    dishName: "Nachos",
    price: 130,
    category: "timepass",
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 35,
    dishName: "Garlic Bread",
    price: 110,
    category: "timepass",
    image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 36,
    dishName: "Masala Papad",
    price: 70,
    category: "timepass",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 37,
    dishName: "Roti Basket",
    price: 100,
    category: "dinner",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 38,
    dishName: "Dal Makhani",
    price: 180,
    category: "dinner",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 39,
    dishName: "Kadai Paneer",
    price: 210,
    category: "dinner",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 40,
    dishName: "Shahi Paneer",
    price: 220,
    category: "dinner",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 41,
    dishName: "Palak Paneer",
    price: 200,
    category: "dinner",
    image: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 42,
    dishName: "Malai Kofta",
    price: 230,
    category: "dinner",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 43,
    dishName: "Chicken Handi",
    price: 280,
    category: "dinner",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 44,
    dishName: "Chicken Kebab",
    price: 240,
    category: "dinner",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 45,
    dishName: "Tandoori Chicken",
    price: 300,
    category: "dinner",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 46,
    dishName: "Mutton Curry",
    price: 320,
    category: "dinner",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 47,
    dishName: "Veg Noodles",
    price: 140,
    category: "timepass",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 48,
    dishName: "Hakka Noodles",
    price: 160,
    category: "timepass",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 49,
    dishName: "Manchurian",
    price: 150,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c1357?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 50,
    dishName: "Spring Rolls",
    price: 140,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1548507200-0d3b7a9a6f7e?auto=format&fit=crop&w=600&q=80"
  }
])
 let [selectCategory,setSelectCategory]=useState("all")
 let categories=["breakfast","lunch","snacks","timepass","dinner","all"]
 let filterMenu=selectCategory==="all"?menuItems:menuItems.filter(item=>item.category===selectCategory)
    return (
        <>
            <div className="fluid-container">
                <nav className='navbar navbar-expand bg-warning'>
                    <p className='text-center w-100 fw-bold p-1'>Menu Card</p>
                </nav>
                <section className='row'>
                    <div className="col d-flex justify-content-around">
                        {
                            categories.map(category=>{
                                return <button className='btn btn-primary my-2' onClick={()=>{setSelectCategory(category)}}>{category.toUpperCase()}</button>
                            })
                        }
                    </div>
                </section>

            </div>
            <div className="container">
                <section className='row'>
                    <div className="col d-flex flex-wrap gap-4 justify-content-around">
                        {
                            filterMenu.map(menu=>{
                                return <Card menu={menu}/>
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default Menu
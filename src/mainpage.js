const data = [
    {
        id: 1, // Unique identifier for the product
        title: "Cropped Faux Leather Jacket",
        description: "A stylish faux leather jacket with a cropped fit, perfect for casual outings.", // Optional: add more details
        price: 29, // Price in a specific currency (e.g., USD)
        images: {
            firstImage: "/main page images/1.jpg", // Use descriptive image paths or URLs
            secondImage: "/main page images/1-1.jpg"
        },
        stock: 100, // Optional: stock availability
        category: "dresses", // Optional: category for filtering
        reviewCount: 2, // Number of reviews for this item
        newArrival: true,
        productType: ["dresses", "sweatshirts"], // Now an array
        sizes: ["XS", "S", "L"], // Now an array
        brands: ["adidas", "balmain"], // Array of brands
            colors: {
                "DarkBlue": "#0A2472",
                "Camel": "#C19A6B",
                "Charcoal ": "$36454F",
            
            }      

    },

    {
        id: 2, 
        title: "Calvin Shorts",
        description: "A stylish faux leather jacket with a cropped fit, perfect for casual outings.", // Optional: add more details
        price: 17, 
        images: {
     
            firstImage: "/main page images/2.jpg", 
            secondImage: "/main page images/2-1.jpg"
          
        },
        stock: 100, 
        category: "dresses", 
        reviewCount: 12,
        newArrival: true,
        
        productType: ["dresses", "sweatshirts"], // Now an array
        sizes: ["XS", "S", "L"], // Now an array
        brands: ["adidas", "balmain"], // Array of brands

                    colors: {
                "DarkBlue": "#0A2472",
                "Camel": "#C19A6B",
                "Charcoal ": "$36454F",
            
            }      

    },

    {
        id: 3, 
        title: "Kirby T-Shirt",
        description: "A stylish faux leather jacket with a cropped fit, perfect for casual outings.", // Optional: add more details
        price: 62, 
        images: {
            firstImage: "/main page images/3.jpg", 
            secondImage: "/main page images/3-1.jpg"
        },
        stock: 100, 
        category: "Jackets", 
        reviewCount: 3,
        newArrival: true,

        
        productType: ["dresses", "sweatshirts"], // Now an array
        sizes: ["XS", "S", "L"], // Now an array
        brands: ["adidas", "balmain"], // Array of brands

                    colors: {
                "DarkBlue": "#0A2472",
                "Camel": "#C19A6B",
                "Charcoal ": "$36454F",
            
            }      

    },
    
    {
        id: 4, 
        title: "Cableknit Shawl",
        description: "A stylish faux leather jacket with a cropped fit, perfect for casual outings.", // Optional: add more details
        price: 99, 
        images: {
            firstImage: "/main page images/4.jpg", 
            secondImage: "/main page images/4-1.jpg"
        },
        stock: 100, 
        category: "Jackets", 
        reviewCount: null,
        bestSelles: true,

        
        productType: ["dresses", "sweatshirts"], // Now an array
        sizes: ["XS", "S", "L"], // Now an array
        brands: ["adidas", "balmain"], // Array of brands

                    colors: {
                "DarkBlue": "#0A2472",
                "Camel": "#C19A6B",
                "Charcoal ": "$36454F",
            
            }      

    },
    
    {
        id: 5, 
        title: "Colorful Jacket",
        description: "A stylish faux leather jacket with a cropped fit, perfect for casual outings.", // Optional: add more details
        price: 29, 
        images: {
            firstImage: "/main page images/5.jpg", 
            secondImage: "/main page images/5-1.jpg"
        },
        stock: 100, 
        category: "Jackets", 
        reviewCount: null,
        bestSelles: true,

        
        productType: ["dresses", "sweatshirts"], // Now an array
        sizes: ["XS", "S", "L"], // Now an array
        brands: ["adidas", "balmain"], // Array of brands

                    colors: {
                "DarkBlue": "#0A2472",
                "Camel": "#C19A6B",
                "Charcoal ": "$36454F",
            
            }      

    },
    
    {
        id: 6, 
        title: "Shirt In Botanical Cheetah Print 12344",
        description: "A stylish faux leather jacket with a cropped fit, perfect for casual outings.", // Optional: add more details
        price: 62, 
        images: {
            firstImage: "/main page images/6.jpg", 
            secondImage: "/main page images/6-1.jpg"
        },
        stock: 100, 
        category: "Jackets", 
        reviewCount: 6,
        bestSelles: true,

        
        productType: ["dresses", "sweatshirts"], // Now an array
        sizes: ["XS", "S", "L"], // Now an array
        brands: ["adidas", "balmain"], // Array of brands

                    colors: {
                "DarkBlue": "#0A2472",
                "Camel": "#C19A6B",
                "Charcoal ": "$36454F",
            
            }      

    },
    
    {
        id: 7, 
        title: "Cotton Jersey T-Shirt",
        description: "A stylish faux leather jacket with a cropped fit, perfect for casual outings.", // Optional: add more details
        price: 17, 
        images: {
            firstImage: "/main page images/7.jpg", 
            secondImage: "/main page images/7-1.jpg"
        },
        stock: 100, 
        category: "Jackets", 
        reviewCount: null,
        topRated: true,

        
        productType: ["dresses", "sweatshirts"], // Now an array
        sizes: ["XS", "S", "L"], // Now an array
        brands: ["adidas", "balmain"], // Array of brands

                    colors: {
                "DarkBlue": "#0A2472",
                "Camel": "#C19A6B",
                "Charcoal ": "$36454F",
            
            }      

    },
    
    {
        id: 8, 
        title: "Zessi Dresses",
        description: "A stylish faux leather jacket with a cropped fit, perfect for casual outings.", // Optional: add more details
        price: 99, 
        images: {
            firstImage: "/main page images/8.jpg", 
            secondImage: "/main page images/8-1.jpg"
        },
        stock: 100, 
        category: "Jackets", 
        reviewCount: 5,
        topRated: true,
        
        productType: ["dresses", "sweatshirts"], // Now an array
        sizes: ["XS", "S", "L"], // Now an array
        brands: ["adidas", "balmain"], // Array of brands

                    colors: {
                "DarkBlue": "#0A2472",
                "Camel": "#C19A6B",
                "Charcoal ": "$36454F",
            
            }      

    },
    

  
    
];


export default data;



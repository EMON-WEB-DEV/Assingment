// Problem -1

const formatValue = (value: string | number | boolean) : string | number | boolean =>{

        if (typeof value === 'string') {
                return value.toUpperCase();
        }

        if (typeof value === 'number') {
                return value * 10;
        }

        return ! value;
         
   }

// Problem -2

const getLength = (input: string | any[]) : number => {

                if (typeof input === "string") {

                        return input.length;

                }       

                if (Array.isArray(input)) {

                        return input.length;
                }
                 
                return 0;
         }


// Problem -3

class Person {

        name : string;
        age : number;

        constructor (name : string , age : number) {
                this.name = name;
                this.age = age;
        }

        getDetails() : string {
                return `'Name: ${this.name}, Age: ${this.age}`;
        }
}

// Problem -4

type Item = {
    title: string;
    rating: number;
};

const filterByRating = (items: Item[]): Item[] =>{

        return items.filter(item => item.rating >= 4);
};

// Problem -5

type Users = {
        id : number;
        name : string;
        email : string;
        isActive : boolean;
}

const filterActiveUsers = (users : Users[]) : Users[] => {

        return users.filter(user => user.isActive);
}
// Problem -6


interface Book {

        title : string;
        author : string;
        publishedYear : number;
        isAvailable : boolean;
}

  const  printBookDetails = (book: Book): void =>{

  const available = book.isAvailable ? 'Yes' : 'No';

  console.log(

        `Title: ${book.title}, Author: ${book.author},

         Published: ${book.publishedYear}, 

         Available: ${available}`);


    };

// Problem -7 

const getUniqueValues =(a: (string | number)[],

b: (string | number)[]): (string | number)[] => {

    const result: (string | number)[] = [];


    const exists = (arr: (string | number)[], value: string | number): boolean => {

        for (let i = 0; i < arr.length; i++) {

                 if (arr[i] === value) {
                return true;
            }
        }

        return false;
    }

  
    for (let i = 0; i < a.length; i++) {

        if (!exists(result, a[i])) {
          
      result[result.length] = a[i];
        }
    }

  
    for (let i = 0; i < b.length; i++) {
        if (!exists(result, b[i])) {

            result[result.length] = b[i];
        }
    }

    return result;
}

// Problem -8


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number; 
};

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) return 0;

    return products.map(product => {

            const item = product.price * product.quantity;
            const hasDiscount = typeof product.discount === 'number';
            const finalPrice = hasDiscount ? item - (item * (product.discount! / 100)) : item;
            return finalPrice;
        })
        .reduce((sum, value) => sum + value, 0);
}

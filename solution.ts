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
                return `"Name: ${this.name}, Age: ${this.age}"`;
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

// Problem -1

const formatValue = (value: string | number | boolean) : string | number | boolean =>{

        if (typeof value === 'string') {
                return value.toUpperCase();
        }
        else if (typeof value === 'number') {
                return value * 10;
        }
        else {
                return ! value;
        }

}

// Problem -2

const getLength = (input: string | any[]) : number => {

        return input.length;
}
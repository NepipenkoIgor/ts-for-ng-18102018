export class HomeWork2210 {

    public static isInArray<T>(inputArray : Array<T>, ...args: Array<T>) : boolean 
    {
        for(let i: number; i < args.length; ++i)
        {
            if(!inputArray.includes(args[i]))
            {
                return false;
            }
        }
        return true;
    }

    public static summator<T extends string | number>(...args: Array<T>) : T
    {
        let result: T;
        args.forEach(element => {
            result = result + element;
        });

        return result;
    }

    public static getUnique<T>(...args: Array<T>) : Array<T> {
        let result: Array<T> = new Array<T>();
        args.forEach(element => {
            if(!result.includes(element))
            {
                result.push(element);
            }
        });

        return result;
    }

    //4 не вкурил условие
}




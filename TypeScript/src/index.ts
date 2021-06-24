/// Первое задание
function concat(a: string, b: string): string {
    return a + b;
}
console.log(concat('Hello ', 'World'));

/// Второе задание
interface ITask2 {
    howIDoIt: string,

    simeArray: [string, string, number],

    withData: [{ howIDoIt: string, simeArray: [string, number] }],
}

const MyHometask: ITask2 = {

    howIDoIt: "I Do It Wel",

    simeArray: ["string one", "string two", 42],

    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],

}
console.log(MyHometask);


/// Третье задание
interface IMyArray<T> {

    [N: number]: T;


    reduce(callbackFanction: (previousValue: T, currentItem: T, index?: number, array?: IMyArray<T>) => T, initianalValue?: T): T;

}

const array: IMyArray<number> = [1, 2, 3];
console.log(array.reduce((pV, cI) => pV + cI));


/// Четвёртое задание
interface IHomeTask {

    data: string;

    numbericData: number;

    date: Date;

    externalData: {

        basis: number;

        value: string;

    }

}

// Первый вариант четвёртого задания. В этом случае можно создать объект содержащий лишь ключ 
// 'extarnalData'. И другие ключи будут не доступны.


type MyPartial2<T> = {

    [N in keyof T]?: T[N] extends object ? MyPartial2<T[N]> : T[N];

}


type MyPartial1<T, K extends keyof T> = {

    [N in K]: T[N] extends object ? MyPartial2<T[N]> : T[N];

}

const homeTask1: MyPartial1<IHomeTask, 'externalData'> = {

    externalData: {
        value: 'win',
    }

}
console.log(homeTask1);

//Второй вариант четвёртого задания. В этом случае можно создать объект 
//с любыми ключами из interFace, в том числе и 'extarnalData'

type MyPartial<T> = {

    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]

}

const homeTask2: MyPartial<IHomeTask> = {

    externalData: {
        value: 'win',
    }

}

console.log(homeTask2);
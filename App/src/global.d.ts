/**
 * @file Typescript third part dependence declare file
 * @date 2020-09-22
 * @author Frank
 * @lastModify Frank 2020-09-22
 */
declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}
declare module '*.png' {
    const value: string;
    export = value;
}

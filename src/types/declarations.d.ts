//Requred to import scss modules 
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

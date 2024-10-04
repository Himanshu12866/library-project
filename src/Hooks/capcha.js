export default function useCapcha(){
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123654789";
    let code = "";
    for(let i = 0; i<6 ; i++){
        let num = Math.round(Math.random() * str.length)
        code += str[num]
    }
return code
}
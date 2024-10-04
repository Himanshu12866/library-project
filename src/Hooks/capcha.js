export default function useCapcha(){
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123654789";
    let code = "";
    for(let i = 0; i<6 ; i++){
        let num = Math.round(Math.random() * 61)
        code += str[num]
    }
return code
}
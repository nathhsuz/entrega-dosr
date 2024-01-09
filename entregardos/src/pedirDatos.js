import data from '../src/data.json'

export const pedirDatos = () => {
    return  new Promise (
((resolve, reject) => {

        setTimeout(() => {
            resolve(data);
        }, 500)
    }))


}



    
   
   

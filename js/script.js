console.log('Vue', Vue); // Verifica Vue


/**
 * // Make a request for a user with a given ID
    
    axios.get('/user?ID=12345')
    .then(function (response) {

    // handle success
    console.log(response);
    })

    .catch(function (error) {

    // handle error
    console.log(error);
    })

    .then(function () {
    // always executed
  });
 * 
 *      Descrizione
 * 
 *  Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista con Vue JS e Axios.
 * 
 *  Bonus
 *  Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 * 
 * 
 */



const app = new Vue({
    el: '#app',

    data: {
        listaEmail:[],
    },

    computed:{
        emailComplete(){
            return this.listaEmail.length === 10;
        }
    },

    created(){

        for(let i = 0; i < 10; i++){
            // API CALL
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then( result =>{
                // Success
                console.log(result)
                console.log(result.data)
                console.log('EMail random: ', result.data.response)
    
                this.listaEmail.push(result.data.response)
    
            }).catch(err =>{
                console.log('Errore: ', err)
            })
        }

    },
    
});
    
    
    

    



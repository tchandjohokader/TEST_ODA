function calc(array,n1,n2) {
    if(n1>=0 && n1<=n2<array){
        let sum=0
        for (let index = n1; index <= n2; index++) {
             sum+=array[index]
        }
        return sum
    }else{
        let error="les nombres passées ne sont pas dans l'intervalle";
        return error
    }
}
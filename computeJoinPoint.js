function computeJoinPoint(s1,s2) {
    if(s1>0 && s2>0 && s1<2000000 && s2<2000000){
        let join_point=s1
        if(s1==s2){
            return join_point 
        }
        let j1=s1
        letj2=s2
        while (j1!=j2){
            for (let index = 0; index < s1.length; index++) {
                j1=j1+s1[index];
            }
            for (let index = 0; index < s2.length; index++) {
                j2=j2+s2[index];
            }
            if(j1==j2){
                join_point=j1
                return join_point
            }else{
                s1=j1
                s2=j2
            }
    
        }
    }else{
        let error="l'un des nombres et trop grand ou négatif";
        return error
    }
}
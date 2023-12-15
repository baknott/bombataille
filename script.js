document.addEventListener("DOMContentLoaded", function() {
    // Création d'un tableau
    var tableau = document.createElement("table");

    const GenerateurPoints = ()=>{
        var Gpoints = Math.floor(Math.random() * (8 - 2 + 1)) + 2;
        return Gpoints
    }
    const GenerateurBombes = (points)=>{
        
        if(points == 3){
        var Gbombes = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
        }else if(points == 2){
        var Gbombes = Math.floor(Math.random() * ((4 - 3 + 1)) + 3);
        }else if( points == 7 || points == 8){
        var Gbombes = Math.floor(Math.random() * ((2 - 1 + 1)) + 1);   
        }else{
        var Gbombes = Math.floor(Math.random() * 3) + 1;
        }           
        return Gbombes
    }

    const FillCell =(points, bombes)=>{
       // var points = GenerateurPoints()    
        //var bombes = GenerateurBombes(points)     
        var arrayCell = [];
        for(var b = 0; b < bombes;b++){
            arrayCell.push('0')
        }
        //bombes stackées dans le tableau
        var nbrCell = 5 - bombes;
        if(points == nbrCell){ //uniquement des 1 (2.3/4.1)
            for(var e = 0; e < nbrCell; e++){
            arrayCell.push(1)
            }
        }else if(bombes == 4){ // uniquement une cellule à points + 4 bombes (1.4/2.4/3.4)
            arrayCell.push(points)
        }else{            
            var randomizer = Math.floor(Math.random() * 2)
            if(nbrCell%2 == false && (points%nbrCell) == false){ // que des 2 OU 3 (4.3/6.3/8.1)
                for(var e = 0; e < nbrCell; e++){
                    arrayCell.push(points/nbrCell)
                    }
            }else if (points == 3 && bombes == 3){ //3.3
                arrayCell.push(2)
                arrayCell.push(1)
            }else if (points == 4 && bombes == 2){//4.2
                arrayCell.push(2)
                arrayCell.push(1)
                arrayCell.push(1)
            }else if (points == 5){//5
                if(bombes == 1){//5.1
                    arrayCell.push(2)
                    arrayCell.push(1) 
                    arrayCell.push(1)                    
                    arrayCell.push(1)                  
                }else if(bombes == 2){//5.2
                    if(randomizer == 0){
                        arrayCell.push(2)
                        arrayCell.push(2)                    
                        arrayCell.push(1)     
                    }else if(randomizer == 1){
                        arrayCell.push(3)
                        arrayCell.push(1) 
                        arrayCell.push(1)                  
                    }            
                }else if(bombes == 3){//5.3
                    arrayCell.push(2)
                    arrayCell.push(3)  
                }            
            }else if (points == 6){//6.1/6.2
                if(bombes == 1){
                    if(randomizer == 0){
                        arrayCell.push(2)
                        arrayCell.push(2) 
                        arrayCell.push(1)                    
                        arrayCell.push(1)                  
                    }else if(randomizer == 1){
                        arrayCell.push(3) 
                        arrayCell.push(1)   
                        arrayCell.push(1)                    
                        arrayCell.push(1)
                    }
                }else if(bombes == 2){
                    if(randomizer == 0){
                        arrayCell.push(2)
                        arrayCell.push(2)
                        arrayCell.push(2)                  
                    }else if(randomizer == 1){
                        arrayCell.push(3)
                        arrayCell.push(2)                    
                        arrayCell.push(1)
                    }
                }
            }else if (points == 7){//7   
                if(bombes == 1){//7.1
                    arrayCell.push(2)
                    arrayCell.push(2) 
                    arrayCell.push(2)                    
                    arrayCell.push(1)                  
                }else if(bombes == 2){//7.2
                    if(randomizer == 0){
                        arrayCell.push(3)
                        arrayCell.push(2)                    
                        arrayCell.push(2)     
                    }else if(randomizer == 1){
                        arrayCell.push(3)
                        arrayCell.push(3) 
                        arrayCell.push(1)                  
                    }            
                }
            }else if (points == 8 && bombes == 2){//8.2
                    arrayCell.push(3)
                    arrayCell.push(3) 
                    arrayCell.push(2)
            }
        }
        arrayCell.sort((a, b) => 0.5 - Math.random());
        //console.log('formule bombe 3 a 4 :' + Math.floor(Math.random() * ((4 - 3 + 1)) + 3) )
        //console.log('randomizer:' + randomizer)    
        //console.log('points:' + points)        
        //console.log('bombes:'+ bombes)
        //console.log(arrayCell)
        return arrayCell
    }
    
    
    //Problème : génère un 2.1 +2.2 + 3.1 + 7.3 +8.3 erroné





    for (var i = 0; i < 6; i++) {
        var ligne = document.createElement("tr");
        var points = GenerateurPoints();
        var bombes = GenerateurBombes(points);
        var arrayCell = FillCell(points, bombes);
        if(i != 5){
            for (var j = 0; j < 6; j++) {
                // Création d'une cellule (td)
                if(j == 0){
                    var cellule = document.createElement("td");
                    // Générer aléatoirement le nombre de bombes entre 1 et 4
                    cellule.textContent = points + bombes.toString() +"💣";
                    cellule.className = "indice";
                    cellule.id = `points${i}`
                    ligne.appendChild(cellule);
                }else{
                    var cellule = document.createElement("td");
                    cellule.className = "card";
                    cellule.value = arrayCell[(j-1)];
                    cellule.textContent = cellule.value
                    ligne.appendChild(cellule);
                    cellule.addEventListener("click", function() {
                        // Changer la couleur de la cellule lorsqu'elle est cliquée
                        this.style.backgroundColor = "lightblue";
                        this.value = 1;
                    });
                }
            }
        }else{
            for (var j = 0; j < 6; j++) {
                if(j==0){
                    var cellule = document.createElement("td");
                    cellule.className = "vide";
                    ligne.appendChild(cellule);
                }else{
                    var cellule = document.createElement("td");
                    cellule.textContent = "PTS" + "💣";
                    cellule.className = "indice";
                    ligne.appendChild(cellule);
                }
            }
        }
        

        tableau.appendChild(ligne);
    }

    document.body.appendChild(tableau);
});

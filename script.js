document.addEventListener("DOMContentLoaded", function() {
    // Création d'un tableau
    var tableau = document.createElement("table");

    const GenerateurPoints = ()=>{
        var points = Math.floor(Math.random() * (8 - 2 + 1)) + 2;
        return points
    }
    const GenerateurBombes = ()=>{
        var bombes = Math.floor(Math.random() * 3) + 1;
        if(points == 3){
            bombes = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        }else if(points == 2){
            bombes = Math.floor(Math.random() * (4 - 3 + 1)) + 3;
        }else if( points > 6){
            bombes = Math.floor(Math.random() * (2 - 1 + 1)) + 1;   
        }
        return bombes

    }
    const FillCell =()=>{
        var bombes = 1
        var points = 4
        var arrayCell = [];
        for(var b = 0; b < bombes;b++){
            arrayCell.push('0')
        }
        //bombes stackées dans le tableau
        var nbrCell = 5 - bombes;
        if(points == nbrCell){
            for(var e = 0; e < nbrCell; e++){
            arrayCell.push(1)
            }
        }else if(bombes == 4){
            arrayCell.push(points)
        }else{
            if(nbrCell%2 == false && points%2 == false){
                for(var e = 0; e < nbrCell; e++){
                    arrayCell.push(points/nbrCell)
                    }
            }else if (nbrCell%2 == false && points%2){
                
            }
            // Notes pour demain, cas couverts :
            // 1.4/2.4/3.4/2.3/4.1/4.3/6.2/6.3/8.1/
            //Reste à gérer 3.3/4.2/5.1/5.2/5.3/6.1/7.1/7.2/8.2
            // 

           // arrayCell.push(2)
           // arrayCell.push(3)
           // arrayCell.push(3)
           // arrayCell.sort(() => Math.random() - 0.5);
        }


        console.log('nbrCell :' + nbrCell)
        var totalDecrement = points
        console.log('points avant decrement :' + points)
        for(var n = 0; n < nbrCell;n++){
            var decrement = Math.floor(Math.random() * 3) + 1
            totalDecrement - decrement
            console.log('valeur decrement :'+ decrement)
            arrayCell.push()
        }
        var decrement = Math.floor(Math.random() * nbrCell) + 1
        arrayCell.sort((a, b) => 0.5 - Math.random());
        console.log(arrayCell)
    }
    
    console.log(FillCell())
    





    for (var i = 0; i < 6; i++) {
        var ligne = document.createElement("tr");
        var points = GenerateurPoints();
        var bombes = GenerateurBombes();
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
                    cellule.value = (points-bombes);
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

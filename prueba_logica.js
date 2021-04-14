/*------  combinations list -----*/
function combinationsList({...listas}){
    let list = Object.values(listas);
    let keys = Object.keys(listas);

    let r = buildCombinations(list)

    let res = r.map((x)=>{
        let response = [];
        x.split(',').map((y,z) =>{
            for(a in keys){
                if( a == z){response.push(`"${keys[a]}" : "${y}"`);}
            }
        })
        return response;
    });

    return res;
}

/*------ build combinations -----*/
function buildCombinations(list) {
    if (list.length === 0) { return []; }
    else if (list.length ===1){ return list[0]; }
    else {
        let result = [];
        let listElements  = buildCombinations(list.slice(1));
        list[0].map((x) =>{
            listElements.map((y) =>{
                let content =`${x}, ${y}`;
                result.push(content);
            });
        }); 
      return result;
    }
}
module.exports = combinationsList;
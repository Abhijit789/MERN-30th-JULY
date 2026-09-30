
function BuggyComponent({heroName}) {
    if(heroName==="ironman"){
        throw new Error(`${heroName} is not hero`)
    }else{
        return <h2>{heroName} is hero</h2>
    }

 
}

export default BuggyComponent
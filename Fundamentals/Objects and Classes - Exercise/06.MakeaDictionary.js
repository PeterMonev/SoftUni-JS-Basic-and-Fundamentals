function makeADictionary(arrayAsJson) {
   
    let objects = {};

    for(const element of arrayAsJson){
    const arrayAsObject = JSON.parse(element); 
    objects = Object.assign(objects, arrayAsObject); 

  }
   
    const sorted = Object.keys(objects);
    sorted.sort((a,b)=> a.localeCompare(b));
    
  
    for(const term of sorted){

        console.log(`Term: ${term} => Definition: ${objects[term]}`)
    }
   
}
makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);

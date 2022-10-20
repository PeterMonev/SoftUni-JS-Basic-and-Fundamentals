function formatGrade(grade){
  let format = grade.toFixed(2);
  let description;

  if(grade < 3){
      description = 'Fail';
      format = '2';
  } else if( grade < 3.5){
      description = 'Poor';
  } else if( grade < 4.5){
      description = 'Good';
  } else if( grade < 5.5){
      description = 'Very good';
  } else {
      description = 'Excellent'
     
  }
   
  console.log(`${description} (${format})`)



}
formatGrade(3.33);
formatGrade(4.50);
formatGrade(5.56);

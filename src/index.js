/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) 
    {
      let number_of_weeks =  Math.ceil( 800 / config[focus]);

      if (knowsProgramming == false)
      {
        number_of_weeks += Math.ceil( 500 / config[focus]);
      }
      
      return number_of_weeks;
  };
  
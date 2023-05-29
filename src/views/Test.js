const Test = () => {
    function numberGenerator() {
        // Local “free” variable that ends up within the closure
        var num = 1;
        function checkNumber() {
          console.log(num);
        }
        num++;
      
        return checkNumber;
      }
      
      var number = numberGenerator();
      number();
      return(<>
      Hiep {number()}</>)
}
export default Test;
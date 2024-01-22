const emilyRoute = (req, res) => {
  res.send("emily Birch");
};
 
const williamRoute = (req, res) => {
    res.send("William Birch");
  };

const sarahRoute = (req, res) => {
    res.send("Sarah Birch");
  };
   
module.exports ={
    emilyRoute,
    williamRoute,
    sarahRoute
};
module.exports = (Bacon, enteringShips, destroyerPosition) => {
  return {
    ships: enteringShips.map(ship => ship.type === 'zrrk'?1:0),           // Your ship counter goes here
    threat: destroyerPosition.map(distance => {
      if(distance > 5)
        return "low";
      else if (distance > 2)
        return "medium";
      else if (distance > 1)
        return "high";
      else
        return "extreme";
    }),          // Your threat level goes here
    postArrivalShips: void 0 // Your ship counter post arrival goes here
  };
};


//Not Completed

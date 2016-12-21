// Export method as a module.
module.exports = (Bacon) => {
  const bus = new Bacon.Bus();
  setTimeout(() => bus.push("Bacon"),parseInt(Math.random()*10));
  setTimeout(() => bus.push("is"),parseInt(Math.random()*100));
  setTimeout(() => bus.push("delicious"),parseInt(Math.random()*1000));
  setTimeout(() => bus.end(),parseInt(Math.random()*1000+1000));
  return bus;
};

function generate(ObjectClass, ammount) {
  const objects = [];
  for (let i = 0; i < ammount; i++) {
    objects.push(new ObjectClass());
  }
  return objects;
}

function generateXPos(ObjectClass, xPosArray) {
  const objects = [];
  for (let i = 0; i < xPosArray.length; i++) {
    objects.push(new ObjectClass(xPosArray[i]));
  }
  return objects;
}

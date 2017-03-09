function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var answer = str.substr(-1);
  if (answer == target || str.substr(-4) == target)
  {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");

function all_caps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}


/*

or

function all_caps(string) {
  return string.length > 10 ? string.toUpperCase() : string;
}

all_caps('superpollettolo');

/*
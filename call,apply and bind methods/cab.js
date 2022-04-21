//  example for call method
let items = {
  a: 12,
  b: 15,
};

function Addmultiples(c, d) {
  return this.a + this.b + c + d;
}

let Allvalues = Addmultiples.call(items, 10, 10);

console.log(Allvalues);

// example for apply method

let tems = {
  e: 12,
  f: 15,
};

function Addwithapply(g, h) {
  return this.e + this.f + g + h;
}

let applyvalues = Addwithapply.apply(tems, [10, 20]);

console.log(applyvalues);

// example for bind method

let ems = {
  i: 10,
  j: 20,
};

function withBind(k, l) {
  return this.i + this.j + k + l;
}

let bindvalue = withBind.bind(ems, [20, 30]);

console.log(withBind);
console.log(bindvalue);

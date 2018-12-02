const genSeq = function*(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
};

const genCube = function*(dimH, dimW) {
  for (let i = 0; i < dimH; i++) {
    const row = genSeq(i * dimW + 1, dimW * (i + 1) + 1);
    console.log(...row);
    yield* row;
  }
};

const a = genCube(5, 10);
console.log(...a);

function mazeSolution(maze,H,W) {
  let step = H*W
  let now = ['0,0']
  let past = []
  let [ex, ey] = [W-1, H-1]
  for (let j = 0; j < step; j++) {
    let il = now.length
    for (let i = 0; i < il; i++) {
      let [x, y] = now[0].split(',').map(Number)
      let [tx, ty] = [0, 0]
      tx = x+1
      ty = y
      if ((tx < W) && (tx > -1) && (ty < H) && (ty > -1) && (maze[ty][tx] !== '#') && (past.indexOf(tx +','+ty) == -1)) {
      	now.push(tx+','+ty) 
      }
      tx = x-1
      ty = y
      if ((tx < W) && (tx > -1) && (ty < H) && (ty > -1) && (maze[ty][tx] !== '#') && (past.indexOf(tx +','+ty) == -1)) {
        now.push(tx+','+ty)
      }
      tx = x
      ty = y+1
      if ((tx < W) && (tx > -1) && (ty < H) && (ty > -1) && (maze[ty][tx] !== '#') && (past.indexOf(tx +','+ty) == -1)) {
      	now.push(tx+','+ty) 
      }
      tx = x
      ty = y-1
      if ((tx < W) && (tx > -1) && (ty < H) && (ty > -1) && (maze[ty][tx] !== '#') && (past.indexOf(tx +','+ty) == -1)) {
        now.push(tx+','+ty) 
      }
      past.push(now.shift())
    }
    if (now.indexOf(ex+','+ey) != -1) {
        step = j+1
	    console.log(step)
    }
  }
}

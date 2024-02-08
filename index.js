let cool = []
cool1 = []
cool2 = []
cool3 = []
let yspacing
inv = fxrand() < .01 ? true : false;
miding = fxrand() < .15 ? true : false;
sd = fxrand() <.7 ? true : false;
function setup() {
    createCanvas(3000, 3000);
    noiseSeed(fxrand()*1000)
    strokeCap(SQUARE)
    background(fxrand()<.1?0:255)
    angleMode(DEGREES)
    // blendMode(DIFFERENCE)
    cool1 = createColor()
    cool2 = createColor()
    cool3 = createColor()
    cool = cool1


    if (miding) {
        strokeWeight(10)
        background(fxrand()<.5?255:0)
    }
    bgc = cool[9]
    bgc.setAlpha(100)
    background(bgc)
  
    if (inv) { background(0), noFill(), stroke(0), strokeWeight(3) }
    sfx = fxrand()
    spacing = sfx<.05?1000:sfx<.1?500:fxrand()<.7?map(fxrand(),0,1,200,1000):2000*fxrand()+100
    yspacing = fxrand()<.4?spacing/(fxrand()+1):spacing/(fxrand()<.8?(fxrand()<.5?1:2):map(fxrand(),0,1,3,10))

    if(miding|| inv) yspacing = spacing
    bs = sfx<.05?500:sfx<.1?300:fxrand() < .7 ? spacing / 2 : spacing+spacing * fxrand() //boxsize
    ss = sfx<.05?250:sfx<.1?50:fxrand() < .8 ? bs/(fxrand()*4+2) : bs/2 * fxrand() + bs / 6//armwidth
    
    ycount = 0
    adj = fxrand() < .7 ? spacing / 2 : spacing * fxrand()

    console.log(spacing,yspacing,bs,ss)
    scl = .01 * fxrand()
    yscl = .01 * fxrand()
    push()
    translate(width / 2, height / 2)
    ro = fxrand()
    rotate((fxrand()<.5?-1:1)*(ro<.6?0:ro<.7?45:ro<.8?90:ro<.7?135:fxrand()*360))
    translate(-width / 2, -height / 2)

    for (var x = 10*(-spacing / 2); x < width + spacing*10; x += spacing) {
        ycount = 0
        for (var y = 10*(-spacing / 2); y < height + spacing*10; y += yspacing) {
            n = noise(x * scl, y * yscl)
            if (n < .3) {
                cool = cool1
            } else if (n < .1) {
                cool = cool2
            }
            else {
                cool = cool3
            }
            ycount += 1
            if (ycount % 2 == 0) {
                drawcubes(ss, bs, x, y)
            } else {
                drawcubes(ss, bs, x + adj, y)
            }



        }
    }
    pop()


//  saveCanvas(fxhash,"png")
   console.log(fxhash)

    newcanv = new p5(newcanva);//create then remove old canvas
   
}
function createColor() {
    let coo = []
    color1 = fxrand()
    color2 = fxrand()
    al = 255
    if (color2 < .7) {
        cc = fxrand()
    }
    if (color1 < .5) {
        m1 = map(fxrand(), 0, 1, 75, 150);
        m2 = map(fxrand(), 0, 1, 100, 175);
    }
    for (z = 0; z < 10; z++) {
        if (color2 > .7) {
            cc = fxrand()
        }
        if (color1 > .5) {
            m1 = map(fxrand(), 0, 1, 75, 150);
            m2 = map(fxrand(), 0, 1, 100, 175);
        }
        // }
        r1 = fxrand();
        r2 = fxrand()
        r3 = fxrand()
        
        if (cc < .33) {
            cr = 1
        } else if (cc < .66) {
            cr = 2
        } else if (cc < 1) {
            cr = 3
        }
        switch (cr) {
            case 1:
                coo[z] = color(r1 * m1, r2 * m1 + m2, r3 * m1 + m2, al);
                break;
            case 2:
                coo[z] = color(r1 * m1 + m2, r2 * m1, r3 * m1 + m2 , al);
                break;
            case 3:
                coo[z] = color(r1 * m1 + m2, r2 * m1 + m2, r3 * m1, al);
                break;
        }
    }
    return coo
}

sw = fxrand()<.7?10:20*fxrand()+5
swc = Math.floor(fxrand()*cool.length)
swd = fxrand()<.3?true:false
function drawcubes(sl, bl, x, y) {
    elength = bl
    slength = sl
    noStroke()
    ml = elength
    if (fxrand() < .5) {
        push()
        translate(x, y)
        rotate(90 * fxrand())

        pop()

    }
    fill(cool[0])
ts = fxrand()<.5?cool:cool1
    if(sd){swd?stroke(ts[Math.floor(fxrand()*ts.length)]):stroke(ts[swc]), strokeWeight(sw)}
    if (miding) { noFill(), stroke(cool[0]) }
    if (inv) { noFill(), stroke(255), strokeWeight(3) }
   
    beginShape()//top
    vertex(x, y)
    vertex(x + elength, y - elength / 2)
    vertex(x, y - elength)
    vertex(x - elength, y - elength / 2)
    vertex(x, y)
    endShape()
    fill(cool[1])
    if (miding) { noFill(), stroke(cool[1]) }
    if (inv) { noFill(), stroke(255) }
    beginShape()//left
    vertex(x, y)
    vertex(x - elength, y - elength / 2)
    vertex(x - elength, y + elength / 2)
    vertex(x, y + elength)
    vertex(x, y)
    endShape()
    fill(cool[2])
    if (miding) { noFill(), stroke(cool[2]) }
    if (inv) { noFill(), stroke(255) }
    beginShape()//right
    vertex(x, y)
    vertex(x + elength, y - elength / 2)
    vertex(x + elength, y + elength / 2)
    vertex(x, y + elength)
    vertex(x, y)
    endShape()


    fill(cool[3])
    if (miding) { noFill(), stroke(cool[3]) }
    if (inv) { noFill(), stroke(255) }
    push()
    translate(0, -elength / 1.75)
    //topmini
    beginShape()//left
    vertex(x, y - ml)
    vertex(x - slength, y - slength / 2 - ml)
    vertex(x - slength, y + slength / 2)
    vertex(x, y + slength)
    vertex(x, y - ml)
    endShape()
    fill(cool[4])
    if (miding) { noFill(), stroke(cool[4]) }
    if (inv) { noFill(), stroke(255) }
    beginShape()//right
    vertex(x, y - ml)
    vertex(x + slength, y - slength / 2 - ml)
    vertex(x + slength, y + slength / 2)
    vertex(x, y + slength)
    vertex(x, y - ml)
    endShape()
    pop()

    fill(cool[5])
    if (miding) { noFill(), stroke(cool[5]) }
    if (inv) { noFill(), stroke(255) }
    push()
    translate(-elength / 1.75, elength * .25)
    //leftmini
    beginShape()//top
    vertex(x - ml, y + slength * 2)
    vertex(x + slength, y - slength / 2)
    vertex(x, y - slength)
    vertex(x - slength - ml, y - slength / 2 + slength * 2)
    vertex(x - ml, y + slength * 2)
    endShape()
    fill(cool[6])
    if (miding) { noFill(), stroke(cool[6]) }
    if (inv) { noFill(), stroke(255) }
    beginShape()//right
    vertex(x - ml, y + slength * 2)
    vertex(x + slength, y - slength / 2)
    vertex(x + slength, y + slength / 2)
    vertex(x - ml, y + slength + slength * 2)
    vertex(x - ml, y + slength * 2)
    endShape()
    pop()
    fill(cool[7])
    if (miding) { noFill(), stroke(cool[7]) }
    if (inv) { noFill(), stroke(255) }
    push()
    translate(+elength / 1.75, elength * .25)
    //righthmini
    beginShape()//top
    vertex(x + ml, y + slength * 2)
    vertex(x + slength + ml, y - slength / 2 + slength * 2)
    vertex(x, y - slength)
    vertex(x - slength, y - slength / 2)
    vertex(x + ml, y + slength * 2)
    endShape()
    fill(cool[8])
    if (miding) { noFill(), stroke(cool1[8]) }
    if (inv) { noFill(), stroke(255) }
    beginShape()//left
    vertex(x + ml, y + slength * 2)
    vertex(x - slength, y - slength / 2)
    vertex(x - slength, y + slength / 2)
    vertex(x + ml, y + slength + slength * 2)
    vertex(x + ml, y + slength * 2)
    endShape()
    pop()
}
sor =["sorry:/","i tried my best","oopsie","rare...","well so do u but you didnt see me mentioning it.","k"]
window.$fxhashFeatures = {
    "inverse": inv,
    "color inverse?": miding,
    "stroke?": sd,
    "palette": "yes there is one i think",
    "will these be signed/work properly/show anything?": "i hope so, pls",
    "hey this looks bad": sor[Math.floor(fxrand()*sor.length)],
}
let maincopy
let newcanva = function (p) {

    p.setup = function () {
      p.createCanvas(min(window.innerWidth,window.innerHeight), min(window.innerWidth,window.innerHeight));
      maincopy = p.get()
      p.copy(get(), 0, 0, width, height, 0 , 0 , p.width , p.height) //place in new canvas

      document.getElementById("defaultCanvas0").style.display = "none"//remove main canvas
      fxpreview()
   
   
    };
  
};
  
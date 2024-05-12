
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     /static/model/male0001.png
     /static/model/male0002.png
     /static/model/male0003.png
     /static/model/male0004.png
     /static/model/male0005.png
     /static/model/male0006.png
     /static/model/male0007.png
     /static/model/male0008.png
     /static/model/male0009.png
     /static/model/male0010.png
     /static/model/male0011.png
     /static/model/male0012.png
     /static/model/male0013.png
     /static/model/male0014.png
     /static/model/male0015.png
     /static/model/male0016.png
     /static/model/male0017.png
     /static/model/male0018.png
     /static/model/male0019.png
     /static/model/male0020.png
     /static/model/male0021.png
     /static/model/male0022.png
     /static/model/male0023.png
     /static/model/male0024.png
     /static/model/male0025.png
     /static/model/male0026.png
     /static/model/male0027.png
     /static/model/male0028.png
     /static/model/male0029.png
     /static/model/male0030.png
     /static/model/male0031.png
     /static/model/male0032.png
     /static/model/male0033.png
     /static/model/male0034.png
     /static/model/male0035.png
     /static/model/male0036.png
     /static/model/male0037.png
     /static/model/male0038.png
     /static/model/male0039.png
     /static/model/male0040.png
     /static/model/male0041.png
     /static/model/male0042.png
     /static/model/male0043.png
     /static/model/male0044.png
     /static/model/male0045.png
     /static/model/male0046.png
     /static/model/male0047.png
     /static/model/male0048.png
     /static/model/male0049.png
     /static/model/male0050.png
     /static/model/male0051.png
     /static/model/male0052.png
     /static/model/male0053.png
     /static/model/male0054.png
     /static/model/male0055.png
     /static/model/male0056.png
     /static/model/male0057.png
     /static/model/male0058.png
     /static/model/male0059.png
     /static/model/male0060.png
     /static/model/male0061.png
     /static/model/male0062.png
     /static/model/male0063.png
     /static/model/male0064.png
     /static/model/male0065.png
     /static/model/male0066.png
     /static/model/male0067.png
     /static/model/male0068.png
     /static/model/male0069.png
     /static/model/male0070.png
     /static/model/male0071.png
     /static/model/male0072.png
     /static/model/male0073.png
     /static/model/male0074.png
     /static/model/male0075.png
     /static/model/male0076.png
     /static/model/male0077.png
     /static/model/male0078.png
     /static/model/male0079.png
     /static/model/male0080.png
     /static/model/male0081.png
     /static/model/male0082.png
     /static/model/male0083.png
     /static/model/male0084.png
     /static/model/male0085.png
     /static/model/male0086.png
     /static/model/male0087.png
     /static/model/male0088.png
     /static/model/male0089.png
     /static/model/male0090.png
     /static/model/male0091.png
     /static/model/male0092.png
     /static/model/male0093.png
     /static/model/male0094.png
     /static/model/male0095.png
     /static/model/male0096.png
     /static/model/male0097.png
     /static/model/male0098.png
     /static/model/male0099.png
     /static/model/male0100.png
     /static/model/male0101.png
     /static/model/male0102.png
     /static/model/male0103.png
     /static/model/male0104.png
     /static/model/male0105.png
     /static/model/male0106.png
     /static/model/male0107.png
     /static/model/male0108.png
     /static/model/male0109.png
     /static/model/male0110.png
     /static/model/male0111.png
     /static/model/male0112.png
     /static/model/male0113.png
     /static/model/male0114.png
     /static/model/male0115.png
     /static/model/male0116.png
     /static/model/male0117.png
     /static/model/male0118.png
     /static/model/male0119.png
     /static/model/male0120.png
     /static/model/male0121.png
     /static/model/male0122.png
     /static/model/male0123.png
     /static/model/male0124.png
     /static/model/male0125.png
     /static/model/male0126.png
     /static/model/male0127.png
     /static/model/male0128.png
     /static/model/male0129.png
     /static/model/male0130.png
     /static/model/male0131.png
     /static/model/male0132.png
     /static/model/male0133.png
     /static/model/male0134.png
     /static/model/male0135.png
     /static/model/male0136.png
     /static/model/male0137.png
     /static/model/male0138.png
     /static/model/male0139.png
     /static/model/male0140.png
     /static/model/male0141.png
     /static/model/male0142.png
     /static/model/male0143.png
     /static/model/male0144.png
     /static/model/male0145.png
     /static/model/male0146.png
     /static/model/male0147.png
     /static/model/male0148.png
     /static/model/male0149.png
     /static/model/male0150.png
     /static/model/male0151.png
     /static/model/male0152.png
     /static/model/male0153.png
     /static/model/male0154.png
     /static/model/male0155.png
     /static/model/male0156.png
     /static/model/male0157.png
     /static/model/male0158.png
     /static/model/male0159.png
     /static/model/male0160.png
     /static/model/male0161.png
     /static/model/male0162.png
     /static/model/male0163.png
     /static/model/male0164.png
     /static/model/male0165.png
     /static/model/male0166.png
     /static/model/male0167.png
     /static/model/male0168.png
     /static/model/male0169.png
     /static/model/male0170.png
     /static/model/male0171.png
     /static/model/male0172.png
     /static/model/male0173.png
     /static/model/male0174.png
     /static/model/male0175.png
     /static/model/male0176.png
     /static/model/male0177.png
     /static/model/male0178.png
     /static/model/male0179.png
     /static/model/male0180.png
     /static/model/male0181.png
     /static/model/male0182.png
     /static/model/male0183.png
     /static/model/male0184.png
     /static/model/male0185.png
     /static/model/male0186.png
     /static/model/male0187.png
     /static/model/male0188.png
     /static/model/male0189.png
     /static/model/male0190.png
     /static/model/male0191.png
     /static/model/male0192.png
     /static/model/male0193.png
     /static/model/male0194.png
     /static/model/male0195.png
     /static/model/male0196.png
     /static/model/male0197.png
     /static/model/male0198.png
     /static/model/male0199.png
     /static/model/male0200.png
     /static/model/male0201.png
     /static/model/male0202.png
     /static/model/male0203.png
     /static/model/male0204.png
     /static/model/male0205.png
     /static/model/male0206.png
     /static/model/male0207.png
     /static/model/male0208.png
     /static/model/male0209.png
     /static/model/male0210.png
     /static/model/male0211.png
     /static/model/male0212.png
     /static/model/male0213.png
     /static/model/male0214.png
     /static/model/male0215.png
     /static/model/male0216.png
     /static/model/male0217.png
     /static/model/male0218.png
     /static/model/male0219.png
     /static/model/male0220.png
     /static/model/male0221.png
     /static/model/male0222.png
     /static/model/male0223.png
     /static/model/male0224.png
     /static/model/male0225.png
     /static/model/male0226.png
     /static/model/male0227.png
     /static/model/male0228.png
     /static/model/male0229.png
     /static/model/male0230.png
     /static/model/male0231.png
     /static/model/male0232.png
     /static/model/male0233.png
     /static/model/male0234.png
     /static/model/male0235.png
     /static/model/male0236.png
     /static/model/male0237.png
     /static/model/male0238.png
     /static/model/male0239.png
     /static/model/male0240.png
     /static/model/male0241.png
     /static/model/male0242.png
     /static/model/male0243.png
     /static/model/male0244.png
     /static/model/male0245.png
     /static/model/male0246.png
     /static/model/male0247.png
     /static/model/male0248.png
     /static/model/male0249.png
     /static/model/male0250.png
     /static/model/male0251.png
     /static/model/male0252.png
     /static/model/male0253.png
     /static/model/male0254.png
     /static/model/male0255.png
     /static/model/male0256.png
     /static/model/male0257.png
     /static/model/male0258.png
     /static/model/male0259.png
     /static/model/male0260.png
     /static/model/male0261.png
     /static/model/male0262.png
     /static/model/male0263.png
     /static/model/male0264.png
     /static/model/male0265.png
     /static/model/male0266.png
     /static/model/male0267.png
     /static/model/male0268.png
     /static/model/male0269.png
     /static/model/male0270.png
     /static/model/male0271.png
     /static/model/male0272.png
     /static/model/male0273.png
     /static/model/male0274.png
     /static/model/male0275.png
     /static/model/male0276.png
     /static/model/male0277.png
     /static/model/male0278.png
     /static/model/male0279.png
     /static/model/male0280.png
     /static/model/male0281.png
     /static/model/male0282.png
     /static/model/male0283.png
     /static/model/male0284.png
     /static/model/male0285.png
     /static/model/male0286.png
     /static/model/male0287.png
     /static/model/male0288.png
     /static/model/male0289.png
     /static/model/male0290.png
     /static/model/male0291.png
     /static/model/male0292.png
     /static/model/male0293.png
     /static/model/male0294.png
     /static/model/male0295.png
     /static/model/male0296.png
     /static/model/male0297.png
     /static/model/male0298.png
     /static/model/male0299.png
     /static/model/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})